import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useColorScheme } from 'react-native';

import {
  getTranslationDictionary,
  type TranslationDictionary,
} from '../i18n';
import {
  addDefeatedBossId,
  clearProgress,
  defaultSettings,
  loadDefeatedBossIds,
  loadSettings,
  removeDefeatedBossId,
  restoreDefaultSettings,
  saveSettings,
} from '../storage';
import {
  darkTheme,
  lightTheme,
  resolveTheme,
  type AppTheme,
  type ResolvedTheme,
} from '../theme';
import type { Language, Settings, ThemePreference } from '../types';

interface AppProviderProps {
  children: ReactNode;
}

interface ProviderRuntime {
  isMounted: boolean;
  hydrationGeneration: number;
  settingsQueue: Promise<void>;
  progressQueue: Promise<void>;
  currentSettings: Settings;
  currentDefeatedBossIds: string[];
  currentDefeatedBossIdSet: ReadonlySet<string>;
}

type QueueKey = 'settingsQueue' | 'progressQueue';

export interface AppContextValue {
  settings: Readonly<Settings>;
  language: Language;
  themePreference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  theme: AppTheme;
  translations: TranslationDictionary;
  defeatedBossIds: readonly string[];
  defeatedBossCount: number;
  isHydrated: boolean;
  initializationError: Error | null;
  setLanguage: (language: Language) => Promise<void>;
  setThemePreference: (preference: ThemePreference) => Promise<void>;
  markBossDefeated: (id: string) => Promise<void>;
  markBossNotDefeated: (id: string) => Promise<void>;
  toggleBossDefeated: (id: string) => Promise<void>;
  isBossDefeated: (id: string) => Promise<boolean>;
  resetProgress: () => Promise<void>;
  resetSettings: () => Promise<void>;
  retryInitialization: () => Promise<void>;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);

function enqueueAction(
  runtime: ProviderRuntime,
  queueKey: QueueKey,
  operation: () => Promise<void>,
): Promise<void> {
  const result = runtime[queueKey].then(operation, operation);
  runtime[queueKey] = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
}

function requireBossId(id: string): string {
  const normalizedId = id.trim();

  if (normalizedId.length === 0) {
    throw new TypeError('Boss ID must be a non-empty string.');
  }

  return normalizedId;
}

function createContextError(message: string, cause: unknown): Error {
  return new Error(message, { cause });
}

export function AppProvider({ children }: AppProviderProps) {
  const systemColorScheme = useColorScheme();
  const [settings, setSettings] = useState<Settings>(() => ({
    ...defaultSettings,
  }));
  const [defeatedBossIds, setDefeatedBossIds] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [initializationError, setInitializationError] = useState<Error | null>(
    null,
  );
  const [runtime] = useState<ProviderRuntime>(() => ({
    isMounted: true,
    hydrationGeneration: 0,
    settingsQueue: Promise.resolve(),
    progressQueue: Promise.resolve(),
    currentSettings: { ...defaultSettings },
    currentDefeatedBossIds: [],
    currentDefeatedBossIdSet: new Set<string>(),
  }));

  const hydrate = useCallback(async (): Promise<void> => {
    const generation = runtime.hydrationGeneration + 1;
    runtime.hydrationGeneration = generation;

    if (runtime.isMounted) {
      setIsHydrated(false);
      setInitializationError(null);
    }

    try {
      await Promise.all([runtime.settingsQueue, runtime.progressQueue]);

      const [loadedSettings, loadedDefeatedBossIds] = await Promise.all([
        loadSettings(),
        loadDefeatedBossIds(),
      ]);

      if (
        !runtime.isMounted ||
        runtime.hydrationGeneration !== generation
      ) {
        return;
      }

      runtime.currentSettings = loadedSettings;
      runtime.currentDefeatedBossIds = loadedDefeatedBossIds;
      runtime.currentDefeatedBossIdSet = new Set(loadedDefeatedBossIds);
      setSettings(loadedSettings);
      setDefeatedBossIds(loadedDefeatedBossIds);
    } catch (error: unknown) {
      if (
        runtime.isMounted &&
        runtime.hydrationGeneration === generation
      ) {
        setInitializationError(
          createContextError('Failed to initialize application data.', error),
        );
      }
    } finally {
      if (
        runtime.isMounted &&
        runtime.hydrationGeneration === generation
      ) {
        setIsHydrated(true);
      }
    }
  }, [runtime]);

  useEffect(() => {
    runtime.isMounted = true;
    void hydrate();

    return () => {
      runtime.isMounted = false;
      runtime.hydrationGeneration += 1;
    };
  }, [hydrate, runtime]);

  const setLanguage = useCallback(
    async (language: Language): Promise<void> =>
      enqueueAction(runtime, 'settingsQueue', async () => {
        const previousSettings = runtime.currentSettings;

        if (previousSettings.language === language) {
          return;
        }

        const nextSettings: Settings = {
          ...previousSettings,
          language,
        };

        runtime.currentSettings = nextSettings;
        if (runtime.isMounted) {
          setSettings(nextSettings);
        }

        try {
          await saveSettings(nextSettings);
        } catch (error: unknown) {
          runtime.currentSettings = previousSettings;
          if (runtime.isMounted) {
            setSettings(previousSettings);
          }
          throw createContextError('Failed to update language.', error);
        }
      }),
    [runtime],
  );

  const setThemePreference = useCallback(
    async (preference: ThemePreference): Promise<void> =>
      enqueueAction(runtime, 'settingsQueue', async () => {
        const previousSettings = runtime.currentSettings;

        if (previousSettings.theme === preference) {
          return;
        }

        const nextSettings: Settings = {
          ...previousSettings,
          theme: preference,
        };

        runtime.currentSettings = nextSettings;
        if (runtime.isMounted) {
          setSettings(nextSettings);
        }

        try {
          await saveSettings(nextSettings);
        } catch (error: unknown) {
          runtime.currentSettings = previousSettings;
          if (runtime.isMounted) {
            setSettings(previousSettings);
          }
          throw createContextError('Failed to update theme preference.', error);
        }
      }),
    [runtime],
  );

  const updateBossDefeatedState = useCallback(
    async (
      id: string,
      nextDefeatedState: boolean | 'toggle',
    ): Promise<void> => {
      const normalizedId = requireBossId(id);

      return enqueueAction(runtime, 'progressQueue', async () => {
        const previousIds = runtime.currentDefeatedBossIds;
        const previousIdSet = runtime.currentDefeatedBossIdSet;
        const wasDefeated = previousIdSet.has(normalizedId);
        const shouldBeDefeated =
          nextDefeatedState === 'toggle'
            ? !wasDefeated
            : nextDefeatedState;

        if (wasDefeated === shouldBeDefeated) {
          return;
        }

        const nextIds = shouldBeDefeated
          ? [...previousIds, normalizedId]
          : previousIds.filter((currentId) => currentId !== normalizedId);

        runtime.currentDefeatedBossIds = nextIds;
        runtime.currentDefeatedBossIdSet = new Set(nextIds);
        if (runtime.isMounted) {
          setDefeatedBossIds(nextIds);
        }

        try {
          if (shouldBeDefeated) {
            await addDefeatedBossId(normalizedId);
          } else {
            await removeDefeatedBossId(normalizedId);
          }
        } catch (error: unknown) {
          runtime.currentDefeatedBossIds = previousIds;
          runtime.currentDefeatedBossIdSet = previousIdSet;
          if (runtime.isMounted) {
            setDefeatedBossIds(previousIds);
          }
          throw createContextError('Failed to update boss progress.', error);
        }
      });
    },
    [runtime],
  );

  const markBossDefeated = useCallback(
    (id: string): Promise<void> => updateBossDefeatedState(id, true),
    [updateBossDefeatedState],
  );

  const markBossNotDefeated = useCallback(
    (id: string): Promise<void> => updateBossDefeatedState(id, false),
    [updateBossDefeatedState],
  );

  const toggleBossDefeated = useCallback(
    (id: string): Promise<void> => updateBossDefeatedState(id, 'toggle'),
    [updateBossDefeatedState],
  );

  const isBossDefeated = useCallback(
    async (id: string): Promise<boolean> => {
      const normalizedId = id.trim();

      if (normalizedId.length === 0) {
        return false;
      }

      await runtime.progressQueue;
      return runtime.currentDefeatedBossIdSet.has(normalizedId);
    },
    [runtime],
  );

  const resetProgress = useCallback(
    async (): Promise<void> =>
      enqueueAction(runtime, 'progressQueue', async () => {
        try {
          await clearProgress();
        } catch (error: unknown) {
          throw createContextError('Failed to reset boss progress.', error);
        }

        runtime.currentDefeatedBossIds = [];
        runtime.currentDefeatedBossIdSet = new Set<string>();
        if (runtime.isMounted) {
          setDefeatedBossIds([]);
        }
      }),
    [runtime],
  );

  const resetSettings = useCallback(
    async (): Promise<void> =>
      enqueueAction(runtime, 'settingsQueue', async () => {
        try {
          await restoreDefaultSettings();
        } catch (error: unknown) {
          throw createContextError('Failed to restore default settings.', error);
        }

        const restoredSettings: Settings = { ...defaultSettings };
        runtime.currentSettings = restoredSettings;
        if (runtime.isMounted) {
          setSettings(restoredSettings);
        }
      }),
    [runtime],
  );

  const retryInitialization = useCallback(
    async (): Promise<void> => hydrate(),
    [hydrate],
  );

  const language = settings.language;
  const themePreference = settings.theme;
  const resolvedTheme = useMemo(
    () => resolveTheme(themePreference, systemColorScheme),
    [systemColorScheme, themePreference],
  );
  const theme = useMemo(
    () => (resolvedTheme === 'dark' ? darkTheme : lightTheme),
    [resolvedTheme],
  );
  const translationDictionary = useMemo(
    () => getTranslationDictionary(language),
    [language],
  );

  const contextValue = useMemo<AppContextValue>(
    () => ({
      settings,
      language,
      themePreference,
      resolvedTheme,
      theme,
      translations: translationDictionary,
      defeatedBossIds,
      defeatedBossCount: defeatedBossIds.length,
      isHydrated,
      initializationError,
      setLanguage,
      setThemePreference,
      markBossDefeated,
      markBossNotDefeated,
      toggleBossDefeated,
      isBossDefeated,
      resetProgress,
      resetSettings,
      retryInitialization,
    }),
    [
      defeatedBossIds,
      initializationError,
      isBossDefeated,
      isHydrated,
      language,
      markBossDefeated,
      markBossNotDefeated,
      resetProgress,
      resetSettings,
      resolvedTheme,
      retryInitialization,
      setLanguage,
      setThemePreference,
      settings,
      theme,
      themePreference,
      toggleBossDefeated,
      translationDictionary,
    ],
  );

  if (!isHydrated) {
    return null;
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

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
  calculateAshOfWarProgress,
  calculateBossCatalogProgress,
  calculateCombinedProgress,
  calculateIncantationProgress,
  calculateSorceryProgress,
  type CompletionProgress,
} from '../data';
import {
  addCollectedAshOfWarId,
  addCollectedIncantationId,
  addCollectedSorceryId,
  addDefeatedBossId,
  clearProgress,
  defaultSettings,
  loadCollectedAshOfWarIds,
  loadCollectedIncantationIds,
  loadCollectedSorceryIds,
  loadDefeatedBossIds,
  loadSettings,
  removeCollectedAshOfWarId,
  removeCollectedIncantationId,
  removeCollectedSorceryId,
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
  currentCollectedAshOfWarIds: string[];
  currentCollectedAshOfWarIdSet: ReadonlySet<string>;
  currentCollectedSorceryIds: string[];
  currentCollectedSorceryIdSet: ReadonlySet<string>;
  currentCollectedIncantationIds: string[];
  currentCollectedIncantationIdSet: ReadonlySet<string>;
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
  collectedAshOfWarIds: readonly string[];
  collectedSorceryIds: readonly string[];
  collectedIncantationIds: readonly string[];
  defeatedBossCount: number;
  bossProgress: CompletionProgress;
  ashOfWarProgress: CompletionProgress;
  sorceryProgress: CompletionProgress;
  incantationProgress: CompletionProgress;
  combinedProgress: CompletionProgress;
  isHydrated: boolean;
  initializationError: Error | null;
  setLanguage: (language: Language) => Promise<void>;
  setThemePreference: (preference: ThemePreference) => Promise<void>;
  markBossDefeated: (id: string) => Promise<void>;
  markBossNotDefeated: (id: string) => Promise<void>;
  toggleBossDefeated: (id: string) => Promise<void>;
  isBossDefeated: (id: string) => Promise<boolean>;
  markAshOfWarCollected: (id: string) => Promise<void>;
  markAshOfWarNotCollected: (id: string) => Promise<void>;
  toggleAshOfWarCollected: (id: string) => Promise<void>;
  isAshOfWarCollected: (id: string) => Promise<boolean>;
  toggleSorceryCollected: (id: string) => Promise<void>;
  toggleIncantationCollected: (id: string) => Promise<void>;
  isSorceryCollected: (id: string) => Promise<boolean>;
  isIncantationCollected: (id: string) => Promise<boolean>;
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

function requireProgressId(id: string, label: string): string {
  const normalizedId = id.trim();

  if (normalizedId.length === 0) {
    throw new TypeError(`${label} ID must be a non-empty string.`);
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
  const [collectedAshOfWarIds, setCollectedAshOfWarIds] = useState<string[]>([]);
  const [collectedSorceryIds, setCollectedSorceryIds] = useState<string[]>([]);
  const [collectedIncantationIds, setCollectedIncantationIds] = useState<string[]>([]);
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
    currentCollectedAshOfWarIds: [],
    currentCollectedAshOfWarIdSet: new Set<string>(),
    currentCollectedSorceryIds: [],
    currentCollectedSorceryIdSet: new Set<string>(),
    currentCollectedIncantationIds: [],
    currentCollectedIncantationIdSet: new Set<string>(),
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

      const [
        loadedSettings,
        loadedDefeatedBossIds,
        loadedCollectedAshOfWarIds,
        loadedCollectedSorceryIds,
        loadedCollectedIncantationIds,
      ] = await Promise.all([
        loadSettings(),
        loadDefeatedBossIds(),
        loadCollectedAshOfWarIds(),
        loadCollectedSorceryIds(),
        loadCollectedIncantationIds(),
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
      runtime.currentCollectedAshOfWarIds = loadedCollectedAshOfWarIds;
      runtime.currentCollectedAshOfWarIdSet = new Set(
        loadedCollectedAshOfWarIds,
      );
      runtime.currentCollectedSorceryIds = loadedCollectedSorceryIds;
      runtime.currentCollectedSorceryIdSet = new Set(loadedCollectedSorceryIds);
      runtime.currentCollectedIncantationIds = loadedCollectedIncantationIds;
      runtime.currentCollectedIncantationIdSet = new Set(loadedCollectedIncantationIds);
      setSettings(loadedSettings);
      setDefeatedBossIds(loadedDefeatedBossIds);
      setCollectedAshOfWarIds(loadedCollectedAshOfWarIds);
      setCollectedSorceryIds(loadedCollectedSorceryIds);
      setCollectedIncantationIds(loadedCollectedIncantationIds);
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
      const normalizedId = requireProgressId(id, 'Boss');

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

  const updateAshOfWarCollectedState = useCallback(
    async (
      id: string,
      nextCollectedState: boolean | 'toggle',
    ): Promise<void> => {
      const normalizedId = requireProgressId(id, 'Ash of War');

      return enqueueAction(runtime, 'progressQueue', async () => {
        const previousIds = runtime.currentCollectedAshOfWarIds;
        const previousIdSet = runtime.currentCollectedAshOfWarIdSet;
        const wasCollected = previousIdSet.has(normalizedId);
        const shouldBeCollected =
          nextCollectedState === 'toggle'
            ? !wasCollected
            : nextCollectedState;

        if (wasCollected === shouldBeCollected) return;

        const nextIds = shouldBeCollected
          ? [...previousIds, normalizedId]
          : previousIds.filter((currentId) => currentId !== normalizedId);
        runtime.currentCollectedAshOfWarIds = nextIds;
        runtime.currentCollectedAshOfWarIdSet = new Set(nextIds);
        if (runtime.isMounted) setCollectedAshOfWarIds(nextIds);

        try {
          if (shouldBeCollected) {
            await addCollectedAshOfWarId(normalizedId);
          } else {
            await removeCollectedAshOfWarId(normalizedId);
          }
        } catch (error: unknown) {
          runtime.currentCollectedAshOfWarIds = previousIds;
          runtime.currentCollectedAshOfWarIdSet = previousIdSet;
          if (runtime.isMounted) setCollectedAshOfWarIds(previousIds);
          throw createContextError(
            'Failed to update Ash of War progress.',
            error,
          );
        }
      });
    },
    [runtime],
  );

  const markAshOfWarCollected = useCallback(
    (id: string) => updateAshOfWarCollectedState(id, true),
    [updateAshOfWarCollectedState],
  );
  const markAshOfWarNotCollected = useCallback(
    (id: string) => updateAshOfWarCollectedState(id, false),
    [updateAshOfWarCollectedState],
  );
  const toggleAshOfWarCollected = useCallback(
    (id: string) => updateAshOfWarCollectedState(id, 'toggle'),
    [updateAshOfWarCollectedState],
  );
  const isAshOfWarCollected = useCallback(
    async (id: string): Promise<boolean> => {
      const normalizedId = id.trim();
      if (normalizedId.length === 0) return false;
      await runtime.progressQueue;
      return runtime.currentCollectedAshOfWarIdSet.has(normalizedId);
    },
    [runtime],
  );

  const updateSpellCollectedState = useCallback(
    async (
      category: 'sorcery' | 'incantation',
      id: string,
    ): Promise<void> => {
      const normalizedId = requireProgressId(
        id,
        category === 'sorcery' ? 'Sorcery' : 'Incantation',
      );
      return enqueueAction(runtime, 'progressQueue', async () => {
        const isSorcery = category === 'sorcery';
        const previousIds = isSorcery
          ? runtime.currentCollectedSorceryIds
          : runtime.currentCollectedIncantationIds;
        const previousSet = isSorcery
          ? runtime.currentCollectedSorceryIdSet
          : runtime.currentCollectedIncantationIdSet;
        const shouldCollect = !previousSet.has(normalizedId);
        const nextIds = shouldCollect
          ? [...previousIds, normalizedId]
          : previousIds.filter((currentId) => currentId !== normalizedId);

        if (isSorcery) {
          runtime.currentCollectedSorceryIds = nextIds;
          runtime.currentCollectedSorceryIdSet = new Set(nextIds);
          if (runtime.isMounted) setCollectedSorceryIds(nextIds);
        } else {
          runtime.currentCollectedIncantationIds = nextIds;
          runtime.currentCollectedIncantationIdSet = new Set(nextIds);
          if (runtime.isMounted) setCollectedIncantationIds(nextIds);
        }

        try {
          if (isSorcery) {
            await (shouldCollect
              ? addCollectedSorceryId(normalizedId)
              : removeCollectedSorceryId(normalizedId));
          } else {
            await (shouldCollect
              ? addCollectedIncantationId(normalizedId)
              : removeCollectedIncantationId(normalizedId));
          }
        } catch (error: unknown) {
          if (isSorcery) {
            runtime.currentCollectedSorceryIds = previousIds;
            runtime.currentCollectedSorceryIdSet = previousSet;
            if (runtime.isMounted) setCollectedSorceryIds(previousIds);
          } else {
            runtime.currentCollectedIncantationIds = previousIds;
            runtime.currentCollectedIncantationIdSet = previousSet;
            if (runtime.isMounted) setCollectedIncantationIds(previousIds);
          }
          throw createContextError('Failed to update spell progress.', error);
        }
      });
    },
    [runtime],
  );

  const toggleSorceryCollected = useCallback(
    (id: string) => updateSpellCollectedState('sorcery', id),
    [updateSpellCollectedState],
  );
  const toggleIncantationCollected = useCallback(
    (id: string) => updateSpellCollectedState('incantation', id),
    [updateSpellCollectedState],
  );
  const isSorceryCollected = useCallback(async (id: string) => {
    await runtime.progressQueue;
    return runtime.currentCollectedSorceryIdSet.has(id.trim());
  }, [runtime]);
  const isIncantationCollected = useCallback(async (id: string) => {
    await runtime.progressQueue;
    return runtime.currentCollectedIncantationIdSet.has(id.trim());
  }, [runtime]);

  const resetProgress = useCallback(
    async (): Promise<void> =>
      enqueueAction(runtime, 'progressQueue', async () => {
        const previousBossIds = runtime.currentDefeatedBossIds;
        const previousAshIds = runtime.currentCollectedAshOfWarIds;
        const previousSorceryIds = runtime.currentCollectedSorceryIds;
        const previousIncantationIds = runtime.currentCollectedIncantationIds;
        runtime.currentDefeatedBossIds = [];
        runtime.currentDefeatedBossIdSet = new Set<string>();
        runtime.currentCollectedAshOfWarIds = [];
        runtime.currentCollectedAshOfWarIdSet = new Set<string>();
        runtime.currentCollectedSorceryIds = [];
        runtime.currentCollectedSorceryIdSet = new Set<string>();
        runtime.currentCollectedIncantationIds = [];
        runtime.currentCollectedIncantationIdSet = new Set<string>();
        if (runtime.isMounted) {
          setDefeatedBossIds([]);
          setCollectedAshOfWarIds([]);
          setCollectedSorceryIds([]);
          setCollectedIncantationIds([]);
        }
        try {
          await clearProgress();
        } catch (error: unknown) {
          runtime.currentDefeatedBossIds = previousBossIds;
          runtime.currentDefeatedBossIdSet = new Set(previousBossIds);
          runtime.currentCollectedAshOfWarIds = previousAshIds;
          runtime.currentCollectedAshOfWarIdSet = new Set(previousAshIds);
          runtime.currentCollectedSorceryIds = previousSorceryIds;
          runtime.currentCollectedSorceryIdSet = new Set(previousSorceryIds);
          runtime.currentCollectedIncantationIds = previousIncantationIds;
          runtime.currentCollectedIncantationIdSet = new Set(previousIncantationIds);
          if (runtime.isMounted) {
            setDefeatedBossIds(previousBossIds);
            setCollectedAshOfWarIds(previousAshIds);
            setCollectedSorceryIds(previousSorceryIds);
            setCollectedIncantationIds(previousIncantationIds);
          }
          throw createContextError('Failed to reset boss progress.', error);
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
  const bossProgress = useMemo(
    () => calculateBossCatalogProgress(defeatedBossIds),
    [defeatedBossIds],
  );
  const ashOfWarProgress = useMemo(
    () => calculateAshOfWarProgress(collectedAshOfWarIds),
    [collectedAshOfWarIds],
  );
  const sorceryProgress = useMemo(
    () => calculateSorceryProgress(collectedSorceryIds),
    [collectedSorceryIds],
  );
  const incantationProgress = useMemo(
    () => calculateIncantationProgress(collectedIncantationIds),
    [collectedIncantationIds],
  );
  const combinedProgress = useMemo(
    () => calculateCombinedProgress(
      defeatedBossIds,
      collectedAshOfWarIds,
      collectedSorceryIds,
      collectedIncantationIds,
    ),
    [
      collectedAshOfWarIds,
      collectedIncantationIds,
      collectedSorceryIds,
      defeatedBossIds,
    ],
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
      collectedAshOfWarIds,
      collectedSorceryIds,
      collectedIncantationIds,
      defeatedBossCount: bossProgress.completed,
      bossProgress,
      ashOfWarProgress,
      sorceryProgress,
      incantationProgress,
      combinedProgress,
      isHydrated,
      initializationError,
      setLanguage,
      setThemePreference,
      markBossDefeated,
      markBossNotDefeated,
      toggleBossDefeated,
      isBossDefeated,
      markAshOfWarCollected,
      markAshOfWarNotCollected,
      toggleAshOfWarCollected,
      isAshOfWarCollected,
      toggleSorceryCollected,
      toggleIncantationCollected,
      isSorceryCollected,
      isIncantationCollected,
      resetProgress,
      resetSettings,
      retryInitialization,
    }),
    [
      ashOfWarProgress,
      sorceryProgress,
      incantationProgress,
      bossProgress,
      collectedAshOfWarIds,
      collectedSorceryIds,
      collectedIncantationIds,
      combinedProgress,
      defeatedBossIds,
      initializationError,
      isBossDefeated,
      isAshOfWarCollected,
      isSorceryCollected,
      isIncantationCollected,
      isHydrated,
      language,
      markBossDefeated,
      markBossNotDefeated,
      markAshOfWarCollected,
      markAshOfWarNotCollected,
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
      toggleAshOfWarCollected,
      toggleSorceryCollected,
      toggleIncantationCollected,
      translationDictionary,
    ],
  );

  if (!isHydrated) {
    return null;
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

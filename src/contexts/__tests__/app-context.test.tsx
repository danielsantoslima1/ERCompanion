import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { useState } from 'react';
import { Pressable, Text, useColorScheme, View } from 'react-native';

import { getTranslationDictionary } from '../../i18n';
import {
  addDefeatedBossId,
  clearProgress,
  defaultSettings,
  loadDefeatedBossIds,
  loadSettings,
  removeDefeatedBossId,
  restoreDefaultSettings,
  saveDefeatedBossIds,
  saveSettings,
} from '../../storage';
import { AppProvider } from '../app-context';
import { useApp } from '../../hooks/use-app';

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../../storage', () => ({
  defaultSettings: {
    language: 'pt-BR',
    theme: 'system',
  },
  loadSettings: jest.fn(),
  saveSettings: jest.fn(),
  restoreDefaultSettings: jest.fn(),
  loadDefeatedBossIds: jest.fn(),
  saveDefeatedBossIds: jest.fn(),
  addDefeatedBossId: jest.fn(),
  removeDefeatedBossId: jest.fn(),
  clearProgress: jest.fn(),
}));

const mockedUseColorScheme = jest.mocked(useColorScheme);
const mockedLoadSettings = jest.mocked(loadSettings);
const mockedSaveSettings = jest.mocked(saveSettings);
const mockedRestoreDefaultSettings = jest.mocked(restoreDefaultSettings);
const mockedLoadDefeatedBossIds = jest.mocked(loadDefeatedBossIds);
const mockedSaveDefeatedBossIds = jest.mocked(saveDefeatedBossIds);
const mockedAddDefeatedBossId = jest.mocked(addDefeatedBossId);
const mockedRemoveDefeatedBossId = jest.mocked(removeDefeatedBossId);
const mockedClearProgress = jest.mocked(clearProgress);

interface Deferred<T> {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: unknown) => void;
}

function createDeferred<T>(): Deferred<T> {
  let resolve!: Deferred<T>['resolve'];
  let reject!: Deferred<T>['reject'];
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });

  return { promise, resolve, reject };
}

function TestConsumer() {
  const app = useApp();
  const [actionError, setActionError] = useState('');
  const [bossCheck, setBossCheck] = useState('');

  const runAction = (action: () => Promise<void>) => {
    setActionError('');
    void action().catch((error: unknown) => {
      setActionError(error instanceof Error ? error.message : 'Unknown error');
    });
  };

  const checkBoss = (id: string) => {
    void app.isBossDefeated(id).then((isDefeated) => {
      setBossCheck(String(isDefeated));
    });
  };

  return (
    <View testID="consumer">
      <Text testID="language">{app.language}</Text>
      <Text testID="theme-preference">{app.themePreference}</Text>
      <Text testID="resolved-theme">{app.resolvedTheme}</Text>
      <Text testID="theme-mode">{app.theme.mode}</Text>
      <Text testID="defeated-ids">{app.defeatedBossIds.join(',')}</Text>
      <Text testID="defeated-count">{app.defeatedBossCount}</Text>
      <Text testID="hydrated">{String(app.isHydrated)}</Text>
      <Text testID="initialization-error">
        {app.initializationError === null ? 'none' : 'present'}
      </Text>
      <Text testID="dictionary-description">{app.translations.app.description}</Text>
      <Text testID="action-error">{actionError}</Text>
      <Text testID="boss-check">{bossCheck}</Text>

      <Pressable testID="language-en" onPress={() => runAction(() => app.setLanguage('en'))} />
      <Pressable
        testID="language-pt"
        onPress={() => runAction(() => app.setLanguage('pt-BR'))}
      />
      <Pressable
        testID="theme-light"
        onPress={() => runAction(() => app.setThemePreference('light'))}
      />
      <Pressable
        testID="theme-dark"
        onPress={() => runAction(() => app.setThemePreference('dark'))}
      />
      <Pressable
        testID="theme-system"
        onPress={() => runAction(() => app.setThemePreference('system'))}
      />
      <Pressable
        testID="mark-a"
        onPress={() => runAction(() => app.markBossDefeated('boss-a'))}
      />
      <Pressable
        testID="mark-b"
        onPress={() => runAction(() => app.markBossDefeated('boss-b'))}
      />
      <Pressable
        testID="mark-empty"
        onPress={() => runAction(() => app.markBossDefeated(''))}
      />
      <Pressable
        testID="unmark-a"
        onPress={() => runAction(() => app.markBossNotDefeated('boss-a'))}
      />
      <Pressable
        testID="unmark-empty"
        onPress={() => runAction(() => app.markBossNotDefeated('   '))}
      />
      <Pressable
        testID="toggle-a"
        onPress={() => runAction(() => app.toggleBossDefeated('boss-a'))}
      />
      <Pressable
        testID="toggle-empty"
        onPress={() => runAction(() => app.toggleBossDefeated('   '))}
      />
      <Pressable testID="check-a" onPress={() => checkBoss('boss-a')} />
      <Pressable
        testID="reset-progress"
        onPress={() => runAction(app.resetProgress)}
      />
      <Pressable
        testID="reset-settings"
        onPress={() => runAction(app.resetSettings)}
      />
      <Pressable
        testID="retry-initialization"
        onPress={() => runAction(app.retryInitialization)}
      />
    </View>
  );
}

async function renderProvider() {
  return render(
    <AppProvider>
      <TestConsumer />
    </AppProvider>,
  );
}

async function renderHydratedProvider() {
  const result = await renderProvider();
  await screen.findByTestId('consumer');
  return result;
}

function expectText(testId: string, value: string) {
  expect(screen.getByTestId(testId)).toHaveTextContent(value);
}

beforeEach(() => {
  mockedUseColorScheme.mockReset();
  mockedUseColorScheme.mockReturnValue('dark');
  mockedLoadSettings.mockReset();
  mockedLoadSettings.mockResolvedValue({ ...defaultSettings });
  mockedSaveSettings.mockReset();
  mockedSaveSettings.mockResolvedValue();
  mockedRestoreDefaultSettings.mockReset();
  mockedRestoreDefaultSettings.mockResolvedValue();
  mockedLoadDefeatedBossIds.mockReset();
  mockedLoadDefeatedBossIds.mockResolvedValue([]);
  mockedSaveDefeatedBossIds.mockReset();
  mockedSaveDefeatedBossIds.mockResolvedValue();
  mockedAddDefeatedBossId.mockReset();
  mockedAddDefeatedBossId.mockResolvedValue();
  mockedRemoveDefeatedBossId.mockReset();
  mockedRemoveDefeatedBossId.mockResolvedValue();
  mockedClearProgress.mockReset();
  mockedClearProgress.mockResolvedValue();
});

describe('AppProvider hydration', () => {
  it('hydrates saved settings, progress, theme, and translations', async () => {
    mockedLoadSettings.mockResolvedValue({ language: 'en', theme: 'light' });
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a', 'boss-b']);

    await renderProvider();
    await screen.findByTestId('consumer');

    expectText('language', 'en');
    expectText('theme-preference', 'light');
    expectText('resolved-theme', 'light');
    expectText('theme-mode', 'light');
    expectText('dictionary-description', getTranslationDictionary('en').app.description);
    expectText('defeated-ids', 'boss-a,boss-b');
    expectText('defeated-count', '2');
    expectText('hydrated', 'true');
    expectText('initialization-error', 'none');
  });

  it('loads settings and progress in parallel without rendering children early', async () => {
    const settingsDeferred = createDeferred<{
      language: 'en';
      theme: 'light';
    }>();
    const progressDeferred = createDeferred<string[]>();
    mockedLoadSettings.mockReturnValue(settingsDeferred.promise);
    mockedLoadDefeatedBossIds.mockReturnValue(progressDeferred.promise);

    await renderProvider();

    await waitFor(() => {
      expect(mockedLoadSettings).toHaveBeenCalledTimes(1);
      expect(mockedLoadDefeatedBossIds).toHaveBeenCalledTimes(1);
    });
    expect(screen.queryByTestId('consumer')).toBeNull();

    await act(async () => {
      settingsDeferred.resolve({ language: 'en', theme: 'light' });
      progressDeferred.resolve(['boss-a']);
      await Promise.all([settingsDeferred.promise, progressDeferred.promise]);
    });

    await screen.findByTestId('consumer');
    expectText('language', 'en');
    expectText('defeated-count', '1');
  });

  it('uses default settings and empty progress', async () => {
    await renderHydratedProvider();

    expectText('language', 'pt-BR');
    expectText('theme-preference', 'system');
    expectText('resolved-theme', 'dark');
    expectText('defeated-ids', '');
    expectText('defeated-count', '0');
  });

  it('exposes an initialization error without throwing during render', async () => {
    mockedLoadSettings.mockRejectedValue(new Error('read failed'));

    await expect(renderProvider()).resolves.toBeDefined();
    await screen.findByTestId('consumer');

    expectText('hydrated', 'true');
    expectText('initialization-error', 'present');
  });

  it('retries initialization and replaces failed state with loaded values', async () => {
    mockedLoadSettings.mockRejectedValueOnce(new Error('read failed'));
    await renderHydratedProvider();
    expectText('initialization-error', 'present');

    const settingsDeferred = createDeferred<{
      language: 'en';
      theme: 'dark';
    }>();
    const progressDeferred = createDeferred<string[]>();
    mockedLoadSettings.mockReturnValue(settingsDeferred.promise);
    mockedLoadDefeatedBossIds.mockReturnValue(progressDeferred.promise);

    await fireEvent.press(screen.getByTestId('retry-initialization'));
    expect(screen.queryByTestId('consumer')).toBeNull();

    await act(async () => {
      settingsDeferred.resolve({ language: 'en', theme: 'dark' });
      progressDeferred.resolve(['boss-a', 'boss-b']);
      await Promise.all([settingsDeferred.promise, progressDeferred.promise]);
    });

    await screen.findByTestId('consumer');
    expectText('initialization-error', 'none');
    expectText('language', 'en');
    expectText('theme-preference', 'dark');
    expectText('defeated-ids', 'boss-a,boss-b');
  });

  it('does not update state after unmounting during hydration', async () => {
    const settingsDeferred = createDeferred<{
      language: 'pt-BR';
      theme: 'system';
    }>();
    const progressDeferred = createDeferred<string[]>();
    mockedLoadSettings.mockReturnValue(settingsDeferred.promise);
    mockedLoadDefeatedBossIds.mockReturnValue(progressDeferred.promise);
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);

    try {
      const { unmount } = await renderProvider();
      await waitFor(() => expect(mockedLoadSettings).toHaveBeenCalled());
      await unmount();

      await act(async () => {
        settingsDeferred.resolve({ language: 'pt-BR', theme: 'system' });
        progressDeferred.resolve([]);
        await Promise.all([settingsDeferred.promise, progressDeferred.promise]);
      });

      expect(consoleError).not.toHaveBeenCalled();
    } finally {
      consoleError.mockRestore();
    }
  });
});

describe('AppProvider settings actions', () => {
  it('changes language, persists the complete settings, and updates translations', async () => {
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a']);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('language-en'));

    await waitFor(() =>
      expect(mockedSaveSettings).toHaveBeenCalledWith({
        language: 'en',
        theme: 'system',
      }),
    );
    expectText('language', 'en');
    expectText('dictionary-description', getTranslationDictionary('en').app.description);
    expectText('defeated-ids', 'boss-a');
  });

  it('rolls language and translations back when persistence fails', async () => {
    mockedLoadSettings.mockResolvedValue({ language: 'pt-BR', theme: 'dark' });
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a']);
    mockedSaveSettings.mockRejectedValue(new Error('write failed'));
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('language-en'));

    await waitFor(() =>
      expectText('action-error', 'Failed to update language.'),
    );
    expectText('language', 'pt-BR');
    expectText(
      'dictionary-description',
      getTranslationDictionary('pt-BR').app.description,
    );
    expectText('theme-preference', 'dark');
    expectText('defeated-ids', 'boss-a');
  });

  it.each([
    ['light' as const, 'light'],
    ['dark' as const, 'dark'],
  ])('changes the theme preference to %s', async (preference, resolved) => {
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId(`theme-${preference}`));

    await waitFor(() =>
      expect(mockedSaveSettings).toHaveBeenCalledWith({
        language: 'pt-BR',
        theme: preference,
      }),
    );
    expectText('theme-preference', preference);
    expectText('resolved-theme', resolved);
  });

  it.each([
    ['light' as const, 'light'],
    ['dark' as const, 'dark'],
  ])('resolves the system preference with a %s device scheme', async (scheme, resolved) => {
    mockedUseColorScheme.mockReturnValue(scheme);
    mockedLoadSettings.mockResolvedValue({ language: 'en', theme: 'light' });
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('theme-system'));

    await waitFor(() =>
      expect(mockedSaveSettings).toHaveBeenCalledWith({
        language: 'en',
        theme: 'system',
      }),
    );
    expectText('theme-preference', 'system');
    expectText('resolved-theme', resolved);
  });

  it('rolls the theme back when persistence fails', async () => {
    mockedLoadSettings.mockResolvedValue({ language: 'en', theme: 'dark' });
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a']);
    mockedSaveSettings.mockRejectedValue(new Error('write failed'));
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('theme-light'));

    await waitFor(() =>
      expectText('action-error', 'Failed to update theme preference.'),
    );
    expectText('language', 'en');
    expectText('theme-preference', 'dark');
    expectText('resolved-theme', 'dark');
    expectText('defeated-ids', 'boss-a');
  });

  it('restores default settings while preserving progress', async () => {
    mockedLoadSettings.mockResolvedValue({ language: 'en', theme: 'light' });
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a', 'boss-b']);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('reset-settings'));

    await waitFor(() => expect(mockedRestoreDefaultSettings).toHaveBeenCalledTimes(1));
    expectText('language', 'pt-BR');
    expectText('theme-preference', 'system');
    expectText('defeated-ids', 'boss-a,boss-b');
    expectText('defeated-count', '2');
  });

  it('keeps previous settings when restoring defaults fails', async () => {
    mockedLoadSettings.mockResolvedValue({ language: 'en', theme: 'light' });
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a']);
    mockedRestoreDefaultSettings.mockRejectedValue(new Error('write failed'));
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('reset-settings'));

    await waitFor(() =>
      expectText('action-error', 'Failed to restore default settings.'),
    );
    expectText('language', 'en');
    expectText('theme-preference', 'light');
    expectText('defeated-ids', 'boss-a');
  });
});

describe('AppProvider progress actions', () => {
  it('marks a boss defeated and exposes the updated membership and count', async () => {
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('mark-a'));
    await waitFor(() => expect(mockedAddDefeatedBossId).toHaveBeenCalledWith('boss-a'));
    expectText('defeated-ids', 'boss-a');
    expectText('defeated-count', '1');

    await fireEvent.press(screen.getByTestId('check-a'));
    await waitFor(() => expectText('boss-check', 'true'));
  });

  it('does not duplicate or persist an already defeated boss', async () => {
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a']);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('mark-a'));

    await act(async () => {
      await Promise.resolve();
    });
    expect(mockedAddDefeatedBossId).not.toHaveBeenCalled();
    expectText('defeated-ids', 'boss-a');
    expectText('defeated-count', '1');
  });

  it('rolls a failed mark back while preserving existing IDs', async () => {
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-b']);
    mockedAddDefeatedBossId.mockRejectedValue(new Error('write failed'));
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('mark-a'));

    await waitFor(() =>
      expectText('action-error', 'Failed to update boss progress.'),
    );
    expectText('defeated-ids', 'boss-b');
    expectText('defeated-count', '1');
  });

  it('unmarks a defeated boss and preserves other IDs', async () => {
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a', 'boss-b']);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('unmark-a'));

    await waitFor(() =>
      expect(mockedRemoveDefeatedBossId).toHaveBeenCalledWith('boss-a'),
    );
    expectText('defeated-ids', 'boss-b');
    expectText('defeated-count', '1');
    await fireEvent.press(screen.getByTestId('check-a'));
    await waitFor(() => expectText('boss-check', 'false'));
  });

  it('rolls a failed unmark back while preserving all IDs', async () => {
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a', 'boss-b']);
    mockedRemoveDefeatedBossId.mockRejectedValue(new Error('write failed'));
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('unmark-a'));

    await waitFor(() =>
      expectText('action-error', 'Failed to update boss progress.'),
    );
    expectText('defeated-ids', 'boss-a,boss-b');
    expectText('defeated-count', '2');
  });

  it('toggles the same boss twice using the latest state', async () => {
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('toggle-a'));
    await waitFor(() => expect(mockedAddDefeatedBossId).toHaveBeenCalledWith('boss-a'));
    expectText('defeated-count', '1');

    await fireEvent.press(screen.getByTestId('toggle-a'));
    await waitFor(() =>
      expect(mockedRemoveDefeatedBossId).toHaveBeenCalledWith('boss-a'),
    );
    expectText('defeated-ids', '');
    expectText('defeated-count', '0');
  });

  it('rejects empty and whitespace-only IDs without persistence or state changes', async () => {
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-b']);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('mark-empty'));
    await waitFor(() => expectText('action-error', 'Boss ID must be a non-empty string.'));
    await fireEvent.press(screen.getByTestId('unmark-empty'));
    await waitFor(() => expectText('action-error', 'Boss ID must be a non-empty string.'));
    await fireEvent.press(screen.getByTestId('toggle-empty'));
    await waitFor(() => expectText('action-error', 'Boss ID must be a non-empty string.'));

    expect(mockedAddDefeatedBossId).not.toHaveBeenCalled();
    expect(mockedRemoveDefeatedBossId).not.toHaveBeenCalled();
    expectText('defeated-ids', 'boss-b');
  });

  it('resets progress only after storage succeeds and preserves settings', async () => {
    mockedLoadSettings.mockResolvedValue({ language: 'en', theme: 'light' });
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a', 'boss-b']);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('reset-progress'));

    await waitFor(() => expect(mockedClearProgress).toHaveBeenCalledTimes(1));
    expectText('defeated-ids', '');
    expectText('defeated-count', '0');
    expectText('language', 'en');
    expectText('theme-preference', 'light');
  });

  it('keeps progress and settings when reset fails', async () => {
    mockedLoadSettings.mockResolvedValue({ language: 'en', theme: 'light' });
    mockedLoadDefeatedBossIds.mockResolvedValue(['boss-a']);
    mockedClearProgress.mockRejectedValue(new Error('remove failed'));
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('reset-progress'));

    await waitFor(() =>
      expectText('action-error', 'Failed to reset boss progress.'),
    );
    expectText('defeated-ids', 'boss-a');
    expectText('defeated-count', '1');
    expectText('language', 'en');
    expectText('theme-preference', 'light');
  });
});

describe('AppProvider action concurrency', () => {
  it('serializes sequential settings changes without restoring an old value', async () => {
    const firstSave = createDeferred<void>();
    const secondSave = createDeferred<void>();
    mockedSaveSettings
      .mockReturnValueOnce(firstSave.promise)
      .mockReturnValueOnce(secondSave.promise);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('language-en'));
    await fireEvent.press(screen.getByTestId('theme-light'));
    await waitFor(() => expect(mockedSaveSettings).toHaveBeenCalledTimes(1));

    await act(async () => {
      firstSave.resolve();
      await firstSave.promise;
    });
    await waitFor(() => expect(mockedSaveSettings).toHaveBeenCalledTimes(2));
    expect(mockedSaveSettings).toHaveBeenNthCalledWith(2, {
      language: 'en',
      theme: 'light',
    });

    await act(async () => {
      secondSave.resolve();
      await secondSave.promise;
    });
    await waitFor(() => expectText('theme-preference', 'light'));
    expectText('language', 'en');
  });

  it('serializes two marks and preserves both defeated IDs', async () => {
    const firstAdd = createDeferred<void>();
    const secondAdd = createDeferred<void>();
    mockedAddDefeatedBossId
      .mockReturnValueOnce(firstAdd.promise)
      .mockReturnValueOnce(secondAdd.promise);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('mark-a'));
    await fireEvent.press(screen.getByTestId('mark-b'));
    await waitFor(() => expect(mockedAddDefeatedBossId).toHaveBeenCalledTimes(1));

    await act(async () => {
      firstAdd.resolve();
      await firstAdd.promise;
    });
    await waitFor(() => expect(mockedAddDefeatedBossId).toHaveBeenCalledTimes(2));

    await act(async () => {
      secondAdd.resolve();
      await secondAdd.promise;
    });
    await waitFor(() => expectText('defeated-ids', 'boss-a,boss-b'));
    expectText('defeated-count', '2');
  });

  it('runs a settings operation and a progress operation independently', async () => {
    const settingsSave = createDeferred<void>();
    const bossAdd = createDeferred<void>();
    mockedSaveSettings.mockReturnValue(settingsSave.promise);
    mockedAddDefeatedBossId.mockReturnValue(bossAdd.promise);
    await renderHydratedProvider();

    await fireEvent.press(screen.getByTestId('language-en'));
    await fireEvent.press(screen.getByTestId('mark-a'));

    await waitFor(() => {
      expect(mockedSaveSettings).toHaveBeenCalledTimes(1);
      expect(mockedAddDefeatedBossId).toHaveBeenCalledTimes(1);
    });

    await act(async () => {
      settingsSave.resolve();
      bossAdd.resolve();
      await Promise.all([settingsSave.promise, bossAdd.promise]);
    });

    await waitFor(() => expectText('language', 'en'));
    expectText('defeated-ids', 'boss-a');
    expectText('defeated-count', '1');
  });
});

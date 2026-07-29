import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import type { TestInstance } from 'test-renderer';

import type { AppContextValue } from '../../contexts/app-context';
import { useApp } from '../../hooks/use-app';
import { getTranslationDictionary } from '../../i18n';
import { lightTheme } from '../../theme';
import { InitializationErrorScreen } from '../initialization-error-screen';

jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(),
}));

const mockedUseApp = jest.mocked(useApp);

interface ControlledVoidPromise {
  promise: Promise<void>;
  resolve: () => void;
  reject: (reason?: unknown) => void;
}

function createControlledVoidPromise(): ControlledVoidPromise {
  let resolvePromise: () => void = () => undefined;
  let rejectPromise: (reason?: unknown) => void = () => undefined;
  const promise = new Promise<void>((resolve, reject) => {
    resolvePromise = () => resolve();
    rejectPromise = reject;
  });

  return {
    promise,
    resolve: resolvePromise,
    reject: rejectPromise,
  };
}

function getPressHandler(instance: TestInstance): () => Promise<void> {
  let fiber = instance.unstable_fiber;

  while (fiber !== null) {
    const props: unknown = fiber.memoizedProps;

    if (typeof props === 'object' && props !== null && 'onPress' in props) {
      const onPress = props.onPress;

      if (typeof onPress === 'function') {
        return async (): Promise<void> => {
          await onPress();
        };
      }
    }

    fiber = fiber.return;
  }

  throw new Error('Press handler not found.');
}

function createAppValue(
  retryInitialization: AppContextValue['retryInitialization'],
): AppContextValue {
  return {
    settings: { language: 'pt-BR', theme: 'light' },
    language: 'pt-BR',
    themePreference: 'light',
    resolvedTheme: 'light',
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
    defeatedBossIds: [],
    collectedAshOfWarIds: [],
    collectedSorceryIds: [],
    collectedIncantationIds: [],
    defeatedBossCount: 0,
    bossProgress: { completed: 0, total: 208, percentage: 0 },
    ashOfWarProgress: { completed: 0, total: 116, percentage: 0 },
    sorceryProgress: { completed: 0, total: 84, percentage: 0 },
    incantationProgress: { completed: 0, total: 129, percentage: 0 },
    combinedProgress: { completed: 0, total: 537, percentage: 0 },
    isHydrated: true,
    initializationError: new Error('sensitive storage details'),
    setLanguage: jest
      .fn<
        ReturnType<AppContextValue['setLanguage']>,
        Parameters<AppContextValue['setLanguage']>
      >()
      .mockResolvedValue(),
    setThemePreference: jest
      .fn<
        ReturnType<AppContextValue['setThemePreference']>,
        Parameters<AppContextValue['setThemePreference']>
      >()
      .mockResolvedValue(),
    markBossDefeated: jest
      .fn<
        ReturnType<AppContextValue['markBossDefeated']>,
        Parameters<AppContextValue['markBossDefeated']>
      >()
      .mockResolvedValue(),
    markBossNotDefeated: jest
      .fn<
        ReturnType<AppContextValue['markBossNotDefeated']>,
        Parameters<AppContextValue['markBossNotDefeated']>
      >()
      .mockResolvedValue(),
    toggleBossDefeated: jest
      .fn<
        ReturnType<AppContextValue['toggleBossDefeated']>,
        Parameters<AppContextValue['toggleBossDefeated']>
      >()
      .mockResolvedValue(),
    isBossDefeated: jest
      .fn<
        ReturnType<AppContextValue['isBossDefeated']>,
        Parameters<AppContextValue['isBossDefeated']>
      >()
      .mockResolvedValue(false),
    markAshOfWarCollected: async () => undefined,
    markAshOfWarNotCollected: async () => undefined,
    toggleAshOfWarCollected: async () => undefined,
    isAshOfWarCollected: jest.fn().mockResolvedValue(false),
    toggleSorceryCollected: async () => undefined,
    toggleIncantationCollected: async () => undefined,
    isSorceryCollected: jest.fn().mockResolvedValue(false),
    isIncantationCollected: jest.fn().mockResolvedValue(false),
    resetProgress: jest
      .fn<Promise<void>, []>()
      .mockResolvedValue(),
    resetSettings: jest
      .fn<Promise<void>, []>()
      .mockResolvedValue(),
    retryInitialization,
  };
}

beforeEach(() => {
  mockedUseApp.mockReset();
});

describe('InitializationErrorScreen', () => {
  it('shows a translated, accessible error without technical details', async () => {
    const retryInitialization = jest
      .fn<Promise<void>, []>()
      .mockResolvedValue();
    const translations = getTranslationDictionary('pt-BR');
    mockedUseApp.mockReturnValue(createAppValue(retryInitialization));

    await render(<InitializationErrorScreen />);

    expect(screen.getByRole('header')).toHaveTextContent(
      translations.common.error,
    );
    expect(
      screen.getByText(translations.placeholders.initializationErrorMessage),
    ).toBeOnTheScreen();
    expect(screen.queryByText('sensitive storage details')).toBeNull();

    const retryButton = screen.getByRole('button');
    expect(retryButton.props.accessibilityState).toEqual({ disabled: false });
    expect(
      screen.getByText(translations.common.tryAgain),
    ).toBeOnTheScreen();
  });

  it('enables the retry button again after a successful attempt finishes', async () => {
    const retryInitialization = jest
      .fn<Promise<void>, []>()
      .mockResolvedValue();
    mockedUseApp.mockReturnValue(createAppValue(retryInitialization));

    await render(<InitializationErrorScreen />);
    const retryButton = screen.getByRole('button');

    await fireEvent.press(retryButton);

    expect(retryInitialization).toHaveBeenCalledTimes(1);
    expect(retryButton.props.accessibilityState).toEqual({ disabled: false });
  });

  it('handles a rejected retry and enables the button again', async () => {
    const controlledRetry = createControlledVoidPromise();
    const retryInitialization = jest
      .fn<Promise<void>, []>()
      .mockImplementation(() => controlledRetry.promise);
    const translations = getTranslationDictionary('pt-BR');
    mockedUseApp.mockReturnValue(createAppValue(retryInitialization));

    await render(<InitializationErrorScreen />);
    const retryButton = screen.getByRole('button');
    const onPress = getPressHandler(retryButton);

    await act(() => {
      void onPress();
      void onPress();
    });

    expect(retryInitialization).toHaveBeenCalledTimes(1);
    expect(retryButton).toBeDisabled();

    await act(async () => {
      controlledRetry.reject(new Error('sensitive retry details'));
      await controlledRetry.promise.catch(() => undefined);
    });

    await waitFor(() => {
      expect(retryButton).toBeEnabled();
    });
    expect(retryInitialization).toHaveBeenCalledTimes(1);
    expect(
      screen.getByText(translations.placeholders.initializationErrorMessage),
    ).toBeOnTheScreen();
    expect(screen.queryByText('sensitive retry details')).toBeNull();
  });
});

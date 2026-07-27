import {
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import { Alert } from 'react-native';

import SettingsScreen from '../settings';
import type { AppContextValue } from '../../src/contexts/app-context';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';

interface ControlledVoidPromise {
  promise: Promise<void>;
  reject: (reason?: unknown) => void;
  resolve: () => void;
}

const setLanguage = jest.fn<
  ReturnType<AppContextValue['setLanguage']>,
  Parameters<AppContextValue['setLanguage']>
>();
const setThemePreference = jest.fn<
  ReturnType<AppContextValue['setThemePreference']>,
  Parameters<AppContextValue['setThemePreference']>
>();
const resetProgress = jest.fn<
  ReturnType<AppContextValue['resetProgress']>,
  Parameters<AppContextValue['resetProgress']>
>();
let mockAppState: Pick<
  AppContextValue,
  | 'defeatedBossCount'
  | 'language'
  | 'resetProgress'
  | 'setLanguage'
  | 'setThemePreference'
  | 'theme'
  | 'themePreference'
  | 'translations'
> = {
  defeatedBossCount: 2,
  language: 'pt-BR',
  resetProgress,
  setLanguage,
  setThemePreference,
  theme: lightTheme,
  themePreference: 'system',
  translations: getTranslationDictionary('pt-BR'),
};

jest.mock('../../src/hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

function createControlledVoidPromise(): ControlledVoidPromise {
  let rejectPromise: (reason?: unknown) => void = () => undefined;
  let resolvePromise: () => void = () => undefined;
  const promise = new Promise<void>((resolve, reject) => {
    rejectPromise = reject;
    resolvePromise = () => resolve();
  });

  return {
    promise,
    reject: rejectPromise,
    resolve: resolvePromise,
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  setLanguage.mockResolvedValue();
  setThemePreference.mockResolvedValue();
  resetProgress.mockResolvedValue();
  mockAppState = {
    defeatedBossCount: 2,
    language: 'pt-BR',
    resetProgress,
    setLanguage,
    setThemePreference,
    theme: lightTheme,
    themePreference: 'system',
    translations: getTranslationDictionary('pt-BR'),
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('SettingsScreen', () => {
  it.each([
    { language: 'pt-BR' as const, selectedLabel: 'Português' },
    { language: 'en' as const, selectedLabel: 'English' },
  ])('shows $language as the selected language', async ({
    language,
    selectedLabel,
  }) => {
    mockAppState = {
      ...mockAppState,
      language,
      translations: getTranslationDictionary(language),
    };

    await render(<SettingsScreen />);

    const selectedRadio = screen.getByRole('radio', {
      name: new RegExp(selectedLabel),
    });
    expect(selectedRadio.props.accessibilityState).toMatchObject({
      selected: true,
    });
  });

  it('selects English and blocks repeated language actions while pending', async () => {
    const controlledSave = createControlledVoidPromise();
    setLanguage.mockImplementation(() => controlledSave.promise);
    await render(<SettingsScreen />);
    const englishOption = screen.getByRole('radio', { name: /English/ });

    await fireEvent.press(englishOption);
    await fireEvent.press(englishOption);

    expect(setLanguage).toHaveBeenCalledTimes(1);
    expect(setLanguage).toHaveBeenCalledWith('en');
    expect(englishOption).toBeDisabled();

    await act(async () => {
      controlledSave.resolve();
      await controlledSave.promise;
    });

    expect(englishOption).toBeEnabled();
  });

  it('shows a translated alert when changing language rejects', async () => {
    const translations = getTranslationDictionary('pt-BR');
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    setLanguage.mockRejectedValue(new Error('technical language details'));
    await render(<SettingsScreen />);

    await fireEvent.press(screen.getByRole('radio', { name: /English/ }));

    expect(alertSpy).toHaveBeenCalledWith(
      translations.settings.saveErrorTitle,
      translations.settings.saveErrorMessage,
    );
    expect(screen.queryByText('technical language details')).toBeNull();
  });

  it.each([
    { preference: 'system' as const, label: /Sistema/ },
    { preference: 'light' as const, label: /Claro/ },
    { preference: 'dark' as const, label: /Escuro/ },
  ])('shows $preference as the selected theme', async ({
    label,
    preference,
  }) => {
    mockAppState = {
      ...mockAppState,
      themePreference: preference,
    };

    await render(<SettingsScreen />);

    expect(
      screen.getByRole('radio', { name: label }).props.accessibilityState,
    ).toMatchObject({ selected: true });
  });

  it('changes theme once while preserving the current language', async () => {
    const controlledSave = createControlledVoidPromise();
    setThemePreference.mockImplementation(() => controlledSave.promise);
    await render(<SettingsScreen />);
    const darkOption = screen.getByRole('radio', { name: /Escuro/ });

    await fireEvent.press(darkOption);
    await fireEvent.press(darkOption);

    expect(setThemePreference).toHaveBeenCalledTimes(1);
    expect(setThemePreference).toHaveBeenCalledWith('dark');
    expect(setLanguage).not.toHaveBeenCalled();
    expect(mockAppState.language).toBe('pt-BR');
    expect(darkOption).toBeDisabled();

    await act(async () => {
      controlledSave.resolve();
      await controlledSave.promise;
    });
    expect(darkOption).toBeEnabled();
  });

  it('shows a translated alert when changing theme rejects', async () => {
    const translations = getTranslationDictionary('pt-BR');
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    setThemePreference.mockRejectedValue(new Error('technical theme details'));
    await render(<SettingsScreen />);

    await fireEvent.press(screen.getByRole('radio', { name: /Escuro/ }));

    expect(alertSpy).toHaveBeenCalledWith(
      translations.settings.saveErrorTitle,
      translations.settings.saveErrorMessage,
    );
    expect(screen.queryByText('technical theme details')).toBeNull();
  });

  it('shows the current defeated count and opens reset confirmation', async () => {
    const translations = getTranslationDictionary('pt-BR');
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    await render(<SettingsScreen />);

    expect(
      screen.getByText(translations.settings.defeatedBossCount(2)),
    ).toBeOnTheScreen();
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.settings.resetProgress,
      }),
    );

    expect(alertSpy).toHaveBeenCalledTimes(1);
    const [title, message, buttons] = alertSpy.mock.calls[0];
    expect(title).toBe(translations.resetConfirmation.title);
    expect(message).toBe(translations.resetConfirmation.message);
    expect(buttons).toHaveLength(2);
  });

  it('does not reset progress when confirmation is cancelled', async () => {
    const translations = getTranslationDictionary('pt-BR');
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    await render(<SettingsScreen />);

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.settings.resetProgress,
      }),
    );
    const buttons = alertSpy.mock.calls[0][2];
    const cancelButton = buttons?.find(
      (button) => button.text === translations.resetConfirmation.cancel,
    );
    cancelButton?.onPress?.();

    expect(resetProgress).not.toHaveBeenCalled();
  });

  it('confirms reset once, disables the button, and reports success safely', async () => {
    const translations = getTranslationDictionary('pt-BR');
    const controlledReset = createControlledVoidPromise();
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    resetProgress.mockImplementation(() => controlledReset.promise);
    await render(<SettingsScreen />);
    const resetButton = screen.getByRole('button', {
      name: translations.settings.resetProgress,
    });

    await fireEvent.press(resetButton);
    const buttons = alertSpy.mock.calls[0][2];
    const confirmButton = buttons?.find(
      (button) => button.text === translations.resetConfirmation.confirm,
    );
    await act(() => {
      confirmButton?.onPress?.();
      confirmButton?.onPress?.();
    });

    expect(resetProgress).toHaveBeenCalledTimes(1);
    expect(resetButton).toBeDisabled();
    expect(screen.getByText(translations.settings.resettingProgress)).toBeOnTheScreen();
    expect(setLanguage).not.toHaveBeenCalled();
    expect(setThemePreference).not.toHaveBeenCalled();

    await act(async () => {
      controlledReset.resolve();
      await controlledReset.promise;
    });

    expect(alertSpy).toHaveBeenLastCalledWith(
      translations.settings.progressManagement,
      translations.resetConfirmation.success,
    );
    expect(resetButton).toBeEnabled();
  });

  it('shows a safe translated reset failure and preserves preferences', async () => {
    const translations = getTranslationDictionary('pt-BR');
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    resetProgress.mockRejectedValue(new Error('technical reset details'));
    await render(<SettingsScreen />);

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.settings.resetProgress,
      }),
    );
    const buttons = alertSpy.mock.calls[0][2];
    const confirmButton = buttons?.find(
      (button) => button.text === translations.resetConfirmation.confirm,
    );
    await act(() => {
      confirmButton?.onPress?.();
    });

    expect(alertSpy).toHaveBeenLastCalledWith(
      translations.resetConfirmation.errorTitle,
      translations.resetConfirmation.errorMessage,
    );
    expect(screen.queryByText('technical reset details')).toBeNull();
    expect(setLanguage).not.toHaveBeenCalled();
    expect(setThemePreference).not.toHaveBeenCalled();
  });
});

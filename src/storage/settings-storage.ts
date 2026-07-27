import AsyncStorage from '@react-native-async-storage/async-storage';

import type { Settings } from '../types/settings';
import { storageKeys } from './keys';
import { isSettings } from './validators';

export const defaultSettings: Settings = {
  language: 'pt-BR',
  theme: 'system',
};

function createDefaultSettings(): Settings {
  return { ...defaultSettings };
}

export async function loadSettings(): Promise<Settings> {
  let storedValue: string | null;

  try {
    storedValue = await AsyncStorage.getItem(storageKeys.settings);
  } catch (error: unknown) {
    throw new Error('Failed to read settings from local storage.', { cause: error });
  }

  if (storedValue === null) {
    return createDefaultSettings();
  }

  let parsedValue: unknown;

  try {
    parsedValue = JSON.parse(storedValue) as unknown;
  } catch {
    return createDefaultSettings();
  }

  if (!isSettings(parsedValue)) {
    return createDefaultSettings();
  }

  return {
    language: parsedValue.language,
    theme: parsedValue.theme,
  };
}

export async function saveSettings(settings: Settings): Promise<void> {
  if (!isSettings(settings)) {
    throw new TypeError('Cannot save invalid settings.');
  }

  try {
    await AsyncStorage.setItem(storageKeys.settings, JSON.stringify(settings));
  } catch (error: unknown) {
    throw new Error('Failed to save settings to local storage.', { cause: error });
  }
}

export async function restoreDefaultSettings(): Promise<void> {
  try {
    await AsyncStorage.setItem(
      storageKeys.settings,
      JSON.stringify(createDefaultSettings()),
    );
  } catch (error: unknown) {
    throw new Error('Failed to restore default settings in local storage.', {
      cause: error,
    });
  }
}

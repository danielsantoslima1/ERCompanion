import AsyncStorage from '@react-native-async-storage/async-storage';

import type { Settings } from '../../types';
import {
  defaultSettings,
  loadSettings,
  restoreDefaultSettings,
  saveSettings,
} from '../settings-storage';

jest.mock(
  '@react-native-async-storage/async-storage',
  () =>
    jest.requireActual(
      '@react-native-async-storage/async-storage/jest/async-storage-mock',
    ),
);

const SETTINGS_KEY = '@elden-ring-companion/settings:v1';
const PROGRESS_KEY = '@elden-ring-companion/defeated-boss-ids:v1';
const mockedGetItem = jest.mocked(AsyncStorage.getItem);
const mockedSetItem = jest.mocked(AsyncStorage.setItem);
const mockedRemoveItem = jest.mocked(AsyncStorage.removeItem);
const mockedClear = jest.mocked(AsyncStorage.clear);

describe('settings storage', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
    jest.clearAllMocks();
  });

  describe('loadSettings', () => {
    it('returns defaults when no value is stored', async () => {
      await expect(loadSettings()).resolves.toEqual(defaultSettings);
    });

    it('returns a new default settings copy on every empty load', async () => {
      const firstResult = await loadSettings();
      const secondResult = await loadSettings();

      expect(firstResult).toEqual(defaultSettings);
      expect(secondResult).toEqual(defaultSettings);
      expect(firstResult).not.toBe(defaultSettings);
      expect(secondResult).not.toBe(defaultSettings);
      expect(secondResult).not.toBe(firstResult);
    });

    it('returns valid stored settings', async () => {
      await AsyncStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({ language: 'en', theme: 'dark' }),
      );

      await expect(loadSettings()).resolves.toEqual({
        language: 'en',
        theme: 'dark',
      });
    });

    it('returns defaults for corrupted JSON', async () => {
      await AsyncStorage.setItem(SETTINGS_KEY, '{invalid');

      await expect(loadSettings()).resolves.toEqual(defaultSettings);
    });

    it('returns defaults for an invalid stored language', async () => {
      await AsyncStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({ language: 'pt', theme: 'system' }),
      );

      await expect(loadSettings()).resolves.toEqual(defaultSettings);
    });

    it('returns defaults for an invalid stored theme', async () => {
      await AsyncStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({ language: 'pt-BR', theme: 'automatic' }),
      );

      await expect(loadSettings()).resolves.toEqual(defaultSettings);
    });

    it('returns defaults for an incomplete stored object', async () => {
      await AsyncStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({ language: 'en' }),
      );

      await expect(loadSettings()).resolves.toEqual(defaultSettings);
    });

    it('propagates a contextualized read failure', async () => {
      mockedGetItem.mockRejectedValueOnce(new Error('read failure'));

      await expect(loadSettings()).rejects.toThrow(
        'Failed to read settings from local storage.',
      );
    });

    it('does not modify AsyncStorage during a read', async () => {
      await AsyncStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({ language: 'en', theme: 'light' }),
      );
      jest.clearAllMocks();

      await loadSettings();

      expect(mockedGetItem).toHaveBeenCalledTimes(1);
      expect(mockedSetItem).not.toHaveBeenCalled();
      expect(mockedRemoveItem).not.toHaveBeenCalled();
      expect(mockedClear).not.toHaveBeenCalled();
    });
  });

  describe('saveSettings', () => {
    it('saves valid settings as JSON', async () => {
      await saveSettings({ language: 'en', theme: 'dark' });

      expect(mockedSetItem).toHaveBeenCalledWith(
        SETTINGS_KEY,
        JSON.stringify({ language: 'en', theme: 'dark' }),
      );
    });

    it('preserves the received language and theme exactly', async () => {
      const settings: Settings = {
        language: 'pt-BR',
        theme: 'light',
      };

      await saveSettings(settings);

      await expect(AsyncStorage.getItem(SETTINGS_KEY)).resolves.toBe(
        JSON.stringify(settings),
      );
    });

    it('rejects an invalid language', async () => {
      const invalidSettings = {
        language: 'fr',
        theme: 'system',
      } as unknown as Settings;

      await expect(saveSettings(invalidSettings)).rejects.toThrow(
        'Cannot save invalid settings.',
      );
    });

    it('rejects an invalid theme', async () => {
      const invalidSettings = {
        language: 'en',
        theme: 'automatic',
      } as unknown as Settings;

      await expect(saveSettings(invalidSettings)).rejects.toThrow(
        'Cannot save invalid settings.',
      );
    });

    it('does not write invalid settings', async () => {
      const invalidSettings = {
        language: 'invalid',
        theme: 'dark',
      } as unknown as Settings;

      await expect(saveSettings(invalidSettings)).rejects.toThrow();
      expect(mockedSetItem).not.toHaveBeenCalled();
    });

    it('propagates a contextualized write failure', async () => {
      mockedSetItem.mockRejectedValueOnce(new Error('write failure'));

      await expect(
        saveSettings({ language: 'en', theme: 'system' }),
      ).rejects.toThrow('Failed to save settings to local storage.');
    });
  });

  describe('restoreDefaultSettings', () => {
    it('saves pt-BR and system defaults', async () => {
      await restoreDefaultSettings();

      expect(mockedSetItem).toHaveBeenCalledWith(
        SETTINGS_KEY,
        JSON.stringify({ language: 'pt-BR', theme: 'system' }),
      );
    });

    it('does not use AsyncStorage.clear', async () => {
      await restoreDefaultSettings();

      expect(mockedClear).not.toHaveBeenCalled();
    });

    it('does not remove the progress key', async () => {
      const savedProgress = JSON.stringify(['boss-a']);
      await AsyncStorage.setItem(PROGRESS_KEY, savedProgress);
      jest.clearAllMocks();

      await restoreDefaultSettings();

      await expect(AsyncStorage.getItem(PROGRESS_KEY)).resolves.toBe(
        savedProgress,
      );
      expect(mockedRemoveItem).not.toHaveBeenCalled();
    });

    it('propagates a contextualized write failure', async () => {
      mockedSetItem.mockRejectedValueOnce(new Error('write failure'));

      await expect(restoreDefaultSettings()).rejects.toThrow(
        'Failed to restore default settings in local storage.',
      );
    });
  });
});

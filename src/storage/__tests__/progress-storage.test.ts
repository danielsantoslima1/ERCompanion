import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  addDefeatedBossId,
  clearProgress,
  isBossDefeated,
  loadDefeatedBossIds,
  removeDefeatedBossId,
  saveDefeatedBossIds,
} from '../progress-storage';

jest.mock(
  '@react-native-async-storage/async-storage',
  () =>
    jest.requireActual(
      '@react-native-async-storage/async-storage/jest/async-storage-mock',
    ),
);

const SETTINGS_KEY = '@elden-ring-companion/settings:v1';
const PROGRESS_KEY = '@elden-ring-companion/defeated-boss-ids:v1';
const versionedProgress = (ids: readonly string[]) =>
  JSON.stringify({ schemaVersion: 1, defeatedBossIds: ids });
const mockedGetItem = jest.mocked(AsyncStorage.getItem);
const mockedSetItem = jest.mocked(AsyncStorage.setItem);
const mockedRemoveItem = jest.mocked(AsyncStorage.removeItem);
const mockedClear = jest.mocked(AsyncStorage.clear);

describe('progress storage', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
    jest.clearAllMocks();
  });

  describe('loadDefeatedBossIds', () => {
    it('returns an empty list when no value is stored', async () => {
      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('returns a valid stored list', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['boss-a', 'boss-b']),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('migrates legacy progress, removes sample IDs, deduplicates, and preserves unknown real IDs', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify([
          'sample-base-training-guardian',
          'tree-sentinel-limgrave-road',
          'future-real-boss',
          'tree-sentinel-limgrave-road',
        ]),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'tree-sentinel-limgrave-road',
        'future-real-boss',
      ]);
      await expect(AsyncStorage.getItem(PROGRESS_KEY)).resolves.toBe(
        versionedProgress([
          'tree-sentinel-limgrave-road',
          'future-real-boss',
        ]),
      );
    });

    it('reads current versioned progress idempotently without rewriting it', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        versionedProgress(['tree-sentinel-limgrave-road']),
      );
      jest.clearAllMocks();

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'tree-sentinel-limgrave-road',
      ]);
      expect(mockedSetItem).not.toHaveBeenCalled();
    });

    it('returns an empty list for an unknown schema version', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({ schemaVersion: 99, defeatedBossIds: ['boss-a'] }),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('does not modify settings while migrating progress', async () => {
      const settings = JSON.stringify({ language: 'en', theme: 'dark' });
      await AsyncStorage.setItem(SETTINGS_KEY, settings);
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['sample-old', 'real-id']),
      );

      await loadDefeatedBossIds();

      await expect(AsyncStorage.getItem(SETTINGS_KEY)).resolves.toBe(settings);
    });

    it('normalizes stored IDs with trim', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify([' boss-a ', '\tboss-b\n']),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('removes duplicate stored IDs', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['boss-a', 'boss-a', 'boss-b']),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('preserves the order of the first stored occurrence', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['boss-b', 'boss-a', ' boss-b ', 'boss-c']),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-b',
        'boss-a',
        'boss-c',
      ]);
    });

    it('returns an empty list for corrupted JSON', async () => {
      await AsyncStorage.setItem(PROGRESS_KEY, '[invalid');

      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('returns an empty list for an invalid stored format', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({ id: 'boss-a' }),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('returns an empty list for an array with a non-string item', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['boss-a', 2]),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('returns an empty list for an array with an empty string', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['boss-a', '']),
      );

      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('propagates a contextualized read failure', async () => {
      mockedGetItem.mockRejectedValueOnce(new Error('read failure'));

      await expect(loadDefeatedBossIds()).rejects.toThrow(
        'Failed to read defeated boss IDs from local storage.',
      );
    });

    it('does not modify AsyncStorage during a read', async () => {
      await AsyncStorage.setItem(PROGRESS_KEY, versionedProgress(['boss-a']));
      jest.clearAllMocks();

      await loadDefeatedBossIds();

      expect(mockedGetItem).toHaveBeenCalledTimes(1);
      expect(mockedSetItem).not.toHaveBeenCalled();
      expect(mockedRemoveItem).not.toHaveBeenCalled();
      expect(mockedClear).not.toHaveBeenCalled();
    });
  });

  describe('saveDefeatedBossIds', () => {
    it('saves a valid list', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b']);

      await expect(AsyncStorage.getItem(PROGRESS_KEY)).resolves.toBe(
        versionedProgress(['boss-a', 'boss-b']),
      );
    });

    it('normalizes spaces before saving', async () => {
      await saveDefeatedBossIds([' boss-a ', '\tboss-b\n']);

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('removes duplicate IDs before saving', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-a', 'boss-b']);

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('preserves first-occurrence order when saving', async () => {
      await saveDefeatedBossIds([
        'boss-b',
        'boss-a',
        ' boss-b ',
        'boss-c',
      ]);

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-b',
        'boss-a',
        'boss-c',
      ]);
    });

    it('rejects empty IDs', async () => {
      await expect(saveDefeatedBossIds(['boss-a', ''])).rejects.toThrow(
        'Defeated boss IDs must be non-empty strings.',
      );
    });

    it('does not write invalid data', async () => {
      const invalidIds = ['boss-a', 2] as unknown as readonly string[];

      await expect(saveDefeatedBossIds(invalidIds)).rejects.toThrow();
      expect(mockedSetItem).not.toHaveBeenCalled();
    });

    it('propagates a contextualized write failure', async () => {
      mockedSetItem.mockRejectedValueOnce(new Error('write failure'));

      await expect(saveDefeatedBossIds(['boss-a'])).rejects.toThrow(
        'Failed to save defeated boss IDs to local storage.',
      );
    });
  });

  describe('addDefeatedBossId', () => {
    it('adds a new ID', async () => {
      await addDefeatedBossId('boss-a');

      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    });

    it('normalizes an ID before saving', async () => {
      await addDefeatedBossId(' boss-a ');

      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    });

    it('does not duplicate an existing ID', async () => {
      await saveDefeatedBossIds(['boss-a']);

      await addDefeatedBossId('boss-a');

      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    });

    it('preserves existing IDs', async () => {
      await saveDefeatedBossIds(['boss-a']);

      await addDefeatedBossId('boss-b');

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('rejects an empty ID', async () => {
      await expect(addDefeatedBossId(' \t ')).rejects.toThrow(
        'Boss ID must be a non-empty string.',
      );
    });

    it('propagates a contextualized persistence failure', async () => {
      mockedSetItem.mockRejectedValueOnce(new Error('write failure'));

      await expect(addDefeatedBossId('boss-a')).rejects.toThrow(
        'Failed to save defeated boss IDs to local storage.',
      );
    });
  });

  describe('removeDefeatedBossId', () => {
    it('removes an existing ID', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b']);

      await removeDefeatedBossId('boss-a');

      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-b']);
    });

    it('keeps other existing IDs', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b', 'boss-c']);

      await removeDefeatedBossId('boss-b');

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-c',
      ]);
    });

    it('does not remove other values for an unknown ID', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b']);

      await removeDefeatedBossId('missing-boss');

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('normalizes the received ID', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b']);

      await removeDefeatedBossId(' boss-a ');

      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-b']);
    });

    it('rejects an empty ID', async () => {
      await expect(removeDefeatedBossId('')).rejects.toThrow(
        'Boss ID must be a non-empty string.',
      );
    });

    it('propagates a contextualized persistence failure', async () => {
      await saveDefeatedBossIds(['boss-a']);
      mockedSetItem.mockRejectedValueOnce(new Error('write failure'));

      await expect(removeDefeatedBossId('boss-a')).rejects.toThrow(
        'Failed to save defeated boss IDs to local storage.',
      );
    });
  });

  describe('isBossDefeated', () => {
    it('returns true for a saved ID', async () => {
      await saveDefeatedBossIds(['boss-a']);

      await expect(isBossDefeated('boss-a')).resolves.toBe(true);
    });

    it('returns false for an unsaved ID', async () => {
      await saveDefeatedBossIds(['boss-a']);

      await expect(isBossDefeated('boss-b')).resolves.toBe(false);
    });

    it('normalizes the queried ID', async () => {
      await saveDefeatedBossIds(['boss-a']);

      await expect(isBossDefeated(' boss-a ')).resolves.toBe(true);
    });

    it('rejects an empty ID as not defeated', async () => {
      await expect(isBossDefeated(' \t ')).resolves.toBe(false);
      expect(mockedGetItem).not.toHaveBeenCalled();
    });
  });

  describe('clearProgress', () => {
    it('resets only the progress payload while preserving its schema', async () => {
      await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(['boss-a']));
      await AsyncStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({ language: 'en', theme: 'dark' }),
      );
      jest.clearAllMocks();

      await clearProgress();

      expect(mockedRemoveItem).not.toHaveBeenCalled();
      await expect(AsyncStorage.getItem(PROGRESS_KEY)).resolves.toBe(
        versionedProgress([]),
      );
    });

    it('does not use AsyncStorage.clear', async () => {
      await clearProgress();

      expect(mockedClear).not.toHaveBeenCalled();
    });

    it('does not remove stored settings', async () => {
      const settingsValue = JSON.stringify({
        language: 'en',
        theme: 'dark',
      });
      await AsyncStorage.setItem(SETTINGS_KEY, settingsValue);
      jest.clearAllMocks();

      await clearProgress();

      await expect(AsyncStorage.getItem(SETTINGS_KEY)).resolves.toBe(
        settingsValue,
      );
    });

    it('propagates a contextualized reset write failure', async () => {
      mockedSetItem.mockRejectedValueOnce(new Error('write failure'));

      await expect(clearProgress()).rejects.toThrow(
        'Failed to save defeated boss IDs to local storage.',
      );
    });
  });

  describe('mutation concurrency', () => {
    it('preserves two IDs added concurrently', async () => {
      const firstAddition = addDefeatedBossId('boss-a');
      const secondAddition = addDefeatedBossId('boss-b');

      await Promise.all([firstAddition, secondAddition]);

      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('respects the initiation order of concurrent add and remove operations', async () => {
      await saveDefeatedBossIds(['boss-a']);

      const addition = addDefeatedBossId('boss-b');
      const removal = removeDefeatedBossId('boss-a');

      await Promise.all([addition, removal]);

      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-b']);
    });
  });
});

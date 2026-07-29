import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  addCollectedAshOfWarId,
  addCollectedIncantationId,
  addCollectedSorceryId,
  addDefeatedBossId,
  clearProgress,
  isAshOfWarCollected,
  isBossDefeated,
  loadCollectedAshOfWarIds,
  loadCollectedIncantationIds,
  loadCollectedSorceryIds,
  loadDefeatedBossIds,
  loadProgressState,
  removeCollectedAshOfWarId,
  removeCollectedIncantationId,
  removeCollectedSorceryId,
  removeDefeatedBossId,
  saveDefeatedBossIds,
  toggleCollectedAshOfWarId,
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
const state = (
  defeatedBossIds: readonly string[] = [],
  collectedAshOfWarIds: readonly string[] = [],
  collectedSorceryIds: readonly string[] = [],
  collectedIncantationIds: readonly string[] = [],
) => ({
  schemaVersion: 3,
  defeatedBossIds,
  collectedAshOfWarIds,
  collectedSorceryIds,
  collectedIncantationIds,
});

describe('progress storage v3', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
    jest.clearAllMocks();
  });

  it('returns an empty v3 state when storage is absent or corrupted', async () => {
    await expect(loadProgressState()).resolves.toEqual(state());
    await AsyncStorage.setItem(PROGRESS_KEY, '[invalid');
    await expect(loadProgressState()).resolves.toEqual(state());
  });

  it('migrates v1 without losing bosses and starts Ashes empty', async () => {
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({
        schemaVersion: 1,
        defeatedBossIds: [' boss-a ', 'boss-a', 'future-boss'],
      }),
    );
    await expect(loadProgressState()).resolves.toEqual(
      state(['boss-a', 'future-boss']),
    );
    await expect(AsyncStorage.getItem(PROGRESS_KEY)).resolves.toBe(
      JSON.stringify(state(['boss-a', 'future-boss'])),
    );
  });

  it('migrates v2 preserving bosses and Ashes while starting both spell categories empty', async () => {
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify({
      schemaVersion: 2,
      defeatedBossIds: ['boss-a'],
      collectedAshOfWarIds: ['ash-a'],
    }));
    await expect(loadProgressState()).resolves.toEqual(state(['boss-a'], ['ash-a']));
  });

  it('ignores spell arrays injected into a v2 payload', async () => {
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify({
      schemaVersion: 2,
      defeatedBossIds: ['boss-a'],
      collectedAshOfWarIds: ['ash-a'],
      collectedSorceryIds: ['sorcery-injected'],
      collectedIncantationIds: ['incantation-injected'],
    }));

    await expect(loadProgressState()).resolves.toEqual(
      state(['boss-a'], ['ash-a']),
    );
  });

  it('persists Sorceries and Incantations independently without losing prior categories', async () => {
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(state(['boss-a'], ['ash-a'])));
    await addCollectedSorceryId('sorcery-a');
    await addCollectedIncantationId('incantation-a');
    await expect(loadProgressState()).resolves.toEqual(
      state(['boss-a'], ['ash-a'], ['sorcery-a'], ['incantation-a']),
    );
    await expect(loadCollectedSorceryIds()).resolves.toEqual(['sorcery-a']);
    await expect(loadCollectedIncantationIds()).resolves.toEqual(['incantation-a']);
  });

  it('removes spell progress independently', async () => {
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify(state(['boss-a'], ['ash-a'], ['sorcery-a'], ['incantation-a'])),
    );
    await removeCollectedSorceryId('sorcery-a');
    await removeCollectedIncantationId('incantation-a');
    await expect(loadProgressState()).resolves.toEqual(state(['boss-a'], ['ash-a']));
  });

  it('normalizes v3 idempotently and preserves first occurrence', async () => {
    const normalized = state(
      ['boss-b', 'boss-a'],
      ['ash-b', 'ash-a'],
    );
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(normalized));
    jest.clearAllMocks();
    await expect(loadProgressState()).resolves.toEqual(normalized);
    expect(AsyncStorage.setItem).not.toHaveBeenCalled();
  });

  it('normalizes invalid fields, duplicates and temporary IDs safely', async () => {
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify(
        state(
          ['boss-a', 3, '', 'sample-boss', ' boss-a '] as unknown as string[],
          ['future-ash', null, 'sample-ash'] as unknown as string[],
        ),
      ),
    );
    await expect(loadProgressState()).resolves.toEqual(
      state(['boss-a'], ['future-ash']),
    );
  });

  it('recovers known arrays from an unknown schema version', async () => {
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({
        schemaVersion: 99,
        defeatedBossIds: ['future-boss'],
        collectedAshOfWarIds: ['future-ash'],
        futureField: true,
      }),
    );
    await expect(loadProgressState()).resolves.toEqual(
      state(['future-boss'], ['future-ash']),
    );
  });

  it('preserves settings during migration and never clears storage', async () => {
    const settings = JSON.stringify({ language: 'en', theme: 'dark' });
    await AsyncStorage.setItem(SETTINGS_KEY, settings);
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({ schemaVersion: 1, defeatedBossIds: ['boss-a'] }),
    );
    await loadProgressState();
    await expect(AsyncStorage.getItem(SETTINGS_KEY)).resolves.toBe(settings);
    expect(AsyncStorage.clear).not.toHaveBeenCalled();
  });

  it('boss writes preserve collected Ashes', async () => {
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify(state([], ['ash-a'])),
    );
    await addDefeatedBossId('boss-a');
    await saveDefeatedBossIds(['boss-b']);
    await expect(loadProgressState()).resolves.toEqual(
      state(['boss-b'], ['ash-a']),
    );
  });

  it('Ash writes preserve defeated bosses and do not duplicate', async () => {
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify(state(['boss-a'])),
    );
    await addCollectedAshOfWarId('ash-a');
    await addCollectedAshOfWarId('ash-a');
    await expect(loadProgressState()).resolves.toEqual(
      state(['boss-a'], ['ash-a']),
    );
  });

  it('removes and toggles collected Ashes', async () => {
    await addCollectedAshOfWarId('ash-a');
    await removeCollectedAshOfWarId('ash-a');
    await expect(isAshOfWarCollected('ash-a')).resolves.toBe(false);
    await toggleCollectedAshOfWarId('ash-a');
    await expect(loadCollectedAshOfWarIds()).resolves.toEqual(['ash-a']);
    await toggleCollectedAshOfWarId('ash-a');
    await expect(loadCollectedAshOfWarIds()).resolves.toEqual([]);
  });

  it('boss removal preserves Ashes', async () => {
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify(state(['boss-a'], ['ash-a'])),
    );
    await removeDefeatedBossId('boss-a');
    await expect(loadProgressState()).resolves.toEqual(state([], ['ash-a']));
  });

  it('serializes boss and Ash operations without lost updates', async () => {
    await Promise.all([
      addDefeatedBossId('boss-a'),
      addCollectedAshOfWarId('ash-a'),
      addCollectedAshOfWarId('ash-b'),
    ]);
    await expect(loadProgressState()).resolves.toEqual(
      state(['boss-a'], ['ash-a', 'ash-b']),
    );
  });

  it('exposes category-specific loaders', async () => {
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify(state(['boss-a'], ['ash-a'])),
    );
    await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    await expect(loadCollectedAshOfWarIds()).resolves.toEqual(['ash-a']);
  });

  it('resets both categories and preserves unrelated keys', async () => {
    const settings = JSON.stringify({ language: 'pt-BR', theme: 'light' });
    await AsyncStorage.setItem(SETTINGS_KEY, settings);
    await AsyncStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify(state(['boss-a'], ['ash-a'])),
    );
    jest.clearAllMocks();
    await clearProgress();
    await expect(AsyncStorage.getItem(PROGRESS_KEY)).resolves.toBe(
      JSON.stringify(state()),
    );
    await expect(AsyncStorage.getItem(SETTINGS_KEY)).resolves.toBe(settings);
    expect(AsyncStorage.clear).not.toHaveBeenCalled();
    expect(AsyncStorage.removeItem).not.toHaveBeenCalled();
  });

  it('surfaces read and write failures with context', async () => {
    jest.mocked(AsyncStorage.getItem).mockRejectedValueOnce(new Error('read'));
    await expect(loadProgressState()).rejects.toThrow(
      'Failed to read progress from local storage.',
    );
    jest.mocked(AsyncStorage.setItem).mockRejectedValueOnce(new Error('write'));
    await expect(addCollectedAshOfWarId('ash-a')).rejects.toThrow(
      'Failed to save progress to local storage.',
    );
  });

  describe('specific boss regression coverage preserved from v1', () => {
    it('loads an empty boss list when no value is stored', async () => {
      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('migrates a legacy boss array to v2', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['boss-a', 'boss-b']),
      );
      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
      await expect(AsyncStorage.getItem(PROGRESS_KEY)).resolves.toBe(
        JSON.stringify(state(['boss-a', 'boss-b'])),
      );
    });

    it('removes sample IDs while migrating a legacy array', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['sample-old', 'real-id']),
      );
      await expect(loadDefeatedBossIds()).resolves.toEqual(['real-id']);
    });

    it('normalizes spaces while loading legacy IDs', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify([' boss-a ', '\tboss-b\n']),
      );
      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('deduplicates legacy IDs while preserving first occurrence', async () => {
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

    it('returns an empty boss list for null', async () => {
      await AsyncStorage.setItem(PROGRESS_KEY, 'null');
      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('returns an empty boss list for an object without progress fields', async () => {
      await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify({ id: 'boss-a' }));
      await expect(loadDefeatedBossIds()).resolves.toEqual([]);
    });

    it('drops invalid array members without losing valid IDs', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(['boss-a', 2, '', null]),
      );
      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    });

    it('propagates a contextualized read failure', async () => {
      jest.mocked(AsyncStorage.getItem).mockRejectedValueOnce(new Error('read'));
      await expect(loadDefeatedBossIds()).rejects.toThrow(
        'Failed to read progress from local storage.',
      );
    });

    it('does not rewrite canonical v3 progress during a read', async () => {
      await AsyncStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(state(['boss-a'], ['ash-a'])),
      );
      jest.clearAllMocks();
      await loadDefeatedBossIds();
      expect(AsyncStorage.setItem).not.toHaveBeenCalled();
      expect(AsyncStorage.removeItem).not.toHaveBeenCalled();
      expect(AsyncStorage.clear).not.toHaveBeenCalled();
    });

    it('saves a valid boss list as a complete v3 payload', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b']);
      await expect(AsyncStorage.getItem(PROGRESS_KEY)).resolves.toBe(
        JSON.stringify(state(['boss-a', 'boss-b'])),
      );
    });

    it('normalizes spaces before saving bosses', async () => {
      await saveDefeatedBossIds([' boss-a ', '\tboss-b\n']);
      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('removes duplicate boss IDs before saving', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-a', 'boss-b']);
      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('preserves first-occurrence order when saving bosses', async () => {
      await saveDefeatedBossIds(['boss-b', 'boss-a', ' boss-b ', 'boss-c']);
      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-b',
        'boss-a',
        'boss-c',
      ]);
    });

    it('removes invalid and temporary IDs when saving bosses', async () => {
      await saveDefeatedBossIds(
        ['boss-a', '', 'sample-boss', 2] as unknown as string[],
      );
      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    });

    it('surfaces a contextualized boss save failure', async () => {
      jest.mocked(AsyncStorage.setItem).mockRejectedValueOnce(new Error('write'));
      await expect(saveDefeatedBossIds(['boss-a'])).rejects.toThrow(
        'Failed to save progress to local storage.',
      );
    });

    it('adds a boss ID', async () => {
      await addDefeatedBossId('boss-a');
      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    });

    it('normalizes a boss ID before adding it', async () => {
      await addDefeatedBossId(' boss-a ');
      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    });

    it('does not duplicate an existing boss ID', async () => {
      await saveDefeatedBossIds(['boss-a']);
      await addDefeatedBossId('boss-a');
      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-a']);
    });

    it('preserves existing boss IDs when adding another', async () => {
      await saveDefeatedBossIds(['boss-a']);
      await addDefeatedBossId('boss-b');
      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('rejects an empty boss ID when adding', async () => {
      await expect(addDefeatedBossId(' \t ')).rejects.toThrow(
        'Boss ID must be a non-empty string.',
      );
    });

    it('surfaces a boss addition persistence failure', async () => {
      jest.mocked(AsyncStorage.setItem).mockRejectedValueOnce(new Error('write'));
      await expect(addDefeatedBossId('boss-a')).rejects.toThrow(
        'Failed to save progress to local storage.',
      );
    });

    it('removes an existing boss ID', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b']);
      await removeDefeatedBossId('boss-a');
      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-b']);
    });

    it('preserves other boss IDs during removal', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b', 'boss-c']);
      await removeDefeatedBossId('boss-b');
      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-c',
      ]);
    });

    it('does not alter progress when removing an unknown boss', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b']);
      await removeDefeatedBossId('future-boss');
      await expect(loadDefeatedBossIds()).resolves.toEqual([
        'boss-a',
        'boss-b',
      ]);
    });

    it('normalizes a boss ID before removing it', async () => {
      await saveDefeatedBossIds(['boss-a', 'boss-b']);
      await removeDefeatedBossId(' boss-a ');
      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-b']);
    });

    it('rejects an empty boss ID when removing', async () => {
      await expect(removeDefeatedBossId('')).rejects.toThrow(
        'Boss ID must be a non-empty string.',
      );
    });

    it('surfaces a boss removal persistence failure', async () => {
      await saveDefeatedBossIds(['boss-a']);
      jest.mocked(AsyncStorage.setItem).mockRejectedValueOnce(new Error('write'));
      await expect(removeDefeatedBossId('boss-a')).rejects.toThrow(
        'Failed to save progress to local storage.',
      );
    });

    it('reports a saved boss as defeated', async () => {
      await saveDefeatedBossIds(['boss-a']);
      await expect(isBossDefeated('boss-a')).resolves.toBe(true);
    });

    it('reports an unsaved boss as not defeated', async () => {
      await saveDefeatedBossIds(['boss-a']);
      await expect(isBossDefeated('boss-b')).resolves.toBe(false);
    });

    it('normalizes a boss ID before checking it', async () => {
      await saveDefeatedBossIds(['boss-a']);
      await expect(isBossDefeated(' boss-a ')).resolves.toBe(true);
    });

    it('returns false for an empty boss ID without reading storage', async () => {
      jest.clearAllMocks();
      await expect(isBossDefeated(' \t ')).resolves.toBe(false);
      expect(AsyncStorage.getItem).not.toHaveBeenCalled();
    });

    it('preserves initiation order for concurrent boss operations', async () => {
      await saveDefeatedBossIds(['boss-a']);
      await Promise.all([
        addDefeatedBossId('boss-b'),
        removeDefeatedBossId('boss-a'),
      ]);
      await expect(loadDefeatedBossIds()).resolves.toEqual(['boss-b']);
    });
  });
});

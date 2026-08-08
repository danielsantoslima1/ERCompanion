import AsyncStorage from '@react-native-async-storage/async-storage';

import { storageKeys } from './keys';
import { normalizeProgressId, normalizeProgressIds } from './validators';

let progressMutationQueue: Promise<void> = Promise.resolve();
export const PROGRESS_SCHEMA_VERSION = 4;

export interface ProgressStateV4 {
  readonly schemaVersion: typeof PROGRESS_SCHEMA_VERSION;
  readonly defeatedBossIds: readonly string[];
  readonly collectedAshOfWarIds: readonly string[];
  readonly collectedSorceryIds: readonly string[];
  readonly collectedIncantationIds: readonly string[];
  readonly collectedSpiritAshIds: readonly string[];
}

function enqueueProgressMutation<Result>(
  operation: () => Promise<Result>,
): Promise<Result> {
  const result = progressMutationQueue.then(operation, operation);
  progressMutationQueue = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
}

function createProgressState(
  defeatedBossIds: unknown = [],
  collectedAshOfWarIds: unknown = [],
  collectedSorceryIds: unknown = [],
  collectedIncantationIds: unknown = [],
  collectedSpiritAshIds: unknown = [],
): ProgressStateV4 {
  return {
    schemaVersion: PROGRESS_SCHEMA_VERSION,
    defeatedBossIds: normalizeProgressIds(defeatedBossIds),
    collectedAshOfWarIds: normalizeProgressIds(collectedAshOfWarIds),
    collectedSorceryIds: normalizeProgressIds(collectedSorceryIds),
    collectedIncantationIds: normalizeProgressIds(collectedIncantationIds),
    collectedSpiritAshIds: normalizeProgressIds(collectedSpiritAshIds),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseProgressState(value: unknown): {
  readonly state: ProgressStateV4;
  readonly shouldPersist: boolean;
} {
  if (Array.isArray(value)) {
    return { state: createProgressState(value), shouldPersist: true };
  }

  if (!isRecord(value)) {
    return { state: createProgressState(), shouldPersist: false };
  }

  const state = value.schemaVersion === 1
    ? createProgressState(value.defeatedBossIds)
    : value.schemaVersion === 2
      ? createProgressState(
          value.defeatedBossIds,
          value.collectedAshOfWarIds,
        )
      : createProgressState(
          value.defeatedBossIds,
          value.collectedAshOfWarIds,
          value.collectedSorceryIds,
          value.collectedIncantationIds,
          typeof value.schemaVersion === 'number' && value.schemaVersion >= 4
            ? value.collectedSpiritAshIds
            : [],
        );
  const canonicalValue = JSON.stringify(state);

  return {
    state,
    shouldPersist:
      value.schemaVersion !== PROGRESS_SCHEMA_VERSION ||
      JSON.stringify(value) !== canonicalValue,
  };
}

async function readProgressState(): Promise<ProgressStateV4> {
  let storedValue: string | null;

  try {
    storedValue = await AsyncStorage.getItem(storageKeys.defeatedBossIds);
  } catch (error: unknown) {
    throw new Error('Failed to read progress from local storage.', {
      cause: error,
    });
  }

  if (storedValue === null) {
    return createProgressState();
  }

  let parsedValue: unknown;

  try {
    parsedValue = JSON.parse(storedValue) as unknown;
  } catch {
    return createProgressState();
  }

  const { state, shouldPersist } = parseProgressState(parsedValue);

  if (shouldPersist) {
    await writeProgressState(state);
  }

  return state;
}

async function writeProgressState(state: ProgressStateV4): Promise<void> {
  const normalizedState = createProgressState(
    state.defeatedBossIds,
    state.collectedAshOfWarIds,
    state.collectedSorceryIds,
    state.collectedIncantationIds,
    state.collectedSpiritAshIds,
  );

  try {
    await AsyncStorage.setItem(
      storageKeys.defeatedBossIds,
      JSON.stringify(normalizedState),
    );
  } catch (error: unknown) {
    throw new Error('Failed to save progress to local storage.', {
      cause: error,
    });
  }
}

function requireProgressId(id: unknown, label: string): string {
  const normalizedId = normalizeProgressId(id);

  if (normalizedId === null) {
    throw new TypeError(`${label} ID must be a non-empty string.`);
  }

  return normalizedId;
}

async function updateProgressIds(
  field:
    | 'defeatedBossIds'
    | 'collectedAshOfWarIds'
    | 'collectedSorceryIds'
    | 'collectedIncantationIds'
    | 'collectedSpiritAshIds',
  id: string,
  shouldInclude: boolean,
): Promise<void> {
  const current = await readProgressState();
  const currentIds = current[field];
  const includesId = currentIds.includes(id);

  if (includesId === shouldInclude) {
    return;
  }

  const nextIds = shouldInclude
    ? [...currentIds, id]
    : currentIds.filter((currentId) => currentId !== id);

  await writeProgressState({ ...current, [field]: nextIds });
}

export async function loadProgressState(): Promise<ProgressStateV4> {
  await progressMutationQueue;
  return readProgressState();
}

export async function loadDefeatedBossIds(): Promise<string[]> {
  return [...(await loadProgressState()).defeatedBossIds];
}

export async function loadCollectedAshOfWarIds(): Promise<string[]> {
  return [...(await loadProgressState()).collectedAshOfWarIds];
}

export async function loadCollectedSorceryIds(): Promise<string[]> {
  return [...(await loadProgressState()).collectedSorceryIds];
}

export async function loadCollectedIncantationIds(): Promise<string[]> {
  return [...(await loadProgressState()).collectedIncantationIds];
}

export async function loadCollectedSpiritAshIds(): Promise<string[]> {
  return [...(await loadProgressState()).collectedSpiritAshIds];
}

export async function saveDefeatedBossIds(ids: readonly string[]): Promise<void> {
  return enqueueProgressMutation(async () => {
    const current = await readProgressState();
    await writeProgressState({ ...current, defeatedBossIds: normalizeProgressIds(ids) });
  });
}

export async function addDefeatedBossId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Boss');
  return enqueueProgressMutation(() =>
    updateProgressIds('defeatedBossIds', normalizedId, true),
  );
}

export async function removeDefeatedBossId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Boss');
  return enqueueProgressMutation(() =>
    updateProgressIds('defeatedBossIds', normalizedId, false),
  );
}

export async function isBossDefeated(id: string): Promise<boolean> {
  const normalizedId = normalizeProgressId(id);
  return normalizedId === null
    ? false
    : (await loadProgressState()).defeatedBossIds.includes(normalizedId);
}

export async function addCollectedAshOfWarId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Ash of War');
  return enqueueProgressMutation(() =>
    updateProgressIds('collectedAshOfWarIds', normalizedId, true),
  );
}

export async function removeCollectedAshOfWarId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Ash of War');
  return enqueueProgressMutation(() =>
    updateProgressIds('collectedAshOfWarIds', normalizedId, false),
  );
}

export async function toggleCollectedAshOfWarId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Ash of War');
  return enqueueProgressMutation(async () => {
    const current = await readProgressState();
    await updateProgressIds(
      'collectedAshOfWarIds',
      normalizedId,
      !current.collectedAshOfWarIds.includes(normalizedId),
    );
  });
}

export async function isAshOfWarCollected(id: string): Promise<boolean> {
  const normalizedId = normalizeProgressId(id);
  return normalizedId === null
    ? false
    : (await loadProgressState()).collectedAshOfWarIds.includes(normalizedId);
}

export async function addCollectedSorceryId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Sorcery');
  return enqueueProgressMutation(() =>
    updateProgressIds('collectedSorceryIds', normalizedId, true),
  );
}

export async function removeCollectedSorceryId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Sorcery');
  return enqueueProgressMutation(() =>
    updateProgressIds('collectedSorceryIds', normalizedId, false),
  );
}

export async function addCollectedIncantationId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Incantation');
  return enqueueProgressMutation(() =>
    updateProgressIds('collectedIncantationIds', normalizedId, true),
  );
}

export async function removeCollectedIncantationId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Incantation');
  return enqueueProgressMutation(() =>
    updateProgressIds('collectedIncantationIds', normalizedId, false),
  );
}

export async function addCollectedSpiritAshId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Spirit Ash');
  return enqueueProgressMutation(() => updateProgressIds('collectedSpiritAshIds', normalizedId, true));
}

export async function removeCollectedSpiritAshId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Spirit Ash');
  return enqueueProgressMutation(() => updateProgressIds('collectedSpiritAshIds', normalizedId, false));
}

export async function toggleCollectedSpiritAshId(id: string): Promise<void> {
  const normalizedId = requireProgressId(id, 'Spirit Ash');
  return enqueueProgressMutation(async () => {
    const current = await readProgressState();
    await updateProgressIds('collectedSpiritAshIds', normalizedId, !current.collectedSpiritAshIds.includes(normalizedId));
  });
}

export async function clearProgress(): Promise<void> {
  return enqueueProgressMutation(() => writeProgressState(createProgressState()));
}

import AsyncStorage from '@react-native-async-storage/async-storage';

import { storageKeys } from './keys';
import { normalizeProgressId, normalizeProgressIds } from './validators';

let progressMutationQueue: Promise<void> = Promise.resolve();
export const PROGRESS_SCHEMA_VERSION = 2;

export interface ProgressStateV2 {
  readonly schemaVersion: typeof PROGRESS_SCHEMA_VERSION;
  readonly defeatedBossIds: readonly string[];
  readonly collectedAshOfWarIds: readonly string[];
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
): ProgressStateV2 {
  return {
    schemaVersion: PROGRESS_SCHEMA_VERSION,
    defeatedBossIds: normalizeProgressIds(defeatedBossIds),
    collectedAshOfWarIds: normalizeProgressIds(collectedAshOfWarIds),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseProgressState(value: unknown): {
  readonly state: ProgressStateV2;
  readonly shouldPersist: boolean;
} {
  if (Array.isArray(value)) {
    return { state: createProgressState(value), shouldPersist: true };
  }

  if (!isRecord(value)) {
    return { state: createProgressState(), shouldPersist: false };
  }

  const state = createProgressState(
    value.defeatedBossIds,
    value.collectedAshOfWarIds,
  );
  const canonicalValue = JSON.stringify(state);

  return {
    state,
    shouldPersist:
      value.schemaVersion !== PROGRESS_SCHEMA_VERSION ||
      JSON.stringify(value) !== canonicalValue,
  };
}

async function readProgressState(): Promise<ProgressStateV2> {
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

async function writeProgressState(state: ProgressStateV2): Promise<void> {
  const normalizedState = createProgressState(
    state.defeatedBossIds,
    state.collectedAshOfWarIds,
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
  field: 'defeatedBossIds' | 'collectedAshOfWarIds',
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

export async function loadProgressState(): Promise<ProgressStateV2> {
  await progressMutationQueue;
  return readProgressState();
}

export async function loadDefeatedBossIds(): Promise<string[]> {
  return [...(await loadProgressState()).defeatedBossIds];
}

export async function loadCollectedAshOfWarIds(): Promise<string[]> {
  return [...(await loadProgressState()).collectedAshOfWarIds];
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

export async function clearProgress(): Promise<void> {
  return enqueueProgressMutation(() => writeProgressState(createProgressState()));
}

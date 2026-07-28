import AsyncStorage from '@react-native-async-storage/async-storage';

import { storageKeys } from './keys';
import { normalizeBossId, validateDefeatedBossIds } from './validators';

let progressMutationQueue: Promise<void> = Promise.resolve();
export const PROGRESS_SCHEMA_VERSION = 1;

interface StoredProgress {
  readonly schemaVersion: typeof PROGRESS_SCHEMA_VERSION;
  readonly defeatedBossIds: readonly string[];
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

function createStoredProgress(ids: readonly string[]): StoredProgress {
  return { schemaVersion: PROGRESS_SCHEMA_VERSION, defeatedBossIds: ids };
}

async function readDefeatedBossIds(): Promise<string[]> {
  let storedValue: string | null;

  try {
    storedValue = await AsyncStorage.getItem(storageKeys.defeatedBossIds);
  } catch (error: unknown) {
    throw new Error('Failed to read defeated boss IDs from local storage.', {
      cause: error,
    });
  }

  if (storedValue === null) {
    return [];
  }

  let parsedValue: unknown;

  try {
    parsedValue = JSON.parse(storedValue) as unknown;
  } catch {
    return [];
  }

  const legacyIds = validateDefeatedBossIds(parsedValue);
  const currentIds =
    typeof parsedValue === 'object' &&
    parsedValue !== null &&
    !Array.isArray(parsedValue) &&
    'schemaVersion' in parsedValue &&
    parsedValue.schemaVersion === PROGRESS_SCHEMA_VERSION &&
    'defeatedBossIds' in parsedValue
      ? validateDefeatedBossIds(parsedValue.defeatedBossIds)
      : null;
  const sourceIds = currentIds ?? legacyIds;

  if (sourceIds === null) {
    return [];
  }

  const migratedIds = sourceIds.filter((id) => !id.startsWith('sample-'));
  const requiresWrite =
    currentIds === null ||
    migratedIds.length !== sourceIds.length ||
    JSON.stringify(parsedValue) !== JSON.stringify(createStoredProgress(migratedIds));

  if (requiresWrite) {
    await writeDefeatedBossIds(migratedIds);
  }

  return migratedIds;
}

async function writeDefeatedBossIds(ids: readonly string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(
      storageKeys.defeatedBossIds,
      JSON.stringify(createStoredProgress(ids)),
    );
  } catch (error: unknown) {
    throw new Error('Failed to save defeated boss IDs to local storage.', {
      cause: error,
    });
  }
}

function requireValidBossId(id: unknown): string {
  const normalizedId = normalizeBossId(id);

  if (normalizedId === null) {
    throw new TypeError('Boss ID must be a non-empty string.');
  }

  return normalizedId;
}

export async function loadDefeatedBossIds(): Promise<string[]> {
  await progressMutationQueue;
  return readDefeatedBossIds();
}

export async function saveDefeatedBossIds(ids: readonly string[]): Promise<void> {
  const normalizedIds = validateDefeatedBossIds(ids);

  if (normalizedIds === null) {
    throw new TypeError('Defeated boss IDs must be non-empty strings.');
  }

  return enqueueProgressMutation(() => writeDefeatedBossIds(normalizedIds));
}

export async function addDefeatedBossId(id: string): Promise<void> {
  const normalizedId = requireValidBossId(id);

  return enqueueProgressMutation(async () => {
    const currentIds = await readDefeatedBossIds();

    if (currentIds.includes(normalizedId)) {
      return;
    }

    await writeDefeatedBossIds([...currentIds, normalizedId]);
  });
}

export async function removeDefeatedBossId(id: string): Promise<void> {
  const normalizedId = requireValidBossId(id);

  return enqueueProgressMutation(async () => {
    const currentIds = await readDefeatedBossIds();
    const updatedIds = currentIds.filter(
      (currentId) => currentId !== normalizedId,
    );

    if (updatedIds.length === currentIds.length) {
      return;
    }

    await writeDefeatedBossIds(updatedIds);
  });
}

export async function isBossDefeated(id: string): Promise<boolean> {
  const normalizedId = normalizeBossId(id);

  if (normalizedId === null) {
    return false;
  }

  const currentIds = await loadDefeatedBossIds();
  return currentIds.includes(normalizedId);
}

export async function clearProgress(): Promise<void> {
  return enqueueProgressMutation(() => writeDefeatedBossIds([]));
}

import { ashesOfWar, type AshOfWarContentPack } from './ashes-of-war';
import {
  bossEncounters,
  catalogRegions,
  type ContentPack,
} from './catalog';

export interface CompletionProgress {
  readonly completed: number;
  readonly total: number;
  readonly percentage: number;
}

export const PROGRESS_TOTALS = {
  bosses: 208,
  ashesOfWar: 116,
  combined: 324,
  bossByContentPack: {
    'base-game': 165,
    'shadow-of-the-erdtree': 43,
  },
  ashOfWarByContentPack: {
    'base-game': 91,
    'shadow-of-the-erdtree': 25,
  },
} as const;

export function calculateProgressPercentage(
  completed: number,
  total: number,
): number {
  if (!Number.isFinite(completed) || !Number.isFinite(total) || total <= 0) {
    return 0;
  }

  const safeCompleted = Math.min(Math.max(completed, 0), total);
  return Math.round((safeCompleted / total) * 100);
}

function createKnownProgress(
  storedIds: readonly string[],
  knownIds: ReadonlySet<string>,
): CompletionProgress {
  const completed = new Set(
    storedIds.filter((id) => knownIds.has(id)),
  ).size;
  const total = knownIds.size;

  return {
    completed,
    total,
    percentage: calculateProgressPercentage(completed, total),
  };
}

const bossIds = new Set(bossEncounters.map((boss) => boss.id));
const ashOfWarIds = new Set(ashesOfWar.map((ash) => ash.id));

function getBossIdsByContentPack(contentPack: ContentPack): Set<string> {
  const regionIds = new Set(
    catalogRegions
      .filter((region) => region.contentPack === contentPack)
      .map((region) => region.id),
  );
  return new Set(
    bossEncounters
      .filter((boss) => regionIds.has(boss.regionId))
      .map((boss) => boss.id),
  );
}

function getAshIdsByContentPack(
  contentPack: AshOfWarContentPack,
): Set<string> {
  return new Set(
    ashesOfWar
      .filter((ash) => ash.contentPack === contentPack)
      .map((ash) => ash.id),
  );
}

export function calculateBossCatalogProgress(
  defeatedBossIds: readonly string[],
): CompletionProgress {
  return createKnownProgress(defeatedBossIds, bossIds);
}

export function calculateBossCatalogProgressByContentPack(
  defeatedBossIds: readonly string[],
  contentPack: ContentPack,
): CompletionProgress {
  return createKnownProgress(
    defeatedBossIds,
    getBossIdsByContentPack(contentPack),
  );
}

export function calculateAshOfWarProgress(
  collectedAshOfWarIds: readonly string[],
): CompletionProgress {
  return createKnownProgress(collectedAshOfWarIds, ashOfWarIds);
}

export function calculateAshOfWarProgressByContentPack(
  collectedAshOfWarIds: readonly string[],
  contentPack: AshOfWarContentPack,
): CompletionProgress {
  return createKnownProgress(
    collectedAshOfWarIds,
    getAshIdsByContentPack(contentPack),
  );
}

export function calculateCombinedProgress(
  defeatedBossIds: readonly string[],
  collectedAshOfWarIds: readonly string[],
): CompletionProgress {
  const completed =
    calculateBossCatalogProgress(defeatedBossIds).completed +
    calculateAshOfWarProgress(collectedAshOfWarIds).completed;

  return {
    completed,
    total: PROGRESS_TOTALS.combined,
    percentage: calculateProgressPercentage(
      completed,
      PROGRESS_TOTALS.combined,
    ),
  };
}

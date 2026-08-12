import { ashesOfWar, type AshOfWarContentPack } from './ashes-of-war';
import {
  bossEncounters,
  catalogRegions,
  type ContentPack,
} from './catalog';
import { incantations, sorceries, type SpellContentPack } from './spells';
import { spiritAshes, type SpiritAshContentPack } from './spirit-ashes';
import { talismans, type TalismanContentPack } from './talismans';

export interface CompletionProgress {
  readonly completed: number;
  readonly total: number;
  readonly percentage: number;
}

export const PROGRESS_TOTALS = {
  bosses: 208,
  ashesOfWar: 116,
  sorceries: 84,
  incantations: 129,
  spiritAshes: 84,
  talismans: 154,
  combined: 775,
  bossByContentPack: {
    'base-game': 165,
    'shadow-of-the-erdtree': 43,
  },
  ashOfWarByContentPack: {
    'base-game': 91,
    'shadow-of-the-erdtree': 25,
  },
  sorceryByContentPack: {
    'base-game': 70,
    'shadow-of-the-erdtree': 14,
  },
  incantationByContentPack: {
    'base-game': 101,
    'shadow-of-the-erdtree': 28,
  },
  spiritAshByContentPack: { 'base-game': 64, 'shadow-of-the-erdtree': 20 },
  talismanByContentPack: { 'base-game': 115, 'shadow-of-the-erdtree': 39 },
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
const sorceryIds = new Set(sorceries.map((entry) => entry.id));
const incantationIds = new Set(incantations.map((entry) => entry.id));
const spiritAshIds = new Set(spiritAshes.map((entry) => entry.id));
const talismanIds = new Set(talismans.map((entry) => entry.id));

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

export function calculateSorceryProgress(
  collectedIds: readonly string[],
): CompletionProgress {
  return createKnownProgress(collectedIds, sorceryIds);
}

export function calculateIncantationProgress(
  collectedIds: readonly string[],
): CompletionProgress {
  return createKnownProgress(collectedIds, incantationIds);
}

export function calculateSpiritAshProgress(
  collectedIds: readonly string[],
): CompletionProgress {
  return createKnownProgress(collectedIds, spiritAshIds);
}

export function calculateSpiritAshProgressByContentPack(
  collectedIds: readonly string[],
  contentPack: SpiritAshContentPack,
): CompletionProgress {
  return createKnownProgress(
    collectedIds,
    new Set(spiritAshes.filter((entry) => entry.contentPack === contentPack).map((entry) => entry.id)),
  );
}

export function calculateTalismanProgress(collectedIds: readonly string[]): CompletionProgress {
  return createKnownProgress(collectedIds, talismanIds);
}

export function calculateTalismanProgressByContentPack(
  collectedIds: readonly string[], contentPack: TalismanContentPack,
): CompletionProgress {
  return createKnownProgress(collectedIds, new Set(talismans.filter((entry) => entry.contentPack === contentPack).map((entry) => entry.id)));
}

function getSpellIdsByContentPack(
  entries: readonly { readonly id: string; readonly contentPack: SpellContentPack }[],
  contentPack: SpellContentPack,
): Set<string> {
  return new Set(
    entries.filter((entry) => entry.contentPack === contentPack).map((entry) => entry.id),
  );
}

export function calculateSorceryProgressByContentPack(
  collectedIds: readonly string[],
  contentPack: SpellContentPack,
): CompletionProgress {
  return createKnownProgress(
    collectedIds,
    getSpellIdsByContentPack(sorceries, contentPack),
  );
}

export function calculateIncantationProgressByContentPack(
  collectedIds: readonly string[],
  contentPack: SpellContentPack,
): CompletionProgress {
  return createKnownProgress(
    collectedIds,
    getSpellIdsByContentPack(incantations, contentPack),
  );
}

export function calculateCombinedProgress(
  defeatedBossIds: readonly string[],
  collectedAshOfWarIds: readonly string[],
  collectedSorceryIds: readonly string[] = [],
  collectedIncantationIds: readonly string[] = [],
  collectedSpiritAshIds: readonly string[] = [],
  collectedTalismanIds: readonly string[] = [],
): CompletionProgress {
  const completed =
    calculateBossCatalogProgress(defeatedBossIds).completed +
    calculateAshOfWarProgress(collectedAshOfWarIds).completed +
    calculateSorceryProgress(collectedSorceryIds).completed +
    calculateIncantationProgress(collectedIncantationIds).completed +
    calculateSpiritAshProgress(collectedSpiritAshIds).completed +
    calculateTalismanProgress(collectedTalismanIds).completed;

  return {
    completed,
    total: PROGRESS_TOTALS.combined,
    percentage: calculateProgressPercentage(
      completed,
      PROGRESS_TOTALS.combined,
    ),
  };
}

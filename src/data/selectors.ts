import type {
  BossEncounter,
  BossEncounterWithProgress,
  CatalogRegion,
  ContentPack,
} from './catalog';
import type { Language } from '../types';
import { getLocalizedText } from '../i18n';

export interface ProgressSummary {
  defeated: number;
  total: number;
  percentage: number;
}

export interface BossWithRegion {
  readonly boss: BossEncounter;
  readonly region: CatalogRegion;
}

const CONTENT_PACK_ORDER: Readonly<Record<ContentPack, number>> = {
  'base-game': 0,
  'shadow-of-the-erdtree': 1,
};

export function sortRegions(
  regionList: readonly CatalogRegion[],
): CatalogRegion[] {
  return [...regionList].sort((firstRegion, secondRegion) => {
    const packDifference =
      CONTENT_PACK_ORDER[firstRegion.contentPack] -
      CONTENT_PACK_ORDER[secondRegion.contentPack];
    return packDifference || firstRegion.displayOrder - secondRegion.displayOrder;
  });
}

export function getRegionsByContentPack(
  regionList: readonly CatalogRegion[],
  contentPack: ContentPack,
): CatalogRegion[] {
  return sortRegions(regionList.filter((region) => region.contentPack === contentPack));
}

export function findRegionById(
  regionList: readonly CatalogRegion[],
  regionId: string,
): CatalogRegion | undefined {
  return regionList.find((region) => region.id === regionId);
}

export function getBossesByRegion(
  bossList: readonly BossEncounter[],
  regionId: string,
): BossEncounter[] {
  return bossList.filter((boss) => boss.regionId === regionId);
}

export function findBossById(
  bossList: readonly BossEncounter[],
  bossId: string,
): BossEncounter | undefined {
  return bossList.find((boss) => boss.id === bossId);
}

export function findBossWithRegion(
  bossList: readonly BossEncounter[],
  regionList: readonly CatalogRegion[],
  bossId: string,
): BossWithRegion | undefined {
  const boss = findBossById(bossList, bossId);
  if (!boss) return undefined;
  const region = findRegionById(regionList, boss.regionId);
  return region ? { boss, region } : undefined;
}

export function countBosses(bossList: readonly BossEncounter[]): number {
  return bossList.length;
}

export function countBossesByRegion(
  bossList: readonly BossEncounter[],
  regionId: string,
): number {
  return getBossesByRegion(bossList, regionId).length;
}

export function getValidDefeatedBossIds(
  bossList: readonly BossEncounter[],
  defeatedBossIds: ReadonlySet<string>,
): Set<string> {
  const validIds = new Set(bossList.map((boss) => boss.id));
  return new Set([...defeatedBossIds].filter((id) => validIds.has(id)));
}

export type BossFilter = 'all' | 'defeated' | 'not-defeated';

export function searchAndFilterBosses(
  bossList: readonly BossEncounterWithProgress[],
  query: string,
  filter: BossFilter,
  language: Language,
): BossEncounterWithProgress[] {
  const normalizedQuery = query.trim().toLocaleLowerCase(language);
  return bossList.filter((boss) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'defeated' && boss.isDefeated) ||
      (filter === 'not-defeated' && !boss.isDefeated);
    if (!matchesFilter || normalizedQuery === '') return matchesFilter;
    const searchable = [
      boss.name,
      boss.location,
      boss.availability,
      ...(boss.barNames ?? []),
      ...(boss.mainParticipants ?? []),
      ...(boss.phases?.map((phase) => phase.name) ?? []),
    ].filter((value) => value !== undefined);
    return searchable.some((value) =>
      getLocalizedText(value, language)
        .toLocaleLowerCase(language)
        .includes(normalizedQuery),
    );
  });
}

export function combineBossesWithProgress(
  bossList: readonly BossEncounter[],
  defeatedBossIds: ReadonlySet<string>,
): BossEncounterWithProgress[] {
  return bossList.map((boss) => ({
    ...boss,
    isDefeated: defeatedBossIds.has(boss.id),
  }));
}

function createProgressSummary(
  bossList: readonly BossEncounter[],
  defeatedBossIds: ReadonlySet<string>,
): ProgressSummary {
  const total = bossList.length;
  const defeated = bossList.reduce(
    (count, boss) => count + (defeatedBossIds.has(boss.id) ? 1 : 0),
    0,
  );
  const percentage =
    total === 0 ? 0 : Math.round((defeated / total) * 100);

  return {
    defeated,
    total,
    percentage,
  };
}

export function calculateTotalProgress(
  bossList: readonly BossEncounter[],
  defeatedBossIds: ReadonlySet<string>,
): ProgressSummary {
  return createProgressSummary(bossList, defeatedBossIds);
}

export function calculateRegionProgress(
  bossList: readonly BossEncounter[],
  regionId: string,
  defeatedBossIds: ReadonlySet<string>,
): ProgressSummary {
  const regionBosses = getBossesByRegion(bossList, regionId);
  return createProgressSummary(regionBosses, defeatedBossIds);
}

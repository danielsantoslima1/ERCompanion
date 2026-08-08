import type {
  BossEncounter,
  BossEncounterWithProgress,
  CatalogRegion,
  ContentPack,
} from './catalog';
import type { Language } from '../types';
import { getLocalizedText } from '../i18n';
import {
  searchAndSortByRelevance,
  type SearchRelevanceFields,
} from '../utils/search-relevance';

export interface ProgressSummary {
  defeated: number;
  total: number;
  percentage: number;
}

export interface BossWithRegion {
  readonly boss: BossEncounter;
  readonly region: CatalogRegion;
}

export function compareLocalizedText(
  firstText: string,
  secondText: string,
  language: Language,
): number {
  return firstText.localeCompare(secondText, language, {
    sensitivity: 'base',
    usage: 'sort',
  });
}

export function sortRegionsAlphabetically(
  regionList: readonly CatalogRegion[],
  language: Language,
): CatalogRegion[] {
  return [...regionList].sort((firstRegion, secondRegion) => {
    const nameDifference = compareLocalizedText(
      getLocalizedText(firstRegion.name, language),
      getLocalizedText(secondRegion.name, language),
      language,
    );
    return nameDifference || firstRegion.id.localeCompare(secondRegion.id);
  });
}

export function getRegionsByContentPack(
  regionList: readonly CatalogRegion[],
  contentPack: ContentPack,
  language: Language,
): CatalogRegion[] {
  return sortRegionsAlphabetically(
    regionList.filter((region) => region.contentPack === contentPack),
    language,
  );
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

export function getBossesByContentPack(
  bossList: readonly BossEncounter[],
  regionList: readonly CatalogRegion[],
  contentPack: ContentPack,
): BossEncounter[] {
  const regionIds = new Set(
    regionList
      .filter((region) => region.contentPack === contentPack)
      .map((region) => region.id),
  );
  return bossList.filter((boss) => regionIds.has(boss.regionId));
}

export function isContentPack(value: string): value is ContentPack {
  return value === 'base-game' || value === 'shadow-of-the-erdtree';
}

export function sortBossesAlphabetically<T extends BossEncounter>(
  bossList: readonly T[],
  language: Language,
): T[] {
  return [...bossList].sort((firstBoss, secondBoss) => {
    const nameDifference = compareLocalizedText(
      getLocalizedText(firstBoss.name, language),
      getLocalizedText(secondBoss.name, language),
      language,
    );
    return nameDifference || firstBoss.id.localeCompare(secondBoss.id);
  });
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

function getLocalizedAlternates(
  value: { readonly 'pt-BR': string; readonly en: string },
  language: Language,
): string[] {
  const displayed = getLocalizedText(value, language);
  return [value['pt-BR'], value.en].filter(
    (candidate) => candidate !== displayed,
  );
}

function getBossSearchFields(
  boss: BossEncounterWithProgress,
  language: Language,
  region?: CatalogRegion,
): SearchRelevanceFields {
  return {
    displayedName: getLocalizedText(boss.name, language),
    alternateNames: [
      ...getLocalizedAlternates(boss.name, language),
      ...(boss.originalName
        ? [
            getLocalizedText(boss.originalName, language),
            ...getLocalizedAlternates(boss.originalName, language),
          ]
        : []),
      ...(boss.barNames ?? []).flatMap((name) => [
        getLocalizedText(name, language),
        ...getLocalizedAlternates(name, language),
      ]),
    ],
    locations: [
      getLocalizedText(boss.location, language),
      ...getLocalizedAlternates(boss.location, language),
      ...(region
        ? [
            getLocalizedText(region.name, language),
            ...getLocalizedAlternates(region.name, language),
          ]
        : []),
    ],
    npcs: (boss.mainParticipants ?? []).flatMap((participant) => [
      getLocalizedText(participant, language),
      ...getLocalizedAlternates(participant, language),
    ]),
    metadata: [
      ...(boss.availability
        ? [
            getLocalizedText(boss.availability, language),
            ...getLocalizedAlternates(boss.availability, language),
          ]
        : []),
      ...(boss.phases ?? []).flatMap((phase) => [
        getLocalizedText(phase.name, language),
        ...getLocalizedAlternates(phase.name, language),
      ]),
    ],
  };
}

function matchesBossFilter(
  boss: BossEncounterWithProgress,
  filter: BossFilter,
): boolean {
  return (
    filter === 'all' ||
    (filter === 'defeated' && boss.isDefeated) ||
    (filter === 'not-defeated' && !boss.isDefeated)
  );
}

function compareBossNames(
  first: BossEncounter,
  second: BossEncounter,
  language: Language,
): number {
  return compareLocalizedText(
    getLocalizedText(first.name, language),
    getLocalizedText(second.name, language),
    language,
  );
}

export function searchAndFilterBosses(
  bossList: readonly BossEncounterWithProgress[],
  query: string,
  filter: BossFilter,
  language: Language,
): BossEncounterWithProgress[] {
  return searchAndSortByRelevance(
    bossList.filter((boss) => matchesBossFilter(boss, filter)),
    query,
    (boss) => getBossSearchFields(boss, language),
    (first, second) => compareBossNames(first, second, language),
    (boss) => boss.id,
  );
}

export function searchAndFilterBossesByContentPack(
  bossList: readonly BossEncounterWithProgress[],
  regionList: readonly CatalogRegion[],
  query: string,
  filter: BossFilter,
  language: Language,
): BossEncounterWithProgress[] {
  const regionById = new Map(regionList.map((region) => [region.id, region]));

  return searchAndSortByRelevance(
    bossList.filter((boss) => matchesBossFilter(boss, filter)),
    query,
    (boss) =>
      getBossSearchFields(boss, language, regionById.get(boss.regionId)),
    (first, second) => compareBossNames(first, second, language),
    (boss) => boss.id,
  );
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

export function calculateContentPackProgress(
  bossList: readonly BossEncounter[],
  regionList: readonly CatalogRegion[],
  contentPack: ContentPack,
  defeatedBossIds: ReadonlySet<string>,
): ProgressSummary {
  return createProgressSummary(
    getBossesByContentPack(bossList, regionList, contentPack),
    defeatedBossIds,
  );
}

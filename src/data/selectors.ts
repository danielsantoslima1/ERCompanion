import type {
  BossEncounter,
  BossEncounterWithProgress,
  Region,
} from '../types';

export interface ProgressSummary {
  defeated: number;
  total: number;
  percentage: number;
}

export function sortRegions(regionList: readonly Region[]): Region[] {
  return [...regionList].sort(
    (firstRegion, secondRegion) =>
      firstRegion.displayOrder - secondRegion.displayOrder,
  );
}

export function findRegionById(
  regionList: readonly Region[],
  regionId: string,
): Region | undefined {
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

export function countBosses(bossList: readonly BossEncounter[]): number {
  return bossList.length;
}

export function countBossesByRegion(
  bossList: readonly BossEncounter[],
  regionId: string,
): number {
  return getBossesByRegion(bossList, regionId).length;
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

import type { BossEncounter, CatalogRegion } from '../catalog';
import {
  calculateContentPackProgress,
  calculateRegionProgress,
  calculateTotalProgress,
  combineBossesWithProgress,
  compareLocalizedText,
  countBosses,
  countBossesByRegion,
  findBossById,
  findBossWithRegion,
  findRegionById,
  getBossesByContentPack,
  getBossesByRegion,
  isContentPack,
  sortBossesAlphabetically,
  sortRegionsAlphabetically,
} from '../selectors';

const regions: readonly CatalogRegion[] = [
  {
    id: 'region-late',
    name: { 'pt-BR': 'Região tardia', en: 'Late region' },
    contentPack: 'base-game',
    displayOrder: 20,
  },
  {
    id: 'region-first',
    name: { 'pt-BR': 'Primeira região', en: 'First region' },
    contentPack: 'base-game',
    displayOrder: 10,
  },
];

const bosses: readonly BossEncounter[] = [
  {
    id: 'boss-a',
    name: { 'pt-BR': 'Chefe A', en: 'Boss A' },
    location: { 'pt-BR': 'Local A', en: 'Location A' },
    regionId: 'region-first',
  },
  {
    id: 'boss-b',
    name: { 'pt-BR': 'Chefe B', en: 'Boss B' },
    location: { 'pt-BR': 'Local B', en: 'Location B' },
    regionId: 'region-first',
  },
  {
    id: 'boss-c',
    name: { 'pt-BR': 'Chefe C', en: 'Boss C' },
    location: { 'pt-BR': 'Local C', en: 'Location C' },
    regionId: 'region-late',
  },
];

describe('data selectors', () => {
  it('sorts regions alphabetically by localized name instead of displayOrder', () => {
    expect(sortRegionsAlphabetically(regions, 'pt-BR').map((region) => region.id)).toEqual([
      'region-first',
      'region-late',
    ]);
  });

  it('does not modify the original region array while sorting', () => {
    const originalOrder = regions.map((region) => region.id);

    sortRegionsAlphabetically(regions, 'pt-BR');

    expect(regions.map((region) => region.id)).toEqual(originalOrder);
  });

  it('uses locale-aware, accent-insensitive comparison', () => {
    expect(compareLocalizedText('Árvore', 'arvore', 'pt-BR')).toBe(0);
    expect(compareLocalizedText('boss', 'Boss', 'en')).toBe(0);
  });

  it('reorders regions when localized names differ by language', () => {
    const localizedRegions: readonly CatalogRegion[] = [
      { ...regions[0], name: { 'pt-BR': 'Abadia', en: 'Zoo' } },
      { ...regions[1], name: { 'pt-BR': 'Zoológico', en: 'Abbey' } },
    ];
    expect(sortRegionsAlphabetically(localizedRegions, 'pt-BR').map(({ id }) => id))
      .toEqual(['region-late', 'region-first']);
    expect(sortRegionsAlphabetically(localizedRegions, 'en').map(({ id }) => id))
      .toEqual(['region-first', 'region-late']);
  });

  it('sorts bosses alphabetically and breaks equal names by ID', () => {
    const equalNameBosses = [
      { ...bosses[1], name: bosses[0].name },
      bosses[0],
      bosses[2],
    ];
    expect(sortBossesAlphabetically(equalNameBosses, 'en').map(({ id }) => id))
      .toEqual(['boss-a', 'boss-b', 'boss-c']);
  });

  it('does not reorder phases, participants, summons, or auxiliaries', () => {
    const structuredBoss: BossEncounter = {
      ...bosses[0],
      phases: [
        { name: { 'pt-BR': 'Segunda', en: 'Second' } },
        { name: { 'pt-BR': 'Primeira', en: 'First' } },
      ],
      mainParticipants: [
        { 'pt-BR': 'Zeta', en: 'Zeta' },
        { 'pt-BR': 'Alfa', en: 'Alpha' },
      ],
      summons: [
        { 'pt-BR': 'Summon Z', en: 'Summon Z' },
        { 'pt-BR': 'Summon A', en: 'Summon A' },
      ],
      auxiliaryEnemies: [
        { 'pt-BR': 'Auxiliar Z', en: 'Auxiliary Z' },
        { 'pt-BR': 'Auxiliar A', en: 'Auxiliary A' },
      ],
    };
    const [sortedBoss] = sortBossesAlphabetically([structuredBoss], 'pt-BR');
    expect(sortedBoss.phases).toBe(structuredBoss.phases);
    expect(sortedBoss.mainParticipants).toBe(structuredBoss.mainParticipants);
    expect(sortedBoss.summons).toBe(structuredBoss.summons);
    expect(sortedBoss.auxiliaryEnemies).toBe(structuredBoss.auxiliaryEnemies);
  });

  it('selects and calculates progress by content pack', () => {
    expect(getBossesByContentPack(bosses, regions, 'base-game')).toHaveLength(3);
    expect(
      calculateContentPackProgress(
        bosses,
        regions,
        'base-game',
        new Set(['boss-a']),
      ),
    ).toEqual({ defeated: 1, total: 3, percentage: 33 });
    expect(isContentPack('base-game')).toBe(true);
    expect(isContentPack('invalid')).toBe(false);
  });

  it('finds a region by ID', () => {
    expect(findRegionById(regions, 'region-first')).toBe(regions[1]);
  });

  it('returns undefined for an unknown region ID', () => {
    expect(findRegionById(regions, 'missing-region')).toBeUndefined();
  });

  it('finds a boss by ID', () => {
    expect(findBossById(bosses, 'boss-b')).toBe(bosses[1]);
  });

  it('returns undefined for an unknown boss ID', () => {
    expect(findBossById(bosses, 'missing-boss')).toBeUndefined();
  });

  it('finds a boss together with its referenced region', () => {
    expect(findBossWithRegion(bosses, regions, 'boss-b')).toEqual({
      boss: bosses[1],
      region: regions[1],
    });
  });

  it('does not resolve a missing boss or a boss with an unknown region', () => {
    const orphanBoss: BossEncounter = {
      id: 'orphan-boss',
      name: { 'pt-BR': 'Órfão', en: 'Orphan' },
      location: { 'pt-BR': 'Local', en: 'Location' },
      regionId: 'missing-region',
    };

    expect(
      findBossWithRegion(bosses, regions, 'missing-boss'),
    ).toBeUndefined();
    expect(
      findBossWithRegion([orphanBoss], regions, orphanBoss.id),
    ).toBeUndefined();
  });

  it('gets only bosses from the requested region', () => {
    expect(
      getBossesByRegion(bosses, 'region-first').map((boss) => boss.id),
    ).toEqual(['boss-a', 'boss-b']);
  });

  it('counts all bosses', () => {
    expect(countBosses(bosses)).toBe(3);
  });

  it('counts bosses in a region', () => {
    expect(countBossesByRegion(bosses, 'region-first')).toBe(2);
  });

  it('combines bosses with defeated progress', () => {
    const combinedBosses = combineBossesWithProgress(
      bosses,
      new Set(['boss-b']),
    );

    expect(combinedBosses).toHaveLength(3);
    expect(combinedBosses.map((boss) => boss.id)).toEqual([
      'boss-a',
      'boss-b',
      'boss-c',
    ]);
  });

  it('marks a known defeated boss as defeated', () => {
    const combinedBosses = combineBossesWithProgress(
      bosses,
      new Set(['boss-b']),
    );

    expect(combinedBosses[1].isDefeated).toBe(true);
  });

  it('marks a boss absent from the defeated set as not defeated', () => {
    const combinedBosses = combineBossesWithProgress(
      bosses,
      new Set(['boss-b']),
    );

    expect(combinedBosses[0].isDefeated).toBe(false);
  });

  it('calculates total progress', () => {
    expect(calculateTotalProgress(bosses, new Set(['boss-a', 'boss-c']))).toEqual(
      {
        defeated: 2,
        total: 3,
        percentage: 67,
      },
    );
  });

  it('calculates progress for one region', () => {
    expect(
      calculateRegionProgress(
        bosses,
        'region-first',
        new Set(['boss-a', 'boss-c']),
      ),
    ).toEqual({
      defeated: 1,
      total: 2,
      percentage: 50,
    });
  });

  it('rounds progress percentages to an integer', () => {
    expect(calculateTotalProgress(bosses, new Set(['boss-a'])).percentage).toBe(
      33,
    );
  });

  it('returns zero totals and percentage for an empty boss list', () => {
    expect(calculateTotalProgress([], new Set())).toEqual({
      defeated: 0,
      total: 0,
      percentage: 0,
    });
  });

  it('ignores unknown defeated boss IDs', () => {
    expect(
      calculateTotalProgress(bosses, new Set(['missing-boss'])),
    ).toEqual({
      defeated: 0,
      total: 3,
      percentage: 0,
    });
  });

  it('does not modify original arrays while selecting and calculating', () => {
    const originalRegionIds = regions.map((region) => region.id);
    const originalBossIds = bosses.map((boss) => boss.id);

    getBossesByRegion(bosses, 'region-first');
    combineBossesWithProgress(bosses, new Set(['boss-a']));
    calculateRegionProgress(bosses, 'region-first', new Set(['boss-a']));

    expect(regions.map((region) => region.id)).toEqual(originalRegionIds);
    expect(bosses.map((boss) => boss.id)).toEqual(originalBossIds);
    expect('isDefeated' in bosses[0]).toBe(false);
  });
});

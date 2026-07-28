import * as currentDataExports from '../../index';
import {
  bossEncounters,
  catalogRegions,
  EXPECTED_REGION_COUNTS,
  validateCatalog,
} from '../index';

const baseRegionIds = new Set(
  catalogRegions
    .filter((region) => region.contentPack === 'base-game')
    .map((region) => region.id),
);
const expansionRegionIds = new Set(
  catalogRegions
    .filter((region) => region.contentPack === 'shadow-of-the-erdtree')
    .map((region) => region.id),
);

describe('real catalog', () => {
  it('contains the approved global and content-pack counts', () => {
    expect(catalogRegions).toHaveLength(26);
    expect(baseRegionIds.size).toBe(16);
    expect(expansionRegionIds.size).toBe(10);
    expect(bossEncounters).toHaveLength(208);
    expect(bossEncounters.filter((boss) => baseRegionIds.has(boss.regionId))).toHaveLength(165);
    expect(bossEncounters.filter((boss) => expansionRegionIds.has(boss.regionId))).toHaveLength(43);
  });

  it('matches every approved regional count', () => {
    for (const [regionId, expectedCount] of Object.entries(EXPECTED_REGION_COUNTS)) {
      expect(bossEncounters.filter((boss) => boss.regionId === regionId)).toHaveLength(expectedCount);
    }
  });

  it('keeps Finger Ruins of Rhia with zero bosses', () => {
    expect(catalogRegions.some((region) => region.id === 'finger-ruins-of-rhia')).toBe(true);
    expect(bossEncounters.filter((boss) => boss.regionId === 'finger-ruins-of-rhia')).toHaveLength(0);
  });

  it('uses unique, permanent IDs without sample prefixes', () => {
    const regionIds = catalogRegions.map((region) => region.id);
    const encounterIds = bossEncounters.map((boss) => boss.id);
    expect(new Set(regionIds).size).toBe(regionIds.length);
    expect(new Set(encounterIds).size).toBe(encounterIds.length);
    expect([...regionIds, ...encounterIds].every((id) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))).toBe(true);
    expect([...regionIds, ...encounterIds].some((id) => id.startsWith('sample-'))).toBe(false);
  });

  it('references valid regions and has complete localized runtime text', () => {
    const regionIds = new Set(catalogRegions.map((region) => region.id));
    for (const boss of bossEncounters) {
      expect(regionIds.has(boss.regionId)).toBe(true);
      expect(boss.name.en.trim()).not.toBe('');
      expect(boss.name['pt-BR'].trim()).not.toBe('');
      expect(boss.location.en.trim()).not.toBe('');
      expect(boss.location['pt-BR'].trim()).not.toBe('');
      if (boss.availability) {
        expect(boss.availability.en.trim()).not.toBe('');
        expect(boss.availability['pt-BR'].trim()).not.toBe('');
      }
    }
  });

  it('uses unique displayOrder values within each content pack', () => {
    for (const contentPack of ['base-game', 'shadow-of-the-erdtree'] as const) {
      const orders = catalogRegions
        .filter((region) => region.contentPack === contentPack)
        .map((region) => region.displayOrder);
      expect(new Set(orders).size).toBe(orders.length);
    }
  });

  it('preserves independently tracked DLC encounters and the active Spiritcaller Snail ID', () => {
    const ids = new Set(bossEncounters.map((boss) => boss.id));
    for (const id of [
      'jagged-peak-drake-jagged-peak-entrance',
      'jagged-peak-drake-foot-of-jagged-peak',
      'tree-sentinel-hinterland-grace-road',
      'tree-sentinel-shaman-village-road',
      'spiritcaller-snail-spiritcaller-cave',
    ]) {
      expect(ids.has(id)).toBe(true);
    }
  });

  it('excludes substituted and rejected records', () => {
    const ids = new Set(bossEncounters.map((boss) => boss.id));
    for (const id of [
      'jagged-peak-drake-jagged-peak-occurrences',
      'tree-sentinels-hinterland',
      'godskin-spiritcaller-snail-spiritcaller-cave',
      'recusant-henricus-limgrave-colosseum',
      'bloody-finger-nerijus-murkwater-river',
      'anastasia-tarnished-eater-smoldering-church',
      'grafted-scion-stormveil-castle',
      'ulcerated-tree-spirit-stormveil-castle',
      'crucible-knight-stormveil-castle',
      'lion-guardian-stormveil-castle',
      'elder-dragon-greyoll-fort-faroth',
      'margit-the-fell-omen-capital-outskirts',
      'dryleaf-dane-moorth-ruins',
    ]) {
      expect(ids.has(id)).toBe(false);
    }

    for (const rejectedOccurrence of [
      { name: 'Godskin Noble', location: 'Carian Study Hall' },
      { name: 'Tibia Mariner', location: 'Castle Sol' },
      { name: 'Draconic Tree Sentinel', location: 'Beside the Great Bridge' },
      { name: 'Elder Dragon Greyoll', location: 'Fort Faroth' },
      { name: 'Margit, the Fell Omen', location: 'Capital Outskirts' },
      { name: 'Dryleaf Dane', location: 'Moorth Ruins' },
    ]) {
      expect(
        bossEncounters.some(
          (boss) =>
            boss.name.en === rejectedOccurrence.name &&
            boss.location.en.includes(rejectedOccurrence.location),
        ),
      ).toBe(false);
    }
  });

  it('passes the complete catalog validator', () => {
    expect(validateCatalog(catalogRegions, bossEncounters)).toEqual({
      isValid: true,
      errors: [],
    });
  });

  it('exports the real catalog through the production data module', () => {
    expect(currentDataExports.regions).toBe(catalogRegions);
    expect(currentDataExports.bosses).toBe(bossEncounters);
    expect(currentDataExports.regions).toHaveLength(26);
    expect(currentDataExports.bosses).toHaveLength(208);
  });
});

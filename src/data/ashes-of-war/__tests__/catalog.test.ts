import { bossEncounters, catalogRegions } from '../../catalog';
import {
  ashesOfWar,
  EXPECTED_ASH_OF_WAR_COUNTS,
  getAshOfWarIndexSize,
  validateAshOfWarCatalog,
} from '../index';

describe('Ashes of War production catalog', () => {
  it('contains the approved global and content-pack totals', () => {
    expect(ashesOfWar).toHaveLength(116);
    expect(
      ashesOfWar.filter((entry) => entry.contentPack === 'base-game'),
    ).toHaveLength(91);
    expect(
      ashesOfWar.filter(
        (entry) => entry.contentPack === 'shadow-of-the-erdtree',
      ),
    ).toHaveLength(25);
    expect(EXPECTED_ASH_OF_WAR_COUNTS).toEqual({
      'base-game': 91,
      'shadow-of-the-erdtree': 25,
      total: 116,
    });
  });

  it('uses unique permanent IDs without catalog collisions', () => {
    const ashIds = ashesOfWar.map((entry) => entry.id);
    const bossIds = new Set(bossEncounters.map((boss) => boss.id));
    const regionIds = new Set(catalogRegions.map((region) => region.id));

    expect(new Set(ashIds).size).toBe(116);
    expect(ashIds.every((id) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))).toBe(
      true,
    );
    expect(ashIds.some((id) => id.startsWith('sample-'))).toBe(false);
    expect(ashIds.some((id) => bossIds.has(id) || regionIds.has(id))).toBe(
      false,
    );
    expect(getAshOfWarIndexSize()).toBe(116);
  });

  it('excludes Lost Ashes of War, URLs, and research metadata', () => {
    const serialized = JSON.stringify(ashesOfWar);

    expect(serialized).not.toMatch(/lost ashes of war/i);
    expect(serialized).not.toMatch(/https?:\/\//i);
    expect(serialized).not.toContain('sourceRefs');
    expect(serialized).not.toContain('verificationStatus');
    expect(serialized).not.toContain('displayOrder');
    expect(serialized).not.toContain('consultedAt');
  });

  it('keeps required data populated and approved null values intact', () => {
    for (const entry of ashesOfWar) {
      expect(entry.name.en.trim()).not.toBe('');
      expect(entry.skillName.en.trim()).not.toBe('');
      expect(entry.primaryLocation.en.trim()).not.toBe('');
      expect(entry.primaryAcquisition.en.trim()).not.toBe('');
      expect(entry.acquisitionMethods.length).toBeGreaterThan(0);
      expect(entry.affinity.en.trim()).not.toBe('');
      expect(entry.compatibleEquipment.en.length).toBeGreaterThan(0);
      expect(
        entry.fpCost === null ||
          (Number.isFinite(entry.fpCost) && entry.fpCost >= 0),
      ).toBe(true);
    }

    expect(ashesOfWar.every((entry) => entry.fpCost === null)).toBe(true);
    expect(ashesOfWar.every((entry) => entry.name.ptBR === null)).toBe(true);
  });

  it('passes the complete production validator', () => {
    expect(
      validateAshOfWarCatalog(
        ashesOfWar,
        new Set(bossEncounters.map((boss) => boss.id)),
        new Set(catalogRegions.map((region) => region.id)),
      ),
    ).toEqual({ isValid: true, errors: [] });
  });
});

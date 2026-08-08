import { EXPECTED_SPIRIT_ASH_COUNTS, getAllSpiritAshes, validateSpiritAshCatalog } from '../index';

describe('Spirit Ash catalog', () => {
  it('preserves the researched Base/DLC totals and valid semantic fields', () => {
    const entries = getAllSpiritAshes();
    expect(entries).toHaveLength(84);
    expect(entries.filter((entry) => entry.contentPack === 'base-game')).toHaveLength(EXPECTED_SPIRIT_ASH_COUNTS['base-game']);
    expect(entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree')).toHaveLength(EXPECTED_SPIRIT_ASH_COUNTS['shadow-of-the-erdtree']);
    expect(new Set(entries.map((entry) => entry.id)).size).toBe(entries.length);
    expect(validateSpiritAshCatalog(entries)).toEqual([]);
  });

  it('keeps cost type and unknown numeric values distinct', () => {
    const mimic = getAllSpiritAshes().find((entry) => entry.name === 'Mimic Tear Ashes');
    expect(mimic?.summonCost).toEqual({ type: 'hp', amount: 660 });
    expect(getAllSpiritAshes().some((entry) => entry.summonCost.amount === null)).toBe(true);
  });

  it('uses factual summarized locations and rejects name placeholders', () => {
    const entries = getAllSpiritAshes();
    expect(entries.every((entry) => entry.primaryLocation.includes(' - '))).toBe(true);
    expect(entries.some((entry) => entry.primaryLocation.toLowerCase().includes(' location - '))).toBe(false);
    expect(entries.find((entry) => entry.name === 'Fingercreeper Ashes')?.primaryLocation).toBe(
      'Finger Ruins of Miyr - Scadu Altus',
    );
    expect(validateSpiritAshCatalog([{ ...entries[0], primaryLocation: 'Wandering Noble location - Limgrave' }])).toContain(
      `Placeholder location: ${entries[0].id}`,
    );
  });
});

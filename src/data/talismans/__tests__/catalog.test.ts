import { EXPECTED_TALISMAN_COUNTS, getTalismansByContentPack, searchAndSortTalismans, talismans, validateTalismanCatalog } from '..';

describe('Talisman catalog', () => {
  it('contains every separately obtainable Base Game and DLC variant', () => {
    expect(talismans).toHaveLength(154);
    expect(getTalismansByContentPack('base-game')).toHaveLength(115);
    expect(getTalismansByContentPack('shadow-of-the-erdtree')).toHaveLength(39);
    expect(EXPECTED_TALISMAN_COUNTS.total).toBe(154);
    expect(talismans.map((entry) => entry.name)).toEqual(expect.arrayContaining(['Crimson Amber Medallion', 'Crimson Amber Medallion +1', 'Crimson Amber Medallion +2', 'Crimson Amber Medallion +3']));
  });

  it('passes the full-catalog validator and factual coverage invariants', () => {
    expect(validateTalismanCatalog()).toEqual([]);
    expect(new Set(talismans.map((entry) => entry.id)).size).toBe(154);
    expect(talismans.every((entry) => entry.primaryAcquisition && entry.effect && entry.description)).toBe(true);
    expect(talismans.every((entry) => !/^(a|an|the|found|obtained|received|purchased|dropped|reward|given|corpse|chest)\b/i.test(entry.primaryLocation))).toBe(true);
    expect(talismans.every((entry) => /^[A-Z]/.test(entry.detailedLocation) && /[.!?]$/.test(entry.detailedLocation))).toBe(true);
    const axe = talismans.find((entry) => entry.name === 'Axe Talisman');
    expect(axe?.primaryLocation).toBe('Mistwood Ruins - Limgrave');
    expect(axe?.detailedLocation).toBe('A chest in the cellar of Mistwood Ruins.');
  });

  it('marks only the eight achievement-class legendary Talismans', () => {
    expect(talismans.filter((entry) => entry.legendary).map((entry) => entry.name).sort()).toEqual([
      'Dragoncrest Greatshield Talisman', "Erdtree's Favor +2", 'Godfrey Icon', "Marika's Soreseal",
      'Moon of Nokstella', "Old Lord's Talisman", 'Radagon Icon', "Radagon's Soreseal",
    ].sort());
  });

  it('searches effects, acquisition and grace metadata with stable alphabetical ties', () => {
    expect(searchAndSortTalismans(talismans, 'maximum HP').some((entry) => entry.name === 'Crimson Amber Medallion')).toBe(true);
    expect(searchAndSortTalismans(talismans, 'Castle Morne Rampart')[0]?.name).toBe('Crimson Amber Medallion');
  });
});

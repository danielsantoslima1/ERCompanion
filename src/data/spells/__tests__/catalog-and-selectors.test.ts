import {
  EXPECTED_SPELL_COUNTS,
  getAllIncantations,
  getAllSorceries,
  getIncantationById,
  getIncantationsByContentPack,
  getSorceriesByContentPack,
  matchesSpellFilters,
  matchesSpellQuery,
  normalizeSpellSearchText,
  queryMatchesOnlyProtectedContent,
  resolveSpellValue,
  sortSpells,
  spellUsesEnglishFallback,
  validateSpellCatalog,
} from '..';

describe('spell production catalogs', () => {
  const sorceries = getAllSorceries();
  const incantations = getAllIncantations();

  it('contains the approved totals by category and content pack', () => {
    expect(sorceries).toHaveLength(84);
    expect(getSorceriesByContentPack('base-game')).toHaveLength(70);
    expect(getSorceriesByContentPack('shadow-of-the-erdtree')).toHaveLength(14);
    expect(incantations).toHaveLength(129);
    expect(getIncantationsByContentPack('base-game')).toHaveLength(101);
    expect(getIncantationsByContentPack('shadow-of-the-erdtree')).toHaveLength(28);
    expect(EXPECTED_SPELL_COUNTS.combined).toBe(213);
  });

  it('keeps IDs and English names unique', () => {
    const entries = [...sorceries, ...incantations];
    expect(new Set(entries.map((entry) => entry.id)).size).toBe(213);
    expect(new Set(entries.map((entry) => entry.name.en)).size).toBe(213);
  });

  it('contains exactly the seven approved legendary spells', () => {
    expect(sorceries.filter((entry) => entry.legendary).map((entry) => entry.name.en)).toEqual([
      'Comet Azur', 'Founding Rain of Stars', "Ranni's Dark Moon", 'Stars of Ruin',
    ]);
    expect(incantations.filter((entry) => entry.legendary).map((entry) => entry.name.en)).toEqual([
      'Elden Stars', 'Flame of the Fell God', "Greyoll's Roar",
    ]);
  });

  it('resolves the strict missable candidates without treating exclusive exchanges as missable', () => {
    expect([...sorceries, ...incantations].filter((entry) => entry.missable).map((entry) => entry.name.en)).toEqual([
      'Shard Spiral', 'Dragonbolt of Florissax', 'Furious Blade of Ansbach', 'Watchful Spirit',
    ]);
    expect(getIncantationById('incantation-bayles-tyranny')?.missable).toBe(false);
  });

  it('passes both production validators', () => {
    expect(validateSpellCatalog(sorceries, 'sorcery')).toEqual([]);
    expect(validateSpellCatalog(incantations, 'incantation')).toEqual([]);
  });

  it('contains none of the prohibited production fields', () => {
    const serialized = JSON.stringify([sorceries, incantations]);
    expect(serialized).not.toMatch(/"schools?"|"famil(?:y|ies)"|"catalysts?"|"damage"/);
  });
});

describe('spell localized selectors, search, and filters', () => {
  const sorceries = getAllSorceries();
  const incantations = getAllIncantations();

  it('resolves Portuguese through English fallback without mutating data', () => {
    const name = sorceries[0].name;
    expect(resolveSpellValue(name, 'pt-BR')).toEqual({ value: name.en, usedFallback: true });
    expect(resolveSpellValue(name, 'en')).toEqual({ value: name.en, usedFallback: false });
    expect(name.ptBR).toBeNull();
  });

  it('sorts alphabetically with ID tie-breaking and no source mutation', () => {
    const original = [...sorceries];
    const sorted = sortSpells(sorceries, 'pt-BR');
    expect(sorted[0].name.en.localeCompare(sorted[1].name.en, 'en')).toBeLessThanOrEqual(0);
    expect(sorceries).toEqual(original);
  });

  it('normalizes case, accents, and excess spaces', () => {
    expect(normalizeSpellSearchText('  FÉ   ÁUREA ')).toBe('fe aurea');
  });

  it('searches by name, location, source, and English fallback', () => {
    const location = sorceries.find((entry) => entry.primaryLocation.en)?.primaryLocation.en;
    const source = incantations.find((entry) => entry.primarySource.en)?.primarySource.en;
    expect(sorceries.some((entry) => matchesSpellQuery(entry, 'Comet Azur'))).toBe(true);
    expect(location).toBeTruthy();
    expect(sorceries.some((entry) => matchesSpellQuery(entry, location!))).toBe(true);
    expect(source).toBeTruthy();
    expect(incantations.some((entry) => matchesSpellQuery(entry, source!))).toBe(true);
  });

  it('keeps all card locations summarized and exposes typed technical data', () => {
    const entries = [...sorceries, ...incantations];
    expect(entries.every((entry) => /^.+ - .+$/.test(entry.primaryLocation.en!))).toBe(true);
    expect(entries.every((entry) => entry.technical.fpCost !== null && entry.technical.slotsUsed !== null)).toBe(true);
    expect(sorceries.find((entry) => entry.id === 'sorcery-cannon-of-haima')).toMatchObject({
      primaryLocation: { en: 'Converted Fringe Tower - Liurnia of the Lakes' },
      technical: { fpCost: 38, slotsUsed: 1, intelligenceRequired: 25 },
    });
  });

  it('finds protected content and reports an exclusive spoiler match', () => {
    const original = getIncantationById('incantation-agheels-flame');
    const entry = {
      ...original!,
      containsQuestSpoilers: true,
      acquisitionMethods: [{
        ...original!.acquisitionMethods[0],
        containsQuestSpoilers: true,
        protectedSearchTerms: ['Hidden quest decision'],
      }],
    };
    expect(entry).toBeDefined();
    expect(matchesSpellQuery(entry, 'Hidden quest decision')).toBe(true);
    expect(queryMatchesOnlyProtectedContent(entry, 'Hidden quest decision')).toBe(true);
  });

  it('combines Legendary and Missable filters with AND semantics', () => {
    const legendary = incantations.find((entry) => entry.legendary)!;
    expect(matchesSpellFilters(legendary, new Set(['legendary']))).toBe(true);
    expect(matchesSpellFilters(legendary, new Set(['legendary', 'missable']))).toBe(false);
    expect(incantations.filter((entry) => matchesSpellFilters(entry, new Set(['missable'])))).toHaveLength(3);
  });

  it('detects one English fallback notice requirement per entry', () => {
    expect(spellUsesEnglishFallback(sorceries[0], 'pt-BR')).toBe(true);
    expect(spellUsesEnglishFallback(sorceries[0], 'en')).toBe(false);
  });
});

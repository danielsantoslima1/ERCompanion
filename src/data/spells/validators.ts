import type { Spell, SpellCategory } from './types';

export const EXPECTED_SPELL_COUNTS = {
  sorcery: {
    'base-game': 70,
    'shadow-of-the-erdtree': 14,
    total: 84,
    legendary: 4,
    mvpLocations: 27,
    spoilers: 3,
  },
  incantation: {
    'base-game': 101,
    'shadow-of-the-erdtree': 28,
    total: 129,
    legendary: 3,
    mvpLocations: 33,
    spoilers: 3,
  },
  combined: 213,
  legendary: 7,
} as const;

const forbiddenKeys = new Set([
  'school', 'schools', 'family', 'families', 'magicTypes', 'staff', 'staffs',
  'seal', 'seals', 'catalyst', 'catalysts', 'compatibleCatalysts',
  'recommendedCatalysts', 'boostingCatalysts', 'fpCost', 'memorySlots',
  'intelligence', 'faith', 'arcane', 'stamina', 'duration', 'damage',
  'price', 'dropRate', 'pvp',
]);

export function validateSpellCatalog(
  entries: readonly Spell[],
  category: SpellCategory,
): string[] {
  const errors: string[] = [];
  const expected = EXPECTED_SPELL_COUNTS[category];
  if (entries.length !== expected.total) errors.push(`Expected ${expected.total} ${category} entries.`);
  for (const pack of ['base-game', 'shadow-of-the-erdtree'] as const) {
    const count = entries.filter((entry) => entry.contentPack === pack).length;
    if (count !== expected[pack]) errors.push(`Expected ${expected[pack]} ${category} entries in ${pack}.`);
  }
  const ids = new Set<string>();
  const names = new Set<string>();
  for (const entry of entries) {
    if (entry.category !== category) errors.push(`${entry.id}: invalid category.`);
    if (ids.has(entry.id)) errors.push(`${entry.id}: duplicate ID.`);
    ids.add(entry.id);
    if (entry.id.includes('sample-')) errors.push(`${entry.id}: temporary ID.`);
    const name = entry.name.en.trim().toLocaleLowerCase('en');
    if (names.has(name)) errors.push(`${entry.id}: duplicate English name.`);
    names.add(name);
    if (entry.missable === true) errors.push(`${entry.id}: missable is not confirmed.`);
    if (entry.acquisitionMethods.length === 0) errors.push(`${entry.id}: no acquisition method.`);
    const serialized = JSON.stringify(entry);
    for (const key of forbiddenKeys) {
      if (new RegExp(`"${key}"\\s*:`).test(serialized)) {
        errors.push(`${entry.id}: forbidden field ${key}.`);
      }
    }
  }
  const legendary = entries.filter((entry) => entry.legendary).length;
  if (legendary !== expected.legendary) errors.push(`Expected ${expected.legendary} legendary ${category} entries.`);
  const mvpLocations = entries.filter((entry) => entry.primaryLocation.en !== null).length;
  if (mvpLocations !== expected.mvpLocations) errors.push(`Expected ${expected.mvpLocations} usable ${category} locations.`);
  const spoilers = entries.filter((entry) => entry.containsQuestSpoilers).length;
  if (spoilers !== expected.spoilers) errors.push(`Expected ${expected.spoilers} protected ${category} acquisitions.`);
  return errors;
}

export function assertValidSpellCatalog(
  entries: readonly Spell[],
  category: SpellCategory,
): void {
  const errors = validateSpellCatalog(entries, category);
  if (errors.length) throw new Error(errors.join('\n'));
}

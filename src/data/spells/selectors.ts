import type { Language } from '../../types';
import {
  normalizeSearchText,
  searchAndSortByRelevance,
  type SearchRelevanceFields,
} from '../../utils/search-relevance';
import { compareLocalizedText } from '../selectors';
import { incantations } from './incantations';
import { sorceries } from './sorceries';
import type {
  Incantation,
  ResolvedSpellValue,
  Sorcery,
  Spell,
  SpellContentPack,
  SpellFilter,
  SpellLocalizedValue,
} from './types';

const sorceryIndex = new Map<string, Sorcery>(
  sorceries.map((entry) => [entry.id, entry]),
);
const incantationIndex = new Map<string, Incantation>(
  incantations.map((entry) => [entry.id, entry]),
);

export function resolveSpellValue(
  value: SpellLocalizedValue,
  language: Language,
): ResolvedSpellValue {
  if (language === 'en') return { value: value.en, usedFallback: false };
  const ptBR = value.ptBR?.trim();
  return ptBR
    ? { value: ptBR, usedFallback: false }
    : { value: value.en, usedFallback: value.en !== null };
}

export function normalizeSpellSearchText(value: string): string {
  return normalizeSearchText(value);
}

function compareSpellNames(a: Spell, b: Spell, language: Language): number {
  const aName = resolveSpellValue(a.name, language).value ?? '';
  const bName = resolveSpellValue(b.name, language).value ?? '';
  return compareLocalizedText(aName, bName, language) || a.id.localeCompare(b.id);
}

export function sortSpells<T extends Spell>(
  entries: readonly T[],
  language: Language,
): T[] {
  return [...entries].sort((a, b) => compareSpellNames(a, b, language));
}

function filterPack<T extends Spell>(
  entries: readonly T[],
  contentPack: SpellContentPack,
): T[] {
  return entries.filter((entry) => entry.contentPack === contentPack);
}

export function getAllSorceries(): readonly Sorcery[] {
  return sorceries;
}

export function getAllIncantations(): readonly Incantation[] {
  return incantations;
}

export function getSorceryById(id: string): Sorcery | undefined {
  return sorceryIndex.get(id);
}

export function getIncantationById(id: string): Incantation | undefined {
  return incantationIndex.get(id);
}

export function getSorceriesByContentPack(
  contentPack: SpellContentPack,
): Sorcery[] {
  return filterPack<Sorcery>(sorceries, contentPack);
}

export function getIncantationsByContentPack(
  contentPack: SpellContentPack,
): Incantation[] {
  return filterPack<Incantation>(incantations, contentPack);
}

export function getSpellSearchableText(entry: Spell): readonly string[] {
  const values: (string | null)[] = [
    entry.name.en,
    entry.name.ptBR,
    entry.primaryLocation.en,
    entry.primaryLocation.ptBR,
    entry.primarySource.en,
    entry.primarySource.ptBR,
    ...entry.searchAliases,
  ];
  for (const method of entry.acquisitionMethods) {
    values.push(
      method.location.en,
      method.location.ptBR,
      method.source.en,
      method.source.ptBR,
      method.npc.en,
      method.npc.ptBR,
      method.requiredItem.en,
      method.requiredItem.ptBR,
      ...method.protectedSearchTerms,
    );
  }
  return [...new Set(values.filter((value): value is string => Boolean(value?.trim())))];
}

function getLocalizedSearchValues(value: SpellLocalizedValue): string[] {
  return [value.en, value.ptBR].filter(
    (candidate): candidate is string => Boolean(candidate?.trim()),
  );
}

function getSpellSearchFields(
  entry: Spell,
  language: Language,
): SearchRelevanceFields {
  const displayedName = resolveSpellValue(entry.name, language).value
    ?? entry.name.en;
  return {
    displayedName,
    alternateNames: [
      ...getLocalizedSearchValues(entry.name).filter(
        (value) => value !== displayedName,
      ),
      ...entry.searchAliases,
    ],
    locations: [
      ...getLocalizedSearchValues(entry.primaryLocation),
      ...entry.acquisitionMethods.flatMap((method) =>
        getLocalizedSearchValues(method.location),
      ),
    ],
    sources: [
      ...getLocalizedSearchValues(entry.primarySource),
      ...entry.acquisitionMethods.flatMap((method) => [
        ...getLocalizedSearchValues(method.source),
        ...getLocalizedSearchValues(method.method),
      ]),
    ],
    npcs: entry.acquisitionMethods.flatMap((method) =>
      getLocalizedSearchValues(method.npc),
    ),
    requiredItems: entry.acquisitionMethods.flatMap((method) =>
      getLocalizedSearchValues(method.requiredItem),
    ),
    metadata: entry.acquisitionMethods.flatMap(
      (method) => method.protectedSearchTerms,
    ),
  };
}

export function searchAndSortSpells<T extends Spell>(
  entries: readonly T[],
  query: string,
  language: Language,
): T[] {
  return searchAndSortByRelevance(
    entries,
    query,
    (entry) => getSpellSearchFields(entry, language),
    (first, second) => compareSpellNames(first, second, language),
    (entry) => entry.id,
  );
}

export function matchesSpellQuery(entry: Spell, query: string): boolean {
  const normalizedQuery = normalizeSpellSearchText(query);
  return normalizedQuery.length === 0 || getSpellSearchableText(entry).some(
    (value) => normalizeSpellSearchText(value).includes(normalizedQuery),
  );
}

export function matchesSpellFilters(
  entry: Spell,
  filters: ReadonlySet<SpellFilter>,
): boolean {
  return (
    (!filters.has('legendary') || entry.legendary) &&
    (!filters.has('missable') || entry.missable === true)
  );
}

export function spellUsesEnglishFallback(
  entry: Spell,
  language: Language,
): boolean {
  if (language === 'en') return false;
  const values = [
    entry.name,
    entry.primaryLocation,
    entry.primarySource,
    ...entry.acquisitionMethods.flatMap((method) => [
      method.method,
      method.location,
      method.source,
      method.npc,
      method.requiredItem,
      method.spoilerSafeText,
    ]),
  ];
  return values.some((value) => value.en !== null && !value.ptBR?.trim());
}

export function queryMatchesOnlyProtectedContent(
  entry: Spell,
  query: string,
): boolean {
  const normalized = normalizeSpellSearchText(query);
  if (!normalized) return false;
  const publicValues = [
    entry.name.en,
    entry.name.ptBR,
    entry.primaryLocation.en,
    entry.primaryLocation.ptBR,
    entry.containsQuestSpoilers ? entry.spoilerSafeCardText.en : entry.primarySource.en,
    entry.containsQuestSpoilers ? entry.spoilerSafeCardText.ptBR : entry.primarySource.ptBR,
    ...entry.searchAliases,
  ].filter((value): value is string => Boolean(value));
  const publicMatch = publicValues.some((value) =>
    normalizeSpellSearchText(value).includes(normalized),
  );
  const protectedMatch = entry.acquisitionMethods
    .filter((method) => method.containsQuestSpoilers)
    .flatMap((method) => method.protectedSearchTerms)
    .some((value) => normalizeSpellSearchText(value).includes(normalized));
  return protectedMatch && !publicMatch;
}

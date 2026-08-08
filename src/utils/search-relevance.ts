export interface SearchRelevanceFields {
  readonly displayedName: string;
  readonly alternateNames?: readonly string[];
  readonly locations?: readonly string[];
  readonly sources?: readonly string[];
  readonly npcs?: readonly string[];
  readonly requiredItems?: readonly string[];
  readonly metadata?: readonly string[];
}

type SearchFieldGroup = keyof Omit<SearchRelevanceFields, 'displayedName'>;

const SECONDARY_GROUPS: readonly SearchFieldGroup[] = [
  'locations',
  'sources',
  'npcs',
  'requiredItems',
  'metadata',
];

export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase('en');
}

function getMatchKind(value: string, query: string): number | null {
  const normalizedValue = normalizeSearchText(value);
  if (normalizedValue === query) return 0;
  if (normalizedValue.startsWith(query)) return 1;
  if (normalizedValue.split(' ').some((word) => word.startsWith(query))) {
    return 2;
  }
  return normalizedValue.includes(query) ? 3 : null;
}

function getBestGroupScore(
  values: readonly string[] | undefined,
  query: string,
  groupPriority: number,
): number | null {
  let bestScore: number | null = null;
  for (const value of values ?? []) {
    const matchKind = getMatchKind(value, query);
    if (matchKind === null) continue;
    const score = groupPriority * 4 + matchKind;
    if (bestScore === null || score < bestScore) bestScore = score;
  }
  return bestScore;
}

export function getSearchRelevance(
  fields: SearchRelevanceFields,
  query: string,
): number | null {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return 0;

  const displayedNameMatch = getMatchKind(
    fields.displayedName,
    normalizedQuery,
  );
  if (displayedNameMatch !== null) return displayedNameMatch;

  const alternateNameMatch = getBestGroupScore(
    fields.alternateNames,
    normalizedQuery,
    1,
  );
  if (alternateNameMatch !== null) return alternateNameMatch;

  for (const [index, group] of SECONDARY_GROUPS.entries()) {
    const score = getBestGroupScore(
      fields[group],
      normalizedQuery,
      index + 2,
    );
    if (score !== null) return score;
  }

  return null;
}

export function searchAndSortByRelevance<T>(
  entries: readonly T[],
  query: string,
  getFields: (entry: T) => SearchRelevanceFields,
  compareAlphabetically: (first: T, second: T) => number,
  getId: (entry: T) => string,
): T[] {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) {
    return [...entries].sort(
      (first, second) =>
        compareAlphabetically(first, second) ||
        getId(first).localeCompare(getId(second)),
    );
  }

  return entries
    .flatMap((entry) => {
      const relevance = getSearchRelevance(getFields(entry), normalizedQuery);
      return relevance === null ? [] : [{ entry, relevance }];
    })
    .sort(
      (first, second) =>
        first.relevance - second.relevance ||
        compareAlphabetically(first.entry, second.entry) ||
        getId(first.entry).localeCompare(getId(second.entry)),
    )
    .map(({ entry }) => entry);
}

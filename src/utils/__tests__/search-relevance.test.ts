import {
  getSearchRelevance,
  normalizeSearchText,
  searchAndSortByRelevance,
  type SearchRelevanceFields,
} from '../search-relevance';

interface TestEntry {
  id: string;
  fields: SearchRelevanceFields;
}

const entry = (
  id: string,
  displayedName: string,
  fields: Omit<SearchRelevanceFields, 'displayedName'> = {},
): TestEntry => ({ id, fields: { displayedName, ...fields } });

const sort = (entries: readonly TestEntry[], query: string) =>
  searchAndSortByRelevance(
    entries,
    query,
    (item) => item.fields,
    (first, second) =>
      first.fields.displayedName.localeCompare(
        second.fields.displayedName,
        'en',
        { sensitivity: 'base' },
      ),
    (item) => item.id,
  );

describe('search relevance', () => {
  it('normalizes case, accents, punctuation, apostrophes, hyphens, and spaces', () => {
    expect(normalizeSearchText("  RÁNNI'S—Dark   Moon ")).toBe(
      'rannis dark moon',
    );
  });

  it('orders displayed-name matches before aliases and secondary fields', () => {
    const entries = [
      entry('location', 'Alpha', { locations: ['Royal Capital'] }),
      entry('alias', 'Beta', { alternateNames: ['Royal Wraith'] }),
      entry('substring', 'The Royal One'),
      entry('word', 'Ancient Royalty'),
      entry('prefix', 'Royal Revenant'),
      entry('exact', 'Royal'),
    ];

    expect(sort(entries, 'royal').map((item) => item.id)).toEqual([
      'exact',
      'prefix',
      'word',
      'substring',
      'alias',
      'location',
    ]);
  });

  it('orders secondary fields by location, source, NPC, item, and metadata', () => {
    const entries = [
      entry('metadata', 'Five', { metadata: ['Royal'] }),
      entry('item', 'Four', { requiredItems: ['Royal'] }),
      entry('npc', 'Three', { npcs: ['Royal'] }),
      entry('source', 'Two', { sources: ['Royal'] }),
      entry('location', 'One', { locations: ['Royal'] }),
    ];

    expect(sort(entries, 'royal').map((item) => item.id)).toEqual([
      'location',
      'source',
      'npc',
      'item',
      'metadata',
    ]);
  });

  it('uses match quality, alphabetical order, then stable ID as tie-breakers', () => {
    const entries = [
      entry('z-id', 'Same', { locations: ['Royal Road'] }),
      entry('a-id', 'Same', { locations: ['Royal Road'] }),
      entry('alphabetical', 'Alpha', { locations: ['Royal Road'] }),
      entry('word', 'Zulu', { locations: ['Old Royal Road'] }),
      entry('substring', 'Beta', { locations: ['Unroyal Road'] }),
    ];

    expect(sort(entries, 'royal').map((item) => item.id)).toEqual([
      'alphabetical',
      'a-id',
      'z-id',
      'word',
      'substring',
    ]);
  });

  it('preserves alphabetical ordering when the query is empty', () => {
    expect(
      sort([entry('z', 'Zulu'), entry('a', 'Alpha')], '  ').map(
        (item) => item.id,
      ),
    ).toEqual(['a', 'z']);
  });

  it('returns null when no searchable field matches', () => {
    expect(
      getSearchRelevance(
        { displayedName: 'Árvore-Sentinela', locations: ['Limgrave'] },
        'ROYAL',
      ),
    ).toBeNull();
  });
});

import { searchAndSortByRelevance } from '../../utils/search-relevance';
import { talismans } from './catalog';
import type { Talisman, TalismanContentPack } from './types';

const byId = new Map(talismans.map((entry) => [entry.id, entry]));
export const getAllTalismans = (): readonly Talisman[] => talismans;
export const getTalismanById = (id: string): Talisman | undefined => byId.get(id);
export const getTalismansByContentPack = (pack: TalismanContentPack): readonly Talisman[] => talismans.filter((entry) => entry.contentPack === pack);
export const sortTalismans = (entries: readonly Talisman[]): Talisman[] => [...entries].sort((a, b) => a.name.localeCompare(b.name) || a.id.localeCompare(b.id));
export function searchAndSortTalismans(entries: readonly Talisman[], query: string): Talisman[] {
  return searchAndSortByRelevance(entries, query, (entry) => ({
    displayedName: entry.name,
    locations: [entry.primaryLocation, entry.region, entry.nearestSiteOfGrace ?? ''],
    sources: [entry.primaryAcquisition],
    metadata: [entry.effect, entry.description, entry.legendary ? 'Legendary' : '', entry.missable ? 'Missable' : ''],
  }), (a, b) => a.name.localeCompare(b.name), (entry) => entry.id);
}

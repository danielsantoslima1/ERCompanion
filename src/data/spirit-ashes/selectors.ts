import { searchAndSortByRelevance } from '../../utils/search-relevance';
import { spiritAshes } from './catalog';
import type { SpiritAsh, SpiritAshContentPack } from './types';

const byId = new Map(spiritAshes.map((entry) => [entry.id, entry]));

export function getAllSpiritAshes(): readonly SpiritAsh[] { return spiritAshes; }
export function getSpiritAshById(id: string): SpiritAsh | undefined { return byId.get(id); }
export function getSpiritAshesByContentPack(pack: SpiritAshContentPack): readonly SpiritAsh[] { return spiritAshes.filter((entry) => entry.contentPack === pack); }
export function sortSpiritAshes(entries: readonly SpiritAsh[]): SpiritAsh[] { return [...entries].sort((a, b) => a.name.localeCompare(b.name) || a.id.localeCompare(b.id)); }
export function searchAndSortSpiritAshes(entries: readonly SpiritAsh[], query: string): SpiritAsh[] {
  return searchAndSortByRelevance(entries, query, (entry) => ({
    displayedName: entry.name,
    locations: [entry.primaryLocation, entry.region],
    sources: [entry.primaryAcquisition, ...entry.acquisitionMethods.flatMap((method) => [method.source, method.location])],
    metadata: [entry.effects ?? '', entry.upgradeType, entry.legendary ? 'Legendary' : ''],
  }), (a, b) => a.name.localeCompare(b.name), (entry) => entry.id);
}

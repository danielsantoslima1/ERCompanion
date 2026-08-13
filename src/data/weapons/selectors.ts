import { searchAndSortByRelevance } from '../../utils/search-relevance';
import { weapons, weaponTypes } from './catalog';
import type { Weapon, WeaponContentPack } from './types';
export const getWeaponType = (id: string) => weaponTypes.find((type) => type.id === id);
export const getWeaponById = (id: string) => weapons.find((weapon) => weapon.id === id);
export const getWeaponsByType = (id: string) => weapons.filter((weapon) => weapon.weaponTypeId === id);
export const getWeaponsByContentPack = (pack: WeaponContentPack) => weapons.filter((weapon) => weapon.contentPack === pack);
export function searchWeapons(source: readonly Weapon[], query: string): Weapon[] { return searchAndSortByRelevance(source, query, (weapon) => ({ displayedName: weapon.name, locations: [weapon.primaryLocation, weapon.region], sources: [weapon.acquisition], requiredItems: weapon.skill ? [weapon.skill] : [], metadata: [getWeaponType(weapon.weaponTypeId)?.name ?? '', weapon.nearestSiteOfGrace ?? '', ...weapon.passiveEffects] }), (a,b) => a.name.localeCompare(b.name), (weapon) => weapon.id); }
export function weaponProgress(source: readonly Weapon[], ids: readonly string[]) { const valid = new Set(source.map((w) => w.id)); const completed = new Set(ids.filter((id) => valid.has(id))).size; const total = source.length; return { completed, total, percentage: total ? Math.round(completed / total * 100) : 0 }; }

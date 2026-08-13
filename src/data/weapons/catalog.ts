import research from '../../../docs/research/weapons-catalog-research.json';
import type { Weapon, WeaponContentPack, WeaponType, WeaponTypeCount } from './types';
export const weaponTypes: readonly WeaponType[] = research.weaponTypes.map(({ id, name, order }) => ({ id, name, order }));
export const weapons: readonly Weapon[] = research.entries.map((entry) => ({ ...entry, contentPack: entry.contentPack as WeaponContentPack, passiveEffects: entry.passiveEffects.filter((value): value is string => Boolean(value)) }));
export const weaponTypeCounts: readonly WeaponTypeCount[] = weaponTypes.map((type) => { const entries = weapons.filter((weapon) => weapon.weaponTypeId === type.id); const base = entries.filter((weapon) => weapon.contentPack === 'base-game').length; return { ...type, base, dlc: entries.length - base, total: entries.length }; });
export const WEAPON_COUNTS = Object.freeze({ total: weapons.length, base: weapons.filter((w) => w.contentPack === 'base-game').length, dlc: weapons.filter((w) => w.contentPack === 'shadow-of-the-erdtree').length, types: weaponTypes.length });

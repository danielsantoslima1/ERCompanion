import { weapons, weaponTypes, WEAPON_COUNTS, weaponTypeCounts } from './catalog';

const startsWithCapital = (value: string): boolean => {
  const firstLetter = value.match(/[A-Za-z]/)?.[0];
  return firstLetter === undefined || firstLetter === firstLetter.toUpperCase();
};

export function validateWeaponsCatalog(): readonly string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const typeIds = weaponTypes.map((type) => type.id);
  const types = new Set(typeIds);

  if (types.size !== 42) errors.push('Weapon Type IDs are not unique');

  for (const weapon of weapons) {
    if (!weapon.id || ids.has(weapon.id)) errors.push(`Invalid/duplicate ID: ${weapon.id}`);
    ids.add(weapon.id);
    if (!weapon.name.trim()) errors.push(`Empty name: ${weapon.id}`);
    if (!types.has(weapon.weaponTypeId)) errors.push(`Invalid type: ${weapon.id}`);
    if (!['base-game', 'shadow-of-the-erdtree'].includes(weapon.contentPack)) errors.push(`Invalid origin: ${weapon.id}`);
    if (!weapon.primaryLocation || weapon.primaryLocation === weapon.name || /unknown|placeholder|\b(found|dropped|purchased|given|reward)\b/i.test(weapon.primaryLocation)) errors.push(`Invalid card location: ${weapon.id}`);
    if (!weapon.region || !weapon.acquisition) errors.push(`Missing factual core: ${weapon.id}`);
    for (const narrative of [weapon.detailedLocation, weapon.acquisition, weapon.description]) {
      if (narrative && !startsWithCapital(narrative)) errors.push(`Narrative is not capitalized: ${weapon.id}`);
    }
    if (weapon.weight !== null && (!Number.isFinite(weapon.weight) || weapon.weight < 0)) errors.push(`Invalid weight: ${weapon.id}`);
    for (const value of Object.values(weapon.statRequirements)) {
      if (value !== null && (!Number.isInteger(value) || value < 0)) errors.push(`Invalid requirement: ${weapon.id}`);
    }
  }

  if (WEAPON_COUNTS.total !== 479 || WEAPON_COUNTS.base !== 377 || WEAPON_COUNTS.dlc !== 102 || WEAPON_COUNTS.types !== 42) errors.push(`Counts mismatch: ${JSON.stringify(WEAPON_COUNTS)}`);
  if (weaponTypeCounts.reduce((total, type) => total + type.total, 0) !== 479 || weaponTypeCounts.reduce((total, type) => total + type.base, 0) !== 377 || weaponTypeCounts.reduce((total, type) => total + type.dlc, 0) !== 102) errors.push('Derived type matrix mismatch');
  if (weaponTypeCounts.some((type) => type.total !== type.base + type.dlc)) errors.push('Invalid per-type origin sum');

  return errors;
}

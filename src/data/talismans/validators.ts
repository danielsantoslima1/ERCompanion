import { EXPECTED_TALISMAN_COUNTS, talismans } from './catalog';
import type { Talisman } from './types';

export function validateTalismanCatalog(entries: readonly Talisman[] = talismans): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const entry of entries) {
    if (ids.has(entry.id)) errors.push(`Duplicate Talisman ID: ${entry.id}`);
    ids.add(entry.id);
    if (!entry.name.trim()) errors.push(`Missing Talisman name: ${entry.id}`);
    if (!['base-game', 'shadow-of-the-erdtree'].includes(entry.contentPack)) errors.push(`Invalid origin: ${entry.id}`);
    if (!entry.primaryLocation.trim() || entry.primaryLocation === entry.name) errors.push(`Invalid location: ${entry.id}`);
    if (/^(?:a|an|the|found|obtained|received|purchased|dropped|reward|given|corpse|chest)\b/i.test(entry.primaryLocation)) errors.push(`Narrative card location: ${entry.id}`);
    if (!entry.detailedLocation.trim() || !/^[A-Z]/.test(entry.detailedLocation) || !/[.!?]$/.test(entry.detailedLocation)) errors.push(`Invalid detailed location: ${entry.id}`);
    if (!entry.region.trim()) errors.push(`Missing region: ${entry.id}`);
    if (!entry.primaryAcquisition.trim() || !/^[A-Z]/.test(entry.primaryAcquisition) || !/[.!?]$/.test(entry.primaryAcquisition)) errors.push(`Invalid acquisition: ${entry.id}`);
    if (!entry.effect.trim()) errors.push(`Missing effect: ${entry.id}`);
    if (!entry.description.trim()) errors.push(`Missing description: ${entry.id}`);
    if (entry.weight !== null && (!Number.isFinite(entry.weight) || entry.weight < 0)) errors.push(`Invalid weight: ${entry.id}`);
    if (/placeholder|unknown|talisman location/i.test(`${entry.primaryLocation} ${entry.primaryAcquisition}`)) errors.push(`Placeholder data: ${entry.id}`);
    if (typeof entry.legendary !== 'boolean' || typeof entry.missable !== 'boolean') errors.push(`Invalid flags: ${entry.id}`);
  }
  const base = entries.filter((entry) => entry.contentPack === 'base-game').length;
  const dlc = entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree').length;
  if (base !== EXPECTED_TALISMAN_COUNTS['base-game']) errors.push(`Expected 115 Base Game Talismans, found ${base}`);
  if (dlc !== EXPECTED_TALISMAN_COUNTS['shadow-of-the-erdtree']) errors.push(`Expected 39 DLC Talismans, found ${dlc}`);
  if (base + dlc !== EXPECTED_TALISMAN_COUNTS.total) errors.push(`Expected 154 Talismans, found ${entries.length}`);
  return errors;
}

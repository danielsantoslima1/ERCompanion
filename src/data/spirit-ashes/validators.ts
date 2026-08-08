import { EXPECTED_SPIRIT_ASH_COUNTS, spiritAshes } from './catalog';
export function validateSpiritAshCatalog(entries = spiritAshes): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const entry of entries) {
    if (ids.has(entry.id)) errors.push(`Duplicate Spirit Ash ID: ${entry.id}`);
    ids.add(entry.id);
    if (!entry.name.trim()) errors.push(`Missing Spirit Ash name: ${entry.id}`);
    if (!entry.primaryLocation.includes(' - ')) errors.push(`Invalid location: ${entry.id}`);
    if (!entry.region.trim()) errors.push(`Missing region: ${entry.id}`);
    if (entry.summonCost.amount !== null && entry.summonCost.amount < 0) errors.push(`Invalid summon cost: ${entry.id}`);
    if (entry.numberSummoned !== null && (!Number.isInteger(entry.numberSummoned) || entry.numberSummoned < 1)) errors.push(`Invalid summon count: ${entry.id}`);
    if (!['grave-glovewort', 'ghost-glovewort', 'none'].includes(entry.upgradeType)) errors.push(`Invalid upgrade type: ${entry.id}`);
  }
  if (entries.length !== EXPECTED_SPIRIT_ASH_COUNTS.total) errors.push(`Expected ${EXPECTED_SPIRIT_ASH_COUNTS.total} Spirit Ashes, found ${entries.length}`);
  return errors;
}

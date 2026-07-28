import type {
  BossEncounter,
  CatalogRegion,
  CatalogValidationResult,
  ContentPack,
} from './types';
import type { LocalizedText } from '../../types/boss';

const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const CONTENT_PACKS: readonly ContentPack[] = [
  'base-game',
  'shadow-of-the-erdtree',
];

export const EXPECTED_REGION_COUNTS = Object.freeze({
  limgrave: 22,
  'weeping-peninsula': 10,
  'siofra-river': 5,
  'liurnia-of-the-lakes': 28,
  'ainsel-river': 1,
  'lake-of-rot': 2,
  caelid: 17,
  'greyolls-dragonbarrow': 8,
  'deeproot-depths': 3,
  'altus-plateau': 34,
  'mt-gelmir': 10,
  'mountaintops-of-the-giants': 12,
  'consecrated-snowfield': 7,
  'mohgwyn-palace': 1,
  'miquellas-haligtree': 2,
  'crumbling-farum-azula': 3,
  'gravesite-plain': 10,
  'scadu-altus': 11,
  'rauh-base': 3,
  'ancient-ruins-of-rauh': 2,
  'cerulean-coast': 4,
  'charos-hidden-grave': 3,
  'jagged-peak': 4,
  'abyssal-woods': 1,
  'finger-ruins-of-rhia': 0,
  scaduview: 5,
} satisfies Readonly<Record<string, number>>);

function isLocalizedTextEmpty(value: LocalizedText): boolean {
  return value.en.trim() === '' || value['pt-BR'].trim() === '';
}

function findDuplicateIds(
  values: readonly { readonly id: string }[],
  label: string,
): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value.id)) duplicates.add(value.id);
    seen.add(value.id);
  }
  return [...duplicates].map((id) => `Duplicate ${label} ID: ${id}.`);
}

export function validateCatalog(
  regions: readonly CatalogRegion[],
  encounters: readonly BossEncounter[],
): CatalogValidationResult {
  const errors = [
    ...findDuplicateIds(regions, 'region'),
    ...findDuplicateIds(encounters, 'encounter'),
  ];
  const regionById = new Map(regions.map((region) => [region.id, region]));
  const ordersByPack = new Map<ContentPack, Set<number>>();

  for (const region of regions) {
    if (!ID_PATTERN.test(region.id)) errors.push(`Invalid region ID: ${region.id}.`);
    if (region.id.startsWith('sample-')) errors.push(`Sample region ID is not allowed: ${region.id}.`);
    if (!CONTENT_PACKS.includes(region.contentPack)) {
      errors.push(`Region ${region.id} has invalid contentPack.`);
    }
    if (isLocalizedTextEmpty(region.name)) errors.push(`Region ${region.id} has an empty localized name.`);
    if (!Number.isInteger(region.displayOrder) || region.displayOrder < 1) {
      errors.push(`Region ${region.id} has invalid displayOrder.`);
    }
    const orders = ordersByPack.get(region.contentPack) ?? new Set<number>();
    if (orders.has(region.displayOrder)) {
      errors.push(`Duplicate displayOrder ${region.displayOrder} in ${region.contentPack}.`);
    }
    orders.add(region.displayOrder);
    ordersByPack.set(region.contentPack, orders);
  }

  const actualCounts = new Map<string, number>();
  for (const encounter of encounters) {
    if (!ID_PATTERN.test(encounter.id)) errors.push(`Invalid encounter ID: ${encounter.id}.`);
    if (encounter.id.startsWith('sample-')) errors.push(`Sample encounter ID is not allowed: ${encounter.id}.`);
    if (!regionById.has(encounter.regionId)) {
      errors.push(`Encounter ${encounter.id} references unknown region ${encounter.regionId}.`);
    }
    if (isLocalizedTextEmpty(encounter.name)) errors.push(`Encounter ${encounter.id} has an empty localized name.`);
    if (isLocalizedTextEmpty(encounter.location)) errors.push(`Encounter ${encounter.id} has an empty localized location.`);
    if (encounter.availability && isLocalizedTextEmpty(encounter.availability)) {
      errors.push(`Encounter ${encounter.id} has empty localized availability.`);
    }

    const count = encounter.mainParticipantCount;
    if (typeof count === 'number' && (!Number.isInteger(count) || count < 1)) {
      errors.push(`Encounter ${encounter.id} has invalid participant count.`);
    }
    if (typeof count === 'object' && (
      !Number.isInteger(count.min) ||
      !Number.isInteger(count.max) ||
      count.min < 1 ||
      count.max < count.min
    )) {
      errors.push(`Encounter ${encounter.id} has invalid participant count range.`);
    }
    const knownParticipants =
      (encounter.mainParticipants?.length ?? 0) +
      (encounter.variableMainParticipantCount ?? 0);
    if (
      typeof count === 'number' &&
      encounter.phases === undefined &&
      knownParticipants > 0 &&
      knownParticipants !== count
    ) {
      errors.push(`Encounter ${encounter.id} has inconsistent participant lists.`);
    }
    if (
      typeof count === 'object' &&
      knownParticipants > 0 &&
      knownParticipants > count.max
    ) {
      errors.push(`Encounter ${encounter.id} exceeds its participant count range.`);
    }
    actualCounts.set(encounter.regionId, (actualCounts.get(encounter.regionId) ?? 0) + 1);
  }

  if (regions.length !== 26) errors.push(`Expected 26 regions, received ${regions.length}.`);
  if (encounters.length !== 208) errors.push(`Expected 208 encounters, received ${encounters.length}.`);
  for (const [regionId, expected] of Object.entries(EXPECTED_REGION_COUNTS)) {
    const actual = actualCounts.get(regionId) ?? 0;
    if (actual !== expected) errors.push(`Expected ${expected} encounters in ${regionId}, received ${actual}.`);
  }

  return { isValid: errors.length === 0, errors };
}

export function assertValidCatalog(
  regions: readonly CatalogRegion[],
  encounters: readonly BossEncounter[],
): void {
  const result = validateCatalog(regions, encounters);
  if (!result.isValid) throw new Error(`Invalid real catalog:\n${result.errors.join('\n')}`);
}

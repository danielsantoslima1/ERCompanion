import type { AshOfWar } from './types';

export const EXPECTED_ASH_OF_WAR_COUNTS = Object.freeze({
  'base-game': 91,
  'shadow-of-the-erdtree': 25,
  total: 116,
});

export interface AshOfWarValidationResult {
  readonly isValid: boolean;
  readonly errors: readonly string[];
}

const forbiddenKeys = new Set([
  'displayOrder',
  'sourceRefs',
  'verificationStatus',
  'consultedAt',
  'sources',
  'url',
]);
const forbiddenEditorialText =
  /pending (?:precise normalization|cross-source verification)|^\|\s*buy_price\s*=/i;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateLocalizedValue(
  value: unknown,
  path: string,
  errors: string[],
): void {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    errors.push(`${path} must be a localized object.`);
    return;
  }
  const localized = value as Record<string, unknown>;
  if (!isNonEmptyString(localized.en)) {
    errors.push(`${path}.en must be a non-empty string.`);
  }
  if (
    localized.ptBR !== null &&
    !isNonEmptyString(localized.ptBR)
  ) {
    errors.push(`${path}.ptBR must be a non-empty string or null.`);
  }
}

function findForbiddenContent(
  value: unknown,
  path: string,
  errors: string[],
): void {
  if (typeof value === 'string' && /https?:\/\//i.test(value)) {
    errors.push(`${path} contains a URL.`);
    return;
  }
  if (typeof value === 'string' && forbiddenEditorialText.test(value)) {
    errors.push(`${path} contains editorial research text.`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      findForbiddenContent(item, `${path}[${index}]`, errors),
    );
    return;
  }
  if (typeof value !== 'object' || value === null) return;
  for (const [key, nestedValue] of Object.entries(value)) {
    if (forbiddenKeys.has(key)) errors.push(`${path} contains forbidden key ${key}.`);
    findForbiddenContent(nestedValue, `${path}.${key}`, errors);
  }
}

function normalizeName(value: string): string {
  return value.trim().toLocaleLowerCase('en');
}

export function validateAshOfWarCatalog(
  entries: readonly AshOfWar[],
  bossIds: ReadonlySet<string> = new Set(),
  regionIds: ReadonlySet<string> = new Set(),
): AshOfWarValidationResult {
  const errors: string[] = [];
  const ids = new Set<string>();
  const names = new Set<string>();
  let baseGameCount = 0;
  let expansionCount = 0;

  for (const [index, entry] of entries.entries()) {
    const path = `ashesOfWar[${index}]`;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id)) {
      errors.push(`${path}.id must be kebab-case.`);
    }
    if (entry.id.startsWith('sample-')) errors.push(`${path}.id uses sample prefix.`);
    if (ids.has(entry.id)) errors.push(`${path}.id is duplicated.`);
    if (bossIds.has(entry.id)) errors.push(`${path}.id collides with a boss.`);
    if (regionIds.has(entry.id)) errors.push(`${path}.id collides with a region.`);
    ids.add(entry.id);

    if (entry.contentPack === 'base-game') baseGameCount += 1;
    else if (entry.contentPack === 'shadow-of-the-erdtree') expansionCount += 1;
    else errors.push(`${path}.contentPack is invalid.`);

    validateLocalizedValue(entry.name, `${path}.name`, errors);
    validateLocalizedValue(entry.skillName, `${path}.skillName`, errors);
    validateLocalizedValue(entry.primaryLocation, `${path}.primaryLocation`, errors);
    validateLocalizedValue(
      entry.primaryAcquisition,
      `${path}.primaryAcquisition`,
      errors,
    );
    validateLocalizedValue(entry.summary, `${path}.summary`, errors);
    validateLocalizedValue(entry.affinity, `${path}.affinity`, errors);

    const normalizedName = normalizeName(entry.name.en);
    if (names.has(normalizedName)) errors.push(`${path}.name.en is duplicated.`);
    names.add(normalizedName);

    if (entry.acquisitionMethods.length === 0) {
      errors.push(`${path}.acquisitionMethods must not be empty.`);
    }
    entry.acquisitionMethods.forEach((method, methodIndex) => {
      validateLocalizedValue(
        method.location,
        `${path}.acquisitionMethods[${methodIndex}].location`,
        errors,
      );
      validateLocalizedValue(
        method.method,
        `${path}.acquisitionMethods[${methodIndex}].method`,
        errors,
      );
      if (method.notes !== undefined && method.notes !== null) {
        validateLocalizedValue(
          method.notes,
          `${path}.acquisitionMethods[${methodIndex}].notes`,
          errors,
        );
      }
    });

    if (entry.compatibleEquipment.en.length === 0) {
      errors.push(`${path}.compatibleEquipment.en must not be empty.`);
    }
    if (
      entry.compatibleEquipment.en.some((value) => !isNonEmptyString(value))
    ) {
      errors.push(`${path}.compatibleEquipment.en contains an empty value.`);
    }
    if (
      entry.compatibleEquipment.ptBR !== null &&
      entry.compatibleEquipment.ptBR.some((value) => !isNonEmptyString(value))
    ) {
      errors.push(`${path}.compatibleEquipment.ptBR contains an empty value.`);
    }
    if (
      entry.fpCost !== null &&
      (typeof entry.fpCost !== 'number' ||
        !Number.isFinite(entry.fpCost) ||
        entry.fpCost < 0)
    ) {
      errors.push(`${path}.fpCost must be a non-negative number or null.`);
    }

    for (const [key, optionalValue] of [
      ['skillType', entry.skillType],
      ['specialEffects', entry.specialEffects],
      ['limitations', entry.limitations],
      ['relevantNotes', entry.relevantNotes],
    ] as const) {
      if (optionalValue !== null) {
        validateLocalizedValue(optionalValue, `${path}.${key}`, errors);
      }
    }

    if (/lost ashes of war/i.test(entry.name.en)) {
      errors.push(`${path} includes Lost Ashes of War.`);
    }
    findForbiddenContent(entry, path, errors);
  }

  if (entries.length !== EXPECTED_ASH_OF_WAR_COUNTS.total) {
    errors.push(`Expected 116 Ashes of War, received ${entries.length}.`);
  }
  if (baseGameCount !== EXPECTED_ASH_OF_WAR_COUNTS['base-game']) {
    errors.push(`Expected 91 base-game Ashes of War, received ${baseGameCount}.`);
  }
  if (expansionCount !== EXPECTED_ASH_OF_WAR_COUNTS['shadow-of-the-erdtree']) {
    errors.push(
      `Expected 25 expansion Ashes of War, received ${expansionCount}.`,
    );
  }

  return { isValid: errors.length === 0, errors };
}

export function assertValidAshOfWarCatalog(
  entries: readonly AshOfWar[],
  bossIds: ReadonlySet<string> = new Set(),
  regionIds: ReadonlySet<string> = new Set(),
): void {
  const result = validateAshOfWarCatalog(entries, bossIds, regionIds);
  if (!result.isValid) {
    throw new Error(`Invalid Ashes of War catalog:\n${result.errors.join('\n')}`);
  }
}

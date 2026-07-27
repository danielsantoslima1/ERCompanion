import type {
  BossEncounter,
  LocalizedText,
  Region,
} from '../types';

function isLocalizedTextEmpty(value: LocalizedText): boolean {
  return value['pt-BR'].trim().length === 0 || value.en.trim().length === 0;
}

function findDuplicateIds(
  items: readonly { id: string }[],
  itemLabel: string,
): string[] {
  const errors: string[] = [];
  const seenIds = new Set<string>();
  const duplicateIds = new Set<string>();

  for (const item of items) {
    if (seenIds.has(item.id)) {
      duplicateIds.add(item.id);
    } else {
      seenIds.add(item.id);
    }
  }

  for (const duplicateId of duplicateIds) {
    errors.push(`Duplicate ${itemLabel} ID: ${duplicateId}`);
  }

  return errors;
}

export function validateData(
  regionList: readonly Region[],
  bossList: readonly BossEncounter[],
): string[] {
  const errors = [
    ...findDuplicateIds(regionList, 'region'),
    ...findDuplicateIds(bossList, 'boss'),
  ];
  const regionsById = new Map(
    regionList.map((region) => [region.id, region]),
  );

  for (const region of regionList) {
    if (isLocalizedTextEmpty(region.name)) {
      errors.push(`Region ${region.id} has an empty localized name.`);
    }

    if (
      !Number.isInteger(region.displayOrder) ||
      region.displayOrder < 0
    ) {
      errors.push(`Region ${region.id} has an invalid display order.`);
    }
  }

  for (const boss of bossList) {
    if (isLocalizedTextEmpty(boss.name)) {
      errors.push(`Boss ${boss.id} has an empty localized name.`);
    }

    if (isLocalizedTextEmpty(boss.location)) {
      errors.push(`Boss ${boss.id} has an empty localized location.`);
    }

    const region = regionsById.get(boss.regionId);

    if (region === undefined) {
      errors.push(
        `Boss ${boss.id} references unknown region ${boss.regionId}.`,
      );
      continue;
    }

    if (boss.game !== region.game) {
      errors.push(
        `Boss ${boss.id} does not match the game content of region ${region.id}.`,
      );
    }
  }

  return errors;
}

export function isDataValid(
  regionList: readonly Region[],
  bossList: readonly BossEncounter[],
): boolean {
  return validateData(regionList, bossList).length === 0;
}

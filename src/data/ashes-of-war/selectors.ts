import { compareLocalizedText } from '../selectors';
import { ashesOfWar } from './ashesOfWar';
import type {
  AshOfWar,
  AshOfWarContentPack,
  AshOfWarLocale,
  LocalizedOptionalValue,
  LocalizedRequiredList,
  LocalizedRequiredValue,
  ResolvedLocalizedList,
  ResolvedLocalizedValue,
} from './types';

const ashOfWarById: ReadonlyMap<string, AshOfWar> = new Map(
  ashesOfWar.map((entry) => [entry.id, entry]),
);

export function getAllAshesOfWar(): readonly AshOfWar[] {
  return ashesOfWar;
}

export function getAshOfWarById(id: string): AshOfWar | undefined {
  return ashOfWarById.get(id);
}

export function getAshesOfWarByContentPack(
  contentPack: AshOfWarContentPack,
): AshOfWar[] {
  return ashesOfWar.filter((entry) => entry.contentPack === contentPack);
}

export function resolveLocalizedValue(
  localizedValue: LocalizedRequiredValue,
  locale: AshOfWarLocale,
): ResolvedLocalizedValue {
  if (locale === 'en') {
    return { value: localizedValue.en, usedFallback: false };
  }

  const portugueseValue = localizedValue.ptBR?.trim();
  return portugueseValue
    ? { value: portugueseValue, usedFallback: false }
    : { value: localizedValue.en, usedFallback: true };
}

export function resolveLocalizedList(
  localizedList: LocalizedRequiredList,
  locale: AshOfWarLocale,
): ResolvedLocalizedList {
  if (locale === 'en') {
    return { value: localizedList.en, usedFallback: false };
  }

  const portugueseValues = localizedList.ptBR?.filter(
    (value) => value.trim().length > 0,
  );
  return portugueseValues && portugueseValues.length > 0
    ? { value: portugueseValues, usedFallback: false }
    : { value: localizedList.en, usedFallback: true };
}

function optionalValueUsesFallback(
  value: LocalizedOptionalValue,
  locale: AshOfWarLocale,
): boolean {
  return value === null
    ? false
    : resolveLocalizedValue(value, locale).usedFallback;
}

export function ashOfWarUsesEnglishFallback(
  entry: AshOfWar,
  locale: AshOfWarLocale,
): boolean {
  if (locale === 'en') return false;

  const requiredValues = [
    entry.name,
    entry.skillName,
    entry.primaryLocation,
    entry.primaryAcquisition,
    entry.summary,
    entry.affinity,
  ];
  if (
    requiredValues.some(
      (value) => resolveLocalizedValue(value, locale).usedFallback,
    ) ||
    resolveLocalizedList(entry.compatibleEquipment, locale).usedFallback
  ) {
    return true;
  }

  if (
    [entry.skillType, entry.specialEffects, entry.limitations, entry.relevantNotes]
      .some((value) => optionalValueUsesFallback(value, locale))
  ) {
    return true;
  }

  return entry.acquisitionMethods.some((acquisition) =>
    resolveLocalizedValue(acquisition.location, locale).usedFallback ||
    resolveLocalizedValue(acquisition.method, locale).usedFallback ||
    optionalValueUsesFallback(acquisition.notes ?? null, locale),
  );
}

export function sortAshesOfWarAlphabetically(
  entries: readonly AshOfWar[],
  locale: AshOfWarLocale,
): AshOfWar[] {
  return [...entries].sort((first, second) => {
    const nameDifference = compareLocalizedText(
      resolveLocalizedValue(first.name, locale).value,
      resolveLocalizedValue(second.name, locale).value,
      locale,
    );
    return nameDifference || first.id.localeCompare(second.id);
  });
}

export function getSortedAshesOfWar(locale: AshOfWarLocale): AshOfWar[] {
  return sortAshesOfWarAlphabetically(ashesOfWar, locale);
}

export function getSortedAshesOfWarByContentPack(
  contentPack: AshOfWarContentPack,
  locale: AshOfWarLocale,
): AshOfWar[] {
  return sortAshesOfWarAlphabetically(
    getAshesOfWarByContentPack(contentPack),
    locale,
  );
}

function addSearchValue(values: Set<string>, value: string | null): void {
  const normalizedValue = value?.trim();
  if (normalizedValue) values.add(normalizedValue);
}

function addLocalizedSearchValue(
  values: Set<string>,
  value: LocalizedRequiredValue,
  locale: AshOfWarLocale,
): void {
  addSearchValue(values, resolveLocalizedValue(value, locale).value);
  addSearchValue(values, value.en);
  if (locale === 'pt-BR') addSearchValue(values, value.ptBR);
}

export function getAshOfWarSearchableText(
  entry: AshOfWar,
  locale: AshOfWarLocale,
): readonly string[] {
  const values = new Set<string>();
  for (const value of [
    entry.name,
    entry.skillName,
    entry.primaryLocation,
    entry.primaryAcquisition,
    entry.summary,
    entry.skillType,
    entry.affinity,
    entry.specialEffects,
    entry.limitations,
    entry.relevantNotes,
  ]) {
    if (value) addLocalizedSearchValue(values, value, locale);
  }

  for (const acquisition of entry.acquisitionMethods) {
    addLocalizedSearchValue(values, acquisition.location, locale);
    addLocalizedSearchValue(values, acquisition.method, locale);
    if (acquisition.notes) {
      addLocalizedSearchValue(values, acquisition.notes, locale);
    }
  }

  const resolvedEquipment = resolveLocalizedList(
    entry.compatibleEquipment,
    locale,
  ).value;
  for (const value of [
    ...resolvedEquipment,
    ...entry.compatibleEquipment.en,
    ...(locale === 'pt-BR' ? (entry.compatibleEquipment.ptBR ?? []) : []),
  ]) {
    addSearchValue(values, value);
  }

  return [...values];
}

export function getAshOfWarIndexSize(): number {
  return ashOfWarById.size;
}

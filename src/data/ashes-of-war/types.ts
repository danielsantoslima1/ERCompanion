import type { Language } from '../../types';

export type AshOfWarContentPack = 'base-game' | 'shadow-of-the-erdtree';

export interface LocalizedRequiredValue {
  readonly ptBR: string | null;
  readonly en: string;
}

export type LocalizedOptionalValue = LocalizedRequiredValue | null;

export interface LocalizedRequiredList {
  readonly ptBR: readonly string[] | null;
  readonly en: readonly string[];
}

export interface AshOfWarAcquisitionMethod {
  readonly location: LocalizedRequiredValue;
  readonly method: LocalizedRequiredValue;
  readonly notes?: LocalizedOptionalValue;
}

export interface AshOfWar {
  readonly id: string;
  readonly contentPack: AshOfWarContentPack;
  readonly name: LocalizedRequiredValue;
  readonly skillName: LocalizedRequiredValue;
  readonly primaryLocation: LocalizedRequiredValue;
  readonly primaryAcquisition: LocalizedRequiredValue;
  readonly acquisitionMethods: readonly AshOfWarAcquisitionMethod[];
  readonly summary: LocalizedRequiredValue;
  readonly skillType: LocalizedOptionalValue;
  readonly affinity: LocalizedRequiredValue;
  readonly compatibleEquipment: LocalizedRequiredList;
  readonly fpCost: number | null;
  readonly specialEffects: LocalizedOptionalValue;
  readonly limitations: LocalizedOptionalValue;
  readonly relevantNotes: LocalizedOptionalValue;
}

export interface ResolvedLocalizedValue {
  readonly value: string;
  readonly usedFallback: boolean;
}

export interface ResolvedLocalizedList {
  readonly value: readonly string[];
  readonly usedFallback: boolean;
}

export type AshOfWarLocale = Language;

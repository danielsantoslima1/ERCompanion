import type { Language } from '../../types';

export type SpellContentPack = 'base-game' | 'shadow-of-the-erdtree';
export type SpellCategory = 'sorcery' | 'incantation';
export type SpellAvailabilityTag =
  | 'permanent'
  | 'once-per-playthrough'
  | 'quest'
  | 'exclusive-choice'
  | 'new-game-plus';

export interface SpellLocalizedValue {
  readonly ptBR: string | null;
  readonly en: string | null;
}

export interface SpellAcquisitionMethod {
  readonly method: SpellLocalizedValue;
  readonly location: SpellLocalizedValue;
  readonly source: SpellLocalizedValue;
  readonly npc: SpellLocalizedValue;
  readonly requiredItem: SpellLocalizedValue;
  readonly availabilityTags: readonly SpellAvailabilityTag[];
  readonly containsQuestSpoilers: boolean;
  readonly spoilerSafeText: SpellLocalizedValue;
  readonly protectedSearchTerms: readonly string[];
  readonly referenceIds: readonly string[];
}

interface SpellBase {
  readonly id: string;
  readonly contentPack: SpellContentPack;
  readonly name: SpellLocalizedValue & { readonly en: string };
  readonly primaryLocation: SpellLocalizedValue;
  readonly primarySource: SpellLocalizedValue;
  readonly acquisitionMethods: readonly SpellAcquisitionMethod[];
  readonly legendary: boolean;
  readonly missable: boolean | null;
  readonly containsQuestSpoilers: boolean;
  readonly spoilerSafeCardText: SpellLocalizedValue;
  readonly searchAliases: readonly string[];
  readonly referenceIds: readonly string[];
}

export interface Sorcery extends SpellBase {
  readonly category: 'sorcery';
}

export interface Incantation extends SpellBase {
  readonly category: 'incantation';
}

export type Spell = Sorcery | Incantation;
export type SpellLocale = Language;
export type SpellFilter = 'legendary' | 'missable';

export interface ResolvedSpellValue {
  readonly value: string | null;
  readonly usedFallback: boolean;
}

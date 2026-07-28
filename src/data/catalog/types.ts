import type { LocalizedText } from '../../types/boss';

export type ContentPack = 'base-game' | 'shadow-of-the-erdtree';

export interface CatalogRegion {
  readonly id: string;
  readonly contentPack: ContentPack;
  readonly name: LocalizedText;
  readonly displayOrder: number;
}

export interface ParticipantCountRange {
  readonly min: number;
  readonly max: number;
}

export interface EncounterPhase {
  readonly name: LocalizedText;
  readonly location?: LocalizedText;
}

export interface BossEncounter {
  readonly id: string;
  readonly regionId: string;
  readonly name: LocalizedText;
  readonly location: LocalizedText;
  readonly availability?: LocalizedText;
  readonly originalName?: LocalizedText;
  readonly barNames?: readonly LocalizedText[];
  readonly mainParticipantCount?: number | ParticipantCountRange;
  readonly mainParticipants?: readonly LocalizedText[];
  readonly variableMainParticipantCount?: number;
  readonly phases?: readonly EncounterPhase[];
  readonly summons?: readonly LocalizedText[];
  readonly auxiliaryEnemies?: readonly LocalizedText[];
}

export type BossEncounterWithProgress = BossEncounter & {
  readonly isDefeated: boolean;
};

export interface CatalogValidationResult {
  readonly isValid: boolean;
  readonly errors: readonly string[];
}

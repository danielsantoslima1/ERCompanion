export type GameContent = 'base-game' | 'shadow-of-the-erdtree';

export interface LocalizedText {
  'pt-BR': string;
  en: string;
}

export interface BossEncounter {
  id: string;
  name: LocalizedText;
  location: LocalizedText;
  regionId: string;
  game: GameContent;
}

export type BossEncounterWithProgress = BossEncounter & {
  isDefeated: boolean;
};

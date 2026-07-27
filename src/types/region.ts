import type { GameContent, LocalizedText } from './boss';

export interface Region {
  id: string;
  name: LocalizedText;
  game: GameContent;
  displayOrder: number;
}

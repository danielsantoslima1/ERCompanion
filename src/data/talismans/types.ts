export type TalismanContentPack = 'base-game' | 'shadow-of-the-erdtree';

export interface Talisman {
  readonly id: string;
  readonly name: string;
  readonly contentPack: TalismanContentPack;
  readonly primaryLocation: string;
  readonly detailedLocation: string;
  readonly region: string;
  readonly primaryAcquisition: string;
  readonly nearestSiteOfGrace: string | null;
  readonly effect: string;
  readonly weight: number | null;
  readonly description: string;
  readonly legendary: boolean;
  readonly missable: boolean;
}

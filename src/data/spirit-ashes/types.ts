export type SpiritAshContentPack = 'base-game' | 'shadow-of-the-erdtree';
export type SpiritAshCostType = 'fp' | 'hp';
export type SpiritAshUpgradeType = 'grave-glovewort' | 'ghost-glovewort' | 'none';

export interface SpiritAshAcquisition {
  readonly source: string;
  readonly location: string;
  readonly steps: readonly string[];
}

export interface SpiritAsh {
  readonly id: string;
  readonly contentPack: SpiritAshContentPack;
  readonly name: string;
  readonly primaryLocation: string;
  readonly region: string;
  readonly primaryAcquisition: string;
  readonly acquisitionMethods: readonly SpiritAshAcquisition[];
  readonly nearestSiteOfGrace: string | null;
  readonly summonCost: { readonly type: SpiritAshCostType; readonly amount: number | null };
  readonly numberSummoned: number | null;
  readonly upgradeType: SpiritAshUpgradeType;
  readonly legendary: boolean;
  readonly missable: boolean | null;
  readonly effects: string | null;
}

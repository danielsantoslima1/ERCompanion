export const INDEX_LABELS = {
  index: 'Index',
  remembranceBosses: 'Remembrance Bosses',
  baseGame: 'Base Game',
  dlc: 'DLC',
  emptyTitle: 'Content coming in a future phase',
  emptyDescription:
    'Remembrance Boss information, lore, technical data, and related rewards will be added later.',
} as const;

export const INDEX_ROUTES = {
  remembranceBosses: '/remembrance-bosses',
  baseGame: '/remembrance-bosses/base-game',
  dlc: '/remembrance-bosses/dlc',
} as const;

export interface IndexNavigationEntry {
  readonly id: 'remembrance-bosses' | 'base-game' | 'dlc';
  readonly label: string;
  readonly route: (typeof INDEX_ROUTES)[keyof typeof INDEX_ROUTES];
}

export const REMEMBRANCE_BOSSES_ENTRIES: readonly IndexNavigationEntry[] = [
  {
    id: 'base-game',
    label: INDEX_LABELS.baseGame,
    route: INDEX_ROUTES.baseGame,
  },
  {
    id: 'dlc',
    label: INDEX_LABELS.dlc,
    route: INDEX_ROUTES.dlc,
  },
];

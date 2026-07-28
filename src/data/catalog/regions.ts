import type { CatalogRegion } from './types';

function localized(value: string) {
  return { 'pt-BR': value, en: value } as const;
}

export const catalogRegions: readonly CatalogRegion[] = Object.freeze([
  { id: 'limgrave', contentPack: 'base-game', name: localized('Limgrave'), displayOrder: 10 },
  { id: 'weeping-peninsula', contentPack: 'base-game', name: localized('Weeping Peninsula'), displayOrder: 20 },
  { id: 'siofra-river', contentPack: 'base-game', name: localized('Siofra River'), displayOrder: 30 },
  { id: 'liurnia-of-the-lakes', contentPack: 'base-game', name: localized('Liurnia of the Lakes'), displayOrder: 40 },
  { id: 'ainsel-river', contentPack: 'base-game', name: localized('Ainsel River'), displayOrder: 50 },
  { id: 'lake-of-rot', contentPack: 'base-game', name: localized('Lake of Rot'), displayOrder: 60 },
  { id: 'caelid', contentPack: 'base-game', name: localized('Caelid'), displayOrder: 70 },
  { id: 'greyolls-dragonbarrow', contentPack: 'base-game', name: localized("Greyoll's Dragonbarrow"), displayOrder: 80 },
  { id: 'deeproot-depths', contentPack: 'base-game', name: localized('Deeproot Depths'), displayOrder: 90 },
  { id: 'altus-plateau', contentPack: 'base-game', name: localized('Altus Plateau'), displayOrder: 100 },
  { id: 'mt-gelmir', contentPack: 'base-game', name: localized('Mt. Gelmir'), displayOrder: 110 },
  { id: 'mountaintops-of-the-giants', contentPack: 'base-game', name: localized('Mountaintops of the Giants'), displayOrder: 120 },
  { id: 'consecrated-snowfield', contentPack: 'base-game', name: localized('Consecrated Snowfield'), displayOrder: 130 },
  { id: 'mohgwyn-palace', contentPack: 'base-game', name: localized('Mohgwyn Palace'), displayOrder: 140 },
  { id: 'miquellas-haligtree', contentPack: 'base-game', name: localized("Miquella's Haligtree"), displayOrder: 150 },
  { id: 'crumbling-farum-azula', contentPack: 'base-game', name: localized('Crumbling Farum Azula'), displayOrder: 160 },
  { id: 'gravesite-plain', contentPack: 'shadow-of-the-erdtree', name: localized('Gravesite Plain'), displayOrder: 1 },
  { id: 'scadu-altus', contentPack: 'shadow-of-the-erdtree', name: localized('Scadu Altus'), displayOrder: 2 },
  { id: 'rauh-base', contentPack: 'shadow-of-the-erdtree', name: localized('Rauh Base'), displayOrder: 3 },
  { id: 'ancient-ruins-of-rauh', contentPack: 'shadow-of-the-erdtree', name: localized('Ancient Ruins of Rauh'), displayOrder: 4 },
  { id: 'cerulean-coast', contentPack: 'shadow-of-the-erdtree', name: localized('Cerulean Coast'), displayOrder: 5 },
  { id: 'charos-hidden-grave', contentPack: 'shadow-of-the-erdtree', name: localized("Charo's Hidden Grave"), displayOrder: 6 },
  { id: 'jagged-peak', contentPack: 'shadow-of-the-erdtree', name: localized('Jagged Peak'), displayOrder: 7 },
  { id: 'abyssal-woods', contentPack: 'shadow-of-the-erdtree', name: localized('Abyssal Woods'), displayOrder: 8 },
  { id: 'finger-ruins-of-rhia', contentPack: 'shadow-of-the-erdtree', name: localized('Finger Ruins of Rhia'), displayOrder: 9 },
  { id: 'scaduview', contentPack: 'shadow-of-the-erdtree', name: localized('Scaduview'), displayOrder: 10 },
]);

import type { SpiritAsh, SpiritAshContentPack } from './types';

const BASE_NAMES = [
  'Wandering Noble Ashes', 'Noble Sorcerer Ashes', 'Nomad Ashes', 'Putrid Corpse Ashes',
  'Skeletal Militiaman Ashes', 'Skeletal Bandit Ashes', 'Albinauric Ashes', 'Winged Misbegotten Ashes',
  'Demi-Human Ashes', 'Clayman Ashes', 'Oracle Envoy Ashes', 'Lone Wolf Ashes', 'Rotten Stray Ashes',
  'Giant Rat Ashes', 'Warhawk Ashes', 'Land Squirt Ashes', 'Spirit Jellyfish Ashes', 'Miranda Sprout Ashes',
  'Fanged Imp Ashes', 'Marionette Soldier Ashes', 'Avionette Soldier Ashes', 'Glintstone Sorcerer Ashes',
  'Twinsage Sorcerer Ashes', 'Page Ashes', 'Battlemage Hugues', 'Lazuli Sorcerer Ashes', 'Perfumer Tricia',
  'Depraved Perfumer Carmaan', 'Omenkiller Rollo', 'Mad Pumpkin Head Ashes', 'Man-Serpent Ashes',
  'Azula Beastman Ashes', 'Kaiden Sellsword Ashes', 'Godrick Soldier Ashes', 'Raya Lucaria Soldier Ashes',
  'Leyndell Soldier Ashes', 'Radahn Soldier Ashes', 'Mausoleum Soldier Ashes', 'Haligtree Soldier Ashes',
  'Greatshield Soldier Ashes', 'Archer Ashes', 'Cleanrot Knight Finlay', 'Banished Knight Oleg',
  'Banished Knight Engvall', 'Bloodhound Knight Floh', 'Blackflame Monk Amon', 'Fire Monk Ashes',
  'Kindred of Rot Ashes', 'Crystalian Ashes', 'Ancestral Follower Ashes', 'Redmane Knight Ogha',
  'Ancient Dragon Knight Kristoff', 'Latenna the Albinauric', 'Dolores the Sleeping Arrow Puppet',
  'Jarwight Puppet', 'Finger Maiden Therolina Puppet', 'Nightmaiden & Swordstress Puppets',
  'Dung Eater Puppet', 'Mimic Tear Ashes', 'Black Knife Tiche', 'Lhutel the Headless',
  'Soldjars of Fortune Ashes', 'Stormhawk Deenh', 'Nepheli Loux Puppet',
] as const;

const DLC_NAMES = [
  'Man-Fly Ashes', 'Spider Scorpion Ashes', 'Fingercreeper Ashes', 'Bigmouth Imp Ashes', 'Gravebird Ashes',
  'Horned Warrior Ashes', 'Bloodfiend Hexer\'s Ashes', 'Inquisitor Ashes', 'Messmer Soldier Ashes',
  'Black Knight Captain Huw', 'Black Knight Commander Andreas', 'Fire Knight Hilde', 'Fire Knight Queelign',
  'Curseblade Meera', 'Demi-Human Swordsman Yosh', 'Swordhand of Night Jolán', 'Jolán and Anna',
  'Ancient Dragon Florissax', 'Divine Bird Warrior Ornis', 'Taylew the Golem Smith',
] as const;

function slugify(name: string): string {
  return name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const LEGENDARY = new Set([
  'Cleanrot Knight Finlay', 'Redmane Knight Ogha', 'Ancient Dragon Knight Kristoff',
  'Lhutel the Headless', 'Mimic Tear Ashes', 'Black Knife Tiche',
]);

const COSTS: Record<string, { type: 'fp' | 'hp'; amount: number | null }> = {
  'Mimic Tear Ashes': { type: 'hp', amount: 660 },
  'Latenna the Albinauric': { type: 'fp', amount: 74 },
  'Black Knife Tiche': { type: 'fp', amount: 132 },
  'Ancient Dragon Knight Kristoff': { type: 'fp', amount: 108 },
  'Cleanrot Knight Finlay': { type: 'fp', amount: 127 },
  'Lhutel the Headless': { type: 'fp', amount: 104 },
};

function createEntry(name: string, contentPack: SpiritAshContentPack): SpiritAsh {
  const region = contentPack === 'base-game' ? 'Limgrave' : 'Land of Shadow';
  const cost = COSTS[name] ?? { type: 'fp' as const, amount: null };
  return {
    id: `spirit-ash-${slugify(name)}`,
    contentPack,
    name,
    primaryLocation: `${name.replace(/ Ashes$/, '')} location - ${region}`,
    region,
    primaryAcquisition: 'Found during exploration or awarded by the associated encounter.',
    acquisitionMethods: [{ source: 'World exploration', location: `${name.replace(/ Ashes$/, '')} location - ${region}`, steps: [] }],
    nearestSiteOfGrace: null,
    summonCost: cost,
    numberSummoned: null,
    upgradeType: name.includes('Puppet') || LEGENDARY.has(name) ? 'ghost-glovewort' : 'grave-glovewort',
    legendary: LEGENDARY.has(name),
    missable: null,
    effects: null,
  };
}

export const spiritAshes: readonly SpiritAsh[] = [
  ...BASE_NAMES.map((name) => createEntry(name, 'base-game')),
  ...DLC_NAMES.map((name) => createEntry(name, 'shadow-of-the-erdtree')),
];

export const EXPECTED_SPIRIT_ASH_COUNTS = Object.freeze({
  'base-game': BASE_NAMES.length,
  'shadow-of-the-erdtree': DLC_NAMES.length,
  total: BASE_NAMES.length + DLC_NAMES.length,
});

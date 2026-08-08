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

type LocationData = { readonly location: string; readonly region: string; readonly source: string };

// The summary is intentionally limited to a real acquisition area and its full region.
const LOCATION_DATA: Record<string, LocationData> = {
  'Wandering Noble Ashes': { location: "Stormfoot Catacombs", region: 'Limgrave', source: 'Found on a corpse in Stormfoot Catacombs.' },
  'Noble Sorcerer Ashes': { location: "Stormfoot Catacombs", region: 'Limgrave', source: 'Found on a corpse in Stormfoot Catacombs.' },
  'Nomad Ashes': { location: 'Leyndell Catacombs', region: 'Leyndell, Royal Capital', source: 'Found in the subterranean Leyndell Catacombs.' },
  'Putrid Corpse Ashes': { location: 'Summonwater Village', region: 'Limgrave', source: 'Found in Summonwater Village.' },
  'Skeletal Militiaman Ashes': { location: 'Summonwater Village', region: 'Limgrave', source: 'Dropped by the Tibia Mariner in Summonwater Village.' },
  'Skeletal Bandit Ashes': { location: 'Deathtouched Catacombs', region: 'Limgrave', source: 'Found in Deathtouched Catacombs.' },
  'Albinauric Ashes': { location: 'Village of the Albinaurics', region: 'Liurnia of the Lakes', source: 'Found in the Village of the Albinaurics.' },
  'Winged Misbegotten Ashes': { location: 'Castle Morne', region: 'Weeping Peninsula', source: 'Found in Castle Morne.' },
  'Demi-Human Ashes': { location: 'Impaler\'s Catacombs', region: 'Weeping Peninsula', source: 'Found in Impaler\'s Catacombs.' },
  'Clayman Ashes': { location: 'Siofra River', region: 'Siofra River', source: 'Found in the underground Siofra River.' },
  'Oracle Envoy Ashes': { location: 'East Capital Rampart', region: 'Leyndell, Royal Capital', source: 'Found near the East Capital Rampart.' },
  'Lone Wolf Ashes': { location: 'Church of Elleh', region: 'Limgrave', source: 'Given by Renna at the Church of Elleh.' },
  'Rotten Stray Ashes': { location: 'Caelid Catacombs', region: 'Caelid', source: 'Found in Caelid Catacombs.' },
  'Giant Rat Ashes': { location: 'Morne Tunnel', region: 'Weeping Peninsula', source: 'Found in the fields near Morne Tunnel.' },
  'Warhawk Ashes': { location: 'Stormveil Castle', region: 'Limgrave', source: 'Found in Stormveil Castle.' },
  'Land Squirt Ashes': { location: 'Weeping Peninsula', region: 'Weeping Peninsula', source: 'Found in the Weeping Peninsula overworld.' },
  'Spirit Jellyfish Ashes': { location: 'Stormhill Shack', region: 'Limgrave', source: 'Given by Roderika at Stormhill Shack.' },
  'Miranda Sprout Ashes': { location: 'Tombsward Catacombs', region: 'Weeping Peninsula', source: 'Found in Tombsward Catacombs.' },
  'Fanged Imp Ashes': { location: 'Isolated Merchant', region: 'Liurnia of the Lakes', source: 'Purchased from the Isolated Merchant near Raya Lucaria.' },
  'Marionette Soldier Ashes': { location: 'Raya Lucaria Academy', region: 'Liurnia of the Lakes', source: 'Found in Raya Lucaria Academy.' },
  'Avionette Soldier Ashes': { location: 'Raya Lucaria Academy', region: 'Liurnia of the Lakes', source: 'Found in Raya Lucaria Academy.' },
  'Glintstone Sorcerer Ashes': { location: "Road's End Catacombs", region: 'Liurnia of the Lakes', source: "Found in Road's End Catacombs." },
  'Twinsage Sorcerer Ashes': { location: 'Black Knife Catacombs', region: 'Liurnia of the Lakes', source: 'Found in Black Knife Catacombs.' },
  'Page Ashes': { location: 'Cliffbottom Catacombs', region: 'Liurnia of the Lakes', source: 'Found in Cliffbottom Catacombs.' },
  'Battlemage Hugues': { location: 'Sellia Evergaol', region: 'Caelid', source: 'Dropped by Battlemage Hugues in Sellia Evergaol.' },
  'Lazuli Sorcerer Ashes': { location: 'Cuckoo\'s Evergaol', region: 'Liurnia of the Lakes', source: "Found near the Cuckoo's Evergaol." },
  'Perfumer Tricia': { location: 'Unsightly Catacombs', region: 'Altus Plateau', source: 'Dropped by Perfumer Tricia in Unsightly Catacombs.' },
  'Depraved Perfumer Carmaan': { location: 'Volcano Manor', region: 'Mt. Gelmir', source: 'Received from Rya at Volcano Manor.' },
  'Omenkiller Rollo': { location: 'Fell Twins', region: 'Capital Outskirts', source: 'Dropped by the Fell Twins.' },
  'Mad Pumpkin Head Ashes': { location: 'Caelem Ruins', region: 'Caelid', source: 'Found in Caelem Ruins.' },
  'Man-Serpent Ashes': { location: 'Volcano Manor', region: 'Mt. Gelmir', source: 'Found in Volcano Manor.' },
  'Azula Beastman Ashes': { location: 'Groveside Cave', region: 'Limgrave', source: 'Found in Groveside Cave.' },
  'Kaiden Sellsword Ashes': { location: 'Highroad Cave', region: 'Limgrave', source: 'Found in Highroad Cave.' },
  'Godrick Soldier Ashes': { location: 'Stormveil Castle', region: 'Limgrave', source: 'Found in Stormveil Castle.' },
  'Raya Lucaria Soldier Ashes': { location: 'Raya Lucaria Crystal Tunnel', region: 'Liurnia of the Lakes', source: 'Found in Raya Lucaria Crystal Tunnel.' },
  'Leyndell Soldier Ashes': { location: 'Auriza Side Tomb', region: 'Capital Outskirts', source: 'Found in Auriza Side Tomb.' },
  'Radahn Soldier Ashes': { location: 'War-Dead Catacombs', region: 'Caelid', source: 'Found in War-Dead Catacombs.' },
  'Mausoleum Soldier Ashes': { location: 'Black Knife Catacombs', region: 'Liurnia of the Lakes', source: 'Found in Black Knife Catacombs.' },
  'Haligtree Soldier Ashes': { location: 'Haligtree Catacombs', region: 'Miquella\'s Haligtree', source: "Found in Haligtree Catacombs." },
  'Greatshield Soldier Ashes': { location: "Night's Sacred Ground", region: 'Nokron, Eternal City', source: "Found in Night's Sacred Ground." },
  'Archer Ashes': { location: 'Siofra River', region: 'Siofra River', source: 'Found in the Siofra River underground.' },
  'Cleanrot Knight Finlay': { location: 'Elphael, Brace of the Haligtree', region: "Miquella's Haligtree", source: 'Found in a chest in Elphael.' },
  'Banished Knight Oleg': { location: "Fringefolk Hero's Grave", region: 'Limgrave', source: "Found in Fringefolk Hero's Grave." },
  'Banished Knight Engvall': { location: 'Murkwater Catacombs', region: 'Limgrave', source: 'Found in Murkwater Catacombs.' },
  'Bloodhound Knight Floh': { location: "Gelmir Hero's Grave", region: 'Mt. Gelmir', source: "Dropped in Gelmir Hero's Grave." },
  'Blackflame Monk Amon': { location: "Giant's Mountaintop Catacombs", region: 'Mountaintops of the Giants', source: "Found in Giant's Mountaintop Catacombs." },
  'Fire Monk Ashes': { location: 'Giant-Conquering Hero\'s Grave', region: 'Mountaintops of the Giants', source: "Found in Giant-Conquering Hero's Grave." },
  'Kindred of Rot Ashes': { location: 'Seethewater Cave', region: 'Mt. Gelmir', source: 'Found in Seethewater Cave.' },
  'Crystalian Ashes': { location: 'Sellia Hideaway', region: 'Caelid', source: 'Found in Sellia Hideaway.' },
  'Ancestral Follower Ashes': { location: 'Siofra River', region: 'Siofra River', source: 'Found in the Siofra River underground.' },
  'Redmane Knight Ogha': { location: 'War-Dead Catacombs', region: 'Caelid', source: 'Dropped by the Putrid Tree Spirit in War-Dead Catacombs.' },
  'Ancient Dragon Knight Kristoff': { location: 'Sainted Hero\'s Grave', region: 'Altus Plateau', source: "Found in Sainted Hero's Grave." },
  'Latenna the Albinauric': { location: 'Slumbering Wolf Shack', region: 'Liurnia of the Lakes', source: 'Received from Latenna at Slumbering Wolf Shack.' },
  'Dolores the Sleeping Arrow Puppet': { location: 'Seluvis\' Rise', region: 'Liurnia of the Lakes', source: "Purchased through Preceptor Seluvis's quest." },
  'Jarwight Puppet': { location: 'Seluvis\' Rise', region: 'Liurnia of the Lakes', source: "Purchased through Preceptor Seluvis's quest." },
  'Finger Maiden Therolina Puppet': { location: 'Seluvis\' Rise', region: 'Liurnia of the Lakes', source: "Purchased through Preceptor Seluvis's quest." },
  'Nightmaiden & Swordstress Puppets': { location: 'Seluvis\' Rise', region: 'Liurnia of the Lakes', source: "Purchased through Preceptor Seluvis's quest." },
  'Dung Eater Puppet': { location: 'Seluvis\' Rise', region: 'Liurnia of the Lakes', source: "Purchased through Preceptor Seluvis's quest." },
  'Mimic Tear Ashes': { location: "Night's Sacred Ground", region: 'Nokron, Eternal City', source: "Found in a chest in Night's Sacred Ground." },
  'Black Knife Tiche': { location: "Ringleader's Evergaol", region: 'Liurnia of the Lakes', source: "Dropped by Alecto in Ringleader's Evergaol." },
  'Lhutel the Headless': { location: 'Tombsward Catacombs', region: 'Weeping Peninsula', source: 'Dropped by the Cemetery Shade in Tombsward Catacombs.' },
  'Soldjars of Fortune Ashes': { location: 'Auriza Side Tomb', region: 'Capital Outskirts', source: 'Found in Auriza Side Tomb.' },
  'Stormhawk Deenh': { location: 'Stormveil Castle', region: 'Limgrave', source: 'Found in Stormveil Castle.' },
  'Nepheli Loux Puppet': { location: 'Seluvis\' Rise', region: 'Liurnia of the Lakes', source: "Purchased through Preceptor Seluvis's quest." },
  'Man-Fly Ashes': { location: 'Abyssal Woods', region: 'Abyssal Woods', source: 'Found in the Abyssal Woods.' },
  'Spider Scorpion Ashes': { location: 'Belurat, Tower Settlement', region: 'Gravesite Plain', source: 'Found in Belurat, Tower Settlement.' },
  'Fingercreeper Ashes': { location: 'Finger Ruins of Miyr', region: 'Scadu Altus', source: 'Found in Finger Ruins of Miyr.' },
  'Bigmouth Imp Ashes': { location: 'Darklight Catacombs', region: 'Abyssal Woods', source: 'Found in Darklight Catacombs.' },
  'Gravebird Ashes': { location: "Charo's Hidden Grave", region: 'Southern Shore', source: "Found in Charo's Hidden Grave." },
  'Horned Warrior Ashes': { location: 'Enir-Ilim', region: 'Enir-Ilim', source: 'Found in Enir-Ilim.' },
  "Bloodfiend Hexer's Ashes": { location: 'Prospect Town', region: 'Gravesite Plain', source: 'Dropped in Prospect Town.' },
  'Inquisitor Ashes': { location: 'Belurat, Tower Settlement', region: 'Gravesite Plain', source: 'Found in Belurat, Tower Settlement.' },
  'Messmer Soldier Ashes': { location: 'Shadow Keep', region: 'Scadu Altus', source: 'Found in Shadow Keep.' },
  'Black Knight Captain Huw': { location: 'Fog Rift Catacomb', region: 'Scadu Altus', source: 'Dropped in Fog Rift Catacomb.' },
  'Black Knight Commander Andreas': { location: 'Darklight Catacombs', region: 'Abyssal Woods', source: 'Dropped in Darklight Catacombs.' },
  'Fire Knight Hilde': { location: 'Shadow Keep', region: 'Scadu Altus', source: 'Found in Shadow Keep.' },
  'Fire Knight Queelign': { location: 'Shadow Keep', region: 'Scadu Altus', source: 'Received through the Fire Knight Queelign quest.' },
  'Curseblade Meera': { location: 'Bonny Gaol', region: 'Scadu Altus', source: 'Dropped in Bonny Gaol.' },
  'Demi-Human Swordsman Yosh': { location: 'Belurat, Tower Settlement', region: 'Gravesite Plain', source: 'Dropped in Belurat, Tower Settlement.' },
  'Swordhand of Night Jolán': { location: 'Cathedral of Manus Metyr', region: 'Scadu Altus', source: 'Received through Count Ymir\'s quest.' },
  'Jolán and Anna': { location: 'Cathedral of Manus Metyr', region: 'Scadu Altus', source: 'Received through Count Ymir\'s quest.' },
  'Ancient Dragon Florissax': { location: 'Dragon Communion Grand Altar', region: 'Gravesite Plain', source: 'Received through the Dragon Communion Priestess quest.' },
  'Divine Bird Warrior Ornis': { location: 'Belurat, Tower Settlement', region: 'Gravesite Plain', source: 'Found in Belurat, Tower Settlement.' },
  'Taylew the Golem Smith': { location: 'Rauh Ancient Ruins', region: 'Rauh Ruins', source: 'Found in the Rauh Ancient Ruins.' },
};

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
  const location = LOCATION_DATA[name];
  if (!location) throw new Error(`Missing researched Spirit Ash location: ${name}`);
  const cost = COSTS[name] ?? { type: 'fp' as const, amount: null };
  return {
    id: `spirit-ash-${slugify(name)}`,
    contentPack,
    name,
    primaryLocation: `${location.location} - ${location.region}`,
    region: location.region,
    primaryAcquisition: location.source,
    acquisitionMethods: [{ source: location.source, location: `${location.location} - ${location.region}`, steps: [] }],
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

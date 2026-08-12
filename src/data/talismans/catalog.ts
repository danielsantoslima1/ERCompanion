import research from '../../../docs/research/talismans-catalog-research.json';
import type { Talisman, TalismanContentPack } from './types';

const LEGENDARY = new Set([
  'Dragoncrest Greatshield Talisman', "Erdtree's Favor +2", 'Godfrey Icon',
  "Marika's Soreseal", 'Moon of Nokstella', "Old Lord's Talisman",
  'Radagon Icon', "Radagon's Soreseal",
]);

// These acquisitions can become permanently unavailable in one playthrough.
const MISSABLE = new Set([
  'Companion Jar', "Daedicar's Woe", 'Magic Scorpion Charm', "Millicent's Prosthesis",
  'Rotten Winged Sword Insignia', 'Shard of Alexander', 'Warrior Jar Shard', "Taker's Cameo",
  'Lacerating Crossed-Tree', 'Retaliatory Crossed-Tree', 'Crusade Insignia', 'Dried Bouquet',
]);

export const talismans: readonly Talisman[] = research.entries.map((entry) => ({
  ...entry,
  contentPack: entry.contentPack as TalismanContentPack,
  legendary: LEGENDARY.has(entry.name),
  missable: MISSABLE.has(entry.name),
}));

export const EXPECTED_TALISMAN_COUNTS = Object.freeze({
  'base-game': 115,
  'shadow-of-the-erdtree': 39,
  total: 154,
});

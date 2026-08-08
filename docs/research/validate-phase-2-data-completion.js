const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '../..');
const completion = require('./spell-data-completion.json');
const sorceryResearch = require('./sorceries-catalog-research.json');
const incantationResearch = require('./incantations-catalog-research.json');

function fail(message) { throw new Error(message); }

const entries = completion.entries;
if (entries.length !== 213 || new Set(entries.map(({ id }) => id)).size !== 213) fail('Completion snapshot must contain 213 unique spell IDs.');
const forbiddenCardDetail = /\b(north|south|east|west|floor|room|chest|site of grace)\b/i;
for (const entry of entries) {
  if (!entry.mainLocation || !entry.region) fail(`Missing location: ${entry.id}`);
  const summary = `${entry.mainLocation} - ${entry.region}`;
  if (!/^.+ - .+$/.test(summary) || forbiddenCardDetail.test(summary)) fail(`Invalid summarized location: ${entry.id}: ${summary}`);
  if (!Number.isInteger(entry.revisionId) || !entry.sourceUrl.startsWith('https://eldenring.wiki.gg/')) fail(`Missing traceability: ${entry.id}`);
}

const research = [...sorceryResearch.entries, ...incantationResearch.entries];
if (research.length !== 213) fail('Research catalogs must total 213 entries.');
for (const entry of research) {
  if (!Number.isInteger(entry.fpCost.value) || !Number.isInteger(entry.memorySlots.value)) fail(`Missing core technical data: ${entry.id}`);
}
const trueMissables = research.filter(({ missable }) => missable.value === true).map(({ id }) => id).sort();
const expectedMissables = ['incantation-dragonbolt-of-florissax', 'incantation-furious-blade-of-ansbach', 'incantation-watchful-spirit', 'sorcery-shard-spiral'].sort();
if (JSON.stringify(trueMissables) !== JSON.stringify(expectedMissables)) fail(`Unexpected strict missable set: ${trueMissables.join(', ')}`);

const bosses = fs.readFileSync(path.join(root, 'src/data/catalog/bossEncounters.ts'), 'utf8');
const ashes = fs.readFileSync(path.join(root, 'src/data/ashes-of-war/ashesOfWar.ts'), 'utf8');
if ((bosses.match(/\bid:\s*'/g) ?? []).length !== 208) fail('Boss total changed.');
if ((ashes.match(/\"id\":/g) ?? []).length !== 116) fail('Ashes of War total changed.');
const indexBase = fs.readFileSync(path.join(root, 'app/(drawer)/index/remembrance-bosses/base-game.tsx'), 'utf8');
const indexDlc = fs.readFileSync(path.join(root, 'app/(drawer)/index/remembrance-bosses/dlc.tsx'), 'utf8');
if (!indexBase.includes('PlaceholderScreen') || !indexDlc.includes('PlaceholderScreen')) fail('Index placeholders must remain empty.');
console.log('Phase 2 data completion validation passed: 213 spells, 208 bosses, 116 Ashes of War.');

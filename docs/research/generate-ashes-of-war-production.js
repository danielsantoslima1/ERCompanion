const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..', '..');
const basePath = path.join(__dirname, 'ashes-of-war-base-game.catalog.json');
const dlcPath = path.join(__dirname, 'ashes-of-war-dlc.catalog.json');
const outputPath = path.join(
  root,
  'src',
  'data',
  'ashes-of-war',
  'ashesOfWar.ts',
);

const base = JSON.parse(fs.readFileSync(basePath, 'utf8'));
const dlc = JSON.parse(fs.readFileSync(dlcPath, 'utf8'));

function convertEntry(entry) {
  const normalizeRequiredValue = (value) => ({
    ptBR: value.ptBR,
    en:
      /pending (?:precise normalization|cross-source verification)/i.test(
        value.en,
      ) || /^\|\s*buy_price\s*=/i.test(value.en)
        ? 'Unknown'
        : value.en,
  });
  return {
    id: entry.id,
    contentPack: entry.contentPack,
    name: entry.name,
    skillName: entry.name,
    primaryLocation: normalizeRequiredValue(entry.primaryLocation),
    primaryAcquisition: normalizeRequiredValue(entry.primaryAcquisition),
    acquisitionMethods: entry.acquisitionMethods.map((method) => ({
      location: normalizeRequiredValue(method.location),
      method: normalizeRequiredValue(method.method),
    })),
    summary: entry.summary,
    skillType: entry.skillType,
    affinity: entry.affinity,
    compatibleEquipment: entry.compatibleEquipment,
    fpCost: entry.fpCost,
    specialEffects: entry.specialEffects,
    limitations: entry.limitations,
    relevantNotes: null,
  };
}

const entries = [...base, ...dlc].map(convertEntry);
const source = `// Generated from the approved research JSON files. Do not edit by hand.\n` +
  `import type { AshOfWar } from './types';\n\n` +
  `export const ashesOfWar = ${JSON.stringify(entries, null, 2)} as const satisfies readonly AshOfWar[];\n`;

fs.writeFileSync(outputPath, source);
console.log(`Generated ${entries.length} production Ashes of War.`);

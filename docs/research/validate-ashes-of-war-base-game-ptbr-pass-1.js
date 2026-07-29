const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const RESEARCH_PATH = path.join(__dirname, 'ashes-of-war-base-game-ptbr-pass-1.json');
const CATALOG_PATH = path.join(ROOT, 'src', 'data', 'ashes-of-war', 'ashesOfWar.ts');
const REPORT_PATH = path.join(ROOT, 'docs', 'ASHES_OF_WAR_BASE_GAME_PTBR_PASS_1.md');
const ALLOWED_STATUS = new Set(['confirmed', 'probable', 'pending', 'disputed']);

function fail(message) {
  throw new Error(message);
}

function loadCatalog() {
  const source = fs.readFileSync(CATALOG_PATH, 'utf8');
  const match = source.match(/export const ashesOfWar\s*=\s*(\[[\s\S]*?\])\s*as const/);
  if (!match) fail('Could not locate production catalog.');
  return JSON.parse(match[1]);
}

function validateField(field, label, expectedEnglish) {
  if (!field || typeof field !== 'object') fail(`${label}: field is missing.`);
  if (field.en !== expectedEnglish) fail(`${label}: English value differs from production.`);
  if (!ALLOWED_STATUS.has(field.status)) fail(`${label}: invalid status ${field.status}.`);
  if (field.ptBRProposed !== null && (typeof field.ptBRProposed !== 'string' || field.ptBRProposed.trim() === '')) {
    fail(`${label}: ptBRProposed must be null or a non-empty string.`);
  }
  if (!Array.isArray(field.sourceRefs) || !Array.isArray(field.evidenceNotes) || !Array.isArray(field.divergences)) {
    fail(`${label}: evidence collections must be arrays.`);
  }
  if (field.status !== 'pending' && field.sourceRefs.length === 0) fail(`${label}: non-pending field has no source.`);
  if (field.status === 'confirmed' && !field.evidenceNotes.some((note) => /diret|arquivo|interface|captura/i.test(note))) {
    fail(`${label}: confirmed field lacks direct-evidence note.`);
  }
  if (field.status === 'confirmed' && field.divergences.length > 0) fail(`${label}: confirmed field has unresolved divergence.`);
  if (field.status === 'pending' && field.ptBRProposed !== null) fail(`${label}: pending field proposes a value.`);
}

const research = JSON.parse(fs.readFileSync(RESEARCH_PATH, 'utf8'));
const catalog = loadCatalog();
const base = catalog
  .filter((ash) => ash.contentPack === 'base-game')
  .sort((a, b) => a.name.en.localeCompare(b.name.en, 'en') || a.id.localeCompare(b.id, 'en'));

if (research.researchVersion !== 1 || research.scope !== 'base-game-ptbr-pass-1') fail('Invalid research metadata.');
if (!Array.isArray(research.entries) || research.entries.length !== 91) fail('Research must contain exactly 91 entries.');
if (base.length !== 91) fail('Production catalog must contain exactly 91 base-game entries.');

const ids = research.entries.map((entry) => entry.id);
if (new Set(ids).size !== ids.length) fail('Research IDs are not unique.');
if (ids.some((id) => id.startsWith('sample-'))) fail('sample-* ID found.');
if (JSON.stringify(ids) !== JSON.stringify(base.map((entry) => entry.id))) fail('Research IDs or ordering differ from production base-game catalog.');

research.entries.forEach((entry, index) => {
  const production = base[index];
  if (entry.contentPack !== 'base-game') fail(`${entry.id}: invalid content pack.`);
  if (entry.id !== production.id || entry.nameEn !== production.name.en) fail(`${entry.id}: identity differs from production.`);
  validateField(entry.fields.name, `${entry.id}.name`, production.name.en);
  validateField(entry.fields.skillName, `${entry.id}.skillName`, production.skillName.en);
  validateField(entry.fields.affinity, `${entry.id}.affinity`, production.affinity.en);
  validateField(entry.fields.skillType, `${entry.id}.skillType`, production.skillType?.en ?? null);
  if (!Array.isArray(entry.fields.compatibleEquipment) ||
      entry.fields.compatibleEquipment.length !== production.compatibleEquipment.en.length) {
    fail(`${entry.id}: compatibleEquipment shape differs from production.`);
  }
  entry.fields.compatibleEquipment.forEach((field, equipmentIndex) => {
    validateField(field, `${entry.id}.compatibleEquipment[${equipmentIndex}]`, production.compatibleEquipment.en[equipmentIndex]);
  });
});

const productionSource = fs.readFileSync(CATALOG_PATH, 'utf8');
if (/https?:\/\//i.test(productionSource)) fail('URL found in production Ashes of War catalog.');

const statuses = ['confirmed', 'probable', 'pending', 'disputed'];
const groups = {
  Nomes: research.entries.map((entry) => entry.fields.name),
  Habilidades: research.entries.map((entry) => entry.fields.skillName),
  Afinidades: research.entries.map((entry) => entry.fields.affinity),
  Tipos: research.entries.map((entry) => entry.fields.skillType),
  'Equipamentos compatíveis (itens)': research.entries.flatMap((entry) => entry.fields.compatibleEquipment),
};
const report = fs.readFileSync(REPORT_PATH, 'utf8');
for (const [label, fields] of Object.entries(groups)) {
  const counts = Object.fromEntries(statuses.map((status) => [status, fields.filter((field) => field.status === status).length]));
  const expectedRow = `| ${label} | ${counts.confirmed} | ${counts.probable} | ${counts.pending} | ${counts.disputed} |`;
  if (!report.includes(expectedRow)) fail(`Report total mismatch for ${label}.`);
}

if (!/nenhuma tradução livre foi apresentada como oficial/i.test(report)) {
  fail('Report does not explicitly document the free-translation prohibition.');
}

console.log(JSON.stringify({
  valid: true,
  entries: research.entries.length,
  idsMatchProduction: true,
  ordering: 'English name, ID tie-breaker',
  totals: Object.fromEntries(Object.entries(groups).map(([label, fields]) => [
    label,
    Object.fromEntries(statuses.map((status) => [status, fields.filter((field) => field.status === status).length])),
  ])),
}, null, 2));

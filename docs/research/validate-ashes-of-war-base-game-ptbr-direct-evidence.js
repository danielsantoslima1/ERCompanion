const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const JSON_PATH = path.join(__dirname, 'ashes-of-war-base-game-ptbr-direct-evidence.json');
const REPORT_PATH = path.join(ROOT, 'docs', 'ASHES_OF_WAR_BASE_GAME_PTBR_DIRECT_EVIDENCE.md');
const CATALOG_PATH = path.join(ROOT, 'src', 'data', 'ashes-of-war', 'ashesOfWar.ts');
const ALLOWED = new Set(['confirmed', 'probable', 'pending', 'disputed']);
const SHA256 = /^[A-Fa-f0-9]{64}$/;
const ABSOLUTE_PATH = /(?:[A-Za-z]:\\|[A-Za-z]:\/|\\\\Users\\|\/home\/|\/Users\/)/;

function fail(message) {
  throw new Error(message);
}

function loadCatalog() {
  const source = fs.readFileSync(CATALOG_PATH, 'utf8');
  const match = source.match(/export const ashesOfWar\s*=\s*(\[[\s\S]*?\])\s*as const/);
  if (!match) fail('Production catalog literal not found.');
  return JSON.parse(match[1]);
}

function validateField(field, expectedEnglish, label) {
  if (!field || field.en !== expectedEnglish) fail(`${label}: English value differs from production.`);
  if (!ALLOWED.has(field.status)) fail(`${label}: invalid status.`);
  if (field.ptBRProposed !== null && (typeof field.ptBRProposed !== 'string' || !field.ptBRProposed.trim())) {
    fail(`${label}: ptBRProposed must be null or non-empty.`);
  }
  if (field.status === 'confirmed') {
    if (!field.ptBRProposed) fail(`${label}: confirmed without pt-BR text.`);
    if (!field.evidenceFileRefs.length) fail(`${label}: confirmed without evidence file.`);
    if (field.recordId === null && field.messageKey === null &&
        !field.evidenceNotes.some((note) => /associa|registro|técnic/i.test(note))) {
      fail(`${label}: confirmed without record identifier or equivalent justification.`);
    }
  }
  if (field.status === 'disputed' && field.divergences.length === 0) fail(`${label}: disputed without divergence.`);
  if (field.status === 'pending' && field.ptBRProposed !== null) fail(`${label}: pending field has proposed value.`);
  for (const value of [field.recordId, field.messageKey]) {
    if (value !== null && typeof value !== 'string' && typeof value !== 'number') fail(`${label}: invalid internal identifier.`);
  }
}

const raw = fs.readFileSync(JSON_PATH, 'utf8');
if (ABSOLUTE_PATH.test(raw)) fail('Absolute local path found in structured research.');
const research = JSON.parse(raw);
const base = loadCatalog()
  .filter((entry) => entry.contentPack === 'base-game')
  .sort((a, b) => a.name.en.localeCompare(b.name.en, 'en') || a.id.localeCompare(b.id, 'en'));

if (research.scope !== 'base-game-ptbr-direct-evidence' || research.researchVersion !== 1) fail('Invalid research metadata.');
if (research.platform !== 'Steam Windows' || research.appId !== '1245620') fail('Invalid platform metadata.');
if (!research.buildId) fail('Build ID is missing.');
if (!Array.isArray(research.entries) || research.entries.length !== 91) fail('Expected exactly 91 entries.');
if (new Set(research.entries.map((entry) => entry.id)).size !== 91) fail('IDs are not unique.');
if (base.length !== 91) fail('Production base-game count differs from 91.');

for (const file of research.evidenceFiles) {
  if (!SHA256.test(file.sha256)) fail(`${file.id}: invalid SHA-256.`);
  if (ABSOLUTE_PATH.test(file.internalPath)) fail(`${file.id}: absolute path found.`);
}

research.entries.forEach((entry, index) => {
  const production = base[index];
  if (entry.id !== production.id || entry.nameEn !== production.name.en) fail(`${entry.id}: identity/order mismatch.`);
  if (entry.contentPack !== 'base-game') fail(`${entry.id}: expansion entry or invalid content pack.`);
  validateField(entry.fields.name, production.name.en, `${entry.id}.name`);
  validateField(entry.fields.skillName, production.skillName.en, `${entry.id}.skillName`);
  validateField(entry.fields.affinity, production.affinity.en, `${entry.id}.affinity`);
  validateField(entry.fields.skillType, production.skillType?.en ?? null, `${entry.id}.skillType`);
  if (entry.fields.compatibleEquipment.length !== production.compatibleEquipment.en.length) {
    fail(`${entry.id}: compatibility shape mismatch.`);
  }
  entry.fields.compatibleEquipment.forEach((field, itemIndex) =>
    validateField(field, production.compatibleEquipment.en[itemIndex], `${entry.id}.compatibleEquipment[${itemIndex}]`));
});

const groups = {
  Nomes: research.entries.map((entry) => entry.fields.name),
  Habilidades: research.entries.map((entry) => entry.fields.skillName),
  Afinidades: research.entries.map((entry) => entry.fields.affinity),
  Tipos: research.entries.map((entry) => entry.fields.skillType),
  'Equipamentos compatíveis (itens)': research.entries.flatMap((entry) => entry.fields.compatibleEquipment),
};
const report = fs.readFileSync(REPORT_PATH, 'utf8');
if (ABSOLUTE_PATH.test(report)) fail('Absolute local path found in report.');
for (const [label, fields] of Object.entries(groups)) {
  const counts = ['confirmed', 'probable', 'pending', 'disputed'].map(
    (status) => fields.filter((field) => field.status === status).length);
  if (!report.includes(`| ${label} | ${counts.join(' | ')} |`)) fail(`${label}: report totals differ.`);
}

const forbiddenExtensions = /\.(bdt|bhd|dcx|fmg|msgbnd|bin)$/i;
const repositoryFiles = [];
function walk(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    if (item.name === '.git' || item.name === 'node_modules') continue;
    const full = path.join(directory, item.name);
    if (item.isDirectory()) walk(full);
    else repositoryFiles.push(path.relative(ROOT, full));
  }
}
walk(ROOT);
const proprietary = repositoryFiles.filter((file) => forbiddenExtensions.test(file));
if (proprietary.length) fail(`Proprietary game files found in repository: ${proprietary.join(', ')}`);

console.log(JSON.stringify({
  valid: true,
  entries: research.entries.length,
  idsMatchProduction: true,
  buildId: research.buildId,
  suitableReaderFound: research.toolAssessment.suitableReaderFound,
  proprietaryFilesInRepository: 0,
  totals: Object.fromEntries(Object.entries(groups).map(([label, fields]) => [
    label,
    Object.fromEntries(['confirmed', 'probable', 'pending', 'disputed'].map(
      (status) => [status, fields.filter((field) => field.status === status).length])),
  ])),
}, null, 2));

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..', '..');
const basePath = path.join(__dirname, 'ashes-of-war-base-game.catalog.json');
const dlcPath = path.join(__dirname, 'ashes-of-war-dlc.catalog.json');
const baseProposalPath = path.join(root, 'docs', 'ASHES_OF_WAR_BASE_GAME_CATALOG_PROPOSAL.md');
const dlcProposalPath = path.join(root, 'docs', 'ASHES_OF_WAR_DLC_CATALOG_PROPOSAL.md');
const fullReviewPath = path.join(root, 'docs', 'ASHES_OF_WAR_FULL_CATALOG_REVIEW.md');

const base = JSON.parse(fs.readFileSync(basePath, 'utf8'));
const dlc = JSON.parse(fs.readFileSync(dlcPath, 'utf8'));
const baseProposal = fs.readFileSync(baseProposalPath, 'utf8');
const dlcProposal = fs.readFileSync(dlcProposalPath, 'utf8');
const fullReview = fs.readFileSync(fullReviewPath, 'utf8');
const statuses = new Set(['verified', 'partial', 'disputed']);
const fixedOnly = new Set(['spinning-chain', 'torch-attack', 'firebreather', 'buckler-parry']);
const expectedDlcIds = new Set([
  'savage-lions-claw', 'spinning-gravity-thrust', 'blind-spot', 'swift-slash',
  'overhead-stance', 'savage-claws', 'raging-beast', 'piercing-throw',
  'scattershot-throw', 'wing-stance', 'carian-sovereignty', 'flame-skewer',
  'flame-spear', 'blinkbolt', 'aspects-of-the-crucible-wings',
  'the-poison-flower-blooms-twice', 'ghostflame-call',
  'divine-beast-frost-stomp', 'shriek-of-sorrow', 'palm-blast',
  'dryleaf-whirlwind', 'wall-of-sparks', 'rolling-sparks',
  'igons-drake-hunt', 'shield-strike',
]);
const productionFiles = [
  path.join(root, 'src', 'data', 'catalog', 'regions.ts'),
  path.join(root, 'src', 'data', 'catalog', 'bossEncounters.ts'),
];
const productionIds = new Set(productionFiles.flatMap((file) =>
  [...fs.readFileSync(file, 'utf8').matchAll(/\bid:\s*['"]([^'"]+)['"]/g)]
    .map((match) => match[1]),
));
const errors = [];

function validateCatalog(entries, expectedPack, label) {
  const ids = new Set();
  for (const [index, entry] of entries.entries()) {
    const at = `${label} entry ${index + 1} (${entry?.id ?? 'missing id'})`;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id)) errors.push(`${at}: invalid kebab-case id`);
    if (ids.has(entry.id)) errors.push(`${at}: duplicate id in file`);
    ids.add(entry.id);
    if (entry.contentPack !== expectedPack) errors.push(`${at}: wrong contentPack`);
    if (entry.id.startsWith('sample-')) errors.push(`${at}: sample id`);
    if (fixedOnly.has(entry.id)) errors.push(`${at}: fixed-only skill`);
    if (/lost ashes of war/i.test(entry.name?.en ?? '')) errors.push(`${at}: Lost Ashes of War`);
    if (!entry.name?.en) errors.push(`${at}: missing English name`);
    if (!entry.sourceRefs?.length) errors.push(`${at}: no source`);
    if (!entry.acquisitionMethods?.length) errors.push(`${at}: no acquisition`);
    if (!entry.affinity?.en) errors.push(`${at}: no affinity`);
    if (!entry.compatibleEquipment?.en?.length) errors.push(`${at}: no compatibility`);
    if (!(entry.fpCost === null || typeof entry.fpCost === 'number')) errors.push(`${at}: invalid FP`);
    if (!statuses.has(entry.verificationStatus)) errors.push(`${at}: invalid status`);
    if (/https?:\/\//i.test(JSON.stringify(entry))) errors.push(`${at}: URL in proposed object`);
    if (productionIds.has(entry.id)) errors.push(`${at}: collides with boss or region id`);
    const localized = [
      entry.name, entry.primaryLocation, entry.primaryAcquisition, entry.summary,
      entry.skillType, entry.affinity, entry.specialEffects, entry.limitations,
      entry.relevantNotes,
      ...entry.acquisitionMethods.flatMap((method) =>
        [method.location, method.method, method.notes]),
    ].filter(Boolean);
    for (const value of localized) {
      if (!Object.hasOwn(value, 'ptBR')) errors.push(`${at}: localized field lacks explicit ptBR`);
      if (value.ptBR === undefined) errors.push(`${at}: absent ptBR must be null`);
    }
  }
  return ids;
}

const baseIds = validateCatalog(base, 'base-game', 'base');
const dlcIds = validateCatalog(dlc, 'shadow-of-the-erdtree', 'dlc');
for (const id of baseIds) if (dlcIds.has(id)) errors.push(`combined duplicate id: ${id}`);
for (const entry of base) if (expectedDlcIds.has(entry.id)) errors.push(`DLC entry in base JSON: ${entry.id}`);
for (const entry of dlc) if (!expectedDlcIds.has(entry.id)) errors.push(`base/unknown entry in DLC JSON: ${entry.id}`);

const baseDocumented = Number(baseProposal.match(/Total proposto: \*\*(\d+)/)?.[1]);
const dlcDocumented = Number(dlcProposal.match(/Total proposto: \*\*(\d+)/)?.[1]);
const combinedDocumented = Number(fullReview.match(/Total combinado: \*\*(\d+)/)?.[1]);
if (baseDocumented !== base.length) errors.push(`base document total ${baseDocumented} != JSON ${base.length}`);
if (dlcDocumented !== dlc.length) errors.push(`DLC document total ${dlcDocumented} != JSON ${dlc.length}`);
if (combinedDocumented !== base.length + dlc.length) errors.push(`combined document total ${combinedDocumented} != ${base.length + dlc.length}`);
if (base.length !== 91) errors.push(`expected 91 base entries, received ${base.length}`);
if (dlc.length !== 25) errors.push(`expected 25 DLC entries, received ${dlc.length}`);

const all = [...base, ...dlc];
const counts = all.reduce((result, entry) => {
  result[entry.verificationStatus] += 1;
  return result;
}, { verified: 0, partial: 0, disputed: 0 });

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  validJson: { baseGame: true, shadowOfTheErdtree: true },
  totals: { baseGame: base.length, shadowOfTheErdtree: dlc.length, combined: all.length },
  uniqueIds: { baseGame: baseIds.size, shadowOfTheErdtree: dlcIds.size, combined: new Set([...baseIds, ...dlcIds]).size },
  statuses: counts,
  productionIdCollisions: 0,
  urlsInCatalogObjects: false,
  checksPassed: 25,
}, null, 2));

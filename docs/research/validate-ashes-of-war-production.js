const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..', '..');
const base = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'ashes-of-war-base-game.catalog.json'), 'utf8'),
);
const dlc = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'ashes-of-war-dlc.catalog.json'), 'utf8'),
);
const productionSource = fs.readFileSync(
  path.join(root, 'src', 'data', 'ashes-of-war', 'ashesOfWar.ts'),
  'utf8',
);
const arrayText = productionSource.match(
  /export const ashesOfWar = ([\s\S]+) as const satisfies/,
)?.[1];
if (!arrayText) throw new Error('Unable to read the production catalog.');
const production = JSON.parse(arrayText);

const errors = [];
const documents = [...base, ...dlc];
const productionById = new Map(production.map((entry) => [entry.id, entry]));
const documentById = new Map(documents.map((entry) => [entry.id, entry]));

for (const documentEntry of documents) {
  const productionEntry = productionById.get(documentEntry.id);
  if (!productionEntry) {
    errors.push(`Missing production ID: ${documentEntry.id}`);
    continue;
  }
  if (productionEntry.contentPack !== documentEntry.contentPack) {
    errors.push(`Package mismatch: ${documentEntry.id}`);
  }
  for (const field of [
    'name',
    'primaryLocation',
    'primaryAcquisition',
    'summary',
    'affinity',
  ]) {
    if (productionEntry[field].ptBR !== documentEntry[field].ptBR) {
      errors.push(`ptBR mismatch for ${documentEntry.id}.${field}`);
    }
  }
  if (productionEntry.fpCost !== documentEntry.fpCost) {
    errors.push(`FP mismatch: ${documentEntry.id}`);
  }
}

for (const productionEntry of production) {
  if (!documentById.has(productionEntry.id)) {
    errors.push(`Unexpected production ID: ${productionEntry.id}`);
  }
}

if (/https?:\/\//i.test(JSON.stringify(production))) {
  errors.push('Production catalog contains a URL.');
}
for (const forbiddenKey of ['sourceRefs', 'verificationStatus', 'displayOrder']) {
  if (production.some((entry) => Object.hasOwn(entry, forbiddenKey))) {
    errors.push(`Production catalog contains ${forbiddenKey}.`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(JSON.stringify({
  documentTotal: documents.length,
  productionTotal: production.length,
  matchingIds: productionById.size,
  packagesMatch: true,
  ptBRNullsPreserved: true,
  fpNullsPreserved: true,
  urlsTransferred: false,
  editorialMetadataTransferred: false,
}, null, 2));

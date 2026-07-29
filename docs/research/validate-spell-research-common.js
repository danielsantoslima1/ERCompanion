const fs = require('fs');

const ALLOWED_STATUS = new Set(['confirmed', 'probable', 'pending', 'disputed']);
const FORBIDDEN_KEYS = new Set([
  'school', 'schools', 'family', 'families', 'tradition', 'traditions',
  'magicType', 'magicTypes', 'affinity', 'affinities',
  'staff', 'staffs', 'seal', 'seals', 'catalyst', 'catalysts',
  'compatibleCatalysts', 'recommendedCatalysts', 'boostingCatalysts',
]);
const ABSOLUTE_PATH = /(?:[A-Za-z]:\\\\|[A-Za-z]:\/|\/home\/|\/Users\/)/;
const HTML = /<[a-z][^>]*>/i;
const URL = /https?:\/\//i;
const PROPRIETARY_FILE = /\.(?:bhd|bdt|fmg|bnd|dcx)\b|regulation\.bin/i;

function fail(message) {
  throw new Error(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function statusValues(value) {
  return Object.entries(value)
    .filter(([key]) => key === 'status' || key.endsWith('Status'))
    .map(([, status]) => status);
}

function walk(value, knownSources, path = 'root') {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, knownSources, `${path}[${index}]`));
    return;
  }
  if (!value || typeof value !== 'object') return;

  for (const key of Object.keys(value)) {
    assert(!FORBIDDEN_KEYS.has(key), `${path}.${key}: prohibited classification or catalyst field`);
  }

  const statuses = statusValues(value);
  for (const status of statuses) {
    assert(ALLOWED_STATUS.has(status), `${path}: invalid status ${status}`);
  }
  if (statuses.some((status) => status === 'confirmed' || status === 'probable')) {
    assert(Array.isArray(value.sourceRefs) && value.sourceRefs.length > 0,
      `${path}: confirmed/probable field requires sourceRefs`);
  }
  if (value.status === 'disputed') {
    assert(Array.isArray(value.notes) && value.notes.length > 0,
      `${path}: disputed field requires documented notes`);
  }
  if (Array.isArray(value.sourceRefs)) {
    for (const ref of value.sourceRefs) {
      assert(knownSources.has(ref), `${path}: undefined source reference ${ref}`);
    }
  }
  for (const [key, child] of Object.entries(value)) {
    if (key === 'ptBR') {
      assert(child === null, `${path}.ptBR: pt-BR was populated without authorized evidence`);
    }
    walk(child, knownSources, `${path}.${key}`);
  }
}

function validateNumeric(field, label, { unit = null } = {}) {
  assert(field && typeof field === 'object', `${label}: numeric field is missing`);
  assert(field.value === null || (typeof field.value === 'number' && field.value >= 0),
    `${label}: value must be null or non-negative`);
  if (unit !== null) assert(field.unit === unit, `${label}: expected unit ${unit}`);
  if (field.value !== null) {
    assert(field.status !== 'pending', `${label}: populated value cannot be pending`);
    assert(field.sourceRefs.length > 0, `${label}: populated value requires a source`);
  }
}

function validateLocalized(field, label) {
  assert(field && typeof field === 'object', `${label}: localized field is missing`);
  for (const locale of ['en', 'ptBR']) {
    assert(field[locale] === null || (typeof field[locale] === 'string' && field[locale].trim() !== ''),
      `${label}.${locale}: use null instead of an empty string`);
  }
  assert(field.ptBR === null && field.ptBRStatus === 'pending',
    `${label}: pt-BR was approved without authorized evidence`);
}

function validateSpellResearch({ file, category, total, baseTotal, dlcTotal, legendaryTotal }) {
  const raw = fs.readFileSync(file, 'utf8');
  const data = JSON.parse(raw);
  const entries = data.entries;
  const knownSources = new Set(data.sources);

  assert(!ABSOLUTE_PATH.test(raw), 'absolute local path found');
  assert(!HTML.test(raw), 'HTML found');
  assert(!PROPRIETARY_FILE.test(raw), 'proprietary game-file reference found');
  assert(data.researchVersion === 2, 'unexpected researchVersion');
  assert(data.reviewedAgainstVersion === '1.16.1', 'review version must be 1.16.1');
  assert(data.category === category, 'wrong catalog category');
  assert(entries.length === total, `expected ${total} entries`);
  assert(entries.filter((entry) => entry.contentPack === 'base-game').length === baseTotal,
    `expected ${baseTotal} base-game entries`);
  assert(entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree').length === dlcTotal,
    `expected ${dlcTotal} DLC entries`);
  assert(new Set(entries.map((entry) => entry.id)).size === total, 'duplicate IDs');
  assert(new Set(entries.map((entry) => entry.name.en.toLowerCase())).size === total,
    'duplicate normalized English names or unresolved aliases');
  assert(entries.every((entry) => !entry.id.startsWith('sample-')), 'demo ID found');
  assert(entries.every((entry) => entry.category === category), 'entry in wrong category');
  assert(entries.every((entry) => ['base-game', 'shadow-of-the-erdtree'].includes(entry.contentPack)),
    'invalid content pack');

  walk(data, knownSources);

  for (const entry of entries) {
    validateLocalized(entry.name, `${entry.id}.name`);
    assert(entry.name.en && entry.name.enStatus === 'confirmed',
      `${entry.id}: English identity must be confirmed`);
    for (const fieldName of [
      'primaryLocation', 'primarySource', 'cardSummary', 'enemyDrop', 'summary',
      'primaryEffect', 'limitations', 'technicalNotes', 'applicationRestrictions',
      'rangeDescription', 'areaShape', 'effectInteractions', 'pvpDifferences',
    ]) {
      validateLocalized(entry[fieldName], `${entry.id}.${fieldName}`);
    }
    validateNumeric(entry.priceRunes, `${entry.id}.priceRunes`, { unit: 'runes' });
    validateNumeric(entry.baseDropRatePercent, `${entry.id}.baseDropRatePercent`, { unit: 'percent' });
    validateNumeric(entry.fpCost, `${entry.id}.fpCost`);
    validateNumeric(entry.memorySlots, `${entry.id}.memorySlots`);
    validateNumeric(entry.staminaCost, `${entry.id}.staminaCost`);
    validateNumeric(entry.durationSeconds, `${entry.id}.durationSeconds`);
    for (const attribute of ['intelligence', 'faith', 'arcane']) {
      validateNumeric(entry.requirements[attribute], `${entry.id}.requirements.${attribute}`);
    }
    assert(entry.missable.value !== true || (
      entry.missable.explanation.en
      && entry.missable.status !== 'pending'
      && entry.missable.sourceRefs.length > 0
    ), `${entry.id}: missable=true requires explanation, status and sources`);
    assert(entry.baseDropRatePercent.value === null || entry.enemyDrop.en,
      `${entry.id}: drop rate requires an enemy`);
    assert(entry.damageTypes.value === null || entry.damageTypes.value.every((type) =>
      ['physical', 'magic', 'fire', 'lightning', 'holy'].includes(type)),
    `${entry.id}: invalid damage type`);
    assert(!('damageValue' in entry) && !('damage' in entry),
      `${entry.id}: numeric damage fields are prohibited`);
    assert(entry.documentedVersion.value === '1.16.1',
      `${entry.id}: missing current documented version`);
  }

  const expectedOrder = [...entries].sort((a, b) =>
    (a.contentPack === b.contentPack ? 0 : a.contentPack === 'base-game' ? -1 : 1)
    || a.name.en.localeCompare(b.name.en, 'en')
    || a.id.localeCompare(b.id, 'en'));
  assert(JSON.stringify(expectedOrder.map((entry) => entry.id)) === JSON.stringify(entries.map((entry) => entry.id)),
    'entries are not ordered by origin, English name and ID');
  assert(entries.filter((entry) => entry.legendary.value).length === legendaryTotal,
    `expected exactly ${legendaryTotal} legendary entries`);
  assert(!entries.some((entry) => URL.test(JSON.stringify({
    ...entry,
    sourceRefs: undefined,
  }))), 'URL found in a production-shaped entry');
  assert(raw.length < entries.length * 16000, 'unexpectedly large copied text');

  return {
    valid: true,
    category,
    totals: { baseGame: baseTotal, shadowOfTheErdtree: dlcTotal, total },
    legendary: legendaryTotal,
    probableMissable: entries.filter((entry) => entry.missable.value === true).length,
    pendingMissable: entries.filter((entry) => entry.missable.value === null).length,
    prohibitedClassificationFields: false,
    catalystFields: false,
  };
}

module.exports = { validateSpellResearch };

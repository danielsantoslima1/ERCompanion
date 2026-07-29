const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const catalogs = [
  require('./sorceries-catalog-research.json'),
  require('./incantations-catalog-research.json'),
];
const entries = catalogs.flatMap((catalog) => catalog.entries);
const knownSources = new Set(catalogs.flatMap((catalog) => catalog.sources));
const allowedTags = new Set([
  'permanent',
  'once-per-playthrough',
  'quest',
  'exclusive-choice',
  'new-game-plus',
]);
const sourceFamilies = new Map([
  ['eldenpedia-spell-pages', 'eldenpedia'],
  ['eldenpedia-category-inventory', 'eldenpedia'],
  ['fandom-dlc-sorceries', 'fandom'],
  ['fandom-dlc-incantations', 'fandom'],
  ['powerpyx-all-sorcery-locations', 'powerpyx'],
  ['powerpyx-all-incantation-locations', 'powerpyx'],
  ['game8-current-sorcery-locations', 'game8'],
  ['game8-current-incantation-locations', 'game8'],
  ['gamer-guides-dlc-sorceries', 'gamer-guides'],
  ['gamer-guides-dlc-incantations', 'gamer-guides'],
  ['gamespot-dlc-spell-locations', 'gamespot'],
]);
const prohibited = /"(?:schools?|famil(?:y|ies)|staffs?|seals?|catalysts?|compatibleCatalysts|recommendedCatalysts|boostingCatalysts)"\s*:/i;
const absolutePath = /(?:[A-Za-z]:\\|\/Users\/|\/home\/)/;
const html = /<[a-z][^>]*>/i;
const proprietary = /\.(?:bhd|bdt|fmg|bnd|dcx)\b|regulation\.bin/i;
const url = /https?:\/\//i;

function fail(id, field, problem, rule) {
  throw new Error(`${id} | ${field} | ${problem} | regra: ${rule}`);
}

function independentFamilies(refs) {
  return new Set(refs.map((ref) => sourceFamilies.get(ref) ?? ref));
}

function validateFieldEvidence(entry, field, label) {
  if (field.enStatus === 'confirmed' && independentFamilies(field.sourceRefs).size < 2) {
    fail(entry.id, label, 'confirmed sem duas fontes editorialmente independentes',
      'confirmação exige duas fontes independentes');
  }
  if (field.ptBR !== null || field.ptBRStatus !== 'pending') {
    fail(entry.id, label, 'pt-BR foi preenchido ou aprovado',
      'pt-BR permanece null/pending');
  }
  for (const ref of field.sourceRefs) {
    if (!knownSources.has(ref)) {
      fail(entry.id, label, `referência inexistente: ${ref}`, 'toda referência deve estar definida');
    }
  }
}

for (const catalog of catalogs) {
  const raw = fs.readFileSync(
    path.join(__dirname, `${catalog.category === 'sorcery' ? 'sorceries' : 'incantations'}-catalog-research.json`),
    'utf8',
  );
  if (absolutePath.test(raw)) fail(catalog.category, 'arquivo', 'caminho absoluto', 'sem caminhos locais');
  if (html.test(raw)) fail(catalog.category, 'arquivo', 'HTML encontrado', 'sem HTML');
  if (proprietary.test(raw)) fail(catalog.category, 'arquivo', 'arquivo proprietário citado', 'sem arquivos do jogo');
  if (prohibited.test(raw)) fail(catalog.category, 'arquivo', 'campo proibido encontrado', 'sem classificação/catalisador');
}

if (entries.length !== 213) fail('combined', 'entries', `total ${entries.length}`, 'total deve ser 213');
if (catalogs[0].entries.length !== 84 || catalogs[1].entries.length !== 129) {
  fail('combined', 'entries', 'totais por categoria alterados', '84 Feitiços e 129 Encantamentos');
}
if (new Set(entries.map((entry) => entry.id)).size !== 213) {
  fail('combined', 'id', 'IDs duplicados', 'IDs únicos');
}
if (new Set(entries.map((entry) => entry.name.en.toLowerCase())).size !== 213) {
  fail('combined', 'name.en', 'nomes/aliases duplicados', 'nomes ingleses únicos');
}

for (const entry of entries) {
  validateFieldEvidence(entry, entry.primaryLocation, 'primaryLocation');
  validateFieldEvidence(entry, entry.primarySource, 'primarySource');
  if (!entry.primaryLocation.en && entry.primaryLocation.enStatus !== 'pending') {
    fail(entry.id, 'primaryLocation', 'local ausente sem status pending',
      'local deve existir ou permanecer pending');
  }
  if (!Array.isArray(entry.acquisitionMethods) || entry.acquisitionMethods.length === 0) {
    fail(entry.id, 'acquisitionMethods', 'nenhuma alternativa', 'ao menos uma alternativa em array');
  }
  if (!entry.primaryAcquisition || entry.primaryAcquisition.methodIndex !== 0) {
    fail(entry.id, 'primaryAcquisition', 'fonte principal não aponta para a primeira alternativa',
      'alternativa principal deve ser a primeira');
  }

  const primary = entry.acquisitionMethods[0];
  const sourceMatches = entry.primarySource.en === primary.source.en
    || entry.primarySource.en?.includes(primary.source.en ?? '')
    || primary.source.en?.includes(entry.primarySource.en ?? '');
  if (entry.primarySource.en && !sourceMatches) {
    fail(entry.id, 'primarySource', 'não corresponde à primeira alternativa',
      'fonte principal coerente com alternativa principal');
  }

  entry.acquisitionMethods.forEach((method, methodIndex) => {
    if (method.order !== methodIndex + 1) {
      fail(entry.id, `acquisitionMethods[${methodIndex}].order`, 'ordem incorreta',
        'alternativas sequenciais a partir de 1');
    }
    validateFieldEvidence(entry, method.location, `acquisitionMethods[${methodIndex}].location`);
    validateFieldEvidence(entry, method.nearestSiteOfGrace,
      `acquisitionMethods[${methodIndex}].nearestSiteOfGrace`);
    if (!Array.isArray(method.steps.values) || method.steps.values.length === 0) {
      fail(entry.id, `acquisitionMethods[${methodIndex}].steps`, 'passos ausentes',
        'passos devem existir em array');
    }
    method.steps.values.forEach((step, stepIndex) => {
      if (step.order !== stepIndex + 1) {
        fail(entry.id, `acquisitionMethods[${methodIndex}].steps[${stepIndex}]`,
          'numeração incorreta', 'passos numerados em ordem');
      }
      if (!step.text.en?.trim()) {
        fail(entry.id, `acquisitionMethods[${methodIndex}].steps[${stepIndex}]`,
          'etapa vazia', 'nenhuma etapa vazia');
      }
    });
    const tags = method.availabilityTags.values ?? [];
    if (new Set(tags).size !== tags.length) {
      fail(entry.id, `acquisitionMethods[${methodIndex}].availabilityTags`,
        'etiquetas duplicadas', 'múltiplas etiquetas sem duplicação');
    }
    for (const tag of tags) {
      if (!allowedTags.has(tag)) {
        fail(entry.id, `acquisitionMethods[${methodIndex}].availabilityTags`,
          `etiqueta inválida: ${tag}`, 'usar somente etiquetas aprovadas');
      }
    }
    if (method.containsQuestSpoilers.value && !method.spoilerSafeCardText.en) {
      fail(entry.id, `acquisitionMethods[${methodIndex}].spoilerSafeCardText`,
        'spoiler sem texto seguro', 'card neutro obrigatório para spoiler');
    }
    if (method.nearestSiteOfGrace.en && !method.location.en && !method.shortCardLocation.en) {
      fail(entry.id, `acquisitionMethods[${methodIndex}].nearestSiteOfGrace`,
        'Local de Graça sem referência de local', 'graça deve acompanhar referência curta');
    }
    const aliases = method.searchAliases.values ?? [];
    if (new Set(aliases.map((alias) => JSON.stringify(alias))).size !== aliases.length) {
      fail(entry.id, `acquisitionMethods[${methodIndex}].searchAliases`,
        'aliases duplicados', 'aliases sem duplicação');
    }
    if (method.status === 'confirmed' && independentFamilies(method.sourceRefs).size < 2) {
      fail(entry.id, `acquisitionMethods[${methodIndex}]`,
        'obtenção confirmed sem duas fontes independentes',
        'confirmação exige duas fontes independentes');
    }
    if (url.test(JSON.stringify({
      ...method,
      sourceRefs: undefined,
    }))) {
      fail(entry.id, `acquisitionMethods[${methodIndex}]`,
        'URL em campo de interface', 'URLs somente na documentação de fontes');
    }
  });
}

const allRaw = catalogs.map((catalog) => JSON.stringify(catalog)).join('\n');
if (allRaw.length > 213 * 22000) {
  fail('combined', 'arquivo', 'volume textual excessivo', 'sem textos extensos copiados');
}

console.log(JSON.stringify({
  valid: true,
  totals: {
    sorceries: 84,
    incantations: 129,
    combined: 213,
  },
  productionTotalsUnchanged: true,
  neutralSpoilerMatchTextPlanned: true,
}, null, 2));

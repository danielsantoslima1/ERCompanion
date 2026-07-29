const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');

function localized(value) {
  const en = typeof value?.en === 'string' && value.en.trim() ? value.en.trim() : null;
  return { ptBR: null, en };
}

function values(collection) {
  return Array.isArray(collection?.values)
    ? collection.values.filter((value) => typeof value === 'string' && value.trim())
    : [];
}

function acquisition(method) {
  const protectedTerms = [
    method.source?.en,
    method.npc?.en,
    method.enemy?.en,
    method.boss?.en,
    method.requiredItem?.en,
    method.requirements?.en,
  ].filter((value) => typeof value === 'string' && value.trim());
  return {
    method: localized(method.method),
    location: localized(method.location),
    source: localized(method.source),
    npc: localized(method.npc),
    requiredItem: localized(method.requiredItem),
    availabilityTags: Array.isArray(method.availabilityTags?.values)
      ? method.availabilityTags.values
      : [],
    containsQuestSpoilers: method.containsQuestSpoilers?.value === true,
    spoilerSafeText: localized(method.spoilerSafeCardText),
    protectedSearchTerms: protectedTerms,
    referenceIds: Array.isArray(method.sourceRefs) ? method.sourceRefs : [],
  };
}

function entry(item) {
  return {
    id: item.id,
    category: item.category,
    contentPack: item.contentPack,
    name: localized(item.name),
    primaryLocation: localized(item.primaryLocation),
    primarySource: localized(item.primarySource),
    acquisitionMethods: item.acquisitionMethods.map(acquisition),
    legendary: item.legendary.value === true,
    missable: null,
    containsQuestSpoilers: item.acquisitionMethods.some(
      (method) => method.containsQuestSpoilers?.value === true,
    ),
    spoilerSafeCardText: localized(item.cardSummary),
    searchAliases: values(item.locationAliases),
    referenceIds: Array.isArray(item.sourceRefs) ? item.sourceRefs : [],
  };
}

function writeCatalog(sourceName, exportName, typeName, outputName) {
  const source = JSON.parse(
    fs.readFileSync(path.join(root, 'docs', 'research', sourceName), 'utf8'),
  );
  const entries = source.entries.map(entry);
  const contents = `import type { ${typeName} } from './types';\n\n`
    + `export const ${exportName} = ${JSON.stringify(entries, null, 2)} as const satisfies readonly ${typeName}[];\n`;
  fs.writeFileSync(
    path.join(root, 'src', 'data', 'spells', outputName),
    contents,
    'utf8',
  );
}

fs.mkdirSync(path.join(root, 'src', 'data', 'spells'), { recursive: true });
writeCatalog(
  'sorceries-catalog-research.json',
  'sorceries',
  'Sorcery',
  'sorceries.ts',
);
writeCatalog(
  'incantations-catalog-research.json',
  'incantations',
  'Incantation',
  'incantations.ts',
);
console.log('Generated production catalogs: 84 sorceries and 129 incantations.');

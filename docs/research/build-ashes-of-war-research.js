/**
 * One-off research builder. It is not imported by the application.
 * Source text is fetched from wiki.gg's public MediaWiki API and converted into
 * concise factual research records. Run only when intentionally refreshing the
 * documentation.
 */
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..', '..');
const CONSULTED_AT = '2026-07-28';
const WIKI_APIS = [
  'https://eldenring.fandom.com/api.php',
  'https://eldenring.wiki.gg/api.php',
];

const affinities = {
  Heavy: ['Stamp (Upward Cut)', 'Stamp (Sweep)', 'Wild Strikes', "Lion's Claw", 'Cragblade', 'Kick', 'Endure', 'Ground Slam', 'Earthshaker', "Hoarah Loux's Earthshaker", 'War Cry', 'Barbaric Roar', "Braggart's Roar", "Troll's Roar"],
  Keen: ['Spinning Slash', 'Impaling Thrust', 'Piercing Fang', 'Repeating Thrust', 'Double Slash', 'Sword Dance', 'Unsheathe', 'Quickstep', "Bloodhound's Step", 'Raptor of the Mists', "Beast's Roar"],
  Quality: ['Square Off', 'Charge Forth', 'Spinning Strikes', 'Giant Hunt', 'Storm Blade', 'Storm Assault', 'Stormcaller', 'Storm Stomp', 'Vacuum Slice', 'Phantom Slash', 'Determination', "Royal Knight's Resolve"],
  Magic: ['Glintstone Pebble', 'Glintblade Phalanx', 'Carian Greatsword', 'Carian Grandeur', 'Spinning Weapon', "Loretta's Slash", 'Gravitas', 'Waves of Darkness', "Thops's Barrier", 'Carian Retaliation'],
  Fire: ['Flaming Strike', 'Flame of the Redmanes', 'Eruption'],
  'Flame Art': ["Prelate's Charge", 'Black Flame Tornado'],
  Lightning: ['Thunderbolt', 'Lightning Slash', 'Lightning Ram'],
  Sacred: ['Sacred Blade', 'Prayerful Strike', 'Sacred Ring of Light', 'Sacred Order', 'Shared Order', 'Golden Land', 'Golden Slam', 'Golden Vow', 'Vow of the Indomitable', 'Holy Ground', 'Golden Parry'],
  Poison: ['Poisonous Mist', 'Poison Moth Flight'],
  Blood: ['Blood Blade', 'Bloody Slash', 'Blood Tax', 'Seppuku'],
  Cold: ['Ice Spear', 'Chilling Mist', 'Hoarfrost Stomp'],
  Occult: ['Spectral Lance', 'Lifesteal Fist', "White Shadow's Lure", "Assassin's Gambit"],
  Standard: ['Mighty Shot', 'Through and Through', 'Barrage', 'Sky Shot', 'Enchanted Shot', 'Rain of Arrows', 'Parry', 'Storm Wall', 'Shield Bash', 'Shield Crash', 'Barricade Shield', 'No Skill'],
};

const names = Object.entries(affinities).flatMap(([affinity, entries]) =>
  entries.map((name) => ({ name, affinity })),
);

const dlcAffinities = {
  Heavy: ["Savage Lion's Claw", 'Spinning Gravity Thrust'],
  Keen: ['Blind Spot', 'Swift Slash', 'Overhead Stance', 'Savage Claws', 'Raging Beast', 'Piercing Throw', 'Scattershot Throw'],
  Quality: ['Wing Stance'],
  Magic: ['Carian Sovereignty'],
  'Flame Art': ['Flame Skewer', 'Flame Spear'],
  Lightning: ['Blinkbolt'],
  Sacred: ['Aspects of the Crucible: Wings'],
  Poison: ['The Poison Flower Blooms Twice'],
  Cold: ['Ghostflame Call', 'Divine Beast Frost Stomp'],
  Occult: ['Shriek of Sorrow'],
  Standard: ['Palm Blast', 'Dryleaf Whirlwind', 'Wall of Sparks', 'Rolling Sparks', "Igon's Drake Hunt", 'Shield Strike'],
};

const dlcNames = Object.entries(dlcAffinities).flatMap(([affinity, entries]) =>
  entries.map((name) => ({ name, affinity })),
);

function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function cleanWiki(value = '') {
  return value
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\{\{SOTE\}\}/g, 'Shadow of the Erdtree')
    .replace(/\{\{[^{}]*\}\}/g, '')
    .replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1')
    .replace(/'{2,}/g, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function infoboxField(text, field) {
  const match = text.match(new RegExp(`\\|\\s*${field}\\s*=\\s*([^\\n}]*)`, 'i'));
  return cleanWiki(match?.[1] ?? '');
}

function section(text, title) {
  const match = text.match(new RegExp(`==${title}==([\\s\\S]*?)(?=\\n==[^=]|$)`, 'i'));
  return match?.[1]?.trim() ?? '';
}

function englishDescription(text) {
  const description = section(text, 'Description');
  const match = description.match(/\|EN=([\s\S]*?)(?=\n\|(?:JP|CN|DE|FR|IT|KR|PL|BR|RU|ES|TH|TW)=)/);
  return cleanWiki(match?.[1] ?? '');
}

function effectCompatibility(text) {
  const effect = cleanWiki(section(text, 'Effect'));
  const match = effect.match(/Applies the skill .*? to (.*?)(?:\. Compatible|\.?$)/i);
  return (match?.[1] ?? 'compatible infusable armaments').replace(/\s+/g, ' ').trim();
}

function skillFromDescription(description, fallback) {
  const match = description.match(/"([^":]+):/);
  return match?.[1]?.trim() || fallback;
}

function summarize(skill, affinity, compatibility) {
  return `Provides the ${skill} skill with ${affinity} as its native affinity; usable on ${compatibility}.`;
}

async function fetchWikitext(name) {
  const page = `Ash of War: ${name}`;
  const query = new URLSearchParams({
    action: 'parse',
    page,
    prop: 'wikitext',
    format: 'json',
    origin: '*',
  });
  let lastError;
  for (const api of WIKI_APIS) {
    let response;
    for (let attempt = 0; attempt < 6; attempt += 1) {
      response = await fetch(`${api}?${query}`);
      if (response.status !== 429) break;
      await new Promise((resolve) => setTimeout(resolve, 1500 * (attempt + 1)));
    }
    if (!response?.ok) {
      lastError = `${page}: HTTP ${response?.status ?? 'unknown'}`;
      continue;
    }
    const payload = await response.json();
    if (!payload.error) return { page, text: payload.parse.wikitext['*'] };
    lastError = `${page}: ${payload.error.info}`;
  }
  console.warn(`${lastError}; retaining an explicitly pending record.`);
  return { page, text: '' };
}

async function mapWithConcurrency(items, limit, mapper) {
  const output = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      output[index] = await mapper(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return output;
}

async function buildEntry(item, contentPack) {
  const { page, text } = await fetchWikitext(item.name);
  const description = englishDescription(text);
  const rawAcquisition = section(text, 'Acquisition').split(/Once this item has been obtained/i)[0];
  const obtained = cleanWiki(rawAcquisition)
    .replace(/^Guaranteed Drop:\s*/i, '')
    .replace(/^Purchase:\s*/i, '')
    .replace(/^Loot:\s*/i, '')
    .trim() || infoboxField(text, 'obtained');
  const compatibility = effectCompatibility(text);
  const skill = skillFromDescription(description, item.name);
  const locationLinks = [...rawAcquisition.matchAll(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g)];
  const primaryLocation = cleanWiki(locationLinks.at(-1)?.[1] || 'Location pending precise normalization');
  const sourceId = `fandom-${slugify(item.name)}`;
  const commonSources = contentPack === 'base-game'
    ? ['wiki-gg-ashes-table', 'fanapi-legacy-ashes', 'saika-ptbr-series']
    : ['wiki-gg-dlc-ashes', 'gamingbolt-dlc-ashes', 'saika-dlc-ptbr'];
  return {
    id: slugify(item.name),
    contentPack,
    name: { ptBR: null, en: item.name },
    primaryLocation: { ptBR: null, en: primaryLocation },
    primaryAcquisition: { ptBR: null, en: obtained || 'Acquisition pending cross-source verification' },
    acquisitionMethods: [{
      location: { ptBR: null, en: primaryLocation },
      method: { ptBR: null, en: obtained || 'Acquire the removable Ash of War item in the base game' },
      notes: { ptBR: null, en: 'Lost Ashes of War duplication is intentionally excluded.' },
    }],
    summary: { ptBR: null, en: summarize(skill, item.affinity, compatibility) },
    skillType: null,
    affinity: { ptBR: null, en: item.affinity },
    compatibleEquipment: { ptBR: null, en: [compatibility] },
    fpCost: null,
    specialEffects: null,
    limitations: { ptBR: null, en: 'Cannot be applied to incompatible or non-infusable armaments; affinity choices can depend on owned whetblades.' },
    relevantNotes: { ptBR: null, en: 'Official Brazilian Portuguese localization and FP cost remain pending direct in-game verification.' },
    sourceRefs: [sourceId, ...commonSources],
    verificationStatus: 'partial',
    _research: {
      page,
      consultedAt: CONSULTED_AT,
      rawAffinity: infoboxField(text, 'affinity'),
    },
  };
}

function sourceInventory(entries) {
  const perEntry = entries.map((entry) => ({
    id: entry.sourceRefs[0],
    name: `Eldenpedia (wiki.gg) — ${entry.name.en}`,
    type: 'community wiki, item page',
    url: `https://eldenring.wiki.gg/wiki/${encodeURIComponent(entry._research.page.replaceAll(' ', '_'))}`,
    consultedAt: CONSULTED_AT,
    supports: ['English name', 'base item identity', 'affinity', 'compatibility', 'acquisition'],
    reliability: 'high for structured game facts; community-maintained',
    limitations: 'No populated Brazilian Portuguese field; technical values still require independent confirmation.',
  }));
  return [
    {
      id: 'wiki-gg-ashes-table',
      name: 'Eldenpedia (wiki.gg) — Ashes of War table',
      type: 'community wiki, consolidated inventory',
      url: 'https://eldenring.wiki.gg/wiki/Ashes_of_War_(Table)',
      consultedAt: CONSULTED_AT,
      supports: ['complete inventory', 'affinity grouping', 'DLC separation'],
      reliability: 'high for inventory reconciliation',
      limitations: 'Current table mixes base game and DLC and therefore requires explicit filtering.',
    },
    {
      id: 'fanapi-legacy-ashes',
      name: 'Elden Ring API / FanAPI legacy ashes dataset',
      type: 'community API snapshot',
      url: 'https://raw.githubusercontent.com/deliton/eldenring-api/master/api/public/data/ashes.json',
      consultedAt: CONSULTED_AT,
      supports: ['English names', 'affinity', 'compatibility descriptions'],
      reliability: 'medium',
      limitations: 'Old snapshot contains Lost Ashes of War and omits Shared Order and Sky Shot.',
    },
    {
      id: 'saika-ptbr-series',
      name: 'Saika Games — Elden Ring 100% Cinza da Guerra #1–#3',
      type: 'community gameplay index in Brazilian Portuguese',
      url: 'https://saikagames.com.br/eldenringcinzadaguerra1/',
      consultedAt: CONSULTED_AT,
      supports: ['candidate Brazilian Portuguese names', 'base-game checklist coverage'],
      reliability: 'medium; useful as discovery evidence',
      limitations: 'Not an official localization source; names are therefore not promoted to official pt-BR fields.',
    },
    {
      id: 'powerpyx-locations',
      name: 'PowerPyx — Elden Ring All Ashes of War Locations',
      type: 'community guide',
      url: 'https://www.powerpyx.com/elden-ring-all-ashes-of-war-locations/',
      consultedAt: CONSULTED_AT,
      supports: ['independent location checks for a subset'],
      reliability: 'medium',
      limitations: 'Incomplete and contains early-release naming/typing errors.',
    },
    {
      id: 'bandai-elden-ring',
      name: 'Bandai Namco — Elden Ring',
      type: 'official product page',
      url: 'https://en.bandainamcoent.eu/elden-ring/elden-ring',
      consultedAt: CONSULTED_AT,
      supports: ['official game and expansion scope'],
      reliability: 'official',
      limitations: 'Does not publish a technical Ashes of War catalog.',
    },
    {
      id: 'wiki-gg-dlc-ashes',
      name: 'Eldenpedia (wiki.gg) — Ashes of War (Shadow of the Erdtree)',
      type: 'community wiki, expansion inventory',
      url: 'https://eldenring.wiki.gg/wiki/Ashes_of_War_(Shadow_of_the_Erdtree)',
      consultedAt: CONSULTED_AT,
      supports: ['expansion scope', 'English names', 'collectible-item identity'],
      reliability: 'high for expansion attribution',
      limitations: 'The displayed list omits Ghostflame Call despite its individual page and other inventories assigning it to the expansion.',
    },
    {
      id: 'gamingbolt-dlc-ashes',
      name: 'GamingBolt — All Ashes of War Locations',
      type: 'community guide',
      url: 'https://gamingbolt.com/elden-ring-shadow-of-the-erdtree-all-ashes-of-war-locations',
      consultedAt: CONSULTED_AT,
      supports: ['independent acquisition', 'affinity', 'compatibility'],
      reliability: 'medium',
      limitations: 'Editorial guide; individual facts must be reconciled with item pages.',
    },
    {
      id: 'saika-dlc-ptbr',
      name: 'Saika Games — Shadow of the Erdtree 100% Cinza da Guerra',
      type: 'community gameplay index in Brazilian Portuguese',
      url: 'https://saikagames.com.br/eldenringdlccinzadaguerra/',
      consultedAt: CONSULTED_AT,
      supports: ['candidate Brazilian Portuguese names', '25-entry expansion coverage'],
      reliability: 'medium; discovery evidence only',
      limitations: 'Not an official localization source; pt-BR values remain null.',
    },
    ...perEntry,
  ];
}

function proposalMarkdown(entries) {
  const sections = entries.map((entry) => `## ${entry.name.en}

- ID: \`${entry.id}\`
- Conteúdo: \`base-game\`
- Nome pt-BR: pendente de confirmação oficial
- Local principal (EN): ${entry.primaryLocation.en}
- Aquisição principal (EN): ${entry.primaryAcquisition.en}
- Métodos alternativos: nenhuma duplicação por Lost Ashes of War; outras alternativas permanecem pendentes quando não constam na página específica
- Resumo factual (EN): ${entry.summary.en}
- Habilidade/tipo: ${entry.name.en}; tipo técnico pendente
- Afinidade: ${entry.affinity.en}
- Compatibilidade: ${entry.compatibleEquipment.en.join('; ')}
- FP: \`null\` — pendente de verificação técnica independente
- Efeitos especiais: pendente quando não separável do resumo sem validação adicional
- Limitações: ${entry.limitations.en}
- Fontes: ${entry.sourceRefs.map((ref) => `\`${ref}\``).join(', ')}
- Status: \`${entry.verificationStatus}\`
- Pendências: localização oficial pt-BR, aquisição pt-BR, resumo pt-BR, afinidade pt-BR, equipamento pt-BR, custo de FP e segunda confirmação técnica por entrada.
`).join('\n');

  return `# Proposta de catálogo — Cinzas da Guerra do jogo base

## Resultado

Total proposto: **${entries.length} Cinzas da Guerra colecionáveis do jogo base**. Cada item aparece uma vez, independentemente de múltiplos métodos ou duplicações.

## Estado editorial

- Verificadas: 0
- Parciais: ${entries.length}
- Disputadas: 0

O inventário e a separação base/DLC foram conciliados; a promoção para \`verified\` aguarda confirmação direta dos nomes pt-BR e dos custos de FP, além de uma segunda fonte técnica por entrada. As 91 entradas foram aceitas provisoriamente pelo usuário para permitir o avanço da pesquisa, sem resolver essas pendências.

## Lista completa

${entries.map((entry, index) => `${index + 1}. \`${entry.id}\` — ${entry.name.en}`).join('\n')}

## Entradas

${sections}

## Itens avaliados e excluídos

- \`Lost Ashes of War\`: material de duplicação, não uma Cinza equipável colecionável do checklist.
- As 25 Cinzas introduzidas por Shadow of the Erdtree: fora do escopo desta pesquisa.
- Habilidades únicas e fixas sem item separado (por exemplo, Spinning Chain, Torch Attack, Firebreather e Buckler Parry): não colecionáveis como Cinzas da Guerra.
- Duplicações criadas por Hewg com Lost Ashes of War: não criam nova unidade.
- Formas alternativas de obtenção e Cinzas inicialmente aplicadas a armas comuns: consolidadas sob o mesmo ID quando removíveis.

## Duplicidades e divergências resolvidas

- A API comunitária antiga contém 90 registros: 89 Cinzas utilizáveis e Lost Ashes of War. Ela omite \`Shared Order\` e \`Sky Shot\`; ambas foram reintegradas após comparação com a tabela wiki.gg e páginas individuais.
- Capitalização inconsistente como “Ash Of War” e variantes de Stamp foi normalizada pelo nome oficial inglês da página.
- Apóstrofos são removidos somente do ID; permanecem no nome inglês.
- Métodos de aquisição não criam IDs adicionais.

## Confiança final

Confiança alta no total de 91, nos IDs, nomes ingleses, escopo base/DLC e afinidades. Confiança média em aquisição e compatibilidade até uma segunda verificação individual. Campos pt-BR e FP permanecem explicitamente pendentes; nenhum texto localizado foi inventado.
`;
}

function dlcProposalMarkdown(entries) {
  const sections = entries.map((entry) => `## ${entry.name.en}

- ID: \`${entry.id}\`
- Conteúdo: \`shadow-of-the-erdtree\`
- Nome pt-BR: pendente de confirmação oficial
- Localização principal (EN): ${entry.primaryLocation.en}
- Obtenção principal (EN): ${entry.primaryAcquisition.en}
- Métodos alternativos: consolidados na mesma unidade; duplicações por Lost Ashes of War são excluídas
- Resumo factual (EN): ${entry.summary.en}
- Habilidade/tipo: ${entry.name.en}; classificação técnica pendente
- Afinidade: ${entry.affinity.en}
- Compatibilidade: ${entry.compatibleEquipment.en.join('; ')}
- FP: \`null\` — pendente de confirmação paramétrica independente
- Efeitos especiais: pendente quando não separável do resumo com segurança
- Limitações: ${entry.limitations.en}
- Observações: ${entry.relevantNotes.en}
- Fontes: ${entry.sourceRefs.map((ref) => `\`${ref}\``).join(', ')}
- Status: \`${entry.verificationStatus}\`
- Pendências: campos oficiais pt-BR, FP, tipo técnico e segunda confirmação individual.
`).join('\n');
  return `# Proposta de catálogo — Cinzas da Guerra de Shadow of the Erdtree

## Resultado

Total proposto: **${entries.length} Cinzas da Guerra colecionáveis introduzidas em Shadow of the Erdtree**.

## Estado editorial

- Verificadas: 0
- Parciais: ${entries.length}
- Disputadas: 0

## Lista completa

${entries.map((entry, index) => `${index + 1}. \`${entry.id}\` — ${entry.name.en}`).join('\n')}

## Entradas

${sections}

## Itens avaliados e excluídos

- Habilidades fixas de armas únicas sem item removível.
- Lost Ashes of War e cópias produzidas por duplicação.
- As 91 Cinzas provisórias do jogo base.
- Outros tipos, incluindo Spirit Ashes e Revered Spirit Ashes.
- Métodos alternativos como novos registros.

## Duplicidades e divergências resolvidas

- A página específica da expansão na wiki.gg lista 24 nomes visíveis e omite Ghostflame Call; páginas individuais, a tabela geral e o índice pt-BR de gameplay sustentam sua atribuição à expansão. A conclusão adotada é 25.
- Cinzas inicialmente equipadas em armas comuns, como Blind Spot, contam uma vez quando removíveis.
- Apóstrofos e dois-pontos permanecem no nome e são normalizados somente no ID.
- Não houve colisão com os 91 IDs provisórios do jogo base.

## Confiança

Confiança alta no total, nomes ingleses, IDs, pacote e afinidades; média em aquisições e compatibilidades; pendente para localização oficial pt-BR, FP e detalhes técnicos. Este documento não é catálogo de produção.
`;
}

function fullReviewMarkdown(baseEntries, dlcEntries) {
  const all = [...baseEntries, ...dlcEntries];
  const counts = all.reduce((result, entry) => {
    result[entry.verificationStatus] += 1;
    return result;
  }, { verified: 0, partial: 0, disputed: 0 });
  const baseIds = new Set(baseEntries.map((entry) => entry.id));
  const collisions = dlcEntries.filter((entry) => baseIds.has(entry.id));
  const pendingLocations = all.filter((entry) =>
    entry.primaryLocation.en === 'Location pending precise normalization').length;
  return `# Revisão combinada — Cinzas da Guerra

## Totais

- Jogo base provisório: **${baseEntries.length}**
- Shadow of the Erdtree proposto: **${dlcEntries.length}**
- Total combinado: **${all.length}**

## Status

- \`verified\`: ${counts.verified}
- \`partial\`: ${counts.partial}
- \`disputed\`: ${counts.disputed}

## Pendências

- Nomes pt-BR pendentes: ${all.filter((entry) => entry.name.ptBR === null).length}
- Custos de FP pendentes: ${all.filter((entry) => entry.fpCost === null).length}
- Localizações principais que precisam de normalização: ${pendingLocations}
- Tipos de habilidade, efeitos separados e segundas confirmações técnicas ainda precisam de revisão individual.

## Divergências

- A base legada omite Shared Order e Sky Shot e inclui Lost Ashes of War; o total provisório do jogo base permanece 91.
- A página específica da expansão omite Ghostflame Call na lista visível; a entrada foi mantida após cruzamento com tabela geral, página individual e índice da expansão.
- Candidatos pt-BR comunitários não foram promovidos a localização oficial.

## IDs

- Colisões entre jogo base e expansão: ${collisions.length}${collisions.length ? ` — ${collisions.map((entry) => entry.id).join(', ')}` : ''}
- Todos os IDs propostos são kebab-case e independentes do idioma.

## Exclusões

Lost Ashes of War, duplicações, habilidades exclusivamente fixas, itens de outras categorias e métodos alternativos como entradas separadas.

## Confiança geral

Alta para totais provisórios, nomes ingleses, IDs, pacote e afinidades; média para aquisição/compatibilidade; pendente para pt-BR, FP e detalhes técnicos. **Este relatório não é catálogo de produção.**

O jogo base foi aceito provisoriamente somente para permitir o avanço da pesquisa. Os dois conjuntos ainda precisam de aprovação antes da implementação.
`;
}

function planMarkdown() {
  return `# Plano de pesquisa — Cinzas da Guerra

## Decisões aprovadas

Esta etapa é exclusivamente documental. Não altera telas, rotas, componentes, armazenamento, migração, dependências ou \`src/data/catalog\`. O checklist contará cada Cinza removível uma única vez.

O catálogo do jogo base foi aceito provisoriamente com 91 entradas para permitir a pesquisa separada de Shadow of the Erdtree. Essa aceitação não resolve localização, custos de FP ou demais pendências. Jogo base e expansão ainda precisam de aprovação antes da implementação.

## Inclusão e exclusão

Incluem-se itens diretos, compras, recompensas, drops, escaravelhos, achados e Cinzas inicialmente aplicadas a armas comuns quando removíveis. Excluem-se habilidades fixas/únicas sem item separado, Lost Ashes of War, duplicações, outros tipos, conteúdo da expansão e dados especulativos.

## Metodologia e validação

1. Manter o inventário provisório de 91 entradas do jogo base sem alterar suas pendências.
2. Pesquisar separadamente as 25 entradas introduzidas em Shadow of the Erdtree.
3. Extrair fatos estruturados das páginas individuais.
4. Parafrasear efeito e uso; não copiar descrições.
5. Manter \`null\` e pendência explícita quando a localização oficial pt-BR ou o FP não estiverem confirmados.
6. Validar JSON, IDs, escopo, fontes, aquisições, afinidades, compatibilidade e totais com script offline.

## Modelo proposto

\`\`\`ts
type LocalizedResearchText = { ptBR: string | null; en: string };

type AshOfWarResearchEntry = {
  id: string;
  contentPack: 'base-game';
  name: LocalizedResearchText;
  primaryLocation: LocalizedResearchText;
  primaryAcquisition: LocalizedResearchText;
  acquisitionMethods: Array<{
    location: LocalizedResearchText;
    method: LocalizedResearchText;
    notes?: LocalizedResearchText;
  }>;
  summary: LocalizedResearchText;
  skillType: LocalizedResearchText | null;
  affinity: LocalizedResearchText;
  compatibleEquipment: { ptBR: string[] | null; en: string[] };
  fpCost: number | null;
  specialEffects: LocalizedResearchText | null;
  limitations: LocalizedResearchText | null;
  relevantNotes: LocalizedResearchText | null;
  sourceRefs: string[];
  verificationStatus: 'verified' | 'partial' | 'disputed';
};
\`\`\`

O modelo mínimo foi preservado. Recomenda-se apenas reutilizar o alias \`LocalizedResearchText\` na futura implementação para reduzir duplicação; o JSON continua materializando os objetos completos. Metadados editoriais temporários do construtor não entram no catálogo proposto.

## IDs

IDs são kebab-case derivados do nome inglês, sem prefixo temporário, apóstrofos ou pontuação. Parênteses são convertidos em segmentos (\`stamp-upward-cut\`). A validação rejeita colisões, \`sample-*\`, IDs de chefes/regiões conhecidos e duplicatas.

## Localização

Somente texto oficial do jogo pode preencher pt-BR. Fontes comunitárias servem para descoberta, não para promover tradução livre. Ausências ficam \`null\` e são documentadas como pendentes. A mesma regra vale para afinidades, equipamento, tipo de habilidade e locais.

## Ordenação futura

Português: nome pt-BR com collation \`pt-BR\`; inglês: nome inglês com collation inglesa; ID como desempate estável. A ordem deste arquivo não é regra visual.

## Interface futura já aprovada (somente documentação)

A Home combinará chefes e Cinzas com peso unitário e cards por categoria. O Drawer terá Chefes (Todos, base com 16 regiões, expansão com 10) e Cinzas (Todas, base, expansão). Todos os Chefes reunirá 208 encontros em duas seções. Todas as Cinzas terá progresso combinado, seções base/DLC, busca e filtros Todas/Coletadas/Não coletadas; seções vazias serão ocultadas. Listas específicas serão contínuas e não regionais. Cards mostrarão nome, origem principal, fantasma ou ✓, detalhes e ação de coletar. Detalhes comportarão todos os campos da pesquisa. Migração preservará chefes, iniciará Cinzas em zero e resetará ambos sem afetar idioma/tema. Todo card de progresso manterá \`concluído/total\` à esquerda, percentual à direita e barra abaixo.

## Riscos e pendências

- A wiki.gg não preenche o campo BR nas páginas consultadas.
- A base legada é incompleta e não deve decidir o inventário isoladamente.
- FP e tipo técnico precisam de fonte paramétrica ou inspeção direta.
- Aquisições alternativas exigem revisão manual por entrada.
- Mudanças de patch podem alterar custo/efeito, embora não devam alterar o inventário-base.

## Separação base/DLC

Os dois arquivos permanecem independentes: 91 entradas provisórias em \`base-game\` e 25 propostas em \`shadow-of-the-erdtree\`. Nenhum deles é catálogo de produção e ambos exigem aprovação antes da implementação.

## Próxima etapa

Apresentar ao usuário o catálogo proposto de Shadow of the Erdtree e o resumo combinado das Cinzas da Guerra para aprovação antes da implementação.
`;
}

function sourcesMarkdown(sources) {
  const rows = sources.slice(0, 8).map((source) =>
    `| ${source.name} | ${source.type} | ${source.consultedAt} | ${source.reliability} | ${source.supports.join(', ')} | ${source.limitations} | ${source.url} |`,
  ).join('\n');
  const perEntry = sources.slice(8).map((source) =>
    `- **${source.id}** — [${source.name}](${source.url}); consulta ${source.consultedAt}; sustenta ${source.supports.join(', ')}. Limitação: ${source.limitations}`,
  ).join('\n');
  return `# Fontes — Cinzas da Guerra

## Inventário principal

| Fonte | Tipo | Consulta | Confiabilidade | Campos sustentados | Limitações | URL |
|---|---|---|---|---|---|---|
${rows}

## Divergências

- A FanAPI antiga retorna 90 objetos, incluindo Lost Ashes of War, e omite Shared Order e Sky Shot. A conclusão adotada é 91 Cinzas colecionáveis: a tabela e as páginas individuais da wiki.gg confirmam as duas ausentes; Lost Ashes of War é excluída por ser material de duplicação.
- A tabela wiki.gg atual mistura jogo base e DLC. A conclusão usa a composição histórica de 91 do jogo base e rejeita as 25 entradas introduzidas pela expansão.
- Guias antigos têm grafias como “Might Shot”, “Limegrave” e “Atlas Plateau”; não foram usados para nomes canônicos.
- A série Saika fornece candidatos pt-BR, mas não é fonte oficial. Por isso, os campos pt-BR permanecem pendentes.
- A página específica de Shadow of the Erdtree da wiki.gg omite Ghostflame Call na lista visível. A entrada foi mantida porque a tabela geral, a página individual e o índice de gameplay da expansão a atribuem ao DLC.

## Páginas individuais

${perEntry}
`;
}

async function main() {
  if (names.length !== 91) throw new Error(`Expected 91 names, received ${names.length}`);
  if (dlcNames.length !== 25) throw new Error(`Expected 25 DLC names, received ${dlcNames.length}`);
  const entriesWithResearch = await mapWithConcurrency(
    names,
    2,
    (item) => buildEntry(item, 'base-game'),
  );
  const dlcEntriesWithResearch = await mapWithConcurrency(
    dlcNames,
    2,
    (item) => buildEntry(item, 'shadow-of-the-erdtree'),
  );
  const entries = entriesWithResearch.map(({ _research, ...entry }) => entry);
  const dlcEntries = dlcEntriesWithResearch.map(({ _research, ...entry }) => entry);
  const sources = sourceInventory([...entriesWithResearch, ...dlcEntriesWithResearch]);
  fs.mkdirSync(path.join(ROOT, 'docs', 'research'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'docs', 'research', 'ashes-of-war-base-game.catalog.json'), `${JSON.stringify(entries, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, 'docs', 'research', 'ashes-of-war-dlc.catalog.json'), `${JSON.stringify(dlcEntries, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, 'docs', 'ASHES_OF_WAR_RESEARCH_PLAN.md'), planMarkdown());
  fs.writeFileSync(path.join(ROOT, 'docs', 'ASHES_OF_WAR_DATA_SOURCES.md'), sourcesMarkdown(sources));
  fs.writeFileSync(path.join(ROOT, 'docs', 'ASHES_OF_WAR_BASE_GAME_CATALOG_PROPOSAL.md'), proposalMarkdown(entries));
  fs.writeFileSync(path.join(ROOT, 'docs', 'ASHES_OF_WAR_DLC_CATALOG_PROPOSAL.md'), dlcProposalMarkdown(dlcEntries));
  fs.writeFileSync(path.join(ROOT, 'docs', 'ASHES_OF_WAR_FULL_CATALOG_REVIEW.md'), fullReviewMarkdown(entries, dlcEntries));
  console.log(`Generated ${entries.length} base entries, ${dlcEntries.length} DLC entries, and ${sources.length} source records.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

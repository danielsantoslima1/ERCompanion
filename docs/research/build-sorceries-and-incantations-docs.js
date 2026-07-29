const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const sorceries = require('./sorceries-catalog-research.json');
const incantations = require('./incantations-catalog-research.json');
const all = [...sorceries.entries, ...incantations.entries];

const totals = {
  sorceries: {
    base: sorceries.entries.filter((entry) => entry.contentPack === 'base-game').length,
    dlc: sorceries.entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree').length,
    total: sorceries.entries.length,
  },
  incantations: {
    base: incantations.entries.filter((entry) => entry.contentPack === 'base-game').length,
    dlc: incantations.entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree').length,
    total: incantations.entries.length,
  },
};
const futureTotal = 324 + totals.sorceries.total + totals.incantations.total;

function statusCounts(value, counts = { confirmed: 0, probable: 0, pending: 0, disputed: 0 }) {
  if (Array.isArray(value)) value.forEach((item) => statusCounts(item, counts));
  else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      if ((key === 'status' || key.endsWith('Status')) && typeof child === 'string' && child in counts) {
        counts[child] += 1;
      } else {
        statusCounts(child, counts);
      }
    }
  }
  return counts;
}

function listTable(entries) {
  return entries.map((entry) => {
    const req = entry.requirements;
    return `| \`${entry.id}\` | ${entry.name.en} | ${entry.contentPack} | ${entry.fpCost.value ?? '—'} | ${entry.memorySlots.value ?? '—'} | ${req.intelligence.value} | ${req.faith.value} | ${req.arcane.value} | ${entry.legendary.value ? 'sim' : 'não'} | ${entry.missable.value === null ? 'pendente' : entry.missable.value ? 'sim' : 'não'} |`;
  }).join('\n');
}

const fieldGroups = {
  identity: (entry) => [entry.name.enStatus],
  location: (entry) => [entry.primaryLocation.enStatus],
  acquisition: (entry) => [entry.primarySource.enStatus, ...entry.acquisitionMethods.map((method) => method.status)],
  price: (entry) => [entry.priceRunes.status],
  drop: (entry) => [entry.baseDropRatePercent.status],
  fp: (entry) => [entry.fpCost.status],
  slots: (entry) => [entry.memorySlots.status],
  requirements: (entry) => Object.values(entry.requirements).map((field) => field.status),
  stamina: (entry) => [entry.staminaCost.status],
  duration: (entry) => [entry.durationSeconds.status],
  damage: (entry) => [entry.damageTypes.status],
  condition: (entry) => [entry.statusConditions.status],
  healingAndBuffs: (entry) => [entry.healingAndBuffs.status],
  restrictions: (entry) => [entry.applicationRestrictions.enStatus],
  range: (entry) => [entry.rangeDescription.enStatus, entry.areaShape.enStatus],
  interactions: (entry) => [entry.effectInteractions.enStatus],
  pvp: (entry) => [entry.pvpDifferences.enStatus],
  legendary: (entry) => [entry.legendary.status],
  missable: (entry) => [entry.missable.status],
  ptBR: (entry) => [entry.name.ptBRStatus],
};

function countStatuses(statuses) {
  return statuses.reduce((counts, status) => {
    counts[status] += 1;
    return counts;
  }, { confirmed: 0, probable: 0, pending: 0, disputed: 0 });
}

function groupedStatusCounts(entries) {
  return Object.fromEntries(Object.entries(fieldGroups).map(([group, select]) => [
    group,
    countStatuses(entries.flatMap(select)),
  ]));
}

function groupedStatusTable(entries) {
  const groups = groupedStatusCounts(entries);
  return Object.entries(groups).map(([group, counts]) =>
    `| ${group} | ${counts.confirmed} | ${counts.probable} | ${counts.pending} | ${counts.disputed} |`).join('\n');
}

function compactChecklist(entries) {
  return entries.map((entry) => {
    const primary = entry.acquisitionMethods[entry.primaryAcquisition?.methodIndex ?? 0];
    const pending = [
      entry.primaryLocation.enStatus === 'pending' && 'local',
      entry.primarySource.enStatus === 'pending' && 'fonte',
      !primary?.steps.complete && 'passos',
      primary?.nearestSiteOfGrace.enStatus === 'pending' && 'graça',
      entry.name.ptBRStatus === 'pending' && 'pt-BR',
    ].filter(Boolean).join(', ');
    return `| \`${entry.id}\` | ${entry.name.en} | ${entry.contentPack} | ${primary?.shortCardLocation.en ?? 'pendente'} | ${entry.primaryLocation.enStatus} | ${entry.primarySource.en ?? 'pendente'} | ${entry.primarySource.enStatus} | ${entry.acquisitionMethods.length} | ${primary?.nearestSiteOfGrace.en ?? 'pendente'} | ${primary?.method.en ?? 'pendente'} | ${primary?.steps.complete ? 'sim' : 'não'} | ${primary?.availabilityTags.values?.join(', ') || 'pendente'} | ${primary?.containsQuestSpoilers.value ? 'sim' : 'não'} | ${entry.missable.value === true ? 'provável' : 'pendente'} | ${pending || '—'} |`;
  }).join('\n');
}

function acquisitionStatistics(entries) {
  const primaryMethods = entries.map((entry) =>
    entry.acquisitionMethods[entry.primaryAcquisition?.methodIndex ?? 0]).filter(Boolean);
  return {
    locations: countStatuses(entries.map((entry) => entry.primaryLocation.enStatus)),
    primarySources: countStatuses(entries.map((entry) => entry.primarySource.enStatus)),
    acquisitionMethods: countStatuses(entries.flatMap((entry) =>
      entry.acquisitionMethods.map((method) => method.status))),
    withMvpLocation: entries.filter((entry) =>
      ['confirmed', 'probable'].includes(entry.primaryLocation.enStatus)).length,
    withoutMvpLocation: entries.filter((entry) =>
      !['confirmed', 'probable'].includes(entry.primaryLocation.enStatus)).length,
    completeSteps: primaryMethods.filter((method) => method.steps.complete).length,
    multipleAlternatives: entries.filter((entry) => entry.acquisitionMethods.length > 1).length,
    withSiteOfGrace: primaryMethods.filter((method) => method.nearestSiteOfGrace.en).length,
    withNpc: entries.filter((entry) =>
      entry.acquisitionMethods.some((method) => method.npc.en)).length,
    withIntermediateItem: entries.filter((entry) =>
      entry.acquisitionMethods.some((method) => method.requiredItem.en || method.intermediateItem.en)).length,
    drops: entries.filter((entry) =>
      entry.acquisitionMethods.some((method) => ['enemy-drop', 'scarab'].includes(method.methodType))).length,
    bossRewards: entries.filter((entry) =>
      entry.acquisitionMethods.some((method) => method.methodType === 'boss-reward')).length,
    remembranceExchanges: entries.filter((entry) =>
      entry.acquisitionMethods.some((method) => method.methodType === 'remembrance-exchange')).length,
    spoilerAcquisitions: entries.filter((entry) =>
      entry.acquisitionMethods.some((method) => method.containsQuestSpoilers.value)).length,
    protectedCards: entries.filter((entry) =>
      entry.acquisitionMethods.some((method) => method.containsQuestSpoilers.value)
      && entry.cardSummary.en).length,
    locationAliases: entries.reduce((total, entry) =>
      total + (entry.locationAliases.values?.length ?? 0), 0),
    ptBRFilled: entries.filter((entry) => entry.name.ptBR !== null).length,
    ptBRPending: entries.filter((entry) => entry.name.ptBRStatus === 'pending').length,
  };
}

const researchPlan = `# Plano de pesquisa — Feitiços e Encantamentos

## Objetivo e estado

Pesquisar e planejar, sem integração funcional, dois catálogos independentes e totalmente offline:

- **Sorceries / Feitiços**: ${totals.sorceries.total} entradas (${totals.sorceries.base} jogo base e ${totals.sorceries.dlc} expansão);
- **Incantations / Encantamentos**: ${totals.incantations.total} entradas (${totals.incantations.base} jogo base e ${totals.incantations.dlc} expansão).

Os catálogos são propostas documentais. Nenhum dado pt-BR foi aprovado e nenhum arquivo em \`src/\` foi alterado.

## Escopo

Incluem-se somente magias obtíveis, armazenáveis, memorizáveis e utilizáveis pelo personagem. Excluem-se magia exclusiva de inimigo/chefe, conteúdo cortado ou interno, duplicatas técnicas, habilidades de arma, Cinzas da Guerra, efeitos auxiliares e qualquer registro inacessível.

Uma magia com várias obtenções permanece uma entrada. Magias mutuamente exclusivas permanecem no denominador e podem exigir NG+.

## Proibição de classificações

Não existem nem serão criados campos de escola, família, tradição, grupo mágico, \`schools\`, \`families\` ou \`magicTypes\`. A única distinção principal é \`sorcery\` ou \`incantation\`. Catalisadores, cajados, selos e bônus de catalisador também estão fora do modelo.

## Metodologia

1. Inventário inglês obtido pela API pública de categorias do Eldenpedia.
2. Remoção apenas da página principal e das subcategorias; restaram 84 e 129 páginas de itens.
3. Partição DLC cruzada com listas independentes da expansão.
4. Campos técnicos curtos extraídos dos infoboxes públicos: efeito curto, FP básico, slots, requisitos, stamina e fonte resumida.
5. Textos longos e descrições integrais foram descartados; nenhum HTML ou dump foi versionado.
6. Campos não confirmados foram mantidos como \`null\` e \`pending\`.
7. Nomes pt-BR permanecem \`null/pending\`, com fallback inglês planejado.

## IDs

IDs são kebab-case, derivados do nome inglês e prefixados pelo domínio: \`sorcery-*\` e \`incantation-*\`. O namespace evita colisões como \`Golden Vow\` entre uma Cinza da Guerra e um Encantamento. Traduções futuras não alteram IDs nem progresso.

## Modelo documental proposto

\`\`\`ts
type SpellResearchEntry = {
  id: string;
  category: 'sorcery' | 'incantation';
  contentPack: 'base-game' | 'shadow-of-the-erdtree';
  name: LocalizedResearchValue;
  primaryLocation: LocalizedResearchValue;
  primarySource: LocalizedResearchValue;
  cardSummary: LocalizedResearchValue;
  acquisitionMethods: readonly AcquisitionResearch[];
  relatedNpcs: LocalizedCollectionResearchValue;
  relatedLocations: LocalizedCollectionResearchValue;
  intermediateItems: LocalizedCollectionResearchValue;
  questConditions: LocalizedResearchValue;
  requiredChoices: LocalizedResearchValue;
  priceRunes: NumericResearchValue;
  enemyDrop: LocalizedResearchValue;
  baseDropRatePercent: NumericResearchValue;
  missable: { value: boolean | null; explanation: LocalizedResearchValue; status: FieldStatus };
  legendary: { value: boolean; status: FieldStatus };
  summary: LocalizedResearchValue;
  primaryEffect: LocalizedResearchValue;
  damageTypes: { value: readonly ('physical' | 'magic' | 'fire' | 'lightning' | 'holy')[] | null; status: FieldStatus };
  statusConditions: CollectionResearchValue;
  fpCost: NumericResearchValue;
  memorySlots: NumericResearchValue;
  requirements: {
    intelligence: NumericResearchValue;
    faith: NumericResearchValue;
    arcane: NumericResearchValue;
  };
  staminaCost: NumericResearchValue;
  durationSeconds: NumericResearchValue;
  healingAndBuffs: CollectionResearchValue;
  applicationRestrictions: LocalizedResearchValue;
  rangeDescription: LocalizedResearchValue;
  areaShape: LocalizedResearchValue;
  effectInteractions: LocalizedResearchValue;
  pvpDifferences: LocalizedResearchValue;
  limitations: LocalizedResearchValue;
  technicalNotes: LocalizedResearchValue;
  documentedVersion: VersionResearchValue;
  sourceRefs: readonly string[];
};
\`\`\`

Não há campos próprios para carga, canalização, repetição, continuidade, animação ou custos incrementais.

## Interface futura aprovada para planejamento

- Ordem Home/Drawer: Chefes, Cinzas da Guerra, Feitiços, Encantamentos.
- Cada grupo: Todos, Jogo base, Shadow of the Erdtree.
- “Todos” tem um progresso e duas seções fixas, sem agrupamentos internos.
- Card: nome, fonte/local principal, estado e ícone decorativo; nenhuma estatística.
- Detalhes omitem nulos e mostram somente os campos aprovados.
- Estado genérico: Coletado/Não coletado/Marcar como coletado/Desmarcar como coletado.
- Ícones aprovados, sem dependência nova: Ionicons \`sparkles-outline\` para Feitiços e \`sunny-outline\` para Encantamentos. Coletados usam \`✓\`. São decorativos, não interativos e ocultos da árvore de acessibilidade.
- Ícones são decorativos, não interativos e ocultos da acessibilidade.

## Busca e filtros

A busca futura indexará somente nome, localização, NPC e fonte, nos dois idiomas, normalizados sem caixa ou acento. A interface mostra apenas o idioma ativo.

Filtros: Lendárias, Perdíveis, exige Inteligência, exige Fé e exige Arcano. Todos combinam por interseção; múltiplos atributos exigem todos. Não haverá filtros por valor, FP, slots, dano, efeito, localização ou classificação.

## Progresso e schema v3

O total futuro será dinâmico e, com os inventários atuais, será ${futureTotal}. O schema proposto:

\`\`\`ts
{
  schemaVersion: 3;
  defeatedBossIds: string[];
  collectedAshOfWarIds: string[];
  collectedSorceryIds: string[];
  collectedIncantationIds: string[];
}
\`\`\`

A migração v2→v3 preservará Chefes e Cinzas, iniciará os dois novos arrays vazios, preservará IDs desconhecidos válidos, removerá apenas IDs demo conhecidos, será idempotente e nunca usará \`AsyncStorage.clear()\`.

## Rotas futuras

- \`/sorceries\`, \`/sorceries/base-game\`, \`/sorceries/shadow-of-the-erdtree\`, \`/sorceries/[sorceryId]\`;
- \`/incantations\`, \`/incantations/base-game\`, \`/incantations/shadow-of-the-erdtree\`, \`/incantations/[incantationId]\`.

Listas, cards e detalhes devem compartilhar somente primitivas já comprovadamente comuns; os domínios permanecem tipados e separados.

## Riscos e pendências

- pt-BR integralmente pendente;
- perdibilidade não foi promovida sem auditoria de questlines;
- tipo de dano e duração permanecem pendentes onde o infobox não oferece evidência inequívoca;
- o significado de “Lendária” foi fixado provisoriamente na lista do troféu/conquista, não na raridade interna exibida por wikis;
- formas alternativas de obtenção precisam de revisão manual antes da produção;
- valores técnicos são \`probable\`, pois vêm de fonte comunitária rastreável.

Nenhuma ferramenta de extração, arquivo local do jogo ou captura foi usada.
`;

const sources = `# Fontes — Feitiços e Encantamentos

Consulta: 2026-07-29.

| ID | Fonte | Responsável/tipo | Idioma | Escopo e campos | Pontos fortes | Limitações | URL |
|---|---|---|---|---|---|---|---|
| \`bandai-namco-sote-official\` | Shadow of the Erdtree — site oficial | Bandai Namco | inglês | existência e escopo oficial da expansão | fonte primária de produto | não publica inventário completo nem estatísticas | https://www.bandainamcoent.com/games/elden-ring/shadow-of-the-erdtree |
| \`bandai-namco-patch-1-16-1\` | Patch Notes Version 1.16.1 | Bandai Namco | inglês | versão de regulação mais recente documentada | fonte oficial, publicada em 2025-08-21 | não confirma isoladamente cada valor técnico comunitário | https://en.bandainamcoent.eu/elden-ring/news/elden-ring-patch-notes-version-1161 |
| \`steam-legendary-achievement\` | Legendary Sorceries and Incantations | Steam/Valve | inglês | existência e critério da conquista | evidência oficial da conquista | não identifica nominalmente os sete itens | https://steamcommunity.com/stats/1245620/achievements/ |
| \`eldenpedia-legendary-achievement-list\` | Legendary Sorceries and Incantations (Achievement/Trophy) | Eldenpedia | inglês | lista nominal de quatro Feitiços e três Encantamentos | cruza o conjunto exigido pela conquista | fonte comunitária secundária | https://eldenring.wiki.gg/wiki/Legendary_Sorceries_and_Incantations_%28Achievement/Trophy%29 |
| \`eldenpedia-missable-acquisition-pages\` | páginas individuais de aquisições ligadas a missões | Eldenpedia | inglês | cadeias de obtenção e bloqueios potenciais | páginas atualizadas e específicas por entrada | recuperação e pontos de bloqueio ainda precisam de evidência direta | https://eldenring.wiki.gg/wiki/Spells |
| \`community-missable-crosscheck\` | discussões rastreáveis sobre magias perdíveis | comunidade Elden Ring/Reddit | inglês | confirmação cruzada de candidatos de missão | múltiplos relatos concordantes para candidatos da DLC e Volcano Manor | fonte comunitária; sustenta apenas status \`probable\` | https://www.reddit.com/r/Eldenring/comments/1e9rxaj/ |
| \`powerpyx-all-sorcery-locations\` | Elden Ring All Spell Locations | PowerPyx | inglês | localizações e formas de obtenção de Feitiços do jogo base | guia editorial independente, organizado por local | publicado em 2022; detalhes continuam \`probable\` sem concordância individual atual | https://www.powerpyx.com/elden-ring-all-spell-locations/ |
| \`powerpyx-all-incantation-locations\` | Elden Ring All Incantation Locations | PowerPyx | inglês | localizações, Locais de Graça e formas de obtenção do jogo base | guia editorial independente e específico | publicado em 2022; precisa de fonte atual por item para \`confirmed\` | https://www.powerpyx.com/elden-ring-all-incantation-locations/ |
| \`game8-current-sorcery-locations\` | List of All Sorceries | Game8 | inglês | inventário atual e obtenção resumida | atualizado recentemente e editorialmente separado do Eldenpedia | nem todas as instruções têm precisão de Local de Graça | https://game8.co/games/Elden-Ring/archives/354359 |
| \`game8-current-incantation-locations\` | List of All Incantations | Game8 | inglês | inventário atual e obtenção resumida | atualizado recentemente e editorialmente separado do Eldenpedia | nem todas as instruções têm precisão de Local de Graça | https://game8.co/games/Elden-Ring/archives/354360 |
| \`gamer-guides-dlc-sorceries\` | All New Sorcery Locations | Gamer Guides | inglês | as 14 obtenções da expansão | tabela independente com locais e requisitos | fonte comunitária/editorial; passos não foram copiados | https://www.gamerguides.com/elden-ring-shadow-of-the-erdtree/guide/realm-of-shadow/sorceries |
| \`gamer-guides-dlc-incantations\` | All New Incantation Locations | Gamer Guides | inglês | as 28 obtenções da expansão | tabela independente com locais e requisitos | fonte comunitária/editorial; passos não foram copiados | https://www.gamerguides.com/elden-ring-shadow-of-the-erdtree/guide/realm-of-shadow/incantations |
| \`gamespot-dlc-spell-locations\` | All New DLC Spells | GameSpot | inglês | cruzamento das 42 magias da expansão | guia editorial independente com contexto visual | não sustenta sozinho campos técnicos ou pt-BR | https://www.gamespot.com/gallery/shadow-of-the-erdtree-spells-elden-ring/2900-5495/ |
| \`eldenpedia-category-inventory\` | Category:Sorceries / Category:Incantations | Eldenpedia (wiki.gg), wiki comunitária | inglês | inventário de 84 Feitiços e 129 Encantamentos | páginas individualizadas e API rastreável | categorias incluem páginas não-item e exigem filtragem explícita | https://eldenring.wiki.gg/wiki/Category:Sorceries ; https://eldenring.wiki.gg/wiki/Category:Incantations |
| \`eldenpedia-spell-pages\` | páginas individuais de magias | Eldenpedia (wiki.gg), wiki comunitária | inglês | FP, stamina, slots, requisitos, efeito curto, fonte resumida | infoboxes estruturados e histórico por página | dados técnicos ainda exigem revisão independente antes da produção | https://eldenring.wiki.gg/wiki/Sorceries ; https://eldenring.wiki.gg/wiki/Incantations |
| \`fandom-dlc-sorceries\` | Sorceries (Shadow of the Erdtree) | Elden Ring Wiki/Fandom | inglês | lista das 14 adições da DLC | lista explícita e independente | fonte comunitária; não sustenta todos os campos técnicos | https://eldenring.fandom.com/wiki/Sorceries_(Shadow_of_the_Erdtree) |
| \`fandom-dlc-incantations\` | Incantations (Shadow of the Erdtree) | Elden Ring Wiki/Fandom | inglês | lista das 28 adições da DLC | lista explícita e independente | fonte comunitária; não sustenta todos os campos técnicos | https://eldenring.fandom.com/wiki/Incantations_(Shadow_of_the_Erdtree) |
| \`windows-central-dlc-counts\` | Elden Ring best spells and incantations | Windows Central | inglês | total DLC 42: 14 Feitiços e 28 Encantamentos | confirmação independente e versão declarada 1.16 | guia editorial, não inventário técnico primário | https://www.windowscentral.com/elden-ring-best-spells |
| \`huggingface-kaggle-counts\` | EldenRingQA / Ultimate Elden Ring dataset | ArenaRune / Pedro Altobelli | inglês | totais 84/129 | inventário independente com DLC | dataset agregado, aproximações declaradas; não usado para texto ou técnica | https://huggingface.co/datasets/ArenaRune/EldenRingQA |
| \`fanapi-legacy\` | Elden Ring API legacy JSON | deliton, API comunitária | inglês | comparação histórica 71/98 | rastreável e estruturado | desatualizado; aliases, duplicatas e omissões; não usado para consolidar totais | https://github.com/deliton/eldenring-api |
| \`eldenpedia-legendary-spells\` | Legendary Sorceries and Incantations | Eldenpedia | inglês | 4 Feitiços e 3 Encantamentos da conquista | lista ligada ao critério de conquista | “legendary” pode divergir da raridade interna de outros itens | https://eldenring.wiki.gg/wiki/Legendary_Sorceries_and_Incantations |

## Comparação de totais

| Fonte | Feitiços base | Feitiços DLC | Feitiços total | Encantamentos base | Encantamentos DLC | Encantamentos total |
|---|---:|---:|---:|---:|---:|---:|
| Eldenpedia categorias + partição DLC | 70 | 14 | 84 | 101 | 28 | 129 |
| Fandom DLC | — | 14 | — | — | 28 | — |
| Windows Central 1.16 | — | 14 | — | — | 28 | — |
| Gamer Guides | — | 14 | — | — | 28 | — |
| Hugging Face/Kaggle agregado | — | — | 84 | — | — | 129 |
| FanAPI legado | não separa | 0 | 71 | não separa | 0 | 98 |

## Divergências

O FanAPI legado não representa o inventário atual: nos Feitiços contém o alias singular \`Oracle Bubble\` além de \`Oracle Bubbles\` e usa nomes antigos como \`Terra Magicus\`; nos Encantamentos contém grafias duplicadas de \`Ekzykes's Decay\`, nomes antigos/errados e omite entradas. Seus totais 71/98 foram rejeitados como autoridade.

As categorias do Eldenpedia reportam 93/146 membros brutos, mas incluem as páginas principais e 8/16 páginas de subcategorias. A filtragem por namespace e remoção dessas páginas produz exatamente 84/129 itens.

“Lendária” usa provisoriamente o conjunto da conquista (4+3). A página de raridade interna atribui “Legendary” a outros itens; essa diferença precisa de aprovação antes do filtro de produção.

Nenhuma fonte foi tratada como tradução oficial pt-BR. Nenhum dump proprietário, descrição extensa, escola ou catalisador foi incorporado.
`;

const fullReview = `# Revisão completa — Feitiços e Encantamentos

## Aviso

Este é um catálogo documental de pesquisa, não catálogo de produção. A revisão usa a Regulation **1.16.1** como referência temporal. Nomes pt-BR, dano, duração, condições, preços, drops e diferenças PvP continuam majoritariamente pendentes.

## Totais consolidados

| Categoria | Jogo base | Shadow of the Erdtree | Total |
|---|---:|---:|---:|
| Feitiços | ${totals.sorceries.base} | ${totals.sorceries.dlc} | ${totals.sorceries.total} |
| Encantamentos | ${totals.incantations.base} | ${totals.incantations.dlc} | ${totals.incantations.total} |
| Magias | ${totals.sorceries.base + totals.incantations.base} | ${totals.sorceries.dlc + totals.incantations.dlc} | ${all.length} |

Total futuro do aplicativo: **${futureTotal}** = 208 Chefes + 116 Cinzas + 84 Feitiços + 129 Encantamentos. O aplicativo continua em 324 nesta fase.

## Confiança agregada

Contagem de todos os marcadores explícitos de status dos dois JSONs:

| confirmed | probable | pending | disputed |
|---:|---:|---:|---:|
| ${statusCounts(all).confirmed} | ${statusCounts(all).probable} | ${statusCounts(all).pending} | ${statusCounts(all).disputed} |

- pt-BR: 213 nomes pendentes; nenhum candidato aprovado.
- Lendárias pelo critério da conquista: **7** (4 Feitiços e 3 Encantamentos).
- Perdíveis confirmadas: **0**. Oito entradas são candidatas \`probable\` e 205 permanecem \`pending\`; nenhuma candidata foi promovida a confirmação sem evidência direta suficiente.

## Feitiços — lista completa

| ID | Nome inglês | Origem | FP | Slots | INT | FÉ | ARC | Lendária | Perdível |
|---|---|---|---:|---:|---:|---:|---:|---|---|
${listTable(sorceries.entries)}

## Encantamentos — lista completa

| ID | Nome inglês | Origem | FP | Slots | INT | FÉ | ARC | Lendária | Perdível |
|---|---|---|---:|---:|---:|---:|---:|---|---|
${listTable(incantations.entries)}

## Inclusões, exclusões e duplicidades

Foram incluídas apenas as 213 páginas que correspondem a itens de magia colecionáveis. Páginas principais e subcategorias foram removidas. Não foram incluídos ataques de inimigos, projéteis auxiliares, habilidades, conteúdo cortado, passivos ou registros internos.

Aliases do FanAPI (\`Oracle Bubble\`/\`Oracle Bubbles\`, três grafias de \`Ekzykes's Decay\`) não geraram entradas extras. Nomes canônicos seguem as páginas atuais do Eldenpedia.

## Pendências para aprovação

1. Aprovar os totais 70/14 e 101/28.
2. Aprovar IDs prefixados por domínio.
3. Confirmar o uso definitivo do conjunto da conquista para “Lendária” (quatro Feitiços e três Encantamentos).
4. Aprovar ou rejeitar os oito candidatos perdíveis marcados \`probable\`.
5. Aprovar campo a campo FP, slots, requisitos e stamina marcados \`probable\`.
6. Pesquisar pt-BR por fonte pública autorizada; até lá, fallback inglês.
7. Revisar obtenções alternativas, NPCs, locais, dano e duração.
`;

const implementationPlan = `# Plano de implementação futura — Feitiços e Encantamentos

## Estado da implementação

O MVP foi implementado com 84 Feitiços, 129 Encantamentos, schema v3, progresso geral 537, rotas, Home, Drawer, busca, filtros, detalhes, spoilers e testes. A revisão manual no Expo Go foi concluída e aprovada em temas Claro, Escuro e Sistema. As limitações documentais continuam explícitas: 153 localizações pendentes, fallback inglês, dados técnicos adiados e nenhuma entrada confirmada como Perdível.

## Princípios

Feitiços e Encantamentos são domínios separados. Nenhuma escola, família, catalisador ou abstração genérica excessiva será introduzida. Cada etapa depende de aprovação explícita e deve poder ser revertida isoladamente.

| Etapa | Entrega futura | Dependências e riscos | Critério de aceite | Rollback |
|---:|---|---|---|---|
| 1 | Aprovação dos catálogos | resolver lendárias, perdíveis e pt-BR | totais e IDs aprovados | manter somente pesquisa |
| 2 | Tipos separados | risco de modelo documental excessivo | tipos sem campos proibidos | remover novos módulos |
| 3 | Importação dos dados | risco de transcrição | 84/129 e IDs exatos | reverter arquivos de dados |
| 4 | Validadores de produção | risco de aceitar nulos indevidos | totais, IDs e invariantes cobertos | reverter validadores |
| 5 | Schema v3 | concorrência e compatibilidade | quatro arrays persistidos | manter schema v2 |
| 6 | Migração v2→v3 | perda de progresso anterior | idempotente, arrays novos vazios | restaurar loader v2 |
| 7 | Hooks de progresso | sobrescrita entre categorias | filas e rollback isolado | remover novas ações |
| 8 | Cards | layout e acessibilidade | conteúdo compacto aprovado | remover componentes novos |
| 9 | Listas | virtualização e estado | totais, seções e rolagem preservados | remover rotas/listas |
| 10 | Detalhes | nulos e fallback | só campos disponíveis, aviso único | remover detalhes |
| 11 | Busca bilíngue | índice grande ou conteúdo indevido | nome/local/NPC/fonte nos dois idiomas | retirar seletor |
| 12 | Filtros | semântica AND | todos os filtros por interseção | retirar filtros novos |
| 13 | Drawer | acordeões e rotas ativas | ordem fixa e exclusividade | restaurar Drawer anterior |
| 14 | Home | quatro cards | valores independentes | restaurar dois cards |
| 15 | Progresso geral | denominador dinâmico | total ${futureTotal} com catálogos aprovados | voltar a 324 |
| 16 | Reset | preservar preferências | limpar quatro categorias, não usar clear | restaurar reset v2 |
| 17 | Acessibilidade | ícones e foco | ícones decorativos, ações rotuladas | remover ajustes novos |
| 18 | Testes | regressões e novos domínios | baseline preservado e matriz completa | reverter etapa falha |
| 19 | Revisão Expo Go | tema, idioma, navegação | roteiro manual aprovado | corrigir antes de commit |
| 20 | Commit final | escopo indevido | diff funcional aprovado | não criar commit |

## Reutilização

Reutilizar barra/card horizontal de progresso, normalização de busca, filtros básicos, estado vazio e padrões de lista virtualizada. Cards e detalhes devem permanecer especializados por categoria. Não transformar BossCard ou AshOfWarCard em entidade genérica.

## Matriz de testes futura

- catálogo: IDs, totais, origens, ausência de duplicatas, escolas/famílias/catalisadores;
- busca: inglês, pt-BR, cruzada, NPC, local e fonte;
- ordenação: locale ativo e ID como desempate;
- filtros: Lendárias, Perdíveis, INT, FÉ, ARC e todas as combinações AND;
- progresso: separado, geral, IDs desconhecidos, demo IDs e percentuais seguros;
- migração: v2→v3, idempotência, preservação anterior e arrays novos vazios;
- persistência: serialização, atualização otimista e rollback isolado;
- reset: quatro categorias, idioma e tema preservados, sem \`AsyncStorage.clear()\`;
- navegação: seis rotas de lista e duas dinâmicas por domínio (oito rotas de lista/pacote combinadas e dois padrões dinâmicos);
- interface: cards compactos, detalhes opcionais, fallback e acessibilidade;
- regressão: 26 regiões, 208 Chefes, 116 Cinzas e total atual 324 até integração.

## Estado

As etapas do MVP e a revisão manual foram concluídas. O commit final depende da auditoria automatizada integral; nenhuma dependência nova foi adicionada.
`;

const missableCandidates = all.filter((entry) => entry.missable.value === true);
const legendaryEntries = all.filter((entry) => entry.legendary.value === true);
const detailedReview = `# Revisão documental detalhada — Feitiços e Encantamentos

## Escopo e metodologia

Foram revisadas as 213 entradas aprovadas: 84 Feitiços (70/14) e 129 Encantamentos (101/28). Identidade, origem e campos estruturados foram confrontados com inventários públicos; a Regulation 1.16.1 é a versão oficial mais recente encontrada. Valores de uma única fonte comunitária permanecem \`probable\`; ausência de evidência usa \`pending\`.

Nenhum arquivo interno, ferramenta de extração, dump, descrição integral, escola, família, cajado, selo ou catalisador foi usado. Os nomes pt-BR continuam nulos.

## Auditoria de confiança — Feitiços

| Grupo | confirmed | probable | pending | disputed |
|---|---:|---:|---:|---:|
${groupedStatusTable(sorceries.entries)}

## Auditoria de confiança — Encantamentos

| Grupo | confirmed | probable | pending | disputed |
|---|---:|---:|---:|---:|
${groupedStatusTable(incantations.entries)}

## Auditoria combinada

| Grupo | confirmed | probable | pending | disputed |
|---|---:|---:|---:|---:|
${groupedStatusTable(all)}

## Lendárias

O conjunto segue exclusivamente a conquista oficial:

${legendaryEntries.map((entry) => `- \`${entry.id}\` — ${entry.name.en}`).join('\n')}

Resultado: quatro Feitiços, três Encantamentos e sete no total.

## Candidatos perdíveis

Nenhuma entrada está \`confirmed\` como perdível. Os seguintes casos permanecem \`probable\`:

${missableCandidates.map((entry) => `- \`${entry.id}\` — ${entry.name.en}: ${entry.missable.explanation.en}`).join('\n')}

As outras ${all.length - missableCandidates.length} entradas permanecem \`pending\`, inclusive quando a obtenção parece permanente: esta revisão não usa \`false\` como sinônimo de “não pesquisado”. Compras por pergaminho/livro, Sinos de Mercador, Lembranças duplicáveis e drops repetíveis não devem ser classificados como perdíveis sem prova de bloqueio definitivo.

## Campos revisados e limitações

- Identidade, categoria e origem: revisadas para todas as entradas.
- FP, slots, requisitos e stamina: valores estruturados revisados, mas mantidos \`probable\` por dependerem principalmente de uma fonte comunitária atual.
- Local, aquisição, preço, drop, duração, dano, condições, cura/buffs, restrições, alcance, interações e PvP: representados explicitamente; valores sem sustentação suficiente permanecem \`pending\`.
- Requisitos ausentes na tabela pública são zero com nota explícita; \`null\` fica reservado a desconhecido ou não aplicável.
- Nenhum valor numérico de dano foi modelado.
- A fonte principal futura do card deve preferir item intermediário e local, Lembrança/chefe ou inimigo/local, conforme as regras aprovadas.

## Critérios para futura aprovação

Cada campo deve ser aprovado isoladamente. Dados \`probable\` precisam de segunda fonte independente ou evidência direta; candidatos perdíveis precisam de verificação completa de recuperação e alternativas; pt-BR exige evidência oficial. IDs, totais e progresso não mudam com localização posterior.
`;

function checklistSection(title, entries) {
  return `## ${title}

| ID | Nome inglês | Origem | Localização do card | Conf. local | Fonte principal | Conf. fonte | Alternativas | Local de Graça | Forma | Passos | Disponibilidade | Spoiler | Perdível | Pendências |
|---|---|---|---|---|---|---|---:|---|---|---|---|---|---|---|
${compactChecklist(entries)}`;
}

const approvalChecklist = `# Checklist de aprovação — Feitiços e Encantamentos

Este checklist documental contém exatamente 213 entradas. A ordem é categoria, origem, nome inglês e ID.

${checklistSection('Feitiços — jogo base', sorceries.entries.filter((entry) => entry.contentPack === 'base-game'))}

${checklistSection('Feitiços — Shadow of the Erdtree', sorceries.entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree'))}

${checklistSection('Encantamentos — jogo base', incantations.entries.filter((entry) => entry.contentPack === 'base-game'))}

${checklistSection('Encantamentos — Shadow of the Erdtree', incantations.entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree'))}
`;

function acquisitionReviewTable(entries) {
  return entries.map((entry) => {
    const primary = entry.acquisitionMethods[entry.primaryAcquisition?.methodIndex ?? 0];
    return `| \`${entry.id}\` | ${entry.name.en} | ${entry.primaryLocation.en ?? 'pendente'} | ${entry.primaryLocation.enStatus} | ${entry.primarySource.en ?? 'pendente'} | ${entry.primarySource.enStatus} | ${primary?.method.en ?? 'pendente'} | ${primary?.status ?? 'pending'} | ${entry.acquisitionMethods.length} | ${primary?.nearestSiteOfGrace.en ?? 'pendente'} | ${primary?.steps.complete ? 'sim' : 'não'} | ${primary?.containsQuestSpoilers.value ? 'sim' : 'não'} |`;
  }).join('\n');
}

function acquisitionReviewSection(title, entries) {
  return `## ${title}

| ID | Nome | Localização | Conf. local | Fonte principal | Conf. fonte | Forma | Conf. forma | Alternativas | Local de Graça | Passos completos | Spoiler |
|---|---|---|---|---|---|---|---|---:|---|---|---|
${acquisitionReviewTable(entries)}`;
}

const sorceryAcquisitionStats = acquisitionStatistics(sorceries.entries);
const incantationAcquisitionStats = acquisitionStatistics(incantations.entries);
const combinedAcquisitionStats = acquisitionStatistics(all);

const locationsReview = `# Revisão de localizações e aquisições — Feitiços e Encantamentos

## Metodologia e confirmação

As 213 entradas foram mantidas. O Eldenpedia sustenta a fonte inicial; PowerPyx e Game8 foram usados como fontes editoriais independentes para o jogo base; Gamer Guides e GameSpot foram usados para a expansão. Concordância geral de inventário não foi tratada como confirmação automática de cada subcampo: sem cotejo individual específico, o valor permanece \`probable\`.

Nenhum vídeo foi usado. A referência temporal continua sendo a Regulation 1.16.1. Textos são sínteses próprias e campos sem evidência suficiente permanecem \`pending\`.

## Estatísticas

| Categoria | Local confirmed/probable/pending/disputed | Fonte confirmed/probable/pending/disputed | Forma confirmed/probable/pending/disputed | Local MVP | Sem local MVP | Passos completos | Múltiplas alternativas | Graças | NPC | Itens intermediários | Drops | Chefes | Lembranças | Spoilers | Aliases |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Feitiços | ${Object.values(sorceryAcquisitionStats.locations).join('/')} | ${Object.values(sorceryAcquisitionStats.primarySources).join('/')} | ${Object.values(sorceryAcquisitionStats.acquisitionMethods).join('/')} | ${sorceryAcquisitionStats.withMvpLocation} | ${sorceryAcquisitionStats.withoutMvpLocation} | ${sorceryAcquisitionStats.completeSteps} | ${sorceryAcquisitionStats.multipleAlternatives} | ${sorceryAcquisitionStats.withSiteOfGrace} | ${sorceryAcquisitionStats.withNpc} | ${sorceryAcquisitionStats.withIntermediateItem} | ${sorceryAcquisitionStats.drops} | ${sorceryAcquisitionStats.bossRewards} | ${sorceryAcquisitionStats.remembranceExchanges} | ${sorceryAcquisitionStats.spoilerAcquisitions} | ${sorceryAcquisitionStats.locationAliases} |
| Encantamentos | ${Object.values(incantationAcquisitionStats.locations).join('/')} | ${Object.values(incantationAcquisitionStats.primarySources).join('/')} | ${Object.values(incantationAcquisitionStats.acquisitionMethods).join('/')} | ${incantationAcquisitionStats.withMvpLocation} | ${incantationAcquisitionStats.withoutMvpLocation} | ${incantationAcquisitionStats.completeSteps} | ${incantationAcquisitionStats.multipleAlternatives} | ${incantationAcquisitionStats.withSiteOfGrace} | ${incantationAcquisitionStats.withNpc} | ${incantationAcquisitionStats.withIntermediateItem} | ${incantationAcquisitionStats.drops} | ${incantationAcquisitionStats.bossRewards} | ${incantationAcquisitionStats.remembranceExchanges} | ${incantationAcquisitionStats.spoilerAcquisitions} | ${incantationAcquisitionStats.locationAliases} |

## Independência e limitações das fontes

- Eldenpedia/wiki.gg e Fandom não foram contados como duas confirmações quando compartilham conteúdo histórico.
- PowerPyx e Game8 são editorialmente separados, porém antigos ou resumidos em partes; servem para cruzamento, não para promoção indiscriminada.
- Gamer Guides e GameSpot cobrem a expansão de forma independente, mas a revisão não copiou seus roteiros.
- Ausência de Local de Graça ou passos completos impede considerar a entrada pronta para o MVP, mesmo quando a fonte resumida é provável.

${acquisitionReviewSection('Feitiços — jogo base', sorceries.entries.filter((entry) => entry.contentPack === 'base-game'))}

${acquisitionReviewSection('Feitiços — Shadow of the Erdtree', sorceries.entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree'))}

${acquisitionReviewSection('Encantamentos — jogo base', incantations.entries.filter((entry) => entry.contentPack === 'base-game'))}

${acquisitionReviewSection('Encantamentos — Shadow of the Erdtree', incantations.entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree'))}

## Perdibilidade e spoilers

Os oito casos anteriores permanecem candidatos \`probable\`; nenhum foi confirmado nesta passagem. ${combinedAcquisitionStats.spoilerAcquisitions} entradas possuem aquisição potencialmente reveladora de desfecho de missão e texto neutro planejado para o card. Etiquetas não alteram automaticamente \`missable\`.

## Próximos campos necessários para o MVP

O critério mínimo ainda exige Local de Graça quando necessário, passos completos e cotejo individual das alternativas. Dados técnicos, preços, drops, pt-BR e PvP não bloqueiam o MVP e não foram promovidos nesta etapa.
`;

const mvpDecisions = `# Decisões do MVP — Feitiços e Encantamentos

## Decisões aprovadas

- Cards mostram somente nome, localização/fonte, estado de coleta e ícone decorativo.
- Local comum usa \`Local — Região\`; ponto sem nome usa Local de Graça e referência curta.
- Detalhes mostram forma de obtenção e passos numerados.
- Alternativas são separadas; a principal, garantida e permanente aparece primeiro.
- Etiquetas permitidas: Permanente, Uma vez por jornada, Missão, Escolha exclusiva e NG+; múltiplas etiquetas são aceitas.
- pt-BR ausente usa fallback inglês e um único aviso nos detalhes.
- Conteúdo sensível fica recolhido ao abrir detalhes.
- Termos protegidos continuam pesquisáveis; o resultado usa “Correspondência em conteúdo com spoiler” sem revelar o termo.
- Filtros: Lendárias, Perdíveis, exige Inteligência, exige Fé e exige Arcano, combinados por AND.
- Não existem escolas, famílias ou classificações temáticas.
- Ícones: \`sparkles-outline\` para Feitiços, \`sunny-outline\` para Encantamentos e \`✓\` quando coletado.
- Estado: Coletado, Não coletado, Marcar como coletado e Desmarcar como coletado.
- FP, slots, requisitos, stamina, duração, dano, preços, drops, buffs, condições e PvP podem ser adiados sem bloquear o MVP.
- Telas gerais reutilizam filtros \`Base\` e \`DLC\`: nenhum ativo mostra todos, a seleção é exclusiva, novo toque limpa o filtro e as condições são combinadas por interseção.
- O progresso acompanha a origem visível; rotas específicas não mostram filtros de origem e o estado local permanece ao abrir detalhes e voltar.

## Decisões adiadas após o MVP

- Revisão das 153 localizações pendentes.
- Passos completos e Locais de Graça.
- Nomes e demais textos oficiais pt-BR.
- FP, espaços, requisitos e filtros por atributos.
- Preços, taxas de drop, stamina, duração, dano, condições, cura, regeneração, buffs e PvP.
- Confirmação dos oito candidatos documentais a Perdíveis.
- Melhorias visuais não essenciais posteriores à revisão aprovada.
- Apresentação visual e componente exato para expandir spoilers.
- Política de destaque de aliases na busca.
- Exibição de mais de um Local de Graça para alternativas extensas.
- Formatação visual de etiquetas múltiplas em telas estreitas.
- Exibição opcional de preços, taxas de drop e dados técnicos após confirmação.
- Integração de vídeos ou mapas externos; nenhum é necessário para o MVP.
`;

const outputs = {
  'docs/SORCERIES_AND_INCANTATIONS_RESEARCH_PLAN.md': researchPlan,
  'docs/SORCERIES_AND_INCANTATIONS_DATA_SOURCES.md': sources,
  'docs/SORCERIES_AND_INCANTATIONS_FULL_CATALOG_REVIEW.md': fullReview,
  'docs/SORCERIES_AND_INCANTATIONS_IMPLEMENTATION_PLAN.md': implementationPlan,
  'docs/SORCERIES_AND_INCANTATIONS_DETAILED_REVIEW.md': detailedReview,
  'docs/SORCERIES_AND_INCANTATIONS_APPROVAL_CHECKLIST.md': approvalChecklist,
  'docs/SORCERIES_AND_INCANTATIONS_LOCATIONS_AND_ACQUISITIONS_REVIEW.md': locationsReview,
  'docs/SORCERIES_AND_INCANTATIONS_MVP_DECISIONS.md': mvpDecisions,
};
for (const [relativePath, content] of Object.entries(outputs)) {
  fs.writeFileSync(path.join(root, relativePath), `${content.trimEnd()}\n`);
}

console.log(JSON.stringify({
  totals,
  futureTotal,
  fieldStatuses: {
    sorceries: statusCounts(sorceries.entries),
    incantations: statusCounts(incantations.entries),
    combined: statusCounts(all),
  },
  groupedStatuses: {
    sorceries: groupedStatusCounts(sorceries.entries),
    incantations: groupedStatusCounts(incantations.entries),
    combined: groupedStatusCounts(all),
  },
  legendary: legendaryEntries.length,
  missableProbable: missableCandidates.length,
  acquisitionStatistics: {
    sorceries: sorceryAcquisitionStats,
    incantations: incantationAcquisitionStats,
    combined: combinedAcquisitionStats,
  },
}, null, 2));

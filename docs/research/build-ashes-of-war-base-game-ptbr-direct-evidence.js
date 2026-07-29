const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PASS1_PATH = path.join(__dirname, 'ashes-of-war-base-game-ptbr-pass-1.json');
const OUTPUT_PATH = path.join(__dirname, 'ashes-of-war-base-game-ptbr-direct-evidence.json');
const REPORT_PATH = path.join(ROOT, 'docs', 'ASHES_OF_WAR_BASE_GAME_PTBR_DIRECT_EVIDENCE.md');
const CHECKLIST_PATH = path.join(ROOT, 'docs', 'ASHES_OF_WAR_PTBR_MANUAL_CAPTURE_CHECKLIST.md');
const SOURCES_PATH = path.join(ROOT, 'docs', 'ASHES_OF_WAR_DATA_SOURCES.md');
const CONSOLIDATION_DOCS = [
  'docs/ASHES_OF_WAR_RESEARCH_PLAN.md',
  'docs/ASHES_OF_WAR_FULL_CATALOG_REVIEW.md',
  'docs/ASHES_OF_WAR_IMPLEMENTATION_PLAN.md',
  'docs/PROJECT_SPEC.md',
  'docs/IMPLEMENTATION_PLAN.md',
].map((relativePath) => path.join(ROOT, relativePath));

const metadata = {
  platform: 'Steam Windows',
  appId: '1245620',
  buildId: '22984413',
  version: '2.6.2.0',
  analyzedAt: '2026-07-28',
};

const inspectedFiles = [
  {
    id: 'steam-app-manifest',
    internalPath: '<STEAM_LIBRARY>/steamapps/appmanifest_1245620.acf',
    sha256: 'E5384064022F93E94683862D7810086D1BBADB5630D38C035A41009880C4100F',
    size: 1167,
    format: 'Steam ACF/VDF manifest',
    tool: 'PowerShell Get-Content/Get-FileHash (read-only)',
    role: 'App ID, Build ID, depot metadata and configured language',
  },
  {
    id: 'game-data0-index',
    internalPath: '<ELDEN_RING_INSTALL>/Game/Data0.bhd',
    sha256: 'FBE82E31C36B7A58258A9D318D0A20D8AE626BEDA952811106C2B0029194981A',
    size: 1095168,
    format: 'FromSoftware BHD index',
    tool: 'PowerShell Get-Item/Get-FileHash (metadata only; container reader unavailable)',
    role: 'Index paired with Data0.bdt, expected to reference message containers',
  },
  {
    id: 'game-regulation',
    internalPath: '<ELDEN_RING_INSTALL>/Game/regulation.bin',
    sha256: '7B6D07C357B639C902D48403FFE3612DB35E0CF8D6FCC82D3FB24EA6EB6CF30A',
    size: 2036272,
    format: 'Elden Ring regulation binary',
    tool: 'PowerShell Get-Item/Get-FileHash (metadata only; regulation reader unavailable)',
    role: 'Required for record-to-message association',
  },
  {
    id: 'game-executable',
    internalPath: '<ELDEN_RING_INSTALL>/Game/eldenring.exe',
    sha256: '34102B1C08BB5F769A724427A6F70FE29B3B732C31CF73693F861C48D3492DDB',
    size: 86998096,
    format: 'Windows PE',
    tool: 'PowerShell VersionInfo/Get-FileHash (read-only)',
    role: 'Installed product version 2.6.2.0',
  },
];

const unavailableTool = {
  capability: 'Read Elden Ring BHD/BDT, DCX/BND/FMG and regulation records without modifying source files',
  searchedNames: ['WitchyBND', 'Yabber', 'UXM', 'Smithbox', 'DSMapStudio', 'SoulsFormats'],
  result: 'No suitable installed tool was found in PATH, global .NET tools, installed packages, program directories, or common user tool directories.',
};

function pendingDirectField(previous, includePreviousCandidate = false) {
  return {
    en: previous.en,
    ...(includePreviousCandidate ? { previousCandidatePtBR: previous.ptBRProposed } : {}),
    ptBRProposed: previous.ptBRProposed,
    status: includePreviousCandidate && previous.ptBRProposed ? 'probable' : 'pending',
    recordId: null,
    messageKey: null,
    evidenceFileRefs: [],
    evidenceNotes: [
      includePreviousCandidate
        ? 'Candidato preservado da primeira passagem; não foi promovido porque o contêiner de localização e o registro ativo não puderam ser lidos com segurança.'
        : 'Campo não confirmado: a ferramenta necessária para ler e associar localização, mensagens e registros ativos não está instalada.',
    ],
    divergences: [],
  };
}

const pass1 = JSON.parse(fs.readFileSync(PASS1_PATH, 'utf8'));
const entries = pass1.entries.map((entry) => ({
  id: entry.id,
  nameEn: entry.nameEn,
  contentPack: 'base-game',
  fields: {
    name: pendingDirectField(entry.fields.name, true),
    skillName: pendingDirectField(entry.fields.skillName),
    affinity: pendingDirectField(entry.fields.affinity),
    skillType: pendingDirectField(entry.fields.skillType),
    compatibleEquipment: entry.fields.compatibleEquipment.map((field) => pendingDirectField(field)),
  },
}));

const research = {
  researchVersion: 1,
  scope: 'base-game-ptbr-direct-evidence',
  ...metadata,
  installation: {
    located: true,
    steamRoot: '<STEAM_ROOT>',
    library: '<STEAM_LIBRARY>',
    installDirectory: '<ELDEN_RING_INSTALL>',
    manifest: '<STEAM_LIBRARY>/steamapps/appmanifest_1245620.acf',
    manifestSize: 1167,
    manifestModifiedAt: '2026-07-28T17:25:30-03:00',
    configuredLanguage: 'english',
  },
  evidenceFiles: inspectedFiles,
  toolAssessment: {
    suitableReaderFound: false,
    ...unavailableTool,
  },
  extraction: {
    attempted: false,
    temporaryDirectoryCreated: false,
    temporaryDirectoryRemoved: true,
    proprietaryFilesCopiedToRepository: false,
  },
  closure: {
    status: 'closed-by-user-decision',
    decidedAt: '2026-07-28',
    toolsWillNotBeInstalledOrDownloaded: true,
    gameWillNotBeStartedForCaptures: true,
    extractionWillNotBePerformed: true,
    productionCatalogRemainsUnchanged: true,
    resumeRequiresExplicitAuthorization: true,
  },
  entries,
};

function statuses(fields) {
  return ['confirmed', 'probable', 'pending', 'disputed'].map((status) =>
    fields.filter((field) => field.status === status).length);
}

function esc(value) {
  return String(value ?? '—').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

const groups = {
  names: entries.map((entry) => entry.fields.name),
  skills: entries.map((entry) => entry.fields.skillName),
  affinities: entries.map((entry) => entry.fields.affinity),
  types: entries.map((entry) => entry.fields.skillType),
  equipment: entries.flatMap((entry) => entry.fields.compatibleEquipment),
};

const rows = entries.map((entry) => {
  const f = entry.fields;
  const compatibilityStatus = [...new Set(f.compatibleEquipment.map((item) => item.status))].join(', ');
  return `| ${esc(entry.id)} | ${esc(entry.nameEn)} | ${esc(f.name.previousCandidatePtBR)} | ${esc(f.name.ptBRProposed)} | ${f.name.status} | ${f.skillName.status} | ${f.affinity.status} | ${f.skillType.status} | ${compatibilityStatus} | Não comparado diretamente: leitor de contêiner/regulation ausente. |`;
}).join('\n');

const [nc, np, nn, nd] = statuses(groups.names);
const [sc, sp, sn, sd] = statuses(groups.skills);
const [ac, ap, an, ad] = statuses(groups.affinities);
const [tc, tp, tn, td] = statuses(groups.types);
const [ec, ep, en, ed] = statuses(groups.equipment);

const report = `# Cinzas da Guerra — evidência direta pt-BR da instalação Steam

## Decisão final do usuário

Esta linha de pesquisa foi **encerrada por decisão do usuário** em 2026-07-28:

- nenhuma ferramenta será instalada ou baixada;
- os arquivos do jogo não serão extraídos;
- o jogo não será iniciado para capturas;
- arquivos da Steam, do jogo e saves não serão modificados;
- os 91 candidatos de nome permanecem \`probable\`;
- nenhum campo pt-BR foi confirmado por evidência direta;
- habilidades, afinidades, tipos e compatibilidades permanecem \`pending\`;
- o catálogo de produção continuará usando fallback em inglês;
- IDs e progresso permanecem inalterados;
- a pesquisa só poderá ser retomada mediante nova autorização explícita.

O resultado não representa validação oficial concluída.

## Objetivo e resultado

Esta investigação tentou vincular os cinco grupos de localização pt-BR das 91 Cinzas da Guerra do jogo base aos registros ativos da instalação legítima Steam/Windows. A instalação e os contêineres foram localizados, porém nenhuma ferramenta reconhecida e já instalada capaz de ler BHD/BDT, DCX/BND/FMG e regulation foi encontrada. Conforme as regras de segurança, a extração foi interrompida sem instalar ferramentas, improvisar parser ou executar binários desconhecidos.

Nenhum candidato anterior foi promovido a \`confirmed\`.

## Ambiente analisado

- Plataforma: **Steam/Windows**.
- App ID: **1245620**.
- Build ID: **22984413**.
- Versão do executável: **2.6.2.0**.
- Data da análise: **2026-07-28**.
- Manifesto: \`<STEAM_LIBRARY>/steamapps/appmanifest_1245620.acf\`.
- Instalação: \`<ELDEN_RING_INSTALL>\`.
- Idioma configurado no manifesto: \`english\`; os pacotes são contêineres multilíngues, mas o conteúdo pt-BR não pôde ser enumerado.
- Limitação de versão: a versão foi obtida de metadados PE do executável e o Build ID do manifesto; não houve leitura de metadados internos dos contêineres.

## Metodologia

1. Consulta somente leitura ao Registro do Windows, \`libraryfolders.vdf\` e manifesto do App ID.
2. Enumeração somente leitura dos arquivos da instalação.
3. Identificação de \`Data0.bhd/.bdt\` e \`regulation.bin\` como insumos necessários para mensagens e associação de registros.
4. Busca por ferramentas reconhecidas no PATH, ferramentas .NET globais, programas instalados, diretórios de programas e pastas usuais de ferramentas.
5. Interrupção antes da extração porque nenhum leitor adequado foi encontrado.
6. Hash SHA-256 somente dos arquivos pequenos ou indispensáveis efetivamente inspecionados; o \`Data0.bdt\` de aproximadamente 11,7 GB não foi copiado nem hashado.

## Ferramentas encontradas

Nenhuma ferramenta Souls adequada foi encontrada. Foram procurados WitchyBND, Yabber, UXM, Smithbox, DSMapStudio e SoulsFormats. PowerShell foi usado apenas para leitura de manifesto, metadados, versão e hashes; ele não fornece a capacidade segura de interpretar os formatos proprietários.

Capacidade ausente: **${unavailableTool.capability}**.

## Arquivos inspecionados e hashes

| ID | Caminho genérico | Formato | Tamanho | SHA-256 | Uso |
|---|---|---|---:|---|---|
${inspectedFiles.map((file) => `| \`${file.id}\` | \`${file.internalPath}\` | ${file.format} | ${file.size} | \`${file.sha256}\` | ${file.role} |`).join('\n')}

Arquivos relevantes localizados, mas não lidos internamente: \`Data0.bdt\`, demais pares \`Data1..3.bhd/.bdt\`, \`DLC.bhd/.bdt\` e pares de áudio. Nenhum FMG ou msgbnd solto foi encontrado.

## Método de associação necessário

Uma confirmação futura precisa:

1. enumerar no índice \`Data0.bhd\` somente os contêineres de mensagens;
2. extrair para \`<TEMP_EXTRACTION_DIR>\` apenas os msgbnd pt-BR e inglês;
3. ler FMGs e suas chaves;
4. ler \`regulation.bin\` para relacionar registros das Cinzas, habilidades e permissões de equipamento às chaves de mensagem;
5. distinguir registros ativos, órfãos e duplicados;
6. comparar o texto pt-BR e inglês pelo mesmo identificador interno;
7. apagar o diretório temporário específico.

Sem os passos 1–4, a presença de um texto no pacote não prova que ele pertence ao registro ativo.

## Totais por campo

| Grupo | confirmed | probable | pending | disputed |
|---|---:|---:|---:|---:|
| Nomes | ${nc} | ${np} | ${nn} | ${nd} |
| Habilidades | ${sc} | ${sp} | ${sn} | ${sd} |
| Afinidades | ${ac} | ${ap} | ${an} | ${ad} |
| Tipos | ${tc} | ${tp} | ${tn} | ${td} |
| Equipamentos compatíveis (itens) | ${ec} | ${ep} | ${en} | ${ed} |

## Tabela completa e comparação com a primeira passagem

| ID | Nome inglês | Candidato anterior | Texto direto | Status do nome | Habilidade | Afinidade | Tipo | Compatibilidade | Comparação/justificativa |
|---|---|---|---|---|---|---|---|---|---|
${rows}

## Comparação dos candidatos anteriores

- Correspondências diretas confirmadas: **0**.
- Candidatos corrigidos por evidência direta: **0**.
- Candidatos ainda aguardando verificação direta: **91**.
- Diferenças de acentuação, capitalização, pontuação, hífen, singular/plural ou tradução: **não determináveis sem leitura dos FMGs**.

O histórico da primeira passagem não foi alterado.

## Divergências, textos órfãos e antigos

Nenhuma divergência nova pôde ser determinada. Também não foi possível enumerar textos órfãos, antigos ou duplicados porque os contêineres não foram abertos.

## Campos pendentes e recomendações

Nenhum campo é recomendado para aprovação como \`confirmed\`. Os 91 nomes anteriores permanecem apenas \`probable\`; habilidades, afinidades, tipos e compatibilidades permanecem \`pending\`.

Não devem ser alterados catálogo de produção, IDs, progresso, interface ou traduções de produção.

## Limpeza e não redistribuição

Nenhum diretório temporário foi criado, pois a pesquisa foi interrompida antes da extração. Portanto, não havia arquivo proprietário temporário a apagar. Nenhum arquivo da instalação foi copiado para o repositório e nenhum dump completo foi versionado. Foram preservados somente hashes, tamanhos, metadados e identificadores técnicos.

## Próxima etapa

**Manter o fallback em inglês para as Cinzas da Guerra e retomar a validação oficial pt-BR somente mediante nova autorização explícita do usuário.**
`;

const fieldChecklist = [
  ['Nome da Cinza da Guerra', 'Inventário > Cinzas da Guerra ou menu de aplicação', 'Mostrar nome completo da entrada e idioma pt-BR', 'alta'],
  ['Nome da habilidade', 'Detalhes da Cinza/arma com a Cinza aplicada', 'Mostrar o rótulo da habilidade e o texto completo do nome', 'alta'],
  ['Afinidade', 'Menu de aplicação da Cinza da Guerra', 'Mostrar afinidade selecionada/oferecida e a entrada identificável', 'alta'],
  ['Tipo/categoria da habilidade', 'Tela que apresente a categoria da habilidade, se existente', 'Mostrar rótulo e valor da categoria junto da entrada', 'média'],
  ['Equipamentos compatíveis', 'Menu de aplicação ou descrição de compatibilidade', 'Mostrar as categorias compatíveis sem inferência a partir da arma atual', 'média'],
];

const checklistRows = entries.flatMap((entry) => fieldChecklist.map(([field, screen, proof, priority]) =>
  `| ${esc(entry.nameEn)} | ${field} | ${screen} | Abrir a entrada em pt-BR sem alterar o estado do jogo e capturar a tela. | ${field === 'Nome da Cinza da Guerra' ? esc(entry.fields.name.previousCandidatePtBR) : '—'} | Arquivos não lidos; associação ativa não comprovada. | Manifesto/contêineres localizados, sem FMG extraído. | ${proof} | ${priority} |`
)).join('\n');

const checklist = `# Checklist de capturas manuais — Cinzas da Guerra pt-BR

## Estado do checklist

O checklist está **arquivado como referência futura**. Ele não será executado agora, o jogo não será iniciado e nenhuma captura será solicitada nesta etapa. Não constitui trabalho pendente imediato. Qualquer retomada exige nova autorização explícita do usuário.

## Uso

Este checklist só é necessário se a futura leitura dos arquivos não comprovar que os textos correspondem aos registros ativos. O jogo não foi iniciado nesta pesquisa. As capturas devem mostrar claramente idioma, entrada, campo e texto completo, sem expor dados pessoais.

Não são solicitadas capturas para campos já confirmados; atualmente nenhum campo atingiu esse status.

| Cinza da Guerra | Campo | Menu/tela esperada | Ação necessária | Texto candidato | Motivo | Evidência de arquivo disponível | A captura precisa mostrar | Prioridade |
|---|---|---|---|---|---|---|---|---|
${checklistRows}

## Observação

Antes de executar as 455 verificações, deve-se obter autorização explícita para instalar uma ferramenta confiável de leitura. A extração e associação direta poderão eliminar grande parte deste checklist; somente os campos ainda ambíguos deverão ser capturados manualmente.
`;

function updateSources() {
  const current = fs.readFileSync(SOURCES_PATH, 'utf8');
  const marker = '## Instalação local Steam — evidência direta pt-BR';
  if (current.includes(marker)) return;
  const firstBreak = current.indexOf('\n');
  const section = `

${marker}

- **Fonte:** instalação local legítima do Elden Ring, somente leitura.
- **Plataforma:** Steam/Windows; App ID \`1245620\`; Build ID \`22984413\`; executável versão \`2.6.2.0\`; análise em 2026-07-28.
- **Manifesto:** \`<STEAM_LIBRARY>/steamapps/appmanifest_1245620.acf\`; SHA-256 \`E5384064022F93E94683862D7810086D1BBADB5630D38C035A41009880C4100F\`.
- **Arquivos relevantes:** \`<ELDEN_RING_INSTALL>/Game/Data0.bhd\` (SHA-256 \`FBE82E31C36B7A58258A9D318D0A20D8AE626BEDA952811106C2B0029194981A\`) e \`regulation.bin\` (SHA-256 \`7B6D07C357B639C902D48403FFE3612DB35E0CF8D6FCC82D3FB24EA6EB6CF30A\`).
- **Ferramentas:** PowerShell apenas para metadados e hashes. Nenhum leitor confiável de BHD/BDT, DCX/BND/FMG e regulation foi encontrado instalado.
- **Resultado:** fonte primária localizada, mas conteúdo de localização não extraído; nenhum campo foi confirmado diretamente.
- **Limitações:** manifesto configurado em inglês; pacotes multilíngues não puderam ser enumerados; associação entre mensagens e registros ativos depende de ferramenta ausente.
- **Não redistribuição:** nenhum arquivo proprietário foi copiado, versionado ou publicado; somente hashes, tamanhos e metadados foram preservados.
`;
  fs.writeFileSync(SOURCES_PATH, `${current.slice(0, firstBreak)}${section}${current.slice(firstBreak)}`);
}

function updateSourcesClosure() {
  const marker = '## Encerramento por decisão do usuário';
  const current = fs.readFileSync(SOURCES_PATH, 'utf8');
  if (current.includes(marker)) return;
  const firstBreak = current.indexOf('\n');
  const section = `

${marker}

Em 2026-07-28, o usuário decidiu não autorizar instalação ou download de ferramentas, extração de arquivos do jogo ou capturas iniciando o Elden Ring. A fonte primária local permaneceu somente em modo leitura e nenhum texto pt-BR pôde ser associado diretamente aos registros ativos. Os 91 nomes anteriores continuam \`probable\`; os demais grupos continuam \`pending\`. A pesquisa fica encerrada e só poderá ser retomada mediante nova autorização explícita. O fallback inglês do catálogo de produção permanece inalterado.
`;
  fs.writeFileSync(SOURCES_PATH, `${current.slice(0, firstBreak)}${section}${current.slice(firstBreak)}`);
}

function updateConsolidationDocuments() {
  const marker = '## Encerramento da pesquisa pt-BR das Cinzas da Guerra';
  const section = `

${marker}

Em 2026-07-28, o usuário decidiu encerrar esta linha de pesquisa sem autorizar
instalação ou download de ferramentas, extração dos arquivos do jogo ou
capturas iniciando o Elden Ring. A instalação Steam/Windows foi identificada
com App ID \`1245620\`, Build ID \`22984413\` e executável \`2.6.2.0\`, mas
nenhuma ferramenta adequada para BHD/BDT, DCX/BND/FMG e regulation estava
instalada.

Nenhum campo pt-BR foi confirmado por evidência direta. Os 91 candidatos de
nome do jogo base permanecem \`probable\`; habilidades, afinidades, tipos e
compatibilidades permanecem \`pending\`. A pesquisa não deve ser apresentada
como concluída ou oficialmente validada. O catálogo de produção, IDs e
progresso não foram alterados, o fallback inglês permanece ativo e nenhuma
alteração funcional é necessária. O aplicativo permanece estável com os dados
atuais.

O checklist de 455 capturas fica arquivado somente como referência, sem trabalho
pendente imediato. A pesquisa só poderá ser retomada mediante nova autorização
explícita.

Próxima etapa:
\`Manter o fallback em inglês para as Cinzas da Guerra e retomar a validação oficial pt-BR somente mediante nova autorização explícita do usuário.\`
`;
  for (const documentPath of CONSOLIDATION_DOCS) {
    const current = fs.readFileSync(documentPath, 'utf8');
    const updated = current.includes(marker) ? current : `${current.trimEnd()}${section.trimEnd()}`;
    fs.writeFileSync(documentPath, `${updated.trimEnd()}\n`);
  }
}

fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(research, null, 2)}\n`);
fs.writeFileSync(REPORT_PATH, report);
fs.writeFileSync(CHECKLIST_PATH, checklist);
updateSources();
updateSourcesClosure();
updateConsolidationDocuments();
console.log(`Generated direct-evidence research for ${entries.length} entries.`);

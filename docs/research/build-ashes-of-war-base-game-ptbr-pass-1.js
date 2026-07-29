const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const CATALOG_PATH = path.join(ROOT, 'src', 'data', 'ashes-of-war', 'ashesOfWar.ts');
const JSON_PATH = path.join(__dirname, 'ashes-of-war-base-game-ptbr-pass-1.json');
const REPORT_PATH = path.join(ROOT, 'docs', 'ASHES_OF_WAR_BASE_GAME_PTBR_PASS_1.md');
const SOURCES_PATH = path.join(ROOT, 'docs', 'ASHES_OF_WAR_DATA_SOURCES.md');

const SOURCE_REFS = {
  saika1: 'ptbr-saika-ashes-video-1',
  saika2: 'ptbr-saika-ashes-video-2',
  saika3: 'ptbr-saika-ashes-video-3',
};

const probableNames = {
  "Assassin's Gambit": ['Gambito do Assassino', SOURCE_REFS.saika1, '06:52'],
  'Barbaric Roar': ['Rugido de Bárbaro', SOURCE_REFS.saika1, '13:28'],
  Barrage: ['Barragem', SOURCE_REFS.saika3, '16:03'],
  'Barricade Shield': ['Escudo Barricada', SOURCE_REFS.saika3, '23:40'],
  "Beast's Roar": ['Rugido da Fera', SOURCE_REFS.saika1, '23:52'],
  'Black Flame Tornado': ['Tornado de Chama Negra', SOURCE_REFS.saika2, '21:40'],
  'Blood Blade': ['Lâmina de Sangue', SOURCE_REFS.saika3, '06:12'],
  'Blood Tax': ['Taxa de Sangue', SOURCE_REFS.saika3, '07:40'],
  "Bloodhound's Step": ['Passo do Cão de Caça', SOURCE_REFS.saika1, '21:48'],
  'Bloody Slash': ['Corte Sangrento', SOURCE_REFS.saika3, '06:54'],
  "Braggart's Roar": ['Grito do Exibido', SOURCE_REFS.saika1, '14:33'],
  'Carian Grandeur': ['Grandeza Cariana', SOURCE_REFS.saika2, '14:40'],
  'Carian Greatsword': ['Espada Grande Cariana', SOURCE_REFS.saika2, '12:10'],
  'Carian Retaliation': ['Retaliação Cariana', SOURCE_REFS.saika3, '25:14'],
  'Charge Forth': ['Investida Frontal', SOURCE_REFS.saika2, '00:00'],
  'Chilling Mist': ['Névoa Refrigeradora', SOURCE_REFS.saika3, '10:18'],
  Cragblade: ['Lâmina de Pedra', SOURCE_REFS.saika1, '09:58'],
  Determination: ['Determinação', SOURCE_REFS.saika2, '09:11'],
  'Double Slash': ['Corte Duplo', SOURCE_REFS.saika1, '19:14'],
  Earthshaker: ['Chacoalhador de Terra', SOURCE_REFS.saika1, '11:27'],
  'Enchanted Shot': ['Disparo Encantado', SOURCE_REFS.saika3, '17:43'],
  Endure: ['Resistência', SOURCE_REFS.saika1, '01:39'],
  Eruption: ['Erupção', SOURCE_REFS.saika1, '06:12'],
  'Flame of the Redmanes': ['Chama do Leão Vermelho', SOURCE_REFS.saika2, '19:50'],
  'Flaming Strike': ['Golpe Flamejante', SOURCE_REFS.saika2, '18:26'],
  'Giant Hunt': ['Caça de Gigantes', SOURCE_REFS.saika2, '02:43'],
  'Glintblade Phalanx': ['Falange de Laminante', SOURCE_REFS.saika2, '13:50'],
  'Glintstone Pebble': ['Calhau Pedrilhante', SOURCE_REFS.saika2, '12:10'],
  'Golden Land': ['Terra Dourada', SOURCE_REFS.saika2, '29:02'],
  'Golden Parry': ['Aparagem Dourada', SOURCE_REFS.saika3, '20:16'],
  'Golden Slam': ['Pancada Dourada', SOURCE_REFS.saika3, '00:00'],
  'Golden Vow': ['Voto Dourado', SOURCE_REFS.saika3, '01:04'],
  Gravitas: ['Gravitas', SOURCE_REFS.saika2, '17:25'],
  'Ground Slam': ['Pancada no Solo', SOURCE_REFS.saika1, '10:50'],
  "Hoarah Loux's Earthshaker": ['Chacoalhador de Terra de Hoarah Loux', SOURCE_REFS.saika1, '12:15'],
  'Hoarfrost Stomp': ['Pisão da Geada', SOURCE_REFS.saika3, '10:56'],
  'Holy Ground': ['Solo Sagrado', SOURCE_REFS.saika3, '02:47'],
  'Ice Spear': ['Lança de Gelo', SOURCE_REFS.saika3, '09:40'],
  'Impaling Thrust': ['Impulso Perfurante', SOURCE_REFS.saika1, '03:39'],
  Kick: ['Chute', SOURCE_REFS.saika1, '01:17'],
  'Lifesteal Fist': ['Punho Ladrão de Vida', SOURCE_REFS.saika3, '12:33'],
  'Lightning Ram': ['Carneiro do Relâmpago', SOURCE_REFS.saika2, '24:14'],
  'Lightning Slash': ['Corte de Relâmpago', SOURCE_REFS.saika2, '23:29'],
  "Lion's Claw": ['Garra de Leão', SOURCE_REFS.saika1, '09:11'],
  "Loretta's Slash": ['Corte de Loretta', SOURCE_REFS.saika2, '15:40'],
  'Mighty Shot': ['Disparo Poderoso', SOURCE_REFS.saika3, '14:19'],
  'No Skill': ['Nenhuma Habilidade', SOURCE_REFS.saika1, '05:06'],
  Parry: ['Aparar', SOURCE_REFS.saika1, '04:35'],
  'Phantom Slash': ['Corte Fantasma', SOURCE_REFS.saika2, '08:10'],
  'Piercing Fang': ['Presa Perfurante', SOURCE_REFS.saika1, '17:54'],
  'Poison Moth Flight': ['Voo da Mariposa Venenosa', SOURCE_REFS.saika3, '05:13'],
  'Poisonous Mist': ['Névoa Venenosa', SOURCE_REFS.saika3, '04:28'],
  'Prayerful Strike': ['Golpe Devoto', SOURCE_REFS.saika2, '25:41'],
  "Prelate's Charge": ['Investida do Prelado', SOURCE_REFS.saika2, '20:30'],
  Quickstep: ['Passo Ágil', SOURCE_REFS.saika1, '04:07'],
  'Rain of Arrows': ['Chuva de Flechas', SOURCE_REFS.saika3, '18:23'],
  'Raptor of the Mists': ['Ave de Rapina das Brumas', SOURCE_REFS.saika1, '22:55'],
  'Repeating Thrust': ['Impulso Repetitivo', SOURCE_REFS.saika1, '18:47'],
  "Royal Knight's Resolve": ['Determinação do Cavaleiro Real', SOURCE_REFS.saika2, '10:27'],
  'Sacred Blade': ['Lâmina Sagrada', SOURCE_REFS.saika2, '24:52'],
  'Sacred Order': ['Ordem Sagrada', SOURCE_REFS.saika2, '27:37'],
  'Sacred Ring of Light': ['Anel de Luz Sagrada', SOURCE_REFS.saika2, '26:56'],
  Seppuku: ['Seppuku', SOURCE_REFS.saika3, '08:40'],
  'Shared Order': ['Ordem Compartilhada', SOURCE_REFS.saika2, '28:22'],
  'Shield Bash': ['Batida com Escudo', SOURCE_REFS.saika3, '22:11'],
  'Shield Crash': ['Colisão de Escudo', SOURCE_REFS.saika3, '22:52'],
  'Sky Shot': ['Disparo do Céu', SOURCE_REFS.saika3, '16:50'],
  'Spectral Lance': ['Lança Espectral', SOURCE_REFS.saika3, '11:39'],
  'Spinning Slash': ['Corte Giratório', SOURCE_REFS.saika1, '02:51'],
  'Spinning Strikes': ['Golpes Giratórios', SOURCE_REFS.saika2, '01:21'],
  'Spinning Weapon': ['Arma Giratória', SOURCE_REFS.saika2, '12:10'],
  'Square Off': ['Enfrentar', SOURCE_REFS.saika1, '24:19'],
  'Stamp (Sweep)': ['Esmagamento (Em Arco)', SOURCE_REFS.saika1, '07:27'],
  'Stamp (Upward Cut)': ['Esmagamento (Corte para Cima)', SOURCE_REFS.saika1, '00:00'],
  'Storm Assault': ['Ataque da Tormenta', SOURCE_REFS.saika2, '03:57'],
  'Storm Blade': ['Lâmina Tempestuosa', SOURCE_REFS.saika1, '04:20'],
  'Storm Stomp': ['Pisão Tempestuoso', SOURCE_REFS.saika2, '06:10'],
  'Storm Wall': ['Parede de Tormenta', SOURCE_REFS.saika3, '21:18'],
  Stormcaller: ['Invocador da Tempestade', SOURCE_REFS.saika2, '05:14'],
  'Sword Dance': ['Dança da Espada', SOURCE_REFS.saika1, '20:19'],
  "Thops's Barrier": ['Barreira de Thops', SOURCE_REFS.saika3, '24:32'],
  'Through and Through': ['Disparo Penetrante', SOURCE_REFS.saika3, '15:05'],
  Thunderbolt: ['Relâmpago', SOURCE_REFS.saika2, '22:36'],
  "Troll's Roar": ['Rugido do Troll', SOURCE_REFS.saika1, '16:56'],
  Unsheathe: ['Desembainhar', SOURCE_REFS.saika1, '21:10'],
  'Vacuum Slice': ['Corte de Vácuo', SOURCE_REFS.saika2, '07:18'],
  'Vow of the Indomitable': ['Voto do Indomável', SOURCE_REFS.saika3, '01:49'],
  'War Cry': ['Grito de Guerra', SOURCE_REFS.saika1, '02:04'],
  'Waves of Darkness': ['Ondas de Trevas', SOURCE_REFS.saika2, '16:25'],
  "White Shadow's Lure": ['Isca da Sombra Branca', SOURCE_REFS.saika3, '13:20'],
  'Wild Strikes': ['Golpes Selvagens', SOURCE_REFS.saika1, '08:19'],
};

function loadCatalog() {
  const source = fs.readFileSync(CATALOG_PATH, 'utf8');
  const match = source.match(/export const ashesOfWar\s*=\s*(\[[\s\S]*?\])\s*as const/);
  if (!match) throw new Error('Could not locate ashesOfWar catalog literal.');
  return JSON.parse(match[1]);
}

function pendingField(en) {
  return {
    en,
    ptBRProposed: null,
    status: 'pending',
    sourceRefs: [],
    evidenceNotes: ['Nenhuma evidência suficiente da localização oficial pt-BR foi localizada nesta passagem.'],
    divergences: [],
  };
}

function buildEntry(ash) {
  const candidate = probableNames[ash.name.en];
  if (!candidate) throw new Error(`Missing pt-BR name candidate for ${ash.name.en}`);
  const [ptBRProposed, sourceRef, timestamp] = candidate;
  return {
    id: ash.id,
    nameEn: ash.name.en,
    contentPack: ash.contentPack,
    fields: {
      name: {
        en: ash.name.en,
        ptBRProposed,
        status: 'probable',
        sourceRefs: [sourceRef],
        evidenceNotes: [
          `Índice comunitário de vídeo em pt-BR associa este texto à entrada no timestamp ${timestamp}; a fonte aparenta reproduzir a interface do jogo, mas não foi possível verificar diretamente o frame ou o arquivo de localização.`,
        ],
        divergences: [],
      },
      skillName: pendingField(ash.skillName.en),
      affinity: pendingField(ash.affinity.en),
      skillType: pendingField(ash.skillType?.en ?? null),
      compatibleEquipment: ash.compatibleEquipment.en.map((en) => pendingField(en)),
    },
  };
}

function fieldCounts(entries, selector) {
  return entries.flatMap(selector).reduce(
    (counts, field) => {
      counts[field.status] += 1;
      return counts;
    },
    { confirmed: 0, probable: 0, pending: 0, disputed: 0 },
  );
}

function countLine(label, counts) {
  return `| ${label} | ${counts.confirmed} | ${counts.probable} | ${counts.pending} | ${counts.disputed} |`;
}

function esc(value) {
  return String(value ?? '—').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

function buildReport(research) {
  const entries = research.entries;
  const counts = {
    names: fieldCounts(entries, (entry) => [entry.fields.name]),
    skills: fieldCounts(entries, (entry) => [entry.fields.skillName]),
    affinities: fieldCounts(entries, (entry) => [entry.fields.affinity]),
    types: fieldCounts(entries, (entry) => [entry.fields.skillType]),
    equipment: fieldCounts(entries, (entry) => entry.fields.compatibleEquipment),
  };
  const tableRows = entries.map((entry) => {
    const f = entry.fields;
    const equipmentPt = f.compatibleEquipment.map((item) => item.ptBRProposed ?? 'pendente').join('; ');
    const equipmentStatus = [...new Set(f.compatibleEquipment.map((item) => item.status))].join(', ');
    const refs = [...new Set(Object.values(f).flatMap((value) =>
      Array.isArray(value) ? value.flatMap((item) => item.sourceRefs) : value.sourceRefs,
    ))].join(', ');
    return `| ${esc(entry.id)} | ${esc(entry.nameEn)} | ${esc(f.name.ptBRProposed)} | ${f.name.status} | ${esc(f.skillName.en)} | ${esc(f.skillName.ptBRProposed)} | ${f.skillName.status} | ${esc(f.affinity.en)} | ${esc(f.affinity.ptBRProposed)} | ${f.affinity.status} | ${esc(f.skillType.en)} | ${esc(f.skillType.ptBRProposed)} | ${f.skillType.status} | ${esc(equipmentPt)} | ${equipmentStatus} | ${esc(refs)} | Evidência secundária apenas para o nome; demais grupos pendentes. |`;
  });
  const probableValues = entries.map((entry) => `- \`${entry.id}\`: **${entry.fields.name.ptBRProposed}** (${entry.nameEn})`).join('\n');
  const details = entries.map((entry) => {
    const name = entry.fields.name;
    return `### ${entry.nameEn} (\`${entry.id}\`)\n\n- Nome proposto: **${name.ptBRProposed}** — \`${name.status}\`.\n- Evidência: ${name.evidenceNotes.join(' ')}\n- Referência: \`${name.sourceRefs.join('`, `')}\`.\n- Habilidade, afinidade, tipo e ${entry.fields.compatibleEquipment.length} item(ns) de compatibilidade: \`pending\`; nenhuma tradução foi inferida.\n- Divergências: nenhuma versão conflitante verificável localizada; a ausência de evidência primária impede confirmação.`;
  }).join('\n\n');
  return `# Cinzas da Guerra — jogo base — localização pt-BR — passagem 1\n\n## Objetivo e escopo\n\nEsta primeira passagem pesquisa, para as 91 Cinzas da Guerra colecionáveis do jogo base, nome, habilidade concedida, afinidade, tipo da habilidade e categorias de equipamentos compatíveis. Localização, obtenção, métodos alternativos, resumo, custo de FP, efeitos, limitações e observações gerais permanecem fora do escopo prioritário.\n\nNenhum dado de produção foi alterado. Os valores propostos abaixo exigem aprovação campo a campo antes de qualquer aplicação.\n\n## Metodologia e critérios\n\n- O catálogo de produção foi usado somente como referência de IDs e valores ingleses.\n- As entradas foram ordenadas pelo nome oficial em inglês com collation inglesa e ID como desempate.\n- Evidência direta da localização oficial pt-BR seria necessária para \`confirmed\`.\n- Os índices de vídeos da Saika Games fornecem candidatos fortes para os 91 nomes, mas não permitem verificar diretamente os frames nem os arquivos de localização; por isso todos permanecem \`probable\`.\n- Não se presumiu que nome da habilidade e nome da Cinza fossem iguais.\n- Afinidades, tipos e compatibilidades não foram traduzidos por inferência.\n- Ausência de evidência suficiente resulta em \`pending\`; nenhuma tradução livre foi apresentada como oficial.\n\n## Fontes\n\n- \`ptbr-steam-language-support\`: Steam, fonte oficial de distribuição; confirma suporte de interface e legendas em português do Brasil, mas não sustenta textos individuais.\n- \`ptbr-playstation-language-support\`: PlayStation Store Brasil, fonte oficial de distribuição; confirma Português (Brasil) entre os idiomas de tela, mas não sustenta textos individuais.\n- \`ptbr-saika-ashes-video-1\`, \`ptbr-saika-ashes-video-2\` e \`ptbr-saika-ashes-video-3\`: índices comunitários de vídeos de gameplay em pt-BR com nomes e timestamps; reprodução secundária, usada somente para candidatos \`probable\`.\n- \`ptbr-nexus-localization-workflow\` e \`ptbr-soulsmodding-localization-structure\`: documentação comunitária sobre estrutura e extração dos arquivos de localização; sustenta a metodologia de uma futura confirmação direta, não valores individuais.\n- \`ptbr-terra-localization-patch\`: notícia sobre correções oficiais de localização; documenta risco histórico de versões, sem sustentar valores individuais.\n\n## Totais por status e grupo\n\n| Grupo | confirmed | probable | pending | disputed |\n|---|---:|---:|---:|---:|\n${countLine('Nomes', counts.names)}\n${countLine('Habilidades', counts.skills)}\n${countLine('Afinidades', counts.affinities)}\n${countLine('Tipos', counts.types)}\n${countLine('Equipamentos compatíveis (itens)', counts.equipment)}\n\n- Entradas com os cinco grupos integralmente confirmados: **0**.\n- Entradas com todos os cinco grupos totalmente pendentes: **0** (todas possuem ao menos um nome provável).\n- Entradas sem qualquer campo confirmado: **91**.\n\n## Tabela completa\n\n| ID | Nome EN | Nome pt-BR proposto | Status nome | Habilidade EN | Habilidade pt-BR | Status habilidade | Afinidade EN | Afinidade pt-BR | Status afinidade | Tipo EN | Tipo pt-BR | Status tipo | Compatibilidade pt-BR | Status compatibilidade | Referências | Divergências/observações |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n${tableRows.join('\n')}\n\n## Detalhes de evidência e pendências\n\n${details}\n\n## Divergências\n\nNenhuma divergência verificável entre duas versões oficiais foi resolvida nesta passagem. Há, porém, uma limitação transversal: os candidatos da Saika Games não puderam ser confrontados com frames legíveis ou uma exportação direta dos arquivos pt-BR. Por isso nenhum nome foi promovido a \`confirmed\`. Grafia, capitalização e possíveis mudanças entre versões permanecem sujeitas a confirmação primária.\n\n## Confiança geral e limitações\n\nA confiança é **moderada** para os candidatos de nome e **baixa/insuficiente** para habilidade, afinidade, tipo e compatibilidade em pt-BR. As páginas oficiais confirmam a existência da localização brasileira, mas não publicam o léxico dos itens. A estrutura de arquivos documentada indica uma rota reproduzível para confirmação futura, porém os arquivos do jogo não estavam disponíveis no repositório e não foram obtidos nesta etapa.\n\n## Campos recomendados para aprovação\n\n### Nomes\n\n- Confirmados: **0**.\n- Prováveis: **91**.\n- Pendentes: **0**.\n- Disputados: **0**.\n\nValores prováveis, para revisão individual:\n\n${probableValues}\n\n### Habilidades\n\n- Confirmadas: **0**.\n- Prováveis: **0**.\n- Pendentes: **91**.\n- Disputadas: **0**.\n\nNenhuma habilidade é recomendada para aplicação.\n\n### Afinidades\n\n- Confirmadas: **0**.\n- Prováveis: **0**.\n- Pendentes: **91**.\n- Disputadas: **0**.\n\nNenhuma afinidade é recomendada para aplicação.\n\n### Tipos\n\n- Confirmados: **0**.\n- Prováveis: **0**.\n- Pendentes: **91**.\n- Disputados: **0**.\n\nO catálogo de produção não possui valor inglês de \`skillType\` para estas entradas; não foi criada taxonomia nova.\n\n### Equipamentos compatíveis\n\n- Itens confirmados: **0**.\n- Itens prováveis: **0**.\n- Itens pendentes: **${counts.equipment.pending}**.\n- Itens disputados: **0**.\n\nNenhuma categoria de equipamento é recomendada para aplicação.\n\n## Campos que não devem ser alterados\n\nNão alterar habilidade, afinidade, tipo, compatibilidade nem qualquer campo da segunda passagem. Os 91 nomes são apenas candidatos \`probable\`; não devem ser aplicados como oficiais sem aprovação explícita e, preferencialmente, confronto com evidência direta.\n\n## Plano reproduzível para aplicação futura (não executado)\n\n1. O usuário aprova campos individualmente por ID e grupo.\n2. Uma alteração manual e revisável preenche somente o \`ptBR\` aprovado no catálogo de produção.\n3. IDs, pacotes, valores ingleses, progresso e ordem física permanecem inalterados.\n4. Testes comparam os IDs e asseguram que busca continue incluindo pt-BR e inglês.\n5. O fallback deixa de atuar somente no campo preenchido; o aviso permanece enquanto qualquer campo exibível ainda depender do inglês.\n6. Localização, obtenção e demais campos da segunda passagem não são tocados.\n7. Cada lote é validado e apresentado em diff antes de commit.\n\nNão foi criado script de aplicação automática.\n\n## Declaração final\n\nEsta pesquisa não alterou catálogo, tipos, seletores, validadores, progresso, interface, IDs, traduções de produção ou dependências.\n\nPróxima etapa: **Apresentar ao usuário a primeira passagem pt-BR das 91 Cinzas da Guerra do jogo base para aprovação campo a campo antes de alterar o catálogo de produção.**\n`;
}

function updateSourcesDocument() {
  const marker = '## Fontes da primeira passagem pt-BR do jogo base';
  const current = fs.readFileSync(SOURCES_PATH, 'utf8');
  if (current.includes(marker)) return;
  const firstBreak = current.indexOf('\n');
  const section = `

${marker}

Consulta realizada em 2026-07-28. Os identificadores abaixo são referenciados por \`docs/research/ashes-of-war-base-game-ptbr-pass-1.json\`.

| ID | Nome | Tipo | Idioma/plataforma/versão | Campos sustentados | Evidência | Confiabilidade | Limitações | URL |
|---|---|---|---|---|---|---|---|---|
| \`ptbr-steam-language-support\` | Steam — ELDEN RING | loja/distribuidora oficial | pt-BR; PC; página consultada em 2026-07-28 | existência de interface e legendas oficiais em português do Brasil | direta para suporte de idioma; não contém entradas individuais | alta para suporte de idioma | não publica nomes, habilidades, afinidades, tipos ou compatibilidade | https://store.steampowered.com/app/1245620/ELDEN_RING/?curator_clanid=44939887&l=brazilian |
| \`ptbr-playstation-language-support\` | PlayStation Store Brasil — ELDEN RING | loja/distribuidora oficial | pt-BR; PS4/PS5; página consultada em 2026-07-28 | existência de Português (Brasil) nos idiomas de tela | direta para suporte de idioma; não contém entradas individuais | alta para suporte de idioma | não publica o léxico das Cinzas da Guerra | https://store.playstation.com/pt-br/product/UP0700-PPSA04610_00-ELDENRING0000000 |
| \`ptbr-saika-ashes-video-1\` | Saika Games — Elden Ring 100% Cinza da Guerra #1 | índice comunitário de vídeo/gameplay | pt-BR; plataforma e versão do jogo não informadas; consulta 2026-07-28 | candidatos de nomes para 31 entradas, com timestamps | reprodução secundária; a página associa nome e timestamp, mas o frame não foi verificado nesta pesquisa | média para descoberta; insuficiente para \`confirmed\` | não informa origem da tradução, versão, plataforma nem texto dos demais campos | https://saikagames.com.br/eldenringcinzadaguerra1/ |
| \`ptbr-saika-ashes-video-2\` | Saika Games — Elden Ring 100% Cinza da Guerra #2 | índice comunitário de vídeo/gameplay | pt-BR; plataforma e versão do jogo não informadas; consulta 2026-07-28 | candidatos de nomes para 31 entradas, com timestamps | reprodução secundária; a página associa nome e timestamp, mas o frame não foi verificado nesta pesquisa | média para descoberta; insuficiente para \`confirmed\` | não permite distinguir de modo verificável nome do item e nome da habilidade | https://saikagames.com.br/eldenringcinzadaguerra2/ |
| \`ptbr-saika-ashes-video-3\` | Saika Games — Elden Ring 100% Cinza da Guerra #3 | índice comunitário de vídeo/gameplay | pt-BR; plataforma e versão do jogo não informadas; consulta 2026-07-28 | candidatos de nomes para 29 entradas do escopo; também lista Lost Ashes of War, que foi excluída | reprodução secundária; a página associa nome e timestamp, mas o frame não foi verificado nesta pesquisa | média para descoberta; insuficiente para \`confirmed\` | inclui item fora do escopo e não sustenta afinidade, tipo ou compatibilidade pt-BR | https://saikagames.com.br/eldenringcinzadaguerra3/ |
| \`ptbr-nexus-localization-workflow\` | Nexus Mods — How to translate Elden Ring | artigo técnico comunitário | inglês; PC; consulta 2026-07-28 | processo de extração de \`item.msgbnd.dcx\` e pastas de idioma | descrição técnica reproduzível da origem dos textos | média/alta para metodologia | não fornece os textos pt-BR pesquisados e depende de arquivos locais do jogo | https://www.nexusmods.com/eldenring/articles/115 |
| \`ptbr-soulsmodding-localization-structure\` | Souls Modding Wiki — localização de mensagens | documentação técnica comunitária | inglês; PC; consulta 2026-07-28 | estrutura de \`item.msgbnd\`, \`menu.msgbnd\` e diretórios de idioma | documentação secundária da estrutura de localização | média para metodologia | não contém valores individuais pt-BR | https://www.soulsmodding.com/doku.php?id=tutorial%3Aintro-to-elden-ring-emevd |
| \`ptbr-terra-localization-patch\` | Terra Game On — Tradução de Elden Ring recebe correções | notícia | pt-BR; plataformas não discriminadas; notícia de 2022, consulta 2026-07-28 | risco histórico de alterações/correções na localização oficial brasileira | fonte secundária sobre patch oficial | média para contexto histórico | não informa os textos individuais nem permite resolver versão atual | https://www.terra.com.br/gameon/traducao-de-elden-ring-recebe-correcoes%2Ce670347b83dd8207a1198f38e9260553493g33z8.html
`;
  fs.writeFileSync(SOURCES_PATH, `${current.slice(0, firstBreak)}${section}${current.slice(firstBreak)}`);
}

const baseEntries = loadCatalog()
  .filter((ash) => ash.contentPack === 'base-game')
  .sort((left, right) => left.name.en.localeCompare(right.name.en, 'en') || left.id.localeCompare(right.id, 'en'));

if (baseEntries.length !== 91) throw new Error(`Expected 91 base-game entries, found ${baseEntries.length}.`);
if (Object.keys(probableNames).length !== 91) throw new Error(`Expected 91 name candidates, found ${Object.keys(probableNames).length}.`);

const research = {
  researchVersion: 1,
  scope: 'base-game-ptbr-pass-1',
  generatedAt: '2026-07-28',
  entries: baseEntries.map(buildEntry),
};

fs.writeFileSync(JSON_PATH, `${JSON.stringify(research, null, 2)}\n`);
const finalizedReport = buildReport(research)
  .replace(
    '## Objetivo e escopo',
    '## Estado final da linha de pesquisa\n\nO usuário encerrou esta linha de pesquisa em 2026-07-28 sem autorizar instalação ou download de ferramentas, extração dos arquivos do jogo ou capturas iniciando o Elden Ring. Os 91 nomes abaixo permanecem apenas `probable`; nenhum campo foi confirmado por evidência direta. Habilidades, afinidades, tipos e compatibilidades continuam `pending`, e o catálogo de produção mantém o fallback inglês. A pesquisa só poderá ser retomada mediante nova autorização explícita.\n\n## Objetivo e escopo',
  )
  .replace(
    'Apresentar ao usuário a primeira passagem pt-BR das 91 Cinzas da Guerra do jogo base para aprovação campo a campo antes de alterar o catálogo de produção.',
    'Manter o fallback em inglês para as Cinzas da Guerra e retomar a validação oficial pt-BR somente mediante nova autorização explícita do usuário.',
  );
fs.writeFileSync(REPORT_PATH, finalizedReport);
updateSourcesDocument();
console.log(`Generated ${research.entries.length} entries.`);

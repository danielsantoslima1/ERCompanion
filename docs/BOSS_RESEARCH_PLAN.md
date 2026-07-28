# Boss Research Plan

## Escopo

Este documento define o processo de pesquisa e normalização dos encontros com chefes do jogo base e, posteriormente, de `Shadow of the Erdtree`. Ele não contém uma lista de chefes e não autoriza alterações nos dados do aplicativo.

O objetivo não é copiar integralmente listas editoriais que usem uma definição ampla de “boss”. Somente poderá entrar no inventário um encontro específico no qual esteja confirmado que o jogo exibe uma barra de vida de chefe.

Serão considerados candidatos:

- chefes principais e opcionais;
- chefes de dungeons e de campo;
- ocorrências repetidas em localizações diferentes;
- batalhas em dupla ou grupo que formem um único evento;
- outros encontros que efetivamente exibam barra de chefe.

Invasores, NPCs hostis, inimigos únicos, versões fortes de inimigos comuns, inimigos que não reaparecem, Great Enemies ou adversários destacados apenas editorialmente não serão incluídos automaticamente. Cada caso será pesquisado individualmente e somente entrará se a barra de chefe daquele encontro for confirmada.

## Regra da barra de chefe

A barra de vida de chefe exibida durante o encontro específico é o critério definitivo de inclusão. O rótulo usado por uma fonte, a importância narrativa, a dificuldade, a raridade ou o fato de o inimigo não reaparecer não substituem essa evidência.

Cada candidato terá um estado próprio de evidência da barra:

- `confirmed`: há evidência confiável de que o encontro exibe barra de chefe;
- `not-confirmed`: uma fonte o chama de chefe, mas a barra ainda não foi verificada;
- `rejected`: foi verificado que o encontro não exibe barra de chefe e não deve entrar;
- `needs-review`: existem evidências conflitantes ou uma situação especial.

Nenhum encontro poderá receber estado geral `approved` enquanto a evidência da barra não estiver como `confirmed`.

## Fontes de descoberta

As seguintes referências fornecidas pelo usuário formarão uma única família editorial de descoberta:

### Rock Paper Shotgun — artigo

- URL: https://www.rockpapershotgun.com/elden-ring-boss-locations
- Descrição registrada: artigo com lista e localização dos encontros do jogo base; apresenta uma relação de 238 entradas, listas organizadas por áreas e mapas regionais; aponta para um artigo separado sobre os encontros de `Shadow of the Erdtree`.
- Finalidade: descoberta inicial de candidatos; obtenção de pistas sobre nome, localização geral, condições e distinção de ocorrências repetidas.
- Limite: a lista editorial pode usar “boss” em sentido mais amplo que o critério do aplicativo. Nenhuma entrada será incluída sem validação individual.

### Rock Paper Shotgun — mapa completo

- URL: https://assetsio.gnwcdn.com/elden-ring-boss-locations-map-full-v3.webp
- Descrição registrada: mapa visual completo associado ao artigo.
- Finalidade: conferir distribuição, região aproximada, numeração e cobertura geográfica.
- Limite de uso: será preservado somente como referência documental. Não será baixado, incorporado, redistribuído nem exibido no aplicativo.

O artigo e o mapa pertencem à mesma publicação e ao mesmo levantamento editorial. Serão tratados como uma única família de fontes; a concordância entre eles não representa duas confirmações independentes.

## Fontes independentes de validação

Cada encontro candidato exigirá pelo menos uma fonte independente da família Rock Paper Shotgun antes de ser apresentado para aprovação.

A validação deverá:

- confirmar especificamente a existência da barra de chefe naquele encontro;
- confirmar nome e localização;
- conferir condições de disponibilidade quando existirem;
- distinguir ocorrências repetidas e batalhas coletivas;
- registrar divergências em vez de resolvê-las silenciosamente.

Fontes oficiais da FromSoftware ou Bandai Namco e evidência verificável do próprio jogo terão prioridade quando fornecerem nome, localização ou tradução. Fontes comunitárias e editoriais poderão apoiar descoberta e comparação, mas traduções comunitárias não serão tratadas como oficiais.

## Unidade de encontro

1. Cada ocorrência por localização será um encontro independente.
2. O mesmo tipo de chefe enfrentado em localizações diferentes terá IDs diferentes e estados de progresso separados.
3. Uma revanche ou reaparição em outra localização cria outro encontro.
4. Uma batalha com múltiplos inimigos continuará sendo uma única unidade quando todos fizerem parte do mesmo evento e a vitória depender da conclusão do combate completo.
5. Mesmo quando houver mais de uma barra durante a mesma batalha, o encontro terá um único ID e um único estado de progresso.
6. Alterações de fase, aparência ou nome durante a mesma luta não criam encontros separados.

Quando não existir um nome coletivo oficial adequado para uma batalha com vários participantes, a documentação poderá definir um nome coletivo descritivo para exibição, desde que:

- não altere os nomes individuais exibidos nas barras;
- registre separadamente cada participante;
- registre a quantidade de participantes;
- documente a diferença entre o nome coletivo e os nomes das barras;
- obtenha aprovação explícita do usuário.

O nome coletivo descritivo não será tratado como tradução oficial nem como nome oficial do chefe sem evidência. O ID deverá representar a batalha completa, nunca cada participante individual.

## Campos obrigatórios

Para cada candidato deverão ser pesquisados:

- ID permanente proposto;
- nome em inglês;
- nome oficial em português do Brasil, quando confirmado;
- `regionId`;
- `location` em inglês;
- `location` em português;
- `availability`, quando aplicável;
- quantidade de inimigos ou participantes;
- nomes das fases, quando relevantes;
- evidência de barra de chefe;
- fontes usadas para confirmar a barra;
- fontes de nome e localização;
- divergências;
- estado geral de revisão.

O inventário de pesquisa deverá separar o estado da evidência da barra do estado geral de revisão.

## Estados de validação

### Evidência da barra

- `confirmed`
- `not-confirmed`
- `rejected`
- `needs-review`

### Estado geral do encontro

- `pending`: pesquisa ainda insuficiente;
- `researched`: pesquisa concluída e aguardando revisão;
- `needs-review`: divergência factual ou estrutural;
- `approved`: aprovação explícita do usuário, permitida somente com barra `confirmed`;
- `rejected`: candidato excluído após verificação do critério da barra.

O estado `confirmed` da barra não aprova automaticamente o encontro. A aprovação geral continua pertencendo exclusivamente ao usuário.

## Política de tradução

- usar nome oficial em português do Brasil somente quando confirmado no jogo ou em material oficial;
- repetir exatamente o nome inglês quando a tradução oficial não estiver confirmada;
- não inventar traduções;
- não tratar traduções comunitárias como oficiais;
- registrar a fonte oficial usada para cada tradução confirmada.

As mesmas regras se aplicam a `location`, `availability` e nomes relevantes de fases.

## Política de IDs

Os IDs propostos deverão:

- usar letras minúsculas, números e hífens;
- ser independentes do idioma;
- representar o encontro completo e sua localização;
- diferenciar ocorrências do mesmo chefe em locais diferentes;
- não criar IDs separados para participantes ou fases da mesma batalha;
- não usar o prefixo `sample-`;
- permanecer provisórios até a aprovação explícita;
- tornar-se estáveis e protegidos pelas regras de migração depois de publicados.

IDs descartados durante a pesquisa e nunca publicados não exigem migração.

## Pesquisa por região

A pesquisa ocorrerá em lotes regionais. A ordem inicial do jogo base é:

1. Limgrave;
2. Weeping Peninsula;
3. Siofra River;
4. Liurnia of the Lakes;
5. Ainsel River;
6. Lake of Rot;
7. Caelid;
8. Greyoll's Dragonbarrow;
9. Deeproot Depths;
10. Altus Plateau;
11. Mt. Gelmir;
12. Mountaintops of the Giants;
13. Consecrated Snowfield;
14. Mohgwyn Palace;
15. Miquella's Haligtree;
16. Crumbling Farum Azula.

Essa sequência organiza os lotes e não representa uma rota obrigatória.

Cada lote regional seguirá:

1. descoberta inicial no artigo e no mapa;
2. comparação com pelo menos uma fonte independente;
3. verificação específica da barra de chefe;
4. normalização dos encontros por localização;
5. proposta de IDs;
6. validações automáticas;
7. apresentação ao usuário;
8. aprovação explícita do usuário.

Progresso dos lotes:

- Limgrave: concluído em 2026-07-27, com 22 encontros `approved` e 7 candidatos `rejected`;
- Weeping Peninsula: 10 registros em `approved`;
- Liurnia of the Lakes: 28 registros em `approved`;
- demais regiões do jogo base: 105 registros em `approved`.

## Tratamento de casos especiais

- **Invasores:** não entram automaticamente; somente serão candidatos se o encontro específico exibir barra de chefe.
- **NPCs hostis:** seguem o mesmo critério e não entram apenas por serem únicos ou difíceis.
- **Encontros noturnos:** registrar condição localizada em `availability` e confirmá-la em fontes independentes.
- **Encontros dependentes de missões:** registrar a condição curta em `availability`, sem incorporá-la ao nome ou à localização.
- **Mudança de nome entre fases:** manter um único encontro quando fizer parte da mesma luta; registrar nomes de fases quando relevantes.
- **Batalhas em dupla ou grupo:** manter um único ID e progresso quando todos os participantes compuserem o mesmo evento, mesmo com barras separadas.
- **Chefes repetidos:** criar encontro e ID distintos para cada localização.
- **Fronteiras entre regiões:** decidir pelo local efetivo do evento, documentar as fontes e marcar `needs-review` se houver conflito.
- **Localização que muda:** distinguir mudança dentro do mesmo evento de uma nova ocorrência separadamente concluível; registrar divergências.
- **Inimigos que aparecem com e sem barra:** validar a ocorrência específica. Somente a versão com barra poderá entrar; a existência de outra versão sem barra não altera essa decisão.

## Critérios para aprovação

Um encontro estará apto à aprovação somente quando:

- a evidência da barra estiver `confirmed`;
- nome inglês e localização estiverem confirmados;
- `regionId` usar uma região aprovada;
- ocorrências repetidas e batalhas coletivas estiverem normalizadas;
- `availability`, quando existente, estiver confirmada em fontes adequadas;
- o ID proposto for válido, único e representar encontro e localização;
- o português usar tradução oficial confirmada ou repetir exatamente o inglês;
- a família Rock Paper Shotgun tiver sido confrontada com pelo menos uma fonte independente;
- fontes e divergências estiverem documentadas;
- o usuário aprovar explicitamente o registro.

## Checklist por lote

- [ ] Delimitar a região aprovada.
- [ ] Descobrir candidatos no artigo e no mapa sem copiar a lista integral.
- [ ] Tratar artigo e mapa como uma única família editorial.
- [ ] Consultar pelo menos uma fonte independente por candidato.
- [ ] Confirmar ou rejeitar especificamente a barra de chefe.
- [ ] Separar ocorrências por localização.
- [ ] Unificar participantes e fases pertencentes à mesma batalha.
- [ ] Pesquisar todos os campos obrigatórios.
- [ ] Aplicar a política de tradução.
- [ ] Propor IDs permanentes únicos.
- [ ] Registrar fontes, divergências e estados.
- [ ] Executar validações automáticas do inventário.
- [ ] Apresentar o lote ao usuário.
- [ ] Registrar aprovação ou rejeição explícita.
- [ ] Não alterar dados do aplicativo antes da autorização correspondente.

## Próxima etapa

Pesquisar e preparar os encontros de Shadow of the Erdtree antes de inserir os dados reais no aplicativo.

## Aprovação parcial de inventários — regra adicionada em 2026-07-27

O usuário poderá aprovar previamente um inventário de nomes ingleses e sua associação regional. Essa decisão autoriza preservar literalmente os nomes no inventário de pesquisa, mas não equivale à aprovação do encontro completo.

- Localização, disponibilidade, ID, tradução brasileira, participantes, fases e confirmação da barra continuam sujeitos a pesquisa.
- O registro completo permanece em `researched` ou `needs-review` até nova decisão explícita.
- A documentação deve registrar a data e o escopo exato da aprovação parcial.
- Nenhuma aprovação parcial será convertida automaticamente em `approved` ou em registro de produção.

Por decisão do usuário, Weeping Peninsula e Liurnia of the Lakes foram pesquisadas conjuntamente nesta etapa. O inventário parcial de Weeping Peninsula contém 10 nomes; o de Liurnia contém 28. Essa execução conjunta não altera a ordem regional nem estende aprovação de um lote a outro.

## Decisões 1A, 2A e 3A — 2026-07-27

- **1A — Impaler's Catacombs:** contar somente 1 participante com barra, Erdtree Burial Watchdog. Imps são auxiliares, sem contagem fixa. Registro atualmente `approved`.
- **2A — Glintstone Dragon Adula:** uma unidade com ID `glintstone-dragon-adula-cathedral-of-manus-celes`; Three Sisters é etapa interrompida e Cathedral of Manus Celes é a etapa final concluível. Registro atualmente `approved`.
- **3A — Magma Wyrm Makar:** manter `liurnia-of-the-lakes`, `location: "Ruin-Strewn Precipice"`; conexão com Altus é histórico. Registro atualmente `approved`.

Weeping Peninsula e Liurnia of the Lakes não possuem mais registros em `needs-review`.

## Mapeamentos de subáreas e lotes restantes

Subáreas são válidas em `location` mesmo quando não são regiões do Drawer:

- Capital Outskirts, as duas formas de Leyndell e Elden Throne → `altus-plateau`;
- Forbidden Lands → `mountaintops-of-the-giants`;
- Nokron, Eternal City → `siofra-river`;
- Mohg, Lord of Blood → `mohgwyn-palace`.

Aplicar os nomes/IDs normalizados Greyoll's Dragonbarrow, Mt. Gelmir, Crumbling Farum Azula, Consecrated Snowfield e Ainsel River.

O usuário forneceu e aprovou parcialmente os inventários de todas as regiões restantes do jogo base: 105 entradas em 13 lotes. Essa foi a etapa histórica inicial; os registros completos foram posteriormente aprovados em 2026-07-28.

## Decisões finais das divergências do jogo base — 2026-07-28

As decisões abaixo foram aprovadas explicitamente pelo usuário e resolvem a pesquisa, sem conceder aprovação final aos lotes:

1. Putrid Crystalian Trio, Cleanrot Knight (Duo) e Putrid Tree Spirit de War-Dead Catacombs foram transferidos de Greyoll's Dragonbarrow para `caelid`, mantendo IDs e localizações. Como os IDs não foram publicados, não há migração.
2. Ancient Dragon Lansseax é uma unidade: Abandoned Coffin é aparição interrompida e Rampartside Path é etapa final.
3. `Godefroy the Grafted` é nome da barra/exibição; `Godefroy The Grafted` permanece como nome original do inventário.
4. Stray Mimic Tear possui barra `confirmed` e permanece ativo em Hidden Path to the Haligtree (Forbidden Lands).
5. `Roundtable Knight Vyke` é nome da barra/exibição; `Vyke, Knight of the Roundtable` permanece no histórico.
6. Spiritcaller Snail é o chefe de Spiritcaller Cave; os dois Godskins são summons. ID ativo: `spiritcaller-snail-spiritcaller-cave`; proposta anterior centrada nos Godskins foi substituída sem migração.
7. Fia's Champions é uma unidade de três ondas e cinco oponentes; variações dos três champions genéricos não criam IDs.
8. Elder Dragon Greyoll e Margit de Capital Outskirts não exibem barra e foram rejeitados.
9. Tibia Mariner perto de Castle Sol e Draconic Tree Sentinel de Farum Azula permanecem candidatos adicionais rejeitados.

### Política de summons, auxiliares e participantes

1. Inimigos invocados por um chefe não são automaticamente participantes principais.
2. Quando o jogo identifica um summoner como chefe do evento, o card usa o nome do summoner.
3. Invocados ficam em `summons` ou auxiliares, separados dos participantes acompanháveis.
4. Summons com barras individuais não criam automaticamente encontros separados.
5. O progresso representa a conclusão da batalha do chefe que controla ou origina o evento.
6. Participante principal é a entidade cuja derrota ou sequência integra a condição de conclusão; inimigo auxiliar não integra essa contagem; summon é criado pelo evento e documentado separadamente.

### Aparições interrompidas e nomes divergentes

- Aparições interrompidas e etapas finais permanecem uma unidade quando somente a etapa final produz a conclusão definitiva; o ID usa a localização final acompanhável e a primeira aparição fica no histórico/availability.
- Quando o nome fornecido difere da barra, ambos são preservados. O nome da barra será recomendado para o aplicativo após decisão explícita, sem reescrever silenciosamente o inventário original.
- Candidato adicional sem barra recebe confirmação e estado `rejected`, permanece fora do inventário ativo e conserva fontes/histórico.

Resultado da pesquisa anterior: os 105 encontros dos inventários restantes ficaram `confirmed` e sem divergências pendentes.

## Aprovação final do catálogo do jogo base — 2026-07-28

O usuário aprovou explicitamente os 143 encontros que ainda estavam em `researched`. Com os 22 encontros de Limgrave já aprovados, a pesquisa e a revisão do catálogo de chefes do jogo base estão concluídas:

- 165 encontros ativos em 16 regiões;
- 165 estados gerais `approved`;
- 165 barras `confirmed`;
- nenhum encontro ativo em `pending`, `researched` ou `needs-review`;
- candidatos sem barra permanecem documentados em `rejected`;
- a aprovação não foi aplicada a encontros de Shadow of the Erdtree;
- os dados ainda não foram inseridos no aplicativo.

Qualquer correção factual futura em um registro aprovado deverá retorná-lo para `needs-review` e exigir nova decisão explícita. Depois da publicação dos dados, qualquer mudança de ID deverá usar migração explícita, versionada e idempotente.
## Pesquisa de Shadow of the Erdtree

- O catálogo do jogo base está concluído: 165 encontros ativos aprovados e com barra `confirmed`.
- Em `2026-07-28`, o usuário aprovou parcialmente 42 nomes do inventário da expansão e suas associações regionais. Isso não aprova IDs, nomes de barra, localizações, disponibilidade, participantes, fases, traduções ou registros completos.
- `Enir-Ilim` é uma legacy dungeon/localização interna de `Gravesite Plain`; seus encontros usam `regionId: "gravesite-plain"` e `location` contendo `Enir-Ilim`.
- Regiões sem chefes continuam válidas. `Finger Ruins of Rhia` possui documento próprio mesmo com inventário inicial de zero encontros e poderá ser reutilizada por itens.
- Entradas consistentes usam `researched`; dúvidas estruturais usam `needs-review`; ocorrências verificadas sem barra usam `rejected`. Nenhum encontro da expansão será `approved` antes da decisão final do usuário.

### Regras consolidadas após as decisões de 2026-07-28

1. Uma entrada de inventário pode ser normalizada em mais de um encontro quando as batalhas são independentes e separadamente concluíveis.
2. Cada batalha independente possui ID, localização distintiva e progresso próprios.
3. Um inimigo auxiliar sem barra acompanhável não cria encontro adicional.
4. Diferenças de nome ou pontuação entre inventário e barra preservam as duas formas.
5. Transferências regionais preservam o histórico da associação anterior.
6. IDs não publicados podem ser substituídos sem migração, mantendo a proposta anterior documentada.
7. A pesquisa e a revisão da expansão foram concluídas: 43 ativos `confirmed`/`approved`, Dryleaf Dane `rejected` e nenhuma pendência.
8. As dez regiões continuam aprovadas; Finger Ruins of Rhia permanece válida com zero chefes.
9. Qualquer correção futura em encontro aprovado deve retorná-lo para `needs-review`.
10. Mudanças de IDs após publicação exigem migração explícita, versionada e idempotente.
11. O catálogo completo pode avançar para implementação dos dados reais.

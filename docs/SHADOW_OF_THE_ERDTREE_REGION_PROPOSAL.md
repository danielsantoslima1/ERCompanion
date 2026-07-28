# Shadow of the Erdtree Region Proposal

## Escopo e regras aplicadas

Este documento registra a taxonomia definitiva de regiões de `Shadow of the Erdtree`, aprovada explicitamente pelo usuário em 2026-07-27. A pesquisa desta etapa permaneceu restrita às regiões; chefes e itens não foram pesquisados.

As regras estruturais aprovadas são:

- o Drawer terá um grupo independente chamado `Shadow of the Erdtree` nos dois idiomas;
- a expansão possui dez regiões, cada uma com ID permanente, nome localizado, `displayOrder` e progresso regional próprios;
- regiões são entidades compartilhadas por diferentes categorias de conteúdo, não agrupadores definidos apenas pela presença de chefes;
- chefes serão a primeira categoria implementada e itens serão adicionados posteriormente;
- uma região permanece válida no Drawer mesmo que não possua encontros de chefe; nesse caso, o progresso de chefes poderá apresentar `0/0`;
- o progresso futuro de itens será separado conceitualmente do progresso de chefes, mas reutilizará os mesmos `regionId`;
- a ausência de chefes não autoriza remover uma região nem incorporá-la a outra;
- castelos, fortalezas, cidades, cavernas, catacumbas, prisões, templos, legacy dungeons e outras áreas internas permanecem em `location`, salvo decisão explícita posterior;
- uma área não é automaticamente excluída por conter “Ruins” no nome: Ancient Ruins of Rauh foi aprovada como região;
- os nomes portugueses repetem exatamente os nomes ingleses enquanto não houver tradução oficial brasileira confirmada;
- a ordem aprovada combina organização geográfica e progressiva, mas não representa uma rota obrigatória.

Os valores de `displayOrder` da expansão formam uma sequência própria de 1 a 10, independente dos valores do jogo base. Drawer, Home e páginas de regiões deverão usar exclusivamente esses valores para ordenar o grupo da expansão.

## Lista proposta

| Ordem | ID permanente | Nome em inglês | Nome em português | Classificação encontrada | Decisão | Estado |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | `gravesite-plain` | Gravesite Plain | Gravesite Plain | região principal e cobertura de mapa | região independente | `approved` |
| 2 | `scadu-altus` | Scadu Altus | Scadu Altus | região principal e cobertura de mapa | região independente | `approved` |
| 3 | `rauh-base` | Rauh Base | Rauh Base | sub-região inferior de Rauh em fontes secundárias | região independente | `approved` |
| 4 | `ancient-ruins-of-rauh` | Ancient Ruins of Rauh | Ancient Ruins of Rauh | sub-região superior de Rauh em fontes secundárias | região independente | `approved` |
| 5 | `cerulean-coast` | Cerulean Coast | Cerulean Coast | sub-região costeira | região independente | `approved` |
| 6 | `charos-hidden-grave` | Charo's Hidden Grave | Charo's Hidden Grave | sub-região meridional | região independente | `approved` |
| 7 | `jagged-peak` | Jagged Peak | Jagged Peak | sub-região montanhosa | região independente | `approved` |
| 8 | `abyssal-woods` | Abyssal Woods | Abyssal Woods | sub-região isolada e cobertura de `Map: Abyss` | região independente | `approved` |
| 9 | `finger-ruins-of-rhia` | Finger Ruins of Rhia | Finger Ruins of Rhia | grande área geográfica de ruínas | região independente | `approved` |
| 10 | `scaduview` | Scaduview | Scaduview | sub-região ao norte de Shadow Keep | região independente | `approved` |

## Registros detalhados

### Gravesite Plain

- ID permanente: `gravesite-plain`
- Nomes localizados: inglês `Gravesite Plain`; português `Gravesite Plain`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 1
- Classificação: região principal e cobertura nominal de fragmento de mapa.
- Justificativa: grande planície inicial, com nome regional e fragmento de mapa próprios; servirá a chefes, itens e outros conteúdos futuros.
- Relação com outras áreas: conecta-se a Scadu Altus e às áreas meridionais; áreas internas e dungeons permanecem em `location`.
- Sublocalizações relevantes: Belurat, Tower Settlement; Castle Ensis; Ellac River; Scorched Ruins; Prospect Town; Fog Rift Fort; Dragon's Pit; Belurat Gaol; Fog Rift Catacombs; Rivermouth Cave e Ruined Forge Lava Intake.
- Posição: primeira na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Gravesite Plain; Eldenpedia — Map: Gravesite Plain; Bandai Namco — How to Strengthen Your Character in Shadow of the Erdtree.
- Divergências: algumas fontes subordinam várias áreas meridionais a Gravesite Plain; a taxonomia do aplicativo mantém as regiões aprovadas separadamente.
- Decisão: região independente com progresso próprio e ID reutilizável por todas as categorias futuras.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Scadu Altus

- ID permanente: `scadu-altus`
- Nomes localizados: inglês `Scadu Altus`; português `Scadu Altus`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 2
- Classificação: região principal, planalto e cobertura nominal de fragmento de mapa.
- Justificativa: grande região central/nordeste reconhecida nominalmente; servirá a chefes, itens e outros conteúdos futuros.
- Relação com outras áreas: conecta Gravesite Plain, as áreas de Rauh, Scaduview e os acessos às profundezas.
- Sublocalizações relevantes: Shadow Keep; Specimen Storehouse; Shadow Keep, Church District; Moorth Ruins; Bonny Village; Cathedral of Manus Metyr; Finger Ruins of Miyr; Recluses' River; Ruins of Unte; Fort of Reprimand; Darklight Catacombs; Bonny Gaol e Ruined Forge of Starfall Past.
- Posição: segunda na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Scadu Altus; Eldenpedia — Map: Scadu Altus; Eldenpedia — Realm of Shadow.
- Divergências: Shadow Keep aparece como região técnica em uma fonte, mas permanece `location` por ser fortaleza/legacy dungeon; Abyssal Woods e Scaduview são independentes por decisão do usuário.
- Decisão: região independente com progresso próprio e ID reutilizável por todas as categorias futuras.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Rauh Base

- ID permanente: `rauh-base`
- Nomes localizados: inglês `Rauh Base`; português `Rauh Base`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 3
- Classificação: sub-região inferior de Rauh, situada no cânion, em fontes secundárias.
- Justificativa: área geográfica própria e verticalmente distinta de Ancient Ruins of Rauh; sua validade não depende de possuir chefes e atende também ao futuro acompanhamento de itens.
- Relação com outras áreas: ocupa o nível inferior das áreas de Rauh e se relaciona geograficamente com Ancient Ruins of Rauh.
- Sublocalizações relevantes: Temple Town Ruins; Scorpion River Catacombs; Taylew's Ruined Forge e demais marcos internos.
- Posição: terceira na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Rauh Base; Eldenpedia — Map: Rauh Ruins; Eldenpedia — Realm of Shadow.
- Divergências: aparece como sub-região de Land of the Tower e compartilha a cobertura `Map: Rauh Ruins` com Ancient Ruins of Rauh.
- Decisão: região independente; substitui parcialmente o agrupador provisório `rauh-ruins`.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Ancient Ruins of Rauh

- ID permanente: `ancient-ruins-of-rauh`
- Nomes localizados: inglês `Ancient Ruins of Rauh`; português `Ancient Ruins of Rauh`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 4
- Classificação: sub-região superior de Rauh em fontes secundárias e grande área geográfica coberta por `Map: Rauh Ruins`.
- Justificativa: área extensa, elevada e geograficamente distinta de Rauh Base. O termo “Ruins” não a reduz automaticamente a uma localização interna.
- Relação com outras áreas: forma o nível superior de Rauh e se conecta a Rauh Base e às rotas vindas de Scadu Altus/Shadow Keep.
- Sublocalizações relevantes: Church of the Bud e estruturas internas das ruínas.
- Posição: quarta na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Ancient Ruins of Rauh; Eldenpedia — Map: Rauh Ruins; Eldenpedia — Realm of Shadow.
- Divergências: classificada como sub-região de Land of the Tower e anteriormente incorporada ao agrupador provisório `Rauh Ruins`.
- Decisão: região independente; substitui parcialmente o agrupador provisório `rauh-ruins`.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Cerulean Coast

- ID permanente: `cerulean-coast`
- Nomes localizados: inglês `Cerulean Coast`; português `Cerulean Coast`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 5
- Classificação: sub-região costeira meridional em fontes secundárias; parte da cobertura ampla `Southern Shore`.
- Justificativa: área geográfica reconhecível e útil para conteúdos além de chefes; não será incorporada a Gravesite Plain nem a um agrupador Southern Shore.
- Relação com outras áreas: situa-se na costa sul e se relaciona com Charo's Hidden Grave e as rotas meridionais.
- Sublocalizações relevantes: Stone Coffin Fissure e marcos costeiros internos.
- Posição: quinta na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Gravesite Plain; Eldenpedia — Map: Southern Shore; Eldenpedia — Realm of Shadow.
- Divergências: algumas taxonomias a subordinam a Gravesite Plain ou ao agrupamento cartográfico Southern Shore.
- Decisão: região independente com progresso próprio, inclusive quando o progresso de chefes for `0/0`.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Charo's Hidden Grave

- ID permanente: `charos-hidden-grave`
- Nomes localizados: inglês `Charo's Hidden Grave`; português `Charo's Hidden Grave`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 6
- Classificação: sub-região meridional em fontes secundárias; parte da cobertura ampla `Southern Shore`.
- Justificativa: área geográfica própria, relevante para chefes, itens e outros conteúdos futuros.
- Relação com outras áreas: fica junto às áreas costeiras do sul, entre Cerulean Coast e os acessos relacionados a Jagged Peak.
- Sublocalizações relevantes: marcos, dungeons e estruturas internas permanecerão em `location`.
- Posição: sexta na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Gravesite Plain; Eldenpedia — Map: Southern Shore; Eldenpedia — Realm of Shadow.
- Divergências: algumas fontes a subordinam a Gravesite Plain ou Southern Shore.
- Decisão: região independente com progresso próprio e ID permanente sem apóstrofo.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Jagged Peak

- ID permanente: `jagged-peak`
- Nomes localizados: inglês `Jagged Peak`; português `Jagged Peak`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 7
- Classificação: sub-região montanhosa em fontes secundárias; parte da cobertura ampla `Southern Shore`.
- Justificativa: grande área geográfica vertical e claramente identificável, adequada a múltiplas categorias de conteúdo.
- Relação com outras áreas: ergue-se no sudeste e se relaciona com Foot of the Jagged Peak e as áreas meridionais.
- Sublocalizações relevantes: Foot of the Jagged Peak; Dragon's Pit Terminus; Grand Altar of Dragon Communion e estruturas internas.
- Posição: sétima na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Gravesite Plain; Eldenpedia — Map: Southern Shore; Eldenpedia — Realm of Shadow.
- Divergências: algumas fontes a classificam como sub-região de Gravesite Plain e outras usam Southern Shore como cobertura ampla.
- Decisão: região independente com progresso próprio e ID reutilizável por todas as categorias futuras.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Abyssal Woods

- ID permanente: `abyssal-woods`
- Nomes localizados: inglês `Abyssal Woods`; português `Abyssal Woods`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 8
- Classificação: sub-região isolada de Scadu Altus em fontes secundárias; área coberta pelo fragmento `Map: Abyss`.
- Justificativa: área extensa, isolada verticalmente, com acesso e identidade próprios; continuará válida mesmo se alguma categoria de conteúdo estiver vazia.
- Relação com outras áreas: fica nas profundezas abaixo de Scadu Altus, acessível pelas áreas fluviais e dungeons relacionadas.
- Sublocalizações relevantes: Midra's Manse; Forsaken Graveyard; Woodland Trail; Church Ruins; Divided Falls e Abandoned Church.
- Posição: oitava na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Abyssal Woods; Eldenpedia — Map: Abyss; Eldenpedia — Key Items.
- Divergências: classificada como sub-região de Scadu Altus, enquanto o fragmento usa o nome mais amplo `Abyss`.
- Decisão: região independente com o nome geográfico `Abyssal Woods`.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Finger Ruins of Rhia

- ID permanente: `finger-ruins-of-rhia`
- Nomes localizados: inglês `Finger Ruins of Rhia`; português `Finger Ruins of Rhia`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 9
- Classificação: grande área geográfica de ruínas, tratada como marco ou subárea em parte das fontes.
- Justificativa: foi aprovada explicitamente como região e poderá organizar itens e outros conteúdos mesmo que não possua encontros de chefe.
- Relação com outras áreas: situa-se no setor meridional/sudeste, dentro da cobertura cartográfica ampla Southern Shore.
- Sublocalizações relevantes: estruturas ou pontos internos das ruínas permanecerão em `location`.
- Posição: nona na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Gravesite Plain; Eldenpedia — Map: Southern Shore; Eldenpedia — Realm of Shadow.
- Divergências: fontes podem tratá-la como landmark ou ruínas internas, não como região; a decisão do aplicativo prioriza a entidade geográfica compartilhada por futuras categorias.
- Decisão: região independente. O nome “Ruins” não determina sua exclusão.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Scaduview

- ID permanente: `scaduview`
- Nomes localizados: inglês `Scaduview`; português `Scaduview`
- Grupo de conteúdo: `Shadow of the Erdtree`
- `displayOrder`: 10
- Classificação: sub-região ao norte de Shadow Keep em fontes secundárias e parte da cobertura de `Map: Scadu Altus`.
- Justificativa: área geográfica separada, adequada para organizar chefes, itens e conteúdos futuros independentemente da quantidade atual de encontros.
- Relação com outras áreas: fica ao norte/nordeste de Shadow Keep e se relaciona com Hinterland.
- Sublocalizações relevantes: Hinterland; Shaman Village; Finger Ruins of Dheo; Scadutree Chalice; Scadutree Base e demais marcos internos.
- Posição: décima na sequência aprovada; não constitui rota obrigatória.
- Fontes: Fextralife — Locations; Eldenpedia — Realm of Shadow; Eldenpedia — Map: Scadu Altus; fontes secundárias de locais e Sites of Grace.
- Divergências: pode aparecer subordinada a Shadow Keep ou Scadu Altus em outras taxonomias.
- Decisão: região independente com progresso próprio, inclusive quando uma categoria estiver vazia.
- Data da decisão: 2026-07-27
- Estado: `approved`

## Áreas analisadas que não devem virar regiões

| Área | Região aprovada | Motivo da exclusão do Drawer |
| --- | --- | --- |
| Southern Shore | — | classificação ampla e cobertura cartográfica histórica; não é região nem `regionId` na taxonomia aprovada |
| Rauh Ruins | — | agrupador cartográfico histórico substituído por Rauh Base e Ancient Ruins of Rauh |
| Belurat, Tower Settlement | Gravesite Plain | cidade/legacy dungeon |
| Castle Ensis | Gravesite Plain | castelo/legacy dungeon |
| Scorched Ruins | Gravesite Plain | ruínas internas, sem decisão de promoção |
| Prospect Town | Gravesite Plain | cidade/ruínas internas |
| Ellac River | Gravesite Plain | corredor fluvial |
| Fog Rift Fort | Gravesite Plain | fortaleza |
| Dragon's Pit | Gravesite Plain | dungeon |
| Stone Coffin Fissure | Cerulean Coast | dungeon/área interna |
| Foot of the Jagged Peak | Jagged Peak | seção inferior da região |
| Grand Altar of Dragon Communion | Jagged Peak | marco/localização |
| Shadow Keep | Scadu Altus | fortaleza/legacy dungeon |
| Specimen Storehouse | Scadu Altus | seção interna de Shadow Keep |
| Shadow Keep, Church District | Scadu Altus | seção interna de Shadow Keep |
| Moorth Ruins | Scadu Altus | ruínas internas, sem decisão de promoção |
| Bonny Village | Scadu Altus | vila interna |
| Cathedral of Manus Metyr | Scadu Altus | templo/localização |
| Finger Ruins of Miyr | Scadu Altus | ruínas internas, sem decisão de promoção |
| Recluses' River | Scadu Altus | corredor fluvial |
| Temple Town Ruins | Rauh Base | ruínas internas |
| Church of the Bud | Ancient Ruins of Rauh | templo/localização |
| Midra's Manse | Abyssal Woods | mansão/legacy dungeon |
| Forsaken Graveyard | Abyssal Woods | sublocalização |
| Hinterland | Scaduview | subárea |
| Shaman Village | Scaduview | vila interna |
| Finger Ruins of Dheo | Scaduview | ruínas internas, sem decisão de promoção |
| Land of the Tower | — | classificação técnica ampla encontrada em fonte secundária; não adotada como região do aplicativo |

Ancient Ruins of Rauh e Finger Ruins of Rhia não estão nesta tabela de exclusões porque foram aprovadas explicitamente como regiões. A palavra “Ruins” não constitui regra automática de classificação.

## Divergências pendentes

Não restam divergências estruturais pendentes para a taxonomia da expansão. As classificações divergentes permanecem como histórico, mas não alteram a decisão explícita do usuário:

1. `Southern Shore` continua documentada apenas como cobertura cartográfica/classificação ampla; não é região do Drawer e não possui `regionId`.
2. O agrupador provisório `Rauh Ruins` foi dividido em Rauh Base e Ancient Ruins of Rauh.
3. Fontes secundárias podem classificar áreas aprovadas como sub-regiões, landmarks ou ruínas; a taxonomia do aplicativo prevalece.
4. `Map: Abyss` e o nome geográfico Abyssal Woods continuam sendo nomenclaturas relacionadas, mas o ID aprovado é `abyssal-woods`.
5. Shadow Keep e Land of the Tower aparecem em hierarquias técnicas externas, mas não são regiões aprovadas do Drawer.
6. A Fextralife retornou HTTP 502 e páginas diretas da Eldenpedia retornaram HTTP 403 no acesso automatizado em 2026-07-27; essas limitações permanecem registradas.
7. Nenhuma tradução oficial em português do Brasil foi confirmada; os campos portugueses repetem exatamente o inglês.

Qualquer correção futura deverá devolver apenas o registro afetado para `needs-review` e exigir nova decisão explícita do usuário.

## Histórico superado da proposta anterior

Antes da decisão de 2026-07-27, a pesquisa propôs cinco agrupadores cartográficos:

1. Gravesite Plain — `gravesite-plain` — `displayOrder: 10` — `researched`;
2. Southern Shore — `southern-shore` — `displayOrder: 20` — `needs-review`;
3. Scadu Altus — `scadu-altus` — `displayOrder: 30` — `researched`;
4. Rauh Ruins — `rauh-ruins` — `displayOrder: 40` — `needs-review`;
5. Abyssal Woods — `abyssal-woods` — `displayOrder: 50` — `needs-review`.

Essa proposta usava os cinco fragmentos de mapa como agrupadores de primeiro nível. Ela foi integralmente superada pela taxonomia definitiva de dez regiões.

- `southern-shore` foi descartado e nunca foi publicado.
- `rauh-ruins` foi descartado e substituído por `rauh-base` e `ancient-ruins-of-rauh`; nunca foi publicado.
- Gravesite Plain, Scadu Altus e Abyssal Woods foram preservadas com novos valores definitivos de `displayOrder`.
- Cerulean Coast, Charo's Hidden Grave, Jagged Peak, Finger Ruins of Rhia e Scaduview foram promovidas por decisão explícita.
- Não é necessária migração para os dois IDs descartados porque eles não foram incorporados aos dados de produção.

## Resumo para aprovação

- Quantidade total: 10 regiões aprovadas.
- Lista completa em ordem:
  1. Gravesite Plain — `gravesite-plain` — `displayOrder: 1`
  2. Scadu Altus — `scadu-altus` — `displayOrder: 2`
  3. Rauh Base — `rauh-base` — `displayOrder: 3`
  4. Ancient Ruins of Rauh — `ancient-ruins-of-rauh` — `displayOrder: 4`
  5. Cerulean Coast — `cerulean-coast` — `displayOrder: 5`
  6. Charo's Hidden Grave — `charos-hidden-grave` — `displayOrder: 6`
  7. Jagged Peak — `jagged-peak` — `displayOrder: 7`
  8. Abyssal Woods — `abyssal-woods` — `displayOrder: 8`
  9. Finger Ruins of Rhia — `finger-ruins-of-rhia` — `displayOrder: 9`
  10. Scaduview — `scaduview` — `displayOrder: 10`
- Regiões em `approved`: 10.
- Regiões em `pending`: nenhuma.
- Regiões em `researched`: nenhuma.
- Regiões em `needs-review`: nenhuma.
- Data da aprovação: 2026-07-27.
- Taxonomia completa do aplicativo: 16 regiões do jogo base e 10 regiões da expansão, totalizando 26.
- A taxonomia atende a categorias futuras além de chefes. Regiões sem chefes continuam no Drawer e podem apresentar progresso de chefes `0/0`; o progresso futuro de itens será separado e reutilizará os mesmos `regionId`.
## Enir-Ilim — decisão estrutural posterior

Em `2026-07-28`, o usuário decidiu explicitamente que `Enir-Ilim` não é uma região independente do Drawer. Ela permanece documentada como legacy dungeon/localização interna de `Gravesite Plain`. Seus encontros usam `regionId: "gravesite-plain"` e `location` contendo `Enir-Ilim`. Essa decisão não altera as dez regiões aprovadas.

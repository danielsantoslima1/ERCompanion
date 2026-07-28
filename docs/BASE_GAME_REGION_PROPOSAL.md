# Base Game Region Proposal

## Escopo e regras aplicadas

Esta proposta cobre somente a taxonomia regional do jogo base. Nenhum encontro de chefe foi pesquisado nesta etapa.

Foram aplicadas as seguintes decisões já aprovadas:

- regiões geográficas relevantes aparecem no Drawer;
- castelos, cavernas, catacumbas, túneis, prisões, ruínas, cidades internas e masmorras permanecem em `location`, salvo quando uma área também possui identidade geográfica ampla e independente;
- Weeping Peninsula é uma região independente;
- Siofra River, Ainsel River, Deeproot Depths, Lake of Rot e Mohgwyn Palace são regiões subterrâneas independentes;
- não existe um agrupador genérico `Underground`;
- todas as regiões pertencem ao grupo do jogo base;
- a ordem é geográfica e progressiva, não alfabética nem obrigatória;
- `displayOrder` é a única fonte de ordenação futura para Home, página Bosses e Drawer;
- nenhum nome em português é inventado: sem confirmação oficial em português do Brasil, o campo português repete exatamente o inglês;
- nenhum registro recebe `approved` sem decisão explícita do usuário.

A página [Locations da Fextralife](https://eldenring.wiki.fextralife.com/Locations) foi adotada como referência inicial, mas não como autoridade definitiva. A página não pôde ser recuperada pelo acesso automatizado desta pesquisa; por isso, suas categorias deverão ser reconferidas manualmente antes da aprovação. A comparação principal foi feita com a [taxonomia de Locations da Eldenpedia](https://eldenring.wiki.gg/wiki/Locations), a página [Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between), páginas específicas de cada área e materiais oficiais da Bandai Namco sobre a estrutura do mundo.

## Lista proposta

| Ordem | ID | Nome em inglês | Nome em português | Tipo | Recomendação | Estado |
| ---: | --- | --- | --- | --- | --- | --- |
| 10 | `limgrave` | Limgrave | Limgrave | superfície | incluir conforme aprovação explícita do usuário | `approved` |
| 20 | `weeping-peninsula` | Weeping Peninsula | Weeping Peninsula | superfície | incluir conforme aprovação explícita do usuário | `approved` |
| 30 | `siofra-river` | Siofra River | Siofra River | subterrânea | incluir conforme aprovação explícita do usuário | `approved` |
| 40 | `liurnia-of-the-lakes` | Liurnia of the Lakes | Liurnia of the Lakes | superfície | incluir conforme aprovação explícita do usuário | `approved` |
| 50 | `ainsel-river` | Ainsel River | Ainsel River | subterrânea | incluir conforme aprovação explícita do usuário | `approved` |
| 60 | `lake-of-rot` | Lake of Rot | Lake of Rot | subterrânea | incluir conforme aprovação explícita do usuário | `approved` |
| 70 | `caelid` | Caelid | Caelid | superfície | incluir conforme aprovação explícita do usuário | `approved` |
| 80 | `greyolls-dragonbarrow` | Greyoll's Dragonbarrow | Greyoll's Dragonbarrow | superfície | incluir como região independente, conforme aprovação explícita do usuário | `approved` |
| 90 | `deeproot-depths` | Deeproot Depths | Deeproot Depths | subterrânea | incluir conforme aprovação explícita do usuário | `approved` |
| 100 | `altus-plateau` | Altus Plateau | Altus Plateau | superfície | incluir conforme aprovação explícita do usuário | `approved` |
| 110 | `mt-gelmir` | Mt. Gelmir | Mt. Gelmir | superfície | incluir como região independente, conforme aprovação explícita do usuário | `approved` |
| 120 | `mountaintops-of-the-giants` | Mountaintops of the Giants | Mountaintops of the Giants | superfície | incluir conforme aprovação explícita do usuário | `approved` |
| 130 | `consecrated-snowfield` | Consecrated Snowfield | Consecrated Snowfield | superfície | incluir como região independente, conforme aprovação explícita do usuário | `approved` |
| 140 | `mohgwyn-palace` | Mohgwyn Palace | Mohgwyn Palace | subterrânea | incluir conforme aprovação explícita do usuário | `approved` |
| 150 | `miquellas-haligtree` | Miquella's Haligtree | Miquella's Haligtree | superfície | incluir como região independente, conforme aprovação explícita do usuário | `approved` |
| 160 | `crumbling-farum-azula` | Crumbling Farum Azula | Crumbling Farum Azula | superfície | incluir conforme aprovação explícita do usuário | `approved` |

Os intervalos de dez são apenas uma proposta inicial que facilita inserções futuras. Eles não representam valores aprovados.

## Registros detalhados

### Limgrave

- ID proposto: `limgrave`
- Nome em inglês: Limgrave
- Nome em português: Limgrave
- `displayOrder`: 10
- Classificação: região de superfície
- Justificativa: região inicial ampla, reconhecida de forma consistente como região principal e capaz de agrupar suas subáreas sem criar itens excessivos no Drawer.
- Subáreas relevantes: Stormhill, Mistwood, Stormveil Castle e Stranded Graveyard.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between)
  - [Bandai Namco — Early game tips](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-early-game-tips)
- Divergências: nenhuma relevante sobre sua condição de região principal.
- Decisão adotada: aprovado explicitamente pelo usuário como região independente, com ID permanente `limgrave`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Weeping Peninsula

- ID proposto: `weeping-peninsula`
- Nome em inglês: Weeping Peninsula
- Nome em português: Weeping Peninsula
- `displayOrder`: 20
- Classificação: sub-região de Limgrave nas fontes; região independente por decisão do projeto
- Justificativa: península geograficamente delimitada, com identidade e conjunto próprio de localizações; sua independência no Drawer já foi definida pelo usuário.
- Subáreas relevantes: Castle Morne, Tombsward, Ailing Village e Bridge of Sacrifice.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Weeping Peninsula](https://eldenring.wiki.gg/wiki/Weeping_Peninsula)
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between)
- Divergências: fontes secundárias a classificam como sub-região de Limgrave; o projeto já decidiu promovê-la a região navegável.
- Decisão adotada: aprovado explicitamente pelo usuário como região independente, com ID permanente `weeping-peninsula`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Siofra River

- ID proposto: `siofra-river`
- Nome em inglês: Siofra River
- Nome em português: Siofra River
- `displayOrder`: 30
- Classificação: região subterrânea
- Justificativa: área subterrânea extensa, com mapa e identidade próprios; sua independência já foi definida pelo usuário.
- Subáreas relevantes: Nokron, Eternal City, Night's Sacred Ground, Siofra Aqueduct e Hallowhorn Grounds.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Siofra River](https://eldenring.wiki.gg/wiki/Siofra_River)
  - [Bandai Namco — Early game tips](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-early-game-tips)
- Divergências: Nokron e Mohgwyn Palace aparecem como sub-regiões de Siofra em algumas fontes; a decisão do projeto mantém Mohgwyn Palace independente e Nokron como `location`.
- Decisão adotada: aprovado explicitamente pelo usuário como região subterrânea independente, com ID permanente `siofra-river`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Liurnia of the Lakes

- ID proposto: `liurnia-of-the-lakes`
- Nome em inglês: Liurnia of the Lakes
- Nome em português: Liurnia of the Lakes
- `displayOrder`: 40
- Classificação: região de superfície
- Justificativa: região principal ampla e consistente entre as taxonomias consultadas.
- Subáreas relevantes: Bellum Highway, Moonlight Altar, Academy of Raya Lucaria e Caria Manor.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between)
  - [Eldenpedia — Locations](https://eldenring.wiki.gg/wiki/Locations)
- Divergências: nenhuma relevante sobre sua condição de região principal.
- Decisão adotada: aprovado explicitamente pelo usuário como região independente, com ID permanente `liurnia-of-the-lakes`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Ainsel River

- ID proposto: `ainsel-river`
- Nome em inglês: Ainsel River
- Nome em português: Ainsel River
- `displayOrder`: 50
- Classificação: região subterrânea
- Justificativa: área subterrânea extensa, com mapa, acessos e identidade próprios; sua independência já foi definida pelo usuário.
- Subáreas relevantes: Ainsel River Main, Uhl Palace Ruins e Nokstella, Eternal City.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Ainsel River](https://eldenring.wiki.gg/wiki/Ainsel_River)
  - [Eldenpedia — Locations](https://eldenring.wiki.gg/wiki/Locations)
- Divergências: Lake of Rot aparece como sub-região de Ainsel em fontes secundárias, mas já foi definida como região independente pelo usuário.
- Decisão adotada: aprovado explicitamente pelo usuário como região subterrânea independente, com ID permanente `ainsel-river`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Lake of Rot

- ID proposto: `lake-of-rot`
- Nome em inglês: Lake of Rot
- Nome em português: Lake of Rot
- `displayOrder`: 60
- Classificação: sub-região subterrânea de Ainsel River nas fontes; região independente por decisão do projeto
- Justificativa: área subterrânea claramente delimitada, com mapa e identidade próprios; sua independência já foi definida pelo usuário.
- Subáreas relevantes: Grand Cloister.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Lake of Rot](https://eldenring.wiki.gg/wiki/Lake_of_Rot)
  - [Eldenpedia — Ainsel River](https://eldenring.wiki.gg/wiki/Ainsel_River)
- Divergências: a classificação externa como sub-região diverge do nível de navegação já escolhido pelo projeto.
- Decisão adotada: aprovado explicitamente pelo usuário como região subterrânea independente, com ID permanente `lake-of-rot`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Caelid

- ID proposto: `caelid`
- Nome em inglês: Caelid
- Nome em português: Caelid
- `displayOrder`: 70
- Classificação: região de superfície
- Justificativa: região principal ampla, consistente entre fontes e geograficamente distinta.
- Subáreas relevantes: Swamp of Aeonia, Sellia, Redmane Castle e Wailing Dunes.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Caelid](https://eldenring.wiki.gg/wiki/Caelid)
  - [Bandai Namco — Patch notes 1.08](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-patch-notes-version-108)
- Divergências: Greyoll's Dragonbarrow é tratada como sub-região de Caelid por algumas fontes, mas pode justificar item separado.
- Decisão adotada: aprovado explicitamente pelo usuário como região independente, com ID permanente `caelid`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Greyoll's Dragonbarrow

- ID proposto: `greyolls-dragonbarrow`
- Nome em inglês: Greyoll's Dragonbarrow
- Nome em português: Greyoll's Dragonbarrow
- `displayOrder`: 80
- Classificação: sub-região de Caelid
- Justificativa: planalto amplo, geograficamente delimitado, com mapa nominal próprio e identidade distinta do restante de Caelid.
- Subáreas relevantes: Fort Faroth, Bestial Sanctum, Lenne's Rise e Divine Tower of Caelid.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Greyoll's Dragonbarrow](https://eldenring.wiki.gg/wiki/Dragonbarrow)
  - [Eldenpedia — Caelid](https://eldenring.wiki.gg/wiki/Caelid)
- Divergências: fontes a classificam como sub-região; também há variação de uso entre “Dragonbarrow” e o nome completo “Greyoll's Dragonbarrow”.
- Decisão adotada: o usuário aprovou explicitamente Greyoll's Dragonbarrow como região independente de Caelid, com ID estável `greyolls-dragonbarrow`, `regionId` próprio e cálculo de progresso separado. O nome completo prevalecerá na taxonomia do aplicativo.
- Estado: `approved`

### Deeproot Depths

- ID proposto: `deeproot-depths`
- Nome em inglês: Deeproot Depths
- Nome em português: Deeproot Depths
- `displayOrder`: 90
- Classificação: região subterrânea
- Justificativa: região subterrânea separada, com mapa, identidade e conexões próprias; sua independência já foi definida pelo usuário.
- Subáreas relevantes: The Nameless Eternal City, Great Waterfall Crest e Prince of Death's Throne.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Deeproot Depths](https://eldenring.wiki.gg/wiki/Deeproot_Depths)
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between)
- Divergências: nenhuma relevante para a decisão já aprovada.
- Decisão adotada: aprovado explicitamente pelo usuário como região subterrânea independente, com ID permanente `deeproot-depths`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Altus Plateau

- ID proposto: `altus-plateau`
- Nome em inglês: Altus Plateau
- Nome em português: Altus Plateau
- `displayOrder`: 100
- Classificação: região de superfície
- Justificativa: região principal ampla e consistente entre as fontes.
- Subáreas relevantes: Capital Outskirts, Leyndell, Royal Capital, The Shaded Castle e Subterranean Shunning-Grounds.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between)
  - [Bandai Namco — Colosseum update](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-free-colosseum-update-available-now)
- Divergências: algumas taxonomias destacam Leyndell e Mt. Gelmir separadamente; esta proposta mantém Leyndell como `location` e avalia Mt. Gelmir como região navegável.
- Decisão adotada: aprovado explicitamente pelo usuário como região independente, com ID permanente `altus-plateau`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Mt. Gelmir

- ID proposto: `mt-gelmir`
- Nome em inglês: Mt. Gelmir
- Nome em português: Mt. Gelmir
- `displayOrder`: 110
- Classificação: sub-região de Altus Plateau
- Justificativa: área vulcânica extensa, geograficamente distinta, com mapa nominal próprio e várias sublocalizações.
- Subáreas relevantes: Volcano Manor, Seethewater River, Hermit Village e Fort Laiedd.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Mt. Gelmir](https://eldenring.wiki.gg/wiki/Mt._Gelmir)
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between)
- Divergências: formalmente classificada como sub-região de Altus Plateau, embora possua identidade geográfica suficiente para um item próprio no Drawer.
- Decisão adotada: o usuário aprovou explicitamente Mt. Gelmir como região independente de Altus Plateau, com ID estável `mt-gelmir`, `regionId` próprio e cálculo de progresso separado. Volcano Manor e demais áreas internas permanecerão em `location`.
- Estado: `approved`

### Mountaintops of the Giants

- ID proposto: `mountaintops-of-the-giants`
- Nome em inglês: Mountaintops of the Giants
- Nome em português: Mountaintops of the Giants
- `displayOrder`: 120
- Classificação: região de superfície
- Justificativa: região principal do extremo norte, consistentemente classificada como região.
- Subáreas relevantes: Forbidden Lands, Flame Peak e Castle Sol.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Mountaintops of the Giants](https://eldenring.wiki.gg/wiki/Mountaintops_of_the_Giants)
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between)
- Divergências: Consecrated Snowfield aparece como sub-região, mas pode justificar item independente.
- Decisão adotada: aprovado explicitamente pelo usuário como região independente, com ID permanente `mountaintops-of-the-giants`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Consecrated Snowfield

- ID proposto: `consecrated-snowfield`
- Nome em inglês: Consecrated Snowfield
- Nome em português: Consecrated Snowfield
- `displayOrder`: 130
- Classificação: sub-região de Mountaintops of the Giants
- Justificativa: área extensa, geograficamente separada, com mapa nominal próprio, acesso distinto e várias sublocalizações.
- Subáreas relevantes: Ordina, Liturgical Town, Yelough Anix Ruins e Apostate Derelict.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Consecrated Snowfield](https://eldenring.wiki.gg/wiki/Consecrated_Snowfield)
  - [Eldenpedia — Mountaintops of the Giants](https://eldenring.wiki.gg/wiki/Mountaintops_of_the_Giants)
- Divergências: fontes a classificam como sub-região das Mountaintops; a proposta a promove por sua separação geográfica e utilidade de navegação.
- Decisão adotada: o usuário aprovou explicitamente Consecrated Snowfield como região independente de Mountaintops of the Giants, com ID estável `consecrated-snowfield`, `regionId` próprio e cálculo de progresso separado. Ordina e demais áreas internas permanecerão em `location`.
- Estado: `approved`

### Mohgwyn Palace

- ID proposto: `mohgwyn-palace`
- Nome em inglês: Mohgwyn Palace
- Nome em português: Mohgwyn Palace
- `displayOrder`: 140
- Classificação: sub-região subterrânea de Siofra River nas fontes; região independente por decisão do projeto
- Justificativa: área subterrânea isolada, com mapa nominal, acesso próprio e identidade claramente distinta; sua independência já foi definida pelo usuário.
- Subáreas relevantes: Mohgwyn Dynasty Mausoleum e a área do lago de sangue.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Mohgwyn Palace](https://eldenring.wiki.gg/wiki/Mohgwyn_Palace)
  - [Eldenpedia — Siofra River](https://eldenring.wiki.gg/wiki/Siofra_River)
- Divergências: classificada externamente como sub-região de Siofra River, divergindo do nível de navegação já escolhido pelo projeto.
- Decisão adotada: aprovado explicitamente pelo usuário como região subterrânea independente, com ID permanente `mohgwyn-palace`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

### Miquella's Haligtree

- ID proposto: `miquellas-haligtree`
- Nome em inglês: Miquella's Haligtree
- Nome em português: Miquella's Haligtree
- `displayOrder`: 150
- Classificação: região e legacy dungeon
- Justificativa: área isolada ao norte, com mapa, identidade e seções internas próprias; não é apenas uma sublocalização contígua do campo aberto.
- Subáreas relevantes: Haligtree Town e Elphael, Brace of the Haligtree.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Miquella's Haligtree](https://eldenring.wiki.gg/wiki/Miquella%27s_Haligtree)
  - [Eldenpedia — Mountaintops of the Giants](https://eldenring.wiki.gg/wiki/Mountaintops_of_the_Giants)
- Divergências: é simultaneamente descrita como região e legacy dungeon. A regra do projeto exclui masmorras que sejam apenas localizações, mas não resolve explicitamente grandes regiões isoladas que também são legacy dungeons.
- Decisão adotada: o usuário aprovou explicitamente Miquella's Haligtree como região independente, com ID estável `miquellas-haligtree`, `regionId` próprio e progresso separado de Consecrated Snowfield. Haligtree Town, Elphael e demais divisões internas permanecerão em `location`.
- Estado: `approved`

### Crumbling Farum Azula

- ID proposto: `crumbling-farum-azula`
- Nome em inglês: Crumbling Farum Azula
- Nome em português: Crumbling Farum Azula
- `displayOrder`: 160
- Classificação: região e legacy dungeon isolada
- Justificativa: área geograficamente separada no céu, com mapa e identidade próprios, sem região de superfície adequada à qual possa ser associada.
- Subáreas relevantes: Dragon Temple e a área da tempestade além do tempo.
- Fontes:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations)
  - [Eldenpedia — Crumbling Farum Azula](https://eldenring.wiki.gg/wiki/Crumbling_Farum_Azula)
  - [Eldenpedia — Locations](https://eldenring.wiki.gg/wiki/Locations)
- Divergências: é também uma legacy dungeon, mas as fontes consultadas a reconhecem como região isolada.
- Decisão adotada: aprovado explicitamente pelo usuário como região independente, com ID permanente `crumbling-farum-azula`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Estado: `approved`

## Áreas analisadas que não devem virar regiões

| Área | Região proposta | Motivo da exclusão do Drawer |
| --- | --- | --- |
| Stormhill | Limgrave | sub-região contígua de Limgrave |
| Mistwood | Limgrave | subárea de Limgrave |
| Stormveil Castle | Limgrave | castelo e legacy dungeon; deve permanecer em `location` |
| Castle Morne | Weeping Peninsula | castelo dentro da península |
| Academy of Raya Lucaria | Liurnia of the Lakes | legacy dungeon dentro de Liurnia |
| Bellum Highway | Liurnia of the Lakes | sub-região interna |
| Moonlight Altar | Liurnia of the Lakes | sub-região elevada de Liurnia |
| Nokron, Eternal City | Siofra River | cidade interna e sub-região de Siofra |
| Night's Sacred Ground | Siofra River | sublocalização de Nokron/Siofra |
| Siofra Aqueduct | Siofra River | estrutura interna de Siofra |
| Ainsel River Main | Ainsel River | seção da mesma região |
| Uhl Palace Ruins | Ainsel River | ruínas internas |
| Nokstella, Eternal City | Ainsel River | cidade interna |
| Grand Cloister | Lake of Rot | estrutura interna da região |
| Swamp of Aeonia | Caelid | sub-região interna de Caelid |
| Sellia, Town of Sorcery | Caelid | cidade interna |
| Redmane Castle | Caelid | castelo |
| Wailing Dunes | Caelid | subárea associada a Caelid |
| The Nameless Eternal City | Deeproot Depths | cidade interna |
| Capital Outskirts | Altus Plateau | sub-região contígua de Altus |
| Leyndell, Royal Capital | Altus Plateau | cidade e legacy dungeon; deve permanecer em `location` |
| Subterranean Shunning-Grounds | Altus Plateau | masmorra sob Leyndell |
| The Shaded Castle | Altus Plateau | castelo |
| Volcano Manor | Mt. Gelmir | mansão e legacy dungeon dentro de Mt. Gelmir |
| Forbidden Lands | Mountaintops of the Giants | corredor/sub-região de transição |
| Flame Peak | Mountaintops of the Giants | sub-região das Mountaintops |
| Castle Sol | Mountaintops of the Giants | castelo |
| Ordina, Liturgical Town | Consecrated Snowfield | cidade interna |
| Mohgwyn Dynasty Mausoleum | Mohgwyn Palace | estrutura interna |
| Haligtree Town | Miquella's Haligtree | cidade interna |
| Elphael, Brace of the Haligtree | Miquella's Haligtree | seção interna da mesma região |
| Dragon Temple | Crumbling Farum Azula | estrutura interna |

## Divergências pendentes

Não restam decisões estruturais pendentes na taxonomia proposta das regiões do jogo base. As divergências históricas sobre Greyoll's Dragonbarrow, Mt. Gelmir, Consecrated Snowfield e Miquella's Haligtree foram preservadas nos registros detalhados, mas resolvidas pela aprovação explícita do usuário.

Permanecem verificações documentais não estruturais:

1. **Traduções em português:** nenhuma fonte oficial consultada confirmou os nomes dessas regiões em português do Brasil; todos os campos portugueses repetem provisoriamente o inglês.
2. **Fextralife:** a referência inicial deverá ser conferida manualmente, pois não respondeu ao acesso automatizado durante esta pesquisa.

## Resumo para aprovação

- Quantidade total proposta: 16 regiões.
- Regiões de superfície: 11.
- Regiões subterrâneas: 5.
- Lista em ordem:
  1. Limgrave
  2. Weeping Peninsula
  3. Siofra River
  4. Liurnia of the Lakes
  5. Ainsel River
  6. Lake of Rot
  7. Caelid
  8. Greyoll's Dragonbarrow
  9. Deeproot Depths
  10. Altus Plateau
  11. Mt. Gelmir
  12. Mountaintops of the Giants
  13. Consecrated Snowfield
  14. Mohgwyn Palace
  15. Miquella's Haligtree
  16. Crumbling Farum Azula
- Regiões aprovadas explicitamente pelo usuário: todas as 16 regiões listadas acima.
- Regiões em `pending`: nenhuma.
- Regiões em `researched`: nenhuma.
- Regiões em `needs-review`: nenhuma.

## Mapeamento aprovado de subáreas — 2026-07-27

As seguintes áreas permanecem fora do Drawer e são usadas somente em `location`:

- Capital Outskirts, Leyndell, Royal Capital, Leyndell, Ashen Capital e Elden Throne → `altus-plateau`;
- Forbidden Lands → `mountaintops-of-the-giants`;
- Nokron, Eternal City → `siofra-river`.

Mohg, Lord of Blood pertence a `mohgwyn-palace`, não a Siofra River. Sua localização principal é Mohgwyn Dynasty Mausoleum.

Normalizações obrigatórias: `Dragonbarrow` → Greyoll's Dragonbarrow; `Mount Gelmir` → Mt. Gelmir; `Farum Azula` → Crumbling Farum Azula; `Consecrated Snowfields` → Consecrated Snowfield; `Ansel River` → Ainsel River. Nenhuma dessas variantes cria região adicional ou altera nomes de chefes.

Todas as 16 regiões propostas do jogo base foram aprovadas explicitamente pelo usuário em 2026-07-27. A ordem geral e os valores de `displayOrder` foram preservados. A sequência representa a organização aprovada para o aplicativo, não uma rota obrigatória para o jogador.

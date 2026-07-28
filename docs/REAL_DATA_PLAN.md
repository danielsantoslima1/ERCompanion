# Plano de inclusão dos dados reais

## Objetivo

Este documento define o processo para substituir os dados temporários por dados factuais, revisados e publicáveis. Ele não contém a lista real de regiões ou encontros e não autoriza mudanças no modelo de dados antes que as questões estruturais deste plano sejam decididas.

## Escopo dos encontros

Serão incluídos:

- todos os inimigos do jogo base que exibem barra de chefe;
- todos os inimigos de Shadow of the Erdtree que exibem barra de chefe;
- encontros obrigatórios e opcionais;
- cada encontro separado por localização, mesmo quando o mesmo chefe aparece mais de uma vez.

A unidade rastreada será o encontro, e não apenas o nome do chefe. Um mesmo chefe enfrentado em duas localizações produzirá dois registros independentes e dois estados de progresso.

Não serão incluídos inimigos sem barra de chefe. A classificação editorial como “boss”, Great Enemy, adversário único, invasor, NPC hostil, inimigo que não reaparece ou versão forte de inimigo comum não basta. Cada ocorrência deverá ser verificada individualmente, e somente a confirmação de que o jogo exibe barra de chefe naquele encontro permitirá sua inclusão.

A evidência da barra será registrada separadamente:

- `confirmed`: evidência confiável de que o encontro exibe barra;
- `not-confirmed`: chamado de chefe por uma fonte, mas ainda sem verificação;
- `rejected`: verificado sem barra e excluído;
- `needs-review`: evidências conflitantes ou situação especial.

Nenhum encontro poderá alcançar o estado geral `approved` sem evidência da barra `confirmed`.

A coleta ficará restrita aos fatos necessários para o aplicativo e para a auditoria: nome, localização, região, disponibilidade, participantes e fases relevantes, evidência da barra, fontes, divergências e identificadores.

## Organização das regiões

As regiões exibidas no Drawer seguirão a organização geográfica usada como referência em:

`https://eldenring.wiki.fextralife.com/Locations`

Exemplos de regiões geográficas principais do jogo base são:

- Limgrave;
- Weeping Peninsula;
- Liurnia of the Lakes;
- Caelid;
- Altus Plateau.

Esses exemplos não constituem a lista completa. As taxonomias definitivas do jogo base e de Shadow of the Erdtree já foram pesquisadas e aprovadas nas seções próprias deste documento.

Áreas subterrâneas relevantes também serão regiões independentes e de primeiro nível no Drawer. Exemplos:

- Siofra River;
- Ainsel River;
- Deeproot Depths;
- Lake of Rot;
- Mohgwyn Palace.

Esses exemplos não constituem a lista completa. A lista exata das regiões subterrâneas deverá ser pesquisada, comparada com outras fontes confiáveis e validada durante a coleta dos dados reais.

As regiões devem formar uma lista estável e adequada à navegação do aplicativo. Cada região terá:

- ID permanente;
- nome em inglês e português conforme a política de traduções;
- vínculo exclusivo com `base-game` ou `shadow-of-the-erdtree`;
- ordem de exibição explícita e estável.

As regiões subterrâneas seguirão essas mesmas regras e receberão seus encontros por `regionId`. Elas não serão artificialmente associadas a regiões da superfície.

Não será criado um agrupador genérico chamado `Underground`. Cada região subterrânea validada aparecerá diretamente como região no Drawer.

Castelos, cavernas, catacumbas, túneis, prisões, cidades, templos, masmorras e outras subáreas não serão regiões independentes, itens do Drawer ou submenus, salvo decisão explícita posterior do usuário. Esses locais serão associados à região geográfica, de superfície ou subterrânea, que os contém.

Uma área não será classificada automaticamente apenas pelo nome. Ancient Ruins of Rauh e Finger Ruins of Rhia foram aprovadas como regiões da expansão, apesar de conterem “Ruins” no nome.

Cada encontro pertencerá a exatamente uma região geográfica. O registro deverá separar:

- `regionId`: região geográfica usada no Drawer;
- `location`: local específico onde ocorre o encontro.

Exemplo estrutural:

- chefe: Leonine Misbegotten;
- região: Weeping Peninsula;
- localização: Castle Morne.

Os nomes de regiões e localizações terão campos localizados em português e inglês e seguirão a política de não inventar traduções.

### Agrupamento das regiões no Drawer

O submenu `Bosses` será dividido em dois grupos expansíveis e independentes:

- `Jogo base` em português e `Base game` em inglês;
- `Shadow of the Erdtree` nos dois idiomas.

A estrutura conceitual será:

```text
Bosses
  All regions
  Jogo base / Base game
    Limgrave
    Weeping Peninsula
    outras regiões do jogo base
  Shadow of the Erdtree
    regiões da expansão
```

Na ordem geral do Drawer, `Home` aparecerá antes de `Bosses`, e `Settings` aparecerá depois de todo o submenu. `All regions` permanecerá como o primeiro item interno de `Bosses` e continuará abrindo a página geral com todas as regiões.

Cada região continuará possuindo o campo que indica seu vínculo exclusivo com `base-game` ou `shadow-of-the-erdtree`. O Drawer usará esse campo para separar automaticamente as regiões, sem manter uma lista escrita manualmente dentro do componente.

### Ordem geográfica e progressiva

Dentro dos grupos `Jogo base` e `Shadow of the Erdtree`, as regiões deverão seguir uma ordem geográfica e progressiva. Essa ordem não será alfabética.

A página de locais da Fextralife será usada como referência inicial:

`https://eldenring.wiki.fextralife.com/Locations`

O campo `displayOrder` de cada região representará essa sequência. A organização deverá buscar refletir a disposição natural das áreas e uma progressão razoável pelo mapa, sem ser apresentada como uma rota obrigatória para o jogador.

As regiões subterrâneas receberão valores próprios de `displayOrder` dentro do grupo do jogo base. As regiões da expansão terão uma sequência independente dentro do grupo `Shadow of the Erdtree`.

A ordem usada no Drawer, na página geral de regiões e na Home deverá vir exclusivamente de `displayOrder`. Nenhum componente visual deverá conter uma sequência de regiões escrita manualmente.

As ordens definitivas e os valores de `displayOrder` dos dois grupos estão registrados nas taxonomias aprovadas abaixo. Quando uma fonte futura apresentar organização ambígua ou divergente:

- registrar a divergência em `docs/DATA_SOURCES.md`;
- documentar a ordem escolhida;
- justificar a decisão;
- encaminhar o caso para revisão manual quando necessário.

As decisões registradas abaixo definem as listas e os valores finais de `displayOrder`. Qualquer correção futura deverá retornar o registro afetado para `needs-review` e exigir nova aprovação explícita.

Os dois grupos poderão ser expandidos e recolhidos independentemente. Quando uma região estiver ativa:

- o grupo ao qual ela pertence deverá estar expandido;
- a região deverá aparecer selecionada;
- `Bosses` deverá continuar indicando que uma rota interna está ativa.

Se um grupo não possuir regiões, ele ainda poderá ser exibido com uma mensagem localizada informando que não há regiões disponíveis.

Este agrupamento não altera a taxonomia regional nem cria novos níveis para cavernas, castelos, masmorras ou outras subáreas. A lista definitiva de regiões não será definida nesta etapa.

### Decisões aprovadas para quatro regiões do jogo base

Em 2026-07-27, o usuário aprovou explicitamente quatro regiões independentes no Drawer:

| Região | ID permanente aprovado | Separação de progresso |
| --- | --- | --- |
| Greyoll's Dragonbarrow | `greyolls-dragonbarrow` | independente de Caelid |
| Mt. Gelmir | `mt-gelmir` | independente de Altus Plateau |
| Consecrated Snowfield | `consecrated-snowfield` | independente de Mountaintops of the Giants |
| Miquella's Haligtree | `miquellas-haligtree` | independente de Consecrated Snowfield |

Os IDs são estáveis e não dependem do idioma. Enquanto não houver tradução oficial em português do Brasil confirmada, o campo português repetirá exatamente o nome inglês.

Os encontros associados usarão, respectivamente:

- `regionId: "greyolls-dragonbarrow"`;
- `regionId: "mt-gelmir"`;
- `regionId: "consecrated-snowfield"`;
- `regionId: "miquellas-haligtree"`.

Cada região terá seu próprio cálculo de progresso. A taxonomia do aplicativo priorizará regiões independentes para navegação e acompanhamento de progresso, mesmo que algumas fontes classifiquem Greyoll's Dragonbarrow, Mt. Gelmir e Consecrated Snowfield como sub-regiões ou também classifiquem Miquella's Haligtree como legacy dungeon.

Volcano Manor e outras divisões internas de Mt. Gelmir, Ordina e outras divisões internas de Consecrated Snowfield, além de Haligtree Town, Elphael e outras divisões internas de Miquella's Haligtree, permanecerão no campo `location`.

Essas decisões resolvem as pendências estruturais das quatro regiões. As fontes e classificações contrárias permanecerão registradas como histórico. Qualquer correção futura deverá retornar o registro afetado para `needs-review` e passar novamente pelo processo de revisão e aprovação do usuário.

### Taxonomia completa aprovada do jogo base

Em 2026-07-27, o usuário aprovou explicitamente as 12 regiões restantes da proposta. Com as quatro aprovações anteriores, a taxonomia do jogo base possui agora 16 regiões aprovadas: 11 de superfície e 5 subterrâneas.

A ordem e os IDs permanentes aprovados são:

1. Limgrave — `limgrave` — `displayOrder: 10`;
2. Weeping Peninsula — `weeping-peninsula` — `displayOrder: 20`;
3. Siofra River — `siofra-river` — `displayOrder: 30`;
4. Liurnia of the Lakes — `liurnia-of-the-lakes` — `displayOrder: 40`;
5. Ainsel River — `ainsel-river` — `displayOrder: 50`;
6. Lake of Rot — `lake-of-rot` — `displayOrder: 60`;
7. Caelid — `caelid` — `displayOrder: 70`;
8. Greyoll's Dragonbarrow — `greyolls-dragonbarrow` — `displayOrder: 80`;
9. Deeproot Depths — `deeproot-depths` — `displayOrder: 90`;
10. Altus Plateau — `altus-plateau` — `displayOrder: 100`;
11. Mt. Gelmir — `mt-gelmir` — `displayOrder: 110`;
12. Mountaintops of the Giants — `mountaintops-of-the-giants` — `displayOrder: 120`;
13. Consecrated Snowfield — `consecrated-snowfield` — `displayOrder: 130`;
14. Mohgwyn Palace — `mohgwyn-palace` — `displayOrder: 140`;
15. Miquella's Haligtree — `miquellas-haligtree` — `displayOrder: 150`;
16. Crumbling Farum Azula — `crumbling-farum-azula` — `displayOrder: 160`.

Cada região terá item próprio no grupo do jogo base no Drawer, `regionId`, nome localizado, `displayOrder` e progresso regional próprios. A ordem aprovada será usada no Drawer, na Home e na página geral de regiões.

Siofra River, Ainsel River, Lake of Rot, Deeproot Depths e Mohgwyn Palace permanecerão como regiões subterrâneas independentes. Castelos, cavernas, catacumbas, cidades internas, ruínas, masmorras e demais sublocalizações continuarão registradas em `location`.

Todos os IDs são permanentes, estáveis e independentes do idioma. Enquanto não houver tradução oficial em português do Brasil confirmada, o campo português repetirá exatamente o nome inglês.

Não restam regiões do jogo base em `pending`, `researched` ou `needs-review`. Fontes, observações e divergências permanecem documentadas como histórico. Futuras correções deverão retornar o registro afetado para `needs-review` e seguir o processo de aprovação.

### Taxonomia completa aprovada de Shadow of the Erdtree

Em 2026-07-27, o usuário aprovou explicitamente dez regiões da expansão, nesta ordem:

1. Gravesite Plain — `gravesite-plain` — `displayOrder: 1`;
2. Scadu Altus — `scadu-altus` — `displayOrder: 2`;
3. Rauh Base — `rauh-base` — `displayOrder: 3`;
4. Ancient Ruins of Rauh — `ancient-ruins-of-rauh` — `displayOrder: 4`;
5. Cerulean Coast — `cerulean-coast` — `displayOrder: 5`;
6. Charo's Hidden Grave — `charos-hidden-grave` — `displayOrder: 6`;
7. Jagged Peak — `jagged-peak` — `displayOrder: 7`;
8. Abyssal Woods — `abyssal-woods` — `displayOrder: 8`;
9. Finger Ruins of Rhia — `finger-ruins-of-rhia` — `displayOrder: 9`;
10. Scaduview — `scaduview` — `displayOrder: 10`.

Essa ordem será a fonte do Drawer, da Home e das páginas de regiões da expansão. Ela não representa uma rota obrigatória.

`Southern Shore` não será região nem `regionId`; permanece apenas como classificação ampla e cobertura cartográfica no histórico. O agrupador provisório `Rauh Ruins` e o ID `rauh-ruins` foram substituídos pelas regiões independentes Rauh Base e Ancient Ruins of Rauh. Como os IDs provisórios nunca chegaram aos dados de produção, nenhuma migração será criada para eles.

Belurat, Castle Ensis, Shadow Keep, Midra's Manse e outras cidades, fortalezas, cavernas, catacumbas e masmorras permanecem em `location`, salvo decisão explícita posterior.

Todos os dez IDs aprovados são permanentes, estáveis e independentes do idioma. Serão reutilizados futuramente por chefes, itens e outras categorias de conteúdo e estarão sujeitos às regras documentadas de correção e migração.

Não restam regiões da expansão em `pending`, `researched` ou `needs-review`. A taxonomia completa possui 16 regiões do jogo base e 10 regiões da expansão.

### Regiões compartilhadas e progresso por categoria

A taxonomia regional não será determinada apenas pela presença de encontros com chefes. Regiões são entidades geográficas compartilhadas por diferentes categorias de conteúdo.

Chefes serão a primeira categoria implementada. Itens serão adicionados depois e deverão reutilizar os mesmos `regionId`; equipamentos e outras categorias futuras deverão seguir a mesma identidade regional.

Uma região sem chefes continuará disponível no Drawer e poderá apresentar progresso de chefes `0/0`. A ausência de encontros não será motivo para remover a região ou incorporá-la a outra.

O progresso de chefes e o futuro progresso de itens permanecerão conceitualmente separados. Uma região poderá ter contagens diferentes em cada categoria sem duplicação ou alteração de seu ID permanente.

## Tratamento de casos especiais

### Chefes repetidos

Cada ocorrência será registrada separadamente quando a localização for diferente. Os registros poderão compartilhar os mesmos nomes localizados, mas terão IDs diferentes e localizações específicas.

Repetições dentro da mesma localização somente devem gerar registros distintos quando forem encontros independentes, com barras de chefe e progresso separáveis. Duplicações originadas apenas por divergência entre fontes devem ser eliminadas na revisão.

### Chefes com mais de um inimigo

Um combate será registrado como um único encontro quando todos os inimigos fizerem parte da mesma batalha e a vitória depender da conclusão do combate completo. Essa regra será aplicada mesmo quando os inimigos tiverem barras de vida separadas.

Esse encontro terá:

- um único ID permanente;
- um único nome;
- uma única região;
- uma única localização;
- um único estado de progresso.

O nome deverá representar o combate completo conforme exibido pelo jogo. O aplicativo não criará registros separados para cada barra de vida ou inimigo participante.

Exemplo:

- encontro: Godskin Duo;
- participantes: dois inimigos com barras de vida separadas;
- registro no aplicativo: somente Godskin Duo;
- progresso: um único estado derrotado ou não derrotado.

Marcar o encontro como derrotado representará a conclusão de todo o combate.

O ID deverá considerar o nome completo do encontro e a localização, seguindo a convenção de normalização em inglês e sem depender do idioma selecionado.

Durante a coleta, todos os encontros com múltiplos inimigos deverão ser identificados e comparados com o inventário para impedir registros individuais duplicados de suas barras ou participantes. A revisão deverá confirmar que:

- todos os participantes pertencem à mesma batalha;
- a vitória depende da conclusão do combate completo;
- o encontro coletivo conta apenas uma vez nos totais geral e regional.

Múltiplas barras dentro da mesma batalha não deverão ser confundidas com encontros independentes que acontecem separadamente. Quando os combates forem independentes e separadamente concluíveis, cada encontro deverá receber seu próprio registro.

### Variações do mesmo chefe

Variações com barra de chefe própria serão tratadas como encontros independentes. O nome oficial exibido deve ser preservado, e a localização deve distinguir as ocorrências.

Diferenças de fase dentro do mesmo combate não criam outro registro. Mudanças meramente visuais, de atributos ou de comportamento também não criam outro registro quando não correspondem a um encontro separadamente concluível.

Uma mudança de nome entre fases da mesma luta também não cria outro encontro. Revanche ou reaparição em outra localização cria um novo encontro, ID e progresso.

### Cavernas, catacumbas, túneis, prisões e subáreas

O campo de localização deve registrar o nome específico do local. O campo de região deve apontar para a região navegável definida pela taxonomia do projeto.

Castelos, cavernas, catacumbas, túneis, prisões, ruínas, cidades, templos, masmorras e outras subáreas não terão entradas ou submenus próprios no Drawer. Todo chefe encontrado nesses locais continuará associado à região correspondente por `regionId`, enquanto `location` identificará a subárea específica.

Essa regra também vale dentro das regiões subterrâneas independentes. Por exemplo, uma caverna, ruína, cidade ou templo existente dentro de uma região subterrânea será registrada em `location`, sem criar outro nível no Drawer.

### Condições de disponibilidade

Cada encontro poderá possuir um campo opcional próprio para indicar condições necessárias para que esteja disponível. O nome recomendado é:

`availability`

Esse campo será separado de `location`:

- `location` conterá somente o lugar específico do encontro;
- `availability` conterá somente a condição necessária para que o encontro esteja disponível.

Quando presente, `availability` deverá possuir conteúdo localizado em português e inglês. O campo poderá descrever de forma curta condições como:

- somente à noite;
- somente durante o dia;
- disponível após determinado evento;
- disponível após concluir determinada etapa.

Quando não houver condição especial, `availability` poderá ser omitido. Não será necessário preencher o campo com uma mensagem equivalente a “sem condição especial”.

Exemplo estrutural:

- região: uma região geográfica;
- localização: uma área específica;
- disponibilidade em português: `Somente à noite`;
- disponibilidade em inglês: `Night only`.

A condição não deverá ser incorporada ao nome do chefe nem à localização. Inicialmente, não serão criados campos específicos para missões, eventos ou requisitos detalhados. Condições temporais e requisitos de progresso poderão ser descritos de forma curta no mesmo campo `availability`.

Durante a coleta, cada condição deverá ser confirmada em mais de uma fonte confiável. Divergências deverão ser resolvidas e registradas antes da inclusão do encontro.

### Encontros opcionais

Todo encontro opcional que cumpra o critério da barra de chefe será incluído. A condição de ser opcional não muda seu peso na contagem de progresso desta versão.

## Convenção de IDs permanentes

Os IDs devem:

- usar somente letras minúsculas de `a` a `z`, números de `0` a `9` e hífens;
- ser únicos em todo o conjunto correspondente;
- permanecer estáveis depois de publicados;
- não depender do idioma selecionado;
- não conter acentos, espaços, apóstrofos ou outros sinais;
- representar o encontro, considerando o chefe e sua localização.

Formato recomendado para encontros:

```text
nome-ingles-normalizado-localizacao-ingles-normalizada
```

Quando isso não for suficiente para garantir unicidade, deve ser acrescentado um qualificador factual e estável, como uma subárea. Números ordinais arbitrários devem ser evitados porque podem mudar quando novos registros forem descobertos.

Formato recomendado para regiões:

```text
nome-ingles-normalizado
```

Depois que um ID for publicado e puder existir em progresso salvo, ele será considerado estável. Correções de grafia ou tradução não deverão alterá-lo.

Antes de aceitar um lote, todos os IDs devem ser comparados entre si e validados contra a expressão:

```text
^[a-z0-9]+(?:-[a-z0-9]+)*$
```

### Correção de IDs permanentes publicados

Um ID publicado somente poderá ser alterado quando existir uma necessidade real, como:

- erro de identificação;
- duplicidade;
- associação incorreta de região ou localização;
- mudança estrutural indispensável.

Não será permitido remover silenciosamente um ID real publicado. Toda alteração exigirá uma migração explícita do ID antigo para o novo e deverá preservar o progresso do usuário.

Para uma substituição direta:

- se o ID antigo estiver derrotado, o ID novo deverá ser marcado como derrotado;
- o ID antigo deverá ser removido depois da conversão;
- se o ID antigo não estiver salvo no progresso, a migração não deverá adicionar o ID novo;
- todos os demais IDs deverão permanecer inalterados.

Quando vários IDs antigos forem consolidados em um único ID novo:

- o novo ID deverá ser marcado como derrotado se pelo menos um dos IDs antigos estiver derrotado;
- todos os IDs antigos correspondentes deverão ser removidos.

Quando um ID antigo precisar ser dividido em vários novos IDs, a migração não deverá distribuir automaticamente o progresso. Qualquer distribuição exigirá uma regra específica e documentada para o caso. Se houver dúvida sobre a equivalência entre o ID antigo e o novo, a alteração deverá passar por revisão manual antes da implementação.

Cada migração de ID publicado deverá:

- ser versionada;
- ser idempotente;
- atuar somente sobre a chave de progresso;
- preservar idioma e preferência de tema;
- não usar `AsyncStorage.clear()`.

Toda alteração deverá ser registrada em um histórico de migrações contendo:

- versão da migração;
- ID antigo;
- ID novo;
- motivo da alteração;
- regra de preservação do progresso;
- data da decisão.

Antes de publicar a migração, testes automatizados deverão confirmar:

- conversão do ID antigo para o novo;
- preservação do estado derrotado;
- remoção do ID antigo;
- preservação dos demais IDs;
- preservação de idioma e tema;
- execução repetida sem efeitos incorretos;
- comportamento quando o ID antigo não existir no progresso.

Esta etapa define somente a política e não implementa nenhuma migração.

### IDs temporários e migração de progresso

Todos os IDs iniciados por `sample-` identificam dados fictícios usados exclusivamente para validar a arquitetura do aplicativo. Esses registros deverão ser completamente removidos antes da publicação. Chefes e regiões temporários não poderão permanecer misturados aos dados reais.

Não haverá conversão nem associação automática entre o progresso de IDs `sample-*` e encontros reais. O progresso associado aos IDs temporários será descartado.

A limpeza será implementada por uma migração versionada somente quando o primeiro lote de dados reais estiver pronto. A migração deverá:

- atuar exclusivamente sobre a chave de progresso;
- remover IDs derrotados iniciados por `sample-`;
- preservar IDs reais e válidos;
- preservar as configurações de idioma e preferência de tema;
- não usar `AsyncStorage.clear()`;
- poder ser executada novamente sem produzir efeitos incorretos;
- registrar sua versão para não ser repetida sem necessidade.

Uma migração futura também poderá remover IDs derrotados que não existam mais no conjunto oficial de encontros, mas somente quando essa remoção for determinada explicitamente pela versão correspondente. A migração inicial não deverá ampliar silenciosamente a limpeza para outros IDs.

Antes de substituir os dados temporários, deverá existir um teste automatizado que confirme:

- remoção dos IDs `sample-*`;
- preservação dos IDs reais;
- preservação do idioma;
- preservação da preferência de tema;
- tratamento correto de listas vazias;
- idempotência da migração.

Esta etapa registra somente a política. Nenhuma migração, alteração de armazenamento ou substituição de dados será implementada agora.

## Política de traduções

O aplicativo continuará disponível em português do Brasil e inglês.

A interface geral — como botões, filtros, mensagens e configurações — deverá continuar traduzida naturalmente para português do Brasil.

Para nomes próprios e conteúdo factual localizado, a tradução oficial em português do Brasil somente será usada quando puder ser confirmada em:

- texto exibido no próprio jogo;
- material oficial da desenvolvedora ou distribuidora;
- outra fonte oficial confiável.

Essa política será aplicada a:

- nomes de chefes;
- nomes de encontros;
- regiões;
- localizações;
- condições de disponibilidade;
- outros nomes próprios adicionados futuramente.

O campo inglês usará o nome oficial em inglês. Quando não existir tradução oficial confirmada, o campo português deverá repetir exatamente o nome inglês, preservando sua grafia, capitalização e pontuação.

Traduções não serão inventadas. Nomes oficiais não serão adaptados apenas para parecerem mais naturais em português.

Fontes comunitárias poderão ajudar a localizar informações e possíveis referências, mas suas traduções não serão tratadas como oficiais. Uma tradução em português encontrada inicialmente em fonte comunitária somente poderá ser adotada depois de confirmação em fonte oficial.

Quando fontes confiáveis divergirem sobre um nome:

1. registrar a divergência e as fontes envolvidas;
2. manter temporariamente o nome inglês no campo português;
3. encaminhar o caso para revisão manual antes da publicação.

Durante a coleta, deverá ser registrada a fonte usada para confirmar cada tradução oficial. A ausência de tradução oficial também deverá ficar identificável no inventário, justificando a repetição do inglês no campo português.

Diferenças de tradução, capitalização ou pontuação não deverão alterar os IDs permanentes.

## Estratégia de pesquisa

O plano operacional detalhado está registrado em `docs/BOSS_RESEARCH_PLAN.md`.

### Família editorial de descoberta fornecida pelo usuário

As referências iniciais do jogo base são:

- artigo Rock Paper Shotgun: `https://www.rockpapershotgun.com/elden-ring-boss-locations`;
- mapa visual completo associado: `https://assetsio.gnwcdn.com/elden-ring-boss-locations-map-full-v3.webp`.

O artigo apresenta uma relação editorial de 238 entradas, listas por áreas, mapas regionais e um apontamento para artigo separado de `Shadow of the Erdtree`. Ele será usado apenas para descoberta inicial e pistas de nome, localização geral, condições e repetições. O mapa servirá para conferir distribuição, região aproximada, numeração e cobertura.

Artigo e mapa pertencem à mesma publicação e ao mesmo levantamento. Serão uma única família de fontes, portanto a concordância entre ambos não conta como validação independente. Cada candidato exigirá pelo menos uma fonte independente e verificação específica da barra. Fontes oficiais terão prioridade para nome, localização e tradução verificável.

A lista editorial poderá incluir adversários fora do critério do aplicativo. Nenhuma de suas entradas será importada ou aprovada automaticamente.

O mapa permanecerá somente como URL na documentação: não será baixado, incorporado ao repositório, redistribuído ou exibido no aplicativo.

Para cada região e encontro:

1. consultar mais de uma fonte confiável;
2. comparar nome oficial, localização, disponibilidade, região, conteúdo e natureza do encontro;
3. registrar todas as versões relevantes quando houver divergências e resolvê-las antes de inserir o registro;
4. registrar as fontes consultadas em `docs/DATA_SOURCES.md`, associadas ao ID permanente da região ou do encontro;
5. guardar apenas os fatos necessários ao aplicativo.

Devem ser priorizadas fontes oficiais e fontes secundárias reconhecidas que permitam conferir a cobertura completa. Uma única fonte não deve determinar sozinha a inclusão, exclusão ou localização de um encontro quando houver alternativa verificável.

Fontes comunitárias poderão ser usadas para localizar e comparar informações factuais. Traduções em português somente poderão ser consideradas oficiais quando confirmadas por uma fonte oficial, conforme a política de nomes em português.

### Registro separado das fontes

As referências serão mantidas exclusivamente em `docs/DATA_SOURCES.md`. Uma mesma fonte poderá ser usada para vários registros, mas cada região e encontro deverá indicar claramente quais fontes sustentam seus dados e a finalidade de cada consulta.

O registro de cada região deverá permitir informar:

- ID permanente da região;
- nome em inglês;
- fontes consultadas;
- finalidade de cada fonte;
- divergências encontradas;
- decisão adotada;
- estado da revisão.

O registro de cada encontro deverá permitir informar:

- ID permanente do encontro;
- nome em inglês;
- nome oficial em português do Brasil, quando confirmado;
- `regionId`;
- `location` em inglês;
- `location` em português;
- `availability`, quando aplicável;
- quantidade de inimigos ou participantes;
- nomes das fases, quando relevantes;
- estado da evidência da barra;
- fontes usadas para confirmar a barra;
- fontes de nome e localização;
- fontes consultadas;
- confirmação do nome;
- confirmação da localização;
- confirmação da disponibilidade;
- confirmação da tradução em português;
- divergências encontradas;
- decisão adotada;
- estado da revisão.

### Pesquisa em lotes regionais

A ordem inicial dos lotes do jogo base será:

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

Cada região passará por:

1. descoberta inicial no artigo e no mapa;
2. comparação com pelo menos uma fonte independente;
3. verificação específica da barra de chefe;
4. normalização dos encontros por localização;
5. proposta de IDs;
6. validações automáticas;
7. apresentação ao usuário;
8. aprovação explícita do usuário.

Essa ordem organiza os lotes e não constitui rota obrigatória.

Quando houver divergência, todas as versões relevantes deverão ser registradas. Nenhuma versão deverá ser escolhida silenciosamente: o motivo da decisão deverá ser documentado e o registro deverá ser marcado para revisão manual quando necessário.

URLs e informações de pesquisa não deverão fazer parte dos objetos usados pelo aplicativo nem ser exibidas na interface. `docs/DATA_SOURCES.md` não deverá ser importado pelo código de produção ou incluído no bundle. O código de produção deverá conter somente os dados necessários ao funcionamento offline.

Não devem ser copiados:

- descrições narrativas;
- estratégias;
- guias;
- mapas protegidos;
- imagens;
- textos extensos;
- qualquer outro conteúdo autoral desnecessário.

O registro deverá se limitar aos fatos necessários: nome, região, localização, disponibilidade, relação entre o encontro e a área e tradução oficial confirmada.

## Processo de revisão e aprovação

O usuário será o revisor e aprovador final de todos os dados reais. Somente o usuário poderá alterar o estado de uma região ou encontro para `approved`.

O GPT poderá:

- pesquisar fontes;
- organizar regiões e encontros;
- comparar nomes, localizações e condições de disponibilidade;
- identificar e explicar divergências;
- propor IDs permanentes;
- sugerir traduções oficialmente confirmadas;
- preparar lotes pequenos de dados para revisão;
- executar validações automáticas.

O GPT não considerará um registro aprovado automaticamente, mesmo quando duas ou mais fontes concordarem. Essa concordância será apresentada como evidência, mas a decisão final permanecerá com o usuário.

### Estados de revisão

- `pending`: o registro ainda não foi pesquisado suficientemente;
- `researched`: a pesquisa foi concluída e o registro aguarda revisão;
- `needs-review`: existe dúvida ou divergência;
- `approved`: o usuário aprovou explicitamente o registro.

Registros com estado diferente de `approved` não serão considerados prontos para publicação. A aprovação de um registro não implicará aprovação automática de outros registros semelhantes.

Antes de solicitar aprovação, o GPT deverá apresentar para cada registro, conforme aplicável:

- ID permanente proposto;
- nome em inglês;
- nome em português;
- região;
- localização;
- disponibilidade, quando houver;
- fontes consultadas;
- divergências encontradas;
- decisão recomendada;
- resultado da validação automática.

Quando existir divergência entre fontes, o GPT deverá:

- explicar claramente o conflito;
- apresentar as versões encontradas;
- indicar quais fontes sustentam cada versão;
- sugerir uma decisão;
- manter o estado como `needs-review` até a decisão do usuário.

A revisão e a aprovação ocorrerão em lotes pequenos. Nenhum lote será incorporado definitivamente aos dados oficiais do aplicativo antes da aprovação explícita do usuário.

Correções posteriores em registros já aprovados deverão retornar os registros afetados para `needs-review` e passar por nova decisão do usuário.

Cada decisão do usuário será registrada em `docs/DATA_SOURCES.md`, incluindo:

- data da decisão;
- registro aprovado;
- decisão adotada;
- observações relevantes.

## Processo de validação

Cada lote deve passar por validação automatizada e revisão manual.

### Validação estrutural

- detectar IDs duplicados de regiões;
- detectar IDs duplicados de encontros;
- rejeitar IDs fora da convenção;
- detectar referências a regiões inexistentes;
- rejeitar nomes ou localizações vazios em qualquer idioma;
- quando `availability` estiver presente, rejeitar conteúdo vazio em qualquer idioma;
- verificar que a região e seus encontros pertencem ao mesmo conteúdo;
- verificar valores válidos para jogo base e expansão;
- verificar ordens de exibição de região duplicadas ou inconsistentes.
- verificar que Drawer, página geral de regiões e Home usam exclusivamente `displayOrder`;
- revisar se a sequência de cada grupo segue a ordem geográfica e progressiva aprovada;
- confirmar que regiões subterrâneas possuem `displayOrder` dentro do grupo do jogo base;
- confirmar que as regiões de `Shadow of the Erdtree` possuem sequência própria.

### Validação de conteúdo

- comparar o inventário coletado com as fontes para encontrar encontros ausentes;
- detectar encontros duplicados incorretamente;
- confirmar que repetições legítimas possuem localizações e IDs distintos;
- revisar combates com múltiplos inimigos e impedir registros individuais duplicados para barras ou participantes da mesma batalha;
- confirmar que cada encontro coletivo possui um único ID, nome, região, localização e estado de progresso;
- distinguir múltiplas barras da mesma batalha de encontros independentes e separadamente concluíveis;
- conferir a contagem total por região;
- conferir a contagem total do jogo base e da expansão;
- revisar nomes e localizações nos dois idiomas;
- revisar condições de disponibilidade nos dois idiomas;
- confirmar cada condição de disponibilidade em mais de uma fonte confiável;
- verificar que condições não foram incorporadas ao nome ou à localização;
- verificar que toda tradução em português foi confirmada em fonte oficial;
- verificar que nomes sem tradução oficial repetem exatamente o inglês no campo português;
- detectar traduções inventadas, adaptações editoriais ou traduções comunitárias tratadas incorretamente como oficiais;
- registrar divergências e encaminhá-las para revisão manual antes da publicação.

### Validação no aplicativo

- executar os testes de integridade dos dados;
- executar a suíte completa;
- executar `npx tsc --noEmit`;
- executar `npx expo lint`;
- executar `npx expo-doctor`;
- conferir navegação, busca, filtros e progresso em português e inglês;
- verificar que o aplicativo continua funcionando offline e no Expo Go.

Antes da publicação, o usuário deverá realizar a revisão manual final, comparar a versão candidata com o inventário de pesquisa e registrar sua aprovação explícita.

## Implementação em lotes pequenos

1. Preparar o inventário de pesquisa e resolver as questões estruturais.
2. Concluir a pesquisa e as validações automáticas do primeiro lote de dados reais.
3. Apresentar o primeiro lote ao usuário e registrar sua aprovação explícita.
4. Criar o teste automatizado da migração dos IDs temporários.
5. Implementar a migração versionada somente quando esse primeiro lote estiver pronto e aprovado.
6. Substituir as duas regiões temporárias pelas duas regiões reais aprovadas, sem misturar registros temporários e reais.
7. Incluir apenas os encontros aprovados pertencentes a essas duas regiões.
8. Validar a remoção de `sample-*`, a preservação do progresso real e a preservação de idioma e tema.
9. Validar dados, testes, TypeScript, lint, Expo Doctor e funcionamento no Expo Go.
10. Revisar contagens, traduções, navegação, busca e persistência.
11. Adicionar novas regiões gradualmente, em lotes pequenos e explicitamente aprovados.
12. Repetir a validação automática e a revisão do usuário após cada lote.
13. Manter um registro da cobertura coletada, das fontes, das decisões e das pendências.
14. Fazer a auditoria final do conjunto completo antes de preparar a publicação.

Um lote não deve misturar correções estruturais amplas com grande volume de dados. Se a coleta revelar que o modelo atual é insuficiente, a inclusão deve ser pausada e a mudança de estrutura planejada separadamente.

## Arquivos provavelmente modificados posteriormente

Os arquivos mais prováveis são:

- `src/data/regions.ts`;
- `src/data/bosses.ts`;
- `src/types/boss.ts`, para incorporar o campo localizado opcional `availability`;
- `src/data/validation.ts`;
- `src/data/__tests__/selectors.test.ts`;
- novos ou atuais testes de integridade dos dados em `src/data/__tests__/`;
- armazenamento de progresso e seus testes, para a futura migração versionada de `sample-*`;
- `src/navigation/custom-drawer-content.tsx`, para implementar os grupos expansíveis em etapa posterior;
- traduções da interface necessárias aos títulos dos grupos e às mensagens de grupo vazio;
- `docs/DATA_SOURCES.md`, para registrar as fontes associadas aos IDs permanentes;
- documentação de fontes e revisão em `docs/`.

Dependendo das decisões pendentes e da apresentação aprovada, também poderão exigir alteração:

- `src/types/region.ts`;
- `src/i18n/` se novos textos de interface forem realmente necessários;
- telas e componentes que apresentarem `availability`.

Essas alterações condicionais não devem ser feitas apenas para iniciar a coleta. Primeiro deve ser confirmado que o modelo atual não representa adequadamente um requisito.

## Critérios para dados prontos para publicação

Os dados estarão prontos quando:

- o inventário incluir todos os encontros definidos pelo escopo;
- jogo base e expansão estiverem completamente cobertos;
- cada encontro estiver associado à região e localização corretas;
- todas as condições de disponibilidade existentes estiverem confirmadas em mais de uma fonte e localizadas nos dois idiomas;
- repetições legítimas estiverem separadas e duplicações incorretas removidas;
- todos os IDs forem únicos, válidos, permanentes e revisados;
- todas as regiões e encontros estiverem com estado `approved` por decisão explícita do usuário;
- todos os campos em inglês estiverem confirmados;
- todos os campos em português tiverem tradução oficial confirmada e fonte registrada ou repetirem exatamente o inglês;
- todas as fontes estiverem registradas;
- divergências entre fontes estiverem documentadas e manualmente revisadas, mantendo o inglês no campo português enquanto não houver confirmação oficial;
- contagens totais e por região estiverem conferidas;
- validações automatizadas e suíte completa passarem;
- navegação, busca, filtros e progresso forem revisados nos dois idiomas;
- não houver conteúdo autoral copiado além dos fatos estritamente necessários;
- uma revisão manual final tiver sido concluída e aprovada explicitamente pelo usuário.

## Questões que precisam ser decididas antes da coleta

A lista regional e os valores de `displayOrder` do jogo base e da expansão estão aprovados. Permanece para a etapa de coleta:

1. Como serão tratados casos factuais de localização ou disponibilidade em que o jogo, materiais oficiais e fontes secundárias divergirem?

## Primeira ação recomendada

## Mapeamentos estruturais aprovados em 2026-07-27

- Capital Outskirts, Leyndell, Royal Capital, Leyndell, Ashen Capital e Elden Throne são localizações de `altus-plateau`.
- Forbidden Lands é localização de `mountaintops-of-the-giants`.
- Nokron, Eternal City e subáreas usam `siofra-river`.
- Mohg, Lord of Blood pertence a `mohgwyn-palace`, com Mohgwyn Dynasty Mausoleum como área principal.
- Subáreas internas podem ser usadas em `location` sem aparecer no Drawer.
- Usar exclusivamente Greyoll's Dragonbarrow, Mt. Gelmir, Crumbling Farum Azula, Consecrated Snowfield e Ainsel River, com seus IDs aprovados.

O usuário forneceu inventários para os 13 lotes restantes do jogo base, totalizando 105 entradas, e aprovou parcialmente os nomes e associações regionais em 2026-07-27. A pesquisa documental não publica encontros: aprovação final ocorrerá somente após apresentação e decisão sobre as divergências.

Pesquisar e preparar o lote de encontros de Limgrave, sem modificar os dados do aplicativo.

## Catálogo de chefes do jogo base aprovado — 2026-07-28

A pesquisa e a revisão do jogo base foram concluídas com aprovação explícita do usuário:

- 165 encontros `approved` em 16 regiões;
- 165 barras `confirmed`;
- 22 encontros de Limgrave previamente aprovados e 143 aprovados nesta decisão;
- nenhuma pendência ativa;
- ocorrências por localização, batalhas coletivas, fases, summons e auxiliares mantêm as unidades documentadas;
- candidatos sem barra permanecem `rejected` e fora do catálogo;
- os registros ainda não foram inseridos nos dados do aplicativo.

Correções futuras retornam o registro a `needs-review`. Após publicação, mudanças de IDs exigem migrações explícitas, versionadas e idempotentes. Próxima pesquisa: chefes de `Shadow of the Erdtree`.
## Pesquisa dos chefes da expansão

Em `2026-07-28`, o usuário aprovou parcialmente um inventário de 42 nomes e suas associações às dez regiões de `Shadow of the Erdtree`. A aprovação final depende da pesquisa de barra, localização, disponibilidade, participantes, fases, nomes e IDs. `Enir-Ilim` não criará novo `regionId`: é `location` de `gravesite-plain`. Regiões sem chefes, inclusive `finger-ruins-of-rhia`, permanecem válidas e reutilizáveis pelo futuro catálogo de itens.

Após a normalização, as 42 entradas originais produziram 44 registros documentais: 43 encontros ativos `confirmed`/`approved` e Dryleaf Dane `rejected`. Jagged Peak Drake e Tree Sentinel foram divididos em ocorrências separadamente concluíveis. Finger Ruins of Rhia permanece válida com zero chefes.

O catálogo completo contém 208 encontros aprovados e com barra confirmada: 165 do jogo base e 43 da expansão, distribuídos em 26 regiões (16 + 10). Candidatos rejeitados permanecem fora do total. Os dados ainda não foram inseridos no aplicativo; a próxima fase é preparar a modelagem final e a geração validada dos arquivos reais.

## Catálogo real isolado

Histórico da etapa isolada: as 26 regiões e os 208 encontros foram gerados e validados em `src/data/catalog` enquanto os dados temporários ainda estavam ativos. Esse estado foi superado pela integração registrada abaixo.

## Integração do catálogo real

Etapa concluída: as 26 regiões e os 208 encontros agora são a fonte ativa das telas e seletores. Os módulos `sample-*` foram removidos do fluxo de produção. O progresso usa o esquema versionado 1, com leitura compatível do array legado; durante a hidratação, IDs `sample-*` são descartados, duplicatas são removidas e IDs reais desconhecidos são preservados. Reset, idioma e tema permanecem isolados por chave.

A integração não altera os IDs ou dados aprovados do catálogo.

## Revisão manual da integração

A revisão manual no Expo Go foi concluída com sucesso, sem necessidade de correções visuais ou funcionais. Foram validados os 26 registros regionais e os 208 encontros, grupos de conteúdo, Drawer, Home, All regions, página regional, busca, filtros, progresso, persistência, reset, idiomas, temas, região sem encontros e as unidades especiais documentadas.

O progresso de teste foi removido ao final. Idioma e tema foram preservados. A migração versionada está funcionando, e nenhum dado `sample-*` participa do fluxo de produção.

Próxima etapa: planejar a tela de detalhes dos encontros e, posteriormente, iniciar a pesquisa e modelagem dos itens do jogo.

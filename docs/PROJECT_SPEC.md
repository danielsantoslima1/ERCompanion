# Elden Ring Companion

## Objetivo

Aplicativo móvel para acompanhar os chefes derrotados em Elden Ring e na expansão Shadow of the Erdtree.

## Tecnologias

- React Native
- Expo
- TypeScript
- Expo Router
- npm
- AsyncStorage
- Compatível com Expo Go
- Android inicialmente

## Identidade

- Nome: Elden Ring Companion
- Slug: elden-ring-companion
- Android package: com.danielsantos.ercompanion

## Escopo da primeira versão

- Rastrear apenas chefes.
- Incluir o jogo base e Shadow of the Erdtree.
- Incluir todos os inimigos que exibem barra de chefe.
- Tratar cada encontro separadamente por localização.
- Cada encontro possui dois estados:
  - não derrotado;
  - derrotado.
- Os dados dos chefes serão incluídos no próprio aplicativo.
- O aplicativo deverá funcionar offline.
- O progresso será armazenado somente no celular.

### Critério definitivo de inclusão de encontros

O objetivo do aplicativo não é reproduzir integralmente listas editoriais que usem uma definição ampla de “boss”. Um encontro somente poderá entrar na lista de chefes quando houver evidência confiável de que, durante aquela ocorrência específica, o jogo exibe uma barra de vida de chefe.

Poderão ser incluídos chefes principais, opcionais, de dungeons e de campo, ocorrências repetidas em localizações diferentes, batalhas em dupla ou grupo e outros encontros que efetivamente exibam barra de chefe.

Invasores, NPCs hostis, inimigos únicos, versões fortes de inimigos comuns, inimigos que não reaparecem, Great Enemies ou adversários destacados apenas editorialmente não serão incluídos automaticamente. Cada caso deverá ser verificado individualmente. Uma fonte chamar uma entrada de “boss” não substitui a confirmação da barra no jogo.

Cada candidato terá um estado específico para a evidência da barra:

- `confirmed`: evidência confiável de que o encontro exibe barra de chefe;
- `not-confirmed`: a fonte o chama de chefe, mas a barra ainda não foi verificada;
- `rejected`: foi verificado que não exibe barra e não deve entrar;
- `needs-review`: evidências conflitantes ou situação especial.

Nenhum encontro poderá receber estado geral `approved` enquanto a evidência da barra não estiver como `confirmed`.

### Encontros com múltiplos inimigos

Um combate será registrado como um único encontro quando todos os inimigos fizerem parte da mesma batalha e a vitória depender da conclusão do combate completo. Essa regra será aplicada tanto a uma barra coletiva quanto a inimigos com barras de vida separadas.

Esse encontro deverá:

- possuir um único ID permanente;
- possuir um único nome;
- possuir uma única região;
- possuir uma única localização;
- possuir um único estado de progresso.

O nome deverá representar o combate completo conforme exibido pelo jogo. O aplicativo não criará registros separados para cada barra de vida ou inimigo participante.

Exemplo:

- encontro: Godskin Duo;
- participantes: dois inimigos com barras de vida separadas;
- registro no aplicativo: somente Godskin Duo;
- progresso: um único estado derrotado ou não derrotado.

Marcar o encontro como derrotado significará que todo o combate foi concluído.

O ID permanente deverá considerar o nome completo do encontro e a localização, sem depender do idioma selecionado.

Durante a coleta e validação dos dados reais, será necessário distinguir múltiplas barras pertencentes à mesma batalha de encontros independentes que acontecem separadamente. Os encontros coletivos deverão ser verificados para impedir a criação de registros individuais duplicados para seus participantes.

Cada ocorrência por localização será independente. O mesmo tipo de chefe enfrentado em outra localização terá outro ID, enquanto revanche ou reaparição em outra área criará novo encontro. Mudanças de fase ou de nome durante a mesma luta não criarão registros separados.

### Condições de disponibilidade

Cada encontro poderá possuir um campo opcional próprio para indicar condições necessárias para que esteja disponível. O nome recomendado do campo é:

`availability`

Esse campo será separado de `location`, pois a localização representa o lugar específico do encontro, enquanto a disponibilidade representa uma condição necessária para acessá-lo.

Quando presente, `availability` deverá possuir conteúdo localizado em português e inglês. Poderá descrever de forma curta condições como:

- somente à noite;
- somente durante o dia;
- disponível após determinado evento;
- disponível após concluir determinada etapa.

Quando não houver condição especial, o campo poderá ser omitido. Não será necessário registrar uma mensagem equivalente a “sem condição especial”.

Exemplo estrutural:

- região: uma região geográfica;
- localização: uma área específica;
- disponibilidade em português: `Somente à noite`;
- disponibilidade em inglês: `Night only`.

A condição não deverá ser incluída no nome do chefe nem em `location`. Inicialmente, não serão criados campos específicos para missões, eventos ou requisitos detalhados; todas essas condições poderão ser descritas de forma curta no mesmo campo opcional `availability`.

Durante a coleta dos dados reais, toda condição de disponibilidade deverá ser confirmada em mais de uma fonte confiável.

## Idiomas

O aplicativo continuará disponível em:

- Português do Brasil;
- inglês.

Um seletor global deverá alterar toda a interface.

A interface geral — incluindo botões, filtros, mensagens e configurações — deverá ser traduzida naturalmente para português do Brasil.

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

Quando não houver tradução oficial confirmada, o campo português deverá repetir exatamente o nome inglês. Traduções não serão inventadas, adaptadas apenas para parecerem mais naturais em português ou obtidas de comunidades como se fossem oficiais.

Fontes comunitárias poderão ajudar a localizar informações, mas uma tradução em português somente será adotada após confirmação oficial.

Quando fontes confiáveis divergirem sobre um nome:

1. registrar a divergência;
2. manter temporariamente o nome inglês no campo português;
3. encaminhar o caso para revisão manual antes da publicação.

Durante a coleta, deverá ser registrada a fonte usada para confirmar cada tradução oficial.

## Navegação

Usar um drawer lateral com:

- Home;
- Bosses;
- Configurações.

A opção Bosses deverá ser expansível e mostrar as regiões.

Ao selecionar uma região, o aplicativo deverá abrir a página correspondente com os chefes daquela região.

### Agrupamento das regiões no Drawer

O submenu `Bosses` deverá conter dois grupos expansíveis e independentes:

- `Jogo base` em português e `Base game` em inglês;
- `Shadow of the Erdtree` nos dois idiomas.

A estrutura geral do Drawer deverá ser:

```text
Home
Bosses
  Jogo base / Base game
    Todos os chefes / All bosses
    regiões do jogo base
  Shadow of the Erdtree
    Todos os chefes / All bosses
    regiões da expansão
Settings
```

`All regions` foi removido. Cada grupo oferece `Todos os chefes` / `All bosses` como primeiro item.

Cada região continuará possuindo o campo que indica se pertence ao jogo base ou a `Shadow of the Erdtree`. O Drawer deverá usar esse campo para separar automaticamente as regiões entre os dois grupos. As regiões não deverão ser escritas manualmente no componente do Drawer.

Dentro de cada grupo, as regiões deverão seguir ordem alfabética pelo nome localizado no idioma ativo. `displayOrder` permanece preservado como metadado aprovado, mas não controla a ordem visual.

A página de locais da Fextralife será usada como referência inicial para essa organização:

`https://eldenring.wiki.fextralife.com/Locations`

A sequência visual será recalculada ao trocar o idioma. Os valores de `displayOrder` continuam documentando a organização geográfica aprovada, sem impor uma rota ao jogador.

As ordens definitivas e os valores de `displayOrder` dos dois grupos estão registrados nas taxonomias aprovadas abaixo. Se uma fonte futura apresentar organização ambígua ou divergente:

- a divergência deverá ser registrada em `docs/DATA_SOURCES.md`;
- a ordem escolhida e sua justificativa deverão ser documentadas;
- o caso deverá ser encaminhado para revisão manual quando necessário.

Drawer e listas regionais deverão usar exclusivamente o comparador alfabético localizado centralizado. A sequência não deverá ser escrita manualmente nos componentes visuais.

Os grupos funcionam como acordeão: somente um poderá permanecer expandido.

Quando uma região estiver ativa:

- o grupo correspondente deverá estar expandido;
- a região deverá aparecer selecionada;
- `Bosses` deverá continuar indicando que uma rota interna está ativa.

Se um grupo não possuir regiões, ele ainda poderá ser exibido e deverá apresentar uma mensagem localizada informando que não há regiões disponíveis.

Esta seção define somente o comportamento planejado. A lista definitiva de regiões e a implementação do agrupamento no Drawer serão realizadas em etapas posteriores.

### Taxonomia regional

As regiões exibidas no Drawer deverão seguir a organização geográfica usada como referência em:

`https://eldenring.wiki.fextralife.com/Locations`

Exemplos de regiões geográficas principais do jogo base:

- Limgrave;
- Weeping Peninsula;
- Liurnia of the Lakes;
- Caelid;
- Altus Plateau.

As regiões de Shadow of the Erdtree seguem a taxonomia aprovada neste documento. A classificação externa como região principal, sub-região, cobertura cartográfica ou área de ruínas é evidência de pesquisa, mas não substitui a decisão explícita do usuário sobre os itens do Drawer.

Áreas subterrâneas relevantes serão exibidas como regiões independentes e de primeiro nível no Drawer. Exemplos:

- Siofra River;
- Ainsel River;
- Deeproot Depths;
- Lake of Rot;
- Mohgwyn Palace.

Esses exemplos não constituem a lista completa; a lista subterrânea definitiva está incluída na taxonomia aprovada do jogo base abaixo.

Cada região subterrânea seguirá as mesmas regras das regiões da superfície:

- possuir ID permanente;
- possuir nome localizado em português e inglês;
- possuir ordem de exibição;
- receber seus encontros por meio de `regionId`.

Não existirá um agrupador genérico chamado `Underground` no Drawer. Regiões subterrâneas não serão artificialmente associadas a regiões da superfície.

Castelos, cavernas, catacumbas, túneis, prisões, cidades, templos, masmorras e outras subáreas não serão itens independentes do Drawer e não terão submenus próprios, salvo decisão explícita posterior do usuário. Isso também se aplica às subáreas existentes dentro de regiões subterrâneas. Chefes encontrados nesses locais continuarão associados à região geográfica correspondente, usando `location` para identificar o local específico.

O nome de uma área não determina sozinho sua classificação. Em particular, áreas chamadas “ruins” não serão automaticamente reduzidas a `location`: Ancient Ruins of Rauh e Finger Ruins of Rhia foram aprovadas explicitamente como regiões da expansão.

Cada encontro deverá possuir:

- `regionId`: ID da região geográfica usada no Drawer;
- `location`: nome localizado do lugar específico onde o encontro ocorre.

Exemplo estrutural:

- chefe: Leonine Misbegotten;
- região: Weeping Peninsula;
- localização: Castle Morne.

Os nomes de regiões e localizações deverão possuir campos em português e inglês e seguir a política definitiva de nomes: somente traduções oficiais confirmadas poderão ser usadas; caso contrário, o campo português repetirá exatamente o nome inglês.

As listas do jogo base e de Shadow of the Erdtree foram pesquisadas e aprovadas conforme as seções seguintes.

### Regiões independentes aprovadas do jogo base

O usuário aprovou explicitamente as seguintes regiões independentes no Drawer:

- Greyoll's Dragonbarrow, com ID permanente e estável `greyolls-dragonbarrow`;
- Mt. Gelmir, com ID permanente e estável `mt-gelmir`;
- Consecrated Snowfield, com ID permanente e estável `consecrated-snowfield`;
- Miquella's Haligtree, com ID permanente e estável `miquellas-haligtree`.

Esses IDs não dependem do idioma. Enquanto não houver tradução oficial em português do Brasil confirmada, os nomes em português repetirão exatamente os nomes em inglês.

Cada uma dessas regiões possuirá cálculo de progresso próprio:

- Greyoll's Dragonbarrow será independente de Caelid, e seus encontros usarão `regionId: "greyolls-dragonbarrow"`;
- Mt. Gelmir será independente de Altus Plateau, e seus encontros usarão `regionId: "mt-gelmir"`;
- Consecrated Snowfield será independente de Mountaintops of the Giants, e seus encontros usarão `regionId: "consecrated-snowfield"`;
- Miquella's Haligtree não será incorporada ao progresso de Consecrated Snowfield, e seus encontros usarão `regionId: "miquellas-haligtree"`.

As classificações divergentes das fontes permanecerão documentadas: algumas tratam Greyoll's Dragonbarrow, Mt. Gelmir e Consecrated Snowfield como sub-regiões, e algumas também classificam Miquella's Haligtree como legacy dungeon. Para a taxonomia do aplicativo, prevalece a decisão explícita de usar regiões independentes para navegação e acompanhamento de progresso.

Volcano Manor, Ordina, Haligtree Town, Elphael e outras áreas internas continuarão sendo registradas em `location`; não formarão novas regiões apenas por serem sublocalizações. Essa decisão encerra as pendências estruturais dessas quatro regiões.

Qualquer correção futura deverá retornar o registro afetado para `needs-review` e seguir o processo de revisão e aprovação definido neste documento.

### Taxonomia completa aprovada do jogo base

Em 2026-07-27, o usuário aprovou explicitamente as 16 regiões propostas do jogo base: 11 de superfície e 5 subterrâneas.

A ordem aprovada, que deverá ser usada no Drawer, na Home e na página geral de regiões, é:

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

Siofra River, Ainsel River, Lake of Rot, Deeproot Depths e Mohgwyn Palace são as cinco regiões subterrâneas independentes. Cada uma das 16 regiões terá item próprio no grupo do jogo base, `regionId`, nome localizado, `displayOrder` e cálculo de progresso próprios.

Todos os IDs aprovados são permanentes, estáveis e independentes do idioma. Sem tradução oficial confirmada em português do Brasil, o nome português repetirá exatamente o inglês. Castelos, cavernas, catacumbas, cidades internas, ruínas, masmorras e demais sublocalizações continuarão em `location`.

Não restam regiões do jogo base em `pending`, `researched` ou `needs-review`. Futuras correções deverão seguir o processo de revisão e aprovação.

### Taxonomia completa aprovada de Shadow of the Erdtree

Em 2026-07-27, o usuário aprovou explicitamente dez regiões para o grupo `Shadow of the Erdtree`.

A ordem, os IDs permanentes e os valores de `displayOrder` aprovados são:

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

Essa sequência deverá ser usada no Drawer, na Home e nas páginas de regiões da expansão. Ela representa a organização aprovada para o aplicativo e não uma rota obrigatória.

Todos os IDs são permanentes, estáveis, independentes do idioma e deverão ser protegidos pelas regras de correção e migração de IDs. Enquanto não houver tradução oficial em português do Brasil confirmada, o nome português repetirá exatamente o inglês.

`Southern Shore` permanece apenas como classificação ampla ou cobertura cartográfica documentada no histórico da pesquisa. Não será região do Drawer e `southern-shore` não será usado como `regionId`. O agrupador provisório `Rauh Ruins` foi substituído pelas regiões independentes Rauh Base e Ancient Ruins of Rauh; `rauh-ruins` não será usado como ID permanente. Esses IDs provisórios nunca foram incorporados aos dados de produção e não exigem migração.

Belurat, Castle Ensis, Shadow Keep, Midra's Manse e outras cidades, fortalezas, cavernas, catacumbas, templos e masmorras continuam em `location`, salvo decisão explícita posterior.

Não restam regiões da expansão em `pending`, `researched` ou `needs-review`. A taxonomia completa possui 16 regiões do jogo base e 10 regiões da expansão, totalizando 26.

### Regiões compartilhadas por categorias de conteúdo

Uma região é uma entidade geográfica compartilhada por diferentes categorias de conteúdo. Sua existência no Drawer não depende de possuir encontros com chefes.

Chefes serão a primeira categoria implementada. Itens, equipamentos e outros conteúdos poderão ser adicionados posteriormente e deverão reutilizar os mesmos `regionId` permanentes.

Uma região sem encontros continuará válida e disponível. O progresso de chefes poderá apresentar `0/0` enquanto não houver encontros associados. A ausência de chefes não autoriza remover a região nem incorporá-la a outra.

O progresso de chefes e o futuro progresso de itens deverão permanecer conceitualmente separados. A mesma região poderá, portanto, possuir `0/0` para chefes e valores próprios para itens sem alterar sua identidade nem seu ID.

## Home

A página inicial deverá mostrar:

- círculo de progresso;
- porcentagem total de chefes derrotados;
- quantidade de chefes derrotados sobre o total;
- progresso separado por região.

Exemplo:

- 10%;
- 10/100.

## Página da região

Cada chefe deverá aparecer em um card contendo:

- nome;
- localização;
- condição de disponibilidade, quando existir;
- botão para marcar ou desmarcar como derrotado.

A página deverá possuir:

- busca por nome;
- filtro Todos;
- filtro Derrotados;
- filtro Não derrotados.

## Configurações

A página deverá possuir:

- seleção de idioma;
- seleção de tema;
- botão para zerar todo o progresso.

As opções de tema serão:

- Sistema;
- Claro;
- Escuro.

O botão para zerar o progresso deverá exigir confirmação.

## Aparência

Os temas claro e escuro deverão usar uma paleta inspirada na atmosfera de Elden Ring:

- dourado envelhecido;
- verde musgo;
- marrom terroso;
- bege pergaminho;
- preto;
- cinza escuro.

A interface não deverá copiar diretamente telas, imagens ou elementos protegidos do jogo.

## Armazenamento

Usar AsyncStorage para salvar:

- chefes derrotados;
- idioma escolhido;
- tema escolhido.

### Tratamento dos IDs temporários

Todos os IDs iniciados por `sample-` representam dados fictícios usados somente para validar a arquitetura do aplicativo. Regiões e encontros temporários deverão ser completamente removidos antes da publicação e não poderão permanecer misturados aos dados reais.

Quando o primeiro lote de dados reais estiver pronto, deverá ser implementada uma migração versionada para tratar o progresso temporário. Essa migração:

- atuará somente sobre a chave de progresso;
- removerá IDs derrotados iniciados por `sample-`;
- preservará qualquer progresso associado a IDs reais e válidos;
- preservará o idioma e a preferência de tema;
- não tentará converter ou associar automaticamente IDs `sample-*` a encontros reais;
- descartará o progresso dos IDs temporários;
- não usará `AsyncStorage.clear()`.

IDs que não existam mais no conjunto oficial de encontros somente poderão ser removidos quando uma migração futura determinar explicitamente essa limpeza.

Antes da substituição dos dados temporários, um teste automatizado deverá confirmar que:

- IDs `sample-*` são removidos;
- IDs reais permanecem;
- idioma e tema permanecem;
- listas vazias são tratadas corretamente;
- executar a migração novamente não produz efeitos incorretos.

A migração deverá possuir uma versão para que não seja executada repetidamente sem necessidade. Sua implementação ocorrerá somente quando o primeiro lote de dados reais estiver pronto; esta especificação não autoriza implementá-la antecipadamente.

### Correção de IDs permanentes publicados

IDs permanentes publicados serão considerados estáveis. Um ID publicado somente poderá ser alterado quando houver uma necessidade real, como:

- erro de identificação;
- duplicidade;
- associação incorreta de região ou localização;
- mudança estrutural indispensável.

Toda alteração exigirá uma migração explícita do ID antigo para o novo. A migração deverá preservar o progresso do usuário:

- se o ID antigo estiver marcado como derrotado, o novo ID será marcado como derrotado e o antigo será removido após a conversão;
- se o ID antigo não estiver salvo no progresso, o novo ID não será adicionado;
- os demais IDs de progresso serão preservados.

Quando vários IDs antigos forem consolidados em um único ID novo, o novo será marcado como derrotado se pelo menos um dos antigos estiver derrotado, e todos os IDs antigos correspondentes serão removidos.

Quando um ID antigo for dividido em vários novos IDs, o progresso não será distribuído automaticamente sem uma regra específica, documentada e aprovada. Se houver dúvida sobre a equivalência entre IDs antigos e novos, o caso será encaminhado para revisão manual antes da implementação.

Cada migração deverá:

- ser versionada;
- ser idempotente;
- atuar somente sobre a chave de progresso;
- preservar idioma e preferência de tema;
- não usar `AsyncStorage.clear()`.

IDs reais publicados não poderão ser removidos silenciosamente. Toda alteração deverá constar em um histórico de migrações com:

- versão da migração;
- ID antigo;
- ID novo;
- motivo da alteração;
- regra de preservação do progresso;
- data da decisão.

Antes da publicação, testes automatizados deverão confirmar:

- conversão do ID antigo para o novo;
- preservação do estado derrotado;
- remoção do ID antigo;
- preservação dos demais IDs;
- preservação de idioma e tema;
- execução repetida sem efeitos incorretos;
- comportamento correto quando o ID antigo não existir no progresso.

Esta política não autoriza a implementação de nenhuma migração nesta etapa.

## Política de fontes da pesquisa

- As fontes usadas para pesquisar regiões, encontros, localizações, disponibilidade e traduções serão mantidas separadamente em `docs/DATA_SOURCES.md`.
- Cada referência deverá ser associada ao ID permanente da região ou do encontro que ela sustenta.
- Uma mesma fonte poderá sustentar vários registros, mas cada região e encontro deverão indicar claramente quais fontes foram usadas.
- Para cada região, o registro deverá conter o ID permanente, o nome em inglês, as fontes consultadas, a finalidade de cada fonte, as divergências encontradas, a decisão adotada e o estado da revisão.
- Para cada encontro, o registro deverá conter o ID permanente, o nome em inglês, a região, a localização, a disponibilidade quando aplicável, as fontes consultadas, as confirmações do nome, da localização, da disponibilidade e da tradução em português, as divergências encontradas, a decisão adotada e o estado da revisão.
- Fontes comunitárias poderão ser usadas para localizar e comparar informações factuais.
- Traduções em português somente poderão ser consideradas oficiais quando confirmadas por fonte oficial, conforme a política de nomes em português.
- Quando houver divergência entre fontes, todas as versões relevantes deverão ser registradas. O motivo da decisão deverá ser documentado, sem escolha silenciosa, e o registro deverá ser marcado para revisão manual quando necessário.
- Somente serão registrados os fatos necessários: nome, região, localização, disponibilidade, relação entre o encontro e a área e tradução oficial confirmada.
- Descrições, estratégias, guias e outros textos extensos das fontes não deverão ser copiados.
- URLs e informações de pesquisa não farão parte dos objetos usados pelo aplicativo e não serão exibidas na interface.
- O código de produção conterá somente os dados necessários ao funcionamento offline.
- `docs/DATA_SOURCES.md` não deverá ser importado pelo código de produção nem incluído no bundle do aplicativo.

### Família editorial Rock Paper Shotgun

As referências fornecidas pelo usuário para a pesquisa inicial dos encontros do jogo base são:

- artigo: `https://www.rockpapershotgun.com/elden-ring-boss-locations`;
- mapa completo associado: `https://assetsio.gnwcdn.com/elden-ring-boss-locations-map-full-v3.webp`.

O artigo registra uma relação editorial de 238 entradas, organizada por áreas, com mapas regionais e referência separada à expansão. Ele poderá ser usado para descobrir candidatos e obter pistas de nome, localização geral, condições e ocorrências repetidas. O mapa poderá apoiar a conferência de distribuição, região aproximada, numeração e cobertura geográfica.

Artigo e mapa pertencem à mesma publicação e ao mesmo levantamento editorial. Eles formam uma única família de fontes, e a concordância entre ambos não conta como duas confirmações independentes.

Cada encontro exigirá pelo menos uma fonte independente dessa família. Fontes oficiais terão prioridade quando fornecerem nome, localização ou tradução verificável. Como a lista editorial poderá incluir adversários sem barra de chefe, todas as entradas serão validadas individualmente pelo critério definitivo de inclusão.

O mapa será mantido apenas como URL na documentação de fontes. Não poderá ser incorporado, baixado para o repositório, redistribuído nem exibido no aplicativo.

O processo detalhado, os campos obrigatórios e a ordem dos lotes estão definidos em `docs/BOSS_RESEARCH_PLAN.md`.

## Revisão e aprovação dos dados reais

O usuário será o revisor e aprovador final de todas as regiões e encontros reais antes da publicação.

O GPT poderá:

- pesquisar fontes;
- organizar regiões e encontros;
- comparar nomes, localizações e disponibilidade;
- identificar divergências;
- propor IDs permanentes;
- sugerir traduções oficialmente confirmadas;
- preparar lotes pequenos para revisão;
- executar validações automáticas.

A concordância entre duas ou mais fontes será apresentada como evidência, mas não aprovará automaticamente um registro. A decisão final continuará pertencendo ao usuário.

Cada região e encontro deverá possuir um estado de revisão:

- `pending`: ainda não pesquisado suficientemente;
- `researched`: pesquisa concluída, aguardando revisão;
- `needs-review`: existe dúvida ou divergência;
- `approved`: aprovado explicitamente pelo usuário.

Somente o usuário poderá alterar um registro para `approved`. Registros em qualquer outro estado não serão considerados prontos para publicação. A aprovação de um registro não aprovará automaticamente registros semelhantes.

Antes de solicitar aprovação, o GPT deverá apresentar, conforme aplicável:

- ID permanente proposto;
- nome em inglês;
- nome em português;
- região;
- localização;
- disponibilidade;
- fontes consultadas;
- divergências encontradas;
- decisão recomendada;
- resultado da validação automática.

Quando houver divergência, o GPT deverá explicar o conflito, apresentar as versões encontradas, identificar as fontes que sustentam cada versão e sugerir uma decisão. O registro permanecerá em `needs-review` até a decisão do usuário.

A aprovação ocorrerá em lotes pequenos. Nenhum lote será incorporado definitivamente aos dados oficiais antes da aprovação explícita do usuário. Correções posteriores em registros aprovados retornarão esses registros para `needs-review`.

As decisões do usuário serão registradas em `docs/DATA_SOURCES.md`, incluindo a data, o registro aprovado, a decisão adotada e observações relevantes.

## Publicação

## Mapeamento de subáreas para encontros — decisão de 2026-07-27

Regiões do Drawer são entidades estáveis; subáreas podem e devem aparecer em `location` sem adquirir `regionId` próprio.

- Capital Outskirts, Leyndell, Royal Capital, Leyndell, Ashen Capital e Elden Throne usam `regionId: "altus-plateau"`.
- Forbidden Lands usa `regionId: "mountaintops-of-the-giants"`.
- Nokron, Eternal City usa `regionId: "siofra-river"`.
- Mohg, Lord of Blood usa `regionId: "mohgwyn-palace"` e localização em Mohgwyn Dynasty Mausoleum.
- Quando houver localização interna precisa, registrar de forma legível também a área maior, por exemplo `Auriza Hero's Grave (Capital Outskirts)`.
- Normalizações regionais obrigatórias: Greyoll's Dragonbarrow/`greyolls-dragonbarrow`; Mt. Gelmir/`mt-gelmir`; Crumbling Farum Azula/`crumbling-farum-azula`; Consecrated Snowfield/`consecrated-snowfield`; Ainsel River/`ainsel-river`.

Essas decisões foram aprovadas explicitamente pelo usuário em 2026-07-27 e não autorizam alteração silenciosa de nomes de encontros.

## Catálogo aprovado de chefes do jogo base

Em 2026-07-28, o usuário aprovou explicitamente o catálogo completo do jogo base:

- 165 encontros ativos distribuídos pelas 16 regiões aprovadas;
- todos com barra de chefe `confirmed` e estado geral `approved`;
- cada ocorrência por localização possui acompanhamento independente;
- batalhas coletivas, fases, summons e auxiliares seguem as decisões documentadas nos lotes regionais;
- adversários sem barra permanecem excluídos e `rejected`;
- nenhum encontro ativo permanece em `pending`, `researched` ou `needs-review`;
- os dados ainda não foram inseridos no aplicativo.

A próxima etapa de pesquisa é o catálogo de chefes de `Shadow of the Erdtree`. Essa etapa não aprova encontros da expansão.

O projeto deverá ser preparado para uma futura publicação na Google Play.

O aplicativo deverá ser apresentado como um projeto não oficial feito por fãs.

Não usar imagens, logotipos, fontes ou outros materiais protegidos sem autorização. Durante o desenvolvimento, usar recursos próprios, licenciados ou placeholders.
## Mapeamento de Enir-Ilim

Decisão explícita do usuário em `2026-07-28`: `Enir-Ilim` é uma legacy dungeon/localização interna de `Gravesite Plain`, não uma região do Drawer. `Leda and Allies` e `Promised Consort Radahn + Radahn Consort of Miquella` usarão `regionId: "gravesite-plain"` e `location` contendo `Enir-Ilim`. A expansão possui dez regiões mesmo quando alguma delas não tem chefes; `Finger Ruins of Rhia` pode apresentar progresso de chefes `0/0` e continua disponível para conteúdos futuros.

## Estado da pesquisa de chefes da expansão

Em `2026-07-28`, os 43 encontros ativos da expansão foram aprovados explicitamente, distribuídos pelas dez regiões aprovadas e todos com barra `confirmed`. `Finger Ruins of Rhia` possui zero encontros, mas permanece válida para futuros conteúdos. Dryleaf Dane foi rejeitado por não apresentar barra inferior de chefe e não integra o total.

O catálogo completo possui 165 encontros aprovados do jogo base e 43 da expansão: 208 encontros ativos `approved`/`confirmed` em 26 regiões aprovadas, sendo 16 do jogo base e 10 da expansão. Os dados reais ainda não foram inseridos no aplicativo. A próxima fase é preparar sua implementação.

## Implementação isolada do catálogo real — histórico

Na etapa anterior, as 26 regiões e os 208 encontros aprovados foram modelados em `src/data/catalog` sem conexão com telas, seletores ou armazenamento. Naquele momento, os dados `sample-*` ainda eram a fonte do aplicativo; a etapa foi superada pela integração registrada abaixo.

## Integração do catálogo real

O catálogo real é a fonte ativa do aplicativo: 26 regiões e 208 encontros. Drawer e listas usam os dados aprovados, agrupados por `contentPack` e ordenados alfabeticamente pelo idioma ativo. Finger Ruins of Rhia permanece válida com progresso regional `0/0`.

O progresso persistido usa o esquema versionado 1 (`schemaVersion` e `defeatedBossIds`). A hidratação aceita o array legado, remove exclusivamente IDs com prefixo `sample-*`, elimina duplicatas e preserva IDs reais desconhecidos. Os cálculos da interface consideram somente IDs ativos do catálogo. Reset de progresso preserva a versão do esquema, idioma, tema e demais chaves.

## Revisão manual da integração

A revisão manual no Expo Go foi concluída com sucesso. Home, agrupamentos, Drawer, All regions, Limgrave, busca, filtros, progresso, persistência, Finger Ruins of Rhia, idiomas, temas, reset e encontros especiais funcionaram corretamente. Nenhuma correção visual ou funcional foi necessária.

O progresso usado nos testes manuais foi removido, idioma e tema foram preservados e o servidor Expo foi encerrado. A integração está concluída com 26 regiões e 208 encontros ativos, migração versionada operacional e ausência de dados `sample-*` no fluxo de produção.

Próxima etapa: planejar a tela de detalhes dos encontros e, posteriormente, iniciar a pesquisa e modelagem dos itens do jogo.

## Tela de detalhes dos encontros

Cada encontro possui uma rota baseada em seu ID permanente. A tela apresenta nome, região, localização, disponibilidade opcional, estado e controle único de progresso. Participantes, fases, summons, auxiliares e nomes de barra aparecem somente quando os campos aprovados do catálogo fornecerem informação relevante.

A navegação parte de uma ação explícita no cartão regional, independente do botão de progresso. IDs inválidos recebem estado seguro e localizado. Nenhuma recompensa, estratégia, fraqueza, resistência, imagem ou descrição externa foi adicionada.

A revisão manual da tela de detalhes foi concluída com sucesso no Expo Go. Nome, região, localização, disponibilidade, status, progresso, participantes, fases, summons, auxiliares, idiomas e temas foram validados. Spiritcaller Snail, Promised Consort Radahn, Demi-Human Chiefs, Needle Knight Leda and Allies e Fia's Champions mantêm as unidades de acompanhamento aprovadas.

O retorno dos detalhes foi corrigido com uma Stack raiz que contém o Drawer e empilha o detalhe sobre a região. Cabeçalho, botão físico e gesto retornam à região de origem; o acesso direto usa fallback seguro e a ação duplicada de retorno foi removida. A sequência Bosses → All regions → Home também foi corrigida: o Drawer usa os nomes registrados `index`, `bosses`, `settings` e `regions/[regionId]`, sem tratar o grupo estrutural `(drawer)` como URL pública.

Home, Settings, All regions e os 26 destinos regionais foram conferidos. Não existem ocorrências conhecidas de `Unmatched Route`. O progresso da revisão foi removido e o estado final ficou em `0/208`; catálogo, armazenamento e formato de progresso não foram alterados. A tela de detalhes está concluída.

Próxima etapa: planejar a pesquisa e a modelagem dos itens do jogo, reutilizando as 26 regiões já aprovadas.

## Ordenação alfabética e navegação por conteúdo

A regra visual anterior baseada em `displayOrder` foi substituída. Regiões e chefes deverão aparecer alfabeticamente pelo nome localizado no idioma ativo, usando comparação `pt-BR` ou `en`, tratamento equilibrado de caixa e acentos e desempate estável pelo ID. `displayOrder` permanece como metadado aprovado.

A regra aplica-se somente às listas de regiões e chefes. Fases, ondas, participantes, summons, auxiliares e qualquer sequência interna com significado preservam a ordem aprovada. Novas regiões e chefes seguirão a ordenação localizada; novas sequências de batalha não serão reordenadas automaticamente.

O Drawer remove All regions, funciona como acordeão e contém All bosses como primeiro item de Base game e Shadow of the Erdtree. As telas `/all-bosses/base-game` e `/all-bosses/shadow-of-the-erdtree` apresentam listas únicas de 165 e 43 encontros com progresso, busca e filtros.

A Home mantém o progresso geral de 208 encontros e mostra somente dois cartões, Base game e Shadow of the Erdtree. A página regional mantém o nome apenas no cabeçalho, usa Progresso da Região no conteúdo e apresenta cartões compactos com nome, localização, detalhes e controle de progresso. Dados estruturais completos permanecem na tela de detalhes.

A implementação e a revisão manual no Expo Go foram concluídas com sucesso.

## Indicadores visuais dos cards e progresso regional

O quadro Progresso da Região apresenta a razão à esquerda e o percentual à direita na mesma linha horizontal, com a barra abaixo. O cálculo continua seguro para total zero.

Cards de encontros exibem um indicador decorativo no canto superior direito: símbolo de combate `⚔` enquanto não derrotado e símbolo de conclusão `✓` quando derrotado. O indicador não é botão, não altera progresso e acompanha o estado fornecido pelo contexto, incluindo atualização e rollback.

O estado permanece acessível no rótulo do card e no botão de progresso. Os cards regionais continuam contendo somente nome, localização e controles; cards All bosses acrescentam somente a região. O indicador foi validado como elemento visual não interativo, oculto da árvore de acessibilidade e sem sobreposição em nomes longos.

## Padrão horizontal dos cards de progresso

Todo card de progresso deve apresentar `concluído/total` à esquerda e a porcentagem à direita, na mesma linha, com a barra de progresso abaixo. Razão e porcentagem não devem voltar a ser empilhadas, centralizadas em conjunto nem quebradas em linhas separadas.

O componente compartilhado aplica esse padrão à Home, às páginas regionais e às telas Todos os chefes. Os cálculos permanecem seguros para `0/0`, progresso parcial e `100%`, sem `NaN` ou `Infinity`. Esse é o padrão obrigatório para cards atuais e futuros, e a opção de layout empilhado não permanece disponível.

## Conclusão da etapa de listas alfabéticas e compactas

A revisão manual no Expo Go validou a Home com exatamente dois cards de conteúdo, o Drawer em acordeão, a ordenação localizada em português e inglês, as páginas regionais, as duas telas Todos os chefes, busca, filtros, detalhes e retorno com estado e posição preservados. Também foram validados a sincronização de progresso, os indicadores `⚔` e `✓`, nomes longos, os três temas e Finger Ruins of Rhia com `0/0` e `0%`.

Não foram encontrados cortes, sobreposições, rotas inválidas ou ocorrências conhecidas de `Unmatched Route`. O reset de progresso foi concluído, deixando `0/208`, `0/165` e `0/43`; idioma e tema permaneceram preservados.

Próxima etapa: Planejar a pesquisa e a modelagem dos itens do jogo, reutilizando as 26 regiões aprovadas e a regra de ordenação alfabética.

## Planejamento aprovado das Cinzas da Guerra

O catálogo documental de 116 Cinzas da Guerra foi aprovado provisoriamente para implementação: 91 do jogo base e 25 de Shadow of the Erdtree. As pendências de localização oficial pt-BR, custos de FP e normalização não são consideradas resolvidas.

A implementação futura usará inglês como fallback quando o campo pt-BR estiver ausente. A tela de detalhes mostrará aviso discreto de tradução oficial pendente; cards compactos não mostrarão esse aviso. A busca em português encontrará tanto conteúdo localizado quanto termos ingleses relevantes, e traduções futuras não alterarão IDs ou progresso.

O progresso geral combinará 208 chefes e 116 Cinzas, totalizando 324 unidades de mesmo peso. A Home terá exatamente dois cards de categoria, Chefes e Cinzas da Guerra. O Drawer terá os grupos principais Chefes e Cinzas da Guerra em acordeão, além de Home e Settings.

A especificação técnica completa de catálogo, rotas, migração, componentes, testes e etapas está em `docs/ASHES_OF_WAR_IMPLEMENTATION_PLAN.md`.

### Catálogo de produção das Cinzas da Guerra

O catálogo de produção isolado foi criado com 116 entradas: 91 do jogo base e 25 da expansão. IDs foram preservados; URLs, fontes e metadados editoriais ficaram somente na documentação. Fallback pt-BR é derivado de campos `null`, e a ordenação localizada usa o ID como desempate.

O catálogo passou a ser consumido pela interface, rotas e persistência nas
etapas posteriores descritas abaixo.
## Progresso persistido v2

O progresso persistido reúne Chefes e Cinzas da Guerra no schema v2. IDs
desconhecidos válidos são preservados, mas somente os 208 Chefes e as 116
Cinzas catalogadas contam no progresso visual, cujo total combinado é 324. O
reset limpa ambas as categorias e preserva idioma, tema e demais preferências.
## Tela geral Todos os Chefes

A rota `/all-bosses` reúne os 208 encontros em duas seções contínuas: Jogo base
com 165 e Shadow of the Erdtree com 43. A tela possui progresso único, busca e
filtros aplicados às duas seções, ordenação localizada e retorno de detalhes
com o estado da lista preservado. Seções sem resultados são ocultadas.

Home e Drawer apontam para essa rota.
## Listas e detalhes das Cinzas da Guerra

As rotas públicas de Cinzas oferecem uma lista combinada 91/25, duas listas
específicas e detalhes completos. Todas usam progresso v2, busca, filtros,
ordenação localizada e fallback inglês. O card compacto usa fantasma para não
coletada e check para coletada. Home e Drawer estão integrados.
## Integração final da Home e navegação por categoria

A Home apresenta progresso geral combinado de 324 unidades e exatamente dois
cards: Chefes (208) e Cinzas da Guerra (116). O Drawer segue a ordem Home,
Chefes, Cinzas da Guerra e Settings; os dois grupos de conteúdo são
mutuamente exclusivos e indicam a rota ativa sem depender do idioma.

Próxima etapa:
`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`

## Estado final das Cinzas da Guerra

A implementação foi concluída e revisada no Expo Go: 116 Cinzas, progresso v2,
Home com total 324, Drawer por categoria, listas e detalhes. O progresso de
revisão foi resetado, preservando idioma e tema. O catálogo está aprovado
provisoriamente para a interface; campos pt-BR ainda pendentes usam fallback
inglês e custos de FP desconhecidos são omitidos. Todos os cards de progresso
mantêm razão e percentual na mesma linha e barra abaixo.

## Encerramento da pesquisa pt-BR das Cinzas da Guerra

Em 2026-07-28, o usuário decidiu encerrar esta linha de pesquisa sem autorizar
instalação ou download de ferramentas, extração dos arquivos do jogo ou
capturas iniciando o Elden Ring. A instalação Steam/Windows foi identificada
com App ID `1245620`, Build ID `22984413` e executável `2.6.2.0`, mas
nenhuma ferramenta adequada para BHD/BDT, DCX/BND/FMG e regulation estava
instalada.

Nenhum campo pt-BR foi confirmado por evidência direta. Os 91 candidatos de
nome do jogo base permanecem `probable`; habilidades, afinidades, tipos e
compatibilidades permanecem `pending`. A pesquisa não deve ser apresentada
como concluída ou oficialmente validada. O catálogo de produção, IDs e
progresso não foram alterados, o fallback inglês permanece ativo e nenhuma
alteração funcional é necessária. O aplicativo permanece estável com os dados
atuais.

O checklist de 455 capturas fica arquivado somente como referência, sem trabalho
pendente imediato. A pesquisa só poderá ser retomada mediante nova autorização
explícita.

Próxima etapa:
`Manter o fallback em inglês para as Cinzas da Guerra e retomar a validação oficial pt-BR somente mediante nova autorização explícita do usuário.`

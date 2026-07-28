# Real Catalog Integration

## Status

Integração concluída. As 26 regiões e os 208 encontros aprovados são a fonte ativa do aplicativo.

## Fonte de dados ativa

`src/data/index.ts` expõe os dados de `src/data/catalog/regions.ts` e `src/data/catalog/bossEncounters.ts`. O catálogo não foi duplicado e seus IDs e campos aprovados foram preservados.

## Dados temporários

Os antigos módulos de produção que continham duas regiões e quatro encontros `sample-*` foram removidos. Nenhum dado temporário participa de progresso, busca, filtros ou contagens.

## Migração do progresso

A hidratação executa uma migração explícita e idempotente. O array legado continua legível; somente IDs cujo prefixo é `sample-*` são descartados, duplicatas são removidas e IDs reais conhecidos ou desconhecidos são preservados. A migração atua apenas na chave de progresso e não usa `AsyncStorage.clear()`.

## Formato de armazenamento

O esquema atual tem versão `1`:

```ts
{
  schemaVersion: 1;
  defeatedBossIds: string[];
}
```

O reset grava a mesma versão com uma lista vazia. Idioma e tema permanecem em suas próprias chaves.

## Drawer

O Drawer contém Home, Bosses, os grupos Base game e Shadow of the Erdtree, All bosses em cada grupo, suas 16 e dez regiões dinâmicas, e Settings. Uma rota regional ou All bosses expande automaticamente Bosses e somente o grupo correspondente.

Durante a revisão manual posterior à criação da Stack raiz, a sequência Bosses → All regions → Home abriu `Unmatched Route`. O componente usava `/(drawer)/index` como URL global, embora `(drawer)` seja apenas o grupo estrutural e `index` seja o nome interno da tela.

Todos os itens passaram a usar o navegador Drawer diretamente: `index` para Home, `bosses` para All regions, `settings` para Settings e `regions/[regionId]` para cada região. Os destinos não são relativos, não dependem da rota atual e não empilham uma nova Home quando ela já está ativa.

A correção foi validada no Expo Go a partir de Home, All regions, Settings, páginas regionais e detalhes. A sequência Bosses → All regions → Home abre diretamente a Home, os 26 destinos regionais são válidos e não existem ocorrências conhecidas de `Unmatched Route`.

## Home

A Home calcula progresso total sobre 208 encontros e mostra somente os cartões Base game e Shadow of the Erdtree, com progresso sobre 165 e 43 encontros. IDs desconhecidos armazenados não entram nas contagens.

## Todos os chefes

As telas por conteúdo substituem a antiga página geral de regiões. Elas apresentam uma lista única alfabetizada, busca, filtros, progresso e cartões compactos com região e localização.

## Página regional

A rota valida o `regionId`, lista somente os encontros correspondentes e mantém busca, filtros e persistência. A busca considera nome, localização e disponibilidade localizados, além de nomes de barra, participantes e fases quando presentes.

## Seletores

Seletores puros centralizam ordenação, agrupamento por conteúdo, busca por IDs, encontros por região, IDs derrotados válidos, progresso total e regional, busca e filtros.

## Estados vazios

Finger Ruins of Rhia é exibida com `0/0` e `0%`, com mensagem própria de região válida sem encontros. Região inválida e busca ou filtro sem resultados possuem tratamentos distintos.

## Testes

Os testes cobrem o catálogo, seletores, integração das telas, agrupamentos do Drawer, localização, filtros, progresso, rollback e armazenamento versionado. A migração cobre formato legado e atual, remoção de `sample-*`, preservação de IDs reais desconhecidos, duplicatas, idempotência, erros e reset.

## Validações

O catálogo é validado uma vez em desenvolvimento e diretamente nos testes. Não há imagens protegidas no catálogo e nenhuma dependência foi instalada.

## Revisão manual no Expo Go

A revisão manual foi concluída com sucesso. Foram verificados:

- Home com 26 regiões e progresso total de 208 encontros;
- grupos Base game e Shadow of the Erdtree;
- Drawer, expansão automática e abertura em regiões dos dois grupos;
- página All regions e região Limgrave;
- busca por nome e localização;
- filtros Todos, Derrotados e Não derrotados;
- atualização e persistência do progresso;
- Finger Ruins of Rhia com `0/0` e estado vazio próprio;
- idiomas português do Brasil e inglês;
- temas Sistema, Claro e Escuro;
- reset preservando idioma e tema;
- independência dos dois Tree Sentinels de Scaduview;
- Spiritcaller Snail como uma única unidade;
- Promised Consort Radahn como uma batalha única com fases;
- independência dos dois Jagged Peak Drakes.

Nenhuma correção visual ou funcional adicional foi necessária durante a revisão final. O progresso usado na revisão foi removido ao final, deixando `0/208`; idioma e tema foram preservados. A migração versionada funcionou corretamente e os dados `sample-*` não fazem parte do fluxo de produção.

A tela de detalhes também foi validada manualmente, incluindo dados básicos, seções opcionais, progresso, casos especiais, idiomas e temas. O retorno padrão do cabeçalho e do Android volta para a região de origem. A Stack raiz contém o Drawer interno e empilha os detalhes sobre a região; a ação duplicada de retorno foi removida. Catálogo, armazenamento e formato de progresso permaneceram inalterados.

## Próxima etapa

A tela de detalhes está concluída sobre o catálogo integrado, sem adicionar dados externos nem alterar registros aprovados. Cada cartão regional oferece navegação explícita, e a rota resolve encontro e região por IDs permanentes. Seções opcionais são renderizadas apenas quando há dados.

Próxima etapa: planejar a pesquisa e a modelagem dos itens do jogo, reutilizando as 26 regiões já aprovadas.

## Navegação alfabética e listas compactas

A interface passou a ordenar regiões e encontros pelo nome localizado no idioma ativo. A comparação usa `pt-BR` ou `en`, reduz diferenças de caixa e acentos e desempata pelo ID. `displayOrder` continua preservado no catálogo, mas não controla mais a apresentação visual. Fases e demais sequências internas não são reordenadas.

All regions foi removido. O Drawer usa acordeão exclusivo e cada grupo contém All bosses seguido das regiões alfabetizadas. As novas rotas por `contentPack` exibem 165 encontros do jogo base ou 43 da expansão em uma lista única.

A Home apresenta somente dois cartões de conteúdo, além do progresso geral. Cartões regionais foram simplificados, enquanto a tela de detalhes preserva disponibilidade, fases, participantes, summons e auxiliares.

A revisão manual desta etapa foi concluída com sucesso no Expo Go. Foram validados a Home com exatamente dois cards de conteúdo, o Drawer em acordeão, a ordenação localizada em português e inglês, as páginas regionais, as telas All bosses com 165 e 43 encontros, busca, filtros, detalhes, retorno preservado e sincronização do progresso.

Os indicadores `⚔` e `✓` foram confirmados nas listas regionais e por conteúdo como elementos visuais não interativos, sem sobreposição em nomes longos. O padrão horizontal obrigatório de progresso foi validado na Home, nas regiões e nas telas All bosses. Temas Claro, Escuro e Sistema, Finger Ruins of Rhia com `0/0` e `0%` e ausência de rotas inválidas também foram confirmados.

O reset final deixou `0/208`, `0/165` e `0/43`, preservando idioma e tema. Não há problemas conhecidos de navegação nem ocorrências de `Unmatched Route`.

Próxima etapa: Planejar a pesquisa e a modelagem dos itens do jogo, reutilizando as 26 regiões aprovadas e a regra de ordenação alfabética.

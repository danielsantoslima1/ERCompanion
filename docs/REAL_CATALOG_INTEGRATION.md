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

O Drawer contém Home, Bosses, All regions, os grupos expansíveis Base game e Shadow of the Erdtree, suas 16 e dez regiões dinâmicas, e Settings. Uma rota regional expande automaticamente Bosses e o grupo correspondente.

## Home

A Home calcula progresso total sobre 208 encontros e mostra as 26 regiões, separadas por conteúdo e ordenadas por `displayOrder`. IDs desconhecidos armazenados não entram nas contagens.

## Página geral

A página geral mostra as 26 regiões agrupadas por conteúdo, com nome localizado, progresso e navegação regional.

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

Nenhuma correção visual ou funcional foi necessária. O progresso usado na revisão foi removido ao final, idioma e tema foram preservados e o servidor Expo foi encerrado. A migração versionada funcionou corretamente e os dados `sample-*` não fazem parte do fluxo de produção.

## Próxima etapa

Planejar a tela de detalhes dos encontros e, posteriormente, iniciar a pesquisa e modelagem dos itens do jogo.

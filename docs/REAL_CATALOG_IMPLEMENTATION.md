# Real Catalog Implementation

## Status

Etapa de geração concluída e etapa de integração concluída. O catálogo real aprovado é a fonte de produção do aplicativo.

## Arquivos criados

- `src/data/catalog/types.ts`
- `src/data/catalog/regions.ts`
- `src/data/catalog/bossEncounters.ts`
- `src/data/catalog/validators.ts`
- `src/data/catalog/index.ts`
- `src/data/catalog/__tests__/catalog.test.ts`
- `scripts/generate-real-catalog.js`

## Modelo de região

`CatalogRegion` possui ID permanente, `contentPack`, nome localizado e `displayOrder`. A região é independente da categoria de conteúdo e poderá ser reutilizada por chefes, itens, equipamentos e outros catálogos.

## Modelo de encontro

`BossEncounter` possui ID, `regionId`, nome e localização localizados e disponibilidade localizada opcional. Campos opcionais preservam nome original, nomes de barra, quantidade e lista de participantes principais, participantes variáveis, fases, summons e auxiliares. O conteúdo do encontro é derivado pela região.

## Campos incluídos no bundle

Somente fatos necessários em tempo de execução: identificação, nome, região, localização, disponibilidade e estrutura relevante da batalha.

## Campos mantidos apenas na documentação

URLs, fontes, estados editoriais, confirmação de pesquisa, justificativas, divergências extensas e histórico narrativo não entram no bundle.

## Contagens

- Regiões: 26 — 16 do jogo base e 10 de `Shadow of the Erdtree`.
- Encontros: 208 — 165 do jogo base e 43 da expansão.
- Finger Ruins of Rhia existe com zero encontros.

## Validações automáticas

O validador puro verifica IDs, referências regionais, textos localizados, disponibilidade, participantes, `contentPack`, `displayOrder`, ausência de `sample-*` e contagens globais/regionais. Os testes também verificam IDs especiais, exclusões, normalizações e isolamento dos dados temporários.

## Dados temporários

Os módulos de produção `src/data/regions.ts` e `src/data/bosses.ts` foram removidos. `src/data/index.ts` exporta exclusivamente o catálogo real para os consumidores. Os dados `sample-*` não participam mais de telas, busca, filtros ou contagens.

O armazenamento migra o array legado de progresso para o esquema versionado 1 durante a hidratação, removendo apenas IDs com prefixo `sample-*`, eliminando duplicatas e preservando IDs reais conhecidos ou desconhecidos. Idioma e tema usam chaves independentes e não são modificados.

## Próxima etapa

Executar uma revisão manual completa no Expo Go, corrigir eventuais problemas visuais e preparar um commit da integração do catálogo real.

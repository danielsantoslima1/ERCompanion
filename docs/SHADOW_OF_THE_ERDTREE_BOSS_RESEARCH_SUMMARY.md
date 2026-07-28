# Shadow of the Erdtree Boss Research Summary

## Status da pesquisa

Pesquisa e revisão concluídas, com aprovação final explícita do usuário em `2026-07-28`. O inventário original conserva 42 entradas; as divisões de `Jagged Peak Drake x2` e `Tree Sentinel` produzem 44 registros normalizados. Há 43 encontros ativos, todos com barra `confirmed` e estado `approved`; zero `pending`, zero `researched`, zero `needs-review` e um registro `rejected`.

## Contagem por região

| Região | Entradas originais | Encontros aprovados | Confirmed | Approved |
|---|---:|---:|---:|---:|
| Gravesite Plain | 9 | 10 | 10 | 10 |
| Scadu Altus | 13 | 11 | 11 | 11 |
| Rauh Base | 2 | 3 | 3 | 3 |
| Ancient Ruins of Rauh | 2 | 2 | 2 | 2 |
| Cerulean Coast | 4 | 4 | 4 | 4 |
| Charo's Hidden Grave | 3 | 3 | 3 | 3 |
| Jagged Peak | 4 | 4 | 4 | 4 |
| Abyssal Woods | 1 | 1 | 1 | 1 |
| Finger Ruins of Rhia | 0 | 0 | 0 | 0 |
| Scaduview | 4 | 5 | 5 | 5 |
| **Total** | **42** | **43** | **43** | **43** |

## Encontros pesquisados

Os detalhes e fontes por ocorrência estão nos dez documentos regionais `BOSS_BATCH_*_PROPOSAL.md`. Os 42 nomes permanecem preservados como inventário histórico. A normalização contém 43 ativos aprovados mais Dryleaf Dane rejeitado, totalizando 44 registros.

## Regiões sem encontros

`Finger Ruins of Rhia` tem zero encontros confirmados. A região continua válida, pode exibir `0/0` para chefes e será reutilizada por itens.

## Casos especiais

- Enir-Ilim é localização de Gravesite Plain.
- Leda usa o card `Needle Knight Leda and Allies`, possui adversários e aliados variáveis, mas uma unidade.
- Messmer, Radahn e Scadutree Avatar mantêm um ID através das fases.
- `Jagged Peak Drake x2` foi dividido em dois encontros independentes.
- `Tree Sentinel` de Scaduview foi dividido em dois encontros independentes.
- Red Bear foi transferido para Rauh Base; Death Knight de Fog Rift Catacombs e Ancient Dragon-Man foram transferidos para Gravesite Plain.
- Repetições de Ghostflame Dragon, Death Knight e Dancing Lion são diferenciadas por localização.

## Candidatos adicionais

Nenhum candidato adicional inequívoco.

## Candidatos rejeitados

- `Dryleaf Dane — Moorth Ruins`: duelo de NPC sem barra de chefe inferior; barra e estado `rejected`.

## Divergências pendentes

Nenhuma. Todas as divergências da pesquisa foram resolvidas explicitamente pelo usuário em `2026-07-28`; o histórico foi preservado nos lotes e em `DATA_SOURCES.md`.

## Limitações das fontes

Fextralife teve acesso automatizado inconsistente. Artigo e mapa Rock Paper Shotgun são uma única família editorial. Wiki.gg ofereceu a principal validação independente, mas agrupamentos editoriais amplos nem sempre coincidem com a taxonomia aprovada. Fontes oficiais não fornecem catálogo técnico completo por ocorrência. Nenhum mapa ou imagem foi baixado.

## Próximas decisões do usuário

Preparar a incorporação dos dados reais de regiões e chefes no aplicativo, começando pela modelagem final e pela geração validada dos arquivos de dados.

## Validações documentais

As 33 validações finais foram executadas em `2026-07-28`: 42 entradas originais, 44 registros normalizados, 43 ativos `confirmed`/`approved`, um único `rejected`, zero `pending`, `researched` ou `needs-review`; contagens regionais reconciliadas; transferências e divisões aplicadas; IDs ativos únicos, válidos e geográficos; Enir-Ilim preservada como `location` de Gravesite Plain; nenhum novo `regionId`; catálogo de 165 encontros do jogo base, código e dados do aplicativo inalterados; nenhum commit criado.

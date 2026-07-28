# Base Game Boss Approval Summary

## Status final

- Data da aprovação final: `2026-07-28`.
- Regiões do jogo base: 16.
- Encontros ativos aprovados: 165.
- Barra: todos os 165 estão `confirmed`.
- Estado geral: todos os 165 estão `approved`.
- Pendências ativas: nenhuma em `pending`, `researched` ou `needs-review`.
- Aprovação desta etapa: 143 encontros; os 22 de Limgrave já estavam aprovados.
- Dados do aplicativo: ainda não foram inseridos.

## Contagem por região

| Região | Encontros aprovados |
| --- | ---: |
| Limgrave | 22 |
| Weeping Peninsula | 10 |
| Liurnia of the Lakes | 28 |
| Siofra River | 5 |
| Ainsel River | 1 |
| Lake of Rot | 2 |
| Caelid | 17 |
| Greyoll's Dragonbarrow | 8 |
| Deeproot Depths | 3 |
| Altus Plateau | 34 |
| Mt. Gelmir | 10 |
| Mountaintops of the Giants | 12 |
| Consecrated Snowfield | 7 |
| Mohgwyn Palace | 1 |
| Miquella's Haligtree | 2 |
| Crumbling Farum Azula | 3 |
| **Total** | **165** |

## Regras consolidadas

- Cada ocorrência em uma localização diferente possui ID e progresso independentes.
- Participantes de uma mesma batalha coletiva formam uma unidade quando a conclusão pertence ao mesmo evento.
- Fases e mudanças de nome dentro da mesma batalha não criam encontros separados.
- Summons e inimigos auxiliares são documentados separadamente e não se tornam participantes principais automaticamente.
- Regiões usam somente os 16 IDs aprovados; castelos, cidades, cavernas, catacumbas e outras subáreas permanecem em `location`.
- O nome da barra e o nome de exibição seguem as decisões registradas; sem tradução brasileira oficial confirmada, o português repete o inglês.
- IDs ativos são permanentes e independentes do idioma.
- Uma correção futura retorna o registro para `needs-review`. Depois da publicação, mudança de ID exige migração explícita, versionada e idempotente.

## Candidatos rejeitados

Os registros abaixo não fazem parte dos 165 encontros:

- Recusant Henricus — Limgrave Colosseum/Stormhill.
- Bloody Finger Nerijus — Murkwater River.
- Anastasia, Tarnished-Eater — Smoldering Church.
- Grafted Scion — Stormveil Castle.
- Ulcerated Tree Spirit — Stormveil Castle.
- Crucible Knight — Stormveil Castle.
- Lion Guardian — Stormveil Castle.
- Godskin Noble — Carian Study Hall.
- Elder Dragon Greyoll — Fort Faroth.
- Margit, the Fell Omen — Capital Outskirts.
- Tibia Mariner — próximo de Castle Sol.
- Draconic Tree Sentinel — Crumbling Farum Azula.

Todos permanecem com confirmação da barra e estado geral `rejected`, com fontes, justificativas e histórico preservados nos documentos regionais e em `DATA_SOURCES.md`.

## Arquivos de origem

- `BOSS_BATCH_LIMGRAVE_PROPOSAL.md`
- `BOSS_BATCH_WEEPING_PENINSULA_PROPOSAL.md`
- `BOSS_BATCH_LIURNIA_OF_THE_LAKES_PROPOSAL.md`
- `BOSS_BATCH_SIOFRA_RIVER_PROPOSAL.md`
- `BOSS_BATCH_AINSEL_RIVER_PROPOSAL.md`
- `BOSS_BATCH_LAKE_OF_ROT_PROPOSAL.md`
- `BOSS_BATCH_CAELID_PROPOSAL.md`
- `BOSS_BATCH_GREYOLLS_DRAGONBARROW_PROPOSAL.md`
- `BOSS_BATCH_DEEPROOT_DEPTHS_PROPOSAL.md`
- `BOSS_BATCH_ALTUS_PLATEAU_PROPOSAL.md`
- `BOSS_BATCH_MT_GELMIR_PROPOSAL.md`
- `BOSS_BATCH_MOUNTAINTOPS_OF_THE_GIANTS_PROPOSAL.md`
- `BOSS_BATCH_CONSECRATED_SNOWFIELD_PROPOSAL.md`
- `BOSS_BATCH_MOHGWYN_PALACE_PROPOSAL.md`
- `BOSS_BATCH_MIQUELLAS_HALIGTREE_PROPOSAL.md`
- `BOSS_BATCH_CRUMBLING_FARUM_AZULA_PROPOSAL.md`

## Próxima etapa

Pesquisar e preparar os encontros de Shadow of the Erdtree antes de inserir os dados reais no aplicativo.

# Shadow of the Erdtree Boss Approval Summary

## Status final

- Data da aprovação explícita do usuário: `2026-07-28`.
- Regiões aprovadas: 10.
- Encontros ativos aprovados: 43.
- Barras `confirmed`: 43.
- Estados ativos em `pending`, `researched` ou `needs-review`: 0.
- Dryleaf Dane é o único registro `rejected` e não integra os 43.

## Contagem por região

| Região | Encontros aprovados |
|---|---:|
| Gravesite Plain | 10 |
| Scadu Altus | 11 |
| Rauh Base | 3 |
| Ancient Ruins of Rauh | 2 |
| Cerulean Coast | 4 |
| Charo's Hidden Grave | 3 |
| Jagged Peak | 4 |
| Abyssal Woods | 1 |
| Finger Ruins of Rhia | 0 |
| Scaduview | 5 |
| **Total** | **43** |

## Normalizações aplicadas

- As 42 entradas originais produziram 44 registros normalizados: 43 ativos e Dryleaf Dane rejeitado.
- `Jagged Peak Drake x2` originou dois encontros independentes: `jagged-peak-drake-jagged-peak-entrance` e `jagged-peak-drake-foot-of-jagged-peak`.
- `Tree Sentinel` originou dois encontros independentes: `tree-sentinel-hinterland-grace-road` e `tree-sentinel-shaman-village-road`.
- Red Bear foi transferido para Rauh Base; Death Knight de Fog Rift Catacombs e Ancient Dragon-Man foram transferidos para Gravesite Plain.
- Knight of the Solitary Gaol, Rellana e Midra preservam os nomes originais e adotam a forma atual da barra.
- Messmer e Radahn permanecem uma unidade cada, mesmo com mudança de fase e nome.
- `Needle Knight Leda and Allies` é uma unidade com composição variável e aliados do jogador documentados separadamente.
- Enir-Ilim permanece `location` de Gravesite Plain.
- Finger Ruins of Rhia permanece região válida com zero encontros.

## Regras consolidadas

- Cada batalha separadamente concluível por localização possui ID e progresso próprios.
- Fases da mesma luta compartilham uma unidade e um progresso.
- Summons e auxiliares não criam encontros sem unidade acompanhável própria.
- Nomes originais do inventário permanecem no histórico quando a barra usa outra forma.
- IDs ativos são permanentes e independentes do idioma.
- IDs propostos e não publicados puderam ser substituídos sem migração; após publicação, mudanças exigem migração explícita, versionada e idempotente.
- Correções futuras devolvem o registro afetado para `needs-review` e exigem nova aprovação.

## Registro rejeitado

`Dryleaf Dane — Moorth Ruins` permanece com confirmação e estado `rejected`: o duelo pesquisado não apresenta barra inferior de chefe. Não faz parte dos 43 encontros.

## Arquivos de origem

- `BOSS_BATCH_GRAVESITE_PLAIN_PROPOSAL.md`
- `BOSS_BATCH_SCADU_ALTUS_PROPOSAL.md`
- `BOSS_BATCH_RAUH_BASE_PROPOSAL.md`
- `BOSS_BATCH_ANCIENT_RUINS_OF_RAUH_PROPOSAL.md`
- `BOSS_BATCH_CERULEAN_COAST_PROPOSAL.md`
- `BOSS_BATCH_CHAROS_HIDDEN_GRAVE_PROPOSAL.md`
- `BOSS_BATCH_JAGGED_PEAK_PROPOSAL.md`
- `BOSS_BATCH_ABYSSAL_WOODS_PROPOSAL.md`
- `BOSS_BATCH_FINGER_RUINS_OF_RHIA_PROPOSAL.md`
- `BOSS_BATCH_SCADUVIEW_PROPOSAL.md`

## Próxima etapa

Preparar a incorporação dos dados reais de regiões e chefes no aplicativo.

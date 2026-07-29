# Plano de implementação futura — Feitiços e Encantamentos

## Estado da implementação

O MVP foi implementado com 84 Feitiços, 129 Encantamentos, schema v3, progresso geral 537, rotas, Home, Drawer, busca, filtros, detalhes, spoilers e testes. A revisão manual no Expo Go foi concluída e aprovada em temas Claro, Escuro e Sistema. As limitações documentais continuam explícitas: 153 localizações pendentes, fallback inglês, dados técnicos adiados e nenhuma entrada confirmada como Perdível.

## Princípios

Feitiços e Encantamentos são domínios separados. Nenhuma escola, família, catalisador ou abstração genérica excessiva será introduzida. Cada etapa depende de aprovação explícita e deve poder ser revertida isoladamente.

| Etapa | Entrega futura | Dependências e riscos | Critério de aceite | Rollback |
|---:|---|---|---|---|
| 1 | Aprovação dos catálogos | resolver lendárias, perdíveis e pt-BR | totais e IDs aprovados | manter somente pesquisa |
| 2 | Tipos separados | risco de modelo documental excessivo | tipos sem campos proibidos | remover novos módulos |
| 3 | Importação dos dados | risco de transcrição | 84/129 e IDs exatos | reverter arquivos de dados |
| 4 | Validadores de produção | risco de aceitar nulos indevidos | totais, IDs e invariantes cobertos | reverter validadores |
| 5 | Schema v3 | concorrência e compatibilidade | quatro arrays persistidos | manter schema v2 |
| 6 | Migração v2→v3 | perda de progresso anterior | idempotente, arrays novos vazios | restaurar loader v2 |
| 7 | Hooks de progresso | sobrescrita entre categorias | filas e rollback isolado | remover novas ações |
| 8 | Cards | layout e acessibilidade | conteúdo compacto aprovado | remover componentes novos |
| 9 | Listas | virtualização e estado | totais, seções e rolagem preservados | remover rotas/listas |
| 10 | Detalhes | nulos e fallback | só campos disponíveis, aviso único | remover detalhes |
| 11 | Busca bilíngue | índice grande ou conteúdo indevido | nome/local/NPC/fonte nos dois idiomas | retirar seletor |
| 12 | Filtros | semântica AND | todos os filtros por interseção | retirar filtros novos |
| 13 | Drawer | acordeões e rotas ativas | ordem fixa e exclusividade | restaurar Drawer anterior |
| 14 | Home | quatro cards | valores independentes | restaurar dois cards |
| 15 | Progresso geral | denominador dinâmico | total 537 com catálogos aprovados | voltar a 324 |
| 16 | Reset | preservar preferências | limpar quatro categorias, não usar clear | restaurar reset v2 |
| 17 | Acessibilidade | ícones e foco | ícones decorativos, ações rotuladas | remover ajustes novos |
| 18 | Testes | regressões e novos domínios | baseline preservado e matriz completa | reverter etapa falha |
| 19 | Revisão Expo Go | tema, idioma, navegação | roteiro manual aprovado | corrigir antes de commit |
| 20 | Commit final | escopo indevido | diff funcional aprovado | não criar commit |

## Reutilização

Reutilizar barra/card horizontal de progresso, normalização de busca, filtros básicos, estado vazio e padrões de lista virtualizada. Cards e detalhes devem permanecer especializados por categoria. Não transformar BossCard ou AshOfWarCard em entidade genérica.

## Matriz de testes futura

- catálogo: IDs, totais, origens, ausência de duplicatas, escolas/famílias/catalisadores;
- busca: inglês, pt-BR, cruzada, NPC, local e fonte;
- ordenação: locale ativo e ID como desempate;
- filtros: Lendárias, Perdíveis, INT, FÉ, ARC e todas as combinações AND;
- progresso: separado, geral, IDs desconhecidos, demo IDs e percentuais seguros;
- migração: v2→v3, idempotência, preservação anterior e arrays novos vazios;
- persistência: serialização, atualização otimista e rollback isolado;
- reset: quatro categorias, idioma e tema preservados, sem `AsyncStorage.clear()`;
- navegação: seis rotas de lista e duas dinâmicas por domínio (oito rotas de lista/pacote combinadas e dois padrões dinâmicos);
- interface: cards compactos, detalhes opcionais, fallback e acessibilidade;
- regressão: 26 regiões, 208 Chefes, 116 Cinzas e total atual 324 até integração.

## Estado

As etapas do MVP e a revisão manual foram concluídas. O commit final depende da auditoria automatizada integral; nenhuma dependência nova foi adicionada.

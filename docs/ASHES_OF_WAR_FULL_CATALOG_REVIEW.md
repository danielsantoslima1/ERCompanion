# Revisão combinada — Cinzas da Guerra

## Totais

- Jogo base provisório: **91**
- Shadow of the Erdtree proposto: **25**
- Total combinado: **116**

## Status

- `verified`: 0
- `partial`: 116
- `disputed`: 0

## Pendências

- Nomes pt-BR pendentes: 116
- Custos de FP pendentes: 116
- Localizações principais que precisam de normalização: 6
- Tipos de habilidade, efeitos separados e segundas confirmações técnicas ainda precisam de revisão individual.

## Divergências

- A base legada omite Shared Order e Sky Shot e inclui Lost Ashes of War; o total provisório do jogo base permanece 91.
- A página específica da expansão omite Ghostflame Call na lista visível; a entrada foi mantida após cruzamento com tabela geral, página individual e índice da expansão.
- Candidatos pt-BR comunitários não foram promovidos a localização oficial.

## IDs

- Colisões entre jogo base e expansão: 0
- Todos os IDs propostos são kebab-case e independentes do idioma.

## Exclusões

Lost Ashes of War, duplicações, habilidades exclusivamente fixas, itens de outras categorias e métodos alternativos como entradas separadas.

## Confiança geral

Alta para totais provisórios, nomes ingleses, IDs, pacote e afinidades; média para aquisição/compatibilidade; pendente para pt-BR, FP e detalhes técnicos. **Este relatório não é catálogo de produção.**

O conjunto combinado de 116 entradas foi aprovado provisoriamente para implementação. A aprovação não resolve campos pt-BR, custos de FP, normalizações ou demais pendências e não transforma estes documentos em catálogo de produção.

## Decisões técnicas posteriores à aprovação

- inglês será usado como fallback quando pt-BR estiver ausente;
- detalhes mostrarão aviso discreto de tradução oficial pendente;
- cards compactos não mostrarão o aviso;
- busca em português também encontrará conteúdo inglês relevante;
- IDs e progresso permanecerão estáveis quando traduções forem adicionadas;
- o progresso geral futuro terá 324 unidades: 208 chefes e 116 Cinzas;
- a Home futura será organizada por categorias;
- haverá uma tela geral com os 208 chefes;
- o Drawer futuro terá Chefes e Cinzas da Guerra como grupos principais em acordeão;
- armazenamento e migração serão evoluídos somente em etapa posterior.

## Conversão para produção

As 116 entradas foram convertidas para um catálogo TypeScript isolado. A comparação automatizada confirmou os mesmos IDs e pacotes dos dois JSONs. URLs, referências, status editoriais, datas e notas exclusivas de pesquisa não foram transferidos. Campos pt-BR e FP nulos permaneceram nulos.

Interface, rotas, armazenamento e migração agora usam o catálogo convertido.
A revisão manual foi concluída sem regressões conhecidas. A aprovação para a
interface continua provisória: campos editoriais pendentes permanecem somente
na documentação, fallbacks ingleses continuam visíveis quando necessários e
custos de FP desconhecidos são omitidos.

Próxima etapa:
`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`

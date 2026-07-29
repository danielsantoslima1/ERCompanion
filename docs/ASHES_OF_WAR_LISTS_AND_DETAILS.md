# Listas e detalhes das Cinzas da Guerra

## Rotas

- `/ashes-of-war`: 116 entradas em seções de jogo base e expansão;
- `/ashes-of-war/base-game`: lista contínua com 91 entradas;
- `/ashes-of-war/shadow-of-the-erdtree`: lista contínua com 25 entradas;
- `/ashes-of-war/[ashOfWarId]`: detalhes completos.

Os segmentos dos pacotes são estáticos. A rota de detalhes pertence ao Stack
raiz e é empilhada sobre a lista de origem.

## Listas e progresso

A tela geral usa `SectionList`; as listas específicas usam `FlatList`. Todas
possuem busca, filtros Todas/Coletadas/Não coletadas, ordenação localizada e
progresso horizontal. IDs desconhecidos permanecem persistidos, mas não contam
nos totais visuais 116, 91 e 25.

A tela geral mantém Jogo base antes de Shadow of the Erdtree e oculta somente
seções sem resultados. Nenhuma lista é dividida por região.

## Card compacto

O card especializado mostra somente nome, localização principal, indicador,
detalhes e botão de coleta. O estado não coletado usa `ghost-outline` de
MaterialCommunityIcons; o estado coletado usa `✓`. Ambos são decorativos,
ocultos da acessibilidade e acompanham o estado otimista do contexto.

## Busca, localização e fallback

O índice pesquisável inclui nome, habilidade, localização e obtenção principais,
métodos alternativos, resumo, afinidade, compatibilidade e campos técnicos
disponíveis. Português pesquisa conteúdo pt-BR e inglês.

Valores pt-BR ausentes usam inglês sem modificar o catálogo. Os detalhes mostram
um único aviso `Conteúdo em inglês — tradução oficial pendente` quando algum
campo exibível depende desse fallback. Cards não mostram o aviso.

## Detalhes e retorno

Os detalhes mostram origem, localização, obtenção, todos os métodos na ordem do
catálogo, resumo, habilidade, afinidade, compatibilidade, campos opcionais e
estado de coleta. Campos opcionais e FP sem valor confirmado são omitidos.
URLs e metadados editoriais não são exibidos.

Ao abrir por uma lista, o retorno padrão conserva a lista montada, incluindo
busca, filtro e posição aproximada. Acesso direto retorna à lista específica do
pacote. ID inválido recebe estado seguro.

Home e Drawer estão integrados. A revisão manual no Expo Go confirmou as três
listas, detalhes, busca, filtros, retorno, coleta, fallback e temas.

## Próxima etapa

`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`
## Integração de navegação

O card Cinzas da Guerra da Home abre `/ashes-of-war`. O grupo correspondente
no Drawer oferece Todas as Cinzas, Jogo base e Shadow of the Erdtree como
opções diretas, sem regiões ou acordeões internos. A revisão manual foi
concluída sem regressões conhecidas.

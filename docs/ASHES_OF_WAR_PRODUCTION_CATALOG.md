# Catálogo de produção — Cinzas da Guerra

## Estado

O catálogo de produção foi criado com 116 Cinzas da Guerra provisoriamente aprovadas:

- 91 do jogo base;
- 25 de Shadow of the Erdtree.

Esta etapa implementa somente dados, tipos, validações, índice, seletores localizados e testes. Interface, Home, Drawer, rotas, armazenamento, contexto de progresso e migrações permanecem inalterados.

## Estrutura

- `src/data/ashes-of-war/types.ts`
- `src/data/ashes-of-war/ashesOfWar.ts`
- `src/data/ashes-of-war/validators.ts`
- `src/data/ashes-of-war/selectors.ts`
- `src/data/ashes-of-war/index.ts`
- `src/data/ashes-of-war/__tests__/catalog.test.ts`
- `src/data/ashes-of-war/__tests__/selectors.test.ts`

O domínio permanece separado do catálogo de chefes e regiões. `src/data/index.ts` apenas reexporta sua API pública para consumidores futuros.

## Conversão

`docs/research/generate-ashes-of-war-production.js` converte os dois JSONs aprovados em TypeScript estático. A conversão:

- preserva IDs e pacotes;
- preserva `null` em pt-BR e FP;
- cria `skillName` separado, inicialmente igual ao nome localizado da Cinza;
- remove `sourceRefs`, URLs, status editorial, datas e justificativas;
- remove notas editoriais repetidas sobre tradução e Lost Ashes of War;
- normaliza seis placeholders editoriais de localização/aquisição para o valor neutro inglês `Unknown`, sem apresentar a pendência como fato resolvido;
- não adiciona nem remove entradas.

`docs/research/validate-ashes-of-war-production.js` compara offline documentos e produção.

## Modelo

O modelo aprovado foi mantido. Foi adicionado apenas `LocalizedRequiredList` para nomear e reutilizar com segurança o contrato das listas localizadas de equipamentos.

Todos os campos são `readonly`. O array gerado usa `as const satisfies readonly AshOfWar[]`, preservando literais e validação estrutural em compilação.

## Índice e seletores

O índice privado é um `ReadonlyMap<string, AshOfWar>`. O array principal continua sendo a fonte canônica. A API oferece:

- todas as Cinzas;
- busca segura por ID;
- seleção por pacote;
- ordenação localizada;
- resolução localizada de texto e listas;
- detecção de fallback relevante;
- texto determinístico para busca futura;
- tamanho validável do índice.

Nenhuma função altera o catálogo.

## Fallback pt-BR

Em inglês, sempre se usa `en` e `usedFallback` é falso. Em pt-BR:

- string pt-BR não vazia é usada;
- `null` ou string vazia usa inglês;
- o retorno informa `usedFallback: true`.

A detecção agregada considera campos obrigatórios exibíveis, compatibilidade, aquisições e campos opcionais que realmente possuam conteúdo. Campo opcional nulo não gera falso fallback.

## Ordenação

Ordenação por nome resolvido, usando collation do idioma ativo e ID como desempate. A ordem do arquivo não participa da decisão.

## Validação

O validador cobre totais, IDs, colisões, pacotes, campos localizados, aquisição, afinidade, compatibilidade, FP, URLs, Lost Ashes of War, nomes duplicados, `displayOrder` e metadados editoriais.

## Revisão manual

A revisão posterior no Expo Go confirmou o consumo do catálogo nas listas,
detalhes, busca, ordenação, fallback e progresso, sem URLs ou metadados
editoriais visíveis.

## Próxima etapa

`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`
## Integração de progresso

O catálogo permanece com 116 entradas e não foi modificado pela implementação
do schema de progresso v2. Seus IDs são usados pelos seletores para distinguir
progresso reconhecido de IDs desconhecidos preservados no armazenamento.
## Consumo pelas listas e detalhes

As 116 entradas agora alimentam três listas e a rota de detalhes sem alteração
dos dados de produção. Ordenação, texto pesquisável e fallback são derivados por
seletores puros. URLs e metadados editoriais permanecem fora da interface.

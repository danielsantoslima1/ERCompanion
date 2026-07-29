# Integração da Home e do Drawer por categoria

## Estado implementado

- A Home apresenta `Progresso Geral` / `Overall Progress` com 324 unidades:
  208 Chefes e 116 Cinzas da Guerra.
- Somente IDs reconhecidos pelos respectivos catálogos contam visualmente.
- A Home possui exatamente dois cards horizontais:
  - Chefes: progresso sobre 208 e destino `/all-bosses`;
  - Cinzas da Guerra: progresso sobre 116 e destino `/ashes-of-war`.
- Os antigos cards por pacote não são mais renderizados na Home.

## Drawer

A ordem principal é fixa: Home, Chefes, Cinzas da Guerra e Settings.

- Chefes:
  - Todos os chefes (`/all-bosses`);
  - Jogo base, com Todos os chefes e 16 regiões;
  - Shadow of the Erdtree, com Todos os chefes e 10 regiões.
- Cinzas da Guerra:
  - Todas as Cinzas (`/ashes-of-war`);
  - Jogo base (`/ashes-of-war/base-game`);
  - Shadow of the Erdtree (`/ashes-of-war/shadow-of-the-erdtree`).

Chefes e Cinzas da Guerra são acordeões mutuamente exclusivos. Os pacotes
internos de Chefes também permanecem mutuamente exclusivos. A rota ativa
determina a abertura do grupo e a seleção do item por pathname, sem depender
do texto localizado. Home e Settings recolhem todos os grupos.

As rotas de conteúdo ficam registradas de modo invisível no Drawer; somente o
conteúdo personalizado apresenta a hierarquia aprovada.

## Revisão manual concluída

A revisão completa no Expo Go confirmou:

- Home em `0/324`, Chefes em `0/208` e Cinzas da Guerra em `0/116`;
- exatamente dois cards, padrão horizontal e destinos públicos corretos;
- estrutura, ordem, acordeões e estados ativos do Drawer;
- rotas gerais, específicas e regionais sem `Unmatched Route`;
- listas, busca, filtros, cards, detalhes e retorno de Chefes e Cinzas;
- coleta e derrota independentes, persistidas e refletidas no total combinado;
- português, inglês e ordenação localizada;
- temas Claro, Escuro e Sistema, sem cortes ou sobreposições.

Durante a revisão, uma Cinza coletada produziu `1/324`, `0/208` e `1/116`;
uma Cinza e um Chefe produziram `2/324`, `1/208` e `1/116`.

O reset final foi executado. O estado confirmado ficou em `0/324`, `0/208` e
`0/116`, com idioma e tema preservados, Chefes com indicador não derrotado,
Cinzas com fantasma e filtros de concluídos vazios.

Não há regressão ou problema conhecido de navegação.

## Verificação final

- JSONs documentais e comparação com produção: aprovados;
- TypeScript e ESLint: aprovados;
- Jest: 29 suítes e 350 testes aprovados, sem remoção, consolidação indevida,
  exclusão ou execução exclusiva;
- Expo Doctor: 18 de 18 verificações aprovadas;
- regra horizontal de progresso preservada em todos os cards;
- nenhuma dependência alterada e nenhum artefato local incluído.

## Próxima etapa

`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`

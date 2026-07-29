# Alphabetical Navigation and Compact Lists

## Status

Implementação e revisão manual no Expo Go concluídas com sucesso. O catálogo permanece com 26 regiões e 208 encontros aprovados, sem alteração de IDs ou dados.

## Regras de ordenação

Regiões e encontros são ordenados alfabeticamente pelo nome localizado no idioma ativo. Português usa comparação `pt-BR`; inglês usa `en`. A comparação reduz diferenças desnecessárias de caixa e acentos e usa o ID como desempate estável.

`displayOrder` permanece no catálogo como metadado aprovado, mas não controla mais a ordem visual das regiões. A troca de idioma recalcula imediatamente as listas.

Fases, ondas, participantes, summons, auxiliares e outras sequências com significado preservam integralmente a ordem registrada. A regra alfabética não modifica a ordem interna de batalhas.

Novas regiões e novos chefes deverão seguir a ordenação alfabética localizada. Novos campos sequenciais não deverão ser reordenados automaticamente.

## Drawer

O Drawer usa um acordeão:

- Home;
- Bosses;
  - Base game;
    - All bosses;
    - 16 regiões em ordem alfabética;
  - Shadow of the Erdtree;
    - All bosses;
    - 10 regiões em ordem alfabética;
- Settings.

Somente um grupo de conteúdo permanece aberto. Fechar Bosses, abrir Home ou abrir Settings fecha os dois grupos. Uma região ou tela All bosses ativa abre Bosses e somente seu grupo. A antiga opção All regions foi removida.

## Todos os chefes

As rotas públicas são:

- `/all-bosses`, com 208 encontros em seções de jogo base e expansão;
- `/all-bosses/base-game`, com 165 encontros;
- `/all-bosses/shadow-of-the-erdtree`, com 43 encontros.

Cada tela apresenta progresso por conteúdo, busca, filtros e uma lista única alfabetizada, sem agrupamento regional. A busca considera nome, região, localização e disponibilidade localizada. Conteúdo inválido recebe estado seguro.

Na rota combinada, o progresso é único para os 208 encontros; os cabeçalhos
das duas seções não possuem progresso adicional. Busca e filtros atuam nas duas
seções, e seções sem resultados são ocultadas. A revisão manual dessa nova
rota permanece pendente.

## Home

A Home mantém o progresso geral dos 208 encontros e substitui os 26 cartões regionais por exatamente dois cartões, nesta ordem fixa:

1. Base game, com progresso sobre 165 encontros;
2. Shadow of the Erdtree, com progresso sobre 43 encontros.

Cada cartão abre sua tela All bosses.

## Página regional

O cabeçalho mantém o nome localizado da região. O conteúdo usa o título `Progresso da Região` / `Region Progress`, e o quadro exibe somente razão, percentual e indicador visual. O nome da região não é repetido.

Os encontros aparecem alfabeticamente. Busca e filtros preservam a mesma ordem. Finger Ruins of Rhia continua exibindo `0/0`, `0%` e o estado vazio próprio.

## Cartões compactos

Cartões regionais exibem somente nome, localização, ação Ver detalhes e controle de progresso. Nas telas All bosses, acrescentam o nome da região.

Disponibilidade, nomes de barra, participantes, fases, summons, auxiliares e composição variável permanecem exclusivamente na tela de detalhes.

Cada card possui um indicador visual pequeno no canto superior direito: `⚔` para encontro não derrotado e `✓` para encontro derrotado. O indicador usa as cores do tema, não possui ação própria e fica oculto da árvore de acessibilidade; o card e o botão de progresso continuam comunicando o estado em texto.

O nome pode ocupar várias linhas e reserva espaço para o indicador sem sobreposição. Os controles permanecem abaixo do conteúdo.

## Cards de progresso

Todo card de progresso apresenta `concluído/total` à esquerda e a porcentagem à direita, na mesma linha, com a barra de progresso abaixo. Esse padrão compartilhado é usado na Home, nas páginas regionais e nas duas telas Todos os chefes, e passa a ser obrigatório para cards futuros.

Razão e porcentagem não devem ser empilhadas, posicionadas uma abaixo da outra nem centralizadas em conjunto. O comportamento cobre `0/0`, `0/43`, `0/165`, `0/208`, progresso parcial e `100%`, sem divisão por zero, `NaN` ou `Infinity`. Finger Ruins of Rhia permanece com `0/0` e `0%`.

## Seletores

Seletores puros centralizam comparação localizada, ordenação de regiões e encontros, validação de `contentPack`, seleção e progresso por conteúdo e busca/filtro. Os arrays do catálogo não são mutados.

## Traduções

Os dicionários tipados possuem paridade para títulos de progresso, All bosses, títulos por conteúdo e estado de conteúdo inválido. A chave visual de All regions foi removida.

## Testes

Os testes cobrem ordenação localizada, troca de idioma, desempate por ID, preservação de sequências internas, acordeão do Drawer, rotas All bosses, Home com dois cartões, cartões compactos, progresso regional, busca, filtros, estados inválidos e regressões de detalhes, catálogo e armazenamento.

## Compatibilidade

O formato do progresso, a migração, os 26 IDs regionais, os 208 IDs de encontros e os dados aprovados não foram alterados. A tela de detalhes continua sendo a fonte das informações estruturais completas.

## Revisão manual no Expo Go

A revisão manual foi concluída com sucesso. Foram validados:

- Home simplificada, com progresso geral no topo e exatamente os dois cards de conteúdo;
- navegação pelos cards Base game e Shadow of the Erdtree;
- Drawer em acordeão, com somente um grupo aberto, All bosses como primeiro item e sem All regions;
- ordenação localizada de regiões e encontros em português e inglês;
- páginas regionais e as duas telas All bosses;
- busca por nome, região e localização, filtros e navegação para detalhes;
- retorno preservando busca, filtro e posição da lista;
- sincronização do progresso entre região, All bosses e Home;
- indicadores `⚔` e `✓`, sem ação de toque, acompanhando o estado e sem sobreposição em nomes longos;
- padrão horizontal do progresso em todas as telas, com a barra abaixo dos valores;
- temas Claro, Escuro e Sistema;
- Finger Ruins of Rhia com `0/0`, `0%` e estado vazio;
- ausência de cortes, sobreposições, caminhos inválidos e ocorrências de `Unmatched Route`.

O reset do progresso foi concluído. O estado final ficou em `0/208`, `0/165` e `0/43`, com idioma e tema preservados.

## Próxima etapa

`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`

## Drawer integrado por categoria

A ordenação alfabética localizada das 16 regiões do jogo base e das 10 regiões
da expansão foi preservada. Todos os chefes continua como primeira opção de
Chefes e Todas as Cinzas como primeira opção de Cinzas da Guerra. A ordem dos
grupos principais é fixa e não usa `displayOrder`.

A revisão manual confirmou a ordenação localizada, o padrão compacto, a regra
horizontal dos cards de progresso e a ausência de cortes e sobreposições nos
temas Claro, Escuro e Sistema.

# Phase 2 — layout responsivo de filtros

## Decisão

Todos os grupos com dois ou mais filtros de pesquisa ou listagem usam
`FilterButtonGroup`. A regra é obrigatória para telas atuais e futuras e
substitui integralmente a proposta anterior de linha horizontal rolável.

## Contrato visual e de interação

- distribuição flexível com `flexDirection: "row"` e `flexWrap: "wrap"`;
- uma linha quando houver espaço e quantas linhas forem necessárias quando não
  houver;
- controles dimensionados pelo conteúdo e com `flexShrink: 0`;
- área de toque mínima de 44 dp preservada;
- espaçamento horizontal e vertical consistente;
- nenhuma redução de texto, reticência, grade, corte ou rolagem horizontal;
- crescimento vertical no fluxo normal, preservando a rolagem da lista.

Em telas estreitas, novas linhas empurram o conteúdo seguinte sem sobreposição.
Em tablets, os controles naturalmente ocupam menos linhas, mantêm apenas a
largura necessária e não são esticados.

## Composição

`OriginFilterButtons` preserva Base/DLC, exclusividade, segundo toque para limpar
e estado acessível `selected`. Nas telas “Todos”, seus botões são filhos diretos
do mesmo `FilterButtonGroup` que contém filtros de estado ou as opções
Lendárias/Perdíveis. Assim, qualquer botão pode passar para a linha seguinte.
Nas rotas específicas, apenas os filtros realmente disponíveis são renderizados.

O componente compartilhado não contém lógica de seleção. Busca, relevância,
progresso, filtros AND e persistência de estado continuam sob responsabilidade
de cada lista.

## Temas, tipografia e acessibilidade

Os botões existentes continuam consumindo tokens semânticos de fundo, borda,
seleção, foco, texto, pressão e desabilitado. A tipografia permanece Spectral nos
temas Claro, Escuro e Sistema. Cada filtro conserva seu role, nome, hint e estado;
a linha não transforma o grupo em um único controle de acessibilidade.

## Cobertura

A estrutura foi aplicada a Chefes, Cinzas da Guerra, Feitiços e Encantamentos,
incluindo filtros de origem, derrotado/coletado e Lendárias/Perdíveis. Os testes
verificam o contrato flexível em 320, 360, 390 e 412 dp e em tablet, grupos com
uma, duas, três ou mais linhas, composição compartilhada e preservação das regras
funcionais existentes.

A revisão manual no Expo Go foi concluída e aprovada.

# Tela geral Todos os Chefes

## Estado

A rota `/all-bosses` reúne os 208 encontros já aprovados sem substituir as
rotas específicas `/all-bosses/base-game` e
`/all-bosses/shadow-of-the-erdtree`.

## Estrutura

- um único progresso de Chefes, calculado sobre 208 encontros reconhecidos;
- seção Jogo base com 165 encontros;
- seção Shadow of the Erdtree com 43 encontros;
- nenhuma divisão por região;
- nenhum progresso nos cabeçalhos das seções.

O progresso usa o componente horizontal compartilhado: razão à esquerda,
percentual à direita e barra abaixo. IDs desconhecidos persistidos não contam.

## Busca, filtros e ordenação

A busca e os filtros Todos, Derrotados e Não derrotados são aplicados às duas
seções. Nome, região, localização e disponibilidade localizada participam da
busca. Se uma seção não possuir resultados, somente ela é ocultada; quando
nenhuma possuir resultados, aparece um único estado vazio.

Os encontros são ordenados alfabeticamente dentro de cada seção pelo idioma
ativo, usando ID como desempate. Jogo base permanece estruturalmente antes da
expansão. `displayOrder` não controla a ordem visual dos encontros.

## Cards, acessibilidade e detalhes

O `BossCard` existente continua compacto. Seu anúncio acessível inclui nome,
região quando disponível, localização e estado.

Detalhes são empilhados sobre a lista. O retorno padrão conserva a instância da
lista e, portanto, busca, filtro e posição aproximada. O fallback de acesso
direto à tela de detalhes continua retornando à região do encontro.

Home e Drawer abrem a rota geral. A revisão manual no Expo Go confirmou os 208
encontros, as duas seções, o progresso único, busca, filtros, detalhes e retorno.

## Próxima etapa

`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`
## Integração de navegação

O card Chefes da Home e a primeira opção do grupo Chefes no Drawer abrem
`/all-bosses`. As rotas específicas por pacote e as 26 rotas regionais
permanecem disponíveis. A revisão manual de navegação foi concluída sem
ocorrências de `Unmatched Route`.

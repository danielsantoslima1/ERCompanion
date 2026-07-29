# MVP de Feitiços e Encantamentos

## Estado

O MVP foi implementado e a revisão manual no Expo Go foi concluída e aprovada pelo usuário.

- Feitiços: 84 entradas, sendo 70 do jogo base e 14 de Shadow of the Erdtree.
- Encantamentos: 129 entradas, sendo 101 do jogo base e 28 da expansão.
- Total novo: 213 entradas.
- Progresso geral: 537 registros, somando 208 Chefes, 116 Cinzas da Guerra, 84 Feitiços e 129 Encantamentos.
- Localizações utilizáveis no MVP: 60.
- Localizações pendentes: 153, exibidas como `Localização pendente` ou `Location pending`.
- Nomes pt-BR: ainda ausentes; a interface usa fallback em inglês e aviso único nos detalhes.
- Lendárias: exatamente quatro Feitiços e três Encantamentos.
- Perdíveis confirmadas: nenhuma. Os oito candidatos documentais continuam desconhecidos e não entram no filtro.

## Catálogos de produção

Os catálogos são TypeScript estáticos, tipados e independentes dos JSONs de pesquisa. Eles contêm somente identidade, origem, textos localizados mínimos, localização ou fonte principal, aquisições resumidas, sinalizadores do MVP, aliases de busca e referências internas de rastreabilidade.

Não foram transferidos FP, espaços, requisitos, stamina, duração, preço, taxa de drop, dano numérico, condições, cura, regeneração, buffs, PvP, passos detalhados ou Locais de Graça. Escolas, famílias, tradições e catalisadores não fazem parte do modelo.

## Interface e navegação

Rotas públicas:

- `/sorceries`, `/sorceries/base-game`, `/sorceries/shadow-of-the-erdtree` e `/sorceries/[sorceryId]`;
- `/incantations`, `/incantations/base-game`, `/incantations/shadow-of-the-erdtree` e `/incantations/[incantationId]`.

As listas gerais mantêm jogo base antes da expansão, progresso único, busca bilíngue normalizada e filtros Lendárias e Perdíveis combinados por interseção. Os cards usam `sparkles-outline` para Feitiços, `sunny-outline` para Encantamentos e `✓` quando coletados.

As listas gerais também reutilizam `OriginFilterButtons` com `Base` e `DLC`. A ausência de seleção representa todos os itens; a seleção é exclusiva, reversível e combinada por interseção com busca e filtros. O progresso passa a usar 84/70/14 para Feitiços e 129/101/28 para Encantamentos. As rotas específicas continuam sem o controle.

Aquisições com spoiler ficam recolhidas inicialmente. A busca pode localizar o conteúdo protegido sem revelar o termo, usando uma indicação neutra.

A Home possui quatro cards, na ordem Chefes, Cinzas da Guerra, Feitiços e Encantamentos. O Drawer possui quatro grupos principais mutuamente exclusivos na mesma ordem.

## Progresso v3

O estado persistido passa a usar:

```ts
{
  schemaVersion: 3;
  defeatedBossIds: string[];
  collectedAshOfWarIds: string[];
  collectedSorceryIds: string[];
  collectedIncantationIds: string[];
}
```

A migração preserva integralmente Chefes e Cinzas da Guerra, inicia as duas novas categorias vazias, normaliza IDs sem remover IDs desconhecidos válidos e não usa `AsyncStorage.clear()`. Atualizações são otimistas, serializadas e possuem rollback isolado. O reset limpa as quatro categorias e preserva idioma, tema e outras preferências.

## Roteiro de revisão manual no Expo Go

Todos os itens abaixo foram executados com sucesso:

1. Abrir a Home em português e inglês e confirmar `0/537` e os quatro cards.
2. Abrir cada grupo do Drawer e confirmar exclusividade, ordem, itens ativos e oito rotas de lista.
3. Conferir totais `84`, `70`, `14`, `129`, `101` e `28`.
4. Testar ordenação, busca por nome/local/fonte, busca sem acentos e os filtros Lendárias e Perdíveis.
5. Abrir detalhes comuns e com spoiler; confirmar fallback único, conteúdo recolhido e retorno à lista.
6. Marcar e desmarcar uma entrada de cada categoria; confirmar Home, listas, persistência e independência.
7. Reiniciar o aplicativo e confirmar persistência.
8. Executar reset e confirmar as quatro categorias zeradas com idioma e tema preservados.
9. Repetir nos temas Claro, Escuro e Sistema, incluindo tela estreita e fonte ampliada.

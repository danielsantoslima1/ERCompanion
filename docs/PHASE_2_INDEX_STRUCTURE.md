# Estrutura inicial do Index — Phase 2

## Escopo aprovado

O Drawer exibe `Index` imediatamente antes de `Settings`, depois de todas as
categorias atuais. `Index` é somente um accordion e segue a exclusividade dos
demais grupos principais:

- `Index`
  - `Remembrance Bosses`
    - `Base Game`
    - `DLC`

Não existe opção intermediária `Lore`. A configuração é tipada e centralizada,
mas não antecipa outras categorias enciclopédicas.

Não existe uma subopção também chamada `Index`.

## Rotas e conteúdo

- `/remembrance-bosses`;
- `/remembrance-bosses/base-game`;
- `/remembrance-bosses/dlc`.

`Index` é somente o nome visual do grupo do Drawer e não possui rota própria.
As rotas canônicas começam diretamente em `/remembrance-bosses`, enquanto
`app/(drawer)/index.tsx` permanece exclusivamente como a Home na rota `/`.
Essa decisão preserva a Home atual e impede a colisão de padrão que seria criada
por `app/(drawer)/index/index.tsx`. O card de Chefes da Home continua abrindo
`/all-bosses`.

As duas rotas finais exibem um estado vazio deliberado. Não contêm chefes,
imagens, recompensas, lore, dados técnicos, busca, filtros ou conteúdo
simulado. As rotas intermediárias também permanecem navegáveis diretamente.

Todo texto novo do Index permanece em inglês mesmo quando `pt-BR` está ativo.
Essa regra não altera traduções nem categorias existentes. Grupos comunicam o
estado expandido e opções comunicam seleção, função e nome acessível.

Novas categorias só poderão ser acrescentadas após aprovação explícita. A
configuração e os componentes compartilhados permitem evolução sem reconstruir
o Drawer, mas não armazenam opções futuras inativas.

A revisão manual desta estrutura corrigida está novamente pendente.

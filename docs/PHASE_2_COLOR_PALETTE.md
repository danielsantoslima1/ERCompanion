# Paleta de cores da Phase 2

## Estado

A identidade cromática foi implementada para revisão manual no Expo Go. Esta
etapa altera somente cores e temas; tipografia, layouts, conteúdo, navegação,
catálogos, progresso, schema e persistência permanecem inalterados.

## Direção visual

O verde profundo é a cor estrutural predominante de headers, Drawer, ações
principais, seleção, progresso e foco. Marfim e pergaminho aliviam o tema claro;
carvão esverdeado e verdes elevados dão profundidade ao tema escuro.

O dourado é um acento controlado para identidade, detalhes especiais, foco e
seleções importantes. Ele não é usado como fundo estrutural amplo nem como cor
padrão de ações. O dourado luminoso `#F9C043` fica restrito a pequenos acentos
no tema escuro.

## Âncoras da paleta

### Tema claro

- fundo `#F3EFE3`;
- superfície `#FCF9F1`;
- superfície secundária `#E8E4D8`;
- verde estrutural `#173A2F`;
- verde estrutural forte `#0D2A22`;
- verde suave `#D9E3DC`;
- texto `#1C1915`;
- texto secundário `#5C554B`;
- texto sobre verde `#F8F3E6`;
- borda `#C9C0AE`;
- borda forte `#8D806B`;
- dourado `#A86C13`;
- dourado forte `#7D4D0B`;
- dourado suave `#ECD49A`;
- âmbar `#BD6707`;
- marrom profundo `#653815`;
- erro `#9E2F24`;
- sucesso `#276749`;
- aviso `#8A5A0A`.

### Tema escuro

- fundo `#07130F`;
- superfície `#0D1E18`;
- superfície secundária `#142A21`;
- superfície elevada `#1A3329`;
- verde estrutural `#1E4A3A`;
- verde estrutural forte `#102E24`;
- verde suave `#294F40`;
- texto `#F2ECDD`;
- texto secundário `#C8BDAA`;
- texto sobre verde `#FFF8E8`;
- borda `#355044`;
- borda forte `#61776D`;
- dourado `#E2B34A`;
- dourado forte `#F9C043`;
- dourado suave `#4B3B1C`;
- âmbar `#D98218`;
- marrom profundo `#653815`;
- erro `#FF8C7E`;
- sucesso `#75C79B`;
- aviso `#F0BE62`.

As âncoras aprovadas foram preservadas. Foram derivados apenas tokens
complementares para fundos semânticos, estados desabilitados, placeholder,
overlay, sombra e texto secundário da navegação. Esses valores existem para
garantir contraste e não ampliam a paleta visual principal.

## Tokens semânticos

Os temas claro e escuro possuem paridade tipada para:

`background`, `surface`, `surfaceSecondary`, `surfaceElevated`, `primary`,
`primaryStrong`, `primarySoft`, `text`, `textSecondary`, `textOnPrimary`,
`border`, `borderStrong`, `accent`, `accentStrong`, `accentSoft`, `warning`,
`warningBackground`, `danger`, `dangerBackground`, `success`,
`successBackground`, `disabled`, `disabledText`, `overlay`, `shadow`,
`inputBackground`, `inputBorder`, `placeholder`, `progressTrack`,
`progressFill`, `selectedBackground`, `selectedBorder`, `focusRing`,
`navigationBackground`, `navigationText` e `navigationTextSecondary`.

Aliases compatíveis existentes permanecem temporariamente no contrato para
permitir migração por papel sem alteração funcional. Novos componentes devem
consumir os tokens semânticos.

## Aplicação

- headers e Drawer usam verde estrutural forte com texto claro;
- itens ativos combinam fundo, borda e indicadores existentes;
- botões principais usam verde e ações destrutivas usam erro;
- cards concluídos combinam fundo suave, borda, ícone e texto de estado;
- filtros selecionados usam fundo e borda sem depender apenas da cor;
- progresso usa trilho discreto e preenchimento verde; no tema escuro, a
  variante circular de destaque combina trilho de ouro envelhecido com arco de
  progresso verde, preservando a aparência clara já aprovada;
- inputs usam tokens próprios para fundo, borda e placeholder;
- fallback e spoilers usam aviso; falhas usam erro;
- o tema Sistema continua resolvendo a preferência do sistema imediatamente.

## Contraste e exceções

Testes calculam contraste sem dependência adicional. Texto normal crítico deve
atingir `4,5:1`; limites interativos, seleção e foco devem atingir `3:1`.

As únicas cores fixas deliberadas são transparências semânticas de overlay e
sombra, além de `transparent` usado para preservar áreas sem preenchimento.
Cores pertencentes a imagens e ativos não são reinterpretadas pelo tema.

## Revisão

A revisão manual nos temas Claro, Escuro e Sistema ainda está pendente. Ela
deve conferir navegação, Drawer, cards, filtros, inputs, progresso, detalhes,
Settings, estados de erro e legibilidade em telas estreitas.

## Identidade cromática dos cards no tema escuro

Cards de Chefes, Cinzas da Guerra, Feitiços e Encantamentos compartilham
`cardAccent`, `cardAccentBorder`, `cardAccentText`, `cardAccentIcon` e
`cardAccentMuted`. No tema escuro, a superfície permanece verde-escura,
enquanto borda, título e ícone decorativo recebem ouro envelhecido de forma
controlada. Estados concluídos preservam fundo, borda, ícone e significado
verdes de sucesso; dourado não substitui sucesso, erro ou ação destrutiva.

No tema claro, os tokens reutilizam os valores anteriores para impedir mudança
visual perceptível. Testes protegem o contraste crítico do texto e da borda.

Todo card futuro de item, chefe, magia ou entidade deve usar verde como
estrutura no tema escuro e dourado somente em detalhes semânticos. Grandes
superfícies douradas são proibidas; estados não podem depender apenas de cor;
os tokens devem ser centralizados, tipados e compatíveis com Light, Dark e
System, preservando Cinzel Decorative e Spectral em suas funções aprovadas.

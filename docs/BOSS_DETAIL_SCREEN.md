# Boss Detail Screen

## Status

Implementação e revisão manual no Expo Go concluídas com sucesso. A tela usa exclusivamente os 208 encontros e as 26 regiões já aprovados.

## Rota

A rota dinâmica é `app/bosses/[bossId].tsx`. O parâmetro usa o ID permanente do encontro, é validado por seletor central e nunca depende do nome ou da posição no catálogo.

## Navegação

Cada cartão regional possui a ação localizada `Ver detalhes` / `View details`, separada do controle de progresso. A página regional pertence ao Drawer interno, enquanto a tela de detalhes é empilhada pela Stack raiz. Dessa forma, o botão padrão do cabeçalho, o botão físico do Android e o gesto de retorno removem o detalhe e revelam a mesma página regional, preservando seu estado local.

Durante a revisão manual, foi identificado que região e detalhe eram telas irmãs do Drawer. O Drawer trocava sua rota ativa sem criar uma entrada de pilha e o retorno caía na Home. A solução foi mover as telas principais para o grupo `(drawer)` e manter `bosses/[bossId]` na Stack raiz.

A ação adicional `Voltar para a região` / `Back to region` foi removida. Para acesso direto sem uma página regional anterior, a saída do detalhe usa como fallback a região obtida do encontro pelo catálogo. O fallback é aplicado uma única vez e não altera progresso.

Uma segunda revisão manual encontrou `Unmatched Route` ao seguir Drawer → Bosses → All regions → Drawer → Home. A causa era o destino `/(drawer)/index`, usado pelo componente customizado como se fosse uma URL pública. `(drawer)` é um grupo estrutural do Expo Router, e `index` é o nome registrado da tela interna; essa combinação não deve ser enviada ao roteador global como caminho público.

O Drawer agora navega exclusivamente pelos nomes registrados no próprio navegador: `index`, `bosses`, `settings` e `regions/[regionId]`. A Home abre diretamente por `index`, independentemente da rota atual, sem redirecionamento ou tela intermediária. Os 26 destinos regionais usam o mesmo nome dinâmico com o `regionId` do catálogo.

Na revisão manual final, o retorno padrão do cabeçalho, o botão físico do Android e a navegação pelo Drawer foram validados. A região e o estado da lista permanecem preservados ao fechar os detalhes. A sequência Bosses → All regions → Home abre a Home diretamente, sem `Unmatched Route`, inclusive depois de retornar de uma tela de detalhes.

## Dados exibidos

A tela apresenta nome do encontro, região, localização, disponibilidade quando existente e estado derrotado ou não derrotado. Todos os textos factuais vêm diretamente dos campos localizados do catálogo aprovado.

## Seções opcionais

Nomes nas barras, participantes principais, fases, summons e inimigos auxiliares aparecem somente quando possuem conteúdo relevante. Nomes idênticos ao título, às fases ou à lista de participantes não são repetidos sem necessidade.

Batalhas com fases continuam sendo uma única unidade de progresso. Composições variáveis apresentam a faixa ou quantidade registrada e os participantes possíveis. Summons e auxiliares permanecem separados dos participantes principais.

## Progresso

O controle reutiliza as ações otimistas do contexto global, a persistência existente e o rollback em falha. Existe somente um controle por encontro, inclusive para fases, ondas, summons e composições variáveis.

## Localização

Região, localização e disponibilidade usam o idioma ativo. Disponibilidade ausente não gera texto substituto nem seção vazia.

## Traduções

Os rótulos estruturais possuem paridade completa entre português do Brasil e inglês. Os dados do catálogo não foram retraduzidos.

## Acessibilidade

Controles possuem rótulos e estados acessíveis, alvos de toque adequados e indicação textual de progresso. A ordem de leitura segue título, dados básicos, progresso e detalhes opcionais. Nome e localização não usam truncamento destrutivo.

## Estados de erro

Um ID inexistente mostra mensagem localizada, não usa encontro de fallback, não altera progresso e permite retornar com segurança.

## Testes

Os testes cobrem navegação empilhada, retorno padrão e físico, fallback de acesso direto, ausência do botão adicional, prevenção de loops, progresso inalterado ao navegar, encontro válido e inválido, localização, disponibilidade, idiomas, tema, campos vazios e os casos Spiritcaller Snail, Promised Consort Radahn, Demi-Human Chiefs, Fia's Champions e Needle Knight Leda and Allies.

## Revisão manual no Expo Go

A revisão manual foi concluída com sucesso. Foram validados:

- abertura dos detalhes a partir de um cartão regional;
- nome, região, localização, disponibilidade, status e controle independente de progresso;
- retorno pelo cabeçalho e pelo botão físico do Android para a região de origem;
- ausência da ação duplicada `Voltar para a região` / `Back to region`;
- preservação da posição e do estado da lista regional;
- atualização do progresso na tela de detalhes e sincronização com região e Home;
- Spiritcaller Snail com Godskin Apostle e Godskin Noble somente como summons;
- Promised Consort Radahn como uma batalha com fases;
- Demi-Human Chiefs com dois participantes;
- Needle Knight Leda and Allies com composição variável;
- Fia's Champions como uma única unidade;
- encontros simples sem seções opcionais vazias;
- português do Brasil, inglês e temas Sistema, Claro e Escuro;
- destinos Home, Settings, All regions e as 26 regiões do Drawer;
- ausência de ocorrências conhecidas de `Unmatched Route`.

O progresso usado na revisão foi removido ao final, deixando o total em `0/208`. Catálogo, armazenamento e formato de progresso não foram alterados.

## Limitações atuais

- ausência de recompensas;
- ausência de estratégias;
- ausência de fraquezas e resistências;
- ausência de imagens protegidas;
- uso exclusivo do catálogo já aprovado.

## Próxima etapa

Planejar a pesquisa e a modelagem dos itens do jogo, reutilizando as 26 regiões já aprovadas.

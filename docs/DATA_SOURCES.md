# Data Sources

## Regras de uso

- Este documento mantém separadamente as fontes usadas para pesquisar regiões, encontros, localizações, disponibilidade e traduções.
- As referências devem ser associadas aos IDs permanentes das regiões e dos encontros.
- Uma mesma fonte pode ser usada para vários registros, mas cada região ou encontro deve indicar claramente quais fontes sustentam seus dados e a finalidade de cada consulta.
- Fontes comunitárias podem ser usadas para localizar e comparar informações factuais.
- Traduções em português somente podem ser consideradas oficiais quando confirmadas por uma fonte oficial, conforme a política de nomes em português.
- Quando houver divergência, todas as versões relevantes devem ser registradas. A decisão não pode ser silenciosa: seu motivo deve ser documentado e o registro deve ser encaminhado para revisão manual quando necessário.
- A concordância entre duas ou mais fontes deve ser apresentada como evidência, mas não aprova automaticamente um registro.
- Somente o usuário pode alterar uma região ou encontro para `approved`.
- A aprovação deve ocorrer em lotes pequenos e não se estende automaticamente a registros semelhantes.
- Correções posteriores em registros aprovados devem retornar os registros afetados para `needs-review`.
- Devem ser registrados somente os fatos necessários: nome, região, localização, disponibilidade, relação entre o encontro e a área e tradução oficial confirmada.
- Não devem ser copiadas descrições, estratégias, guias ou outras passagens extensas das fontes.
- URLs e informações de pesquisa não devem fazer parte dos objetos usados pelo aplicativo nem ser exibidas na interface.
- Este documento não deve ser importado pelo código de produção nem incluído no bundle do aplicativo.

## Estados de revisão

- `pending`: registro ainda não pesquisado suficientemente.
- `researched`: pesquisa concluída, aguardando revisão do usuário.
- `needs-review`: existe dúvida ou divergência; o estado deve ser mantido até a decisão do usuário.
- `approved`: registro aprovado explicitamente pelo usuário.

Registros em estado diferente de `approved` não estão prontos para publicação.

## Regiões

### Modelo de região

- ID permanente da região:
- Nome em inglês:
- Nome em português:
- Grupo de conteúdo:
- Ordem de exibição proposta:
- Fontes consultadas:
  - Referência:
  - Finalidade:
- Divergências encontradas:
- Decisão recomendada:
- Resultado da validação automática:
- Decisão do usuário:
- Data da decisão:
- Observações da decisão:
- Estado da revisão: `pending`

### Proposta do jogo base

#### `limgrave`

- Nome em inglês: Limgrave
- Nome em português: Limgrave
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 10
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between): confirmação da classificação como região.
  - [Bandai Namco — Early game tips](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-early-game-tips): confirmação oficial do uso do nome e do papel de área inicial.
- Divergências encontradas: nenhuma relevante.
- Decisão recomendada: incluir.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único na proposta; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente `limgrave`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: fontes e observações anteriores permanecem como histórico; o ID é estável e independente do idioma.
- Estado da revisão: `approved`

#### `weeping-peninsula`

- Nome em inglês: Weeping Peninsula
- Nome em português: Weeping Peninsula
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 20
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Weeping Peninsula](https://eldenring.wiki.gg/wiki/Weeping_Peninsula): classificação como sub-região de Limgrave e delimitação geográfica.
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between): posição na hierarquia regional.
- Divergências encontradas: fonte secundária classifica como sub-região; o projeto já definiu item independente.
- Decisão recomendada: incluir como região independente.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; decisão estrutural existente.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente `weeping-peninsula`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar a classificação divergente como sub-região de Limgrave; a taxonomia do aplicativo prioriza o acompanhamento independente.
- Estado da revisão: `approved`

#### `siofra-river`

- Nome em inglês: Siofra River
- Nome em português: Siofra River
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 30
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Siofra River](https://eldenring.wiki.gg/wiki/Siofra_River): confirmação como região subterrânea.
  - [Bandai Namco — Early game tips](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-early-game-tips): referência oficial ao mapa de Siofra.
- Divergências encontradas: Mohgwyn Palace é sub-região de Siofra em fontes secundárias, mas independente por decisão do projeto.
- Decisão recomendada: incluir.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; região subterrânea já definida.
- Decisão do usuário: aprovado explicitamente como região subterrânea independente, com ID permanente `siofra-river`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: fontes, relações com subáreas e divergências existentes permanecem como histórico.
- Estado da revisão: `approved`

#### `liurnia-of-the-lakes`

- Nome em inglês: Liurnia of the Lakes
- Nome em português: Liurnia of the Lakes
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 40
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between): confirmação como região principal.
  - [Eldenpedia — Locations](https://eldenring.wiki.gg/wiki/Locations): comparação da cobertura.
- Divergências encontradas: nenhuma relevante.
- Decisão recomendada: incluir.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente `liurnia-of-the-lakes`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: fontes e observações anteriores permanecem como histórico; o ID é estável e independente do idioma.
- Estado da revisão: `approved`

#### `ainsel-river`

- Nome em inglês: Ainsel River
- Nome em português: Ainsel River
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 50
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Ainsel River](https://eldenring.wiki.gg/wiki/Ainsel_River): confirmação como região subterrânea e hierarquia das subáreas.
  - [Eldenpedia — Locations](https://eldenring.wiki.gg/wiki/Locations): comparação da cobertura subterrânea.
- Divergências encontradas: Lake of Rot aparece como sub-região, mas é independente por decisão do projeto.
- Decisão recomendada: incluir.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; região subterrânea já definida.
- Decisão do usuário: aprovado explicitamente como região subterrânea independente, com ID permanente `ainsel-river`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar a relação divergente com Lake of Rot; ambas permanecerão regiões independentes para acompanhamento de progresso.
- Estado da revisão: `approved`

#### `lake-of-rot`

- Nome em inglês: Lake of Rot
- Nome em português: Lake of Rot
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 60
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Lake of Rot](https://eldenring.wiki.gg/wiki/Lake_of_Rot): classificação como sub-região de Ainsel e confirmação de mapa próprio.
  - [Eldenpedia — Ainsel River](https://eldenring.wiki.gg/wiki/Ainsel_River): confirmação da relação hierárquica.
- Divergências encontradas: sub-região nas fontes; região independente por decisão do projeto.
- Decisão recomendada: incluir como região independente.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; decisão estrutural existente.
- Decisão do usuário: aprovado explicitamente como região subterrânea independente, com ID permanente `lake-of-rot`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar a classificação divergente como sub-região de Ainsel River; a taxonomia do aplicativo prioriza o acompanhamento independente.
- Estado da revisão: `approved`

#### `caelid`

- Nome em inglês: Caelid
- Nome em português: Caelid
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 70
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Caelid](https://eldenring.wiki.gg/wiki/Caelid): confirmação como região e identificação de sub-regiões.
  - [Bandai Namco — Patch notes 1.08](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-patch-notes-version-108): uso oficial do nome.
- Divergências encontradas: nível independente de Greyoll's Dragonbarrow ainda precisa de decisão.
- Decisão recomendada: incluir.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente `caelid`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar a relação histórica com Greyoll's Dragonbarrow; ambas terão progresso regional separado.
- Estado da revisão: `approved`

#### `greyolls-dragonbarrow`

- Nome em inglês: Greyoll's Dragonbarrow
- Nome em português: Greyoll's Dragonbarrow
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 80
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Greyoll's Dragonbarrow](https://eldenring.wiki.gg/wiki/Dragonbarrow): classificação como sub-região e confirmação de mapa nominal.
  - [Eldenpedia — Caelid](https://eldenring.wiki.gg/wiki/Caelid): relação hierárquica com Caelid.
- Divergências encontradas: sub-região versus item independente; uso de “Dragonbarrow” versus nome completo.
- Decisão recomendada: incluir como região independente com o nome completo.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente de Caelid, com ID permanente `greyolls-dragonbarrow`, `regionId` próprio e progresso regional separado.
- Data da decisão: 2026-07-27
- Observações da decisão: a classificação como sub-região de Caelid e a variação “Dragonbarrow” permanecem como evidência histórica. A taxonomia do aplicativo priorizará a região independente para navegação e acompanhamento de progresso.
- Estado da revisão: `approved`

#### `deeproot-depths`

- Nome em inglês: Deeproot Depths
- Nome em português: Deeproot Depths
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 90
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Deeproot Depths](https://eldenring.wiki.gg/wiki/Deeproot_Depths): confirmação como região subterrânea.
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between): comparação da taxonomia geral.
- Divergências encontradas: nenhuma relevante.
- Decisão recomendada: incluir.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; região subterrânea já definida.
- Decisão do usuário: aprovado explicitamente como região subterrânea independente, com ID permanente `deeproot-depths`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: fontes e observações anteriores permanecem como histórico; o ID é estável e independente do idioma.
- Estado da revisão: `approved`

#### `altus-plateau`

- Nome em inglês: Altus Plateau
- Nome em português: Altus Plateau
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 100
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between): confirmação como região principal.
  - [Bandai Namco — Colosseum update](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-free-colosseum-update-available-now): distinção oficial entre Leyndell e outras áreas, usada somente como apoio factual.
- Divergências encontradas: algumas taxonomias destacam Leyndell e Mt. Gelmir; a proposta exclui Leyndell do Drawer e avalia Mt. Gelmir separadamente.
- Decisão recomendada: incluir.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente `altus-plateau`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar as relações históricas com Leyndell e Mt. Gelmir; áreas internas permanecem em `location` e Mt. Gelmir possui progresso separado.
- Estado da revisão: `approved`

#### `mt-gelmir`

- Nome em inglês: Mt. Gelmir
- Nome em português: Mt. Gelmir
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 110
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Mt. Gelmir](https://eldenring.wiki.gg/wiki/Mt._Gelmir): classificação como sub-região de Altus e confirmação de mapa nominal.
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between): distinção geográfica.
- Divergências encontradas: sub-região formal versus região independente no Drawer.
- Decisão recomendada: incluir como região independente.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente de Altus Plateau, com ID permanente `mt-gelmir`, `regionId` próprio e progresso regional separado.
- Data da decisão: 2026-07-27
- Observações da decisão: a classificação como sub-região de Altus permanece como evidência histórica. A taxonomia do aplicativo priorizará a região independente para acompanhamento de progresso; Volcano Manor e demais áreas internas permanecerão em `location`.
- Estado da revisão: `approved`

#### `mountaintops-of-the-giants`

- Nome em inglês: Mountaintops of the Giants
- Nome em português: Mountaintops of the Giants
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 120
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Mountaintops of the Giants](https://eldenring.wiki.gg/wiki/Mountaintops_of_the_Giants): confirmação como região e relação com sub-regiões.
  - [Eldenpedia — Lands Between](https://eldenring.wiki.gg/wiki/Lands_Between): confirmação na taxonomia geral.
- Divergências encontradas: Consecrated Snowfield pode ser sub-região ou item independente.
- Decisão recomendada: incluir.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente `mountaintops-of-the-giants`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar a relação histórica com Consecrated Snowfield; ambas terão progresso regional separado.
- Estado da revisão: `approved`

#### `consecrated-snowfield`

- Nome em inglês: Consecrated Snowfield
- Nome em português: Consecrated Snowfield
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 130
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Consecrated Snowfield](https://eldenring.wiki.gg/wiki/Consecrated_Snowfield): classificação como sub-região e confirmação de mapa nominal.
  - [Eldenpedia — Mountaintops of the Giants](https://eldenring.wiki.gg/wiki/Mountaintops_of_the_Giants): relação hierárquica.
- Divergências encontradas: sub-região formal versus região independente no Drawer.
- Decisão recomendada: incluir como região independente.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente de Mountaintops of the Giants, com ID permanente `consecrated-snowfield`, `regionId` próprio e progresso regional separado.
- Data da decisão: 2026-07-27
- Observações da decisão: a classificação como sub-região das Mountaintops permanece como evidência histórica. A taxonomia do aplicativo priorizará a região independente para acompanhamento de progresso; Ordina e demais áreas internas permanecerão em `location`.
- Estado da revisão: `approved`

#### `mohgwyn-palace`

- Nome em inglês: Mohgwyn Palace
- Nome em português: Mohgwyn Palace
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 140
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Mohgwyn Palace](https://eldenring.wiki.gg/wiki/Mohgwyn_Palace): classificação como sub-região subterrânea com mapa próprio.
  - [Eldenpedia — Siofra River](https://eldenring.wiki.gg/wiki/Siofra_River): relação hierárquica.
- Divergências encontradas: sub-região nas fontes; região independente por decisão do projeto.
- Decisão recomendada: incluir como região independente.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; decisão estrutural existente.
- Decisão do usuário: aprovado explicitamente como região subterrânea independente, com ID permanente `mohgwyn-palace`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar a classificação divergente como sub-região de Siofra River; a taxonomia do aplicativo prioriza o acompanhamento independente.
- Estado da revisão: `approved`

#### `miquellas-haligtree`

- Nome em inglês: Miquella's Haligtree
- Nome em português: Miquella's Haligtree
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 150
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Miquella's Haligtree](https://eldenring.wiki.gg/wiki/Miquella%27s_Haligtree): classificação simultânea como região e legacy dungeon.
  - [Eldenpedia — Mountaintops of the Giants](https://eldenring.wiki.gg/wiki/Mountaintops_of_the_Giants): relação geográfica e de acesso.
- Divergências encontradas: região isolada versus legacy dungeon excluível pela regra geral de localizações.
- Decisão recomendada: incluir como região independente.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente `miquellas-haligtree`, `regionId` próprio e progresso separado de Consecrated Snowfield.
- Data da decisão: 2026-07-27
- Observações da decisão: a classificação simultânea como legacy dungeon permanece como evidência histórica. A taxonomia do aplicativo priorizará a região independente para acompanhamento de progresso; Haligtree Town, Elphael e demais divisões internas permanecerão em `location`.
- Estado da revisão: `approved`

#### `crumbling-farum-azula`

- Nome em inglês: Crumbling Farum Azula
- Nome em português: Crumbling Farum Azula
- Grupo de conteúdo: `base-game`
- Ordem de exibição proposta: 160
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência taxonômica inicial; indisponível para recuperação automatizada em 2026-07-27.
  - [Eldenpedia — Crumbling Farum Azula](https://eldenring.wiki.gg/wiki/Crumbling_Farum_Azula): classificação como região e legacy dungeon isolada.
  - [Eldenpedia — Locations](https://eldenring.wiki.gg/wiki/Locations): presença na lista geral de áreas do jogo base.
- Divergências encontradas: dupla classificação como região e legacy dungeon, sem conflito relevante sobre sua separação geográfica.
- Decisão recomendada: incluir como região independente.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; conteúdo do jogo base.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente `crumbling-farum-azula`, `regionId`, `displayOrder` e progresso próprios.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar a classificação simultânea como região e legacy dungeon; a área permanecerá região independente no aplicativo.
- Estado da revisão: `approved`

### Taxonomia aprovada de Shadow of the Erdtree

#### `gravesite-plain`

- Nome em inglês: Gravesite Plain
- Nome em português: Gravesite Plain
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 1
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível em 2026-07-27.
  - [Eldenpedia — Gravesite Plain](https://eldenring.wiki.gg/wiki/Gravesite_Plain): classificação regional, relações e sub-regiões.
  - [Eldenpedia — Map: Gravesite Plain](https://eldenring.wiki.gg/wiki/Map_Gravesite_Plain): registro do fragmento de mapa e sua cobertura.
  - [Bandai Namco — How to Strengthen Your Character in Shadow of the Erdtree](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-how-strengthen-your-character-shadow-of-the-erdtree): confirmação oficial do nome inglês e do papel de área inicial.
- Divergências encontradas: a hierarquia secundária inclui áreas meridionais como sub-regiões de Gravesite Plain; a taxonomia aprovada mantém Cerulean Coast, Charo's Hidden Grave, Jagged Peak e Finger Ruins of Rhia independentes.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único dentro da expansão; grupo da expansão indicado; nome português repete o inglês por falta de tradução oficial confirmada.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente reutilizável por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: a região permanece válida mesmo sem chefes e poderá apresentar progresso de chefes `0/0`; o progresso futuro de itens será separado.
- Estado da revisão: `approved`

#### Histórico descartado — `southern-shore`

- Nome em inglês: Southern Shore
- Nome em português: Southern Shore
- Grupo de conteúdo pesquisado: `shadow-of-the-erdtree`
- Ordem proposta anteriormente: 20
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível em 2026-07-27.
  - [Eldenpedia — Map: Southern Shore](https://eldenring.wiki.gg/wiki/Map_Southern_Shore): registro do nome e da cobertura do fragmento.
  - [Eldenpedia — Gravesite Plain](https://eldenring.wiki.gg/wiki/Gravesite_Plain): hierarquia alternativa para Cerulean Coast, Charo's Hidden Grave e Jagged Peak.
  - [Eldenpedia — Key Items](https://eldenring.wiki.gg/wiki/Key_Items): confirmação cruzada da lista dos cinco fragmentos do Realm of Shadow.
- Divergências encontradas: é uma cobertura cartográfica oficial, mas não uma das quatro regiões técnicas da hierarquia secundária; suas partes possuem nomes geográficos próprios.
- Decisão recomendada anterior: incluir como região agregadora.
- Resultado histórico: proposta superada antes da publicação.
- Decisão do usuário: descartado como região do Drawer e como `regionId`; preservar somente como classificação ampla, agrupamento cartográfico ou evidência histórica.
- Data da decisão: 2026-07-27
- Observações da decisão: Cerulean Coast, Charo's Hidden Grave, Jagged Peak e Finger Ruins of Rhia foram aprovadas separadamente. O ID nunca foi incorporado aos dados de produção, não é ID publicado e não exige migração.
- Estado do registro histórico: `discarded`

#### `scadu-altus`

- Nome em inglês: Scadu Altus
- Nome em português: Scadu Altus
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 2
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível em 2026-07-27.
  - [Eldenpedia — Scadu Altus](https://eldenring.wiki.gg/wiki/Scadu_Altus): classificação como região e relações geográficas.
  - [Eldenpedia — Map: Scadu Altus](https://eldenring.wiki.gg/wiki/Map_Scadu_Altus): fragmento e cobertura cartográfica.
  - [Eldenpedia — Realm of Shadow](https://eldenring.wiki.gg/wiki/Realm_of_Shadow): comparação da hierarquia regional completa.
- Divergências encontradas: a fonte secundária separa Shadow Keep como região técnica e subordina Abyssal Woods a Scadu Altus; a regra do projeto mantém a fortaleza em `location` e avalia Abyssal Woods separadamente.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; grupo da expansão indicado; nome português repete o inglês.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente reutilizável por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: a região permanece válida mesmo sem chefes; Abyssal Woods e Scaduview foram aprovadas separadamente.
- Estado da revisão: `approved`

#### Histórico substituído — `rauh-ruins`

- Nome em inglês: Rauh Ruins
- Nome em português: Rauh Ruins
- Grupo de conteúdo pesquisado: `shadow-of-the-erdtree`
- Ordem proposta anteriormente: 40
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível em 2026-07-27.
  - [Eldenpedia — Map: Rauh Ruins](https://eldenring.wiki.gg/wiki/Map_Rauh_Ruins): texto do fragmento e confirmação de que ele revela Rauh Base e Ancient Ruins of Rauh.
  - [Eldenpedia — Ancient Ruins of Rauh](https://eldenring.wiki.gg/wiki/Rauh): nome e classificação da área superior.
  - [Eldenpedia — Rauh Base](https://eldenring.wiki.gg/wiki/Rauh_Base): nome, posição e classificação da área inferior.
- Divergências encontradas: o agrupador do fragmento não coincide exatamente com os nomes das duas áreas geográficas; a hierarquia secundária coloca ambas sob Land of the Tower.
- Decisão recomendada anterior: incluir como região agregadora.
- Resultado histórico: proposta superada antes da publicação.
- Decisão do usuário: substituir o agrupador por duas regiões independentes, `rauh-base` e `ancient-ruins-of-rauh`.
- Data da decisão: 2026-07-27
- Observações da decisão: `rauh-ruins` não é ID permanente nem publicado. Nunca foi incorporado aos dados de produção e não exige migração.
- Estado do registro histórico: `replaced`

#### `abyssal-woods`

- Nome em inglês: Abyssal Woods
- Nome em português: Abyssal Woods
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 8
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível em 2026-07-27.
  - [Eldenpedia — Abyssal Woods](https://eldenring.wiki.gg/wiki/Abyssal_Woods): nome geográfico, classificação e relação com Scadu Altus.
  - [Eldenpedia — Map: Abyss](https://eldenring.wiki.gg/wiki/Map_Abyss): nome do fragmento e cobertura cartográfica.
  - [Eldenpedia — Key Items](https://eldenring.wiki.gg/wiki/Key_Items): confirmação cruzada da lista de fragmentos.
- Divergências encontradas: a área é uma sub-região de Scadu Altus na hierarquia secundária, e o fragmento usa `Abyss` em vez de `Abyssal Woods`.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; grupo da expansão indicado; nome português repete o inglês.
- Decisão do usuário: aprovado explicitamente como região independente com o nome geográfico `Abyssal Woods` e ID permanente reutilizável por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: preservar a divergência entre `Map: Abyss` e Abyssal Woods; a região permanece válida mesmo quando alguma categoria estiver vazia.
- Estado da revisão: `approved`

#### `rauh-base`

- Nome em inglês: Rauh Base
- Nome em português: Rauh Base
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 3
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível em 2026-07-27.
  - [Eldenpedia — Rauh Base](https://eldenring.wiki.gg/wiki/Rauh_Base): nome, posição inferior e classificação como sub-região.
  - [Eldenpedia — Map: Rauh Ruins](https://eldenring.wiki.gg/wiki/Map_Rauh_Ruins): cobertura cartográfica compartilhada com Ancient Ruins of Rauh.
- Divergências encontradas: aparece como sub-região de Land of the Tower e compartilha um fragmento com a área superior.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; grupo da expansão indicado; nome português repete o inglês.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente reutilizável por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: substitui parte do agrupador provisório `rauh-ruins`; continua no Drawer mesmo se o progresso de chefes for `0/0`.
- Estado da revisão: `approved`

#### `ancient-ruins-of-rauh`

- Nome em inglês: Ancient Ruins of Rauh
- Nome em português: Ancient Ruins of Rauh
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 4
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível em 2026-07-27.
  - [Eldenpedia — Ancient Ruins of Rauh](https://eldenring.wiki.gg/wiki/Rauh): nome, posição superior e classificação como sub-região.
  - [Eldenpedia — Map: Rauh Ruins](https://eldenring.wiki.gg/wiki/Map_Rauh_Ruins): cobertura cartográfica compartilhada com Rauh Base.
- Divergências encontradas: aparece como sub-região de Land of the Tower; o nome contém “Ruins”, mas a área foi explicitamente aprovada como região.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; grupo da expansão indicado; nome português repete o inglês.
- Decisão do usuário: aprovado explicitamente como região independente, com ID permanente reutilizável por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: substitui parte do agrupador provisório `rauh-ruins`; o nome da área não determina sua exclusão.
- Estado da revisão: `approved`

#### `cerulean-coast`

- Nome em inglês: Cerulean Coast
- Nome em português: Cerulean Coast
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 5
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível.
  - [Eldenpedia — Gravesite Plain](https://eldenring.wiki.gg/wiki/Gravesite_Plain): classificação como sub-região.
  - [Eldenpedia — Map: Southern Shore](https://eldenring.wiki.gg/wiki/Map_Southern_Shore): cobertura cartográfica ampla.
- Divergências encontradas: subordinada a Gravesite Plain ou Southern Shore em taxonomias externas.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; grupo da expansão indicado.
- Decisão do usuário: aprovado explicitamente como região independente e entidade compartilhada por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: a ausência de chefes não altera sua validade; nome português repete o inglês.
- Estado da revisão: `approved`

#### `charos-hidden-grave`

- Nome em inglês: Charo's Hidden Grave
- Nome em português: Charo's Hidden Grave
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 6
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível.
  - [Eldenpedia — Gravesite Plain](https://eldenring.wiki.gg/wiki/Gravesite_Plain): classificação como sub-região.
  - [Eldenpedia — Map: Southern Shore](https://eldenring.wiki.gg/wiki/Map_Southern_Shore): cobertura cartográfica ampla.
- Divergências encontradas: subordinada a Gravesite Plain ou Southern Shore em taxonomias externas.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido sem apóstrofo; `displayOrder` inteiro e único; grupo da expansão indicado.
- Decisão do usuário: aprovado explicitamente como região independente e entidade compartilhada por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: nome português repete o inglês; o ID é permanente e independente do idioma.
- Estado da revisão: `approved`

#### `jagged-peak`

- Nome em inglês: Jagged Peak
- Nome em português: Jagged Peak
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 7
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível.
  - [Eldenpedia — Gravesite Plain](https://eldenring.wiki.gg/wiki/Gravesite_Plain): classificação como sub-região.
  - [Eldenpedia — Map: Southern Shore](https://eldenring.wiki.gg/wiki/Map_Southern_Shore): cobertura cartográfica ampla.
- Divergências encontradas: subordinada a Gravesite Plain ou Southern Shore em taxonomias externas.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; grupo da expansão indicado.
- Decisão do usuário: aprovado explicitamente como região independente e entidade compartilhada por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: Foot of the Jagged Peak e dungeons internas permanecem em `location`.
- Estado da revisão: `approved`

#### `finger-ruins-of-rhia`

- Nome em inglês: Finger Ruins of Rhia
- Nome em português: Finger Ruins of Rhia
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 9
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível.
  - [Eldenpedia — Gravesite Plain](https://eldenring.wiki.gg/wiki/Gravesite_Plain): registro como marco/subárea.
  - [Eldenpedia — Map: Southern Shore](https://eldenring.wiki.gg/wiki/Map_Southern_Shore): cobertura cartográfica ampla.
- Divergências encontradas: fontes podem tratá-la como landmark ou ruínas internas, mas a decisão do aplicativo considera sua utilidade geográfica para categorias futuras.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; grupo da expansão indicado.
- Decisão do usuário: aprovado explicitamente como região independente e entidade compartilhada por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: a palavra “Ruins” não determina exclusão; poderá permanecer com progresso de chefes `0/0`.
- Estado da revisão: `approved`

#### `scaduview`

- Nome em inglês: Scaduview
- Nome em português: Scaduview
- Grupo de conteúdo: `shadow-of-the-erdtree`
- Ordem de exibição aprovada: 10
- Fontes consultadas:
  - [Fextralife — Locations](https://eldenring.wiki.fextralife.com/Locations): referência inicial; acesso automatizado indisponível.
  - [Eldenpedia — Realm of Shadow](https://eldenring.wiki.gg/wiki/Realm_of_Shadow): classificação hierárquica.
  - [Eldenpedia — Map: Scadu Altus](https://eldenring.wiki.gg/wiki/Map_Scadu_Altus): cobertura cartográfica e marcos.
- Divergências encontradas: pode ser subordinada a Shadow Keep ou Scadu Altus em outras taxonomias.
- Decisão recomendada: superada pela decisão explícita do usuário.
- Resultado da validação automática: ID válido; `displayOrder` inteiro e único; grupo da expansão indicado.
- Decisão do usuário: aprovado explicitamente como região independente e entidade compartilhada por chefes, itens e outros conteúdos.
- Data da decisão: 2026-07-27
- Observações da decisão: Hinterland, Shaman Village e Finger Ruins of Dheo permanecem em `location`; a região continua válida sem chefes.
- Estado da revisão: `approved`

## Encontros

### Modelo de encontro

- ID permanente do encontro:
- Nome em inglês:
- Nome em português:
- Região:
- `regionId`:
- `location` em inglês:
- `location` em português:
- `availability`, quando aplicável:
- Quantidade de inimigos ou participantes:
- Nomes das fases, quando relevantes:
- Evidência da barra de chefe: `not-confirmed`
- Fontes usadas para confirmar a barra:
- Fontes de nome e localização:
- Fontes consultadas:
  - Referência:
  - Finalidade:
- Confirmação do nome:
- Confirmação da localização:
- Confirmação da disponibilidade:
- Confirmação da tradução em português:
- Divergências encontradas:
- Decisão recomendada:
- Resultado da validação automática:
- Decisão do usuário:
- Data da decisão:
- Observações da decisão:
- Estado da revisão: `pending`

Estados válidos para a evidência da barra:

- `confirmed`: há evidência confiável de que o encontro exibe barra de chefe;
- `not-confirmed`: a fonte o chama de chefe, mas a barra ainda não foi verificada;
- `rejected`: foi verificado que não exibe barra e não deve entrar;
- `needs-review`: existem evidências conflitantes ou situação especial.

Nenhum encontro poderá receber estado geral `approved` enquanto a evidência da barra não estiver como `confirmed`.

## Divergências pendentes

### Modelo de divergência

- ID permanente da região ou do encontro:
- Campo afetado:
- Versões encontradas:
- Fontes relacionadas:
- Motivo para revisão:
- Decisão recomendada:
- Decisão pendente:
- Estado da revisão: `needs-review`

## Histórico de decisões

### Modelo de decisão

- Data da decisão:
- Registro aprovado:
- Decisão adotada:
- Observações relevantes:
- Estado resultante: `approved`

### Decisões de 2026-07-27 — taxonomia do jogo base

#### Greyoll's Dragonbarrow

- Data da decisão: 2026-07-27
- Registro aprovado: `greyolls-dragonbarrow`
- Decisão adotada: região independente de Caelid, com `regionId` e progresso próprios.
- Observações relevantes: preservar a classificação divergente como sub-região e usar o nome completo Greyoll's Dragonbarrow.
- Estado resultante: `approved`

#### Mt. Gelmir

- Data da decisão: 2026-07-27
- Registro aprovado: `mt-gelmir`
- Decisão adotada: região independente de Altus Plateau, com `regionId` e progresso próprios.
- Observações relevantes: preservar a classificação divergente como sub-região; Volcano Manor e outras áreas internas permanecem em `location`.
- Estado resultante: `approved`

#### Consecrated Snowfield

- Data da decisão: 2026-07-27
- Registro aprovado: `consecrated-snowfield`
- Decisão adotada: região independente de Mountaintops of the Giants, com `regionId` e progresso próprios.
- Observações relevantes: preservar a classificação divergente como sub-região; Ordina e outras áreas internas permanecem em `location`.
- Estado resultante: `approved`

#### Miquella's Haligtree

- Data da decisão: 2026-07-27
- Registro aprovado: `miquellas-haligtree`
- Decisão adotada: região independente, com `regionId` próprio e progresso separado de Consecrated Snowfield.
- Observações relevantes: preservar a classificação simultânea como legacy dungeon; Haligtree Town, Elphael e outras divisões internas permanecem em `location`.
- Estado resultante: `approved`

### Aprovação das 12 regiões restantes — 2026-07-27

O usuário aprovou explicitamente os seguintes registros:

- `limgrave`;
- `weeping-peninsula`;
- `siofra-river`;
- `liurnia-of-the-lakes`;
- `ainsel-river`;
- `lake-of-rot`;
- `caelid`;
- `deeproot-depths`;
- `altus-plateau`;
- `mountaintops-of-the-giants`;
- `mohgwyn-palace`;
- `crumbling-farum-azula`.

- Data da decisão: 2026-07-27
- Decisão adotada: confirmar as 12 áreas como regiões independentes do jogo base, com IDs permanentes, `regionId`, `displayOrder` e progresso próprios.
- Observações relevantes: os estados foram alterados individualmente para `approved`; fontes, observações e divergências anteriores foram preservadas. Com as quatro aprovações estruturais anteriores, todas as 16 regiões propostas do jogo base estão aprovadas.
- Estado resultante: `approved`

### Aprovação das dez regiões de Shadow of the Erdtree — 2026-07-27

O usuário aprovou explicitamente os seguintes registros, na ordem de `displayOrder`:

1. `gravesite-plain`;
2. `scadu-altus`;
3. `rauh-base`;
4. `ancient-ruins-of-rauh`;
5. `cerulean-coast`;
6. `charos-hidden-grave`;
7. `jagged-peak`;
8. `abyssal-woods`;
9. `finger-ruins-of-rhia`;
10. `scaduview`.

- Data da decisão: 2026-07-27
- Decisão adotada: confirmar as dez áreas como regiões independentes da expansão, com IDs permanentes, `regionId`, `displayOrder` de 1 a 10 e progresso próprios.
- Regra estrutural: regiões são entidades compartilhadas por categorias de conteúdo. Chefes serão implementados primeiro; itens serão adicionados depois e reutilizarão os mesmos `regionId`, com progresso conceitualmente separado.
- Regiões vazias: uma região sem encontros permanece válida no Drawer e poderá apresentar progresso de chefes `0/0`.
- Histórico preservado: classificações externas como região, sub-região, landmark, cobertura cartográfica ou ruínas não alteram a taxonomia aprovada.
- IDs descartados: `southern-shore` foi rejeitado como região e `rauh-ruins` foi substituído por `rauh-base` e `ancient-ruins-of-rauh`. Nenhum dos dois foi publicado ou incorporado aos dados de produção; não há migração a criar.
- Estado resultante: todas as dez regiões estão em `approved`; nenhuma permanece em `pending`, `researched` ou `needs-review`.

## Fontes gerais

### Modelo de fonte geral

- Referência:
- Finalidade:
- Escopo da taxonomia:
- Registros relacionados:
- Observações:
- Estado da revisão: `pending`

### Fontes consultadas para a proposta do jogo base

#### Fextralife — Locations

- Referência: https://eldenring.wiki.fextralife.com/Locations
- Finalidade: referência inicial solicitada para taxonomia e organização regional.
- Escopo da taxonomia: jogo base e expansão; somente o jogo base foi considerado.
- Registros relacionados: todas as regiões da proposta do jogo base.
- Observações: a página não respondeu ao acesso automatizado em 2026-07-27; deverá ser reconferida manualmente antes da aprovação.
- Estado da revisão: `needs-review`

#### Eldenpedia — Lands Between

- Referência: https://eldenring.wiki.gg/wiki/Lands_Between
- Finalidade: comparar regiões principais, sub-regiões e grandes dungeons.
- Escopo da taxonomia: regiões do jogo base.
- Registros relacionados: regiões de superfície e relações hierárquicas.
- Observações: fonte comunitária secundária; não confirma traduções oficiais em português.
- Estado da revisão: `researched`

#### Eldenpedia — Locations

- Referência: https://eldenring.wiki.gg/wiki/Locations
- Finalidade: comparar cobertura de regiões, áreas isoladas e grandes dungeons.
- Escopo da taxonomia: jogo base e expansão; somente o jogo base foi considerado.
- Registros relacionados: todas as regiões propostas, especialmente áreas isoladas e subterrâneas.
- Observações: fonte comunitária secundária; sua classificação foi confrontada com páginas específicas.
- Estado da revisão: `researched`

#### Elden Ring Wiki — Regions

- Referência: https://eldenring.fandom.com/wiki/Regions
- Finalidade: comparar a definição estrita de regiões exibidas no mapa com a taxonomia de navegação proposta.
- Escopo da taxonomia: regiões formais e sub-regiões.
- Registros relacionados: regiões principais, subterrâneas e casos promovidos de sub-região.
- Observações: a definição estrita é mais curta que a lista necessária para o Drawer; fonte comunitária.
- Estado da revisão: `researched`

#### Bandai Namco — Elden Ring official website

- Referência: https://en.bandainamcoent.eu/elden-ring/elden-ring
- Finalidade: confirmar oficialmente a distinção geral entre campos abertos, regiões exploráveis e dungeons.
- Escopo da taxonomia: estrutura geral do mundo do jogo base.
- Registros relacionados: todas as regiões propostas.
- Observações: material oficial amplo; não fornece lista taxonômica completa nem nomes em português do Brasil.
- Estado da revisão: `researched`

#### Bandai Namco — Enter the Lands Between 101

- Referência: https://en.bandainamcoent.eu/elden-ring/news/elden-ring-enter-the-lands-between-101-trailer
- Finalidade: confirmar oficialmente a distinção entre espaços abertos e legacy dungeons.
- Escopo da taxonomia: estrutura do mundo do jogo base.
- Registros relacionados: áreas candidatas que também são legacy dungeons.
- Observações: material oficial conceitual; não resolve sozinho quais áreas devem aparecer no Drawer.
- Estado da revisão: `researched`

### Fontes consultadas para a proposta de Shadow of the Erdtree

#### Fextralife — Locations

- Referência: https://eldenring.wiki.fextralife.com/Locations
- Finalidade: referência inicial solicitada para localizar a organização das áreas da expansão.
- Escopo da taxonomia: jogo base e expansão; nesta etapa, somente Shadow of the Erdtree.
- Registros relacionados: todas as cinco regiões propostas e as áreas excluídas do Drawer.
- Observações: retornou HTTP 502 no acesso automatizado em 2026-07-27. A organização precisa ser conferida manualmente; nenhum fato exclusivo dessa página foi adotado.
- Estado da revisão: `needs-review`

#### Eldenpedia — Realm of Shadow e páginas regionais

- Referências:
  - https://eldenring.wiki.gg/wiki/Realm_of_Shadow
  - https://eldenring.wiki.gg/wiki/Gravesite_Plain
  - https://eldenring.wiki.gg/wiki/Scadu_Altus
  - https://eldenring.wiki.gg/wiki/Abyssal_Woods
  - https://eldenring.wiki.gg/wiki/Rauh
  - https://eldenring.wiki.gg/wiki/Rauh_Base
- Finalidade: comparar regiões técnicas, sub-regiões, relações geográficas e áreas internas.
- Escopo da taxonomia: Realm of Shadow.
- Registros relacionados: todas as regiões propostas, especialmente as divergências Southern Shore, Rauh Ruins e Abyssal Woods.
- Observações: fonte comunitária secundária. As páginas abriram nos resultados indexados, mas retornaram HTTP 403 ao acesso direto automatizado; as informações essenciais foram obtidas dos resultados indexados e devem ser conferidas manualmente antes da aprovação.
- Estado da revisão: `needs-review`

#### Eldenpedia — fragmentos de mapa do Realm of Shadow

- Referências:
  - https://eldenring.wiki.gg/wiki/Map_Gravesite_Plain
  - https://eldenring.wiki.gg/wiki/Map_Scadu_Altus
  - https://eldenring.wiki.gg/wiki/Map_Southern_Shore
  - https://eldenring.wiki.gg/wiki/Map_Rauh_Ruins
  - https://eldenring.wiki.gg/wiki/Map_Abyss
  - https://eldenring.wiki.gg/wiki/Key_Items
- Finalidade: documentar os cinco nomes de fragmentos e as coberturas reveladas no mapa do jogo.
- Escopo da taxonomia: grandes coberturas cartográficas da expansão.
- Registros relacionados: todas as cinco regiões propostas.
- Observações: transcrição comunitária de nomes e descrições do jogo; não é material oficial hospedado pela Bandai Namco ou FromSoftware. O fragmento de Rauh explicita a cobertura de Rauh Base e Ancient Ruins of Rauh. Os nomes brasileiros não foram confirmados.
- Estado da revisão: `researched`

#### Bandai Namco — How to Strengthen Your Character in Shadow of the Erdtree

- Referência: https://en.bandainamcoent.eu/elden-ring/news/elden-ring-how-strengthen-your-character-shadow-of-the-erdtree
- Finalidade: confirmar oficialmente o uso do nome inglês Gravesite Plain e sua condição de área inicial da expansão.
- Escopo da taxonomia: Gravesite Plain e estrutura geral do Realm of Shadow.
- Registros relacionados: `gravesite-plain`.
- Observações: não oferece uma lista regional completa nem traduções oficiais em português do Brasil.
- Estado da revisão: `researched`

#### Fontes secundárias de conferência dos cinco fragmentos

- Referências:
  - https://www.gamesradar.com/games/action-rpg/shadow-of-the-erdtree-map-fragments/
  - https://www.pcgamer.com/games/rpg/elden-ring-shadow-of-the-erdtree-map-fragment-locations/
- Finalidade: conferir de forma independente a existência e a distribuição dos cinco fragmentos do mapa.
- Escopo da taxonomia: Gravesite Plain, Scadu Altus, Southern Shore, Rauh Ruins e Abyss.
- Registros relacionados: todas as cinco regiões propostas.
- Observações: fontes editoriais secundárias; usadas somente como confirmação cruzada, não para traduções nem para definir sozinhas a hierarquia.
- Estado da revisão: `researched`

### Família editorial Rock Paper Shotgun para descoberta de encontros

As duas referências abaixo foram fornecidas pelo usuário em 2026-07-27. Pertencem à mesma publicação e ao mesmo levantamento editorial, portanto constituem uma única família de fontes.

A concordância entre o artigo e o mapa não conta como duas confirmações independentes. Cada encontro candidato deverá ser validado individualmente com pelo menos uma fonte independente antes de poder ser aprovado. Fontes oficiais da FromSoftware ou Bandai Namco e evidência verificável do jogo terão prioridade para nome, localização e tradução.

Estas referências ainda não estão associadas a IDs definitivos de encontros, pois os candidatos não foram pesquisados nem normalizados.

#### Rock Paper Shotgun — Elden Ring boss locations

- Referência: https://www.rockpapershotgun.com/elden-ring-boss-locations
- Família editorial: Rock Paper Shotgun — levantamento de localizações de chefes.
- Finalidade: descoberta inicial de candidatos do jogo base; pistas de nome, localização geral, condições e distinção de encontros repetidos.
- Descrição fornecida pelo usuário: artigo com lista e localização dos encontros do jogo base; apresenta uma relação de 238 entradas, listas organizadas por áreas e mapas regionais; aponta para um artigo separado sobre os encontros de `Shadow of the Erdtree`.
- Limitações: a definição editorial de “boss” poderá incluir invasores, NPCs hostis, inimigos únicos, Great Enemies ou outros adversários sem barra de chefe. Nenhuma entrada será incluída automaticamente.
- Validação exigida: confirmação individual da barra de chefe e comparação com pelo menos uma fonte independente.
- Registros relacionados: nenhum ID definitivo de encontro nesta etapa.
- Estado da revisão: `researched`

#### Rock Paper Shotgun — mapa completo associado

- Referência: https://assetsio.gnwcdn.com/elden-ring-boss-locations-map-full-v3.webp
- Família editorial: Rock Paper Shotgun — levantamento de localizações de chefes.
- Finalidade: conferir visualmente distribuição, região aproximada, numeração e cobertura geográfica.
- Descrição fornecida pelo usuário: mapa visual completo associado ao artigo.
- Relação com o artigo: material da mesma publicação e do mesmo levantamento; não constitui confirmação independente.
- Limitações de uso: preservar somente a URL na documentação. O mapa não será baixado, incorporado ao repositório, redistribuído nem exibido no aplicativo.
- Validação exigida: qualquer candidato localizado no mapa deverá ser confirmado individualmente por fonte independente e por evidência específica da barra.
- Registros relacionados: nenhum ID definitivo de encontro nesta etapa.
- Estado da revisão: `researched`

## Lote de encontros de Limgrave

Esta seção registra a pesquisa documental e a aprovação explícita do primeiro lote real. Todos os registros usam `regionId: "limgrave"` e permanecem fora dos dados do aplicativo nesta etapa. Os 22 encontros propostos foram aprovados pelo usuário em 2026-07-27; a aprovação não alcança outras regiões.

### Fontes comuns e finalidade

- **RPS-A:** [Rock Paper Shotgun — artigo](https://www.rockpapershotgun.com/elden-ring-boss-locations) — descoberta inicial de candidatos, nomes, localização geral, condições e repetições. Bloqueado por `robots.txt` no acesso automatizado.
- **RPS-M:** [Rock Paper Shotgun — mapa completo](https://assetsio.gnwcdn.com/elden-ring-boss-locations-map-full-v3.webp) — conferência visual de distribuição, numeração e cobertura. Não pôde ser aberto automaticamente e não foi baixado.
- **EP-B:** [Eldenpedia — Bosses](https://eldenring.wiki.gg/wiki/Bosses) — definição independente: boss apresenta barra e nome na parte inferior da tela.
- **EP-L:** [Eldenpedia — Enemies/Bosses](https://eldenring.wiki.gg/wiki/Enemies/Bosses) — inventário independente dos encontros de Limgrave, Stormhill e Stormveil, separado de Weeping Peninsula.
- **EP-R:** [Eldenpedia — Limgrave](https://eldenring.wiki.gg/wiki/Limgrave) — limites regionais, sub-regiões e localizações.
- **EP-S:** [Eldenpedia — Stormveil Castle](https://eldenring.wiki.gg/wiki/Stormveil_Castle) — separação entre os bosses Margit/Godrick e inimigos especiais internos.
- **GG-L:** [Gamer Guides — All Bosses in Limgrave](https://www.gamerguides.com/elden-ring/guide/limgrave/bosses/all-bosses-in-limgrave) — comparação editorial independente de nomes, localizações, eventos noturnos e invasores.

RPS-A e RPS-M pertencem à mesma família e não são validações independentes. EP-B define o critério e EP-L é a principal validação regional. As fontes específicas abaixo complementam localização, condição ou distinção por ocorrência.

### Registros aprovados para inclusão futura

#### `grafted-scion-chapel-of-anticipation`

- Nome EN/PT-BR: Grafted Scion / Grafted Scion
- `regionId`: `limgrave`
- `location` EN/PT-BR: Chapel of Anticipation / Chapel of Anticipation
- `availability` EN/PT-BR: Encountered at the start; rematch through the Four Belfries waygate / Encountered at the start; rematch through the Four Belfries waygate
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M para descoberta; EP-B/EP-L para barra e região; GG-L para localização e revanche.
- Divergências: a variante de Stormveil não tem barra e foi rejeitada separadamente.
- Recomendação: incluir esta ocorrência.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `soldier-of-godrick-cave-of-knowledge`

- Nome EN/PT-BR: Soldier of Godrick / Soldier of Godrick
- `regionId`: `limgrave`
- `location` EN/PT-BR: Cave of Knowledge / Cave of Knowledge
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M para descoberta; EP-B/EP-L e GG-L para barra, nome e localização.
- Divergências: nenhuma relevante.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `ulcerated-tree-spirit-fringefolk-heros-grave`

- Nome EN/PT-BR: Ulcerated Tree Spirit / Ulcerated Tree Spirit
- `regionId`: `limgrave`
- `location` EN/PT-BR: Fringefolk Hero's Grave / Fringefolk Hero's Grave
- `availability` EN/PT-BR: Two Stonesword Keys required / Two Stonesword Keys required
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M para descoberta; EP-B/EP-L e GG-L para barra, dungeon e requisito.
- Divergências: a variante sob Stormveil não tem barra e foi rejeitada separadamente.
- Recomendação: incluir somente Fringefolk Hero's Grave.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `tree-sentinel-limgrave-road`

- Nome EN/PT-BR: Tree Sentinel / Tree Sentinel
- `regionId`: `limgrave`
- `location` EN/PT-BR: Limgrave Road / Limgrave Road
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M para descoberta; EP-B/EP-L para barra; GG-L para estrada inicial.
- Divergências: tabela do guia possui célula de localização malformada, mas o texto confirma a área diante de The First Step.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `beastman-of-farum-azula-groveside-cave`

- Nome EN/PT-BR: Beastman of Farum Azula / Beastman of Farum Azula
- `regionId`: `limgrave`
- `location` EN/PT-BR: Groveside Cave / Groveside Cave
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; [Eldenpedia — ocorrência de Groveside Cave](https://eldenring.wiki.gg/wiki/Beastman_of_Farum_Azula/Boss_%28Groveside_Cave%29) para barra/nome; [Groveside Cave](https://eldenring.wiki.gg/wiki/Groveside_Cave) para localização.
- Divergências: nenhuma relevante.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `erdtree-burial-watchdog-stormfoot-catacombs`

- Nome EN/PT-BR: Erdtree Burial Watchdog / Erdtree Burial Watchdog
- `regionId`: `limgrave`
- `location` EN/PT-BR: Stormfoot Catacombs / Stormfoot Catacombs
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M para descoberta; EP-B/EP-L e GG-L para barra e localização.
- Divergências: não confundir com ocorrências de outras catacumbas.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `demi-human-chiefs-coastal-cave`

- Nome EN/PT-BR aprovado: Demi-Human Chiefs / Demi-Human Chiefs
- `regionId`: `limgrave`
- `location` EN/PT-BR: Coastal Cave / Coastal Cave
- `availability`: não aplicável
- Participantes: 2
- Participantes individuais:
  - Demi-Human Chief
  - Demi-Human Chief
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M para descoberta; EP-B/EP-L para as duas barras; GG-L para confirmar a batalha coletiva.
- Divergências: o jogo mostra dois rótulos singulares; fontes alternam singular, plural e repetição dos nomes. A divergência foi resolvida pela decisão explícita abaixo.
- Recomendação: superada pela aprovação do usuário.
- Decisão do usuário: usar `Demi-Human Chiefs` como nome coletivo descritivo no card e na lista, sem alterar os nomes singulares das barras nem tratá-lo como nome oficial ou tradução oficial. A batalha é uma unidade de acompanhamento; marcar o encontro como derrotado representa a conclusão dos dois participantes.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `stonedigger-troll-limgrave-tunnels`

- Nome EN/PT-BR: Stonedigger Troll / Stonedigger Troll
- `regionId`: `limgrave`
- `location` EN/PT-BR: Limgrave Tunnels / Limgrave Tunnels
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L e GG-L para barra, nome e localização.
- Divergências: nenhuma relevante.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `flying-dragon-agheel-agheel-lake`

- Nome EN/PT-BR: Flying Dragon Agheel / Flying Dragon Agheel
- `regionId`: `limgrave`
- `location` EN/PT-BR: Agheel Lake / Agheel Lake
- `availability` EN/PT-BR: Appears after approaching the burning pyre / Appears after approaching the burning pyre
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L para barra e região; GG-L para evento e referência das Dragon-Burnt Ruins.
- Divergências: fontes alternam Agheel Lake e Dragon-Burnt Ruins; a arena é o lago.
- Recomendação: incluir com `location` Agheel Lake.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `bloodhound-knight-darriwil-forlorn-hound-evergaol`

- Nome EN/PT-BR: Bloodhound Knight Darriwil / Bloodhound Knight Darriwil
- `regionId`: `limgrave`
- `location` EN/PT-BR: Forlorn Hound Evergaol / Forlorn Hound Evergaol
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L e GG-L para barra, nome e localização.
- Divergências: próximo de Weeping Peninsula, mas classificado em Limgrave pelas fontes regionais.
- Recomendação: incluir em `limgrave`.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `mad-pumpkin-head-waypoint-ruins`

- Nome EN/PT-BR: Mad Pumpkin Head / Mad Pumpkin Head
- `regionId`: `limgrave`
- `location` EN/PT-BR: Waypoint Ruins Cellar / Waypoint Ruins Cellar
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L e GG-L para barra e localização.
- Divergências: fontes abreviam para Waypoint Ruins; `Cellar` identifica a arena.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `grave-warden-duelist-murkwater-catacombs`

- Nome EN/PT-BR: Grave Warden Duelist / Grave Warden Duelist
- `regionId`: `limgrave`
- `location` EN/PT-BR: Murkwater Catacombs / Murkwater Catacombs
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L e GG-L para barra, nome e localização.
- Divergências: nenhuma relevante.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `patches-murkwater-cave`

- Nome EN/PT-BR: Patches / Patches
- `regionId`: `limgrave`
- `location` EN/PT-BR: Murkwater Cave / Murkwater Cave
- `availability` EN/PT-BR: Triggered by opening the chest; battle ends when Patches surrenders / Triggered by opening the chest; battle ends when Patches surrenders
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; [Eldenpedia — Patches](https://eldenring.wiki.gg/wiki/Patches_the_Untethered) para boss/barra e rendição; [Murkwater Cave](https://eldenring.wiki.gg/wiki/Murkwater_Cave) para localização.
- Divergências: é NPC e comerciante depois do evento, mas esta ocorrência específica possui barra.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `guardian-golem-highroad-cave`

- Nome EN/PT-BR: Guardian Golem / Guardian Golem
- `regionId`: `limgrave`
- `location` EN/PT-BR: Highroad Cave / Highroad Cave
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L para barra e inventário; [Highroad Cave](https://eldenring.wiki.gg/wiki/Highroad_Cave) para dungeon.
- Divergências: omitido da tabela resumida GG-L, embora exista página específica no guia.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `nights-cavalry-limgrave-bridge`

- Nome EN/PT-BR: Night's Cavalry / Night's Cavalry
- `regionId`: `limgrave`
- `location` EN/PT-BR: Bridge southeast of Agheel Lake North / Bridge southeast of Agheel Lake North
- `availability` EN/PT-BR: Night only / Night only
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; [Eldenpedia — Night's Cavalry](https://eldenring.wiki.gg/wiki/Night%27s_Cavalry) para boss, variante, região e noite; GG-L para localização.
- Divergências: descrita como ponte ao norte do lago ou a sudeste da graça; é a mesma ponte.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `tibia-mariner-summonwater-village`

- Nome EN/PT-BR: Tibia Mariner / Tibia Mariner
- `regionId`: `limgrave`
- `location` EN/PT-BR: Summonwater Village / Summonwater Village
- `availability` EN/PT-BR: Appears when approaching the flooded village / Appears when approaching the flooded village
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L e GG-L para barra, ocorrência e localização.
- Divergências: outras ocorrências do tipo pertencem a outros lotes.
- Recomendação: incluir somente Summonwater Village.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `black-knife-assassin-deathtouched-catacombs`

- Nome EN/PT-BR: Black Knife Assassin / Black Knife Assassin
- `regionId`: `limgrave`
- `location` EN/PT-BR: Deathtouched Catacombs / Deathtouched Catacombs
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L e GG-L para barra, nome e localização.
- Divergências: Stormhill é sub-região de Limgrave.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `deathbird-stormhill`

- Nome EN/PT-BR: Deathbird / Deathbird
- `regionId`: `limgrave`
- `location` EN/PT-BR: East of Warmaster's Shack / East of Warmaster's Shack
- `availability` EN/PT-BR: Night only / Night only
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; [Eldenpedia — Deathbird](https://eldenring.wiki.gg/wiki/Deathbird) para boss, HP, local e noite; [Stormhill](https://eldenring.wiki.gg/wiki/Stormhill) para região.
- Divergências: omitido de GG-L; EP-L e a página específica confirmam. Não confundir com Weeping Peninsula.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `bell-bearing-hunter-warmasters-shack`

- Nome EN/PT-BR: Bell Bearing Hunter / Bell Bearing Hunter
- `regionId`: `limgrave`
- `location` EN/PT-BR: Warmaster's Shack / Warmaster's Shack
- `availability` EN/PT-BR: Night only; exhaust Knight Bernahl's dialogue / Night only; exhaust Knight Bernahl's dialogue
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; [Eldenpedia — Bell Bearing Hunter](https://eldenring.wiki.gg/wiki/Bell_Bearing_Hunter) para boss/condições; [Warmaster's Shack](https://eldenring.wiki.gg/wiki/Warmaster%27s_Shack) para local.
- Divergências: GG-L usa “Invader”, mas esta ocorrência possui barra e está no inventário de bosses.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `crucible-knight-stormhill-evergaol`

- Nome EN/PT-BR: Crucible Knight / Crucible Knight
- `regionId`: `limgrave`
- `location` EN/PT-BR: Stormhill Evergaol / Stormhill Evergaol
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L e GG-L para barra e evergaol.
- Divergências: ocorrência em Stormveil não possui barra e foi rejeitada.
- Recomendação: incluir somente o evergaol.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `margit-the-fell-omen-castleward-tunnel`

- Nome EN/PT-BR: Margit, the Fell Omen / Margit, the Fell Omen
- `regionId`: `limgrave`
- `location` EN/PT-BR: Castleward Tunnel / Castleward Tunnel
- `availability`: não aplicável
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; EP-B/EP-L e EP-S para boss e região.
- Divergências: fontes alternam Stormhill, Stormveil Castle e Castleward Tunnel; adotado o nome específico da arena/graça.
- Recomendação: incluir.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

#### `godrick-the-grafted-stormveil-castle`

- Nome EN/PT-BR: Godrick the Grafted / Godrick the Grafted
- `regionId`: `limgrave`
- `location` EN/PT-BR: Stormveil Castle / Stormveil Castle
- `availability` EN/PT-BR: Available after defeating Margit and traversing Stormveil Castle / Available after defeating Margit and traversing Stormveil Castle
- Barra: `confirmed`
- Fontes: RPS-A/RPS-M; [Eldenpedia — Godrick](https://eldenring.wiki.gg/wiki/Godrick_the_Grafted) para boss/fases; EP-S para localização e distinção de inimigos internos.
- Divergências: a segunda fase mantém o mesmo encontro e ID.
- Recomendação: incluir como um encontro.
- Decisão do usuário: aprovado explicitamente neste lote.
- Data da decisão: 2026-07-27
- Estado geral: `approved`

### Candidatos rejeitados — fora da proposta de inclusão

#### `recusant-henricus-limgrave-colosseum`

- Nome/localização: Recusant Henricus — Limgrave Colosseum/Stormhill
- `regionId` de pesquisa: `limgrave`
- Barra: `rejected`
- Fontes: RPS-A/RPS-M e GG-L para descoberta editorial; [Eldenpedia — Invader](https://eldenring.wiki.gg/wiki/Invader) para classificação; EP-L para ausência do inventário de bosses.
- Divergências: chamado editorialmente de boss/invader.
- Recomendação: excluir; NPC invader sem barra inferior de chefe.
- Estado geral: `rejected`

#### `bloody-finger-nerijus-murkwater-river`

- Nome/localização: Bloody Finger Nerijus — Murkwater River, outside Murkwater Cave
- `regionId` de pesquisa: `limgrave`
- Barra: `rejected`
- Fontes: RPS-A/RPS-M e GG-L para descoberta; [Eldenpedia — Invader](https://eldenring.wiki.gg/wiki/Invader) para classificação; EP-L para ausência do inventário.
- Divergências: guias o chamam de boss, mas a ocorrência usa interface de invasão.
- Recomendação: excluir.
- Estado geral: `rejected`

#### `anastasia-tarnished-eater-smoldering-church`

- Nome/localização: Anastasia, Tarnished-Eater — Smoldering Church
- `regionId` de pesquisa: `limgrave` apenas para auditar a fonte inicial; não é proposta de inclusão
- Barra: `rejected`
- Fontes: RPS-A/RPS-M e GG-L; [Gamer Guides — Anastasia](https://www.gamerguides.com/elden-ring/database/enemies/invaders/anastasia-tarnished-eater) para invader/fronteira; [Game8 — Caelid](https://game8.co/games/Elden-Ring/archives/379537) para classificação em Caelid.
- Divergências: fronteira Limgrave/Caelid; ausência de barra já determina exclusão deste lote.
- Recomendação: excluir.
- Estado geral: `rejected`

#### `grafted-scion-stormveil-castle`

- Nome/localização: Grafted Scion — Stormveil Castle
- `regionId` de pesquisa: `limgrave`
- Barra: `rejected`
- Fontes: EP-S lista a ocorrência como enemy e somente Margit/Godrick como bosses; [Eldenpedia — guide](https://eldenring.wiki.gg/wiki/Elden_Ring_Guide) a trata como miniboss.
- Divergências: mesmo tipo possui barra na Chapel of Anticipation.
- Recomendação: excluir somente esta ocorrência.
- Estado geral: `rejected`

#### `ulcerated-tree-spirit-stormveil-castle`

- Nome/localização: Ulcerated Tree Spirit — lower Stormveil Castle
- `regionId` de pesquisa: `limgrave`
- Barra: `rejected`
- Fontes: [Gamer Guides — Stormveil variant](https://www.gamerguides.com/elden-ring/database/enemies/wildlife/ulcerated-tree-spirit-stormveil-castle) afirma ausência da barra; EP-S o lista como enemy.
- Divergências: variante de Fringefolk Hero's Grave possui barra.
- Recomendação: excluir somente esta ocorrência.
- Estado geral: `rejected`

#### `crucible-knight-stormveil-castle`

- Nome/localização: Crucible Knight — Stormveil Castle
- `regionId` de pesquisa: `limgrave`
- Barra: `rejected`
- Fontes: EP-S o lista como enemy e não como boss; Eldenpedia — guide o trata como miniboss.
- Divergências: variante de Stormhill Evergaol possui barra.
- Recomendação: excluir somente esta ocorrência.
- Estado geral: `rejected`

#### `lion-guardian-stormveil-castle`

- Nome/localização: Lion Guardian/Elder Lion — Stormveil Castle courtyard
- `regionId` de pesquisa: `limgrave`
- Barra: `rejected`
- Fontes: EP-S o lista entre enemies e limita os bosses formais a Margit/Godrick.
- Divergências: variação de nome editorial Lion Guardian/Elder Lion.
- Recomendação: excluir.
- Estado geral: `rejected`

### Resultado final do lote

- 29 candidatos analisados.
- 22 aprovados explicitamente, todos com barra `confirmed`.
- 7 rejeitados e fora da proposta de inclusão.
- 22 registros em `approved`.
- Nenhum encontro do lote em `researched` ou `needs-review`.
- `demi-human-chiefs-coastal-cave` usa o nome coletivo aprovado `Demi-Human Chiefs`.
- Nenhum ID duplicado; todos os IDs usam apenas letras minúsculas e hífens.
- Todos os registros propostos usam `regionId: "limgrave"` e possuem localização.
- Nenhum encontro claramente pertencente a Weeping Peninsula foi incluído.
- As condições conhecidas foram registradas.
- A cobertura nominal da família Rock Paper Shotgun permanece pendente de conferência manual devido às limitações de acesso.
- Data da aprovação: 2026-07-27.
- Escopo da aprovação: somente os 22 encontros de Limgrave.
- Próxima etapa: pesquisar e preparar o lote de encontros de Weeping Peninsula, sem modificar os dados do aplicativo.

## Lotes Weeping Peninsula e Liurnia of the Lakes — 2026-07-27

### Fontes e escopo da aprovação parcial

- **FEX-B:** [Fextralife — Bosses](https://eldenring.wiki.fextralife.com/Bosses). Fonte inicial usada pelo usuário para fornecer os inventários. Em 2026-07-27, o usuário aprovou os nomes ingleses, sua inclusão no inventário e a associação às respectivas regiões. A aprovação não alcança os demais campos.
- **Limitação FEX-B:** a página retornou erro no acesso automatizado; a lista fornecida foi preservada, mas localização e barra foram validadas independentemente.
- **EP-B:** [Eldenpedia — Enemies/Bosses](https://eldenring.wiki.gg/wiki/Enemies/Bosses). Reconciliação regional, localização e composição.
- **EP-WP:** [Weeping Peninsula](https://eldenring.wiki.gg/wiki/Weeping_Peninsula). Limites, dungeons e field bosses.
- **EP-LI:** [Liurnia of the Lakes](https://eldenring.wiki.gg/wiki/Liurnia_of_the_Lakes). Limites e field bosses.
- **EP-EV:** [Evergaol](https://eldenring.wiki.gg/wiki/Evergaol). Arenas e chefes de evergaols.
- **EP-AD:** [Three Sisters](https://eldenring.wiki.gg/wiki/Three_Sisters), [Cathedral of Manus Celes](https://eldenring.wiki.gg/wiki/Cathedral_of_Manus_Celes) e [Adula's Moonblade](https://eldenring.wiki.gg/wiki/Adula%27s_Moonblade). Duas aparições de Adula.
- **EP-MK:** [Ruin-Strewn Precipice](https://eldenring.wiki.gg/wiki/Ruin-Strewn_Precipice) e [Magma Wyrm Makar](https://eldenring.wiki.gg/wiki/Magma_Wyrm_Makar). Arena e conexão Liurnia–Altus.
- **EP-CS:** [Academy Crystal Cave](https://eldenring.wiki.gg/wiki/Academy_Crystal_Cave) e [Crystalian](https://eldenring.wiki.gg/wiki/Crystalian). Dupla e nomes individuais.
- **EP-SS:** [Spiritcaller Snail](https://eldenring.wiki.gg/wiki/Spiritcaller_Snail) e [Road's End Catacombs](https://eldenring.wiki.gg/wiki/Road%27s_End_Catacombs). Nome da barra e invocações.
- **EP-GN:** [Godskin Noble](https://eldenring.wiki.gg/wiki/Godskin_Noble). Ausência de barra na ocorrência de Carian Study Hall.

As páginas específicas vinculadas nas duas propostas complementam essas fontes. Nenhuma tradução brasileira foi considerada oficial.

### Registros — Weeping Peninsula

Todos usam `regionId: "weeping-peninsula"`, barra `confirmed` e a observação `Nome inglês e associação regional aprovados explicitamente pelo usuário em 2026-07-27.` Essa aprovação parcial é histórica; os registros completos foram aprovados em 2026-07-28.

| ID | Nome aprovado | Localização | Disponibilidade | Fontes / divergência | Estado |
| --- | --- | --- | --- | --- | --- |
| `nights-cavalry-castle-morne-rampart` | Night's Cavalry | Road near Castle Morne Rampart | Night only | FEX-B; EP-B; marco rodoviário varia | `approved` |
| `deathbird-weeping-peninsula` | Deathbird | Cliff northwest of Castle Morne | Night only | FEX-B; EP-B; página específica confirma northwest | `approved` |
| `scaly-misbegotten-morne-tunnel` | Scaly Misbegotten | Morne Tunnel | sem condição especial | FEX-B; EP-B; página do túnel | `approved` |
| `runebear-earthbore-cave` | Runebear | Earthbore Cave | sem condição especial | FEX-B; EP-B; distinguir variantes sem barra | `approved` |
| `miranda-the-blighted-bloom-tombsward-cave` | Miranda the Blighted Bloom | Tombsward Cave | sem condição especial | FEX-B; EP-B; auxiliares sem barra | `approved` |
| `cemetery-shade-tombsward-catacombs` | Cemetery Shade | Tombsward Catacombs | sem condição especial | FEX-B; EP-B | `approved` |
| `ancient-hero-of-zamor-weeping-evergaol` | Ancient Hero of Zamor | Weeping Evergaol | One Stonesword Key required | FEX-B; EP-B; página específica | `approved` |
| `erdtree-avatar-weeping-peninsula-minor-erdtree` | Erdtree Avatar | Minor Erdtree (Weeping Peninsula) | sem condição especial | FEX-B; EP-B; qualificador geográfico | `approved` |
| `erdtree-burial-watchdog-impalers-catacombs` | Erdtree Burial Watchdog (Impaler's Catacombs) | Impaler's Catacombs | sem condição especial | Decisão 1A: 1 participante com barra; Imps auxiliares sem quantidade fixa | `approved` |
| `leonine-misbegotten-morne-moangrave` | Leonine Misbegotten | Morne Moangrave (Castle Morne) | Traverse Castle Morne | FEX-B; EP-B; Castle Morne é descrição ampla | `approved` |

### Registros — Liurnia of the Lakes

Todos usam `regionId: "liurnia-of-the-lakes"`, barra `confirmed` e a mesma observação de aprovação parcial em 2026-07-27, sucedida pela aprovação final em 2026-07-28.

| ID | Nome aprovado | Localização | Disponibilidade | Fontes / divergência | Estado |
| --- | --- | --- | --- | --- | --- |
| `nights-cavalry-liurnia-south-highway` | Night's Cavalry (Liurnia South) | Liurnia Highway, southeast of Gate Town Bridge | Night only | FEX-B; EP-B/EP-LI | `approved` |
| `deathbird-scenic-isle` | Deathbird | Northeast of Scenic Isle | Night only | FEX-B; EP-B; Deathbird | `approved` |
| `bloodhound-knight-lakeside-crystal-cave` | Bloodhound Knight | Lakeside Crystal Cave | sem condição especial | FEX-B; EP-B; página da caverna | `approved` |
| `cleanrot-knight-stillwater-cave` | Cleanrot Knight | Stillwater Cave | sem condição especial | FEX-B; EP-B; página da caverna | `approved` |
| `omenkiller-village-of-the-albinaurics` | Omenkiller | Village of the Albinaurics | sem condição especial | FEX-B; EP-B; página da vila | `approved` |
| `erdtree-avatar-liurnia-southwest-minor-erdtree` | Erdtree Avatar (Liurnia Southwest) | Minor Erdtree (Liurnia Southwest) | sem condição especial | FEX-B; EP-B; qualificador | `approved` |
| `crystalian-spear-staff-duo-academy-crystal-cave` | Crystalian Spear & Crystalian Staff (Duo) | Academy Crystal Cave | Two Stonesword Keys required | FEX-B; EP-CS; duas barras/um encontro | `approved` |
| `glintstone-dragon-smarag-temple-quarter` | Glintstone Dragon Smarag | Lake west of Raya Lucaria Academy, near Temple Quarter | Guards Academy Glintstone Key | FEX-B; EP-B; marco varia | `approved` |
| `red-wolf-of-radagon-debate-parlor` | Red Wolf of Radagon | Debate Parlor | Traverse the Academy | FEX-B; EP-B; Academia | `approved` |
| `rennala-queen-of-the-full-moon-grand-library` | Rennala, Queen of the Full Moon | Raya Lucaria Grand Library | After Red Wolf of Radagon | FEX-B; EP-B; duas fases | `approved` |
| `erdtree-burial-watchdog-cliffbottom-catacombs` | Erdtree Burial Watchdog | Cliffbottom Catacombs | sem condição especial | FEX-B; EP-B | `approved` |
| `tibia-mariner-liurnia-east` | Tibia Mariner | East Liurnia, south of Carian Study Hall | sem condição especial | FEX-B; EP-B; marco amplo | `approved` |
| `erdtree-avatar-liurnia-northeast-minor-erdtree` | Erdtree Avatar (Liurnia Northeast) | Minor Erdtree (Liurnia Northeast) | sem condição especial | FEX-B; EP-B; qualificador | `approved` |
| `bell-bearing-hunter-church-of-vows` | Bell Bearing Hunter | Church of Vows | Night only; exhaust Miriel's dialogue and reload | FEX-B; EP-B/EP-LI | `approved` |
| `crystalian-raya-lucaria-crystal-tunnel` | Crystalian | Raya Lucaria Crystal Tunnel | sem condição especial | FEX-B; EP-CS | `approved` |
| `black-knife-assassin-black-knife-catacombs` | Black Knife Assassin | Hidden chamber, Black Knife Catacombs | Reveal the hidden passage | FEX-B; EP-B; boss alternativo | `approved` |
| `cemetery-shade-black-knife-catacombs` | Cemetery Shade | Main boss chamber, Black Knife Catacombs | sem condição especial | FEX-B; EP-B; skeletons auxiliares | `approved` |
| `royal-revenant-kingsrealm-ruins` | Royal Revenant | Underground chamber, Kingsrealm Ruins | Reveal the hidden floor | FEX-B; EP-B; distinguir variantes sem barra | `approved` |
| `royal-knight-loretta-caria-manor` | Royal Knight Loretta | Royal Moongazing Grounds (Caria Manor) | Traverse Caria Manor | FEX-B; EP-B; distinguir Haligtree | `approved` |
| `glintstone-dragon-adula-cathedral-of-manus-celes` | Glintstone Dragon Adula | Cathedral of Manus Celes (Moonlight Altar) | Progress Ranni's quest; first interrupted stage at Three Sisters | Decisão 2A: uma unidade; conclusão na Catedral | `approved` |
| `spirit-caller-snail-roads-end-catacombs` | Spirit-Caller Snail | Road's End Catacombs | sem condição especial | FEX-B; EP-SS; barra sem hífen | `approved` |
| `bols-carian-knight-cuckoos-evergaol` | Bols, Carian Knight | Cuckoo's Evergaol | sem condição especial | FEX-B; EP-EV | `approved` |
| `adan-thief-of-fire-malefactors-evergaol` | Adan, Thief of Fire | Malefactor's Evergaol | sem condição especial | FEX-B; EP-EV | `approved` |
| `death-rite-bird-gate-town-north` | Death Rite Bird | South of Gate Town North | Night only | FEX-B; EP-B; página específica | `approved` |
| `nights-cavalry-liurnia-north-bellum-highway` | Night's Cavalry (Liurnia North) | Bellum Highway | Night only | FEX-B; EP-B/EP-LI | `approved` |
| `onyx-lord-royal-grave-evergaol` | Onyx Lord | Royal Grave Evergaol | Defeat Royal Knight Loretta to reach Three Sisters | FEX-B; EP-EV | `approved` |
| `magma-wyrm-makar-ruin-strewn-precipice` | Magma Wyrm Makar | Ruin-Strewn Precipice | Traverse Ruin-Strewn Precipice | Decisão 3A: manter Liurnia; conexão com Altus é histórico | `approved` |
| `alecto-black-knife-ringleader-ringleaders-evergaol` | Alecto, Black Knife Ringleader | Ringleader's Evergaol (Moonlight Altar) | Progress Ranni's quest to reach Moonlight Altar | FEX-B; EP-EV | `approved` |

### Candidato adicional rejeitado

- Godskin Noble — Carian Study Hall / bridge to Divine Tower of Liurnia.
- Fonte: EP-B para descoberta e EP-GN para verificação específica.
- Barra/estado: `rejected`; a ocorrência não exibe barra de chefe.
- Recomendação: fora dos 28 nomes e fora da proposta de inclusão.

### Validação consolidada

- Weeping Peninsula: 10 nomes preservados; 10 barras `confirmed`; 10 `approved`; 0 `needs-review`.
- Liurnia: 28 nomes preservados; 28 barras `confirmed`; 28 `approved`; 0 `needs-review`.
- Os 38 IDs são únicos e usam somente letras minúsculas e hífens.
- Os 38 registros completos receberam `approved` por decisão explícita do usuário em 2026-07-28.
- Os 22 encontros aprovados e 7 rejeitados de Limgrave não foram alterados.

## Inventários restantes do jogo base — pesquisa de 2026-07-27

### Mapeamentos estruturais aprovados

- Capital Outskirts, Leyndell, Royal Capital, Leyndell, Ashen Capital e Elden Throne usam `altus-plateau`.
- Forbidden Lands usa `mountaintops-of-the-giants`.
- Nokron, Eternal City usa `siofra-river`.
- Mohg, Lord of Blood usa `mohgwyn-palace`; arena em Cocoon of the Empyrean, dentro de Mohgwyn Dynasty Mausoleum.
- Normalizações: Greyoll's Dragonbarrow/`greyolls-dragonbarrow`; Mt. Gelmir/`mt-gelmir`; Crumbling Farum Azula/`crumbling-farum-azula`; Consecrated Snowfield/`consecrated-snowfield`; Ainsel River/`ainsel-river`.

### Família de descoberta e validação

- Inventários fornecidos pelo usuário: fonte nominal e regional; aprovação parcial em 2026-07-27.
- [Fextralife — Bosses](https://eldenring.wiki.fextralife.com/Bosses): descoberta/cobertura; acesso automatizado falhou.
- [Rock Paper Shotgun — boss locations](https://www.rockpapershotgun.com/elden-ring-boss-locations) e mapa associado: uma única família editorial; acesso automatizado limitado e mapa não baixado.
- [Eldenpedia — Enemies/Bosses](https://eldenring.wiki.gg/wiki/Enemies/Bosses): validação independente principal de região, ocorrência e barra.
- Páginas regionais, de dungeons e de cada encontro na Eldenpedia: localização, disponibilidade, participantes e fases.
- [Eldenpedia — Bosses](https://eldenring.wiki.gg/wiki/Bosses): critério explícito de barra inferior.

Para cada ID abaixo, o registro individual completo — nome fornecido, associação aprovada, data, localização e PT, disponibilidade e PT, nome da barra, participantes, auxiliares, fases, confirmação, fontes, divergência, recomendação e estado — está na tabela e no registro detalhado do documento regional indicado. Esta indexação é parte normativa de `DATA_SOURCES.md`; a aprovação parcial anterior foi sucedida pela aprovação final de 2026-07-28.

### Caelid — 17 registros ativos

Documento: `BOSS_BATCH_CAELID_PROPOSAL.md`. 17 ativos, todos `confirmed` e `approved`. Em 2026-07-28, o usuário aprovou explicitamente a transferência dos três IDs abaixo de Dragonbarrow para `caelid`; IDs preservados e nenhuma migração, pois não foram publicados.

`magma-wyrm-gael-tunnel`; `frenzied-duelist-gaol-cave`; `mad-pumpkin-heads-caelem-ruins`; `erdtree-burial-watchdog-duo-minor-erdtree-catacombs`; `putrid-avatar-caelid-minor-erdtree`; `commander-oneil-swamp-of-aeonia`; `nox-swordstress-nox-monk-sellia`; `fallingstar-beast-sellia-crystal-tunnel`; `cemetery-shade-caelid-catacombs`; `decaying-ekzykes-caelid-highway-south`; `nights-cavalry-caelid-southern-aeonia`; `death-rite-bird-southern-aeonia`; `crucible-knight-misbegotten-warrior-redmane-castle`; `starscourge-radahn-wailing-dunes`; `putrid-crystalian-trio-sellia-hideaway`; `cleanrot-knight-duo-abandoned-cave`; `putrid-tree-spirit-war-dead-catacombs`.

### Greyoll's Dragonbarrow — 8 registros ativos

Documento: `BOSS_BATCH_GREYOLLS_DRAGONBARROW_PROPOSAL.md`. 8 ativos, todos `confirmed` e `approved`; nenhum `needs-review`.

`putrid-avatar-dragonbarrow-minor-erdtree`; `battlemage-hugues-sellia-evergaol`; `beastman-of-farum-azula-duo-dragonbarrow-cave`; `flying-dragon-greyll-farum-greatbridge`; `black-blade-kindred-bestial-sanctum`; `nights-cavalry-dragonbarrow-lennes-rise`; `bell-bearing-hunter-isolated-merchants-shack-dragonbarrow`; `godskin-apostle-divine-tower-of-caelid`.

Candidato adicional: `elder-dragon-greyoll-fort-faroth`, Fort Faroth; não exibe barra; confirmação/estado `rejected`; rejeição aprovada explicitamente pelo usuário em 2026-07-28. Histórico `confirmed`/`needs-review` preservado; não integra os 8 ativos.

### Altus Plateau — 34 registros

Documento: `BOSS_BATCH_ALTUS_PLATEAU_PROPOSAL.md`. 34 `confirmed` e `approved`; nenhum `needs-review`.

`ancient-dragon-lansseax-rampartside-path`; `demi-human-queen-gilika-lux-ruins`; `tibia-mariner-wyndham-ruins`; `erdtree-burial-watchdog-wyndham-catacombs`; `stonedigger-troll-old-altus-tunnel`; `elemer-of-the-briar-shaded-castle`; `godefroy-the-grafted-golden-lineage-evergaol`; `night-cavalry-altus-highway-junction`; `tree-sentinel-duo-outer-wall-phantom-tree`; `fallingstar-beast-altus-crater`; `wormface-altus-minor-erdtree`; `godskin-apostle-dominula`; `sanguine-noble-writheblood-ruins`; `black-knife-assassin-sages-cave`; `necromancer-garris-sages-cave`; `crystalian-spear-ringblade-altus-tunnel`; `omenkiller-miranda-perfumers-grotto`; `perfumer-tricia-misbegotten-warrior-unsightly-catacombs`; `ancient-hero-of-zamor-sainted-heros-grave`; `black-knife-assassin-sainted-heros-grave`; `deathbird-capital-outskirts-hermit-merchants-shack`; `bell-bearing-hunter-hermit-merchants-shack`; `grave-warden-duelist-auriza-side-tomb`; `crucible-knight-ordovis-auriza-heros-grave`; `onyx-lord-sealed-tunnel`; `draconic-tree-sentinel-capital-rampart`; `fell-twins-divine-tower-east-altus`; `mohg-the-omen-forsaken-depths`; `esgar-priest-of-blood-leyndell-catacombs`; `godfrey-first-elden-lord-erdtree-sanctuary`; `morgott-the-omen-king-elden-throne-royal-capital`; `sir-gideon-ofnir-erdtree-sanctuary`; `godfrey-hoarah-loux-elden-throne`; `radagon-elden-beast-elden-throne`.

Decisões de 2026-07-28: Lansseax usa uma unidade, primeira aparição em Abandoned Coffin e conclusão em Rampartside Path; Godefroy usa `Godefroy the Grafted` para barra/exibição, preservando `Godefroy The Grafted` como inventário original.

Candidato adicional: `margit-the-fell-omen-capital-outskirts`; não exibe barra; confirmação/estado `rejected`; decisão explícita do usuário em 2026-07-28; distinto do Margit de Castleward Tunnel.

### Mt. Gelmir — 10 registros

Documento: `BOSS_BATCH_MT_GELMIR_PROPOSAL.md`. Todos `confirmed` e `approved`.

`abductor-virgins-duo-inquisition-chamber`; `kindred-of-rot-duo-seethewater-cave`; `red-wolf-of-the-champion-gelmir-heros-grave`; `magma-wyrm-fort-laiedd-lava-lake`; `demi-human-queen-margot-volcano-cave`; `demi-human-queen-maggie-hermit-village`; `full-grown-fallingstar-beast-ninth-campsite`; `ulcerated-tree-spirit-mt-gelmir-minor-erdtree`; `godskin-noble-volcano-manor`; `god-devouring-serpent-rykard-audience-pathway`.

### Mountaintops of the Giants — 12 registros

Documento: `BOSS_BATCH_MOUNTAINTOPS_OF_THE_GIANTS_PROPOSAL.md`. 12 `confirmed` e `approved`; nenhum `needs-review`.

`black-blade-kindred-forbidden-lands`; `nights-cavalry-forbidden-lands`; `stray-mimic-tear-hidden-path-haligtree`; `ancient-hero-of-zamor-giant-conquering-heros-grave`; `ulcerated-tree-spirit-giants-mountaintop-catacombs`; `vyke-knight-roundtable-lord-contenders-evergaol`; `erdtree-avatar-mountaintops-minor-erdtree`; `commander-niall-castle-sol`; `death-rite-bird-snow-valley-ruins-overlook`; `borealis-freezing-fog-freezing-lake`; `spiritcaller-snail-spiritcaller-cave`; `fire-giant-forge-of-the-giants`.

Decisões de 2026-07-28: Stray Mimic Tear passou de classificação histórica `rejected` para `confirmed`/`approved`; Vyke usa `Roundtable Knight Vyke` na barra/exibição; Spiritcaller Snail é o único chefe acompanhável, com Godskin Apostle/Noble como summons. `godskin-spiritcaller-snail-spiritcaller-cave` é proposta substituída, não publicada e sem migração.

Candidato adicional rejeitado: Tibia Mariner perto de Castle Sol, sem barra; rejeição confirmada pelo usuário em 2026-07-28.

### Consecrated Snowfield — 7 registros

Documento: `BOSS_BATCH_CONSECRATED_SNOWFIELD_PROPOSAL.md`. Todos `confirmed` e `approved`.

`putrid-grave-warden-duelist-consecrated-snowfield-catacombs`; `misbegotten-crusader-cave-of-forlorn`; `great-wyrm-theodorix-cave-forlorn-river`; `putrid-avatar-consecrated-snowfield-minor-erdtree`; `nights-cavalry-duo-inner-consecrated-snowfield`; `death-rite-bird-apostate-derelict`; `astel-stars-of-darkness-yelough-anix-tunnel`.

### Miquella's Haligtree — 2 registros

Documento: `BOSS_BATCH_MIQUELLAS_HALIGTREE_PROPOSAL.md`. Ambos `confirmed` e `approved`.

`loretta-knight-haligtree-haligtree-promenade`; `malenia-blade-miquella-haligtree-roots`.

### Siofra River — 5 registros

Documento: `BOSS_BATCH_SIOFRA_RIVER_PROPOSAL.md`. Todos `confirmed` e `approved`.

`dragonkin-soldier-siofra-river`; `ancestor-spirit-hallowhorn-grounds`; `mimic-tear-nokron`; `regal-ancestor-spirit-nokron-hallowhorn-grounds`; `valiant-gargoyles-siofra-aqueduct`.

### Ainsel River — 1 registro

Documento: `BOSS_BATCH_AINSEL_RIVER_PROPOSAL.md`. `dragonkin-soldier-of-nokstella-ainsel-downstream`: `confirmed`, `approved`.

### Deeproot Depths — 3 registros

Documento: `BOSS_BATCH_DEEPROOT_DEPTHS_PROPOSAL.md`. Todos os 3 `confirmed` e `approved`; nenhum `needs-review`.

`crucible-knight-siluria-crucible-tree`; `fias-champions-prince-of-deaths-throne`; `lichdragon-fortissax-deathbed-dream`.

Decisão de 2026-07-28: Fia's Champions é uma unidade de três ondas e cinco oponentes; Rogier e Lionel são fixos, três champions são variáveis; conclusão somente após as três ondas.

### Lake of Rot — 2 registros

Documento: `BOSS_BATCH_LAKE_OF_ROT_PROPOSAL.md`. Ambos `confirmed` e `approved`.

`dragonkin-soldier-lake-of-rot`; `astel-naturalborn-void-grand-cloister`.

### Mohgwyn Palace — 1 registro

Documento: `BOSS_BATCH_MOHGWYN_PALACE_PROPOSAL.md`. `mohg-lord-of-blood-dynasty-mausoleum`: `confirmed`, `approved`, `regionId: "mohgwyn-palace"`.

### Crumbling Farum Azula — 3 registros

Documento: `BOSS_BATCH_CRUMBLING_FARUM_AZULA_PROPOSAL.md`. Todos `confirmed` e `approved`.

`godskin-duo-dragon-temple`; `dragonlord-placidusax-beyond-time`; `beast-clergyman-maliketh-beside-great-bridge`.

Candidato adicional rejeitado: Draconic Tree Sentinel de Beside the Great Bridge, sem barra; rejeição confirmada pelo usuário em 2026-07-28.

### Consolidação

- Inventário fornecido: 105 entradas.
- Barra dos inventários: 105 `confirmed`.
- Estado geral dos inventários: 105 `approved`; 0 `pending`; 0 `researched`; 0 `needs-review`.
- Candidatos adicionais: Elder Dragon Greyoll, Margit de Capital Outskirts, Tibia Mariner de Castle Sol e Draconic Tree Sentinel de Farum Azula, todos `rejected`.
- Resumo do jogo base: Limgrave 22 `approved`; Weeping Peninsula 10 `approved`; Liurnia 28 `approved`; demais lotes 105 `approved`; total 165.
- Limitações históricas: Fextralife/RPS inacessíveis ou limitados à automação; mapa RPS não baixado; nenhuma tradução oficial brasileira completa localizada. As decisões de interface coletiva foram resolvidas pelo usuário e não permanecem como pendências.


## Aprovação final do catálogo de chefes do jogo base — 2026-07-28

O usuário aprovou explicitamente os 143 encontros que ainda estavam em pesquisa. Para cada registro ativo, a aprovação abrange ID, nomes, região, localização, disponibilidade, participantes, summons, auxiliares, fases, unidade, barra e fontes atualmente documentados. Os 143 registros passam a `approved` e mantêm barra `confirmed`. Somados aos 22 de Limgrave, o jogo base possui 165 encontros ativos `approved`. Candidatos sem barra permanecem `rejected` e fora do total. Nenhum dado foi inserido no aplicativo.
## Shadow of the Erdtree — pesquisa dos encontros

- Inventário fornecido pelo usuário: 42 entradas, com nomes e associação regional parcialmente aprovados em `2026-07-28`.
- Mapeamento aprovado: `Enir-Ilim` é legacy dungeon/localização interna de `Gravesite Plain`; não cria `regionId`. Leda e Radahn usam `gravesite-plain`.
- Descoberta: Fextralife (páginas gerais e específicas) e a família editorial Rock Paper Shotgun já registrada.
- Validação independente principal: [Elden Ring Wiki.gg — Enemies/Bosses](https://eldenring.wiki.gg/wiki/Enemies/Bosses), páginas regionais e páginas específicas dos encontros. A fonte define chefes pela barra na parte inferior e diferencia invasores/minibosses.
- Fontes oficiais: Bandai Namco e FromSoftware foram priorizadas quando traziam nomenclatura ou contexto, mas não oferecem inventário técnico completo por ocorrência.
- Limitações: páginas da Fextralife apresentaram acesso automatizado inconsistente; snippets de busca e páginas alternativas foram usados sem inventar conteúdo. Vídeos e mapas foram usados apenas como evidência de cobertura, sem download ou redistribuição.
- Estado: pesquisa documental; os registros detalhados estão nos dez lotes regionais e no resumo consolidado.

### Índice individual dos 44 registros normalizados

Campos comuns: 42 entradas originais tiveram aprovação parcial do nome/região pelo usuário em `2026-07-28`; após duas divisões, este índice contém 44 registros normalizados. Fonte de inventário usuário/Fextralife; descoberta complementar RPS; validação independente Wiki.gg; tradução PT-BR não confirmada e, portanto, repetida do inglês. `P` é quantidade de participantes principais. As divergências completas e availability estão no documento regional.

| ID proposto | Nome fornecido | Região | Localização | Nome da barra | P | Barra | Recomendação / estado |
|---|---|---|---|---|---:|---|---|
| `knight-of-the-solitary-gaol-western-nameless-mausoleum` | Blackgaol Knight | gravesite-plain | Western Nameless Mausoleum | Knight of the Solitary Gaol | 1 | confirmed | nome atual adotado / approved |
| `chief-bloodfiend-rivermouth-cave` | Chief Bloodfiend | gravesite-plain | Rivermouth Cave | Chief Bloodfiend | 1 | confirmed | incluir / approved |
| `demi-human-swordmaster-onze-belurat-gaol` | Demi-Human Swordmaster Onze | gravesite-plain | Belurat Gaol | idem | 1 | confirmed | incluir / approved |
| `divine-beast-dancing-lion-belurat` | Divine Beast Dancing Lion | gravesite-plain | Theatre, Belurat | idem | 1 | confirmed | incluir / approved |
| `ghostflame-dragon-gravesite-plain-lake` | Ghostflame Dragon | gravesite-plain | Lake west of Greatbridge, North | idem | 1 | confirmed | incluir / approved |
| `rellana-twin-moon-knight-castle-ensis` | Rellana Twin Moon Knight | gravesite-plain | Castle Ensis | Rellana, Twin Moon Knight | 1 | confirmed | vírgula adotada / approved |
| `red-bear-northern-nameless-mausoleum` | Red Bear | rauh-base | Northern Nameless Mausoleum | Red Bear | 1 | confirmed | transferido de Gravesite Plain / approved |
| `leda-and-allies-cleansing-chamber` | Leda and Allies | gravesite-plain | Cleansing Chamber, Enir-Ilim | Needle Knight Leda e barras variáveis | 2–5 | confirmed | card Needle Knight Leda and Allies / approved |
| `promised-consort-radahn-divine-gate` | Promised Consort Radahn + Radahn Consort of Miquella | gravesite-plain | Divine Gate Front Staircase, Enir-Ilim | Promised Consort Radahn; Radahn, Consort of Miquella | 1 | confirmed | uma batalha/fases / approved |
| `black-knight-edredd-fort-of-reprimand` | Black Knight Edredd | scadu-altus | Fort of Reprimand | idem | 1 | confirmed | incluir / approved |
| `black-knight-garrew-fog-rift-fort` | Black Knight Garrew | scadu-altus | Fog Rift Fort | idem | 1 | confirmed | incluir / approved |
| `count-ymir-cathedral-of-manus-metyr` | Count Ymir, Mother of Fingers | scadu-altus | Cathedral of Manus Metyr | idem | 1 | confirmed | incluir / approved |
| `curseblade-labirith-bonny-gaol` | Curseblade Labirith | scadu-altus | Bonny Gaol | idem | 1 | confirmed | incluir / approved |
| `death-knight-fog-rift-catacombs` | Death Knight | gravesite-plain | Fog Rift Catacombs | idem | 1 | confirmed | transferido de Scadu Altus / approved |
| `dryleaf-dane-moorth-ruins` | Dryleaf Dane | scadu-altus | Moorth Ruins | sem barra inferior | 1 | rejected | excluir / rejected |
| `ghostflame-dragon-moorth-ruins` | Ghostflame Dragon | scadu-altus | Lake south of Moorth Ruins | idem | 1 | confirmed | incluir / approved |
| `golden-hippopotamus-shadow-keep` | Golden Hippopotamus | scadu-altus | Main Gate Plaza, Shadow Keep | idem | 1 | confirmed | incluir / approved |
| `messmer-the-impaler-dark-chamber` | Messmer the Impaler + Base Serpent Messmer | scadu-altus | Dark Chamber, Shadow Keep | ambas as fases | 1 | confirmed | incluir como fases / approved |
| `metyr-mother-of-fingers-finger-birthing-grounds` | Metyr, Mother of Fingers | scadu-altus | Finger Birthing Grounds | idem | 1 | confirmed | incluir / approved |
| `rakshasa-eastern-nameless-mausoleum` | Rakshasa | scadu-altus | Eastern Nameless Mausoleum | idem | 1 | confirmed | incluir / approved |
| `jori-elder-inquisitor-darklight-catacombs` | Jori, Elder Inquisitor | scadu-altus | Darklight Catacombs | idem | 1 | confirmed | incluir / approved |
| `ralva-great-red-bear-scadu-altus-pond` | Ralva the Great Red Bear | scadu-altus | Pond northeast of Highroad Cross | idem | 1 | confirmed | incluir / approved |
| `death-knight-scorpion-river-catacombs` | Death Knight | rauh-base | Scorpion River Catacombs | idem | 1 | confirmed | incluir / approved |
| `rugalea-great-red-bear-rauh-base-forest` | Rugalea the Great Red Bear | rauh-base | Rauh Base forest | idem | 1 | confirmed | incluir / approved |
| `divine-beast-dancing-lion-ancient-ruins-of-rauh` | Divine Beast Dancing Lion | ancient-ruins-of-rauh | Upper ruins | idem | 1 | confirmed | incluir / approved |
| `romina-saint-of-the-bud-church-of-the-bud` | Romina, Saint of the Bud | ancient-ruins-of-rauh | Church of the Bud | idem | 1 | confirmed | incluir / approved |
| `dancer-of-ranah-southern-nameless-mausoleum` | Dancer of Ranah | cerulean-coast | Southern Nameless Mausoleum | idem | 1 | confirmed | incluir / approved |
| `demi-human-queen-marigga-cerulean-coast-west` | Demi-Human Queen Marigga | cerulean-coast | Cerulean Coast West cove | idem | 1 | confirmed | incluir / approved |
| `ghostflame-dragon-cerulean-coast` | Ghostflame Dragon | cerulean-coast | Northern Cerulean Coast | idem | 1 | confirmed | incluir / approved |
| `putrescent-knight-garden-of-deep-purple` | Putrescent Knight | cerulean-coast | Garden of Deep Purple | idem | 1 | confirmed | incluir / approved |
| `death-rite-bird-charos-hidden-grave` | Death Rite Bird | charos-hidden-grave | Northern grave | idem | 1 | confirmed | incluir / approved |
| `lamenter-lamenters-gaol` | Lamenter | charos-hidden-grave | Lamenter's Gaol | idem | 1 | confirmed | incluir / approved |
| `tibia-mariner-charos-hidden-grave` | Tibia Mariner | charos-hidden-grave | Flooded graveyard | idem | 1 | confirmed | incluir / approved |
| `ancient-dragon-man-dragons-pit` | Ancient Dragon-Man | gravesite-plain | Dragon's Pit | idem | 1 | confirmed | transferido de Jagged Peak / approved |
| `ancient-dragon-senessax-jagged-peak-mountainside` | Ancient Dragon Senessax | jagged-peak | Jagged Peak Mountainside | idem | 1 | confirmed | incluir / approved |
| `bayle-the-dread-jagged-peak-summit` | Bayle the Dread | jagged-peak | Jagged Peak Summit | idem | 1 | confirmed | incluir / approved |
| `jagged-peak-drake-jagged-peak-entrance` | Jagged Peak Drake x2 | jagged-peak | Jagged Peak entrance, beyond Dragon's Pit | Jagged Peak Drake | 1 | confirmed | primeira ocorrência / approved |
| `jagged-peak-drake-foot-of-jagged-peak` | Jagged Peak Drake x2 | jagged-peak | Road near Foot of the Jagged Peak | Jagged Peak Drake | 1 | confirmed | segunda ocorrência; outro Drake auxiliar / approved |
| `midra-lord-of-frenzied-flame-discussion-chamber` | Midra Lord of Frenzied Flame | abyssal-woods | Discussion Chamber, Midra's Manse | Midra, Lord of Frenzied Flame | 1 | confirmed | vírgula adotada / approved |
| `fallingstar-beast-fingerstone-hill` | Fallingstar Beast | scaduview | Fingerstone Hill crater | idem | 1 | confirmed | incluir / approved |
| `scadutree-avatar-scadutree-base` | Scadutree Avatar | scaduview | Scadutree Base | idem | 1 | confirmed | incluir, três fases / approved |
| `commander-gaius-scaduview` | Commander Gaius | scaduview | Beyond Shadow Keep Back Gate | idem | 1 | confirmed | incluir / approved |
| `tree-sentinel-hinterland-grace-road` | Tree Sentinel | scaduview | Hinterland road near Hinterland Site of Grace | Tree Sentinel | 1 | confirmed | encontro independente / approved |
| `tree-sentinel-shaman-village-road` | Tree Sentinel | scaduview | Hinterland road toward Shaman Village | Tree Sentinel | 1 | confirmed | encontro independente / approved |

### Região sem encontros

`finger-ruins-of-rhia`: zero encontros confirmados após comparação das fontes; a região continua válida para progresso `0/0` e futuros itens. Metyr permanece em Scadu Altus/Finger Ruins of Miyr.

### Decisões finais da pesquisa da expansão — 2026-07-28

O usuário resolveu explicitamente todas as divergências. Foram preservados nomes originais, fontes e associações históricas:

- `Blackgaol Knight` passou a usar card/barra `Knight of the Solitary Gaol`;
- Rellana e Midra passaram a usar a pontuação exata da barra;
- Red Bear foi transferido de Gravesite Plain para Rauh Base;
- Death Knight de Fog Rift Catacombs e Ancient Dragon-Man foram transferidos para Gravesite Plain;
- Leda usa card `Needle Knight Leda and Allies`, uma unidade com composição variável; aliados do jogador permanecem separados;
- Radahn é uma unidade com duas fases e card `Promised Consort Radahn`;
- `jagged-peak-drake-jagged-peak-occurrences` foi substituído por dois IDs ativos;
- `tree-sentinels-hinterland` foi substituído por dois IDs ativos;
- IDs substituídos não foram publicados e não exigem migração;
- Dryleaf Dane permanece `rejected`, sem barra inferior de chefe.

Consolidação da pesquisa: 42 entradas originais; 44 registros normalizados; 43 ativos `confirmed`; 1 `rejected`.

### Aprovação final do catálogo da expansão — 2026-07-28

O usuário aprovou explicitamente cada um dos 43 encontros ativos listados no índice acima. Para cada ID ativo, a aprovação abrange os nomes original, recomendado e de barra; região; localização; disponibilidade; participantes; fases; summons; auxiliares; unidade; normalizações; fontes e histórico atualmente documentados. Todos passam a estado geral `approved`, mantêm barra `confirmed` e estão prontos para futura inserção no aplicativo.

Dryleaf Dane permanece com barra/estado `rejected` e fora do catálogo ativo. Os IDs coletivos substituídos dos Jagged Peak Drakes e Tree Sentinels permanecem somente como histórico não publicado e não exigem migração. Resultado: 43 `approved`, 0 `pending`, 0 `researched`, 0 `needs-review` e 1 `rejected`.

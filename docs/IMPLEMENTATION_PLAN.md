# Plano de Implementação

## Phase 2 — etapa tipográfica

A primeira etapa funcional da Phase 2 aplica Cinzel Decorative à identidade e
aos títulos e Spectral ao restante da interface. Os sete arquivos estáticos
efetivamente usados são carregados offline por `expo-font`; a splash nativa
existente permanece até fontes e estado essencial estarem prontos. A falha de
carregamento possui fallback controlado e nova tentativa.

Os nomes das famílias e variantes ficam centralizados, e `AppText` e
`AppTextInput` evitam nomes literais espalhados. Esta etapa não altera paleta,
splash visual, animação, Index, dados ou comportamento. A revisão manual foi
concluída e aprovada no Expo Go. Uma etapa futura poderá restringir a fonte
temática caso novas avaliações de legibilidade indiquem essa necessidade.
Mantinia e Agmena permanecem proibidas sem licença comercial apropriada.

## Estado atual — MVP de Feitiços e Encantamentos

O MVP de 84 Feitiços e 129 Encantamentos foi implementado e aprovado na revisão manual no Expo Go. A entrega inclui catálogos tipados, validadores, schema v3, migração, progresso separado, total geral 537, Home, Drawer, listas, busca, filtros Lendárias/Perdíveis, cards, detalhes, spoilers, fallback e testes. Não há dependências novas.

Os campos técnicos não aprovados permanecem fora da produção. As 153 localizações sem evidência suficiente usam um estado explícito de localização pendente.

### Convenção obrigatória para listas gerais

Categorias que possuam uma tela “Todos” com conteúdo Base e DLC reutilizam `OriginFilterButtons`. O estado inicial não seleciona origem; `Base` e `DLC` são exclusivos, podem ser desmarcados por novo toque e intersectam busca e filtros. O progresso acompanha  o pacote visível. A seleção é preservada enquanto a lista permanece montada ao abrir detalhes. Rotas específicas não mostram o controle.

Este plano divide o desenvolvimento do Elden Ring Companion em incrementos pequenos e testáveis. Ao final de cada etapa, o aplicativo deve permanecer executável no Expo Go. Até a arquitetura, a navegação, o armazenamento e a interface estarem validados, devem ser usados apenas poucos dados fictícios e nenhum material protegido do jogo.

## 1. Verificação da estrutura e das dependências atuais

- **Objetivo:** registrar o estado inicial, confirmar Expo SDK 54, Expo Router, TypeScript estrito e compatibilidade com Expo Go.
- **Arquivos:** leitura de `package.json`, `app.json`, `tsconfig.json`, `eslint.config.js`, `app/`, `components/`, `hooks/` e `constants/`; sem alterações esperadas.
- **Dependências:** nenhuma.
- **Resultado esperado:** inventário de rotas, componentes, scripts, dependências existentes e lacunas.
- **Como testar:** iniciar o projeto no Expo Go e navegar pelas telas atuais.
- **Comandos de validação:** `npm install`, `npx expo config --type public`, `npx expo-doctor`, `npx tsc --noEmit`, `npx expo lint`, `npx expo start`.
- **Concluída quando:** a base executa sem regressões e as dependências necessárias estão identificadas.

## 2. Instalação das dependências necessárias

- **Objetivo:** adicionar somente bibliotecas compatíveis com Expo Go para armazenamento, Drawer, desenho do progresso e testes.
- **Arquivos:** `package.json` e `package-lock.json`.
- **Dependências:** `@react-native-async-storage/async-storage`, `@react-navigation/drawer`, `react-native-svg`, `jest-expo` e `@testing-library/react-native`.
- **Resultado esperado:** pacotes resolvidos em versões compatíveis com o SDK instalado.
- **Como testar:** iniciar no Expo Go e confirmar que não há erro de módulo nativo.
- **Comandos de validação:** `npx expo install @react-native-async-storage/async-storage @react-navigation/drawer react-native-svg`; `npx expo install --dev jest-expo @testing-library/react-native`; `npx expo-doctor`; `npx tsc --noEmit`; `npx expo lint`.
- **Concluída quando:** lockfile atualizado, Expo Doctor aprovado e aplicativo inicializando no Expo Go.

## 3. Estrutura de pastas e tipos TypeScript

- **Objetivo:** definir limites de módulos e contratos tipados antes das funcionalidades.
- **Arquivos:** criar `types/`, `data/`, `contexts/`, `services/`, `i18n/`, `theme/`, `components/bosses/` e `components/navigation/`; criar tipos como `types/boss.ts`, `types/settings.ts` e arquivos `index.ts` apenas quando úteis.
- **Dependências:** nenhuma nova.
- **Resultado esperado:** tipos explícitos para região, encontro de chefe, idioma, tema e filtros, sem `any`.
- **Como testar:** importar os tipos em um arquivo neutro ou em testes de compilação, sem mudar a interface.
- **Comandos de validação:** `npx tsc --noEmit`; `npx expo lint`; `npx expo start`.
- **Concluída quando:** a estrutura é coerente, não há dependências circulares e o aplicativo continua executável.

## 4. Temas claro e escuro

- **Objetivo:** criar tokens semânticos para temas Sistema, Claro e Escuro, inspirados na paleta definida.
- **Arquivos:** `theme/colors.ts`, `theme/themes.ts`, `types/settings.ts`, `constants/theme.ts` e componentes temáticos existentes.
- **Dependências:** nenhuma nova.
- **Resultado esperado:** cores tipadas para fundo, superfície, texto, borda, destaque dourado, musgo e estados de interação.
- **Como testar:** renderizar componentes existentes nos esquemas claro e escuro do sistema, verificando contraste e legibilidade.
- **Comandos de validação:** `npx tsc --noEmit`; `npx expo lint`; `npx expo start`.
- **Concluída quando:** ambos os temas funcionam sem cores ilegíveis e sem copiar elementos visuais do jogo.

## 5. Internacionalização em português e inglês

- **Objetivo:** oferecer traduções globais tipadas sem adicionar complexidade desnecessária.
- **Arquivos:** `i18n/translations/pt-BR.ts`, `i18n/translations/en.ts`, `i18n/index.ts`, `contexts/locale-context.tsx` e tipos relacionados.
- **Dependências:** nenhuma nova; usar dicionários TypeScript e Context inicialmente.
- **Resultado esperado:** chaves equivalentes nos dois idiomas e função de tradução com fallback seguro.
- **Como testar:** alternar temporariamente o idioma em ambiente de desenvolvimento e conferir textos básicos nos dois idiomas.
- **Comandos de validação:** `npx tsc --noEmit`; `npx expo lint`; testes unitários das chaves; `npx expo start`.
- **Concluída quando:** toda chave possui tradução em ambos os idiomas e a troca atualiza a interface de teste.

## 6. Armazenamento com AsyncStorage

- **Objetivo:** encapsular persistência local e offline para progresso, idioma e tema.
- **Arquivos:** `services/storage.ts`, `services/storage-keys.ts`, `types/storage.ts` e testes.
- **Dependências:** `@react-native-async-storage/async-storage`, instalada na etapa 2.
- **Resultado esperado:** funções tipadas de leitura, escrita e limpeza, com versionamento básico e tratamento de dados ausentes ou inválidos.
- **Como testar:** testes com mock do AsyncStorage e verificação manual após recarregar o aplicativo.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`; `npx expo start`.
- **Concluída quando:** valores persistem, erros não derrubam o app e somente as chaves do aplicativo são removidas.

## 7. Estado global do aplicativo

- **Objetivo:** centralizar idioma, tema, chefes derrotados e estado de hidratação.
- **Arquivos:** `contexts/app-context.tsx`, `hooks/use-app.ts`, `app/_layout.tsx` e testes.
- **Dependências:** nenhuma nova; usar Context e `useReducer`.
- **Resultado esperado:** API única e tipada para preferências, progresso, alternância de chefe e reset.
- **Como testar:** validar hidratação, atualizações imutáveis e persistência por testes e reinício manual.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`; `npx expo start`.
- **Concluída quando:** o estado é restaurado antes da interface principal e as ações não geram inconsistências.

## 8. Navegação com Drawer

- **Objetivo:** substituir a navegação de exemplo por Drawer com Home, Bosses expansível e Configurações.
- **Arquivos:** `app/_layout.tsx`, novas rotas em `app/index.tsx`, `app/settings.tsx`, `app/regions/[regionId].tsx`, `components/navigation/app-drawer.tsx`; remover rotas de exemplo somente após confirmar que não são mais usadas.
- **Dependências:** `@react-navigation/drawer`, Gesture Handler e Reanimated, já instaladas.
- **Resultado esperado:** Drawer abre no Android, apresenta regiões fictícias sob Bosses e navega por identificador.
- **Como testar:** abrir e fechar o Drawer, expandir Bosses, visitar cada rota e usar o botão Voltar.
- **Comandos de validação:** `npx tsc --noEmit`; `npx expo lint`; `npx expo start --android`.
- **Concluída quando:** todas as rotas são acessíveis, o deep link regional é válido e o Expo Go não apresenta erros.

## 9. Tela Home

- **Objetivo:** exibir progresso total e por região a partir do estado global.
- **Arquivos:** `app/index.tsx`, `components/progress/progress-circle.tsx`, `components/progress/region-progress.tsx` e testes.
- **Dependências:** `react-native-svg`, instalada na etapa 2.
- **Resultado esperado:** círculo, porcentagem, razão derrotados/total e lista regional responsiva.
- **Como testar:** usar estados vazios e fictícios, incluindo 0%, valores intermediários e 100%.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`; `npx expo start --android`.
- **Concluída quando:** os cálculos são corretos, zero itens não causa divisão inválida e a tela é legível nos dois temas.

## 10. Estrutura dos dados de regiões e chefes

- **Objetivo:** validar o modelo local com poucos encontros fictícios, sem incluir a lista real completa.
- **Arquivos:** `data/regions.ts`, `data/bosses.ts`, `types/boss.ts` e testes de integridade.
- **Dependências:** nenhuma nova.
- **Resultado esperado:** IDs estáveis, traduções PT/EN, localização, região e encontros separados por local.
- **Como testar:** checar IDs únicos, referências regionais válidas e traduções completas.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`.
- **Concluída quando:** a amostra fictícia alimenta navegação e interface sem depender de dados reais ou protegidos.

## 11. Página de região com busca e filtros

- **Objetivo:** listar cards e combinar busca por nome com filtros Todos, Derrotados e Não derrotados.
- **Arquivos:** `app/regions/[regionId].tsx`, `components/bosses/boss-card.tsx`, `components/bosses/boss-filters.tsx`, `components/bosses/boss-search.tsx` e testes.
- **Dependências:** nenhuma nova.
- **Resultado esperado:** lista localizada, estados vazio/sem resultados e filtragem previsível.
- **Como testar:** pesquisar nos dois idiomas e combinar cada filtro com termos encontrados e inexistentes.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`; `npx expo start --android`.
- **Concluída quando:** busca e filtros funcionam juntos, não alteram os dados e mantêm desempenho aceitável.

## 12. Marcação de chefes derrotados

- **Objetivo:** permitir marcar e desmarcar encontros e refletir a mudança em toda a aplicação.
- **Arquivos:** `components/bosses/boss-card.tsx`, `contexts/app-context.tsx`, `services/storage.ts`, telas Home/região e testes.
- **Dependências:** nenhuma nova.
- **Resultado esperado:** cada encontro é atualizado pelo ID e persiste após fechar ou recarregar o aplicativo.
- **Como testar:** alternar vários cards, conferir totais na Home, reiniciar e confirmar os mesmos estados.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`; `npx expo start --android`.
- **Concluída quando:** não há colisão entre encontros, totais permanecem corretos e a persistência é confiável.

## 13. Tela de Configurações

- **Objetivo:** disponibilizar seleção global de idioma e tema.
- **Arquivos:** `app/settings.tsx`, `components/settings/language-selector.tsx`, `components/settings/theme-selector.tsx`, contexto, traduções e testes.
- **Dependências:** nenhuma nova.
- **Resultado esperado:** opções Português/Inglês e Sistema/Claro/Escuro aplicadas imediatamente e persistidas.
- **Como testar:** alternar todas as combinações, reiniciar e alterar o tema do sistema quando a opção Sistema estiver ativa.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`; `npx expo start --android`.
- **Concluída quando:** a interface inteira acompanha idioma e tema, inclusive Drawer, títulos e dados fictícios.

## 14. Confirmação para zerar o progresso

- **Objetivo:** adicionar reset protegido contra acionamento acidental.
- **Arquivos:** `app/settings.tsx`, `components/settings/reset-progress-button.tsx`, contexto, armazenamento, traduções e testes.
- **Dependências:** nenhuma nova; usar `Alert` do React Native.
- **Resultado esperado:** diálogo localizado com Cancelar e Confirmar; somente o progresso é zerado, preservando idioma e tema.
- **Como testar:** cancelar sem mudanças; confirmar e verificar Home, regiões e persistência após reinício.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`; `npx expo start --android`.
- **Concluída quando:** não há reset sem confirmação e preferências permanecem intactas.

## 15. Testes, acessibilidade e validações

- **Objetivo:** consolidar qualidade funcional, acessibilidade e compatibilidade antes de dados reais.
- **Arquivos:** testes `*.test.ts(x)`, componentes que precisem de rótulos/roles, configuração de testes em `package.json` ou arquivo dedicado e documentação técnica.
- **Dependências:** Jest Expo e Testing Library, instaladas na etapa 2.
- **Resultado esperado:** cobertura dos cálculos, filtros, persistência, contexto e fluxos críticos; alvos de toque e rótulos adequados.
- **Como testar:** executar suíte, usar leitor de tela/inspector de acessibilidade, testar fontes ampliadas, temas, idiomas, modo offline e aparelho Android.
- **Comandos de validação:** `npm test -- --runInBand`; `npx tsc --noEmit`; `npx expo lint`; `npx expo-doctor`; `npx expo config --type public`; `npx expo start --android`.
- **Concluída quando:** validações passam, fluxos críticos têm testes e não existem bloqueios graves de acessibilidade ou Expo Go.

## 16. Preparação futura para publicação na Google Play

- **Objetivo:** revisar prontidão de identidade, direitos autorais, privacidade e build, sem publicar.
- **Arquivos:** `app.json`, futura configuração EAS, documentos de privacidade, avisos legais e assets próprios/licenciados; nenhum segredo deve ser versionado.
- **Dependências:** nenhuma nova nesta etapa; EAS CLI deve ser avaliado apenas quando o build for autorizado.
- **Resultado esperado:** checklist de publicação, identificação como projeto não oficial de fãs e plano de substituição de placeholders.
- **Como testar:** validar configuração pública, build de pré-lançamento autorizado e checklist da Play Console em ambiente interno.
- **Comandos de validação:** `npx expo config --type public`; `npx expo-doctor`; `npx tsc --noEmit`; `npx expo lint`; futuramente, após autorização, comandos EAS adequados.
- **Concluída quando:** package e identidade estão corretos, materiais possuem licença, política de privacidade está definida e não há promessa de publicação automática.

## Entrada dos dados reais

A lista completa de regiões e encontros reais não faz parte destas 16 etapas iniciais. Ela deverá ser planejada e revisada somente depois que navegação, armazenamento, internacionalização e interface estiverem estáveis. A inclusão exigirá fontes verificáveis, revisão das traduções, IDs permanentes, validação de duplicidades por localização e cuidado para não incorporar conteúdo protegido além de informações factuais necessárias.
# Etapa do catálogo real isolado

Histórico concluído: geração validada de 26 regiões e 208 encontros em `src/data/catalog`, inicialmente paralela aos dados temporários. As pendências daquele momento foram resolvidas na etapa de integração abaixo.

# Etapa de integração do catálogo real

Concluída: o catálogo real passou a alimentar Drawer, Home, página geral e páginas regionais. Os módulos temporários de produção foram removidos, e a migração versionada do progresso descarta IDs `sample-*` sem remover IDs reais desconhecidos nem modificar idioma ou tema.

A revisão manual no Expo Go confirmou os 26 registros regionais, os 208 encontros, agrupamentos, navegação, busca, filtros, persistência, reset, idiomas, temas, estados vazios e unidades especiais de acompanhamento. Nenhuma correção visual ou funcional foi necessária. O progresso de teste foi removido, idioma e tema foram preservados e o servidor Expo foi encerrado.

Próxima etapa: planejar a tela de detalhes dos encontros e, posteriormente, iniciar a pesquisa e modelagem dos itens do jogo.

# Etapa da tela de detalhes dos encontros

Implementação e revisão manual concluídas com sucesso no Expo Go. A rota `app/bosses/[bossId].tsx` exibe os dados estruturados já aprovados, mantém um único progresso por encontro e separa participantes, fases, summons e auxiliares. Os cartões regionais possuem uma ação explícita de detalhes independente do controle de progresso.

Durante a revisão manual, o retorno do detalhe caiu na Home porque região e detalhe eram telas irmãs do Drawer, sem uma pilha entre elas. A navegação foi corrigida com uma Stack raiz e o Drawer em `(drawer)`. O detalhe agora é empilhado sobre a região; cabeçalho, botão físico e gesto retornam pela mesma pilha. A ação adicional de retorno regional foi removida, e acessos diretos usam a região do encontro como fallback seguro.

Uma revisão seguinte encontrou `Unmatched Route` na sequência Bosses → All regions → Home. A causa era o uso de `/(drawer)/index` como caminho público. A correção substituiu URLs globais e `push` do menu pelos nomes registrados no Drawer: `index`, `bosses`, `settings` e `regions/[regionId]`. Home, All regions, Settings e os 26 destinos regionais foram validados sem novas ocorrências conhecidas de `Unmatched Route`.

Foram validados manualmente os dados básicos e opcionais dos detalhes, o progresso e sua sincronização, os encontros especiais, os estados simples, os dois idiomas, os três temas, o retorno padrão e físico para a região e a preservação da lista. O progresso de revisão foi removido, deixando `0/208`. Catálogo, armazenamento e formato de progresso não foram alterados.

Próxima etapa: planejar a pesquisa e a modelagem dos itens do jogo, reutilizando as 26 regiões já aprovadas.

# Etapa de navegação alfabética e listas compactas

Implementação e revisão manual concluídas com sucesso. Regiões e chefes agora são ordenados alfabeticamente pelo nome localizado em `pt-BR` ou `en`, com desempate estável pelo ID. `displayOrder` permanece como metadado, mas deixou de controlar a ordem visual. Fases, participantes, summons, auxiliares e demais sequências significativas preservam sua ordem.

O Drawer passou a funcionar como acordeão, removeu All regions e oferece All bosses como primeiro item de cada grupo. As rotas `/all-bosses/base-game` e `/all-bosses/shadow-of-the-erdtree` mostram, respectivamente, 165 e 43 encontros.

A Home mantém o progresso geral dos 208 encontros e apresenta somente os cartões Base game e Shadow of the Erdtree. A página regional usa o título Progresso da Região sem repetir o nome do cabeçalho, e seus cartões exibem somente nome, localização, detalhes e controle de progresso.

A revisão no Expo Go confirmou a Home simplificada, o acordeão do Drawer, as listas e páginas regionais, as duas telas Todos os chefes, busca, filtros, detalhes, retorno preservado, sincronização de progresso, temas e ausência de rotas inválidas.

## Ajustes visuais de progresso e status

O progresso da página regional passou a exibir `derrotados/total` à esquerda e percentual à direita na mesma linha, mantendo a barra abaixo. Regiões sem encontros continuam mostrando `0/0` e `0%`.

Todos os cards de chefes das páginas regionais e das telas All bosses receberam indicadores decorativos de estado: `⚔` para não derrotado e `✓` para derrotado. O botão de progresso continua sendo a única ação de alteração, e os cards permanecem compactos sem reintroduzir dados detalhados.

A revisão manual confirmou os indicadores `⚔` e `✓` como elementos visuais não interativos, ocultos da árvore de acessibilidade, sincronizados com atualização otimista, persistência e rollback, sem sobreposição em nomes longos.

## Padronização horizontal de todos os cards de progresso

O componente compartilhado de progresso agora torna obrigatório o seguinte layout: `concluído/total` à esquerda, porcentagem à direita, ambos na mesma linha, e barra abaixo. A Home e as duas telas Todos os chefes foram corrigidas; as páginas regionais já seguiam o padrão e permanecem visualmente consistentes.

O padrão cobre total zero, progresso parcial, conclusão integral, telas estreitas e fontes ampliadas. Razão e porcentagem empilhadas ou centralizadas em conjunto não devem ser reintroduzidas em cards futuros. A opção de layout empilhado foi removida, e a revisão manual confirmou o alinhamento em todas as telas e a barra abaixo dos valores.

O reset final deixou o progresso em `0/208`, `0/165` e `0/43`, preservando idioma e tema. Não há problemas conhecidos de navegação nem ocorrências de `Unmatched Route`.

Próxima etapa: Planejar a pesquisa e a modelagem dos itens do jogo, reutilizando as 26 regiões aprovadas e a regra de ordenação alfabética.

# Etapa planejada — implementação das Cinzas da Guerra

O usuário aprovou provisoriamente as 116 entradas documentais para implementação, mantendo explícitas todas as pendências editoriais. A implementação será dividida em incrementos: catálogo de produção; seletores e fallback; armazenamento v2 e migração; progresso combinado; Todos os chefes geral; listas/cards de Cinzas; detalhes; Home; Drawer; traduções/acessibilidade; testes; revisão manual; documentação; e commit somente após autorização.

O plano detalhado, com arquivos, dependências, riscos, testes, critérios de conclusão e rollback por etapa, está em `docs/ASHES_OF_WAR_IMPLEMENTATION_PLAN.md`.

O primeiro incremento foi concluído: catálogo de produção das 116 Cinzas, tipos, índice, seletores localizados, fallback, ordenação, validadores e testes. Interface e armazenamento ainda não foram alterados.

Próxima etapa: Implementar os seletores de progresso e a migração versionada para incluir collectedAshOfWarIds, preservando integralmente o progresso existente dos chefes.
## Progresso v2 concluído

Foram implementadas a migração v1 para v2, a persistência coordenada de
`collectedAshOfWarIds`, as operações otimistas com rollback e os seletores de
progresso de Chefes, Cinzas e total combinado (324). A interface não foi
alterada.

Próxima etapa: Implementar a nova tela geral de Todos os Chefes com 208 encontros divididos em Jogo base e Shadow of the Erdtree, sem alterar ainda a Home ou o Drawer.
## Todos os Chefes geral concluído

Foi criada a rota `/all-bosses`, mantendo as duas rotas específicas existentes.
A tela apresenta progresso único de 208 encontros e duas seções, com busca,
filtros, ordenação localizada e estado preservado ao retornar dos detalhes.
Home e Drawer permanecem inalterados e a revisão manual está pendente.

Próxima etapa: Implementar as três telas de Cinzas da Guerra e o card compacto com indicador de fantasma, sem alterar ainda a Home ou o Drawer.
## Listas e detalhes das Cinzas concluídos

As três listas e os detalhes das 116 Cinzas da Guerra foram implementados sobre
o catálogo e o progresso v2 existentes. Busca, filtros, ordenação, fallback,
coleta otimista, rollback e retorno preservado possuem cobertura automatizada.
Revisão manual pendente.

Próxima etapa: Integrar a Home e o Drawer às novas telas gerais de Chefes e Cinzas da Guerra, mantendo o acordeão mutuamente exclusivo entre categorias.
## Home e Drawer por categoria

Implementados o progresso combinado de 324 na Home, os dois cards de categoria
e a navegação completa do Drawer para Todos os chefes, listas por pacote,
regiões e as três listas de Cinzas da Guerra. Os acordeões principais são
mutuamente exclusivos e o estado ativo é determinado pelas rotas públicas.

Próxima etapa:
`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`

## Finalização das Cinzas da Guerra

Catálogo, progresso v2, tela geral de Chefes, listas e detalhes de Cinzas, Home
e Drawer estão implementados. A revisão manual foi concluída, o estado de
progresso foi limpo e não há regressão conhecida. A suíte deve conservar todos
os testes específicos; remoção, consolidação indevida ou desativação de testes
continua proibida.

## Encerramento da pesquisa pt-BR das Cinzas da Guerra

Em 2026-07-28, o usuário decidiu encerrar esta linha de pesquisa sem autorizar
instalação ou download de ferramentas, extração dos arquivos do jogo ou
capturas iniciando o Elden Ring. A instalação Steam/Windows foi identificada
com App ID `1245620`, Build ID `22984413` e executável `2.6.2.0`, mas
nenhuma ferramenta adequada para BHD/BDT, DCX/BND/FMG e regulation estava
instalada.

Nenhum campo pt-BR foi confirmado por evidência direta. Os 91 candidatos de
nome do jogo base permanecem `probable`; habilidades, afinidades, tipos e
compatibilidades permanecem `pending`. A pesquisa não deve ser apresentada
como concluída ou oficialmente validada. O catálogo de produção, IDs e
progresso não foram alterados, o fallback inglês permanece ativo e nenhuma
alteração funcional é necessária. O aplicativo permanece estável com os dados
atuais.

O checklist de 455 capturas fica arquivado somente como referência, sem trabalho
pendente imediato. A pesquisa só poderá ser retomada mediante nova autorização
explícita.

Próxima etapa:
`Manter o fallback em inglês para as Cinzas da Guerra e retomar a validação oficial pt-BR somente mediante nova autorização explícita do usuário.`

## Phase 2 — identidade cromática

Implementados tokens semânticos com paridade entre temas Claro e Escuro,
navegação e Drawer estruturais em verde profundo, dourado controlado, estados
de sucesso/aviso/erro, inputs, seleção, foco e progresso. O tema Sistema
continua seguindo a preferência do sistema sem mudança de persistência. Testes
de contraste e contrato do tema protegem a implementação. Revisão manual no
Expo Go pendente; splash visual, Index e demais etapas da Phase 2 não fazem
parte deste incremento.

## Phase 2 — splash e identidade gráfica

Implementados o emblema vetorial original, PNGs transparentes, configuração
nativa pelo `expo-splash-screen` e overlay animado coordenado com fontes e
hidratação. A splash permanece visível por no mínimo 3.000 ms desde o bootstrap;
somente o restante é aguardado quando a inicialização termina cedo e nenhuma
espera extra é adicionada quando ela demora mais. Depois, a saída usa opacidade e
escala discreta por 500 ms e respeita redução de movimento com fade de 100 ms.
O temporizador centralizado é cancelado ao desmontar. Erros de fonte continuam
oferecendo nova tentativa, que reinicia o ciclo previsivelmente. A splash nativa
deverá ser validada posteriormente em build Android instalado.

A revisão manual encontrou corte bilateral do título, emblema excessivo e grupo
deslocado para cima. O ativo nativo foi recomposto de forma compacta e passou a
usar `imageWidth` 260 com `contain`. O overlay agora separa emblema e `AppText`
em grupo centralizado dentro da área segura, com limites responsivos de largura,
altura, título e escala máxima de 1,015. A revisão manual no Expo Go foi
concluída e aprovada. A validação nativa permanece planejada para um build
Android instalado.

## Phase 2 — grupo responsivo compartilhado de filtros

As listas de Chefes, Cinzas da Guerra, Feitiços e Encantamentos passam a compor
seus filtros no componente compartilhado `FilterButtonGroup`. O grupo usa `View`
com quebra automática, cresce verticalmente, não comprime chips e não interfere
na rolagem vertical da lista. `OriginFilterButtons` mantém sua lógica e fornece
botões diretamente para composição com filtros de estado, Lendárias e Perdíveis.

Para categorias futuras, qualquer conjunto de dois ou mais filtros deverá
reutilizar a mesma estrutura, com quantas linhas forem necessárias, estados
acessíveis individuais, Spectral e tokens semânticos nos temas
Claro/Escuro/Sistema. Controles nunca devem ser cortados nem exigir rolagem
horizontal. A lógica de busca, seleção e interseção permanece fora do componente
visual. A revisão manual no Expo Go foi concluída e aprovada.

## Phase 2 — estrutura inicial do Index

Adicionar `Index` imediatamente antes de `Settings`, mantendo a exclusividade
dos grupos do Drawer. O grupo é somente um accordion, sem subopção homônima e
sem rota própria; `app/(drawer)/index.tsx` continua sendo a Home em `/`. A
estrutura inicial contém somente `Remembrance Bosses`, `Base Game` e `DLC`,
com rotas iniciadas diretamente em `/remembrance-bosses`, intermediária funcional e
páginas finais em estado vazio. O card de Chefes da Home continua abrindo
`/all-bosses`. Os textos novos permanecem em inglês e nenhuma entrada real,
imagem, busca, filtro, lore ou dado técnico é antecipado. A configuração tipada
permite acrescentar categorias futuras somente após aprovação. A retirada de
`Index` é somente o nome visual do grupo do Drawer. A retirada de
`app/(drawer)/index/index.tsx` preserva a Home atual e evita padrões duplicados.
Revisão manual novamente
pendente.

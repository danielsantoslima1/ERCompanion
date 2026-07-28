# Plano de Implementação

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

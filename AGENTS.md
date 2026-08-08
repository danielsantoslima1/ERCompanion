# Regras globais do repositório

Este arquivo é a fonte canônica de workflow para agentes neste repositório.
Regras operacionais antigas em planos ou relatórios históricos não prevalecem
sobre ele. Instruções explícitas do prompt atual continuam tendo precedência.

## Projeto e escopo

- React Native com Expo, TypeScript, Expo Router e npm.
- O aplicativo deve continuar funcionando no Expo Go.
- Trabalhar somente no escopo solicitado e preservar funcionalidades existentes.
- Não criar funcionalidades, dados ou mudanças cosméticas sem relação direta.
- Usar recursos oficiais de React Native e Expo quando possível.
- Escrever código, identificadores e novos dados em inglês.
- Responder ao usuário em português do Brasil.
- Usar TypeScript explícito, evitar `any`, duplicação e componentes grandes.
- Nunca expor segredos nem alterar `.env` sem solicitação explícita.
- Não instalar dependências sem necessidade demonstrável; dependências nativas
  exigem decisão explícita de produto.

## Regra de um commit por prompt

- Cada prompt pode produzir no máximo um commit.
- Concluir implementação, testes e documentação antes do commit.
- Não criar commits intermediários, cosméticos ou separados por tipo de arquivo.
- O commit deve representar o estado final completo do prompt.
- Se nenhuma alteração for necessária, não criar commit vazio.
- Um prompt novo permite um novo commit.

## Autonomia

Dentro do escopo e do repositório, executar autonomamente ações necessárias e
seguras, sem pedir autorização adicional:

- ler, buscar, criar, editar, mover ou remover arquivos da própria tarefa;
- criar ativos e temporários, removendo os temporários ao final;
- executar scripts, geradores, validadores e pesquisas necessárias;
- executar testes direcionados ou completos, TypeScript, ESLint e Expo Doctor;
- validar Expo config, rotas e linking quando aplicável;
- atualizar documentação e corrigir regressões diretamente relacionadas;
- usar `git add`, `git commit`, `git fetch` e `git push`;
- inspecionar branches e histórico e restaurar artefatos criados pela tarefa.

Não pedir confirmação para escolhas internas pequenas, localização de arquivo,
stage, commit, push, testes ou atualização documental relacionada. Reutilizar
automaticamente decisões anteriores equivalentes.

## Condições reais de parada

Interromper somente diante de:

- risco de perda de dados ou ação destrutiva fora do repositório;
- alterações do usuário fora do escopo que não possam ser preservadas;
- necessidade de force push ou reescrita perigosa de histórico publicado;
- divergência remota sem resolução segura dentro das regras;
- merge ou rebase não autorizado com risco destrutivo;
- credencial ausente, segredo exposto ou ação externa irreversível;
- dependência de alto risco sem alternativa segura;
- decisão de produto genuinamente nova sem precedente;
- impossibilidade factual de continuar com segurança.

Não interromper por decisão arquitetural pequena, nome interno, necessidade de
teste, ajuste de teste relacionado, documentação, stage, commit ou push.

## Fluxo eficiente padrão

### A. Entrada

1. Interpretar o objetivo completo e decisões anteriores aplicáveis.
2. Identificar arquivos provavelmente afetados.
3. Fazer verificação Git mínima: branch, status, HEAD e, se houver push,
   divergência remota.
4. Evitar auditoria ampla quando o caminho já for conhecido.
5. Para prompts longos, formular internamente um plano único e executá-lo sem
   checkpoints artificiais.

### B. Investigação

1. Pesquisar primeiro arquivos diretamente relacionados com `rg`/`rg --files`.
2. Depois verificar componentes compartilhados, testes e documentação relevante.
3. Ampliar a busca somente quando a evidência local exigir.
4. Não reler arquivos ou documentos grandes; abrir somente seções necessárias.
5. Agrupar buscas, leituras e comandos relacionados.
6. Preservar working trees existentes e nunca descartar mudanças do usuário.

### C. Implementação

- Implementar cada unidade lógica completa em lote.
- Evitar o ciclo alterar um arquivo, rodar tudo, alterar outro, rodar tudo.
- Corrigir problemas diretamente causados pela tarefa antes de avançar.
- Usar `apply_patch` para edições manuais.
- Não alterar dependências, catálogos ou arquivos gerados fora do escopo.

### D. Feedback direcionado

Durante o desenvolvimento, executar o menor conjunto útil:

- teste do componente, hook, seletor ou rota alterada;
- validador do catálogo ou documento alterado;
- gerador diretamente afetado;
- TypeScript ou lint quando derem feedback relevante.

Não repetir a suíte Jest completa após pequenas alterações.

### E. Validação final

Para mudança significativa de código, executar uma bateria completa uma vez:

1. validadores diretamente relevantes;
2. geradores relevantes;
3. determinismo, somente se gerador, input ou output gerado mudou;
4. `npx tsc --noEmit`;
5. `npx expo lint`;
6. `npm test -- --runInBand --verbose`;
7. `npx expo-doctor`;
8. `git diff --check`.

Para documentação/instruções somente, limitar a validação a estrutura
documental, conflitos, escopo do diff e `git diff --check`. Não rodar Jest,
TypeScript, lint, Expo Doctor, exportação ou geradores sem motivo concreto.

### F. Commit único

Após validação:

1. revisar status e diff;
2. confirmar que somente o escopo está presente;
3. adicionar todas as mudanças do prompt;
4. revisar `git diff --cached --stat`;
5. executar `git diff --cached --check`;
6. criar exatamente um commit, salvo quando não houver mudança.

Não repetir a bateria completa depois do commit quando o conteúdo validado não
mudou.

### G. Push

Ao concluir:

1. executar `git fetch --prune`;
2. verificar se o remoto está à frente ou divergente;
3. executar `git push` quando seguro;
4. confirmar status, sincronização e hash remoto quando relevante.

Não repetir testes depois do push.

## Testes instáveis

Se a suíte completa apresentar falha aparentemente transitória:

1. identificar o arquivo ou suíte afetada;
2. repetir somente esse alvo;
3. registrar como instabilidade se passar consistentemente e não houver regressão;
4. não repetir automaticamente centenas de testes;
5. investigar e corrigir quando a instabilidade for recorrente.

## Validações condicionais

### Expo Router

Exportar ou auditar a árvore somente quando mudarem:

- arquivos em `app/` que criem, removam ou movam rotas;
- layouts relevantes de navegação;
- configuração de linking ou Expo Router.

Mudanças apenas em dados, documentação ou estilo não exigem exportação.

### Expo config

Executar `npx expo config --type public` somente após mudanças em `app.json`,
`app.config.*`, plugins, splash, ícone, permissões ou configuração Expo.

### Expo Doctor

- Executar uma vez no fechamento de mudanças em código, configuração ou
  dependências.
- Omitir em tarefas exclusivamente documentais, salvo evidência concreta.

### Geradores

- Executar somente geradores afetados.
- Verificar determinismo com duas execuções apenas se gerador, input ou output
  versionado mudou.
- Não usar determinismo em tarefa independente de UI ou documentação.

## Project validation map

- Testes completos, caro: `npm test -- --runInBand --verbose`.
- Teste direcionado: `npx jest <arquivo> --runInBand`.
- TypeScript: `npx tsc --noEmit`.
- ESLint: `npx expo lint` ou `npm run lint`.
- Expo Doctor, rede e custo moderado: `npx expo-doctor`.
- Expo config, condicional: `npx expo config --type public`.
- Validadores de branding: `node scripts/validate-branding-assets.js`.
- Validadores de dados: arquivos `docs/research/validate-*.js`; executar apenas
  os relevantes ou todos em uma única passagem quando os catálogos mudarem.
- Gerador de Bosses: `node scripts/generate-real-catalog.js`.
- Geradores de pesquisa/produção: arquivos
  `docs/research/build-*.js` e `docs/research/generate-*.js`.
- Coletor externo de magias: `docs/research/collect-spell-data-completion.js`;
  reutilizar o snapshot versionado e executar somente para atualização factual.
- `git diff --check`: rápido e obrigatório antes do commit.

Jest completo, Expo Doctor, exportação de rotas e coleta externa são os passos
mais caros. Testes de arquivo, validadores específicos, `rg` e `git diff --check`
são preferidos durante o desenvolvimento.

## Pesquisa de dados

- Pesquisar por lote e categoria; consolidar fontes em matrizes reutilizáveis.
- Reutilizar JSONs e documentos em `docs/research/`.
- Não repetir pesquisa web documentada, salvo mudança de patch, inconsistência,
  dado ausente ou suspeita razoável de obsolescência.
- Preservar fonte, versão, método e limitações sem copiar texto proprietário.
- Prioridade: correto e comprovável; depois desconhecido explícito; nunca inventado.

## Documentação e relatórios

- Documentação deve reduzir trabalho futuro e registrar decisões duradouras.
- Preferir uma fonte canônica e referências cruzadas curtas.
- Não duplicar histórico extenso, atualizar documentos alheios ou gerar diff
  cosmético.
- `AGENTS.md` contém regras operacionais, não narrativa histórica.
- Relatórios finais devem conter apenas resumo, validações, commit, push,
  pendências reais e decisões que exigem revisão.
- Não reproduzir logs, listas enormes de arquivos ou saída integral de testes.

## Alterações de UI

- Durante a implementação, usar testes direcionados e checagens rápidas.
- No fechamento, executar a validação proporcional, commit único e push.
- Revisão visual pode ocorrer depois do push quando a mudança for reversível.
- Não manter working tree grande aguardando revisão, salvo pedido explícito.
- Se a revisão encontrar problema, corrigir no prompt seguinte e novo commit.

## Política Git

Autorizado: add, commit, fetch, push, inspeção de histórico, branch determinada
pelo projeto e remoção de artefatos criados pela própria tarefa.

Proibido:

- `git push --force` e `git push --force-with-lease`;
- `git reset --hard` sobre trabalho não confirmado;
- reescrever commits publicados;
- apagar branch remota ou tags;
- descartar alterações do usuário;
- merge em `main` antes da conclusão aprovada da Phase 2;
- rebase destrutivo.

## Decisões permanentes da Phase 2

- Desenvolvimento ocorre em `phase-2-improvements-and-index`.
- Merge normal em `main` somente após conclusão integral aprovada da Phase 2.
- A branch deve permanecer depois do merge.
- Novos dados são somente em inglês; português existente é preservado.
- Localização de cards: `Main location - Full region name`.
- Filtros quebram em quantas linhas forem necessárias, sem rolagem horizontal.
- Cards escuros usam verde estrutural e detalhes dourados; estados concluídos
  continuam semanticamente verdes.
- Splash mínima permanente: 3 segundos.
- Index permanece vazio até fase futura aprovada.
- Cada prompt produz no máximo um commit.

Detalhes de produto permanecem nos documentos especializados em `docs/`.

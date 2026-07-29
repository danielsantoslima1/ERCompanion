# Plano técnico de implementação — Cinzas da Guerra

## 1. Status e limites

Este documento planeja a implementação futura do catálogo provisoriamente aprovado de 116 Cinzas da Guerra:

- 91 do jogo base;
- 25 de `Shadow of the Erdtree`;
- 116 unidades de progresso, sem duplicações;
- 208 encontros de chefes já existentes;
- 324 unidades no progresso geral futuro.

A aprovação é suficiente para implementar, mas não transforma as pendências editoriais em fatos resolvidos. Nomes e textos pt-BR ausentes continuarão usando inglês como fallback, custos de FP desconhecidos continuarão nulos e as seis localizações marcadas para normalização continuarão identificadas como pendentes.

Esta etapa não implementa catálogo de produção, interface, armazenamento, migração, rotas ou componentes.

## 2. Arquitetura proposta

A implementação será dividida em cinco limites:

1. **Catálogo de produção:** dados factuais offline, tipos, validação e índices.
2. **Domínio e seletores:** localização com fallback, busca, ordenação, filtros e progresso.
3. **Persistência e estado:** schema de progresso v2, migração, filas, atualização otimista e rollback.
4. **Navegação e interface:** listas, cards, detalhes, Home e Drawer.
5. **Validação:** testes automatizados, Expo Doctor e revisão manual no Expo Go.

O catálogo de Cinzas ficará ao lado do catálogo de chefes, sem transformar `BossEncounter` em um tipo genérico. Chefes e Cinzas compartilham apenas funções e componentes que representem comportamento realmente igual.

### Fluxo de dados

```text
catálogo imutável
  -> índices e seletores
  -> contexto com IDs coletados
  -> listas/cards/detalhes
  -> mutação otimista
  -> persistência v2
  -> confirmação ou rollback

chefes + Cinzas
  -> resumos por categoria
  -> soma de concluídos e totais
  -> progresso geral da Home (324)
```

## 3. Catálogo de produção

### 3.1 Arquivos recomendados

- `src/data/catalog/ashesOfWar.ts`: 116 registros imutáveis.
- `src/data/catalog/types.ts`: novos tipos compartilhados de catálogo.
- `src/data/catalog/validators.ts`: validação combinada e específica.
- `src/data/catalog/index.ts`: exportações e índices.
- `src/data/selectors.ts`: seletores de Cinzas e progresso combinado.
- `src/data/catalog/__tests__/ashes-of-war-catalog.test.ts`: integridade.
- `scripts/generate-ashes-of-war-catalog.js`: conversão reproduzível dos JSONs documentais, sem execução em runtime.

Não criar arquivos por região: Cinzas não serão navegadas por região.

### 3.2 Modelo recomendado

```ts
type CatalogContentPack = 'base-game' | 'shadow-of-the-erdtree';

type LocalizedCatalogText = {
  readonly ptBR: string | null;
  readonly en: string;
};

type LocalizedCatalogList = {
  readonly ptBR: readonly string[] | null;
  readonly en: readonly string[];
};

type AshOfWarAcquisitionMethod = {
  readonly location: LocalizedCatalogText;
  readonly method: LocalizedCatalogText;
  readonly notes?: LocalizedCatalogText;
};

type AshOfWar = {
  readonly id: string;
  readonly contentPack: CatalogContentPack;
  readonly name: LocalizedCatalogText;
  readonly skillName: LocalizedCatalogText;
  readonly primaryLocation: LocalizedCatalogText;
  readonly primaryAcquisition: LocalizedCatalogText;
  readonly acquisitionMethods: readonly AshOfWarAcquisitionMethod[];
  readonly summary: LocalizedCatalogText;
  readonly skillType: LocalizedCatalogText | null;
  readonly affinity: LocalizedCatalogText;
  readonly compatibleEquipment: LocalizedCatalogList;
  readonly fpCost: number | null;
  readonly specialEffects: LocalizedCatalogText | null;
  readonly limitations: LocalizedCatalogText | null;
  readonly relevantNotes: LocalizedCatalogText | null;
};
```

`skillName` deve existir explicitamente porque a tela diferencia o nome do item da habilidade concedida. Quando forem iguais, os valores podem coincidir sem compartilhar identidade mutável.

### 3.3 Dados excluídos do bundle

Não converter:

- `sourceRefs`;
- URLs;
- status editorial de pesquisa;
- justificativas e divergências;
- datas de consulta;
- notas exclusivas do processo de pesquisa;
- IDs temporários;
- duplicações.

### 3.4 Fallback e procedência

Não armazenar um indicador agregado de fallback no catálogo. A presença de `ptBR: null` em cada campo é a procedência mínima, precisa e não redundante. Um booleano agregado poderia ficar inconsistente quando apenas parte do detalhe fosse traduzida.

Seletores devem produzir:

```ts
type ResolvedLocalizedValue<T> = {
  readonly value: T;
  readonly usedEnglishFallback: boolean;
};
```

A tela de detalhes agrega os resultados dos campos que efetivamente exibiu. Se qualquer campo usar inglês com idioma ativo `pt-BR`, mostra uma única indicação discreta. Cards resolvem apenas os valores e não mostram o aviso.

### 3.5 Exportações e índices

Exportar:

- `ashesOfWar`;
- `ashOfWarById: ReadonlyMap<string, AshOfWar>`;
- `findAshOfWarById`;
- `getAshesOfWarByContentPack`;
- `BASE_GAME_ASH_OF_WAR_COUNT`;
- `DLC_ASH_OF_WAR_COUNT`;
- `ASH_OF_WAR_COUNT`.

O mapa por ID deve ser criado uma vez no módulo, validado contra duplicações e tratado como somente leitura. Seletores públicos recebem listas quando isso facilitar testes isolados.

### 3.6 Validações do catálogo

O validador deverá confirmar:

- 91, 25 e 116;
- IDs únicos e kebab-case;
- ausência de colisão com chefes e regiões;
- pacote correto;
- inglês obrigatório;
- pt-BR como texto/lista ou `null`, nunca `undefined`;
- aquisição não vazia;
- afinidade e compatibilidade presentes;
- FP numérico não negativo ou `null`;
- ausência de URLs;
- ausência de `sample-*`, Lost Ashes of War e habilidades fixas;
- nenhuma entrada documental indevida;
- objetos e arrays congelados conforme o padrão atual.

## 4. Localização, ordenação e busca

### 4.1 Resolução localizada

Adicionar helpers especializados:

- `resolveLocalizedText(value, language)`;
- `resolveLocalizedList(value, language)`;
- `usesEnglishFallback(value, language)`;
- manter `getLocalizedText` compatível com os chefes atuais ou evoluí-lo sem mudar seu comportamento.

Regras:

- inglês sempre usa `en`;
- pt-BR usa `ptBR` quando não nulo;
- pt-BR usa `en` quando `ptBR` é nulo;
- IDs nunca dependem do texto resolvido.

### 4.2 Ordenação

`sortAshesOfWarAlphabetically`:

1. resolve o nome no idioma ativo;
2. usa `localeCompare` com `pt-BR` ou `en`;
3. usa `sensitivity: 'base'` e `usage: 'sort'`;
4. usa ID como desempate.

A ordem física de `ashesOfWar.ts` não é contrato visual.

### 4.3 Busca

Campos indexáveis:

- nome;
- localização principal;
- aquisição principal;
- nome da habilidade;
- afinidade;
- equipamentos compatíveis;
- métodos alternativos e suas localizações/notas quando relevantes.

Para idioma `pt-BR`, construir o conjunto pesquisável com:

- valor pt-BR quando existir;
- valor inglês sempre;
- fallback inglês quando pt-BR estiver ausente.

Para inglês, pesquisar os valores ingleses. Normalizar consulta e campos com locale, trim e caixa baixa. A futura inclusão de pt-BR não remove a capacidade de localizar termos ingleses.

### 4.4 Filtros

```ts
type AshOfWarFilter = 'all' | 'collected' | 'not-collected';
```

Busca, filtro e ordenação devem ocorrer em um seletor puro. Para Todas as Cinzas, filtrar uma vez e depois separar por pacote, evitando resultados divergentes entre as seções.

## 5. Armazenamento e migração

### 5.1 Schema v2

Manter a chave atual de progresso e evoluir o payload:

```ts
type StoredProgressV2 = {
  readonly schemaVersion: 2;
  readonly defeatedBossIds: readonly string[];
  readonly collectedAshOfWarIds: readonly string[];
};
```

Não criar uma segunda fonte de verdade e não usar `AsyncStorage.clear()`.

### 5.2 Migração v1 para v2

Fluxo:

1. aguardar a fila de mutações;
2. ler a chave atual;
3. aceitar array legado, objeto v1 ou objeto v2;
4. normalizar e deduplicar IDs;
5. remover somente IDs temporários explicitamente conhecidos, atualmente `sample-*`;
6. preservar integralmente `defeatedBossIds`, inclusive IDs desconhecidos estruturalmente válidos;
7. criar `collectedAshOfWarIds: []` para legado e v1;
8. em v2, preservar IDs desconhecidos de Cinzas estruturalmente válidos;
9. regravar somente quando migração/normalização for necessária;
10. retornar estado normalizado.

Preservar IDs desconhecidos de Cinzas segue a política atual dos chefes, evita perda em downgrade/upgrade e permite adições futuras. Somente IDs conhecidos pelo catálogo entram nos cálculos visuais; desconhecidos permanecem persistidos até existir regra explícita de remoção.

### 5.3 Idempotência e falhas

- Ler v2 canônico não regrava.
- Rodar a migração repetidamente produz o mesmo payload.
- JSON inválido volta ao estado vazio seguro sem tocar idioma/tema.
- Falha de leitura impede hidratação normal e usa o tratamento atual de erro.
- Falha de escrita durante migração não deve expor estado parcialmente persistido.
- A mesma fila serializa mutações de chefes e Cinzas para impedir lost updates.

### 5.4 API de armazenamento

Recomenda-se evoluir para operações do payload inteiro:

- `loadProgress`;
- `saveProgress`;
- `addDefeatedBossId`;
- `removeDefeatedBossId`;
- `addCollectedAshOfWarId`;
- `removeCollectedAshOfWarId`;
- `clearProgress`.

`clearProgress` grava v2 com os dois arrays vazios. Chaves de idioma e tema não são tocadas.

### 5.5 Contexto e atualização otimista

Adicionar ao contexto:

- `collectedAshOfWarIds`;
- `setAshOfWarCollected(id, collected)` ou duas ações explícitas;
- `isUpdatingAshOfWar(id)` se necessário para bloquear repetição;
- erro de progresso localizado compartilhado ou especializado.

Mutação:

1. capturar estado anterior;
2. atualizar array imutavelmente;
3. persistir pela fila;
4. manter em sucesso;
5. restaurar exatamente o estado anterior em falha;
6. atualizar card, detalhe, listas e Home a partir da mesma fonte.

## 6. Progresso

Separar semântica de apresentação:

```ts
type CompletionProgress = {
  readonly completed: number;
  readonly total: number;
  readonly percentage: number;
};
```

Seletores:

- chefes: derrotados conhecidos / 208;
- Cinzas: coletadas conhecidas / 116;
- Cinzas por pacote: 91 ou 25;
- geral: `bosses.completed + ashes.completed` sobre `208 + 116`;
- percentual seguro: zero quando total for zero.

Não somar percentuais. Somar contagens e então calcular o percentual.

Todo componente de progresso mantém:

- razão à esquerda;
- percentual à direita;
- uma linha;
- barra abaixo.

## 7. Rotas recomendadas

### 7.1 Chefes

- Geral: `/all-bosses`.
- Jogo base existente: `/all-bosses/base-game`.
- Expansão existente: `/all-bosses/shadow-of-the-erdtree`.
- Detalhe existente: `/bosses/[bossId]`.

Arquivo novo recomendado:

- `app/(drawer)/all-bosses/index.tsx`.

Manter `app/(drawer)/all-bosses/[contentPack].tsx`. A rota estática `index` não quebra as rotas dinâmicas existentes.

### 7.2 Cinzas da Guerra

URLs finais:

- `/ashes-of-war`;
- `/ashes-of-war/base-game`;
- `/ashes-of-war/shadow-of-the-erdtree`;
- `/ashes-of-war/[ashOfWarId]`.

Arquivos:

- `app/(drawer)/ashes-of-war/index.tsx`;
- `app/(drawer)/ashes-of-war/base-game.tsx`;
- `app/(drawer)/ashes-of-war/shadow-of-the-erdtree.tsx`;
- `app/ashes-of-war/[ashOfWarId].tsx`.

As páginas de pacote devem ser estáticas, não `[contentPack].tsx`, porque o mesmo segmento público também possui o detalhe dinâmico. O Expo Router prioriza segmentos estáticos `base-game` e `shadow-of-the-erdtree`; qualquer outro segmento é tratado como ID do detalhe. Registrar as telas de lista no Drawer e o detalhe na Stack raiz, repetindo a arquitetura já validada dos detalhes de chefes.

Usar nomes de rotas registrados pelo navegador nas chamadas internas e URLs públicas nos links/deep links. Adicionar testes para todos os destinos antes da revisão manual, evitando o problema histórico de `Unmatched Route`.

## 8. Estado de listas e retorno

Busca e filtro ficam no componente da lista enquanto ela permanece montada na Stack. A posição é preservada pela instância da `FlatList`/`SectionList`.

Ao abrir detalhes:

- usar `router.push`, não `replace`;
- não remontar a lista;
- detalhes ficam sobre o Drawer na Stack raiz;
- voltar por cabeçalho, gesto ou botão físico remove apenas o detalhe.

Em acesso direto:

- resolver a Cinza por ID;
- se inexistente, exibir estado “não encontrada” com retorno seguro;
- se existente e não houver tela anterior, fallback para a lista do pacote de origem;
- não tentar reconstruir busca/filtro inexistentes.

## 9. Todos os chefes geral

Tela `/all-bosses`:

- um progresso `x/208`;
- busca e filtro únicos;
- seção Jogo base primeiro;
- seção expansão depois;
- nenhuma razão/percentual nos cabeçalhos;
- seção vazia ocultada;
- ordem alfabética localizada dentro de cada seção;
- `BossCard` atual reutilizado;
- região exibida no card, como nas listas por pacote.

Implementar um seletor que filtra todos os encontros e depois os separa pelo `contentPack` da região. Não concatenar duas telas existentes nem duplicar estados de busca.

## 10. Telas de Cinzas

### 10.1 Todas as Cinzas

- `x/116` no topo;
- busca e filtro globais;
- Jogo base primeiro;
- expansão depois;
- seções ocultadas sem resultados;
- lista visual contínua dentro de cada seção;
- sem divisão regional e sem progresso nos cabeçalhos.

### 10.2 Jogo base

- `x/91`;
- lista única;
- busca, filtros e ordenação localizada.

### 10.3 Expansão

- `x/25`;
- lista única;
- busca, filtros e ordenação localizada.

### 10.4 Estrutura de lista

Usar `SectionList` em telas combinadas e `FlatList` nas específicas. Compartilhar um hook/seletor de estado de busca e filtro, não um componente monolítico de tela.

## 11. Card de Cinza da Guerra

Arquivo especializado:

- `src/components/ash-of-war-card.tsx`;
- `src/components/ash-of-war-progress-button.tsx`;
- testes correspondentes.

Conteúdo:

- nome;
- localização principal ou aquisição principal quando localização for pendente/genérica;
- fantasma decorativo se não coletada;
- `✓` se coletada;
- ação de detalhes;
- ação de coleta.

Usar `@expo/vector-icons`, já instalada, para o fantasma. Não adicionar dependência.

Regras de layout:

- cabeçalho em linha com nome flexível e largura reservada para indicador;
- nome com múltiplas linhas;
- indicador com `pointerEvents="none"`;
- oculto da árvore de acessibilidade;
- detalhes e coleta em `Pressable` separados;
- mínimo de 48 pontos para ações;
- card não é clicável como um todo;
- ícone deriva de `isCollected`, acompanhando otimista e rollback.

Textos:

- `Marcar como coletada` / `Mark as collected`;
- `Desmarcar como coletada` / `Mark as not collected`.

## 12. Detalhes das Cinzas

Arquivo:

- `app/ashes-of-war/[ashOfWarId].tsx`.

Seções condicionais:

1. nome e origem;
2. localização principal;
3. obtenção principal;
4. todas as formas de obtenção;
5. resumo;
6. habilidade concedida;
7. tipo;
8. afinidade;
9. compatibilidade;
10. FP;
11. efeitos especiais;
12. limitações;
13. observações;
14. status e botão.

Não renderizar seções opcionais ausentes como texto vazio. Para FP nulo, usar texto localizado equivalente a “Pendente” somente se a decisão de produto confirmar que o campo deve aparecer; preferencialmente ocultar até existir valor, mantendo a pendência na documentação.

Se idioma ativo for pt-BR e qualquer campo exibido usar inglês, mostrar uma única nota discreta:

- `Conteúdo em inglês — tradução oficial pendente`;
- `Content shown in English — official translation pending`.

O aviso não aparece em cards. Nenhuma URL ou referência editorial entra na tela.

## 13. Home futura

Substituir os cards atuais por exatamente:

1. **Chefes / Bosses**
   - `x/208`;
   - percentual;
   - barra;
   - navega para `/all-bosses`.
2. **Cinzas da Guerra / Ashes of War**
   - `x/116`;
   - percentual;
   - barra;
   - navega para `/ashes-of-war`.

O progresso geral:

- `concluídos/324`;
- percentual calculado sobre 324;
- atualização imediata por chefe ou Cinza;
- pesos iguais.

Remover apenas da apresentação os cards Base game/DLC; as rotas específicas continuam válidas.

## 14. Drawer futuro

Ordem:

```text
Home
Chefes
  Todos os chefes
  Jogo base
    Todos os chefes
    16 regiões
  Shadow of the Erdtree
    Todos os chefes
    10 regiões
Cinzas da Guerra
  Todas as Cinzas
  Jogo base
  Shadow of the Erdtree
Settings
```

Estado recomendado:

```ts
type MainDrawerGroup = 'bosses' | 'ashes-of-war' | null;
type BossContentGroup = ContentPack | null;
```

Regras:

- expandir um grupo principal fecha o outro;
- Home e Settings definem ambos como `null`;
- rota de chefe abre apenas Chefes;
- rota de Cinza abre apenas Cinzas;
- dentro de Chefes, manter um pacote expandido por vez;
- item principal e subitem ativo têm indicação visual e acessível;
- detalhes também mantêm o grupo correspondente visualmente ativo quando o Drawer for aberto;
- navegação usa nomes registrados e parâmetros tipados.

## 15. Componentes compartilhados

### Reutilizar ou extrair

- comparador localizado atual;
- cálculo seguro de percentual;
- barra e layout horizontal de progresso;
- tokens de tema;
- padrão de botão assíncrono com rollback;
- estilos/contrato de campo de busca e grupo de filtros;
- estados de inicialização e erro;
- pequeno componente de seção de detalhes, se permanecer simples e sem conhecimento de domínio.

### Permanecer especializado em chefes

- `BossCard`;
- `BossProgressButton`;
- participantes, fases, barras, summons e auxiliares;
- páginas regionais;
- filtros semânticos derrotado/não derrotado.

### Especializado em Cinzas

- `AshOfWarCard`;
- `AshOfWarProgressButton`;
- aquisições alternativas;
- aviso de fallback;
- compatibilidade, afinidade e FP;
- filtros coletada/não coletada.

### Compartilhar com cautela

Um `ProgressSummaryCard` pequeno é justificável porque Home, regiões e listas usam o mesmo contrato horizontal. Não criar um `GenericEntityCard` nem uma tela genérica parametrizada por dezenas de props.

## 16. Traduções tipadas

Adicionar paridade pt-BR/en para:

- `ashesOfWar`;
- `allAshesOfWar`;
- `baseGameAshesOfWar`;
- `expansionAshesOfWar`;
- `collected`;
- `notCollected`;
- `markAsCollected`;
- `markAsNotCollected`;
- `viewAshDetails`;
- `ashNotFound`;
- `primaryLocation`;
- `primaryAcquisition`;
- `otherAcquisitionMethods`;
- `skill`;
- `skillType`;
- `affinity`;
- `compatibleEquipment`;
- `fpCost`;
- `specialEffects`;
- `limitations`;
- `relevantNotes`;
- `contentOrigin`;
- `englishFallbackNotice`;
- `officialTranslationPending`;
- `all`, `collectedFilter`, `notCollectedFilter`;
- placeholders e rótulos de busca;
- resultados vazios gerais e por pacote;
- acessibilidade de card, indicador, progresso e botões;
- progresso geral combinado;
- títulos dos cards Chefes e Cinzas;
- unidade `collected/total` e `completed/total`.

Testes de tipos e runtime devem garantir a mesma estrutura nos dois idiomas.

## 17. Matriz de testes

| Área | Casos obrigatórios | Nível |
|---|---|---|
| Catálogo | 91 base, 25 DLC, 116 total, IDs únicos, pacotes, sem URLs/Lost/fixas, campos obrigatórios | unitário |
| Catálogo | colisão com 208 chefes e 26 regiões, índice por ID, imutabilidade | unitário |
| Localização | pt-BR presente, fallback inglês, indicador de fallback, ID invariável | unitário |
| Ordenação | collation pt-BR, inglesa e desempate por ID | unitário |
| Busca | nome, localização, obtenção, habilidade, afinidade, equipamento | unitário |
| Busca | inglês encontrado em pt-BR com e sem tradução pt-BR | unitário |
| Migração | array legado -> v2; v1 -> v2; v2 idempotente | unitário |
| Migração | preserva chefes conhecidos/desconhecidos; cria Cinzas vazias | unitário |
| Migração | preserva IDs desconhecidos de Cinzas; remove apenas `sample-*` | unitário |
| Migração | JSON inválido, falhas de leitura/escrita, fila concorrente | unitário |
| Preferências | idioma e tema intactos; ausência de `AsyncStorage.clear()` | unitário |
| Contexto | hidratação conjunta, toggle de Cinza, otimista, rollback, concorrência | integração |
| Progresso | `0/324`, parcial, `324/324`, `100%`, sem NaN/Infinity | unitário |
| Home | geral 324, Chefes 208, Cinzas 116, exatamente dois cards | componente |
| Home | navega para `/all-bosses` e `/ashes-of-war`; sincronização imediata | integração |
| Drawer | estrutura, ordem, acordeão principal e pacote de chefes | componente |
| Drawer | rotas ativas, detalhes, Home/Settings fecham grupos | componente |
| Drawer | todos os destinos sem `Unmatched Route` | integração/manual |
| Todos os chefes | 208, duas seções, progresso único, ordem | componente |
| Todos os chefes | busca+filtro, seção vazia oculta, retorno preservado | integração |
| Todas as Cinzas | 116, seções 91/25, progresso único | componente |
| Listas específicas | 91 e 25, progresso correto, lista contínua | componente |
| Cinzas | busca+filtro combinados, ordenação e seções ocultas | unitário/componente |
| Card | conteúdo compacto, espaço para nome longo, detalhes independentes | componente |
| Card | fantasma/✓ decorativos, ocultos da acessibilidade, não interativos | componente |
| Card | marcar/desmarcar, otimista, rollback e persistência | integração |
| Detalhe | todos os campos e campos opcionais ausentes | componente |
| Detalhe | múltiplas aquisições, origem, fallback e aviso único | componente |
| Detalhe | retorno preservado, acesso direto e ID inválido | integração |
| Reset | limpa chefes e Cinzas; mantém idioma e tema | integração |
| Temas/a11y | claro, escuro, sistema, fonte ampliada, labels e alvos | manual/componente |

Além da matriz específica, manter todas as 258 verificações atuais aprovadas.

## 18. Sequência futura de implementação

### Etapa 1 — Catálogo de produção

- **Arquivos:** `ashesOfWar.ts`, tipos, gerador, validador e testes.
- **Dependências internas:** JSONs documentais aprovados.
- **Riscos:** transportar URLs/status editorial ou alterar IDs.
- **Testes:** 91/25/116, integridade e colisões.
- **Conclusão:** catálogo exportável, ainda sem consumidores.
- **Rollback:** remover somente novos módulos/exportações.

### Etapa 2 — Seletores e fallback

- **Arquivos:** `src/data/selectors.ts`, i18n helpers e testes.
- **Dependências:** etapa 1.
- **Riscos:** busca perder inglês após tradução; ordenação instável.
- **Testes:** fallback, busca bilíngue, filtros e collation.
- **Conclusão:** APIs puras prontas para UI.
- **Rollback:** reverter seletores novos sem tocar dados/progresso.

### Etapa 3 — Armazenamento v2 e migração

- **Arquivos:** `progress-storage.ts`, validators, contexto e testes.
- **Dependências:** IDs do catálogo.
- **Riscos:** perda de progresso de chefes e lost updates.
- **Testes:** matriz completa de migração/concorrência/reset.
- **Conclusão:** v1 migra idempotentemente e chefes permanecem intactos.
- **Rollback:** exige compatibilidade de leitura do v2; não fazer downgrade destrutivo.

### Etapa 4 — Progresso combinado

- **Arquivos:** seletores e contexto.
- **Dependências:** etapa 3.
- **Riscos:** somar percentuais em vez de contagens.
- **Testes:** zero, parcial, completo e desconhecidos ignorados no total.
- **Conclusão:** resumos 208, 116 e 324 consistentes.
- **Rollback:** manter seletores antigos de chefes enquanto novos não têm consumidores.

### Etapa 5 — Todos os chefes geral

- **Arquivos:** `app/(drawer)/all-bosses/index.tsx` e testes.
- **Dependências:** seletores existentes e BossCard.
- **Riscos:** quebrar rotas específicas ou perder estado ao voltar.
- **Testes:** 208, seções, busca/filtro e retorno.
- **Conclusão:** nova rota funciona sem mudar as duas atuais.
- **Rollback:** remover apenas a rota geral e seu item futuro.

### Etapa 6 — Listas e cards de Cinzas

- **Arquivos:** três telas, card, botão, filtros/busca especializados e testes.
- **Dependências:** etapas 1–4.
- **Riscos:** listas grandes, sobreposição do ícone, mutações duplicadas.
- **Testes:** 116/91/25, card, filtros, otimista/rollback.
- **Conclusão:** listas funcionais ainda sem detalhe/Home/Drawer final.
- **Rollback:** rotas podem permanecer não registradas até conclusão.

### Etapa 7 — Detalhes

- **Arquivos:** rota de detalhe, seções e testes.
- **Dependências:** etapa 6 e fallback.
- **Riscos:** conflito de rota dinâmica e retorno incorreto.
- **Testes:** campos opcionais, aviso, retorno e acesso direto.
- **Conclusão:** todos os IDs válidos abrem e retornam com segurança.
- **Rollback:** remover rota de detalhe mantendo listas.

### Etapa 8 — Home por categorias

- **Arquivos:** Home, componente de progresso e testes.
- **Dependências:** progresso combinado e rotas gerais.
- **Riscos:** regressão do padrão horizontal ou total incorreto.
- **Testes:** 324, cards 208/116 e navegação.
- **Conclusão:** exatamente dois cards por categoria.
- **Rollback:** restaurar apresentação anterior sem alterar persistência.

### Etapa 9 — Drawer

- **Arquivos:** Drawer, layouts e testes.
- **Dependências:** todas as rotas concluídas.
- **Riscos:** `Unmatched Route`, dois grupos abertos e estado ativo incorreto.
- **Testes:** árvore completa, acordeão e navegação real.
- **Conclusão:** todos os destinos acessíveis e somente um grupo principal aberto.
- **Rollback:** manter rotas acessíveis por links enquanto reverte o menu.

### Etapa 10 — Traduções e acessibilidade

- **Arquivos:** tipos/dicionários i18n e componentes afetados.
- **Dependências:** textos finais das telas.
- **Riscos:** chaves sem paridade e aviso excessivo.
- **Testes:** paridade, labels, foco, fonte ampliada e ícones decorativos.
- **Conclusão:** pt-BR/en completos na interface, com fallback de conteúdo.
- **Rollback:** chaves podem ser adicionadas incrementalmente sem mudar IDs.

### Etapa 11 — Consolidação automatizada

- **Arquivos:** todas as suítes relacionadas.
- **Dependências:** etapas anteriores.
- **Riscos:** testes frágeis por ordem visual.
- **Testes:** TypeScript, lint, Jest, catálogo, migração e Expo Doctor.
- **Conclusão:** suíte integral aprovada.
- **Rollback:** corrigir por módulo; não mascarar regressões.

### Etapa 12 — Revisão manual

- **Ambiente:** Expo Go, Android inicialmente.
- **Cobertura:** rotas, retorno, listas, temas, idiomas, acessibilidade, persistência e reset.
- **Riscos:** layout com nomes longos, posição perdida e deep links.
- **Conclusão:** checklist manual sem bloqueios.
- **Rollback:** desabilitar entrada de navegação apenas se autorizado; preferir corrigir antes de integrar.

### Etapa 13 — Documentação

- **Arquivos:** especificação, plano, implementação do catálogo e migração.
- **Conclusão:** estado real, limitações e verificações registrados.
- **Rollback:** não aplicável; corrigir documentação junto do código.

### Etapa 14 — Commit

- Somente após aprovação explícita do usuário.
- Um commit coerente, sem arquivos temporários, builds ou segredos.
- Nenhum push sem solicitação separada.

## 19. Riscos e mitigação

- **Pendências editoriais:** manter `null`, fallback e aviso; não inventar.
- **Catálogo provisório:** validar total/IDs em CI e preservar documentação de origem.
- **Perda de progresso:** migração v2 idempotente, fila única e testes de falha.
- **IDs desconhecidos:** preservar no storage, excluir apenas dos cálculos visuais.
- **Rotas conflitantes:** segmentos de pacote estáticos e detalhe dinâmico testado.
- **Retorno de detalhes:** Stack raiz e `push`, mantendo lista montada.
- **Busca incompleta:** indexar pt-BR e inglês simultaneamente em português.
- **Performance:** `ReadonlyMap`, `Set`, seletores memoizados e listas virtualizadas.
- **Abstração excessiva:** compartilhar somente progresso, busca visual e seções simples.
- **Acessibilidade:** estado textual no rótulo/botão; indicador decorativo oculto.
- **Totais incorretos:** constantes derivadas do catálogo validado, não números repetidos em telas.
- **Regressão do layout:** componente horizontal sem variante empilhada.

## 20. Critérios de aceitação globais

- 116 Cinzas no catálogo de produção, sem URLs e sem duplicações.
- 26 regiões e 208 chefes preservados.
- Migração mantém todo progresso de chefes.
- Estado inicial após migração: chefes preservados, Cinzas zero.
- Home apresenta 324 unidades e dois cards por categoria.
- Todas as listas, detalhes e Drawer funcionam sem `Unmatched Route`.
- Fallback inglês e busca bilíngue funcionam sem alterar IDs.
- Reset limpa somente os dois arrays de progresso.
- TypeScript, ESLint, Jest, catálogo, migração e Expo Doctor aprovados.
- Revisão manual concluída no Expo Go.

## 21. Estado da etapa de catálogo de produção

Concluída: catálogo tipado e imutável com 116 entradas, índice privado por ID, seletores localizados, fallback baseado em `ptBR: null`, ordenação localizada, texto pesquisável e validadores. A comparação offline preserva os 116 IDs e os pacotes dos JSONs documentais sem transferir URLs ou metadados editoriais.

Naquele incremento isolado, interface, rotas, armazenamento, contexto e
migrações não foram alterados; todos foram concluídos posteriormente.

## 22. Próxima etapa

Implementar os seletores de progresso e a migração versionada para incluir collectedAshOfWarIds, preservando integralmente o progresso existente dos chefes.
## Estado da implementação — progresso v2

O schema v2 foi implementado com `defeatedBossIds` e
`collectedAshOfWarIds` no mesmo payload. A migração preserva Chefes, inicia
Cinzas em zero e conserva IDs desconhecidos válidos; somente IDs reconhecidos
contam visualmente. O reset limpa as duas categorias sem alterar idioma ou tema.
O progresso combinado totaliza 324. A interface e a revisão manual foram
concluídas nos incrementos posteriores.

Próxima etapa: Implementar a nova tela geral de Todos os Chefes com 208 encontros divididos em Jogo base e Shadow of the Erdtree, sem alterar ainda a Home ou o Drawer.
## Estado da implementação — Todos os Chefes geral

A rota `/all-bosses` foi implementada com progresso único sobre 208 encontros,
seções fixas de Jogo base (165) e Shadow of the Erdtree (43), busca e filtros
compartilhados e ocultação de seções sem resultados. O retorno dos detalhes
preserva a lista montada, incluindo busca, filtro e posição aproximada.

Home, Drawer e revisão manual foram concluídos posteriormente.

Próxima etapa: Implementar as três telas de Cinzas da Guerra e o card compacto com indicador de fantasma, sem alterar ainda a Home ou o Drawer.
## Estado da implementação — listas e detalhes

Foram implementadas as rotas `/ashes-of-war`,
`/ashes-of-war/base-game`, `/ashes-of-war/shadow-of-the-erdtree` e
`/ashes-of-war/[ashOfWarId]`, com totais 116/91/25, busca, filtros, ordenação
localizada, fallback inglês, card compacto, fantasma/check e detalhes completos.

A coleta usa o contexto v2 existente com atualização otimista e rollback. O
retorno preserva a lista montada; acessos diretos usam fallback por pacote.
Home, conteúdo visual do Drawer e revisão manual foram concluídos
posteriormente.

Próxima etapa: Integrar a Home e o Drawer às novas telas gerais de Chefes e Cinzas da Guerra, mantendo o acordeão mutuamente exclusivo entre categorias.
## Integração da Home e do Drawer

A Home usa o progresso combinado de 324 registros e exibe somente os cards
Chefes (208) e Cinzas da Guerra (116). O Drawer contém as duas categorias em
acordeões principais mutuamente exclusivos, com rotas públicas e estado ativo
derivado do pathname. A revisão manual foi concluída com sucesso.

Próxima etapa:
`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`

## Finalização

A implementação das 116 Cinzas da Guerra, schema v2, progresso combinado,
rotas, listas, detalhes, Home e Drawer foi concluída. A revisão manual no Expo
Go foi aprovada e o progresso usado na revisão foi removido. Não há regressão
ou falha de navegação conhecida. O fallback pt-BR continua provisório, custos de
FP desconhecidos permanecem omitidos e a proteção contra remoção ou
consolidação indevida de testes permanece obrigatória.

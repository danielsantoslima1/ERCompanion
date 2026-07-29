# Plano de pesquisa — Feitiços e Encantamentos

## Objetivo e estado

Pesquisar e planejar, sem integração funcional, dois catálogos independentes e totalmente offline:

- **Sorceries / Feitiços**: 84 entradas (70 jogo base e 14 expansão);
- **Incantations / Encantamentos**: 129 entradas (101 jogo base e 28 expansão).

Os catálogos são propostas documentais. Nenhum dado pt-BR foi aprovado e nenhum arquivo em `src/` foi alterado.

## Escopo

Incluem-se somente magias obtíveis, armazenáveis, memorizáveis e utilizáveis pelo personagem. Excluem-se magia exclusiva de inimigo/chefe, conteúdo cortado ou interno, duplicatas técnicas, habilidades de arma, Cinzas da Guerra, efeitos auxiliares e qualquer registro inacessível.

Uma magia com várias obtenções permanece uma entrada. Magias mutuamente exclusivas permanecem no denominador e podem exigir NG+.

## Proibição de classificações

Não existem nem serão criados campos de escola, família, tradição, grupo mágico, `schools`, `families` ou `magicTypes`. A única distinção principal é `sorcery` ou `incantation`. Catalisadores, cajados, selos e bônus de catalisador também estão fora do modelo.

## Metodologia

1. Inventário inglês obtido pela API pública de categorias do Eldenpedia.
2. Remoção apenas da página principal e das subcategorias; restaram 84 e 129 páginas de itens.
3. Partição DLC cruzada com listas independentes da expansão.
4. Campos técnicos curtos extraídos dos infoboxes públicos: efeito curto, FP básico, slots, requisitos, stamina e fonte resumida.
5. Textos longos e descrições integrais foram descartados; nenhum HTML ou dump foi versionado.
6. Campos não confirmados foram mantidos como `null` e `pending`.
7. Nomes pt-BR permanecem `null/pending`, com fallback inglês planejado.

## IDs

IDs são kebab-case, derivados do nome inglês e prefixados pelo domínio: `sorcery-*` e `incantation-*`. O namespace evita colisões como `Golden Vow` entre uma Cinza da Guerra e um Encantamento. Traduções futuras não alteram IDs nem progresso.

## Modelo documental proposto

```ts
type SpellResearchEntry = {
  id: string;
  category: 'sorcery' | 'incantation';
  contentPack: 'base-game' | 'shadow-of-the-erdtree';
  name: LocalizedResearchValue;
  primaryLocation: LocalizedResearchValue;
  primarySource: LocalizedResearchValue;
  cardSummary: LocalizedResearchValue;
  acquisitionMethods: readonly AcquisitionResearch[];
  relatedNpcs: LocalizedCollectionResearchValue;
  relatedLocations: LocalizedCollectionResearchValue;
  intermediateItems: LocalizedCollectionResearchValue;
  questConditions: LocalizedResearchValue;
  requiredChoices: LocalizedResearchValue;
  priceRunes: NumericResearchValue;
  enemyDrop: LocalizedResearchValue;
  baseDropRatePercent: NumericResearchValue;
  missable: { value: boolean | null; explanation: LocalizedResearchValue; status: FieldStatus };
  legendary: { value: boolean; status: FieldStatus };
  summary: LocalizedResearchValue;
  primaryEffect: LocalizedResearchValue;
  damageTypes: { value: readonly ('physical' | 'magic' | 'fire' | 'lightning' | 'holy')[] | null; status: FieldStatus };
  statusConditions: CollectionResearchValue;
  fpCost: NumericResearchValue;
  memorySlots: NumericResearchValue;
  requirements: {
    intelligence: NumericResearchValue;
    faith: NumericResearchValue;
    arcane: NumericResearchValue;
  };
  staminaCost: NumericResearchValue;
  durationSeconds: NumericResearchValue;
  healingAndBuffs: CollectionResearchValue;
  applicationRestrictions: LocalizedResearchValue;
  rangeDescription: LocalizedResearchValue;
  areaShape: LocalizedResearchValue;
  effectInteractions: LocalizedResearchValue;
  pvpDifferences: LocalizedResearchValue;
  limitations: LocalizedResearchValue;
  technicalNotes: LocalizedResearchValue;
  documentedVersion: VersionResearchValue;
  sourceRefs: readonly string[];
};
```

Não há campos próprios para carga, canalização, repetição, continuidade, animação ou custos incrementais.

## Interface futura aprovada para planejamento

- Ordem Home/Drawer: Chefes, Cinzas da Guerra, Feitiços, Encantamentos.
- Cada grupo: Todos, Jogo base, Shadow of the Erdtree.
- “Todos” tem um progresso e duas seções fixas, sem agrupamentos internos.
- Card: nome, fonte/local principal, estado e ícone decorativo; nenhuma estatística.
- Detalhes omitem nulos e mostram somente os campos aprovados.
- Estado genérico: Coletado/Não coletado/Marcar como coletado/Desmarcar como coletado.
- Ícones aprovados, sem dependência nova: Ionicons `sparkles-outline` para Feitiços e `sunny-outline` para Encantamentos. Coletados usam `✓`. São decorativos, não interativos e ocultos da árvore de acessibilidade.
- Ícones são decorativos, não interativos e ocultos da acessibilidade.

## Busca e filtros

A busca futura indexará somente nome, localização, NPC e fonte, nos dois idiomas, normalizados sem caixa ou acento. A interface mostra apenas o idioma ativo.

Filtros: Lendárias, Perdíveis, exige Inteligência, exige Fé e exige Arcano. Todos combinam por interseção; múltiplos atributos exigem todos. Não haverá filtros por valor, FP, slots, dano, efeito, localização ou classificação.

## Progresso e schema v3

O total futuro será dinâmico e, com os inventários atuais, será 537. O schema proposto:

```ts
{
  schemaVersion: 3;
  defeatedBossIds: string[];
  collectedAshOfWarIds: string[];
  collectedSorceryIds: string[];
  collectedIncantationIds: string[];
}
```

A migração v2→v3 preservará Chefes e Cinzas, iniciará os dois novos arrays vazios, preservará IDs desconhecidos válidos, removerá apenas IDs demo conhecidos, será idempotente e nunca usará `AsyncStorage.clear()`.

## Rotas futuras

- `/sorceries`, `/sorceries/base-game`, `/sorceries/shadow-of-the-erdtree`, `/sorceries/[sorceryId]`;
- `/incantations`, `/incantations/base-game`, `/incantations/shadow-of-the-erdtree`, `/incantations/[incantationId]`.

Listas, cards e detalhes devem compartilhar somente primitivas já comprovadamente comuns; os domínios permanecem tipados e separados.

## Riscos e pendências

- pt-BR integralmente pendente;
- perdibilidade não foi promovida sem auditoria de questlines;
- tipo de dano e duração permanecem pendentes onde o infobox não oferece evidência inequívoca;
- o significado de “Lendária” foi fixado provisoriamente na lista do troféu/conquista, não na raridade interna exibida por wikis;
- formas alternativas de obtenção precisam de revisão manual antes da produção;
- valores técnicos são `probable`, pois vêm de fonte comunitária rastreável.

Nenhuma ferramenta de extração, arquivo local do jogo ou captura foi usada.

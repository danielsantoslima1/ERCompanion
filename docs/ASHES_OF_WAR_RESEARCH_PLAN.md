# Plano de pesquisa — Cinzas da Guerra

## Decisões aprovadas

Esta etapa é exclusivamente documental. Não altera telas, rotas, componentes, armazenamento, migração, dependências ou `src/data/catalog`. O checklist contará cada Cinza removível uma única vez.

O catálogo do jogo base foi aceito provisoriamente com 91 entradas para permitir a pesquisa separada de Shadow of the Erdtree. Em seguida, o conjunto combinado de 116 entradas — 91 do jogo base e 25 da expansão — foi aprovado provisoriamente para implementação. Essa aprovação não resolve localização, custos de FP ou demais pendências.

## Inclusão e exclusão

Incluem-se itens diretos, compras, recompensas, drops, escaravelhos, achados e Cinzas inicialmente aplicadas a armas comuns quando removíveis. Excluem-se habilidades fixas/únicas sem item separado, Lost Ashes of War, duplicações, outros tipos, conteúdo da expansão e dados especulativos.

## Metodologia e validação

1. Manter o inventário provisório de 91 entradas do jogo base sem alterar suas pendências.
2. Pesquisar separadamente as 25 entradas introduzidas em Shadow of the Erdtree.
3. Extrair fatos estruturados das páginas individuais.
4. Parafrasear efeito e uso; não copiar descrições.
5. Manter `null` e pendência explícita quando a localização oficial pt-BR ou o FP não estiverem confirmados.
6. Validar JSON, IDs, escopo, fontes, aquisições, afinidades, compatibilidade e totais com script offline.

## Modelo proposto

```ts
type LocalizedResearchText = { ptBR: string | null; en: string };

type AshOfWarResearchEntry = {
  id: string;
  contentPack: 'base-game';
  name: LocalizedResearchText;
  primaryLocation: LocalizedResearchText;
  primaryAcquisition: LocalizedResearchText;
  acquisitionMethods: Array<{
    location: LocalizedResearchText;
    method: LocalizedResearchText;
    notes?: LocalizedResearchText;
  }>;
  summary: LocalizedResearchText;
  skillType: LocalizedResearchText | null;
  affinity: LocalizedResearchText;
  compatibleEquipment: { ptBR: string[] | null; en: string[] };
  fpCost: number | null;
  specialEffects: LocalizedResearchText | null;
  limitations: LocalizedResearchText | null;
  relevantNotes: LocalizedResearchText | null;
  sourceRefs: string[];
  verificationStatus: 'verified' | 'partial' | 'disputed';
};
```

O modelo mínimo foi preservado. Recomenda-se apenas reutilizar o alias `LocalizedResearchText` na futura implementação para reduzir duplicação; o JSON continua materializando os objetos completos. Metadados editoriais temporários do construtor não entram no catálogo proposto.

## IDs

IDs são kebab-case derivados do nome inglês, sem prefixo temporário, apóstrofos ou pontuação. Parênteses são convertidos em segmentos (`stamp-upward-cut`). A validação rejeita colisões, `sample-*`, IDs de chefes/regiões conhecidos e duplicatas.

## Localização

Somente texto oficial do jogo pode preencher pt-BR. Fontes comunitárias servem para descoberta, não para promover tradução livre. Ausências ficam `null` e são documentadas como pendentes. A mesma regra vale para afinidades, equipamento, tipo de habilidade e locais.

## Ordenação futura

Português: nome pt-BR com collation `pt-BR`; inglês: nome inglês com collation inglesa; ID como desempate estável. A ordem deste arquivo não é regra visual.

## Interface futura já aprovada (somente documentação)

A Home combinará chefes e Cinzas com peso unitário e cards por categoria. O Drawer terá Chefes (Todos, base com 16 regiões, expansão com 10) e Cinzas (Todas, base, expansão). Todos os Chefes reunirá 208 encontros em duas seções. Todas as Cinzas terá progresso combinado, seções base/DLC, busca e filtros Todas/Coletadas/Não coletadas; seções vazias serão ocultadas. Listas específicas serão contínuas e não regionais. Cards mostrarão nome, origem principal, fantasma ou ✓, detalhes e ação de coletar. Detalhes comportarão todos os campos da pesquisa. Migração preservará chefes, iniciará Cinzas em zero e resetará ambos sem afetar idioma/tema. Todo card de progresso manterá `concluído/total` à esquerda, percentual à direita e barra abaixo.

## Riscos e pendências

- A wiki.gg não preenche o campo BR nas páginas consultadas.
- A base legada é incompleta e não deve decidir o inventário isoladamente.
- FP e tipo técnico precisam de fonte paramétrica ou inspeção direta.
- Aquisições alternativas exigem revisão manual por entrada.
- Mudanças de patch podem alterar custo/efeito, embora não devam alterar o inventário-base.

## Separação base/DLC

Os dois arquivos permanecem independentes: 91 entradas provisórias em `base-game` e 25 em `shadow-of-the-erdtree`. Ambos foram aprovados provisoriamente e convertidos para o catálogo de produção, sem promover pendências editoriais a dados confirmados.

## Próxima etapa

`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`

## Estado final da implementação

O catálogo, o schema v2, as listas, os detalhes, a Home e o Drawer foram
implementados e revisados no Expo Go. O inventário de 116 entradas permanece
provisoriamente aprovado para a interface. Nomes e campos pt-BR pendentes e
custos de FP desconhecidos continuam explicitamente pendentes; custos nulos são
omitidos na interface. Nenhuma nova pesquisa de localização foi executada nesta
finalização.

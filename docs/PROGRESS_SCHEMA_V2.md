# Schema de progresso v2

## Estado persistido

O progresso usa a mesma chave histórica do AsyncStorage e um único payload:

```ts
type ProgressStateV2 = {
  schemaVersion: 2;
  defeatedBossIds: string[];
  collectedAshOfWarIds: string[];
};
```

As gravações são serializadas por uma fila única, sempre persistem as duas
categorias e não usam `AsyncStorage.clear()`.

## Migração e normalização

- v1 preserva integralmente os IDs de Chefes e inicia Cinzas da Guerra vazias;
- v2 é normalizado de forma idempotente;
- o formato legado em array continua recuperável como progresso de Chefes;
- JSON inválido, valor ausente ou estado irrecuperável resulta em v2 vazio;
- versões desconhecidas recuperam os dois arrays conhecidos e são convertidas
  para v2, sem tentar interpretar campos futuros;
- somente strings não vazias são aceitas;
- espaços externos, duplicações e IDs com prefixo `sample-` são removidos;
- a ordem da primeira ocorrência é preservada;
- IDs desconhecidos estruturalmente válidos são preservados.

Idioma, tema e outras preferências ficam em chaves independentes e não são
alterados pela migração ou pelo reset.

## Persistência versus progresso visual

IDs desconhecidos permanecem no armazenamento para tolerar backups, diferenças
temporárias entre versões e futuras reintroduções. Os seletores visuais contam
somente IDs reconhecidos nos catálogos atuais:

- Chefes: 208 (165 do jogo base e 43 da expansão);
- Cinzas da Guerra: 116 (91 do jogo base e 25 da expansão);
- combinado: 324.

Duplicações e IDs desconhecidos não elevam contagens ou percentuais. Percentuais
são arredondados ao inteiro mais próximo, limitados entre 0% e 100%, e total
zero produz 0%.

## Operações e falhas

Chefes e Cinzas possuem operações independentes de consulta, marcação,
desmarcação e alternância. O contexto atualiza a memória antes da persistência e
restaura somente a categoria cuja gravação falhou. O reset limpa os dois arrays,
preserva configurações e restaura ambos em caso de falha.

A integração visual foi concluída em etapa posterior. A revisão manual confirmou
persistência independente, progresso combinado e reset seguro.

## Próxima etapa

`Pesquisar e validar os nomes e demais campos oficiais em português do Brasil das 116 Cinzas da Guerra, substituindo gradualmente os fallbacks em inglês sem alterar IDs ou progresso.`
## Consumo na Home

Os seletores do schema v2 alimentam diretamente o progresso geral de 324, o
card Chefes de 208 e o card Cinzas da Guerra de 116. IDs desconhecidos
continuam preservados na persistência e não contam visualmente. Reset e
rollback continuam sendo responsabilidades do contexto e da persistência já
implementados.

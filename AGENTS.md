# Regras do projeto

## Tecnologias

- React Native com Expo.
- TypeScript.
- Expo Router.
- npm como gerenciador de pacotes.
- O aplicativo deve continuar funcionando no Expo Go.

## Regras de desenvolvimento

- Execute somente o que foi solicitado pelo usuário.
- Não crie funcionalidades adicionais sem autorização.
- Antes de alterar código, analise os arquivos relacionados.
- Preserve funcionalidades existentes que não façam parte da solicitação.
- Não apague arquivos ou código sem explicar a necessidade.
- Não instale bibliotecas sem informar por que são necessárias.
- Não instale dependências que exijam código nativo sem autorização.
- Prefira recursos oficiais do React Native e do Expo.
- Use TypeScript com tipagem explícita e evite `any`.
- Crie componentes pequenos, reutilizáveis e fáceis de entender.
- Evite duplicação de código.
- Use nomes de arquivos, componentes, funções e variáveis em inglês.
- Escreva explicações e mensagens para o usuário em português do Brasil.
- Não coloque senhas, tokens, chaves de API ou outros segredos no código.
- Nunca altere arquivos `.env` sem autorização.

## Antes de implementar

- Explique resumidamente o que será alterado.
- Identifique os arquivos que precisam ser modificados.
- Quando a solicitação estiver ambígua e puder causar uma implementação incorreta, faça uma pergunta objetiva.

## Depois de implementar

- Informe quais arquivos foram criados ou modificados.
- Resuma as alterações realizadas.
- Informe como testar a funcionalidade.
- Execute, quando possível:

```bash
npx tsc --noEmit
npx expo lint
```

- Corrija erros provocados pelas alterações antes de finalizar.
- Não faça commit automaticamente.

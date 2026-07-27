# Elden Ring Companion

## Objetivo

Aplicativo móvel para acompanhar os chefes derrotados em Elden Ring e na expansão Shadow of the Erdtree.

## Tecnologias

- React Native
- Expo
- TypeScript
- Expo Router
- npm
- AsyncStorage
- Compatível com Expo Go
- Android inicialmente

## Identidade

- Nome: Elden Ring Companion
- Slug: elden-ring-companion
- Android package: com.danielsantos.ercompanion

## Escopo da primeira versão

- Rastrear apenas chefes.
- Incluir o jogo base e Shadow of the Erdtree.
- Incluir todos os inimigos que exibem barra de chefe.
- Tratar cada encontro separadamente por localização.
- Cada encontro possui dois estados:
  - não derrotado;
  - derrotado.
- Os dados dos chefes serão incluídos no próprio aplicativo.
- O aplicativo deverá funcionar offline.
- O progresso será armazenado somente no celular.

## Idiomas

- Português do Brasil.
- Inglês.
- Um seletor global deverá alterar toda a interface.
- Os nomes dos chefes e regiões deverão possuir traduções em português e inglês.

## Navegação

Usar um drawer lateral com:

- Home;
- Bosses;
- Configurações.

A opção Bosses deverá ser expansível e mostrar as regiões.

Ao selecionar uma região, o aplicativo deverá abrir a página correspondente com os chefes daquela região.

## Home

A página inicial deverá mostrar:

- círculo de progresso;
- porcentagem total de chefes derrotados;
- quantidade de chefes derrotados sobre o total;
- progresso separado por região.

Exemplo:

- 10%;
- 10/100.

## Página da região

Cada chefe deverá aparecer em um card contendo:

- nome;
- localização;
- botão para marcar ou desmarcar como derrotado.

A página deverá possuir:

- busca por nome;
- filtro Todos;
- filtro Derrotados;
- filtro Não derrotados.

## Configurações

A página deverá possuir:

- seleção de idioma;
- seleção de tema;
- botão para zerar todo o progresso.

As opções de tema serão:

- Sistema;
- Claro;
- Escuro.

O botão para zerar o progresso deverá exigir confirmação.

## Aparência

Os temas claro e escuro deverão usar uma paleta inspirada na atmosfera de Elden Ring:

- dourado envelhecido;
- verde musgo;
- marrom terroso;
- bege pergaminho;
- preto;
- cinza escuro.

A interface não deverá copiar diretamente telas, imagens ou elementos protegidos do jogo.

## Armazenamento

Usar AsyncStorage para salvar:

- chefes derrotados;
- idioma escolhido;
- tema escolhido.

## Publicação

O projeto deverá ser preparado para uma futura publicação na Google Play.

O aplicativo deverá ser apresentado como um projeto não oficial feito por fãs.

Não usar imagens, logotipos, fontes ou outros materiais protegidos sem autorização. Durante o desenvolvimento, usar recursos próprios, licenciados ou placeholders.

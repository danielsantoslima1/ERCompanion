# Phase 2 — splash e identidade gráfica

## Conceito visual

O emblema é uma criação original do Elden Ring Companion. A composição vertical
e simétrica apresenta uma árvore dourada minimalista cujo tronco se transforma
diretamente em uma espada. Galhos finos, folhas pequenas, moldura oval dupla,
ornamentação externa discreta e uma joia verde inferior formam a identidade.

O desenho não contém animais, personagens, castelos, paisagens, runas, logotipo,
símbolo oficial ou ativos extraídos de Elden Ring. Nenhum recurso da FromSoftware
ou Bandai Namco foi reproduzido.

## Paleta

- fundo fixo da splash: `#07130F`;
- dourado principal e texto: `#E2B34A`;
- reflexos pequenos: `#F9C043`;
- ouro envelhecido: `#927A45`;
- verde interno: `#0D2A22`;
- joia: `#1E4A3A`.

## Arquivos

- `assets/branding/elden-ring-companion-emblem.svg`: fonte vetorial editável;
- `assets/branding/elden-ring-companion-emblem.png`: emblema RGBA, 512 × 640;
- `assets/branding/elden-ring-companion-splash.svg`: composição vetorial;
- `assets/branding/elden-ring-companion-splash.png`: composição RGBA,
  900 × 1200;
- `assets/branding/generate-branding-assets.ps1`: geração determinística;
- `scripts/validate-branding-assets.js`: dimensões e transparência.

Os PNGs são rasterizados localmente dos SVGs pelo Microsoft Edge em modo
headless, sem downloads ou dependências. A composição usa a Cinzel Decorative
local já licenciada e incluída no projeto.

Hashes SHA-256 finais:

- emblema SVG: `A960022D9EF6881946591C000EF69EF305F4D5A1A7DBB079077E2B5AFC708C70`;
- emblema PNG: `766F67A442B43B31F8C2284CBE7ED2C6C76569C3BB8F56D0F2F87F39B3EAE5A2`;
- splash SVG: `A3332620A64FAEF7803BFA737536611707EB0A2F0E2AC98122F5E82ED2D1C993`;
- splash PNG: `D23C2783BCE38DBB20F6B2CF6B1B18E97C0A6A4A6F558913839FD83AB0C7BEFC`.

## Splash nativa

O config plugin `expo-splash-screen` usa a composição da marca, largura 260,
modo `contain` e fundo `#07130F` nos modos claro e escuro. O ícone e o adaptive
icon do aplicativo permanecem inalterados.

Após a revisão manual identificar emblema excessivo, composição alta e título
cortado nas duas laterais, o ativo nativo foi recomposto no mesmo canvas de
900 × 1200. Ele agora possui margens transparentes maiores, emblema e título
menores e grupo centralizado próximo ao centro óptico.

## Layout responsivo do overlay

O overlay não reutiliza o PNG combinado. Ele renderiza separadamente o PNG
transparente do emblema e `AppText` com Cinzel Decorative, permitindo adaptação
real ao aparelho. O grupo permanece centralizado em uma `SafeAreaView`, com
24 dp de padding horizontal, 12 dp de deslocamento óptico para baixo e espaço
entre elementos variando de 20 a 28 dp.

Em celulares usuais, o emblema varia aproximadamente de 176 a 220 dp. O cálculo
limita sua largura a 56% da tela, sua altura a 38% da tela e considera a escala
máxima de 1,015. O título varia de 22 a 28 dp, ocupa somente a largura segura,
usa `adjustsFontSizeToFit`, `minimumFontScale` de 0,72 e nunca usa reticências.
O crescimento é limitado em tablets.

## Transição

`SplashScreen.preventAutoHideAsync()` continua no escopo global. A splash nativa
permanece enquanto fontes e hidratação carregam. Quando o aplicativo está pronto,
`AnimatedAppSplash` é renderizado sobre a interface; somente após seu primeiro
layout a splash nativa é ocultada. Por decisão aprovada pelo usuário, a marca
permanece visível por no mínimo 3.000 ms contados desde o bootstrap JavaScript.
Se fontes e hidratação terminarem antes, aguarda-se somente o tempo restante; se
terminarem depois, a saída começa imediatamente, sem três segundos adicionais.
Após o mínimo, começa uma saída de 500 ms com opacidade e escala de 1 para 1,015.
Ao terminar, o overlay é desmontado e deixa de bloquear interação.

Com redução de movimento, a escala permanece em 1 e somente uma saída de
opacidade de 100 ms é executada; o mínimo de 3.000 ms permanece igual. O único
temporizador fica centralizado na coordenação da splash, é cancelado ao desmontar
e não reinicia durante renderizações. Falhas de fonte ocultam a splash nativa,
preservam a tela de erro e a ação de nova tentativa. Uma nova tentativa reinicia
o ciclo e sua medição de forma previsível, sem loop do overlay.

Durante a transição, o fundo é sempre verde-escuro e a StatusBar usa conteúdo
claro. Depois da desmontagem, os temas Light, Dark e System e a StatusBar normal
voltam a controlar a interface.

## Validação

A camada animada pode ser revisada no Expo Go. A splash nativa configurada pelo
plugin não é reproduzida integralmente nele; sua validação final exige um novo
build Android instalado, pois mudanças de config plugin dependem da reconstrução
do binário.

A revisão manual da camada animada e do ativo recomposto foi concluída e
aprovada. A validação da splash nativa em build Android instalado continua
necessária porque o Expo Go não reproduz integralmente a configuração do plugin.

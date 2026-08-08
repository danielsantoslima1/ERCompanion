# Tipografia da Phase 2

## Famílias aprovadas

- **Cinzel Decorative**: identidade, nome “Elden Ring Companion”, títulos principais, cabeçalhos de categorias e grandes seções.
- **Spectral**: corpo, cards, botões, filtros, busca, Drawer, progresso, detalhes, configurações, mensagens e demais textos da interface.

As duas famílias foram obtidas diretamente do repositório oficial
[`google/fonts`](https://github.com/google/fonts), sem conversão ou modificação.
Ambas são distribuídas sob a **SIL Open Font License 1.1**. As licenças
originais estão preservadas junto aos arquivos.

## Arquivos incluídos

### Cinzel Decorative

Titular informado nos metadados oficiais: Natanael Gama.

- `CinzelDecorative-Regular.ttf` → variante `display`;
- `CinzelDecorative-Bold.ttf` → variante `displayBold`;
- `OFL.txt`.

### Spectral

Titular informado nos metadados oficiais: Production Type.

- `Spectral-Regular.ttf` → variante `body`;
- `Spectral-Medium.ttf` → variante `bodyMedium`;
- `Spectral-SemiBold.ttf` → variante `bodySemibold`;
- `Spectral-Bold.ttf` → variante `bodyBold`;
- `Spectral-Italic.ttf` → variante `bodyItalic`;
- `OFL.txt`.

Somente os pesos usados pela interface foram incluídos. Os nomes concretos
ficam centralizados em `src/theme/typography.ts`.

## Carregamento e aplicação

As fontes são recursos locais carregados por `expo-font` antes da interface
ser exibida. A splash nativa existente permanece visível durante esse
carregamento, sem atraso artificial. Uma falha mostra a tela segura de
inicialização com opção de nova tentativa; por necessidade técnica, essa tela
usa a fonte nativa do sistema, pois as fontes locais não estão disponíveis.

`AppText` aplica Spectral por padrão, resolve explicitamente os arquivos
Medium, SemiBold, Bold e Italic e permite as variantes de display. `AppTextInput`
garante Spectral nos campos de busca. Títulos nativos de navegação usam estilos
compatíveis expostos pelo React Navigation; textos pertencentes integralmente
ao sistema operacional podem ignorar fontes customizadas conforme a plataforma.

A aplicação inicial foi revisada e aprovada manualmente no Expo Go em temas
Claro, Escuro e Sistema e nos idiomas português e inglês. Caso avaliações
futuras de legibilidade indiquem necessidade, o uso da fonte temática poderá
ser restringido a um conjunto menor de elementos de identidade sem alterar a
família principal da interface.

Mantinia e Agmena continuam proibidas sem licença comercial apropriada. Nenhuma
cópia, imitação ou arquivo extraído de Elden Ring integra o projeto.

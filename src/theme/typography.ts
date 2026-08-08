export const typography = {
  display: 'CinzelDecorative-Regular',
  displayBold: 'CinzelDecorative-Bold',
  body: 'Spectral-Regular',
  bodyMedium: 'Spectral-Medium',
  bodySemibold: 'Spectral-SemiBold',
  bodyBold: 'Spectral-Bold',
  bodyItalic: 'Spectral-Italic',
} as const;

export type TypographyVariant = keyof typeof typography;

export const appFontAssets = {
  [typography.display]: require('../../assets/fonts/cinzel-decorative/CinzelDecorative-Regular.ttf'),
  [typography.displayBold]: require('../../assets/fonts/cinzel-decorative/CinzelDecorative-Bold.ttf'),
  [typography.body]: require('../../assets/fonts/spectral/Spectral-Regular.ttf'),
  [typography.bodyMedium]: require('../../assets/fonts/spectral/Spectral-Medium.ttf'),
  [typography.bodySemibold]: require('../../assets/fonts/spectral/Spectral-SemiBold.ttf'),
  [typography.bodyBold]: require('../../assets/fonts/spectral/Spectral-Bold.ttf'),
  [typography.bodyItalic]: require('../../assets/fonts/spectral/Spectral-Italic.ttf'),
} as const;

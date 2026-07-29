import type { ImageSourcePropType } from 'react-native';

export const appBranding = {
  name: 'Elden Ring Companion',
  splashBackground: '#07130F',
  gold: '#E2B34A',
  luminousGold: '#F9C043',
  agedGold: '#927A45',
  innerGreen: '#0D2A22',
  jewelGreen: '#1E4A3A',
  nativeSplashImageWidth: 260,
  splashMinimumVisibleDuration: 3000,
  splashExitDuration: 500,
  reducedMotionExitDuration: 100,
} as const;

export const brandingAssets: {
  readonly emblem: ImageSourcePropType;
  readonly splash: ImageSourcePropType;
} = {
  emblem: require('../../assets/branding/elden-ring-companion-emblem.png'),
  splash: require('../../assets/branding/elden-ring-companion-splash.png'),
};

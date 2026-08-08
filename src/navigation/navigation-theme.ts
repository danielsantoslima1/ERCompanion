import {
  DarkTheme,
  DefaultTheme,
  type Theme as NavigationTheme,
} from '@react-navigation/native';

import type { AppTheme } from '../theme';

export function createNavigationTheme(appTheme: AppTheme): NavigationTheme {
  const baseTheme = appTheme.mode === 'dark' ? DarkTheme : DefaultTheme;

  return {
    ...baseTheme,
    dark: appTheme.mode === 'dark',
    colors: {
      ...baseTheme.colors,
      primary: appTheme.colors.accent,
      background: appTheme.colors.background,
      card: appTheme.colors.navigationBackground,
      text: appTheme.colors.navigationText,
      border: appTheme.colors.borderStrong,
      notification: appTheme.colors.danger,
    },
  };
}

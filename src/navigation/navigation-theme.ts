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
      primary: appTheme.colors.primary,
      background: appTheme.colors.background,
      card: appTheme.colors.surface,
      text: appTheme.colors.textPrimary,
      border: appTheme.colors.border,
      notification: appTheme.colors.danger,
    },
  };
}

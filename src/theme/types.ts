export type ResolvedTheme = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceElevated: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  primary: string;
  primaryContrast: string;
  accent: string;
  success: string;
  danger: string;
  disabled: string;
  progressTrack: string;
  drawerBackground: string;
  drawerActiveBackground: string;
  drawerActiveText: string;
}

export interface ThemeSpacing {
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
}

export interface ThemeBorderRadius {
  small: number;
  medium: number;
  large: number;
  round: number;
}

export interface AppTheme {
  mode: ResolvedTheme;
  colors: ThemeColors;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
}

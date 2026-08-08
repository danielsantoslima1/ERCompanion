export type ResolvedTheme = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceSecondary: string;
  surfaceElevated: string;
  primary: string;
  primaryStrong: string;
  primarySoft: string;
  text: string;
  textSecondary: string;
  textOnPrimary: string;
  border: string;
  borderStrong: string;
  accent: string;
  accentStrong: string;
  accentSoft: string;
  warning: string;
  warningBackground: string;
  danger: string;
  dangerBackground: string;
  success: string;
  successBackground: string;
  successActionBackground: string;
  successActionText: string;
  disabled: string;
  disabledText: string;
  overlay: string;
  shadow: string;
  inputBackground: string;
  inputBorder: string;
  placeholder: string;
  progressTrack: string;
  progressFill: string;
  circularProgressTrack: string;
  circularProgressFill: string;
  circularProgressAccentTrack: string;
  circularProgressAccentFill: string;
  cardAccent: string;
  cardAccentBorder: string;
  cardAccentText: string;
  cardAccentIcon: string;
  cardAccentMuted: string;
  selectedBackground: string;
  selectedBorder: string;
  focusRing: string;
  navigationBackground: string;
  navigationText: string;
  navigationTextSecondary: string;

  // Compatibility aliases kept while existing components migrate by role.
  textPrimary: string;
  primaryContrast: string;
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

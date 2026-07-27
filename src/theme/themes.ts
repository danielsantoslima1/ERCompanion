import { palette } from './palette';
import type { AppTheme, ThemeBorderRadius, ThemeSpacing } from './types';

const spacing: ThemeSpacing = {
  extraSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

const borderRadius: ThemeBorderRadius = {
  small: 4,
  medium: 8,
  large: 16,
  round: 999,
};

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    background: palette.parchmentBeige,
    surface: palette.lightBeige,
    surfaceElevated: palette.white,
    textPrimary: palette.black,
    textSecondary: palette.earthyBrown,
    border: palette.agedGold,
    primary: palette.agedGold,
    primaryContrast: palette.white,
    accent: palette.mossGreen,
    success: palette.darkGreen,
    danger: palette.mutedRed,
    disabled: palette.gray,
    progressTrack: '#C9BFA7',
    drawerBackground: palette.lightBeige,
    drawerActiveBackground: palette.lightGold,
    drawerActiveText: palette.black,
  },
  spacing,
  borderRadius,
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    background: palette.black,
    surface: palette.darkGray,
    surfaceElevated: palette.darkBrown,
    textPrimary: palette.lightBeige,
    textSecondary: palette.parchmentBeige,
    border: palette.earthyBrown,
    primary: palette.lightGold,
    primaryContrast: palette.black,
    accent: '#8A9B5D',
    success: '#8BA96C',
    danger: '#C46A62',
    disabled: palette.gray,
    progressTrack: '#4A463D',
    drawerBackground: palette.darkGray,
    drawerActiveBackground: palette.darkGreen,
    drawerActiveText: palette.lightGold,
  },
  spacing,
  borderRadius,
};

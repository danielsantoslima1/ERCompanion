import { createNavigationTheme } from '../../navigation/navigation-theme';
import { getContrastRatio } from '../contrast';
import { darkTheme, lightTheme } from '../themes';

const requiredTokens = [
  'background',
  'surface',
  'surfaceSecondary',
  'surfaceElevated',
  'primary',
  'primaryStrong',
  'primarySoft',
  'text',
  'textSecondary',
  'textOnPrimary',
  'border',
  'borderStrong',
  'accent',
  'accentStrong',
  'accentSoft',
  'warning',
  'warningBackground',
  'danger',
  'dangerBackground',
  'success',
  'successBackground',
  'successActionBackground',
  'successActionText',
  'disabled',
  'disabledText',
  'overlay',
  'shadow',
  'inputBackground',
  'inputBorder',
  'placeholder',
  'progressTrack',
  'progressFill',
  'circularProgressTrack',
  'circularProgressFill',
  'circularProgressAccentTrack',
  'circularProgressAccentFill',
  'cardAccent',
  'cardAccentBorder',
  'cardAccentText',
  'cardAccentIcon',
  'cardAccentMuted',
  'selectedBackground',
  'selectedBorder',
  'focusRing',
  'navigationBackground',
  'navigationText',
  'navigationTextSecondary',
] as const;

describe('semantic color themes', () => {
  it('keeps required tokens defined and in parity', () => {
    expect(Object.keys(lightTheme.colors).sort()).toEqual(
      Object.keys(darkTheme.colors).sort(),
    );

    for (const token of requiredTokens) {
      expect(lightTheme.colors[token]).toBeTruthy();
      expect(darkTheme.colors[token]).toBeTruthy();
    }
  });

  it.each([lightTheme, darkTheme])(
    'meets normal-text contrast targets in the $mode theme',
    (theme) => {
      expect(getContrastRatio(theme.colors.text, theme.colors.background))
        .toBeGreaterThanOrEqual(4.5);
      expect(getContrastRatio(theme.colors.text, theme.colors.surface))
        .toBeGreaterThanOrEqual(4.5);
      expect(
        getContrastRatio(
          theme.colors.navigationText,
          theme.colors.navigationBackground,
        ),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        getContrastRatio(theme.colors.textOnPrimary, theme.colors.primary),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        getContrastRatio(theme.colors.placeholder, theme.colors.inputBackground),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        getContrastRatio(theme.colors.danger, theme.colors.dangerBackground),
      ).toBeGreaterThanOrEqual(4.5);
    },
  );

  it.each([lightTheme, darkTheme])(
    'keeps completed action text readable on the $mode success button',
    (theme) => {
      expect(getContrastRatio(theme.colors.successActionText, theme.colors.successActionBackground))
        .toBeGreaterThanOrEqual(4.5);
    },
  );

  it.each([lightTheme, darkTheme])(
    'keeps interactive boundaries visible in the $mode theme',
    (theme) => {
      expect(
        getContrastRatio(theme.colors.inputBorder, theme.colors.inputBackground),
      ).toBeGreaterThanOrEqual(3);
      expect(
        getContrastRatio(
          theme.colors.selectedBorder,
          theme.colors.selectedBackground,
        ),
      ).toBeGreaterThanOrEqual(3);
      expect(
        getContrastRatio(theme.colors.focusRing, theme.colors.background),
      ).toBeGreaterThanOrEqual(3);
      expect(
        getContrastRatio(
          theme.colors.circularProgressTrack,
          theme.colors.background,
        ),
      ).toBeGreaterThanOrEqual(3);
      expect(
        getContrastRatio(
          theme.colors.circularProgressTrack,
          theme.colors.surfaceElevated,
        ),
      ).toBeGreaterThanOrEqual(3);
      expect(theme.colors.circularProgressTrack).not.toBe(
        theme.colors.circularProgressFill,
      );
      expect(
        getContrastRatio(
          theme.colors.circularProgressAccentTrack,
          theme.colors.background,
        ),
      ).toBeGreaterThanOrEqual(3);
      expect(
        getContrastRatio(
          theme.colors.circularProgressAccentTrack,
          theme.colors.surfaceElevated,
        ),
      ).toBeGreaterThanOrEqual(3);
      expect(theme.colors.circularProgressAccentTrack).not.toBe(
        theme.colors.circularProgressAccentFill,
      );
    },
  );

  it('keeps the dark circular accent distinct from warning feedback', () => {
    expect(darkTheme.colors.circularProgressAccentFill).not.toBe(
      darkTheme.colors.warning,
    );
    expect(darkTheme.colors.circularProgressAccentFill).toBe(
      darkTheme.colors.circularProgressFill,
    );
  });

  it('gives dark cards a structural green surface with accessible gold details', () => {
    expect(darkTheme.colors.cardAccent).toBe(darkTheme.colors.surface);
    expect(darkTheme.colors.cardAccentBorder).toBe('#927A45');
    expect(darkTheme.colors.cardAccentText).toBe('#E2B34A');
    expect(darkTheme.colors.cardAccentIcon).toBe('#E2B34A');
    expect(
      getContrastRatio(
        darkTheme.colors.cardAccentText,
        darkTheme.colors.cardAccent,
      ),
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      getContrastRatio(
        darkTheme.colors.cardAccentBorder,
        darkTheme.colors.cardAccent,
      ),
    ).toBeGreaterThanOrEqual(3);
  });

  it('preserves the previous light-card appearance through semantic aliases', () => {
    expect(lightTheme.colors.cardAccent).toBe(lightTheme.colors.surface);
    expect(lightTheme.colors.cardAccentBorder).toBe(lightTheme.colors.border);
    expect(lightTheme.colors.cardAccentText).toBe(lightTheme.colors.text);
    expect(lightTheme.colors.cardAccentIcon).toBe(
      lightTheme.colors.textSecondary,
    );
  });

  it.each([lightTheme, darkTheme])(
    'maps navigation to structural green tokens in the $mode theme',
    (theme) => {
      const navigationTheme = createNavigationTheme(theme);
      expect(navigationTheme.colors.card).toBe(theme.colors.navigationBackground);
      expect(navigationTheme.colors.text).toBe(theme.colors.navigationText);
      expect(navigationTheme.colors.primary).toBe(theme.colors.accent);
    },
  );
});

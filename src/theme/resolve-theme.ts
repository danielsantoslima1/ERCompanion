import type { ThemePreference } from '../types/settings';
import type { ResolvedTheme } from './types';

type SystemColorScheme = ResolvedTheme | null | undefined;

export function resolveTheme(
  preference: ThemePreference,
  systemColorScheme: SystemColorScheme,
): ResolvedTheme {
  if (preference === 'light' || preference === 'dark') {
    return preference;
  }

  return systemColorScheme === 'light' ? 'light' : 'dark';
}

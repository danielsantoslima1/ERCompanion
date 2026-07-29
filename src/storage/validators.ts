import type { Language, Settings, ThemePreference } from '../types/settings';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isLanguage(value: unknown): value is Language {
  return value === 'pt-BR' || value === 'en';
}

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === 'system' || value === 'light' || value === 'dark';
}

export function isSettings(value: unknown): value is Settings {
  if (!isRecord(value)) {
    return false;
  }

  return isLanguage(value.language) && isThemePreference(value.theme);
}

export function normalizeProgressId(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null;
  }

  const normalizedId = value.trim();
  return normalizedId.length > 0 && !normalizedId.startsWith('sample-')
    ? normalizedId
    : null;
}

export function normalizeProgressIds(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const uniqueIds = new Set<string>();

  for (const item of value) {
    const normalizedId = normalizeProgressId(item);

    if (normalizedId === null) {
      continue;
    }

    uniqueIds.add(normalizedId);
  }

  return [...uniqueIds];
}

export const normalizeBossId = normalizeProgressId;

export function validateDefeatedBossIds(value: unknown): string[] | null {
  if (!Array.isArray(value)) {
    return null;
  }

  if (value.some((item) => normalizeProgressId(item) === null)) {
    return null;
  }

  return normalizeProgressIds(value);
}

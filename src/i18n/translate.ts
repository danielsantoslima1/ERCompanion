import type { LocalizedText } from '../types/boss';
import type { Language } from '../types/settings';
import { translations } from './translations';
import type { TranslationDictionary } from './types';

export function getTranslationDictionary(language: Language): TranslationDictionary {
  return translations[language];
}

export function translate<
  Section extends keyof TranslationDictionary,
  Key extends keyof TranslationDictionary[Section],
>(
  language: Language,
  section: Section,
  key: Key,
): TranslationDictionary[Section][Key] {
  return translations[language][section][key];
}

export function getLocalizedText(value: LocalizedText, language: Language): string {
  const preferredValue = value[language];
  const fallbackValue = language === 'pt-BR' ? value.en : value['pt-BR'];

  if (preferredValue.trim().length > 0) {
    return preferredValue;
  }

  if (fallbackValue.trim().length > 0) {
    return fallbackValue;
  }

  return '';
}

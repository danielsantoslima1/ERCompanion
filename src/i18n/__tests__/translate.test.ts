import type { LocalizedText } from '../../types';
import {
  getLocalizedText,
  getTranslationDictionary,
  translate,
} from '../translate';
import {
  enTranslations,
  ptBRTranslations,
} from '../translations';

describe('translation helpers', () => {
  it('gets the Portuguese dictionary', () => {
    expect(getTranslationDictionary('pt-BR')).toBe(ptBRTranslations);
  });

  it('gets the English dictionary', () => {
    expect(getTranslationDictionary('en')).toBe(enTranslations);
  });

  it('selects Portuguese localized text', () => {
    const value: LocalizedText = {
      'pt-BR': 'Texto em português',
      en: 'English text',
    };

    expect(getLocalizedText(value, 'pt-BR')).toBe('Texto em português');
  });

  it('selects English localized text', () => {
    const value: LocalizedText = {
      'pt-BR': 'Texto em português',
      en: 'English text',
    };

    expect(getLocalizedText(value, 'en')).toBe('English text');
  });

  it('falls back from Portuguese to English', () => {
    const value: LocalizedText = {
      'pt-BR': '',
      en: 'English fallback',
    };

    expect(getLocalizedText(value, 'pt-BR')).toBe('English fallback');
  });

  it('falls back from English to Portuguese', () => {
    const value: LocalizedText = {
      'pt-BR': 'Alternativa em português',
      en: '',
    };

    expect(getLocalizedText(value, 'en')).toBe('Alternativa em português');
  });

  it('treats whitespace-only preferred values as empty', () => {
    const value: LocalizedText = {
      'pt-BR': ' \t ',
      en: 'English fallback',
    };

    expect(getLocalizedText(value, 'pt-BR')).toBe('English fallback');
  });

  it('returns an empty string when both localized values are empty', () => {
    const value: LocalizedText = {
      'pt-BR': '  ',
      en: '\n',
    };

    expect(getLocalizedText(value, 'en')).toBe('');
  });

  it('accesses an existing translation with typed section and key arguments', () => {
    const translatedValue: string = translate(
      'en',
      'navigation',
      'settings',
    );

    expect(translatedValue).toBe(enTranslations.navigation.settings);
  });
});

export type Language = 'pt-BR' | 'en';

export type ThemePreference = 'system' | 'light' | 'dark';

export interface Settings {
  language: Language;
  theme: ThemePreference;
}

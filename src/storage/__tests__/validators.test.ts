import {
  isLanguage,
  isSettings,
  isThemePreference,
  validateDefeatedBossIds,
} from '../validators';

describe('storage validators', () => {
  it('accepts valid languages', () => {
    expect(isLanguage('pt-BR')).toBe(true);
    expect(isLanguage('en')).toBe(true);
  });

  it('rejects invalid languages', () => {
    expect(isLanguage('pt')).toBe(false);
    expect(isLanguage(null)).toBe(false);
    expect(isLanguage(1)).toBe(false);
  });

  it('accepts valid theme preferences', () => {
    expect(isThemePreference('system')).toBe(true);
    expect(isThemePreference('light')).toBe(true);
    expect(isThemePreference('dark')).toBe(true);
  });

  it('rejects invalid theme preferences', () => {
    expect(isThemePreference('automatic')).toBe(false);
    expect(isThemePreference(undefined)).toBe(false);
    expect(isThemePreference(false)).toBe(false);
  });

  it('accepts a valid settings object', () => {
    expect(isSettings({ language: 'pt-BR', theme: 'system' })).toBe(true);
  });

  it('rejects invalid settings objects', () => {
    expect(isSettings(null)).toBe(false);
    expect(isSettings([])).toBe(false);
    expect(isSettings({ language: 'pt', theme: 'system' })).toBe(false);
    expect(isSettings({ language: 'en', theme: 'automatic' })).toBe(false);
    expect(isSettings({ language: 'en' })).toBe(false);
  });

  it('accepts a valid defeated boss ID list', () => {
    expect(validateDefeatedBossIds(['boss-a', 'boss-b'])).toEqual([
      'boss-a',
      'boss-b',
    ]);
  });

  it('normalizes IDs with trim', () => {
    expect(validateDefeatedBossIds([' boss-a ', '\tboss-b\n'])).toEqual([
      'boss-a',
      'boss-b',
    ]);
  });

  it('removes duplicate IDs', () => {
    expect(
      validateDefeatedBossIds(['boss-a', 'boss-a', 'boss-b']),
    ).toEqual(['boss-a', 'boss-b']);
  });

  it('preserves the order of the first ID occurrence', () => {
    expect(
      validateDefeatedBossIds(['boss-b', 'boss-a', ' boss-b ', 'boss-c']),
    ).toEqual(['boss-b', 'boss-a', 'boss-c']);
  });

  it('rejects empty strings', () => {
    expect(validateDefeatedBossIds(['boss-a', ''])).toBeNull();
  });

  it('rejects whitespace-only strings', () => {
    expect(validateDefeatedBossIds(['boss-a', ' \t '])).toBeNull();
  });

  it('rejects values that are not arrays', () => {
    expect(validateDefeatedBossIds('boss-a')).toBeNull();
    expect(validateDefeatedBossIds({ id: 'boss-a' })).toBeNull();
  });

  it('rejects arrays containing non-string values', () => {
    expect(validateDefeatedBossIds(['boss-a', 2])).toBeNull();
    expect(validateDefeatedBossIds(['boss-a', null])).toBeNull();
  });
});

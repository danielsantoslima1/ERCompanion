import { resolveTheme } from '../resolve-theme';

describe('resolveTheme', () => {
  it('returns light for a light preference', () => {
    expect(resolveTheme('light', 'dark')).toBe('light');
  });

  it('returns dark for a dark preference', () => {
    expect(resolveTheme('dark', 'light')).toBe('dark');
  });

  it('returns light for a system preference with a light system scheme', () => {
    expect(resolveTheme('system', 'light')).toBe('light');
  });

  it('returns dark for a system preference with a dark system scheme', () => {
    expect(resolveTheme('system', 'dark')).toBe('dark');
  });

  it('returns dark for a system preference with a null system scheme', () => {
    expect(resolveTheme('system', null)).toBe('dark');
  });

  it('returns dark for a system preference with an undefined system scheme', () => {
    expect(resolveTheme('system', undefined)).toBe('dark');
  });
});

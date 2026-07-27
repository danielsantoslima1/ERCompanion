import { render, screen } from '@testing-library/react-native';

import type { AppContextValue } from '../../contexts/app-context';
import { getTranslationDictionary } from '../../i18n';
import { lightTheme } from '../../theme';
import { RegionProgressItem } from '../region-progress-item';

const translations = getTranslationDictionary('en');
let mockAppState: Pick<AppContextValue, 'theme' | 'translations'> = {
  theme: lightTheme,
  translations,
};

jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = { theme: lightTheme, translations };
});

describe('RegionProgressItem', () => {
  it('shows the region name, ratio, percentage, and textual progress', async () => {
    await render(
      <RegionProgressItem
        defeated={3}
        percentage={30}
        regionName="Test Region"
        total={10}
      />,
    );

    expect(screen.getByText('Test Region')).toBeOnTheScreen();
    expect(screen.getByText('3/10')).toBeOnTheScreen();
    expect(screen.getByText('30%')).toBeOnTheScreen();
  });

  it.each([
    { percentage: 0, expected: '0%' },
    { percentage: 100, expected: '100%' },
    { percentage: -10, expected: '0%' },
    { percentage: 140, expected: '100%' },
  ])(
    'renders $percentage as bounded textual progress $expected',
    async ({ percentage, expected }) => {
      await render(
        <RegionProgressItem
          defeated={0}
          percentage={percentage}
          regionName="Boundary Region"
          total={5}
        />,
      );

      expect(screen.getByText(expected)).toBeOnTheScreen();
      expect(screen.getByText('0/5')).toBeOnTheScreen();
    },
  );

  it('exposes the translated accessibility label', async () => {
    const label = translations.home.regionProgressAccessibility(
      'Accessible Region',
      2,
      4,
      50,
    );

    await render(
      <RegionProgressItem
        defeated={2}
        percentage={50}
        regionName="Accessible Region"
        total={4}
      />,
    );

    expect(screen.getByRole('text', { name: label })).toBeOnTheScreen();
  });
});

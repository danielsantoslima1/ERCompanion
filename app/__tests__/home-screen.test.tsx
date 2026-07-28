import { render, screen } from '@testing-library/react-native';

import HomeScreen from '../(drawer)/index';
import type { AppContextValue } from '../../src/contexts/app-context';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';
import type { BossEncounter, CatalogRegion } from '../../src/data/catalog';

const testRegions: readonly CatalogRegion[] = [
  {
    id: 'test-region-b',
    name: { 'pt-BR': 'Região Teste B', en: 'Test Region B' },
    contentPack: 'shadow-of-the-erdtree',
    displayOrder: 2,
  },
  {
    id: 'test-region-a',
    name: { 'pt-BR': 'Região Teste A', en: 'Test Region A' },
    contentPack: 'base-game',
    displayOrder: 1,
  },
];
const testBosses: readonly BossEncounter[] = [
  {
    id: 'test-boss-a',
    name: { 'pt-BR': 'Chefe Teste A', en: 'Test Boss A' },
    location: { 'pt-BR': 'Local Teste A', en: 'Test Location A' },
    regionId: 'test-region-a',
  },
  {
    id: 'test-boss-b',
    name: { 'pt-BR': 'Chefe Teste B', en: 'Test Boss B' },
    location: { 'pt-BR': 'Local Teste B', en: 'Test Location B' },
    regionId: 'test-region-a',
  },
  {
    id: 'test-boss-c',
    name: { 'pt-BR': 'Chefe Teste C', en: 'Test Boss C' },
    location: { 'pt-BR': 'Local Teste C', en: 'Test Location C' },
    regionId: 'test-region-b',
  },
];

interface MockDataControl {
  setMockData: (
    regions: readonly CatalogRegion[],
    bosses: readonly BossEncounter[],
  ) => void;
}

let mockAppState: Pick<
  AppContextValue,
  'defeatedBossIds' | 'language' | 'theme' | 'translations'
> = {
  defeatedBossIds: [],
  language: 'pt-BR',
  theme: lightTheme,
  translations: getTranslationDictionary('pt-BR'),
};

jest.mock('../../src/data', () => {
  const actualData = jest.requireActual('../../src/data');
  const regionList: import('../../src/types').Region[] = [];
  const bossList: import('../../src/types').BossEncounter[] = [];

  return {
    ...actualData,
    bosses: bossList,
    regions: regionList,
    setMockData(
      nextRegions: readonly import('../../src/types').Region[],
      nextBosses: readonly import('../../src/types').BossEncounter[],
    ) {
      regionList.splice(0, regionList.length, ...nextRegions);
      bossList.splice(0, bossList.length, ...nextBosses);
    },
  };
});

jest.mock('../../src/hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

const mockDataControl =
  jest.requireMock<MockDataControl>('../../src/data');

beforeEach(() => {
  jest.clearAllMocks();
  mockDataControl.setMockData(testRegions, testBosses);
  mockAppState = {
    defeatedBossIds: [],
    language: 'pt-BR',
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('HomeScreen', () => {
  it('shows translated headings and empty progress by total and region', async () => {
    const translations = getTranslationDictionary('pt-BR');

    await render(<HomeScreen />);

    expect(
      screen.getByRole('header', { name: translations.home.title }),
    ).toBeOnTheScreen();
    expect(screen.getByText(translations.home.description)).toBeOnTheScreen();
    expect(screen.getByText('0/3')).toBeOnTheScreen();
    expect(screen.getAllByText('0%')).toHaveLength(3);
    expect(screen.getByText('Região Teste A')).toBeOnTheScreen();
    expect(screen.getByText('Região Teste B')).toBeOnTheScreen();
  });

  it('calculates partial total and regional progress', async () => {
    mockAppState = {
      ...mockAppState,
      defeatedBossIds: ['test-boss-a', 'test-boss-c'],
    };

    await render(<HomeScreen />);

    expect(screen.getByText('2/3')).toBeOnTheScreen();
    expect(screen.getByText('67%')).toBeOnTheScreen();
    expect(screen.getByText('1/2')).toBeOnTheScreen();
    expect(screen.getByText('50%')).toBeOnTheScreen();
    expect(screen.getByText('1/1')).toBeOnTheScreen();
    expect(screen.getByText('100%')).toBeOnTheScreen();
  });

  it('ignores unknown defeated IDs', async () => {
    mockAppState = {
      ...mockAppState,
      defeatedBossIds: ['test-unknown-boss'],
    };

    await render(<HomeScreen />);

    expect(screen.getByText('0/3')).toBeOnTheScreen();
    expect(screen.getAllByText('0%')).toHaveLength(3);
  });

  it('localizes the screen and region names in English', async () => {
    const translations = getTranslationDictionary('en');
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations,
    };

    await render(<HomeScreen />);

    expect(
      screen.getByRole('header', { name: translations.home.title }),
    ).toBeOnTheScreen();
    expect(screen.getByText(translations.home.description)).toBeOnTheScreen();
    expect(screen.getByText('Test Region A')).toBeOnTheScreen();
    expect(screen.getByText('Test Region B')).toBeOnTheScreen();
  });

  it('shows the translated empty state and remains stable with empty lists', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockDataControl.setMockData([], []);

    await render(<HomeScreen />);

    expect(screen.getByText(translations.home.noRegions)).toBeOnTheScreen();
    expect(screen.getByText('0/0')).toBeOnTheScreen();
    expect(screen.getByText('0%')).toBeOnTheScreen();
  });

  it('renders a scrollable structure with an accessible main heading', async () => {
    await render(<HomeScreen />);

    expect(screen.getByRole('header')).toBeOnTheScreen();
    expect(
      screen.container.queryAll((instance) => instance.type === 'RCTScrollView'),
    ).not.toHaveLength(0);
  });
});

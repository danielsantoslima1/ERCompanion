import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';

import BossesScreen from '../bosses';
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
    regionId: 'test-region-b',
  },
];

interface MockDataControl {
  setMockData: (
    regions: readonly CatalogRegion[],
    bosses: readonly BossEncounter[],
  ) => void;
}

const mockRouterPush = jest.mocked(router.push);
let mockAppState: Pick<
  AppContextValue,
  'defeatedBossIds' | 'language' | 'theme' | 'translations'
> = {
  defeatedBossIds: [],
  language: 'pt-BR',
  theme: lightTheme,
  translations: getTranslationDictionary('pt-BR'),
};

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
  },
}));

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
    defeatedBossIds: ['test-boss-a'],
    language: 'pt-BR',
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('BossesScreen', () => {
  it('shows translated content, ordered localized regions, game, and progress', async () => {
    const translations = getTranslationDictionary('pt-BR');

    await render(<BossesScreen />);

    expect(
      screen.getByRole('header', { name: translations.bosses.title }),
    ).toBeOnTheScreen();
    expect(screen.getByText(translations.bosses.description)).toBeOnTheScreen();
    const regionButtons = screen.getAllByRole('button');
    expect(regionButtons[0]).toHaveAccessibleName(
      translations.bosses.openRegion('Região Teste A'),
    );
    expect(regionButtons[1]).toHaveAccessibleName(
      translations.bosses.openRegion('Região Teste B'),
    );
    expect(
      screen.getAllByText(translations.common.baseGame).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(translations.common.expansion).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText('1/1')).toBeOnTheScreen();
    expect(screen.getByText('100%')).toBeOnTheScreen();
    expect(screen.getByText('0/1')).toBeOnTheScreen();
    expect(screen.getByText('0%')).toBeOnTheScreen();
  });

  it('navigates through the public Router API with the selected region', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<BossesScreen />);

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.bosses.openRegion('Região Teste B'),
      }),
    );

    expect(mockRouterPush).toHaveBeenCalledWith({
      pathname: '/regions/[regionId]',
      params: { regionId: 'test-region-b' },
    });
  });

  it('shows the translated empty state when no regions exist', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockDataControl.setMockData([], []);

    await render(<BossesScreen />);

    expect(screen.getByText(translations.bosses.noRegions)).toBeOnTheScreen();
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('localizes all visible content and labels in English', async () => {
    const translations = getTranslationDictionary('en');
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations,
    };

    await render(<BossesScreen />);

    expect(
      screen.getByRole('header', { name: translations.bosses.title }),
    ).toBeOnTheScreen();
    expect(screen.getByText('Test Region A')).toBeOnTheScreen();
    expect(screen.getByText('Test Region B')).toBeOnTheScreen();
    expect(
      screen.getByRole('button', {
        name: translations.bosses.openRegion('Test Region A'),
      }),
    ).toBeOnTheScreen();
  });
});

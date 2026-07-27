import { fireEvent, render, screen } from '@testing-library/react-native';
import { router, useLocalSearchParams } from 'expo-router';

import RegionScreen from '../regions/[regionId]';
import type { AppContextValue } from '../../src/contexts/app-context';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';
import type { BossEncounter, Region } from '../../src/types';

const testRegions: readonly Region[] = [
  {
    id: 'test-region-a',
    name: { 'pt-BR': 'Região Teste', en: 'Test Region' },
    game: 'base-game',
    displayOrder: 1,
  },
  {
    id: 'test-region-b',
    name: { 'pt-BR': 'Região Secundária', en: 'Secondary Region' },
    game: 'shadow-of-the-erdtree',
    displayOrder: 2,
  },
];
const testBosses: readonly BossEncounter[] = [
  {
    id: 'test-boss-alpha',
    name: { 'pt-BR': 'Chefe Alfa', en: 'Alpha Boss' },
    location: { 'pt-BR': 'Torre Clara', en: 'Bright Tower' },
    regionId: 'test-region-a',
    game: 'base-game',
  },
  {
    id: 'test-boss-beta',
    name: { 'pt-BR': 'Chefe Beta', en: 'Beta Boss' },
    location: { 'pt-BR': 'Caverna Escura', en: 'Dark Cave' },
    regionId: 'test-region-a',
    game: 'base-game',
  },
  {
    id: 'test-boss-other',
    name: { 'pt-BR': 'Chefe Externo', en: 'Outside Boss' },
    location: { 'pt-BR': 'Outro Local', en: 'Other Place' },
    regionId: 'test-region-b',
    game: 'shadow-of-the-erdtree',
  },
];

interface MockDataControl {
  setMockData: (
    regions: readonly Region[],
    bosses: readonly BossEncounter[],
  ) => void;
}

const mockRouterBack = jest.mocked(router.back);
const mockUseLocalSearchParams = jest.mocked(useLocalSearchParams);
let mockAppState: Pick<
  AppContextValue,
  | 'defeatedBossIds'
  | 'language'
  | 'markBossDefeated'
  | 'markBossNotDefeated'
  | 'theme'
  | 'translations'
> = {
  defeatedBossIds: ['test-boss-alpha'],
  language: 'pt-BR',
  markBossDefeated: jest.fn<Promise<void>, [string]>().mockResolvedValue(),
  markBossNotDefeated: jest.fn<Promise<void>, [string]>().mockResolvedValue(),
  theme: lightTheme,
  translations: getTranslationDictionary('pt-BR'),
};

jest.mock('expo-router', () => ({
  router: {
    back: jest.fn(),
  },
  useLocalSearchParams: jest.fn(),
}));

jest.mock('expo-router/drawer', () => ({
  Drawer: {
    Screen: () => null,
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
  mockUseLocalSearchParams.mockReturnValue({ regionId: 'test-region-a' });
  mockAppState = {
    defeatedBossIds: ['test-boss-alpha'],
    language: 'pt-BR',
    markBossDefeated: jest.fn<Promise<void>, [string]>().mockResolvedValue(),
    markBossNotDefeated: jest.fn<Promise<void>, [string]>().mockResolvedValue(),
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('RegionScreen', () => {
  it('shows localized region progress and every initial boss in Portuguese', async () => {
    const translations = getTranslationDictionary('pt-BR');

    await render(<RegionScreen />);

    expect(
      screen.getByRole('header', { name: 'Região Teste' }),
    ).toBeOnTheScreen();
    expect(screen.getByText(translations.region.progress)).toBeOnTheScreen();
    expect(screen.getByText('1/2')).toBeOnTheScreen();
    expect(screen.getByText('50%')).toBeOnTheScreen();
    expect(screen.getByText('Chefe Alfa')).toBeOnTheScreen();
    expect(screen.getByText('Torre Clara')).toBeOnTheScreen();
    expect(screen.getByText('Chefe Beta')).toBeOnTheScreen();
    expect(screen.getByText('Caverna Escura')).toBeOnTheScreen();
    expect(screen.getByText(translations.region.resultCount(2))).toBeOnTheScreen();
  });

  it('localizes the region, bosses, locations, and result count in English', async () => {
    const translations = getTranslationDictionary('en');
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations,
    };

    await render(<RegionScreen />);

    expect(
      screen.getByRole('header', { name: 'Test Region' }),
    ).toBeOnTheScreen();
    expect(screen.getByText('Alpha Boss')).toBeOnTheScreen();
    expect(screen.getByText('Bright Tower')).toBeOnTheScreen();
    expect(screen.getByText('Beta Boss')).toBeOnTheScreen();
    expect(screen.getByText('Dark Cave')).toBeOnTheScreen();
    expect(screen.getByText(translations.region.resultCount(2))).toBeOnTheScreen();
  });

  it('searches names case-insensitively, trims spaces, and restores results', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<RegionScreen />);
    const search = screen.getByPlaceholderText(
      translations.region.searchPlaceholder,
    );

    await fireEvent.changeText(search, '  cHeFe aLfA  ');

    expect(screen.getByText('Chefe Alfa')).toBeOnTheScreen();
    expect(screen.queryByText('Chefe Beta')).toBeNull();
    expect(screen.getByText(translations.region.resultCount(1))).toBeOnTheScreen();

    await fireEvent.changeText(search, '');

    expect(screen.getByText('Chefe Alfa')).toBeOnTheScreen();
    expect(screen.getByText('Chefe Beta')).toBeOnTheScreen();
    expect(screen.getByText(translations.region.resultCount(2))).toBeOnTheScreen();
  });

  it('searches by localized location', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<RegionScreen />);

    await fireEvent.changeText(
      screen.getByPlaceholderText(translations.region.searchPlaceholder),
      'escura',
    );

    expect(screen.queryByText('Chefe Alfa')).toBeNull();
    expect(screen.getByText('Chefe Beta')).toBeOnTheScreen();
  });

  it('shows the translated empty message for an unknown search', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<RegionScreen />);

    await fireEvent.changeText(
      screen.getByPlaceholderText(translations.region.searchPlaceholder),
      'inexistente',
    );

    expect(screen.getByText(translations.region.noBossesFound)).toBeOnTheScreen();
    expect(screen.getByText(translations.region.resultCount(0))).toBeOnTheScreen();
  });

  it('filters all, defeated, and not-defeated bosses with accessible state', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<RegionScreen />);
    const allFilter = screen.getByRole('radio', {
      name: translations.region.all,
    });
    const defeatedFilter = screen.getByRole('radio', {
      name: translations.region.defeated,
    });
    const notDefeatedFilter = screen.getByRole('radio', {
      name: translations.region.notDefeated,
    });

    expect(allFilter.props.accessibilityState).toMatchObject({ checked: true });

    await fireEvent.press(defeatedFilter);
    expect(defeatedFilter.props.accessibilityState).toMatchObject({
      checked: true,
    });
    expect(screen.getByText('Chefe Alfa')).toBeOnTheScreen();
    expect(screen.queryByText('Chefe Beta')).toBeNull();

    await fireEvent.press(notDefeatedFilter);
    expect(notDefeatedFilter.props.accessibilityState).toMatchObject({
      checked: true,
    });
    expect(screen.queryByText('Chefe Alfa')).toBeNull();
    expect(screen.getByText('Chefe Beta')).toBeOnTheScreen();

    await fireEvent.press(allFilter);
    expect(screen.getByText('Chefe Alfa')).toBeOnTheScreen();
    expect(screen.getByText('Chefe Beta')).toBeOnTheScreen();
  });

  it('combines search and defeated-state filtering', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<RegionScreen />);

    await fireEvent.changeText(
      screen.getByPlaceholderText(translations.region.searchPlaceholder),
      'beta',
    );
    await fireEvent.press(
      screen.getByRole('radio', { name: translations.region.defeated }),
    );

    expect(screen.getByText(translations.region.noBossesFound)).toBeOnTheScreen();
    expect(screen.getByText(translations.region.resultCount(0))).toBeOnTheScreen();
  });

  it('updates defeated presentation after context progress changes', async () => {
    const translations = getTranslationDictionary('pt-BR');
    const renderResult = await render(<RegionScreen />);

    expect(screen.getByText(translations.region.defeatedStatus)).toBeOnTheScreen();
    expect(
      screen.getByText(translations.region.notDefeatedStatus),
    ).toBeOnTheScreen();

    mockAppState = {
      ...mockAppState,
      defeatedBossIds: ['test-boss-beta'],
    };
    await renderResult.rerender(<RegionScreen />);

    const defeatedFilter = screen.getByRole('radio', {
      name: translations.region.defeated,
    });
    await fireEvent.press(defeatedFilter);
    expect(screen.queryByText('Chefe Alfa')).toBeNull();
    expect(screen.getByText('Chefe Beta')).toBeOnTheScreen();
  });

  it('shows a safe translated not-found state and navigates back', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockUseLocalSearchParams.mockReturnValue({
      regionId: 'test-missing-region',
    });

    await render(<RegionScreen />);

    expect(
      screen.getByRole('header', {
        name: translations.region.notFoundTitle,
      }),
    ).toBeOnTheScreen();
    expect(screen.getByText(translations.region.notFoundMessage)).toBeOnTheScreen();
    expect(screen.queryByText('test-missing-region')).toBeNull();

    await fireEvent.press(
      screen.getByRole('button', { name: translations.region.back }),
    );
    expect(mockRouterBack).toHaveBeenCalledTimes(1);
  });
});

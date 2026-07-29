import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import CombinedAllBossesScreen from '../(drawer)/all-bosses';
import type { AppContextValue } from '../../src/contexts/app-context';
import {
  bossEncounters,
  catalogRegions,
  type BossEncounter,
  type CatalogRegion,
} from '../../src/data/catalog';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';

const testRegions: readonly CatalogRegion[] = [
  {
    id: 'base',
    name: { 'pt-BR': 'Região Base', en: 'Base Region' },
    contentPack: 'base-game',
    displayOrder: 90,
  },
  {
    id: 'dlc',
    name: { 'pt-BR': 'Região DLC', en: 'DLC Region' },
    contentPack: 'shadow-of-the-erdtree',
    displayOrder: 1,
  },
];
const testBosses: readonly BossEncounter[] = [
  {
    id: 'z-base',
    name: { 'pt-BR': 'Zeta', en: 'Alpha' },
    location: { 'pt-BR': 'Caverna', en: 'Cave' },
    availability: { 'pt-BR': 'À noite', en: 'At night' },
    regionId: 'base',
  },
  {
    id: 'a-base',
    name: { 'pt-BR': 'Alfa', en: 'Zeta' },
    location: { 'pt-BR': 'Torre', en: 'Tower' },
    regionId: 'base',
  },
  {
    id: 'dlc-boss',
    name: { 'pt-BR': 'Chefe DLC', en: 'DLC Boss' },
    location: { 'pt-BR': 'Costa', en: 'Coast' },
    regionId: 'dlc',
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
  | 'bossProgress'
  | 'defeatedBossIds'
  | 'language'
  | 'markBossDefeated'
  | 'markBossNotDefeated'
  | 'theme'
  | 'translations'
>;

jest.mock('expo-router', () => ({
  router: { push: jest.fn() },
}));
jest.mock('expo-router/drawer', () => ({
  Drawer: { Screen: () => null },
}));
jest.mock('../../src/data', () => {
  const actual = jest.requireActual('../../src/data');
  const regionList: CatalogRegion[] = [];
  const bossList: BossEncounter[] = [];
  return {
    ...actual,
    regions: regionList,
    bosses: bossList,
    setMockData(
      nextRegions: readonly CatalogRegion[],
      nextBosses: readonly BossEncounter[],
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
    bossProgress: { completed: 0, total: 208, percentage: 0 },
    defeatedBossIds: [],
    language: 'pt-BR',
    markBossDefeated: jest.fn().mockResolvedValue(undefined),
    markBossNotDefeated: jest.fn().mockResolvedValue(undefined),
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('CombinedAllBossesScreen route and sections', () => {
  it('renders the stable combined route screen without an unmatched state', async () => {
    await render(<CombinedAllBossesScreen />);
    expect(
      screen.getByRole('header', { name: 'Todos os chefes' }),
    ).toBeOnTheScreen();
    expect(screen.queryByText(/Unmatched Route/i)).toBeNull();
  });

  it('renders the approved 208 encounters split as 165 and 43', async () => {
    mockDataControl.setMockData(catalogRegions, bossEncounters);
    await render(<CombinedAllBossesScreen />);
    expect(
      screen.getByText(mockAppState.translations.region.resultCount(208)),
    ).toBeOnTheScreen();
    expect(
      bossEncounters.filter((boss) =>
        catalogRegions
          .filter((region) => region.contentPack === 'base-game')
          .some((region) => region.id === boss.regionId),
      ),
    ).toHaveLength(165);
    expect(
      bossEncounters.filter((boss) =>
        catalogRegions
          .filter((region) => region.contentPack === 'shadow-of-the-erdtree')
          .some((region) => region.id === boss.regionId),
      ),
    ).toHaveLength(43);
  });

  it('keeps Base game before the expansion without region grouping', async () => {
    await render(<CombinedAllBossesScreen />);
    const headers = screen.getAllByRole('header');
    expect(headers.map((header) => header.props.children)).toEqual([
      'Todos os chefes',
      'Jogo base',
      'Shadow of the Erdtree',
    ]);
    expect(screen.getAllByText('Região Base')).toHaveLength(2);
    expect(screen.queryByText('Progresso do Jogo Base')).toBeNull();
    expect(screen.queryByText('Progresso da expansão')).toBeNull();
  });
});

describe('CombinedAllBossesScreen progress', () => {
  it('shows one horizontal 0/208 progress card with its track', async () => {
    await render(<CombinedAllBossesScreen />);
    expect(screen.getByText('Progresso dos Chefes')).toBeOnTheScreen();
    expect(screen.getByText('0/208')).toBeOnTheScreen();
    expect(screen.getByText('0%')).toBeOnTheScreen();
    expect(
      StyleSheet.flatten(screen.getByTestId('progress-values').props.style),
    ).toMatchObject({
      flexDirection: 'row',
      justifyContent: 'space-between',
    });
    expect(screen.getByTestId('progress-track')).toBeOnTheScreen();
  });

  it('shows complete progress without exceeding 100%', async () => {
    mockAppState = {
      ...mockAppState,
      bossProgress: { completed: 208, total: 208, percentage: 100 },
      defeatedBossIds: bossEncounters.map((boss) => boss.id),
    };
    await render(<CombinedAllBossesScreen />);
    expect(screen.getByText('208/208')).toBeOnTheScreen();
    expect(screen.getByText('100%')).toBeOnTheScreen();
  });

  it('ignores unknown IDs through the catalog progress summary', async () => {
    mockAppState = {
      ...mockAppState,
      defeatedBossIds: ['future-boss'],
      bossProgress: { completed: 0, total: 208, percentage: 0 },
    };
    await render(<CombinedAllBossesScreen />);
    expect(screen.getByText('0/208')).toBeOnTheScreen();
  });
});

describe('CombinedAllBossesScreen ordering, search, and filters', () => {
  it('sorts each section in Portuguese and changes to English', async () => {
    const view = await render(<CombinedAllBossesScreen />);
    let cards = screen.getAllByLabelText(/estado/i);
    expect(cards[0].props.accessibilityLabel).toContain('Alfa');
    expect(cards[1].props.accessibilityLabel).toContain('Zeta');

    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations: getTranslationDictionary('en'),
    };
    await view.rerender(<CombinedAllBossesScreen />);
    cards = screen.getAllByLabelText(/status/i);
    expect(cards[0].props.accessibilityLabel).toContain('Alpha');
    expect(cards[1].props.accessibilityLabel).toContain('Zeta');
  });

  it('searches by name, region, location, and hidden availability', async () => {
    await render(<CombinedAllBossesScreen />);
    const search = screen.getByLabelText('Buscar');
    for (const query of ['Zeta', 'Região Base', 'Caverna', 'noite']) {
      await fireEvent.changeText(search, query);
      expect(screen.getByText('Zeta')).toBeOnTheScreen();
      await fireEvent.changeText(search, '');
    }
  });

  it('hides only the section without search results', async () => {
    await render(<CombinedAllBossesScreen />);
    await fireEvent.changeText(screen.getByLabelText('Buscar'), 'Chefe DLC');
    expect(screen.queryByTestId('boss-section-base-game')).toBeNull();
    expect(
      screen.getByTestId('boss-section-shadow-of-the-erdtree'),
    ).toBeOnTheScreen();
  });

  it('shows one empty state and no empty headers when nothing matches', async () => {
    await render(<CombinedAllBossesScreen />);
    await fireEvent.changeText(screen.getByLabelText('Buscar'), 'inexistente');
    expect(screen.getByText('Nenhum chefe encontrado.')).toBeOnTheScreen();
    expect(screen.queryByTestId('boss-section-base-game')).toBeNull();
    expect(
      screen.queryByTestId('boss-section-shadow-of-the-erdtree'),
    ).toBeNull();
  });

  it('combines defeated filtering with search without duplicates', async () => {
    mockAppState = {
      ...mockAppState,
      defeatedBossIds: ['z-base'],
      bossProgress: { completed: 1, total: 208, percentage: 0 },
    };
    await render(<CombinedAllBossesScreen />);
    await fireEvent.changeText(screen.getByLabelText('Buscar'), 'Zeta');
    await fireEvent.press(screen.getByRole('radio', { name: 'Derrotados' }));
    expect(screen.getAllByText('Zeta')).toHaveLength(1);
    expect(screen.queryByText('Alfa')).toBeNull();
  });

  it('not-defeated filtering excludes defeated encounters', async () => {
    mockAppState = {
      ...mockAppState,
      defeatedBossIds: ['z-base'],
      bossProgress: { completed: 1, total: 208, percentage: 0 },
    };
    await render(<CombinedAllBossesScreen />);
    await fireEvent.press(
      screen.getByRole('radio', { name: 'Não derrotados' }),
    );
    expect(screen.queryByText('Zeta')).toBeNull();
    expect(screen.getByText('Alfa')).toBeOnTheScreen();
  });
});

describe('CombinedAllBossesScreen cards and details', () => {
  it('keeps cards compact with decorative status indicators', async () => {
    await render(<CombinedAllBossesScreen />);
    expect(
      screen.getAllByText('⚔', { includeHiddenElements: true }),
    ).toHaveLength(3);
    expect(screen.queryByText('À noite')).toBeNull();
    expect(screen.queryByText(/participante/i)).toBeNull();
  });

  it('opens the correct details without changing progress', async () => {
    await render(<CombinedAllBossesScreen />);
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.bossDetails.viewDetailsFor('Alfa'),
      }),
    );
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/bosses/[bossId]',
      params: { bossId: 'a-base' },
    });
    expect(mockAppState.markBossDefeated).not.toHaveBeenCalled();
  });
});

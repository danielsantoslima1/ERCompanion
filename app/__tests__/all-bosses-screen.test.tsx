import { fireEvent, render, screen } from '@testing-library/react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import AllBossesScreen from '../(drawer)/all-bosses/[contentPack]';
import type { AppContextValue } from '../../src/contexts/app-context';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';
import {
  bossEncounters,
  catalogRegions,
  type BossEncounter,
  type CatalogRegion,
} from '../../src/data/catalog';

const testRegions: readonly CatalogRegion[] = [
  { id: 'base', name: { 'pt-BR': 'Base', en: 'Base' }, contentPack: 'base-game', displayOrder: 1 },
  { id: 'dlc', name: { 'pt-BR': 'Expansão', en: 'Expansion' }, contentPack: 'shadow-of-the-erdtree', displayOrder: 1 },
];
const testBosses: readonly BossEncounter[] = [
  { id: 'z-boss', name: { 'pt-BR': 'Zeta', en: 'Alpha' }, location: { 'pt-BR': 'Caverna', en: 'Cave' }, availability: { 'pt-BR': 'À noite', en: 'At night' }, regionId: 'base' },
  { id: 'a-boss', name: { 'pt-BR': 'Alfa', en: 'Zeta' }, location: { 'pt-BR': 'Torre', en: 'Tower' }, regionId: 'base' },
  { id: 'dlc-boss', name: { 'pt-BR': 'DLC', en: 'DLC' }, location: { 'pt-BR': 'Costa', en: 'Coast' }, regionId: 'dlc' },
];

let mockAppState: Pick<AppContextValue, 'defeatedBossIds' | 'language' | 'markBossDefeated' | 'markBossNotDefeated' | 'theme' | 'translations'>;
interface MockDataControl {
  setMockData: (
    regions: readonly CatalogRegion[],
    bosses: readonly BossEncounter[],
  ) => void;
}

jest.mock('expo-router', () => ({
  router: { back: jest.fn(), push: jest.fn() },
  useLocalSearchParams: jest.fn(),
}));
jest.mock('expo-router/drawer', () => ({ Drawer: { Screen: () => null } }));
jest.mock('../../src/data', () => {
  const actual = jest.requireActual('../../src/data');
  const regionList: CatalogRegion[] = [];
  const bossList: BossEncounter[] = [];
  return {
    ...actual,
    regions: regionList,
    bosses: bossList,
    setMockData(nextRegions: readonly CatalogRegion[], nextBosses: readonly BossEncounter[]) {
      regionList.splice(0, regionList.length, ...nextRegions);
      bossList.splice(0, bossList.length, ...nextBosses);
    },
  };
});
jest.mock('../../src/hooks/use-app', () => ({ useApp: jest.fn(() => mockAppState) }));
const mockDataControl = jest.requireMock<MockDataControl>('../../src/data');

beforeEach(() => {
  jest.clearAllMocks();
  mockDataControl.setMockData(testRegions, testBosses);
  jest.mocked(useLocalSearchParams).mockReturnValue({ contentPack: 'base-game' });
  mockAppState = {
    defeatedBossIds: [],
    language: 'pt-BR',
    markBossDefeated: jest.fn().mockResolvedValue(undefined),
    markBossNotDefeated: jest.fn().mockResolvedValue(undefined),
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('AllBossesScreen', () => {
  it('shows only the content pack, alphabetically, with region and compact cards', async () => {
    await render(<AllBossesScreen />);
    expect(screen.getByText('0/2')).toBeOnTheScreen();
    expect(StyleSheet.flatten(screen.getByTestId('progress-values').props.style)).toMatchObject({
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    });
    expect(screen.getByTestId('progress-track')).toBeOnTheScreen();
    expect(screen.getByText('Alfa')).toBeOnTheScreen();
    expect(screen.getByText('Zeta')).toBeOnTheScreen();
    expect(screen.getAllByText('Base')).toHaveLength(2);
    expect(screen.queryByText('DLC')).toBeNull();
    expect(screen.queryByText('À noite')).toBeNull();
    expect(
      screen.getAllByText('⚔', { includeHiddenElements: true }),
    ).toHaveLength(2);
    const cards = screen.getAllByLabelText(/estado|status/i);
    expect(cards[0].props.accessibilityLabel).toContain('Alfa');
  });

  it('shows the expansion content and updates progress', async () => {
    jest.mocked(useLocalSearchParams).mockReturnValue({
      contentPack: 'shadow-of-the-erdtree',
    });
    mockAppState = { ...mockAppState, defeatedBossIds: ['dlc-boss'] };
    await render(<AllBossesScreen />);
    expect(screen.getByText('1/1')).toBeOnTheScreen();
    expect(screen.getByText('DLC')).toBeOnTheScreen();
    expect(
      screen.getByText('✓', { includeHiddenElements: true }),
    ).toBeOnTheScreen();
  });

  it.each([
    { contentPack: 'base-game', count: 165 },
    { contentPack: 'shadow-of-the-erdtree', count: 43 },
  ] as const)('renders the approved $count encounters for $contentPack', async ({
    contentPack,
    count,
  }) => {
    mockDataControl.setMockData(catalogRegions, bossEncounters);
    jest.mocked(useLocalSearchParams).mockReturnValue({ contentPack });
    await render(<AllBossesScreen />);
    expect(
      screen.getByText(mockAppState.translations.region.resultCount(count)),
    ).toBeOnTheScreen();
    expect(screen.getByText(`0/${count}`)).toBeOnTheScreen();
    expect(screen.getByText('0%')).toBeOnTheScreen();
  });

  it('searches by boss, region, location, and hidden availability', async () => {
    const view = await render(<AllBossesScreen />);
    const search = screen.getByPlaceholderText(mockAppState.translations.region.searchPlaceholder);
    for (const query of ['Zeta', 'Base', 'Caverna', 'noite']) {
      await fireEvent.changeText(search, query);
      expect(screen.getByText('Zeta')).toBeOnTheScreen();
      await fireEvent.changeText(search, '');
    }
    await view.unmount();
  });

  it('filters defeated and non-defeated bosses', async () => {
    mockAppState = { ...mockAppState, defeatedBossIds: ['z-boss'] };
    await render(<AllBossesScreen />);
    await fireEvent.press(screen.getByRole('radio', { name: mockAppState.translations.region.defeated }));
    expect(screen.getByText('Zeta')).toBeOnTheScreen();
    expect(screen.queryByText('Alfa')).toBeNull();
  });

  it('opens details without conflicting with the route', async () => {
    await render(<AllBossesScreen />);
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.bossDetails.viewDetailsFor('Alfa'),
      }),
    );
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/bosses/[bossId]',
      params: { bossId: 'a-boss' },
    });
  });

  it('handles an invalid content pack safely', async () => {
    jest.mocked(useLocalSearchParams).mockReturnValue({ contentPack: 'invalid' });
    await render(<AllBossesScreen />);
    expect(screen.getByText(mockAppState.translations.allBosses.invalidMessage)).toBeOnTheScreen();
    expect(screen.queryByText('Alfa')).toBeNull();
  });

  it('reorders immediately when the language changes', async () => {
    const view = await render(<AllBossesScreen />);
    const ptCards = screen.getAllByLabelText(/estado/i);
    expect(ptCards[0].props.accessibilityLabel).toContain('Alfa');
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations: getTranslationDictionary('en'),
    };
    await view.rerender(<AllBossesScreen />);
    const enCards = screen.getAllByLabelText(/status/i);
    expect(enCards[0].props.accessibilityLabel).toContain('Alpha');
  });
});

import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import HomeScreen from '../(drawer)/index';
import type { AppContextValue } from '../../src/contexts/app-context';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';
import type { BossEncounter, CatalogRegion } from '../../src/data/catalog';
import {
  bossEncounters,
  catalogRegions,
} from '../../src/data/catalog';

const testRegions: readonly CatalogRegion[] = [
  { id: 'base', name: { 'pt-BR': 'Base', en: 'Base' }, contentPack: 'base-game', displayOrder: 1 },
  { id: 'dlc', name: { 'pt-BR': 'DLC', en: 'DLC' }, contentPack: 'shadow-of-the-erdtree', displayOrder: 1 },
];
const testBosses: readonly BossEncounter[] = [
  { id: 'base-a', name: { 'pt-BR': 'A', en: 'A' }, location: { 'pt-BR': 'A', en: 'A' }, regionId: 'base' },
  { id: 'base-b', name: { 'pt-BR': 'B', en: 'B' }, location: { 'pt-BR': 'B', en: 'B' }, regionId: 'base' },
  { id: 'dlc-a', name: { 'pt-BR': 'C', en: 'C' }, location: { 'pt-BR': 'C', en: 'C' }, regionId: 'dlc' },
];
let mockAppState: Pick<AppContextValue, 'defeatedBossIds' | 'language' | 'theme' | 'translations'>;
interface MockDataControl {
  setMockData: (
    regions: readonly CatalogRegion[],
    bosses: readonly BossEncounter[],
  ) => void;
}

jest.mock('expo-router', () => ({ router: { push: jest.fn() } }));
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
  mockAppState = {
    defeatedBossIds: [],
    language: 'pt-BR',
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('HomeScreen', () => {
  it('shows overall progress and exactly two content cards without regions', async () => {
    await render(<HomeScreen />);
    expect(screen.getByText('0/3')).toBeOnTheScreen();
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByText(mockAppState.translations.common.baseGame)).toBeOnTheScreen();
    expect(screen.getByText(mockAppState.translations.common.expansion)).toBeOnTheScreen();
    expect(screen.queryByText('Base')).toBeNull();
    expect(screen.queryByText('DLC')).toBeNull();
    expect(screen.getByText('0/2')).toBeOnTheScreen();
    expect(screen.getByText('0/1')).toBeOnTheScreen();
    for (const values of screen.getAllByTestId('progress-values')) {
      expect(StyleSheet.flatten(values.props.style)).toMatchObject({
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      });
    }
    expect(screen.getAllByTestId('progress-track')).toHaveLength(2);
  });

  it('shows the approved content totals with the shared horizontal pattern', async () => {
    mockDataControl.setMockData(catalogRegions, bossEncounters);
    await render(<HomeScreen />);

    expect(screen.getByText('0/165')).toBeOnTheScreen();
    expect(screen.getByText('0/43')).toBeOnTheScreen();
    expect(screen.getAllByTestId('progress-values')).toHaveLength(2);
    expect(screen.getAllByTestId('progress-track')).toHaveLength(2);
  });

  it('calculates total and per-content progress while ignoring unknown IDs', async () => {
    mockAppState = {
      ...mockAppState,
      defeatedBossIds: ['base-a', 'dlc-a', 'unknown-real-id'],
    };
    await render(<HomeScreen />);
    expect(screen.getByText('2/3')).toBeOnTheScreen();
    expect(screen.getByText('67%')).toBeOnTheScreen();
    expect(screen.getByText('1/2')).toBeOnTheScreen();
    expect(screen.getByText('50%')).toBeOnTheScreen();
    expect(screen.getByText('1/1')).toBeOnTheScreen();
    expect(screen.getByText('100%')).toBeOnTheScreen();
  });

  it('opens the two typed All bosses routes', async () => {
    await render(<HomeScreen />);
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.home.openAllBosses(
          mockAppState.translations.common.baseGame,
        ),
      }),
    );
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/all-bosses/[contentPack]',
      params: { contentPack: 'base-game' },
    });
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.home.openAllBosses(
          mockAppState.translations.common.expansion,
        ),
      }),
    );
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/all-bosses/[contentPack]',
      params: { contentPack: 'shadow-of-the-erdtree' },
    });
  });

  it('updates localized labels and keeps theme rendering', async () => {
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations: getTranslationDictionary('en'),
    };
    await render(<HomeScreen />);
    expect(screen.getByText('Base game')).toBeOnTheScreen();
    expect(screen.getByText('Shadow of the Erdtree')).toBeOnTheScreen();
  });
});

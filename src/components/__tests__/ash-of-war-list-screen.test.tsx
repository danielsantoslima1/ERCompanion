import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import {
  ashesOfWar,
  calculateAshOfWarProgress,
  getAshesOfWarByContentPack,
  resolveLocalizedValue,
} from '../../data';
import type { AppContextValue } from '../../contexts/app-context';
import { getTranslationDictionary } from '../../i18n';
import { lightTheme } from '../../theme';
import { AshOfWarListScreen } from '../ash-of-war-list-screen';

jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => {
  const { Text } = jest.requireActual('react-native');
  return function MockMaterialCommunityIcon(props: { name: string }) {
    return <Text>{props.name}</Text>;
  };
});

let mockAppState: Pick<
  AppContextValue,
  | 'ashOfWarProgress'
  | 'collectedAshOfWarIds'
  | 'language'
  | 'theme'
  | 'toggleAshOfWarCollected'
  | 'translations'
>;

jest.mock('expo-router', () => ({
  router: { push: jest.fn() },
}));
jest.mock('expo-router/drawer', () => ({
  Drawer: { Screen: () => null },
}));
jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = {
    ashOfWarProgress: calculateAshOfWarProgress([]),
    collectedAshOfWarIds: [],
    language: 'pt-BR',
    theme: lightTheme,
    toggleAshOfWarCollected: jest.fn().mockResolvedValue(undefined),
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('AshOfWarListScreen totals and routes', () => {
  it('shows all 116 entries in base-game then expansion sections', async () => {
    await render(<AshOfWarListScreen mode="all" />);
    expect(screen.getByText('116 resultados encontrados')).toBeOnTheScreen();
    expect(screen.getByTestId('ash-section-base-game')).toHaveTextContent(
      'Jogo base',
    );
    expect(getAshesOfWarByContentPack('base-game')).toHaveLength(91);
    expect(
      getAshesOfWarByContentPack('shadow-of-the-erdtree'),
    ).toHaveLength(25);
  });

  it('shows the base-game static route with 91 entries and no sections', async () => {
    await render(<AshOfWarListScreen mode="base-game" />);
    expect(screen.getByText('91 resultados encontrados')).toBeOnTheScreen();
    expect(screen.getByText('0/91')).toBeOnTheScreen();
    expect(screen.queryByTestId('ash-section-base-game')).toBeNull();
  });

  it('shows the expansion static route with 25 entries and no sections', async () => {
    await render(
      <AshOfWarListScreen mode="shadow-of-the-erdtree" />,
    );
    expect(screen.getByText('25 resultados encontrados')).toBeOnTheScreen();
    expect(screen.getByText('0/25')).toBeOnTheScreen();
    expect(
      screen.queryByTestId('ash-section-shadow-of-the-erdtree'),
    ).toBeNull();
  });

  it('uses one horizontal progress card in the combined list', async () => {
    await render(<AshOfWarListScreen mode="all" />);
    expect(screen.getByText('0/116')).toBeOnTheScreen();
    expect(screen.getByText('0%')).toBeOnTheScreen();
    expect(
      StyleSheet.flatten(screen.getByTestId('progress-values').props.style),
    ).toMatchObject({
      flexDirection: 'row',
      justifyContent: 'space-between',
    });
    expect(screen.getByTestId('progress-track')).toBeOnTheScreen();
  });

  it('shows complete progress and ignores unknown IDs', async () => {
    mockAppState = {
      ...mockAppState,
      collectedAshOfWarIds: [
        ...ashesOfWar.map((entry) => entry.id),
        'future-ash',
      ],
      ashOfWarProgress: calculateAshOfWarProgress([
        ...ashesOfWar.map((entry) => entry.id),
        'future-ash',
      ]),
    };
    await render(<AshOfWarListScreen mode="all" />);
    expect(screen.getByText('116/116')).toBeOnTheScreen();
    expect(screen.getByText('100%')).toBeOnTheScreen();
  });
});

describe('AshOfWarListScreen search, filters, and ordering', () => {
  it('finds name, skill, location, acquisition, affinity, and equipment', async () => {
    const entry = ashesOfWar.find(
      (candidate) =>
        candidate.primaryLocation.en !== 'Unknown' &&
        candidate.compatibleEquipment.en.length > 0,
    )!;
    await render(<AshOfWarListScreen mode="all" />);
    const search = screen.getByLabelText('Buscar Cinzas da Guerra');
    for (const value of [
      entry.name.en,
      entry.skillName.en,
      entry.primaryLocation.en,
      entry.primaryAcquisition.en,
      entry.affinity.en,
      entry.compatibleEquipment.en[0],
    ]) {
      await fireEvent.changeText(search, value);
      expect(
        screen.getByText(resolveLocalizedValue(entry.name, 'pt-BR').value),
      ).toBeOnTheScreen();
      await fireEvent.changeText(search, '');
    }
  });

  it('finds English fallback while Portuguese is active', async () => {
    await render(<AshOfWarListScreen mode="base-game" />);
    await fireEvent.changeText(
      screen.getByLabelText('Buscar Cinzas da Guerra'),
      'Stamp (Upward Cut)',
    );
    expect(screen.getByText('Stamp (Upward Cut)')).toBeOnTheScreen();
  });

  it('hides only a section without matching results', async () => {
    const expansionEntry = getAshesOfWarByContentPack(
      'shadow-of-the-erdtree',
    )[0];
    await render(<AshOfWarListScreen mode="all" />);
    await fireEvent.changeText(
      screen.getByLabelText('Buscar Cinzas da Guerra'),
      expansionEntry.name.en,
    );
    expect(screen.queryByTestId('ash-section-base-game')).toBeNull();
    expect(
      screen.getByTestId('ash-section-shadow-of-the-erdtree'),
    ).toBeOnTheScreen();
  });

  it('shows one empty state without empty section headers', async () => {
    await render(<AshOfWarListScreen mode="all" />);
    await fireEvent.changeText(
      screen.getByLabelText('Buscar Cinzas da Guerra'),
      'definitely-no-result',
    );
    expect(
      screen.getByText('Nenhuma Cinza da Guerra encontrada.'),
    ).toBeOnTheScreen();
    expect(screen.queryByTestId('ash-section-base-game')).toBeNull();
    expect(
      screen.queryByTestId('ash-section-shadow-of-the-erdtree'),
    ).toBeNull();
  });

  it('combines collected filtering with an active search', async () => {
    const entry = ashesOfWar[0];
    mockAppState = {
      ...mockAppState,
      collectedAshOfWarIds: [entry.id],
      ashOfWarProgress: calculateAshOfWarProgress([entry.id]),
    };
    await render(<AshOfWarListScreen mode="all" />);
    await fireEvent.changeText(
      screen.getByLabelText('Buscar Cinzas da Guerra'),
      entry.name.en,
    );
    await fireEvent.press(
      screen.getByRole('radio', { name: 'Coletadas' }),
    );
    expect(screen.getByText(entry.name.en)).toBeOnTheScreen();
    expect(screen.getAllByText(entry.name.en)).toHaveLength(1);
  });

  it('excludes collected entries from Not collected', async () => {
    const entry = ashesOfWar[0];
    mockAppState = {
      ...mockAppState,
      collectedAshOfWarIds: [entry.id],
      ashOfWarProgress: calculateAshOfWarProgress([entry.id]),
    };
    await render(<AshOfWarListScreen mode="base-game" />);
    await fireEvent.press(
      screen.getByRole('radio', { name: 'Não coletadas' }),
    );
    expect(screen.queryByText(entry.name.en)).toBeNull();
  });

  it('reorders with English locale without mutating the catalog', async () => {
    const originalIds = ashesOfWar.map((entry) => entry.id);
    const view = await render(<AshOfWarListScreen mode="base-game" />);
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations: getTranslationDictionary('en'),
    };
    await view.rerender(<AshOfWarListScreen mode="base-game" />);
    expect(ashesOfWar.map((entry) => entry.id)).toEqual(originalIds);
    expect(screen.getByLabelText('Search Ashes of War')).toBeOnTheScreen();
  });
});

describe('AshOfWarListScreen details navigation', () => {
  it('opens the correct detail without collecting it', async () => {
    const entry = ashesOfWar[0];
    await render(<AshOfWarListScreen mode="base-game" />);
    await fireEvent.changeText(
      screen.getByLabelText('Buscar Cinzas da Guerra'),
      entry.name.en,
    );
    await fireEvent.press(
      screen.getByRole('button', {
        name: `Ver detalhes de ${entry.name.en}`,
      }),
    );
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/ashes-of-war/[ashOfWarId]',
      params: { ashOfWarId: entry.id },
    });
    expect(mockAppState.toggleAshOfWarCollected).not.toHaveBeenCalled();
  });
});

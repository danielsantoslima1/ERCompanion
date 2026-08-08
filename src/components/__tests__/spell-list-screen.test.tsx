import { fireEvent, render, screen } from '@testing-library/react-native';

import type { AppContextValue } from '../../contexts/app-context';
import {
  calculateIncantationProgress,
  calculateSorceryProgress,
  getIncantationsByContentPack,
  getSorceriesByContentPack,
} from '../../data';
import { getTranslationDictionary } from '../../i18n';
import { lightTheme, typography } from '../../theme';
import { SpellListScreen } from '../spell-list-screen';

jest.mock('@expo/vector-icons/Ionicons', () => {
  const { Text } = jest.requireActual('react-native');
  return function MockIonicon({ name }: { name: string }) {
    return <Text>{name}</Text>;
  };
});
jest.mock('expo-router', () => ({ router: { push: jest.fn() } }));
jest.mock('expo-router/drawer', () => ({ Drawer: { Screen: () => null } }));

let mockApp: Pick<
  AppContextValue,
  | 'collectedIncantationIds'
  | 'collectedSorceryIds'
  | 'incantationProgress'
  | 'language'
  | 'sorceryProgress'
  | 'theme'
  | 'toggleIncantationCollected'
  | 'toggleSorceryCollected'
  | 'translations'
>;

jest.mock('../../hooks/use-app', () => ({ useApp: () => mockApp }));

beforeEach(() => {
  mockApp = {
    collectedIncantationIds: [],
    collectedSorceryIds: [],
    incantationProgress: calculateIncantationProgress([]),
    language: 'pt-BR',
    sorceryProgress: calculateSorceryProgress([]),
    theme: lightTheme,
    toggleIncantationCollected: jest.fn().mockResolvedValue(undefined),
    toggleSorceryCollected: jest.fn().mockResolvedValue(undefined),
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('SpellListScreen', () => {
  it('shows 84 sorceries with one category progress and ordered sections', async () => {
    await render(<SpellListScreen category="sorcery" mode="all" />);
    expect(screen.getByTestId('sorcery-filter-group').type).toBe('View');
    expect(screen.getByText('84 resultados encontrados')).toBeOnTheScreen();
    expect(screen.getByText('0/84')).toBeOnTheScreen();
    expect(screen.getByText('Jogo base')).toBeOnTheScreen();
    expect(getSorceriesByContentPack('base-game')).toHaveLength(70);
    expect(getSorceriesByContentPack('shadow-of-the-erdtree')).toHaveLength(14);
    expect(screen.getByTestId('spell-list').props).toMatchObject({
      keyboardDismissMode: 'on-drag',
      keyboardShouldPersistTaps: 'handled',
    });
  });

  it('uses the same wrapping group for Incantation origin and spell filters', async () => {
    await render(<SpellListScreen category="incantation" mode="all" />);
    const group = screen.getByTestId('incantation-filter-group');
    expect(group.type).toBe('View');
    expect(group.props.horizontal).toBeUndefined();
    expect(
      screen.getByRole('button', { name: 'Filtrar por origem: Base' }),
    ).toBeOnTheScreen();
    expect(
      screen.getByText(mockApp.translations.spells.legendary),
    ).toBeOnTheScreen();
    expect(
      screen.getByText(mockApp.translations.spells.missable),
    ).toBeOnTheScreen();
  });

  it.each([
    ['base-game', 101],
    ['shadow-of-the-erdtree', 28],
  ] as const)('shows %s Incantations with the exact total', async (mode, total) => {
    await render(<SpellListScreen category="incantation" mode={mode} />);
    expect(
      screen.getByText(`${total} resultados encontrados`),
    ).toBeOnTheScreen();
    expect(screen.getByText(`0/${total}`)).toBeOnTheScreen();
    expect(getIncantationsByContentPack('base-game')).toHaveLength(101);
    expect(
      getIncantationsByContentPack('shadow-of-the-erdtree'),
    ).toHaveLength(28);
    expect(screen.queryByTestId('origin-filter-buttons')).toBeNull();
  });

  it.each([
    ['sorcery', 70, 14, 84],
    ['incantation', 101, 28, 129],
  ] as const)(
    'filters %s origins exclusively and updates progress totals',
    async (category, baseTotal, dlcTotal, total) => {
      await render(<SpellListScreen category={category} mode="all" />);
      const base = screen.getByRole('button', {
        name: 'Filtrar por origem: Base',
      });
      const dlc = screen.getByRole('button', {
        name: 'Filtrar por origem: DLC',
      });

      await fireEvent.press(base);
      expect(
        screen.getByText(`${baseTotal} resultados encontrados`),
      ).toBeOnTheScreen();
      expect(screen.getByText(`0/${baseTotal}`)).toBeOnTheScreen();

      await fireEvent.press(dlc);
      expect(
        screen.getByText(`${dlcTotal} resultados encontrados`),
      ).toBeOnTheScreen();
      expect(screen.getByText(`0/${dlcTotal}`)).toBeOnTheScreen();
      expect(base.props.accessibilityState).toEqual({ selected: false });

      await fireEvent.press(dlc);
      expect(screen.getByText(`${total} resultados encontrados`)).toBeOnTheScreen();
      expect(screen.getByText(`0/${total}`)).toBeOnTheScreen();
    },
  );

  it('filters legendary entries and returns a normal empty state for missable', async () => {
    await render(<SpellListScreen category="sorcery" mode="all" />);
    await fireEvent.press(screen.getByRole('checkbox', { name: 'Lendárias' }));
    expect(screen.getByText('4 resultados encontrados')).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('checkbox', { name: 'Perdíveis' }));
    expect(screen.getByText('0 resultados encontrados')).toBeOnTheScreen();
    expect(screen.getByText('Nenhuma entrada encontrada.')).toBeOnTheScreen();
  });

  it('normalizes accents and displays the audited summarized location', async () => {
    await render(<SpellListScreen category="sorcery" mode="all" />);
    expect(screen.getByLabelText('Buscar magias')).toHaveStyle({
      fontFamily: typography.body,
    });
    await fireEvent.changeText(
      screen.getByLabelText('Buscar magias'),
      "adula's moonblade",
    );
    expect(screen.getByText("Adula's Moonblade")).toBeOnTheScreen();
    expect(screen.getByText('Glintstone Dragon Adula - Moonlight Altar')).toBeOnTheScreen();
  });

  it('searches an audited quest location without exposing acquisition steps', async () => {
    await render(<SpellListScreen category="incantation" mode="all" />);
    await fireEvent.changeText(
      screen.getByLabelText('Buscar magias'),
      'Dragon Communion Altar',
    );
    expect(screen.getByText("Agheel's Flame")).toBeOnTheScreen();
    expect(screen.queryByText('Complete the documented acquisition')).toBeNull();
  });

  it('intersects origin, Legendary, and search and preserves origin on details', async () => {
    await render(<SpellListScreen category="sorcery" mode="all" />);
    await fireEvent.press(
      screen.getByRole('button', { name: 'Filtrar por origem: Base' }),
    );
    await fireEvent.press(screen.getByRole('checkbox', { name: 'Lendárias' }));
    await fireEvent.changeText(screen.getByLabelText('Buscar magias'), 'Comet Azur');
    expect(screen.getByText('Comet Azur')).toBeOnTheScreen();
    await fireEvent.press(
      screen.getByRole('button', { name: 'Ver detalhes de Comet Azur' }),
    );
    expect(
      screen.getByRole('button', { name: 'Filtrar por origem: Base' }).props
        .accessibilityState,
    ).toEqual({ selected: true });
  });
});

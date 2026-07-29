import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import HomeScreen from '../(drawer)/index';
import type { AppContextValue } from '../../src/contexts/app-context';
import type { CompletionProgress } from '../../src/data';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';

let mockAppState: Pick<
  AppContextValue,
  'ashOfWarProgress' | 'bossProgress' | 'combinedProgress' | 'incantationProgress' | 'sorceryProgress' | 'theme' | 'translations'
>;

jest.mock('expo-router', () => ({ router: { push: jest.fn() } }));
jest.mock('../../src/hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

function progress(completed: number, total: number): CompletionProgress {
  return {
    completed,
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
    total,
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = {
    ashOfWarProgress: progress(0, 116),
    bossProgress: progress(0, 208),
    combinedProgress: progress(0, 537),
    sorceryProgress: progress(0, 84),
    incantationProgress: progress(0, 129),
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('HomeScreen category integration', () => {
  it('shows combined progress and exactly four category cards', async () => {
    await render(<HomeScreen />);
    expect(screen.getByText('0/537')).toBeOnTheScreen();
    expect(screen.getAllByText('0%')).toHaveLength(5);
    expect(screen.getAllByRole('button')).toHaveLength(4);
    expect(screen.getByText('Chefes')).toBeOnTheScreen();
    expect(screen.getByText('Cinzas da Guerra')).toBeOnTheScreen();
    expect(screen.getByText('0/208')).toBeOnTheScreen();
    expect(screen.getByText('0/116')).toBeOnTheScreen();
    expect(screen.getByText('0/84')).toBeOnTheScreen();
    expect(screen.getByText('0/129')).toBeOnTheScreen();
    expect(screen.queryByText('Progresso do Jogo Base')).toBeNull();
    expect(screen.queryByText('Progresso da expansão')).toBeNull();
  });

  it('uses the horizontal progress pattern in both category cards', async () => {
    await render(<HomeScreen />);
    expect(screen.getAllByTestId('progress-values')).toHaveLength(4);
    expect(screen.getAllByTestId('progress-track')).toHaveLength(4);
    for (const values of screen.getAllByTestId('progress-values')) {
      expect(StyleSheet.flatten(values.props.style)).toMatchObject({
        flexDirection: 'row',
        justifyContent: 'space-between',
      });
    }
  });

  it('renders independent category and combined progress updates', async () => {
    mockAppState = {
      ...mockAppState,
      ashOfWarProgress: progress(1, 116),
      bossProgress: progress(1, 208),
      combinedProgress: progress(2, 537),
    };
    await render(<HomeScreen />);
    expect(screen.getByText('2/537')).toBeOnTheScreen();
    expect(screen.getByText('1/208')).toBeOnTheScreen();
    expect(screen.getByText('1/116')).toBeOnTheScreen();
  });

  it('shows bounded complete progress', async () => {
    mockAppState = {
      ...mockAppState,
      ashOfWarProgress: progress(116, 116),
      bossProgress: progress(208, 208),
      sorceryProgress: progress(84, 84),
      incantationProgress: progress(129, 129),
      combinedProgress: progress(537, 537),
    };
    await render(<HomeScreen />);
    expect(screen.getByText('537/537')).toBeOnTheScreen();
    expect(screen.getAllByText('100%')).toHaveLength(5);
  });

  it('opens the four public category routes', async () => {
    await render(<HomeScreen />);
    await fireEvent.press(
      screen.getByRole('button', { name: /Chefes: 0 de 208/ }),
    );
    expect(router.push).toHaveBeenCalledWith('/all-bosses');
    await fireEvent.press(
      screen.getByRole('button', { name: /Cinzas da Guerra: 0 de 116/ }),
    );
    expect(router.push).toHaveBeenCalledWith('/ashes-of-war');
    await fireEvent.press(screen.getByRole('button', { name: /Feitiços: 0 de 84/ }));
    expect(router.push).toHaveBeenCalledWith('/sorceries');
    await fireEvent.press(screen.getByRole('button', { name: /Encantamentos: 0 de 129/ }));
    expect(router.push).toHaveBeenCalledWith('/incantations');
  });

  it('provides localized accessible labels in English', async () => {
    mockAppState = {
      ...mockAppState,
      translations: getTranslationDictionary('en'),
    };
    await render(<HomeScreen />);
    expect(screen.getByText('Overall Progress')).toBeOnTheScreen();
    expect(
      screen.getByRole('button', { name: /Bosses: 0 of 208/ }),
    ).toBeOnTheScreen();
    expect(
      screen.getByRole('button', { name: /Ashes of War: 0 of 116/ }),
    ).toBeOnTheScreen();
    expect(screen.getByRole('button', { name: /Sorceries: 0 of 84/ })).toBeOnTheScreen();
    expect(screen.getByRole('button', { name: /Incantations: 0 of 129/ })).toBeOnTheScreen();
  });
});

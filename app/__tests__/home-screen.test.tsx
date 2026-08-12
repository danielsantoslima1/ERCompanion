import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import HomeScreen from '../(drawer)/index';
import type { AppContextValue } from '../../src/contexts/app-context';
import type { CompletionProgress } from '../../src/data';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme, typography } from '../../src/theme';

let mockAppState: Pick<
  AppContextValue,
  'ashOfWarProgress' | 'bossProgress' | 'combinedProgress' | 'incantationProgress' | 'sorceryProgress' | 'spiritAshProgress' | 'talismanProgress' | 'theme' | 'translations'
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
    combinedProgress: progress(0, 775),
    sorceryProgress: progress(0, 84),
    incantationProgress: progress(0, 129),
    spiritAshProgress: progress(0, 84),
    talismanProgress: progress(0, 154),
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('HomeScreen category integration', () => {
  it('shows combined progress and five category cards', async () => {
    await render(<HomeScreen />);
    expect(screen.getByText('0/775')).toBeOnTheScreen();
    expect(screen.getAllByText('0%')).toHaveLength(7);
    expect(screen.getAllByRole('button')).toHaveLength(6);
    expect(screen.getByText('Chefes')).toBeOnTheScreen();
    expect(screen.getByText('Cinzas da Guerra')).toBeOnTheScreen();
    expect(screen.getByText('0/208')).toBeOnTheScreen();
    expect(screen.getByText('0/116')).toBeOnTheScreen();
    expect(screen.getAllByText('0/84')).toHaveLength(2);
    expect(screen.getByText('0/129')).toBeOnTheScreen();
    expect(screen.getByText('0/154')).toBeOnTheScreen();
    expect(screen.getByText(mockAppState.translations.home.title)).toHaveStyle({
      fontFamily: typography.display,
    });
    expect(screen.getByText('Chefes')).toHaveStyle({
      fontFamily: typography.display,
    });
    expect(screen.queryByText('Progresso do Jogo Base')).toBeNull();
    expect(screen.queryByText('Progresso da expansão')).toBeNull();
  });

  it('uses the horizontal progress pattern in both category cards', async () => {
    await render(<HomeScreen />);
    expect(screen.getAllByTestId('progress-values')).toHaveLength(6);
    expect(screen.getAllByTestId('progress-track')).toHaveLength(6);
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
      combinedProgress: progress(2, 775),
    };
    await render(<HomeScreen />);
    expect(screen.getByText('2/775')).toBeOnTheScreen();
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
      spiritAshProgress: progress(84, 84),
      talismanProgress: progress(154, 154),
      combinedProgress: progress(775, 775),
    };
    await render(<HomeScreen />);
    expect(screen.getByText('775/775')).toBeOnTheScreen();
    expect(screen.getAllByText('100%')).toHaveLength(7);
  });

  it('opens the five public category routes', async () => {
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
    await fireEvent.press(screen.getByRole('button', { name: /Spirit Ashes: 0 de 84/ }));
    expect(router.push).toHaveBeenCalledWith('/spirit-ashes');
    await fireEvent.press(screen.getByRole('button', { name: /Talismans: 0 de 154/ }));
    expect(router.push).toHaveBeenCalledWith('/talismans');
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
    expect(screen.getByRole('button', { name: /Spirit Ashes: 0 of 84/ })).toBeOnTheScreen();
  });
});

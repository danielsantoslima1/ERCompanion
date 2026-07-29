import { fireEvent, render, screen } from '@testing-library/react-native';

import type { AppContextValue } from '../../contexts/app-context';
import { getTranslationDictionary } from '../../i18n';
import { lightTheme } from '../../theme';
import { SpellDetailScreen } from '../spell-detail-screen';

jest.mock('expo-router', () => ({
  router: { back: jest.fn(), canGoBack: jest.fn(() => true), replace: jest.fn() },
}));

let mockApp: Pick<
  AppContextValue,
  | 'collectedIncantationIds'
  | 'collectedSorceryIds'
  | 'language'
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
    language: 'pt-BR',
    theme: lightTheme,
    toggleIncantationCollected: jest.fn().mockResolvedValue(undefined),
    toggleSorceryCollected: jest.fn().mockResolvedValue(undefined),
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('SpellDetailScreen', () => {
  it('shows approved fields, pending location, and one fallback notice', async () => {
    await render(<SpellDetailScreen category="sorcery" id="sorcery-adulas-moonblade" />);
    expect(screen.getByText("Adula's Moonblade")).toBeOnTheScreen();
    expect(screen.getByText('Localização pendente')).toBeOnTheScreen();
    expect(screen.getAllByText('Conteúdo em inglês — tradução oficial pendente')).toHaveLength(1);
    expect(screen.queryByText(/Custo de FP/i)).toBeNull();
  });

  it('does not show the fallback notice in English', async () => {
    mockApp = { ...mockApp, language: 'en', translations: getTranslationDictionary('en') };
    await render(<SpellDetailScreen category="sorcery" id="sorcery-adulas-moonblade" />);
    expect(screen.queryByText(/official translation pending/i)).toBeNull();
  });

  it('keeps quest spoiler content collapsed until explicitly expanded', async () => {
    await render(<SpellDetailScreen category="incantation" id="incantation-dragonbolt-of-florissax" />);
    expect(screen.getByText('Contém spoilers de missão')).toBeOnTheScreen();
    expect(screen.queryByText('Jagged Peak')).toBeNull();
    await fireEvent.press(screen.getByRole('button', { name: 'Expandir conteúdo com spoiler' }));
    expect(screen.getByText(/Jagged Peak/)).toBeOnTheScreen();
  });

  it('uses the correct collection action without changing the other category', async () => {
    await render(<SpellDetailScreen category="incantation" id="incantation-agheels-flame" />);
    await fireEvent.press(screen.getByRole('button', { name: /Marcar como coletado: Agheel/ }));
    expect(mockApp.toggleIncantationCollected).toHaveBeenCalledWith('incantation-agheels-flame');
    expect(mockApp.toggleSorceryCollected).not.toHaveBeenCalled();
  });

  it('shows a safe not-found state', async () => {
    await render(<SpellDetailScreen category="sorcery" id="unknown" />);
    expect(screen.getByText('Magia não encontrada')).toBeOnTheScreen();
  });
});

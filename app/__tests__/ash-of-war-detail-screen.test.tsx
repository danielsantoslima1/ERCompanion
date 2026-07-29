import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import {
  router,
  useLocalSearchParams,
  useNavigation,
  useRootNavigationState,
} from 'expo-router';

import AshOfWarDetailScreen from '../ashes-of-war/[ashOfWarId]';
import type { AppContextValue } from '../../src/contexts/app-context';
import {
  ashesOfWar,
  resolveLocalizedValue,
  type AshOfWar,
} from '../../src/data';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';

let mockAppState: Pick<
  AppContextValue,
  | 'collectedAshOfWarIds'
  | 'language'
  | 'theme'
  | 'toggleAshOfWarCollected'
  | 'translations'
>;
let mockRootState: unknown;
const mockAddListener = jest.fn();

jest.mock('expo-router', () => ({
  router: {
    back: jest.fn(),
    canGoBack: jest.fn(() => true),
    replace: jest.fn(),
  },
  useLocalSearchParams: jest.fn(),
  useNavigation: jest.fn(),
  useRootNavigationState: jest.fn(),
}));
jest.mock('../../src/hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

function setEntry(entry: AshOfWar | undefined) {
  jest.mocked(useLocalSearchParams).mockReturnValue({
    ashOfWarId: entry?.id ?? 'invalid-id',
  });
}

function createRootState(previousRoute?: string): unknown {
  return {
    index: 1,
    routes: [
      previousRoute
        ? {
            name: '(drawer)',
            state: {
              index: 0,
              routes: [{ name: previousRoute }],
            },
          }
        : { name: '(drawer)' },
      { name: 'ashes-of-war/[ashOfWarId]' },
    ],
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = {
    collectedAshOfWarIds: [],
    language: 'pt-BR',
    theme: lightTheme,
    toggleAshOfWarCollected: jest.fn().mockResolvedValue(undefined),
    translations: getTranslationDictionary('pt-BR'),
  };
  setEntry(ashesOfWar[0]);
  mockRootState = createRootState('ashes-of-war/index');
  mockAddListener.mockReturnValue(jest.fn());
  jest.mocked(useNavigation).mockReturnValue({
    addListener: mockAddListener,
  } as unknown as ReturnType<typeof useNavigation>);
  jest.mocked(useRootNavigationState).mockImplementation(
    () => mockRootState as ReturnType<typeof useRootNavigationState>,
  );
});

describe('AshOfWarDetailScreen content', () => {
  it('shows the requested entry, origin, core fields and every acquisition', async () => {
    const entry = ashesOfWar.find(
      (candidate) => candidate.acquisitionMethods.length > 1,
    ) ?? ashesOfWar[0];
    setEntry(entry);
    await render(<AshOfWarDetailScreen />);
    expect(
      screen.getByRole('header', {
        name: resolveLocalizedValue(entry.name, 'pt-BR').value,
      }),
    ).toBeOnTheScreen();
    for (const heading of [
      'Origem',
      'Localização principal',
      'Obtenção principal',
      'Formas de obtenção',
      'Resumo',
      'Habilidade concedida',
      'Afinidade',
      'Equipamentos compatíveis',
      'Estado da coleta',
    ]) {
      expect(screen.getByText(heading)).toBeOnTheScreen();
    }
    entry.acquisitionMethods.forEach((method) => {
      expect(
        screen.getAllByText(resolveLocalizedValue(method.method, 'pt-BR').value)
          .length,
      ).toBeGreaterThan(0);
    });
  });

  it('shows an optional section when its value is available', async () => {
    const entry = ashesOfWar.find(
      (candidate) => candidate.limitations !== null,
    )!;
    setEntry(entry);
    await render(<AshOfWarDetailScreen />);
    expect(screen.getByText('Limitações')).toBeOnTheScreen();
  });

  it('omits FP and null optional sections without rendering null values', async () => {
    const entry = ashesOfWar.find(
      (candidate) =>
        candidate.fpCost === null &&
        candidate.skillType === null &&
        candidate.specialEffects === null &&
        candidate.relevantNotes === null,
    )!;
    setEntry(entry);
    await render(<AshOfWarDetailScreen />);
    expect(screen.queryByText('Custo de FP')).toBeNull();
    expect(screen.queryByText('Tipo de habilidade')).toBeNull();
    expect(screen.queryByText('Efeitos especiais')).toBeNull();
    expect(screen.queryByText('Observações')).toBeNull();
    expect(screen.queryByText(/^(null|undefined)$/)).toBeNull();
  });

  it('does not expose URLs or editorial metadata', async () => {
    await render(<AshOfWarDetailScreen />);
    expect(screen.queryByText(/https?:\/\//i)).toBeNull();
    expect(screen.queryByText(/verified|partial|disputed/i)).toBeNull();
    expect(screen.queryByText(/sourceRefs/i)).toBeNull();
  });

  it('shows and changes collection state through the progress API', async () => {
    const entry = ashesOfWar[0];
    setEntry(entry);
    await render(<AshOfWarDetailScreen />);
    expect(screen.getByText('Não coletada')).toBeOnTheScreen();
    await fireEvent.press(
      screen.getByRole('button', {
        name: `Marcar como coletada: ${entry.name.en}`,
      }),
    );
    await waitFor(() =>
      expect(mockAppState.toggleAshOfWarCollected).toHaveBeenCalledWith(
        entry.id,
      ),
    );
  });
});

describe('AshOfWarDetailScreen fallback', () => {
  it('shows one Portuguese fallback notice and English field values', async () => {
    const entry = ashesOfWar.find((candidate) => candidate.name.ptBR === null)!;
    setEntry(entry);
    await render(<AshOfWarDetailScreen />);
    expect(screen.getAllByText(
      'Conteúdo em inglês — tradução oficial pendente',
    )).toHaveLength(1);
    expect(screen.getByRole('header', { name: entry.name.en })).toBeOnTheScreen();
  });

  it('does not show the fallback notice in English', async () => {
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations: getTranslationDictionary('en'),
    };
    await render(<AshOfWarDetailScreen />);
    expect(
      screen.queryByText('Content in English — official translation pending'),
    ).toBeNull();
  });

  it('uses English equipment when the Portuguese list is absent', async () => {
    const entry = ashesOfWar.find(
      (candidate) => candidate.compatibleEquipment.ptBR === null,
    )!;
    setEntry(entry);
    await render(<AshOfWarDetailScreen />);
    expect(
      screen.getByText(`• ${entry.compatibleEquipment.en[0]}`),
    ).toBeOnTheScreen();
  });
});

describe('AshOfWarDetailScreen navigation', () => {
  it.each([
    'ashes-of-war/index',
    'ashes-of-war/base-game',
    'ashes-of-war/shadow-of-the-erdtree',
  ])('keeps normal back behavior for originating list %s', async (routeName) => {
    mockRootState = createRootState(routeName);
    await render(<AshOfWarDetailScreen />);
    expect(mockAddListener).not.toHaveBeenCalled();
  });

  it.each([
    ['base-game', '/ashes-of-war/base-game'],
    ['shadow-of-the-erdtree', '/ashes-of-war/shadow-of-the-erdtree'],
  ] as const)(
    'uses the %s package list as direct-access fallback',
    async (contentPack, expectedRoute) => {
      const entry = ashesOfWar.find(
        (candidate) => candidate.contentPack === contentPack,
      )!;
      setEntry(entry);
      mockRootState = createRootState();
      await render(<AshOfWarDetailScreen />);
      const beforeRemove = mockAddListener.mock.calls[0][1] as (event: {
        preventDefault: () => void;
      }) => void;
      beforeRemove({ preventDefault: jest.fn() });
      expect(router.replace).toHaveBeenCalledWith(expectedRoute);
    },
  );

  it('shows a safe not-found state without changing collection', async () => {
    setEntry(undefined);
    await render(<AshOfWarDetailScreen />);
    expect(
      screen.getByText('Cinza da Guerra não encontrada'),
    ).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('button', { name: 'Voltar' }));
    expect(router.back).toHaveBeenCalled();
    expect(mockAppState.toggleAshOfWarCollected).not.toHaveBeenCalled();
  });
});

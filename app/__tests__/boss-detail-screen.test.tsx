import { fireEvent, render, screen } from '@testing-library/react-native';
import {
  router,
  useLocalSearchParams,
  useNavigation,
  useRootNavigationState,
} from 'expo-router';

import BossDetailScreen from '../bosses/[bossId]';
import type { AppContextValue } from '../../src/contexts/app-context';
import { getTranslationDictionary } from '../../src/i18n';
import { darkTheme, lightTheme } from '../../src/theme';

const mockRouterBack = jest.mocked(router.back);
const mockRouterPush = jest.mocked(router.push);
const mockRouterReplace = jest.mocked(router.replace);
const mockUseLocalSearchParams = jest.mocked(useLocalSearchParams);
const mockUseNavigation = jest.mocked(useNavigation);
const mockUseRootNavigationState = jest.mocked(useRootNavigationState);
const mockAddListener = jest.fn();
let mockRootNavigationState: unknown;
let mockAppState: Pick<
  AppContextValue,
  | 'defeatedBossIds'
  | 'language'
  | 'markBossDefeated'
  | 'markBossNotDefeated'
  | 'theme'
  | 'translations'
> = {
  defeatedBossIds: [],
  language: 'en',
  markBossDefeated: jest.fn<Promise<void>, [string]>().mockResolvedValue(),
  markBossNotDefeated: jest.fn<Promise<void>, [string]>().mockResolvedValue(),
  theme: lightTheme,
  translations: getTranslationDictionary('en'),
};

jest.mock('expo-router', () => ({
  router: {
    back: jest.fn(),
    canGoBack: jest.fn(() => true),
    push: jest.fn(),
    replace: jest.fn(),
  },
  useNavigation: jest.fn(),
  useRootNavigationState: jest.fn(),
  useLocalSearchParams: jest.fn(),
}));

jest.mock('expo-router/drawer', () => ({
  Drawer: {
    Screen: () => null,
  },
}));

jest.mock('../../src/hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

function setBossId(bossId: string) {
  mockUseLocalSearchParams.mockReturnValue({ bossId });
}

function createRootState(previousRegionId?: string): unknown {
  const drawerRoute =
    previousRegionId === undefined
      ? { name: '(drawer)' }
      : {
          name: '(drawer)',
          state: {
            index: 0,
            routes: [
              {
                name: 'regions/[regionId]',
                params: { regionId: previousRegionId },
              },
            ],
          },
        };
  return {
    index: 1,
    routes: [drawerRoute, { name: 'bosses/[bossId]' }],
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = {
    defeatedBossIds: [],
    language: 'en',
    markBossDefeated: jest.fn<Promise<void>, [string]>().mockResolvedValue(),
    markBossNotDefeated: jest.fn<Promise<void>, [string]>().mockResolvedValue(),
    theme: lightTheme,
    translations: getTranslationDictionary('en'),
  };
  setBossId('tree-sentinel-limgrave-road');
  mockRootNavigationState = createRootState('limgrave');
  mockAddListener.mockReturnValue(jest.fn());
  mockUseNavigation.mockReturnValue({
    addListener: mockAddListener,
  } as unknown as ReturnType<typeof useNavigation>);
  mockUseRootNavigationState.mockImplementation(
    () =>
      mockRootNavigationState as ReturnType<typeof useRootNavigationState>,
  );
});

describe('BossDetailScreen', () => {
  it('shows the correct encounter, region, location, availability, and state', async () => {
    setBossId('flying-dragon-agheel-agheel-lake');
    await render(<BossDetailScreen />);

    expect(
      screen.getByRole('header', { name: 'Flying Dragon Agheel' }),
    ).toBeOnTheScreen();
    expect(screen.getByText('Limgrave')).toBeOnTheScreen();
    expect(screen.getByText('Agheel Lake')).toBeOnTheScreen();
    expect(
      screen.getByText('Appears after approaching the burning pyre'),
    ).toBeOnTheScreen();
    expect(screen.getByText('Not defeated')).toBeOnTheScreen();
  });

  it('omits availability and other empty optional sections', async () => {
    setBossId('demi-human-chiefs-coastal-cave');
    await render(<BossDetailScreen />);

    expect(
      screen.queryByText(mockAppState.translations.bossDetails.availability),
    ).toBeNull();
    expect(
      screen.queryByText(mockAppState.translations.bossDetails.phases),
    ).toBeNull();
    expect(
      screen.queryByText(mockAppState.translations.bossDetails.summons),
    ).toBeNull();
    expect(
      screen.queryByText(mockAppState.translations.bossDetails.supportingEnemies),
    ).toBeNull();
  });

  it('handles an invalid ID safely and returns without changing progress', async () => {
    setBossId('missing-encounter');
    await render(<BossDetailScreen />);

    expect(
      screen.getByRole('header', {
        name: mockAppState.translations.bossDetails.encounterNotFound,
      }),
    ).toBeOnTheScreen();
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.bossDetails.back,
      }),
    );
    expect(mockRouterBack).toHaveBeenCalledTimes(1);
    expect(mockAppState.markBossDefeated).not.toHaveBeenCalled();
  });

  it('marks a non-defeated encounter as defeated', async () => {
    await render(<BossDetailScreen />);

    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.region.markAsDefeated,
      }),
    );

    expect(mockAppState.markBossDefeated).toHaveBeenCalledWith(
      'tree-sentinel-limgrave-road',
    );
  });

  it('shows and clears an existing defeated state', async () => {
    mockAppState = {
      ...mockAppState,
      defeatedBossIds: ['tree-sentinel-limgrave-road'],
    };
    await render(<BossDetailScreen />);

    expect(screen.getByText('Defeated')).toBeOnTheScreen();
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.region.markAsNotDefeated,
      }),
    );
    expect(mockAppState.markBossNotDefeated).toHaveBeenCalledWith(
      'tree-sentinel-limgrave-road',
    );
  });

  it('uses localized structural and catalog data in Portuguese', async () => {
    mockAppState = {
      ...mockAppState,
      language: 'pt-BR',
      translations: getTranslationDictionary('pt-BR'),
    };
    await render(<BossDetailScreen />);

    expect(
      screen.getByText(mockAppState.translations.bossDetails.region),
    ).toBeOnTheScreen();
    expect(
      screen.getByText(mockAppState.translations.bossDetails.location),
    ).toBeOnTheScreen();
    expect(screen.getByText('Limgrave')).toBeOnTheScreen();
  });

  it('renders correctly with the dark theme', async () => {
    mockAppState = { ...mockAppState, theme: darkTheme };
    await render(<BossDetailScreen />);

    expect(screen.getByText('Tree Sentinel')).toBeOnTheScreen();
    expect(screen.getByText('Limgrave')).toBeOnTheScreen();
  });

  it('shows Spiritcaller Snail summons without separate progress controls', async () => {
    setBossId('spiritcaller-snail-spiritcaller-cave');
    await render(<BossDetailScreen />);

    expect(screen.getByText('• Godskin Apostle')).toBeOnTheScreen();
    expect(screen.getByText('• Godskin Noble')).toBeOnTheScreen();
    expect(
      screen.getAllByRole('button', {
        name: mockAppState.translations.region.markAsDefeated,
      }),
    ).toHaveLength(1);
  });

  it('shows Promised Consort Radahn phases as one progress unit', async () => {
    setBossId('promised-consort-radahn-divine-gate');
    await render(<BossDetailScreen />);

    expect(screen.getByText('1. Promised Consort Radahn')).toBeOnTheScreen();
    expect(screen.getByText('2. Radahn, Consort of Miquella')).toBeOnTheScreen();
    expect(
      screen.getByText(mockAppState.translations.bossDetails.sameProgressUnit),
    ).toBeOnTheScreen();
    expect(
      screen.getAllByRole('button', {
        name: mockAppState.translations.region.markAsDefeated,
      }),
    ).toHaveLength(1);
  });

  it('shows both Demi-Human Chief participants in one encounter', async () => {
    setBossId('demi-human-chiefs-coastal-cave');
    await render(<BossDetailScreen />);

    expect(screen.getByText('2 main participants')).toBeOnTheScreen();
    expect(screen.getAllByText('• Demi-Human Chief')).toHaveLength(2);
    expect(
      screen.getAllByRole('button', {
        name: mockAppState.translations.region.markAsDefeated,
      }),
    ).toHaveLength(1);
  });

  it('represents Fia’s Champions waves and variable composition in one unit', async () => {
    setBossId('fias-champions-prince-of-deaths-throne');
    await render(<BossDetailScreen />);

    expect(
      screen.getByText(mockAppState.translations.bossDetails.variableComposition),
    ).toBeOnTheScreen();
    expect(screen.getByText('3 variable participants')).toBeOnTheScreen();
    expect(screen.getByText('1. Wave 1')).toBeOnTheScreen();
    expect(screen.getByText('3. Wave 3')).toBeOnTheScreen();
    expect(
      screen.getAllByRole('button', {
        name: mockAppState.translations.region.markAsDefeated,
      }),
    ).toHaveLength(1);
  });

  it('shows Needle Knight Leda and Allies as a variable single encounter', async () => {
    setBossId('leda-and-allies-cleansing-chamber');
    await render(<BossDetailScreen />);

    expect(screen.getByText('2 to 5 main participants')).toBeOnTheScreen();
    expect(
      screen.getByText(mockAppState.translations.bossDetails.variableComposition),
    ).toBeOnTheScreen();
    expect(screen.getByText('• Needle Knight Leda')).toBeOnTheScreen();
    expect(screen.getByText('• Moore')).toBeOnTheScreen();
  });

  it('does not render a separate back-to-region action', async () => {
    await render(<BossDetailScreen />);

    expect(screen.queryByText('Back to region')).toBeNull();
    expect(screen.queryByText('Voltar para a região')).toBeNull();
    expect(mockRouterPush).not.toHaveBeenCalled();
  });

  it('keeps Limgrave as the standard stack back destination', async () => {
    await render(<BossDetailScreen />);

    expect(mockAddListener).not.toHaveBeenCalled();
    expect(mockRouterReplace).not.toHaveBeenCalled();
  });

  it('uses the encounter region as direct-access fallback', async () => {
    mockRootNavigationState = createRootState();
    await render(<BossDetailScreen />);
    const beforeRemove = mockAddListener.mock.calls[0][1] as (event: {
      preventDefault: () => void;
    }) => void;
    const preventDefault = jest.fn();

    beforeRemove({ preventDefault });

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(mockRouterReplace).toHaveBeenCalledWith({
      pathname: '/regions/[regionId]',
      params: { regionId: 'limgrave' },
    });
  });

  it('uses another encounter’s own region as fallback', async () => {
    setBossId('romina-saint-of-the-bud-church-of-the-bud');
    mockRootNavigationState = createRootState();
    await render(<BossDetailScreen />);
    const beforeRemove = mockAddListener.mock.calls[0][1] as (event: {
      preventDefault: () => void;
    }) => void;

    beforeRemove({ preventDefault: jest.fn() });

    expect(mockRouterReplace).toHaveBeenCalledWith({
      pathname: '/regions/[regionId]',
      params: { regionId: 'ancient-ruins-of-rauh' },
    });
  });

  it.each(['GO_BACK', 'POP'])(
    'routes a direct-access %s action to the encounter region',
    async (type) => {
      mockRootNavigationState = createRootState();
      await render(<BossDetailScreen />);
      const beforeRemove = mockAddListener.mock.calls[0][1] as (event: {
        data: { action: { type: string } };
        preventDefault: () => void;
      }) => void;
      const preventDefault = jest.fn();

      beforeRemove({
        data: { action: { type } },
        preventDefault,
      });

      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(mockRouterReplace).toHaveBeenCalledTimes(1);
    },
  );

  it('does not redirect repeatedly after applying the fallback', async () => {
    mockRootNavigationState = createRootState();
    await render(<BossDetailScreen />);
    const beforeRemove = mockAddListener.mock.calls[0][1] as (event: {
      preventDefault: () => void;
    }) => void;
    const event = { preventDefault: jest.fn() };

    beforeRemove(event);
    beforeRemove(event);

    expect(mockRouterReplace).toHaveBeenCalledTimes(1);
  });

  it('does not destructively truncate long primary text', async () => {
    setBossId('promised-consort-radahn-divine-gate');
    await render(<BossDetailScreen />);

    const title = screen.getByRole('header', {
      name: 'Promised Consort Radahn',
    });
    const location = screen.getByText(
      'Divine Gate Front Staircase, Enir-Ilim',
    );
    expect(title.props.numberOfLines).toBeUndefined();
    expect(location.props.numberOfLines).toBeUndefined();
  });
});

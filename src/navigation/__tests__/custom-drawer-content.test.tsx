import { fireEvent, render, screen } from '@testing-library/react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { usePathname } from 'expo-router';

import { CustomDrawerContent } from '../custom-drawer-content';
import type { AppContextValue } from '../../contexts/app-context';
import { catalogRegions, type CatalogRegion } from '../../data/catalog';
import { getLocalizedText, getTranslationDictionary } from '../../i18n';
import { lightTheme, typography } from '../../theme';

const closeDrawer = jest.fn<void, []>();
const navigateDrawer = jest.fn();
let mockPathname = '/';
interface MockDataControl {
  setMockRegions: (regions: readonly CatalogRegion[]) => void;
}
let mockAppState: Pick<AppContextValue, 'language' | 'theme' | 'translations'> = {
  language: 'pt-BR',
  theme: lightTheme,
  translations: getTranslationDictionary('pt-BR'),
};

jest.mock('@react-navigation/drawer', () => ({
  DrawerContentScrollView: jest.requireActual('react-native').View,
}));
jest.mock('expo-router', () => ({
  usePathname: jest.fn(() => mockPathname),
}));
jest.mock('../../data', () => {
  const actual = jest.requireActual('../../data');
  const regionList: CatalogRegion[] = [];
  return {
    ...actual,
    regions: regionList,
    setMockRegions(nextRegions: readonly CatalogRegion[]) {
      regionList.splice(0, regionList.length, ...nextRegions);
    },
  };
});
jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));
const mockDataControl = jest.requireMock<MockDataControl>('../../data');

function createProps(): DrawerContentComponentProps {
  return {
    state: {
      stale: false,
      type: 'drawer',
      key: 'drawer',
      index: 0,
      routeNames: ['index'],
      routes: [{ key: 'index', name: 'index' }],
      history: [],
      default: 'closed',
      preloadedRouteKeys: [],
    },
    navigation: {
      dispatch: jest.fn(),
      navigate: navigateDrawer,
      navigateDeprecated: jest.fn(),
      goBack: jest.fn(),
      reset: jest.fn(),
      isFocused: jest.fn(() => true),
      canGoBack: jest.fn(() => false),
      getId: jest.fn(),
      getParent: jest.fn(),
      getState: jest.fn(),
      setParams: jest.fn(),
      replaceParams: jest.fn(),
      emit: jest.fn(),
      openDrawer: jest.fn(),
      closeDrawer,
      toggleDrawer: jest.fn(),
      jumpTo: jest.fn(),
      preload: jest.fn(),
    },
    descriptors: {},
  };
}

async function openBossesAndGroup(group: 'base-game' | 'expansion') {
  const translations = mockAppState.translations;
  await fireEvent.press(
    screen.getByRole('button', { name: translations.navigation.expandBosses }),
  );
  await fireEvent.press(
    screen.getByRole('button', {
      name:
        group === 'base-game'
          ? translations.navigation.expandBaseGame
          : translations.navigation.expandExpansion,
    }),
  );
}

beforeEach(() => {
  jest.clearAllMocks();
  mockPathname = '/';
  jest.mocked(usePathname).mockImplementation(() => mockPathname);
  mockDataControl.setMockRegions(catalogRegions);
  mockAppState = {
    language: 'pt-BR',
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('CustomDrawerContent', () => {
  it('removes All regions and shows All bosses before the package groups', async () => {
    const translations = mockAppState.translations;
    await render(<CustomDrawerContent {...createProps()} />);
    expect(screen.getByText(translations.app.name)).toHaveStyle({
      fontFamily: typography.displayBold,
    });
    expect(screen.queryByText('All regions')).toBeNull();
    expect(screen.queryByText('Todas as regiões')).toBeNull();

    await fireEvent.press(
      screen.getByRole('button', { name: translations.navigation.expandBosses }),
    );
    expect(screen.getByText(translations.navigation.allBosses)).toBeOnTheScreen();
    expect(screen.getAllByRole('button')[2]).toHaveAccessibleName(
      translations.navigation.allBosses,
    );

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBaseGame,
      }),
    );
    expect(
      screen.getAllByText(translations.navigation.allBosses),
    ).toHaveLength(2);
  });

  it('shows 16 and 10 alphabetically sorted regions in the active group', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    await openBossesAndGroup('base-game');
    const expectedBase = catalogRegions
      .filter(({ contentPack }) => contentPack === 'base-game')
      .map(({ name }) => getLocalizedText(name, 'pt-BR'))
      .sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));
    const visibleBase = screen
      .getAllByRole('button')
      .map((button) => button.props.accessibilityLabel as string)
      .filter((label) => expectedBase.includes(label));
    expect(visibleBase).toEqual(expectedBase);
    expect(visibleBase).toHaveLength(16);

    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.navigation.expandExpansion,
      }),
    );
    const expectedExpansion = catalogRegions
      .filter(({ contentPack }) => contentPack === 'shadow-of-the-erdtree')
      .map(({ name }) => getLocalizedText(name, 'pt-BR'));
    const sortedExpansion = [...expectedExpansion].sort((a, b) =>
      a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }),
    );
    const visibleExpansion = screen
      .getAllByRole('button')
      .map((button) => button.props.accessibilityLabel as string)
      .filter((label) => expectedExpansion.includes(label));
    expect(visibleExpansion).toEqual(sortedExpansion);
    expect(visibleExpansion).toHaveLength(10);
    expect(expectedBase.filter((name) => screen.queryByText(name))).toHaveLength(0);
  });

  it('recalculates localized labels after changing language', async () => {
    const view = await render(<CustomDrawerContent {...createProps()} />);
    await openBossesAndGroup('base-game');
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations: getTranslationDictionary('en'),
    };
    await view.rerender(<CustomDrawerContent {...createProps()} />);
    expect(screen.getByText('Limgrave')).toBeOnTheScreen();
  });

  it('closes both subgroups when Bosses is collapsed', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    await openBossesAndGroup('base-game');
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.navigation.collapseBosses,
      }),
    );
    expect(screen.queryByText(mockAppState.translations.navigation.allBosses)).toBeNull();
  });

  it.each([
    { label: 'home' as const, route: 'index' },
    { label: 'settings' as const, route: 'settings' },
  ])('navigates to $route and closes the accordion', async ({ label, route }) => {
    mockPathname = '/regions/limgrave';
    await render(<CustomDrawerContent {...createProps()} />);
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.navigation[label],
      }),
    );
    expect(navigateDrawer).toHaveBeenCalledWith(route);
    expect(closeDrawer).toHaveBeenCalled();
  });

  it('navigates to both typed All bosses routes', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    await openBossesAndGroup('base-game');
    await fireEvent.press(
      screen.getAllByRole('button', {
        name: mockAppState.translations.navigation.allBosses,
      })[1],
    );
    expect(navigateDrawer).toHaveBeenCalledWith('all-bosses/[contentPack]', {
      contentPack: 'base-game',
    });
  });

  it('automatically opens only the group for an active region or All bosses route', async () => {
    mockPathname = '/regions/scadu-altus';
    const view = await render(<CustomDrawerContent {...createProps()} />);
    expect(screen.getByText('Scadu Altus')).toBeOnTheScreen();
    expect(screen.queryByText('Limgrave')).toBeNull();

    mockPathname = '/all-bosses/base-game';
    await view.rerender(<CustomDrawerContent {...createProps()} />);
    expect(screen.getByText('Limgrave')).toBeOnTheScreen();
    expect(screen.queryByText('Scadu Altus')).toBeNull();
  });

  it('uses the registered dynamic route for every regional destination', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    await openBossesAndGroup('base-game');
    for (const region of catalogRegions.filter(({ contentPack }) => contentPack === 'base-game')) {
      await fireEvent.press(
        screen.getByRole('button', {
          name: getLocalizedText(region.name, 'pt-BR'),
        }),
      );
      expect(navigateDrawer).toHaveBeenCalledWith('regions/[regionId]', {
        regionId: region.id,
      });
    }
  });

  it('keeps the fixed main order and exposes accessible expansion state', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    const labels = screen
      .getAllByRole('button')
      .map((button) => button.props.accessibilityLabel);
    expect(labels).toEqual([
      mockAppState.translations.navigation.home,
      mockAppState.translations.navigation.expandBosses,
      mockAppState.translations.navigation.expandAshesOfWar,
      mockAppState.translations.navigation.expandSorceries,
      mockAppState.translations.navigation.expandIncantations,
      'Expand Index',
      mockAppState.translations.navigation.settings,
    ]);
    expect(
      screen.getByRole('button', {
        name: mockAppState.translations.navigation.expandBosses,
      }).props.accessibilityState,
    ).toMatchObject({ expanded: false, selected: false });
  });

  it('opens only one main group and closes boss package groups with it', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    await openBossesAndGroup('base-game');
    expect(screen.getByText('Limgrave')).toBeOnTheScreen();

    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.navigation.expandAshesOfWar,
      }),
    );
    expect(screen.queryByText('Limgrave')).toBeNull();
    expect(
      screen.getByText(mockAppState.translations.navigation.allAshesOfWar),
    ).toBeOnTheScreen();
    expect(
      screen.queryByRole('button', {
        name: mockAppState.translations.navigation.collapseBosses,
      }),
    ).toBeNull();
  });

  it('shows direct Ash routes without regions and navigates safely', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.navigation.expandAshesOfWar,
      }),
    );
    expect(
      screen.getAllByRole('button').map((button) => button.props.accessibilityLabel),
    ).toEqual([
      mockAppState.translations.navigation.home,
      mockAppState.translations.navigation.expandBosses,
      mockAppState.translations.navigation.collapseAshesOfWar,
      mockAppState.translations.navigation.allAshesOfWar,
      mockAppState.translations.common.baseGame,
      mockAppState.translations.common.expansion,
      mockAppState.translations.navigation.expandSorceries,
      mockAppState.translations.navigation.expandIncantations,
      'Expand Index',
      mockAppState.translations.navigation.settings,
    ]);
    expect(screen.queryByText('Limgrave')).toBeNull();
    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.navigation.allAshesOfWar,
      }),
    );
    expect(navigateDrawer).toHaveBeenCalledWith('ashes-of-war/index');
  });

  it.each([
    {
      pathname: '/all-bosses',
      selected: 'Todos os chefes',
      expanded: 'Recolher regiões de chefes',
    },
    {
      pathname: '/ashes-of-war',
      selected: 'Todas as Cinzas',
      expanded: 'Recolher Cinzas da Guerra',
    },
    {
      pathname: '/ashes-of-war/base-game',
      selected: 'Jogo base',
      expanded: 'Recolher Cinzas da Guerra',
    },
    {
      pathname: '/ashes-of-war/shadow-of-the-erdtree',
      selected: 'Shadow of the Erdtree',
      expanded: 'Recolher Cinzas da Guerra',
    },
    {
      pathname: '/sorceries',
      selected: 'Todos os Feitiços',
      expanded: 'Recolher Feitiços',
    },
    {
      pathname: '/sorceries/base-game',
      selected: 'Jogo base',
      expanded: 'Recolher Feitiços',
    },
    {
      pathname: '/incantations',
      selected: 'Todos os Encantamentos',
      expanded: 'Recolher Encantamentos',
    },
    {
      pathname: '/incantations/shadow-of-the-erdtree',
      selected: 'Shadow of the Erdtree',
      expanded: 'Recolher Encantamentos',
    },
  ])('opens and selects only the route branch for $pathname', async ({
    expanded,
    pathname,
    selected,
  }) => {
    mockPathname = pathname;
    await render(<CustomDrawerContent {...createProps()} />);
    expect(
      screen.getByRole('button', { name: expanded }).props.accessibilityState,
    ).toMatchObject({ expanded: true, selected: true });
    expect(
      screen.getByRole('button', { name: selected }).props.accessibilityState,
    ).toMatchObject({ selected: true });
    expect(
      screen.getAllByRole('button').filter(
        (button) => button.props.accessibilityState?.selected === true,
      ),
    ).toHaveLength(2);
  });

  it('keeps route-driven active state after changing language', async () => {
    mockPathname = '/ashes-of-war/base-game';
    const view = await render(<CustomDrawerContent {...createProps()} />);
    mockAppState = {
      ...mockAppState,
      language: 'en',
      translations: getTranslationDictionary('en'),
    };
    await view.rerender(<CustomDrawerContent {...createProps()} />);
    expect(
      screen.getByRole('button', { name: 'Base game' }).props.accessibilityState,
    ).toMatchObject({ selected: true });
    expect(
      screen.getByRole('button', { name: 'Collapse Ashes of War' }).props
        .accessibilityState,
    ).toMatchObject({ expanded: true, selected: true });
  });

  it('closes every group when the active route becomes Home', async () => {
    mockPathname = '/ashes-of-war/base-game';
    const view = await render(<CustomDrawerContent {...createProps()} />);
    expect(screen.getByText('Todas as Cinzas')).toBeOnTheScreen();
    mockPathname = '/';
    await view.rerender(<CustomDrawerContent {...createProps()} />);
    expect(screen.queryByText('Todas as Cinzas')).toBeNull();
    expect(
      screen.getByRole('button', { name: mockAppState.translations.navigation.home })
        .props.accessibilityState,
    ).toMatchObject({ selected: true });
  });

  it('places Index immediately before Settings and keeps its labels in English', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    const labels = screen
      .getAllByRole('button')
      .map((button) => button.props.accessibilityLabel as string);
    expect(labels.indexOf('Expand Index')).toBe(
      labels.indexOf(mockAppState.translations.navigation.settings) - 1,
    );
    expect(screen.queryByText('Lore')).toBeNull();
  });

  it('expands the Index hierarchy accessibly and keeps other main groups closed', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    await fireEvent.press(screen.getByRole('button', { name: 'Expand Index' }));
    expect(
      screen.getByRole('button', { name: 'Collapse Index' }).props
        .accessibilityState,
    ).toMatchObject({ expanded: true, selected: false });
    expect(screen.getByText('Remembrance Bosses')).toBeOnTheScreen();
    expect(screen.getAllByText('Index')).toHaveLength(1);

    await fireEvent.press(
      screen.getByRole('button', { name: 'Expand Remembrance Bosses' }),
    );
    expect(screen.getByText('Base Game')).toBeOnTheScreen();
    expect(screen.getByText('DLC')).toBeOnTheScreen();

    await fireEvent.press(
      screen.getByRole('button', {
        name: mockAppState.translations.navigation.expandBosses,
      }),
    );
    expect(screen.queryByText('Remembrance Bosses')).toBeNull();
  });

  it('navigates to the empty Index leaves and closes the Drawer', async () => {
    await render(<CustomDrawerContent {...createProps()} />);
    await fireEvent.press(screen.getByRole('button', { name: 'Expand Index' }));
    await fireEvent.press(
      screen.getByRole('button', { name: 'Expand Remembrance Bosses' }),
    );
    await fireEvent.press(screen.getByRole('button', { name: 'Base Game' }));
    expect(navigateDrawer).toHaveBeenCalledWith(
      'index/remembrance-bosses/base-game',
    );
    expect(closeDrawer).toHaveBeenCalledTimes(1);
  });

  it('opens and selects the active Index route branch', async () => {
    mockPathname = '/remembrance-bosses/dlc';
    await render(<CustomDrawerContent {...createProps()} />);
    expect(
      screen.getByRole('button', { name: 'Collapse Index' }).props
        .accessibilityState,
    ).toMatchObject({ expanded: true, selected: true });
    expect(
      screen.getByRole('button', { name: 'DLC' }).props.accessibilityState,
    ).toMatchObject({ selected: true });
  });
});

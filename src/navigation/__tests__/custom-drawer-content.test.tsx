import { fireEvent, render, screen } from '@testing-library/react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { usePathname } from 'expo-router';

import { CustomDrawerContent } from '../custom-drawer-content';
import type { AppContextValue } from '../../contexts/app-context';
import { catalogRegions, type CatalogRegion } from '../../data/catalog';
import { getLocalizedText, getTranslationDictionary } from '../../i18n';
import { lightTheme } from '../../theme';

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
  it('removes All regions and shows All bosses first in each exclusive group', async () => {
    const translations = mockAppState.translations;
    await render(<CustomDrawerContent {...createProps()} />);
    expect(screen.queryByText('All regions')).toBeNull();
    expect(screen.queryByText('Todas as regiões')).toBeNull();

    await openBossesAndGroup('base-game');
    expect(screen.getByText(translations.navigation.allBosses)).toBeOnTheScreen();
    expect(screen.getAllByRole('button')[3]).toHaveAccessibleName(
      translations.navigation.allBosses,
    );

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandExpansion,
      }),
    );
    expect(screen.queryByText(getLocalizedText(catalogRegions[0].name, 'pt-BR'))).toBeNull();
    expect(screen.getByText(translations.navigation.allBosses)).toBeOnTheScreen();
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
      screen.getByRole('button', {
        name: mockAppState.translations.navigation.allBosses,
      }),
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
});

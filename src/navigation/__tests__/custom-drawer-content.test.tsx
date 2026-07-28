import { fireEvent, render, screen } from '@testing-library/react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { usePathname } from 'expo-router';

import { CustomDrawerContent } from '../custom-drawer-content';
import type { AppContextValue } from '../../contexts/app-context';
import { getLocalizedText, getTranslationDictionary } from '../../i18n';
import { lightTheme } from '../../theme';
import { catalogRegions, type CatalogRegion } from '../../data/catalog';

const testRegions: readonly CatalogRegion[] = [
  {
    id: 'test-region-b',
    name: { 'pt-BR': 'Região Teste B', en: 'Test Region B' },
    contentPack: 'shadow-of-the-erdtree',
    displayOrder: 2,
  },
  {
    id: 'test-region-a',
    name: { 'pt-BR': 'Região Teste A', en: 'Test Region A' },
    contentPack: 'base-game',
    displayOrder: 1,
  },
];

interface MockDataControl {
  setMockRegions: (regions: readonly CatalogRegion[]) => void;
}

const closeDrawer = jest.fn<void, []>();
const mockUsePathname = jest.mocked(usePathname);
const navigateDrawer = jest.fn();
let mockPathname = '/';
let mockAppState: Pick<
  AppContextValue,
  'language' | 'theme' | 'translations'
> = {
  language: 'pt-BR',
  theme: lightTheme,
  translations: getTranslationDictionary('pt-BR'),
};

jest.mock('@react-navigation/drawer', () => {
  const { View } = jest.requireActual('react-native');

  return {
    DrawerContentScrollView: View,
  };
});

jest.mock('expo-router', () => ({
  usePathname: jest.fn(() => mockPathname),
}));

jest.mock('../../data', () => {
  const actualData = jest.requireActual('../../data');
  const regionList: import('../../types').Region[] = [];

  return {
    ...actualData,
    regions: regionList,
    setMockRegions(nextRegions: readonly import('../../types').Region[]) {
      regionList.splice(0, regionList.length, ...nextRegions);
    },
  };
});

jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

const mockDataControl =
  jest.requireMock<MockDataControl>('../../data');

function createDrawerProps(): DrawerContentComponentProps {
  return {
    state: {
      stale: false,
      type: 'drawer',
      key: 'test-drawer',
      index: 0,
      routeNames: ['index'],
      routes: [{ key: 'test-index', name: 'index' }],
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

beforeEach(() => {
  jest.clearAllMocks();
  mockDataControl.setMockRegions(testRegions);
  mockPathname = '/';
  mockUsePathname.mockImplementation(() => mockPathname);
  mockAppState = {
    language: 'pt-BR',
    theme: lightTheme,
    translations: getTranslationDictionary('pt-BR'),
  };
});

describe('CustomDrawerContent', () => {
  it('navigates from All regions directly to the Drawer Home route', async () => {
    const translations = getTranslationDictionary('pt-BR');
    const view = await render(
      <CustomDrawerContent {...createDrawerProps()} />,
    );

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBosses,
      }),
    );
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.allRegions,
      }),
    );
    expect(navigateDrawer).toHaveBeenLastCalledWith('bosses');

    mockPathname = '/bosses';
    await view.rerender(<CustomDrawerContent {...createDrawerProps()} />);
    await fireEvent.press(
      screen.getByRole('button', { name: translations.navigation.home }),
    );

    expect(navigateDrawer).toHaveBeenLastCalledWith('index');
    expect(
      navigateDrawer.mock.calls.every(([routeName]) =>
        ['bosses', 'index'].includes(routeName as string),
      ),
    ).toBe(true);
  });

  it.each(['/regions/test-region-a', '/settings', '/bosses/test-boss'])(
    'navigates Home from %s using the absolute Drawer route name',
    async (pathname) => {
      mockPathname = pathname;
      const translations = getTranslationDictionary('pt-BR');
      await render(<CustomDrawerContent {...createDrawerProps()} />);

      await fireEvent.press(
        screen.getByRole('button', { name: translations.navigation.home }),
      );

      expect(navigateDrawer).toHaveBeenCalledWith('index');
    },
  );

  it('does not navigate again when Home is already active', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockPathname = '/';
    await render(<CustomDrawerContent {...createDrawerProps()} />);

    await fireEvent.press(
      screen.getByRole('button', { name: translations.navigation.home }),
    );

    expect(navigateDrawer).not.toHaveBeenCalled();
    expect(closeDrawer).toHaveBeenCalledTimes(1);
  });

  it('navigates from All regions to Settings through its registered route', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockPathname = '/bosses';
    await render(<CustomDrawerContent {...createDrawerProps()} />);

    await fireEvent.press(
      screen.getByRole('button', { name: translations.navigation.settings }),
    );

    expect(navigateDrawer).toHaveBeenCalledWith('settings');
  });

  it('uses the registered dynamic Drawer route for all 26 regions', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockDataControl.setMockRegions(catalogRegions);
    await render(<CustomDrawerContent {...createDrawerProps()} />);

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBosses,
      }),
    );
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBaseGame,
      }),
    );
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandExpansion,
      }),
    );

    for (const region of catalogRegions) {
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

  it('shows app identity and the collapsed primary menu accessibly', async () => {
    const translations = getTranslationDictionary('pt-BR');

    await render(<CustomDrawerContent {...createDrawerProps()} />);

    expect(screen.getByText(translations.app.name)).toBeOnTheScreen();
    expect(
      screen.getByText(translations.navigation.drawerDescription),
    ).toBeOnTheScreen();
    expect(
      screen.getByRole('button', { name: translations.navigation.home }),
    ).toBeOnTheScreen();
    expect(
      screen.getByRole('button', { name: translations.navigation.settings }),
    ).toBeOnTheScreen();
    const bossesToggle = screen.getByRole('button', {
      name: translations.navigation.expandBosses,
    });
    expect(bossesToggle.props.accessibilityState).toMatchObject({
      expanded: false,
      selected: false,
    });
    expect(
      screen.getByText('+', { includeHiddenElements: true }),
    ).toBeOnTheScreen();
    expect(screen.queryByText(translations.navigation.allRegions)).toBeNull();
  });

  it('expands and collapses the ordered localized submenu', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<CustomDrawerContent {...createDrawerProps()} />);

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBosses,
      }),
    );

    const collapseButton = screen.getByRole('button', {
      name: translations.navigation.collapseBosses,
    });
    expect(collapseButton.props.accessibilityState).toMatchObject({
      expanded: true,
    });
    expect(
      screen.getByText('−', { includeHiddenElements: true }),
    ).toBeOnTheScreen();
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBaseGame,
      }),
    );
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandExpansion,
      }),
    );
    const submenuButtons = [
      screen.getByRole('button', {
        name: translations.navigation.allRegions,
      }),
      screen.getByRole('button', { name: 'Região Teste A' }),
      screen.getByRole('button', { name: 'Região Teste B' }),
    ];
    expect(submenuButtons).toHaveLength(3);

    await fireEvent.press(collapseButton);
    expect(
      screen.getByRole('button', {
        name: translations.navigation.expandBosses,
      }).props.accessibilityState,
    ).toMatchObject({ expanded: false });
    expect(screen.queryByText('Região Teste A')).toBeNull();
  });

  it.each([
    { labelKey: 'home' as const, destination: '/' as const },
    { labelKey: 'settings' as const, destination: '/settings' as const },
  ])('navigates to $destination and closes the Drawer', async ({
    destination,
    labelKey,
  }) => {
    mockPathname = '/other';
    const translations = getTranslationDictionary('pt-BR');
    await render(<CustomDrawerContent {...createDrawerProps()} />);

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation[labelKey],
      }),
    );

    expect(navigateDrawer).toHaveBeenCalledWith(
      destination === '/' ? 'index' : 'settings',
    );
    expect(closeDrawer).toHaveBeenCalledTimes(1);
  });

  it('navigates to all regions and closes the Drawer', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<CustomDrawerContent {...createDrawerProps()} />);
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBosses,
      }),
    );

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.allRegions,
      }),
    );

    expect(navigateDrawer).toHaveBeenCalledWith('bosses');
    expect(closeDrawer).toHaveBeenCalledTimes(1);
  });

  it('navigates to a region and closes the Drawer', async () => {
    const translations = getTranslationDictionary('pt-BR');
    await render(<CustomDrawerContent {...createDrawerProps()} />);
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBosses,
      }),
    );
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandExpansion,
      }),
    );

    await fireEvent.press(
      screen.getByRole('button', { name: 'Região Teste B' }),
    );

    expect(navigateDrawer).toHaveBeenCalledWith('regions/[regionId]', {
      regionId: 'test-region-b',
    });
    expect(closeDrawer).toHaveBeenCalledTimes(1);
  });

  it('automatically expands and marks all regions selected on /bosses', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockPathname = '/bosses';

    await render(<CustomDrawerContent {...createDrawerProps()} />);

    const bossesToggle = screen.getByRole('button', {
      name: translations.navigation.collapseBosses,
    });
    expect(bossesToggle.props.accessibilityState).toMatchObject({
      expanded: true,
      selected: true,
    });
    const allRegions = screen.getByRole('button', {
      name: translations.navigation.allRegions,
    });
    expect(allRegions.props.accessibilityState).toMatchObject({
      selected: true,
    });
    expect(
      screen.getByText(translations.navigation.selected),
    ).toBeOnTheScreen();
  });

  it('automatically expands and marks the current region selected', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockPathname = '/regions/test-region-b';

    await render(<CustomDrawerContent {...createDrawerProps()} />);

    expect(
      screen.getByRole('button', {
        name: translations.navigation.collapseBosses,
      }).props.accessibilityState,
    ).toMatchObject({ expanded: true, selected: true });
    expect(
      screen.getByRole('button', { name: 'Região Teste B' }).props
        .accessibilityState,
    ).toMatchObject({ selected: true });
    expect(
      screen.getByText(translations.navigation.selected),
    ).toBeOnTheScreen();
  });

  it('shows the translated empty-region message', async () => {
    const translations = getTranslationDictionary('pt-BR');
    mockDataControl.setMockRegions([]);
    await render(<CustomDrawerContent {...createDrawerProps()} />);

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBosses,
      }),
    );

    expect(
      screen.getByText(translations.navigation.noRegions),
    ).toBeOnTheScreen();
  });

  it('switches the identity, menu, and region labels to English', async () => {
    const translations = getTranslationDictionary('en');
    mockAppState = {
      language: 'en',
      theme: lightTheme,
      translations,
    };

    await render(<CustomDrawerContent {...createDrawerProps()} />);

    expect(screen.getByText(translations.navigation.drawerDescription)).toBeOnTheScreen();
    expect(
      screen.getByRole('button', { name: translations.navigation.home }),
    ).toBeOnTheScreen();
    expect(
      screen.getByRole('button', { name: translations.navigation.settings }),
    ).toBeOnTheScreen();
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBosses,
      }),
    );
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandBaseGame,
      }),
    );
    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.navigation.expandExpansion,
      }),
    );
    expect(screen.getByText('Test Region A')).toBeOnTheScreen();
    expect(screen.getByText('Test Region B')).toBeOnTheScreen();
  });
});

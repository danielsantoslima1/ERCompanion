import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

import RemembranceBossesScreen from '../(drawer)/index/remembrance-bosses/index';
import RemembranceBossesBaseGameScreen from '../(drawer)/index/remembrance-bosses/base-game';
import RemembranceBossesDlcScreen from '../(drawer)/index/remembrance-bosses/dlc';
import type { AppContextValue } from '../../src/contexts/app-context';
import { getTranslationDictionary } from '../../src/i18n';
import { INDEX_LABELS, INDEX_ROUTES } from '../../src/index/index-sections';
import { IndexHeaderBackButton } from '../../src/components/index-header-back-button';
import { darkTheme, lightTheme } from '../../src/theme';

jest.mock('expo-router', () => ({
  router: {
    back: jest.fn(),
    canGoBack: jest.fn(() => true),
    push: jest.fn(),
    replace: jest.fn(),
  },
}));

let mockApp: Pick<AppContextValue, 'theme' | 'translations'> = {
  theme: lightTheme,
  translations: getTranslationDictionary('en'),
};

jest.mock('../../src/hooks/use-app', () => ({
  useApp: () => mockApp,
}));
jest.mock('expo-router/drawer', () => ({
  Drawer: { Screen: () => null },
}));
jest.mock('@expo/vector-icons/Ionicons', () => {
  const { Text } = jest.requireActual('react-native');
  return function MockIcon({ name }: { name: string }) {
    return <Text>{name}</Text>;
  };
});

beforeEach(() => {
  jest.clearAllMocks();
  mockApp = {
    theme: lightTheme,
    translations: getTranslationDictionary('en'),
  };
});

describe('initial Index structure', () => {
  it('keeps Home as the only drawer index file and removes the conflicting child route', () => {
    const drawerRoot = join(process.cwd(), 'app', '(drawer)');
    expect(existsSync(join(drawerRoot, 'index.tsx'))).toBe(true);
    expect(existsSync(join(drawerRoot, 'index', 'index.tsx'))).toBe(false);
    expect(Object.values(INDEX_ROUTES)).not.toContain('/index');
  });

  it('shows only Base Game and DLC in Remembrance Bosses', async () => {
    await render(<RemembranceBossesScreen />);
    expect(screen.getByText(INDEX_LABELS.baseGame)).toBeOnTheScreen();
    expect(screen.getByText(INDEX_LABELS.dlc)).toBeOnTheScreen();
    expect(screen.queryByText('All')).toBeNull();
    expect(screen.queryByPlaceholderText(/search/i)).toBeNull();
  });

  it.each([
    [INDEX_LABELS.baseGame, INDEX_ROUTES.baseGame],
    [INDEX_LABELS.dlc, INDEX_ROUTES.dlc],
  ])('navigates from %s to its stable route', async (label, route) => {
    await render(<RemembranceBossesScreen />);
    await fireEvent.press(screen.getByRole('button', { name: label }));
    expect(router.push).toHaveBeenCalledWith(route);
  });

  it.each([
    ['Base Game', RemembranceBossesBaseGameScreen],
    ['DLC', RemembranceBossesDlcScreen],
  ] as const)('renders an intentional empty %s page', async (_label, Screen) => {
    await render(<Screen />);
    expect(screen.getByText(INDEX_LABELS.emptyTitle)).toBeOnTheScreen();
    expect(screen.getByText(INDEX_LABELS.emptyDescription)).toBeOnTheScreen();
    expect(screen.queryByRole('image')).toBeNull();
    expect(screen.queryByPlaceholderText(/search/i)).toBeNull();
  });

  it('keeps all new Index content in English with pt-BR active', async () => {
    mockApp = {
      theme: darkTheme,
      translations: getTranslationDictionary('pt-BR'),
    };
    await render(<RemembranceBossesDlcScreen />);
    expect(screen.getByText(INDEX_LABELS.emptyTitle)).toBeOnTheScreen();
    expect(screen.getByText(INDEX_LABELS.emptyDescription)).toBeOnTheScreen();
  });

  it('provides a functional accessible back action with direct-access fallback', async () => {
    await render(<IndexHeaderBackButton fallbackRoute="/" />);
    await fireEvent.press(screen.getByRole('button', { name: 'Go back' }));
    expect(router.back).toHaveBeenCalledTimes(1);

    jest.mocked(router.canGoBack).mockReturnValueOnce(false);
    await fireEvent.press(screen.getByRole('button', { name: 'Go back' }));
    expect(router.replace).toHaveBeenCalledWith('/');
  });

  it('returns direct Base Game and DLC access to Remembrance Bosses', async () => {
    jest.mocked(router.canGoBack).mockReturnValue(false);
    await render(
      <IndexHeaderBackButton
        fallbackRoute={INDEX_ROUTES.remembranceBosses}
      />,
    );
    await fireEvent.press(screen.getByRole('button', { name: 'Go back' }));
    expect(router.replace).toHaveBeenCalledWith(
      INDEX_ROUTES.remembranceBosses,
    );
  });
});

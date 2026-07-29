import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import type { ReactNode } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { RootNavigation } from '../_layout';
import type { AppContextValue } from '../../src/contexts/app-context';
import { getTranslationDictionary } from '../../src/i18n';
import { lightTheme } from '../../src/theme';

let mockAppState: Pick<
  AppContextValue,
  'initializationError' | 'isHydrated' | 'theme' | 'translations'
>;

jest.mock('expo-splash-screen', () => ({
  hideAsync: jest.fn().mockResolvedValue(undefined),
  preventAutoHideAsync: jest.fn().mockResolvedValue(undefined),
}));
jest.mock('../../src/contexts', () => ({
  AppProvider: ({ children }: { children: ReactNode }) => children,
}));
jest.mock('../../src/hooks/use-app-fonts', () => ({
  useAppFonts: jest.fn(() => ({
    error: null,
    isLoaded: true,
    retry: jest.fn(),
  })),
}));
jest.mock('expo-router', () => {
  const Stack = ({ children }: { children: ReactNode }) => children;
  Stack.Screen = function MockStackScreen() {
    return null;
  };
  return { Stack };
});
jest.mock('../../src/hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));
jest.mock('../../src/components/animated-app-splash', () => ({
  AnimatedAppSplash: ({
    onComplete,
    onReady,
    startExit,
  }: {
    onComplete: () => void;
    onReady: () => void;
    startExit: boolean;
  }) => {
    const React = jest.requireActual<typeof import('react')>('react');
    const { Pressable, Text } =
      jest.requireActual<typeof import('react-native')>('react-native');
    React.useEffect(() => onReady(), [onReady]);
    return (
      <Pressable onPress={onComplete} testID="mock-splash-overlay">
        <Text>{String(startExit)}</Text>
      </Pressable>
    );
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = {
    initializationError: null,
    isHydrated: true,
    theme: lightTheme,
    translations: getTranslationDictionary('en'),
  };
});

describe('RootNavigation splash coordination', () => {
  it('renders the overlay before hiding native splash and then unmounts it', async () => {
    await render(
      <RootNavigation
        fontError={null}
        fontsLoaded
        retryFonts={jest.fn()}
        splashStartedAt={Date.now() - 3000}
      />,
    );

    expect(screen.getByTestId('mock-splash-overlay')).toBeOnTheScreen();
    await waitFor(() => expect(SplashScreen.hideAsync).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.getByText('true')).toBeOnTheScreen());

    fireEvent.press(screen.getByTestId('mock-splash-overlay'));
    await waitFor(
      () => expect(screen.queryByTestId('mock-splash-overlay')).toBeNull(),
    );
  });

  it('does not hide native splash or reveal the interface before readiness', async () => {
    mockAppState = { ...mockAppState, isHydrated: false };
    await render(
      <RootNavigation
        fontError={null}
        fontsLoaded
        retryFonts={jest.fn()}
        splashStartedAt={Date.now() - 3000}
      />,
    );

    expect(screen.queryByTestId('mock-splash-overlay')).toBeNull();
    expect(SplashScreen.hideAsync).not.toHaveBeenCalled();
  });

  it('uses a branded backdrop while fonts load', async () => {
    await render(
      <RootNavigation
        fontError={null}
        fontsLoaded={false}
        retryFonts={jest.fn()}
        splashStartedAt={Date.now() - 3000}
      />,
    );

    expect(screen.getByTestId('branding-loading-backdrop')).toBeOnTheScreen();
    expect(SplashScreen.hideAsync).not.toHaveBeenCalled();
  });

  it('dismisses native splash for a font error without creating an overlay loop', async () => {
    await render(
      <RootNavigation
        fontError={new Error('font failure')}
        fontsLoaded={false}
        retryFonts={jest.fn()}
        splashStartedAt={Date.now() - 3000}
      />,
    );

    fireEvent(screen.getByTestId('root-navigation'), 'layout', {
      nativeEvent: { layout: {} },
    });
    await waitFor(() => expect(SplashScreen.hideAsync).toHaveBeenCalledTimes(1));
    expect(screen.queryByTestId('mock-splash-overlay')).toBeNull();
    expect(screen.getByRole('button')).toBeOnTheScreen();
  });

  it('restarts the minimum-duration cycle on a font retry', async () => {
    const retryFonts = jest.fn();
    await render(
      <RootNavigation
        fontError={new Error('font failure')}
        fontsLoaded={false}
        retryFonts={retryFonts}
        splashStartedAt={Date.now() - 3000}
      />,
    );

    fireEvent(screen.getByTestId('root-navigation'), 'layout', {
      nativeEvent: { layout: {} },
    });
    fireEvent.press(screen.getByRole('button'));

    expect(retryFonts).toHaveBeenCalledTimes(1);
  });
});

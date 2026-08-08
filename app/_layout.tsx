import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  appBranding,
  scheduleSplashExitAfterMinimum,
} from '@/src/branding';
import { AnimatedAppSplash } from '@/src/components/animated-app-splash';
import { FontLoadingErrorScreen } from '@/src/components/font-loading-error-screen';
import { InitializationErrorScreen } from '@/src/components/initialization-error-screen';
import { AppProvider } from '@/src/contexts';
import { useApp } from '@/src/hooks/use-app';
import { useAppFonts } from '@/src/hooks/use-app-fonts';
import { createNavigationTheme } from '@/src/navigation';
import { typography } from '@/src/theme/typography';

void SplashScreen.preventAutoHideAsync();
const splashBootstrapStartedAt = Date.now();

interface RootNavigationProps {
  readonly fontError: Error | null;
  readonly fontsLoaded: boolean;
  readonly retryFonts: () => void;
  readonly splashStartedAt?: number;
}

export function RootNavigation({
  fontError,
  fontsLoaded,
  retryFonts,
  splashStartedAt = splashBootstrapStartedAt,
}: RootNavigationProps) {
  const {
    initializationError,
    isHydrated,
    theme,
    translations,
  } = useApp();
  const navigationTheme = useMemo(
    () => createNavigationTheme(theme),
    [theme],
  );
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [shouldExitOverlay, setShouldExitOverlay] = useState(false);
  const splashStartedAtRef = useRef(splashStartedAt);
  const cancelScheduledExitRef = useRef<(() => void) | null>(null);
  const hasScheduledExitRef = useRef(false);
  const splashCycleRef = useRef(0);
  const isMountedRef = useRef(false);
  const clearScheduledExit = useCallback(() => {
    splashCycleRef.current += 1;
    cancelScheduledExitRef.current?.();
    cancelScheduledExitRef.current = null;
    hasScheduledExitRef.current = false;
  }, []);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      clearScheduledExit();
    };
  }, [clearScheduledExit]);
  const handleLayout = useCallback(() => {
    if (isHydrated && fontError) {
      clearScheduledExit();
      setIsOverlayVisible(false);
      void SplashScreen.hideAsync().catch(() => undefined);
    }
  }, [clearScheduledExit, fontError, isHydrated]);
  const handleSplashReady = useCallback(() => {
    if (hasScheduledExitRef.current) return;
    hasScheduledExitRef.current = true;
    const scheduledCycle = splashCycleRef.current;
    void SplashScreen.hideAsync()
      .catch(() => undefined)
      .then(() => {
        if (
          !isMountedRef.current ||
          scheduledCycle !== splashCycleRef.current
        ) {
          return;
        }
        cancelScheduledExitRef.current = scheduleSplashExitAfterMinimum(
          splashStartedAtRef.current,
          () => {
            if (
              !isMountedRef.current ||
              scheduledCycle !== splashCycleRef.current
            ) {
              return;
            }
            cancelScheduledExitRef.current = null;
            setShouldExitOverlay(true);
          },
        );
      });
  }, []);
  const handleRetryFonts = useCallback(() => {
    clearScheduledExit();
    splashStartedAtRef.current = Date.now();
    setShouldExitOverlay(false);
    setIsOverlayVisible(true);
    retryFonts();
  }, [clearScheduledExit, retryFonts]);

  if (!fontsLoaded && !fontError) {
    return (
      <View
        style={styles.brandingBackground}
        testID="branding-loading-backdrop"
      />
    );
  }

  return (
    <View
      onLayout={handleLayout}
      style={[styles.content, { backgroundColor: theme.colors.background }]}
      testID="root-navigation">
      <ThemeProvider value={navigationTheme}>
        {fontError ? (
          <FontLoadingErrorScreen onRetry={handleRetryFonts} />
        ) : initializationError ? (
          <InitializationErrorScreen />
        ) : (
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: theme.colors.background },
              headerStyle: {
                backgroundColor: theme.colors.navigationBackground,
              },
              headerTitleStyle: { fontFamily: typography.display },
              headerTintColor: theme.colors.navigationText,
            }}>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen
              name="bosses/[bossId]"
              options={{ title: translations.bossDetails.details }}
            />
            <Stack.Screen
              name="ashes-of-war/[ashOfWarId]"
              options={{ title: translations.ashesOfWar.details }}
            />
            <Stack.Screen
              name="sorceries/[sorceryId]"
              options={{ title: translations.spells.sorceryDetails }}
            />
            <Stack.Screen
              name="incantations/[incantationId]"
              options={{ title: translations.spells.incantationDetails }}
            />
          </Stack>
        )}
        <StatusBar
          backgroundColor={theme.colors.navigationBackground}
          style="light"
        />
      </ThemeProvider>
      {fontsLoaded && isHydrated && isOverlayVisible ? (
        <AnimatedAppSplash
          onComplete={() => setIsOverlayVisible(false)}
          onReady={handleSplashReady}
          startExit={shouldExitOverlay}
        />
      ) : null}
    </View>
  );
}

export default function RootLayout() {
  const { error, isLoaded, retry } = useAppFonts();

  return (
    <GestureHandlerRootView style={styles.content}>
      <AppProvider>
        <RootNavigation
          fontError={error}
          fontsLoaded={isLoaded}
          retryFonts={retry}
        />
      </AppProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  brandingBackground: {
    backgroundColor: appBranding.splashBackground,
    flex: 1,
  },
});

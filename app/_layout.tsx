import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { FontLoadingErrorScreen } from '@/src/components/font-loading-error-screen';
import { InitializationErrorScreen } from '@/src/components/initialization-error-screen';
import { AppProvider } from '@/src/contexts';
import { useApp } from '@/src/hooks/use-app';
import { useAppFonts } from '@/src/hooks/use-app-fonts';
import { createNavigationTheme } from '@/src/navigation';
import { typography } from '@/src/theme/typography';

void SplashScreen.preventAutoHideAsync();

interface RootNavigationProps {
  readonly fontError: Error | null;
  readonly fontsLoaded: boolean;
  readonly retryFonts: () => void;
}

function RootNavigation({
  fontError,
  fontsLoaded,
  retryFonts,
}: RootNavigationProps) {
  const {
    initializationError,
    isHydrated,
    resolvedTheme,
    theme,
    translations,
  } = useApp();
  const navigationTheme = useMemo(
    () => createNavigationTheme(theme),
    [theme],
  );
  const handleLayout = useCallback(() => {
    if (isHydrated && (fontsLoaded || fontError)) {
      void SplashScreen.hideAsync();
    }
  }, [fontError, fontsLoaded, isHydrated]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <View
      onLayout={handleLayout}
      style={[styles.content, { backgroundColor: theme.colors.background }]}>
      <ThemeProvider value={navigationTheme}>
        {fontError ? (
          <FontLoadingErrorScreen onRetry={retryFonts} />
        ) : initializationError ? (
          <InitializationErrorScreen />
        ) : (
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: theme.colors.background },
              headerStyle: { backgroundColor: theme.colors.surface },
              headerTitleStyle: { fontFamily: typography.display },
              headerTintColor: theme.colors.textPrimary,
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
        <StatusBar style={resolvedTheme === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
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
});

import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { InitializationErrorScreen } from '@/src/components/initialization-error-screen';
import { AppProvider } from '@/src/contexts';
import { useApp } from '@/src/hooks/use-app';
import { createNavigationTheme } from '@/src/navigation';

void SplashScreen.preventAutoHideAsync();

function RootNavigation() {
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
    if (isHydrated) void SplashScreen.hideAsync();
  }, [isHydrated]);

  return (
    <View
      onLayout={handleLayout}
      style={[styles.content, { backgroundColor: theme.colors.background }]}>
      <ThemeProvider value={navigationTheme}>
        {initializationError ? (
          <InitializationErrorScreen />
        ) : (
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: theme.colors.background },
              headerStyle: { backgroundColor: theme.colors.surface },
              headerTintColor: theme.colors.textPrimary,
            }}>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen
              name="bosses/[bossId]"
              options={{ title: translations.bossDetails.details }}
            />
          </Stack>
        )}
        <StatusBar style={resolvedTheme === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
    </View>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.content}>
      <AppProvider>
        <RootNavigation />
      </AppProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

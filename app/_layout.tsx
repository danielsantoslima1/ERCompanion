import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { ThemeProvider } from '@react-navigation/native';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { InitializationErrorScreen } from '@/src/components/initialization-error-screen';
import { AppProvider } from '@/src/contexts';
import { useApp } from '@/src/hooks/use-app';
import {
  createNavigationTheme,
  CustomDrawerContent,
} from '@/src/navigation';

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
    if (isHydrated) {
      void SplashScreen.hideAsync();
    }
  }, [isHydrated]);

  return (
    <View
      onLayout={handleLayout}
      style={[
        styles.content,
        { backgroundColor: theme.colors.background },
      ]}>
      <ThemeProvider value={navigationTheme}>
        {initializationError ? (
          <InitializationErrorScreen />
        ) : (
          <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName="index"
            screenOptions={{
              drawerActiveBackgroundColor: theme.colors.drawerActiveBackground,
              drawerActiveTintColor: theme.colors.drawerActiveText,
              drawerInactiveTintColor: theme.colors.textSecondary,
              drawerItemStyle: {
                borderRadius: theme.borderRadius.medium,
              },
              drawerStyle: {
                backgroundColor: theme.colors.drawerBackground,
                borderRightColor: theme.colors.border,
                borderRightWidth: 1,
              },
              headerStyle: {
                backgroundColor: theme.colors.surface,
              },
              headerTintColor: theme.colors.textPrimary,
              sceneStyle: {
                backgroundColor: theme.colors.background,
              },
            }}>
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: translations.navigation.home,
                title: translations.navigation.home,
              }}
            />
            <Drawer.Screen
              name="bosses"
              options={{
                drawerLabel: translations.navigation.bosses,
                title: translations.navigation.bosses,
              }}
            />
            <Drawer.Screen
              name="settings"
              options={{
                drawerLabel: translations.navigation.settings,
                title: translations.navigation.settings,
              }}
            />
            <Drawer.Screen
              name="regions/[regionId]"
              options={{
                drawerItemStyle: { display: 'none' },
                headerLeft: () => (
                  <DrawerToggleButton
                    tintColor={theme.colors.textPrimary}
                  />
                ),
                title: translations.navigation.bosses,
              }}
            />
          </Drawer>
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

import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

import { useApp } from '@/src/hooks/use-app';
import { CustomDrawerContent } from '@/src/navigation';

export default function DrawerLayout() {
  const { theme, translations } = useApp();

  return (
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
            <DrawerToggleButton tintColor={theme.colors.textPrimary} />
          ),
          title: translations.navigation.bosses,
        }}
      />
      <Drawer.Screen
        name="all-bosses/[contentPack]"
        options={{
          drawerItemStyle: { display: 'none' },
          headerLeft: () => (
            <DrawerToggleButton tintColor={theme.colors.textPrimary} />
          ),
          title: translations.navigation.bosses,
        }}
      />
    </Drawer>
  );
}

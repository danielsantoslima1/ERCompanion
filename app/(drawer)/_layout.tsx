import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

import { useApp } from '@/src/hooks/use-app';
import { CustomDrawerContent } from '@/src/navigation';
import { typography } from '@/src/theme/typography';

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
        drawerLabelStyle: {
          fontFamily: typography.bodySemibold,
        },
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
        headerTitleStyle: {
          fontFamily: typography.display,
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
        name="all-bosses/index"
        options={{
          drawerItemStyle: { display: 'none' },
          title: translations.allBosses.combinedTitle,
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
      <Drawer.Screen
        name="ashes-of-war/index"
        options={{
          drawerItemStyle: { display: 'none' },
          title: translations.ashesOfWar.allTitle,
        }}
      />
      <Drawer.Screen
        name="ashes-of-war/base-game"
        options={{
          drawerItemStyle: { display: 'none' },
          title: translations.ashesOfWar.baseGameTitle,
        }}
      />
      <Drawer.Screen
        name="ashes-of-war/shadow-of-the-erdtree"
        options={{
          drawerItemStyle: { display: 'none' },
          title: translations.ashesOfWar.expansionTitle,
        }}
      />
      <Drawer.Screen
        name="sorceries/index"
        options={{ drawerItemStyle: { display: 'none' }, title: translations.spells.allSorceries }}
      />
      <Drawer.Screen
        name="sorceries/base-game"
        options={{ drawerItemStyle: { display: 'none' }, title: translations.spells.sorceryBaseGameTitle }}
      />
      <Drawer.Screen
        name="sorceries/shadow-of-the-erdtree"
        options={{ drawerItemStyle: { display: 'none' }, title: translations.spells.sorceryExpansionTitle }}
      />
      <Drawer.Screen
        name="incantations/index"
        options={{ drawerItemStyle: { display: 'none' }, title: translations.spells.allIncantations }}
      />
      <Drawer.Screen
        name="incantations/base-game"
        options={{ drawerItemStyle: { display: 'none' }, title: translations.spells.incantationBaseGameTitle }}
      />
      <Drawer.Screen
        name="incantations/shadow-of-the-erdtree"
        options={{ drawerItemStyle: { display: 'none' }, title: translations.spells.incantationExpansionTitle }}
      />
    </Drawer>
  );
}

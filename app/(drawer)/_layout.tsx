import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

import { useApp } from '@/src/hooks/use-app';
import { IndexHeaderBackButton } from '@/src/components/index-header-back-button';
import { INDEX_LABELS } from '@/src/index/index-sections';
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
        drawerInactiveTintColor: theme.colors.navigationTextSecondary,
        drawerLabelStyle: {
          fontFamily: typography.bodySemibold,
        },
        drawerItemStyle: {
          borderRadius: theme.borderRadius.medium,
        },
        drawerStyle: {
          backgroundColor: theme.colors.drawerBackground,
          borderRightColor: theme.colors.borderStrong,
          borderRightWidth: 1,
        },
        headerStyle: {
          backgroundColor: theme.colors.navigationBackground,
        },
        headerTitleStyle: {
          fontFamily: typography.display,
        },
        headerTintColor: theme.colors.navigationText,
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
            <DrawerToggleButton tintColor={theme.colors.navigationText} />
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
            <DrawerToggleButton tintColor={theme.colors.navigationText} />
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
      <Drawer.Screen
        name="spirit-ashes/index"
        options={{ drawerItemStyle: { display: 'none' }, title: 'Spirit Ashes' }}
      />
      <Drawer.Screen
        name="spirit-ashes/base-game"
        options={{ drawerItemStyle: { display: 'none' }, title: 'Spirit Ashes — Base game' }}
      />
      <Drawer.Screen
        name="spirit-ashes/shadow-of-the-erdtree"
        options={{ drawerItemStyle: { display: 'none' }, title: 'Spirit Ashes — Shadow of the Erdtree' }}
      />
      <Drawer.Screen name="talismans/index" options={{ drawerItemStyle: { display: 'none' }, title: 'Talismans' }} />
      <Drawer.Screen name="talismans/base-game" options={{ drawerItemStyle: { display: 'none' }, title: 'Talismans — Base game' }} />
      <Drawer.Screen name="talismans/shadow-of-the-erdtree" options={{ drawerItemStyle: { display: 'none' }, title: 'Talismans — Shadow of the Erdtree' }} />
      <Drawer.Screen name="weapons/index" options={{ drawerItemStyle: { display: 'none' }, title: 'Weapons' }} />
      <Drawer.Screen name="weapons/all" options={{ drawerItemStyle: { display: 'none' }, title: 'All Weapons' }} />
      <Drawer.Screen name="weapons/base-game" options={{ drawerItemStyle: { display: 'none' }, title: 'Weapons — Base Game' }} />
      <Drawer.Screen name="weapons/shadow-of-the-erdtree" options={{ drawerItemStyle: { display: 'none' }, title: 'Weapons — Shadow of the Erdtree' }} />
      <Drawer.Screen
        name="index/remembrance-bosses/index"
        options={{
          drawerItemStyle: { display: 'none' },
          headerLeft: () => <IndexHeaderBackButton fallbackRoute="/" />,
          title: INDEX_LABELS.remembranceBosses,
        }}
      />
      <Drawer.Screen
        name="index/remembrance-bosses/base-game"
        options={{
          drawerItemStyle: { display: 'none' },
          headerLeft: () => (
            <IndexHeaderBackButton fallbackRoute="/remembrance-bosses" />
          ),
          title: `${INDEX_LABELS.remembranceBosses} — ${INDEX_LABELS.baseGame}`,
        }}
      />
      <Drawer.Screen
        name="index/remembrance-bosses/dlc"
        options={{
          drawerItemStyle: { display: 'none' },
          headerLeft: () => (
            <IndexHeaderBackButton fallbackRoute="/remembrance-bosses" />
          ),
          title: `${INDEX_LABELS.remembranceBosses} — ${INDEX_LABELS.dlc}`,
        }}
      />
    </Drawer>
  );
}

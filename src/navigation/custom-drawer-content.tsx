import {
  DrawerContentScrollView,
  type DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { regions, sortRegions } from '../data';
import { useApp } from '../hooks/use-app';
import { getLocalizedText } from '../i18n';

interface DrawerItemProps {
  label: string;
  isSelected: boolean;
  isNested?: boolean;
  onPress: () => void;
}

function DrawerItem({
  label,
  isSelected,
  isNested = false,
  onPress,
}: DrawerItemProps) {
  const { theme, translations } = useApp();

  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      accessibilityState={{ selected: isSelected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.item,
        {
          backgroundColor: isSelected
            ? theme.colors.drawerActiveBackground
            : 'transparent',
          borderColor: isSelected ? theme.colors.primary : 'transparent',
          borderRadius: theme.borderRadius.medium,
          marginLeft: isNested ? theme.spacing.large : 0,
          opacity: pressed ? 0.7 : 1,
          paddingHorizontal: theme.spacing.medium,
        },
      ]}>
      <Text
        numberOfLines={2}
        style={[
          styles.itemLabel,
          {
            color: isSelected
              ? theme.colors.drawerActiveText
              : theme.colors.textPrimary,
          },
        ]}>
        {label}
      </Text>
      {isSelected ? (
        <Text
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={[
            styles.selectedIndicator,
            { color: theme.colors.drawerActiveText },
          ]}>
          ✓
        </Text>
      ) : null}
      {isSelected ? (
        <Text style={styles.screenReaderText}>
          {translations.navigation.selected}
        </Text>
      ) : null}
    </Pressable>
  );
}

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const pathname = usePathname();
  const { language, theme, translations } = useApp();
  const isBossRoute =
    pathname === '/bosses' || pathname.startsWith('/regions/');
  const [isBossesExpanded, setIsBossesExpanded] = useState(isBossRoute);
  const orderedRegions = useMemo(
    () =>
      sortRegions(regions).map((region) => ({
        id: region.id,
        name: getLocalizedText(region.name, language),
      })),
    [language],
  );

  useEffect(() => {
    if (isBossRoute) {
      setIsBossesExpanded(true);
    }
  }, [isBossRoute, pathname]);

  const closeDrawer = useCallback(() => {
    props.navigation.closeDrawer();
  }, [props.navigation]);

  const navigateTo = useCallback(
    (destination: '/' | '/bosses' | '/settings') => {
      if (pathname !== destination) {
        router.navigate(destination);
      }
      closeDrawer();
    },
    [closeDrawer, pathname],
  );

  const navigateToRegion = useCallback(
    (regionId: string) => {
      const destination = `/regions/${regionId}`;

      if (pathname !== destination) {
        router.push({
          pathname: '/regions/[regionId]',
          params: { regionId },
        });
      }
      closeDrawer();
    },
    [closeDrawer, pathname],
  );

  const toggleBosses = useCallback(() => {
    setIsBossesExpanded((currentValue) => !currentValue);
  }, []);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollContent}
      style={{ backgroundColor: theme.colors.drawerBackground }}>
      <View
        style={[
          styles.header,
          {
            borderBottomColor: theme.colors.border,
            gap: theme.spacing.small,
            padding: theme.spacing.large,
          },
        ]}>
        <Text
          style={[styles.appName, { color: theme.colors.primary }]}>
          {translations.app.name}
        </Text>
        <Text
          style={[
            styles.appDescription,
            { color: theme.colors.textSecondary },
          ]}>
          {translations.navigation.drawerDescription}
        </Text>
      </View>

      <View
        style={[
          styles.menu,
          {
            gap: theme.spacing.small,
            padding: theme.spacing.medium,
          },
        ]}>
        <DrawerItem
          isSelected={pathname === '/'}
          label={translations.navigation.home}
          onPress={() => navigateTo('/')}
        />

        <Pressable
          accessibilityLabel={
            isBossesExpanded
              ? translations.navigation.collapseBosses
              : translations.navigation.expandBosses
          }
          accessibilityRole="button"
          accessibilityState={{
            expanded: isBossesExpanded,
            selected: isBossRoute,
          }}
          onPress={toggleBosses}
          style={({ pressed }) => [
            styles.item,
            {
              backgroundColor: isBossRoute
                ? theme.colors.drawerActiveBackground
                : 'transparent',
              borderColor: isBossRoute
                ? theme.colors.primary
                : 'transparent',
              borderRadius: theme.borderRadius.medium,
              opacity: pressed ? 0.7 : 1,
              paddingHorizontal: theme.spacing.medium,
            },
          ]}>
          <Text
            style={[
              styles.itemLabel,
              {
                color: isBossRoute
                  ? theme.colors.drawerActiveText
                  : theme.colors.textPrimary,
              },
            ]}>
            {translations.navigation.bosses}
          </Text>
          {isBossRoute ? (
            <Text
              style={[
                styles.internalRouteIndicator,
                { color: theme.colors.drawerActiveText },
              ]}>
              •
            </Text>
          ) : null}
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            style={[
              styles.expandIndicator,
              {
                color: isBossRoute
                  ? theme.colors.drawerActiveText
                  : theme.colors.textSecondary,
              },
            ]}>
            {isBossesExpanded ? '−' : '+'}
          </Text>
        </Pressable>

        {isBossesExpanded ? (
          <View style={{ gap: theme.spacing.small }}>
            <DrawerItem
              isNested
              isSelected={pathname === '/bosses'}
              label={translations.navigation.allRegions}
              onPress={() => navigateTo('/bosses')}
            />

            {orderedRegions.length === 0 ? (
              <Text
                style={[
                  styles.emptyMessage,
                  {
                    color: theme.colors.textSecondary,
                    marginLeft: theme.spacing.large,
                    paddingHorizontal: theme.spacing.medium,
                    paddingVertical: theme.spacing.small,
                  },
                ]}>
                {translations.navigation.noRegions}
              </Text>
            ) : (
              orderedRegions.map((region) => (
                <DrawerItem
                  key={region.id}
                  isNested
                  isSelected={pathname === `/regions/${region.id}`}
                  label={region.name}
                  onPress={() => navigateToRegion(region.id)}
                />
              ))
            )}
          </View>
        ) : null}

        <DrawerItem
          isSelected={pathname === '/settings'}
          label={translations.navigation.settings}
          onPress={() => navigateTo('/settings')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    borderBottomWidth: 1,
  },
  appName: {
    fontSize: 22,
    fontWeight: '700',
  },
  appDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  menu: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    borderLeftWidth: 3,
    flexDirection: 'row',
    minHeight: 48,
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  selectedIndicator: {
    fontSize: 16,
    fontWeight: '700',
  },
  internalRouteIndicator: {
    fontSize: 22,
    fontWeight: '700',
    marginRight: 8,
  },
  expandIndicator: {
    fontSize: 22,
    fontWeight: '600',
  },
  emptyMessage: {
    fontSize: 14,
    lineHeight: 20,
  },
  screenReaderText: {
    height: 1,
    opacity: 0,
    position: 'absolute',
    width: 1,
  },
});

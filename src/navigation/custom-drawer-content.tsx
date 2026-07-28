import {
  DrawerContentScrollView,
  type DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { usePathname } from 'expo-router';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import {
  bosses,
  findBossWithRegion,
  getRegionsByContentPack,
  regions,
  type ContentPack,
} from '../data';
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
    pathname.startsWith('/bosses/') ||
    pathname.startsWith('/regions/') ||
    pathname.startsWith('/all-bosses/');
  const [isBossesExpanded, setIsBossesExpanded] = useState(isBossRoute);
  const routeRegion = regions.find(
    (region) => pathname === `/regions/${region.id}`,
  );
  const detailBossId = pathname.startsWith('/bosses/')
    ? pathname.slice('/bosses/'.length)
    : '';
  const activeRegion =
    routeRegion ??
    findBossWithRegion(bosses, regions, detailBossId)?.region;
  const activeContentPack: ContentPack | undefined =
    activeRegion?.contentPack ??
    (pathname === '/all-bosses/base-game'
      ? 'base-game'
      : pathname === '/all-bosses/shadow-of-the-erdtree'
        ? 'shadow-of-the-erdtree'
        : undefined);
  const [isBaseGameExpanded, setIsBaseGameExpanded] = useState(
    activeContentPack === 'base-game',
  );
  const [isExpansionExpanded, setIsExpansionExpanded] = useState(
    activeContentPack === 'shadow-of-the-erdtree',
  );
  const regionGroups = useMemo(
    () => ({
      baseGame: getRegionsByContentPack(regions, 'base-game', language).map((region) => ({
        id: region.id,
        name: getLocalizedText(region.name, language),
      })),
      expansion: getRegionsByContentPack(
        regions,
        'shadow-of-the-erdtree',
        language,
      ).map((region) => ({
        id: region.id,
        name: getLocalizedText(region.name, language),
      })),
    }),
    [language],
  );

  useEffect(() => {
    if (isBossRoute) {
      setIsBossesExpanded(true);
      setIsBaseGameExpanded(activeContentPack === 'base-game');
      setIsExpansionExpanded(activeContentPack === 'shadow-of-the-erdtree');
    }
  }, [activeContentPack, isBossRoute, pathname]);

  const closeDrawer = useCallback(() => {
    props.navigation.closeDrawer();
  }, [props.navigation]);

  const navigateTo = useCallback(
    (
      routeName: 'index' | 'settings',
      destination: '/' | '/settings',
    ) => {
      setIsBossesExpanded(false);
      setIsBaseGameExpanded(false);
      setIsExpansionExpanded(false);
      if (pathname !== destination) {
        props.navigation.navigate(routeName);
      }
      closeDrawer();
    },
    [closeDrawer, pathname, props.navigation],
  );

  const navigateToRegion = useCallback(
    (regionId: string) => {
      const destination = `/regions/${regionId}`;
      const targetRegion = regions.find((region) => region.id === regionId);
      setIsBossesExpanded(true);
      setIsBaseGameExpanded(targetRegion?.contentPack === 'base-game');
      setIsExpansionExpanded(
        targetRegion?.contentPack === 'shadow-of-the-erdtree',
      );

      if (pathname !== destination) {
        props.navigation.navigate('regions/[regionId]', { regionId });
      }
      closeDrawer();
    },
    [closeDrawer, pathname, props.navigation],
  );

  const navigateToAllBosses = useCallback(
    (contentPack: ContentPack) => {
      const destination = `/all-bosses/${contentPack}`;
      setIsBossesExpanded(true);
      setIsBaseGameExpanded(contentPack === 'base-game');
      setIsExpansionExpanded(contentPack === 'shadow-of-the-erdtree');
      if (pathname !== destination) {
        props.navigation.navigate('all-bosses/[contentPack]', { contentPack });
      }
      closeDrawer();
    },
    [closeDrawer, pathname, props.navigation],
  );

  const toggleBosses = useCallback(() => {
    setIsBossesExpanded((currentValue) => {
      if (currentValue) {
        setIsBaseGameExpanded(false);
        setIsExpansionExpanded(false);
      }
      return !currentValue;
    });
  }, []);

  const toggleContentPack = useCallback((contentPack: ContentPack) => {
    if (contentPack === 'base-game') {
      setIsBaseGameExpanded((current) => !current);
      setIsExpansionExpanded(false);
    } else {
      setIsExpansionExpanded((current) => !current);
      setIsBaseGameExpanded(false);
    }
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
          onPress={() => navigateTo('index', '/')}
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
            {regionGroups.baseGame.length + regionGroups.expansion.length ===
            0 ? (
              <Text
                style={[
                  styles.emptyMessage,
                  { color: theme.colors.textSecondary },
                ]}>
                {translations.navigation.noRegions}
              </Text>
            ) : (
              <>
            <DrawerGroup
              expanded={isBaseGameExpanded}
              label={translations.common.baseGame}
              accessibilityLabel={
                isBaseGameExpanded
                  ? translations.navigation.collapseBaseGame
                  : translations.navigation.expandBaseGame
              }
              onToggle={() => toggleContentPack('base-game')}>
              <DrawerItem
                isNested
                isSelected={pathname === '/all-bosses/base-game'}
                label={translations.navigation.allBosses}
                onPress={() => navigateToAllBosses('base-game')}
              />
              {regionGroups.baseGame.map((region) => (
                <DrawerItem
                  key={region.id}
                  isNested
                  isSelected={pathname === `/regions/${region.id}`}
                  label={region.name}
                  onPress={() => navigateToRegion(region.id)}
                />
              ))}
            </DrawerGroup>
            <DrawerGroup
              expanded={isExpansionExpanded}
              label={translations.common.expansion}
              accessibilityLabel={
                isExpansionExpanded
                  ? translations.navigation.collapseExpansion
                  : translations.navigation.expandExpansion
              }
              onToggle={() => toggleContentPack('shadow-of-the-erdtree')}>
              <DrawerItem
                isNested
                isSelected={
                  pathname === '/all-bosses/shadow-of-the-erdtree'
                }
                label={translations.navigation.allBosses}
                onPress={() =>
                  navigateToAllBosses('shadow-of-the-erdtree')
                }
              />
              {regionGroups.expansion.map((region) => (
                <DrawerItem
                  key={region.id}
                  isNested
                  isSelected={pathname === `/regions/${region.id}`}
                  label={region.name}
                  onPress={() => navigateToRegion(region.id)}
                />
              ))}
            </DrawerGroup>
              </>
            )}
          </View>
        ) : null}

        <DrawerItem
          isSelected={pathname === '/settings'}
          label={translations.navigation.settings}
          onPress={() => navigateTo('settings', '/settings')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function DrawerGroup({
  accessibilityLabel,
  children,
  expanded,
  label,
  onToggle,
}: {
  accessibilityLabel: string;
  children: ReactNode;
  expanded: boolean;
  label: string;
  onToggle: () => void;
}) {
  const { theme } = useApp();
  return (
    <View style={{ gap: theme.spacing.small }}>
      <Pressable
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        onPress={onToggle}
        style={[styles.group, { marginLeft: theme.spacing.large }]}>
        <Text style={[styles.itemLabel, { color: theme.colors.textPrimary }]}>
          {label}
        </Text>
        <Text style={{ color: theme.colors.textSecondary }}>
          {expanded ? '−' : '+'}
        </Text>
      </Pressable>
      {expanded ? children : null}
    </View>
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
  group: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 44,
    paddingHorizontal: 12,
  },
  screenReaderText: {
    height: 1,
    opacity: 0,
    position: 'absolute',
    width: 1,
  },
});

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
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

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
    pathname === '/all-bosses' ||
    pathname.startsWith('/all-bosses/');
  const isAshRoute =
    pathname === '/ashes-of-war' ||
    pathname.startsWith('/ashes-of-war/');
  const isSorceryRoute =
    pathname === '/sorceries' || pathname.startsWith('/sorceries/');
  const isIncantationRoute =
    pathname === '/incantations' || pathname.startsWith('/incantations/');
  const [isBossesExpanded, setIsBossesExpanded] = useState(isBossRoute);
  const [isAshesExpanded, setIsAshesExpanded] = useState(isAshRoute);
  const [isSorceriesExpanded, setIsSorceriesExpanded] = useState(isSorceryRoute);
  const [isIncantationsExpanded, setIsIncantationsExpanded] = useState(isIncantationRoute);
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
      setIsAshesExpanded(false);
      setIsSorceriesExpanded(false);
      setIsIncantationsExpanded(false);
      setIsBaseGameExpanded(activeContentPack === 'base-game');
      setIsExpansionExpanded(activeContentPack === 'shadow-of-the-erdtree');
    } else if (isAshRoute) {
      setIsAshesExpanded(true);
      setIsBossesExpanded(false);
      setIsSorceriesExpanded(false);
      setIsIncantationsExpanded(false);
      setIsBaseGameExpanded(false);
      setIsExpansionExpanded(false);
    } else if (isSorceryRoute) {
      setIsSorceriesExpanded(true);
      setIsBossesExpanded(false);
      setIsAshesExpanded(false);
      setIsIncantationsExpanded(false);
      setIsBaseGameExpanded(false);
      setIsExpansionExpanded(false);
    } else if (isIncantationRoute) {
      setIsIncantationsExpanded(true);
      setIsBossesExpanded(false);
      setIsAshesExpanded(false);
      setIsSorceriesExpanded(false);
      setIsBaseGameExpanded(false);
      setIsExpansionExpanded(false);
    } else if (pathname === '/' || pathname === '/settings') {
      setIsBossesExpanded(false);
      setIsAshesExpanded(false);
      setIsSorceriesExpanded(false);
      setIsIncantationsExpanded(false);
      setIsBaseGameExpanded(false);
      setIsExpansionExpanded(false);
    }
  }, [activeContentPack, isAshRoute, isBossRoute, isIncantationRoute, isSorceryRoute, pathname]);

  const closeDrawer = useCallback(() => {
    props.navigation.closeDrawer();
  }, [props.navigation]);

  const navigateTo = useCallback(
    (
      routeName: 'index' | 'settings',
      destination: '/' | '/settings',
    ) => {
      setIsBossesExpanded(false);
      setIsAshesExpanded(false);
      setIsSorceriesExpanded(false);
      setIsIncantationsExpanded(false);
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
      setIsAshesExpanded(false);
      setIsSorceriesExpanded(false);
      setIsIncantationsExpanded(false);
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
      setIsAshesExpanded(false);
      setIsSorceriesExpanded(false);
      setIsIncantationsExpanded(false);
      setIsBaseGameExpanded(contentPack === 'base-game');
      setIsExpansionExpanded(contentPack === 'shadow-of-the-erdtree');
      if (pathname !== destination) {
        props.navigation.navigate('all-bosses/[contentPack]', { contentPack });
      }
      closeDrawer();
    },
    [closeDrawer, pathname, props.navigation],
  );

  const navigateToCombinedBosses = useCallback(() => {
    setIsBossesExpanded(true);
    setIsAshesExpanded(false);
    setIsBaseGameExpanded(false);
    setIsExpansionExpanded(false);
    if (pathname !== '/all-bosses') {
      props.navigation.navigate('all-bosses/index');
    }
    closeDrawer();
  }, [closeDrawer, pathname, props.navigation]);

  const navigateToAshes = useCallback(
    (
      routeName:
        | 'ashes-of-war/index'
        | 'ashes-of-war/base-game'
        | 'ashes-of-war/shadow-of-the-erdtree',
      destination:
        | '/ashes-of-war'
        | '/ashes-of-war/base-game'
        | '/ashes-of-war/shadow-of-the-erdtree',
    ) => {
      setIsAshesExpanded(true);
      setIsBossesExpanded(false);
      setIsSorceriesExpanded(false);
      setIsIncantationsExpanded(false);
      setIsBaseGameExpanded(false);
      setIsExpansionExpanded(false);
      if (pathname !== destination) {
        props.navigation.navigate(routeName);
      }
      closeDrawer();
    },
    [closeDrawer, pathname, props.navigation],
  );

  const toggleBosses = useCallback(() => {
    setIsAshesExpanded(false);
    setIsSorceriesExpanded(false);
    setIsIncantationsExpanded(false);
    setIsBossesExpanded((currentValue) => {
      if (currentValue) {
        setIsBaseGameExpanded(false);
        setIsExpansionExpanded(false);
      }
      return !currentValue;
    });
  }, []);

  const toggleAshes = useCallback(() => {
    setIsBossesExpanded(false);
    setIsBaseGameExpanded(false);
    setIsExpansionExpanded(false);
    setIsSorceriesExpanded(false);
    setIsIncantationsExpanded(false);
    setIsAshesExpanded((currentValue) => !currentValue);
  }, []);

  const navigateToSpellGroup = useCallback(
    (
      category: 'sorceries' | 'incantations',
      segment: 'index' | 'base-game' | 'shadow-of-the-erdtree',
    ) => {
      const destination = segment === 'index'
        ? `/${category}`
        : `/${category}/${segment}`;
      setIsBossesExpanded(false);
      setIsAshesExpanded(false);
      setIsSorceriesExpanded(category === 'sorceries');
      setIsIncantationsExpanded(category === 'incantations');
      setIsBaseGameExpanded(false);
      setIsExpansionExpanded(false);
      if (pathname !== destination) {
        props.navigation.navigate(`${category}/${segment}`);
      }
      closeDrawer();
    },
    [closeDrawer, pathname, props.navigation],
  );

  const toggleSorceries = useCallback(() => {
    setIsBossesExpanded(false);
    setIsAshesExpanded(false);
    setIsIncantationsExpanded(false);
    setIsBaseGameExpanded(false);
    setIsExpansionExpanded(false);
    setIsSorceriesExpanded((current) => !current);
  }, []);

  const toggleIncantations = useCallback(() => {
    setIsBossesExpanded(false);
    setIsAshesExpanded(false);
    setIsSorceriesExpanded(false);
    setIsBaseGameExpanded(false);
    setIsExpansionExpanded(false);
    setIsIncantationsExpanded((current) => !current);
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
          variant="displayBold"
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
            <DrawerItem
              isNested
              isSelected={pathname === '/all-bosses'}
              label={translations.navigation.allBosses}
              onPress={navigateToCombinedBosses}
            />
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

        <Pressable
          accessibilityLabel={
            isAshesExpanded
              ? translations.navigation.collapseAshesOfWar
              : translations.navigation.expandAshesOfWar
          }
          accessibilityRole="button"
          accessibilityState={{
            expanded: isAshesExpanded,
            selected: isAshRoute,
          }}
          onPress={toggleAshes}
          style={({ pressed }) => [
            styles.item,
            {
              backgroundColor: isAshRoute
                ? theme.colors.drawerActiveBackground
                : 'transparent',
              borderColor: isAshRoute
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
                color: isAshRoute
                  ? theme.colors.drawerActiveText
                  : theme.colors.textPrimary,
              },
            ]}>
            {translations.navigation.ashesOfWar}
          </Text>
          {isAshRoute ? (
            <Text
              accessibilityElementsHidden
              importantForAccessibility="no-hide-descendants"
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
                color: isAshRoute
                  ? theme.colors.drawerActiveText
                  : theme.colors.textSecondary,
              },
            ]}>
            {isAshesExpanded ? '−' : '+'}
          </Text>
        </Pressable>

        {isAshesExpanded ? (
          <View style={{ gap: theme.spacing.small }}>
            <DrawerItem
              isNested
              isSelected={pathname === '/ashes-of-war'}
              label={translations.navigation.allAshesOfWar}
              onPress={() =>
                navigateToAshes('ashes-of-war/index', '/ashes-of-war')
              }
            />
            <DrawerItem
              isNested
              isSelected={pathname === '/ashes-of-war/base-game'}
              label={translations.common.baseGame}
              onPress={() =>
                navigateToAshes(
                  'ashes-of-war/base-game',
                  '/ashes-of-war/base-game',
                )
              }
            />
            <DrawerItem
              isNested
              isSelected={
                pathname === '/ashes-of-war/shadow-of-the-erdtree'
              }
              label={translations.common.expansion}
              onPress={() =>
                navigateToAshes(
                  'ashes-of-war/shadow-of-the-erdtree',
                  '/ashes-of-war/shadow-of-the-erdtree',
                )
              }
            />
          </View>
        ) : null}

        <DirectRouteGroup
          active={isSorceryRoute}
          expanded={isSorceriesExpanded}
          expandLabel={
            isSorceriesExpanded
              ? translations.navigation.collapseSorceries
              : translations.navigation.expandSorceries
          }
          label={translations.navigation.sorceries}
          onToggle={toggleSorceries}>
          <DrawerItem
            isNested
            isSelected={pathname === '/sorceries'}
            label={translations.navigation.allSorceries}
            onPress={() => navigateToSpellGroup('sorceries', 'index')}
          />
          <DrawerItem
            isNested
            isSelected={pathname === '/sorceries/base-game'}
            label={translations.common.baseGame}
            onPress={() => navigateToSpellGroup('sorceries', 'base-game')}
          />
          <DrawerItem
            isNested
            isSelected={pathname === '/sorceries/shadow-of-the-erdtree'}
            label={translations.common.expansion}
            onPress={() => navigateToSpellGroup('sorceries', 'shadow-of-the-erdtree')}
          />
        </DirectRouteGroup>

        <DirectRouteGroup
          active={isIncantationRoute}
          expanded={isIncantationsExpanded}
          expandLabel={
            isIncantationsExpanded
              ? translations.navigation.collapseIncantations
              : translations.navigation.expandIncantations
          }
          label={translations.navigation.incantations}
          onToggle={toggleIncantations}>
          <DrawerItem
            isNested
            isSelected={pathname === '/incantations'}
            label={translations.navigation.allIncantations}
            onPress={() => navigateToSpellGroup('incantations', 'index')}
          />
          <DrawerItem
            isNested
            isSelected={pathname === '/incantations/base-game'}
            label={translations.common.baseGame}
            onPress={() => navigateToSpellGroup('incantations', 'base-game')}
          />
          <DrawerItem
            isNested
            isSelected={pathname === '/incantations/shadow-of-the-erdtree'}
            label={translations.common.expansion}
            onPress={() => navigateToSpellGroup('incantations', 'shadow-of-the-erdtree')}
          />
        </DirectRouteGroup>

        <DrawerItem
          isSelected={pathname === '/settings'}
          label={translations.navigation.settings}
          onPress={() => navigateTo('settings', '/settings')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function DirectRouteGroup({
  active,
  children,
  expanded,
  expandLabel,
  label,
  onToggle,
}: {
  readonly active: boolean;
  readonly children: ReactNode;
  readonly expanded: boolean;
  readonly expandLabel: string;
  readonly label: string;
  readonly onToggle: () => void;
}) {
  const { theme } = useApp();
  return (
    <>
      <Pressable
        accessibilityLabel={expandLabel}
        accessibilityRole="button"
        accessibilityState={{ expanded, selected: active }}
        onPress={onToggle}
        style={[
          styles.item,
          {
            backgroundColor: active ? theme.colors.drawerActiveBackground : 'transparent',
            borderColor: active ? theme.colors.primary : 'transparent',
            borderRadius: theme.borderRadius.medium,
            paddingHorizontal: theme.spacing.medium,
          },
        ]}>
        <Text style={[styles.itemLabel, { color: active ? theme.colors.drawerActiveText : theme.colors.textPrimary }]}>
          {label}
        </Text>
        <Text
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={[styles.expandIndicator, { color: active ? theme.colors.drawerActiveText : theme.colors.textSecondary }]}>
          {expanded ? '−' : '+'}
        </Text>
      </Pressable>
      {expanded ? <View style={{ gap: theme.spacing.small }}>{children}</View> : null}
    </>
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

import { Drawer } from 'expo-router/drawer';
import { router, useLocalSearchParams } from 'expo-router';
import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type ListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BossCard } from '@/src/components/boss-card';
import { RegionProgressItem } from '@/src/components/region-progress-item';
import {
  bosses,
  calculateRegionProgress,
  combineBossesWithProgress,
  findRegionById,
  getBossesByRegion,
  regions,
  type BossEncounterWithProgress,
} from '@/src/data';
import { useApp } from '@/src/hooks/use-app';
import { getLocalizedText } from '@/src/i18n';

type BossFilter = 'all' | 'defeated' | 'not-defeated';

interface LocalizedBoss extends BossEncounterWithProgress {
  localizedName: string;
  localizedLocation: string;
}

function getRegionId(parameter: string | string[] | undefined): string {
  return Array.isArray(parameter) ? (parameter[0] ?? '') : (parameter ?? '');
}

export default function RegionScreen() {
  const { regionId: regionIdParameter } = useLocalSearchParams<{
    regionId?: string | string[];
  }>();
  const {
    defeatedBossIds,
    language,
    theme,
    translations,
  } = useApp();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<BossFilter>('all');
  const regionId = getRegionId(regionIdParameter);
  const region = useMemo(
    () => findRegionById(regions, regionId),
    [regionId],
  );
  const regionName = region
    ? getLocalizedText(region.name, language)
    : translations.region.notFoundTitle;
  const defeatedBossIdSet = useMemo(
    () => new Set(defeatedBossIds),
    [defeatedBossIds],
  );
  const regionBosses = useMemo(
    () => getBossesByRegion(bosses, regionId),
    [regionId],
  );
  const progress = useMemo(
    () =>
      calculateRegionProgress(
        bosses,
        regionId,
        defeatedBossIdSet,
      ),
    [defeatedBossIdSet, regionId],
  );
  const localizedBosses = useMemo<LocalizedBoss[]>(
    () =>
      combineBossesWithProgress(
        regionBosses,
        defeatedBossIdSet,
      ).map((boss) => ({
        ...boss,
        localizedName: getLocalizedText(boss.name, language),
        localizedLocation: getLocalizedText(boss.location, language),
      })),
    [defeatedBossIdSet, language, regionBosses],
  );
  const visibleBosses = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language);

    return localizedBosses.filter((boss) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'defeated' && boss.isDefeated) ||
        (filter === 'not-defeated' && !boss.isDefeated);

      if (!matchesFilter || normalizedQuery.length === 0) {
        return matchesFilter;
      }

      return (
        boss.localizedName.toLocaleLowerCase(language).includes(normalizedQuery) ||
        boss.localizedLocation
          .toLocaleLowerCase(language)
          .includes(normalizedQuery)
      );
    });
  }, [filter, language, localizedBosses, query]);

  const renderBoss = useCallback<ListRenderItem<LocalizedBoss>>(
    ({ item }) => (
      <BossCard
        id={item.id}
        isDefeated={item.isDefeated}
        location={item.localizedLocation}
        name={item.localizedName}
      />
    ),
    [],
  );
  const keyExtractor = useCallback((item: LocalizedBoss) => item.id, []);

  if (!region) {
    return (
      <>
        <Drawer.Screen
          options={{ title: translations.region.notFoundTitle }}
        />
        <SafeAreaView
          edges={['left', 'right', 'bottom']}
          style={[
            styles.notFound,
            {
              backgroundColor: theme.colors.background,
              gap: theme.spacing.medium,
              padding: theme.spacing.large,
            },
          ]}>
          <Text
            accessibilityRole="header"
            style={[styles.title, { color: theme.colors.textPrimary }]}>
            {translations.region.notFoundTitle}
          </Text>
          <Text
            style={[
              styles.description,
              { color: theme.colors.textSecondary },
            ]}>
            {translations.region.notFoundMessage}
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.backButton,
              {
                backgroundColor: theme.colors.primary,
                borderRadius: theme.borderRadius.medium,
                opacity: pressed ? 0.7 : 1,
                padding: theme.spacing.medium,
              },
            ]}>
            <Text
              style={[
                styles.buttonText,
                { color: theme.colors.primaryContrast },
              ]}>
              {translations.region.back}
            </Text>
          </Pressable>
        </SafeAreaView>
      </>
    );
  }

  const filters: readonly {
    id: BossFilter;
    label: string;
  }[] = [
    { id: 'all', label: translations.region.all },
    { id: 'defeated', label: translations.region.defeated },
    { id: 'not-defeated', label: translations.region.notDefeated },
  ];

  const listHeader = (
    <View style={{ gap: theme.spacing.large }}>
      <View style={{ gap: theme.spacing.small }}>
        <Text
          accessibilityRole="header"
          style={[styles.title, { color: theme.colors.textPrimary }]}>
          {regionName}
        </Text>
        <Text
          style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>
          {translations.region.progress}
        </Text>
        <RegionProgressItem
          defeated={progress.defeated}
          percentage={progress.percentage}
          regionName={regionName}
          total={progress.total}
        />
      </View>

      <View style={{ gap: theme.spacing.small }}>
        <Text
          nativeID="boss-search-label"
          style={[styles.inputLabel, { color: theme.colors.textPrimary }]}>
          {translations.region.search}
        </Text>
        <TextInput
          accessibilityLabelledBy="boss-search-label"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setQuery}
          placeholder={translations.region.searchPlaceholder}
          placeholderTextColor={theme.colors.disabled}
          returnKeyType="search"
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
              borderRadius: theme.borderRadius.medium,
              color: theme.colors.textPrimary,
              paddingHorizontal: theme.spacing.medium,
            },
          ]}
          value={query}
        />
      </View>

      <View
        accessibilityRole="radiogroup"
        style={[styles.filters, { gap: theme.spacing.small }]}>
        {filters.map((option) => {
          const isActive = option.id === filter;

          return (
            <Pressable
              key={option.id}
              accessibilityRole="radio"
              accessibilityState={{ checked: isActive }}
              onPress={() => setFilter(option.id)}
              style={({ pressed }) => [
                styles.filter,
                {
                  backgroundColor: isActive
                    ? theme.colors.drawerActiveBackground
                    : theme.colors.surface,
                  borderColor: isActive
                    ? theme.colors.primary
                    : theme.colors.border,
                  borderRadius: theme.borderRadius.round,
                  opacity: pressed ? 0.7 : 1,
                  paddingHorizontal: theme.spacing.medium,
                  paddingVertical: theme.spacing.small,
                },
              ]}>
              <Text
                style={[
                  styles.filterText,
                  {
                    color: isActive
                      ? theme.colors.drawerActiveText
                      : theme.colors.textPrimary,
                  },
                ]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text
        accessibilityLiveRegion="polite"
        style={[styles.resultCount, { color: theme.colors.textSecondary }]}>
        {translations.region.resultCount(visibleBosses.length)}
      </Text>
    </View>
  );

  const emptyList = (
    <Text
      style={[
        styles.emptyMessage,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: theme.borderRadius.medium,
          color: theme.colors.textSecondary,
          marginTop: theme.spacing.medium,
          padding: theme.spacing.medium,
        },
      ]}>
      {translations.region.noBossesFound}
    </Text>
  );

  return (
    <>
      <Drawer.Screen options={{ title: regionName }} />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={[
          styles.safeArea,
          { backgroundColor: theme.colors.background },
        ]}>
        <FlatList
          contentContainerStyle={[
            styles.listContent,
            {
              gap: theme.spacing.medium,
              padding: theme.spacing.large,
              paddingBottom: theme.spacing.extraLarge,
            },
          ]}
          data={visibleBosses}
          keyboardShouldPersistTaps="handled"
          keyExtractor={keyExtractor}
          ListEmptyComponent={emptyList}
          ListHeaderComponent={listHeader}
          renderItem={renderBoss}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  description: {
    fontSize: 17,
    lineHeight: 25,
  },
  sectionLabel: {
    fontSize: 15,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    fontSize: 16,
    minHeight: 48,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filter: {
    borderWidth: 1,
    minHeight: 44,
    justifyContent: 'center',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '700',
  },
  resultCount: {
    fontSize: 14,
  },
  emptyMessage: {
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 23,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    alignItems: 'center',
    minHeight: 48,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

import { Drawer } from 'expo-router/drawer';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  type ListRenderItem,
} from 'react-native';
import { AppText as Text } from '@/src/components/app-text';
import { AppTextInput as TextInput } from '@/src/components/app-text-input';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BossCard } from '@/src/components/boss-card';
import { RegionProgressItem } from '@/src/components/region-progress-item';
import {
  bosses,
  calculateContentPackProgress,
  combineBossesWithProgress,
  getBossesByContentPack,
  isContentPack,
  regions,
  searchAndFilterBossesByContentPack,
  type BossEncounterWithProgress,
  type BossFilter,
  type ContentPack,
} from '@/src/data';
import { useApp } from '@/src/hooks/use-app';
import { getLocalizedText } from '@/src/i18n';

interface LocalizedBoss extends BossEncounterWithProgress {
  readonly localizedName: string;
  readonly localizedRegion: string;
  readonly localizedLocation: string;
}

function getParameter(parameter: string | string[] | undefined): string {
  return Array.isArray(parameter) ? (parameter[0] ?? '') : (parameter ?? '');
}

export default function AllBossesScreen() {
  const { contentPack: parameter } = useLocalSearchParams<{
    contentPack?: string | string[];
  }>();
  const { defeatedBossIds, language, theme, translations } = useApp();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<BossFilter>('all');
  const rawContentPack = getParameter(parameter);
  const contentPack: ContentPack | undefined = isContentPack(rawContentPack)
    ? rawContentPack
    : undefined;
  const title =
    contentPack === 'base-game'
      ? translations.allBosses.baseGameTitle
      : contentPack === 'shadow-of-the-erdtree'
        ? translations.allBosses.expansionTitle
        : translations.allBosses.invalidTitle;
  const defeatedBossIdSet = useMemo(
    () => new Set(defeatedBossIds),
    [defeatedBossIds],
  );
  const contentBosses = useMemo(
    () =>
      contentPack
        ? getBossesByContentPack(bosses, regions, contentPack)
        : [],
    [contentPack],
  );
  const progress = useMemo(
    () =>
      contentPack
        ? calculateContentPackProgress(
            bosses,
            regions,
            contentPack,
            defeatedBossIdSet,
          )
        : { defeated: 0, total: 0, percentage: 0 },
    [contentPack, defeatedBossIdSet],
  );
  const visibleBosses = useMemo<LocalizedBoss[]>(() => {
    const regionById = new Map(regions.map((region) => [region.id, region]));
    return searchAndFilterBossesByContentPack(
      combineBossesWithProgress(contentBosses, defeatedBossIdSet),
      regions,
      query,
      filter,
      language,
    ).flatMap((boss) => {
      const region = regionById.get(boss.regionId);
      return region
        ? [{
            ...boss,
            localizedName: getLocalizedText(boss.name, language),
            localizedLocation: getLocalizedText(boss.location, language),
            localizedRegion: getLocalizedText(region.name, language),
          }]
        : [];
    });
  }, [contentBosses, defeatedBossIdSet, filter, language, query]);

  const renderBoss = useCallback<ListRenderItem<LocalizedBoss>>(
    ({ item }) => (
      <BossCard
        id={item.id}
        isDefeated={item.isDefeated}
        location={item.localizedLocation}
        name={item.localizedName}
        regionName={item.localizedRegion}
        onViewDetails={() =>
          router.push({
            pathname: '/bosses/[bossId]',
            params: { bossId: item.id },
          })
        }
      />
    ),
    [],
  );

  if (!contentPack) {
    return (
      <>
        <Drawer.Screen options={{ title }} />
        <SafeAreaView
          edges={['left', 'right', 'bottom']}
          style={[
            styles.centered,
            {
              backgroundColor: theme.colors.background,
              gap: theme.spacing.medium,
              padding: theme.spacing.large,
            },
          ]}>
          <Text variant="display" accessibilityRole="header" style={[styles.title, { color: theme.colors.textPrimary }]}>
            {translations.allBosses.invalidTitle}
          </Text>
          <Text style={{ color: theme.colors.textSecondary }}>
            {translations.allBosses.invalidMessage}
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
            <Text style={{ color: theme.colors.primaryContrast, fontWeight: '700' }}>
              {translations.region.back}
            </Text>
          </Pressable>
        </SafeAreaView>
      </>
    );
  }

  const filters: readonly { id: BossFilter; label: string }[] = [
    { id: 'all', label: translations.region.all },
    { id: 'defeated', label: translations.region.defeated },
    { id: 'not-defeated', label: translations.region.notDefeated },
  ];

  return (
    <>
      <Drawer.Screen options={{ title }} />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
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
          keyExtractor={(item) => item.id}
          renderItem={renderBoss}
          ListEmptyComponent={
            <Text
              style={[
                styles.empty,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                  color: theme.colors.textSecondary,
                  padding: theme.spacing.medium,
                },
              ]}>
              {translations.region.noBossesFound}
            </Text>
          }
          ListHeaderComponent={
            <View style={{ gap: theme.spacing.large }}>
              <Text variant="display" accessibilityRole="header" style={[styles.title, { color: theme.colors.textPrimary }]}>
                {title}
              </Text>
              <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>
                {contentPack === 'base-game'
                  ? translations.allBosses.baseGameProgress
                  : translations.allBosses.expansionProgress}
              </Text>
              <RegionProgressItem
                defeated={progress.defeated}
                percentage={progress.percentage}
                total={progress.total}
              />
              <TextInput
                accessibilityLabel={translations.region.search}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setQuery}
                placeholder={translations.region.searchPlaceholder}
                placeholderTextColor={theme.colors.disabled}
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
              <View accessibilityRole="radiogroup" style={[styles.filters, { gap: theme.spacing.small }]}>
                {filters.map((option) => {
                  const active = option.id === filter;
                  return (
                    <Pressable
                      key={option.id}
                      accessibilityRole="radio"
                      accessibilityState={{ checked: active }}
                      onPress={() => setFilter(option.id)}
                      style={({ pressed }) => [
                        styles.filter,
                        {
                          backgroundColor: active
                            ? theme.colors.drawerActiveBackground
                            : theme.colors.surface,
                          borderColor: active ? theme.colors.primary : theme.colors.border,
                          borderRadius: theme.borderRadius.round,
                          opacity: pressed ? 0.7 : 1,
                          paddingHorizontal: theme.spacing.medium,
                          paddingVertical: theme.spacing.small,
                        },
                      ]}>
                      <Text style={{ color: active ? theme.colors.drawerActiveText : theme.colors.textPrimary, fontWeight: '700' }}>
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
              <Text accessibilityLiveRegion="polite" style={{ color: theme.colors.textSecondary }}>
                {translations.region.resultCount(visibleBosses.length)}
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  centered: { flex: 1, justifyContent: 'center' },
  listContent: { flexGrow: 1 },
  title: { fontSize: 30, fontWeight: '700' },
  sectionTitle: { fontSize: 20, fontWeight: '700' },
  input: { borderWidth: 1, fontSize: 16, minHeight: 48 },
  filters: { flexDirection: 'row', flexWrap: 'wrap' },
  filter: { borderWidth: 1, justifyContent: 'center', minHeight: 44 },
  empty: { borderWidth: 1, fontSize: 16 },
  backButton: { alignItems: 'center', minHeight: 48 },
});

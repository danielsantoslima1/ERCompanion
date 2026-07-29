import { Drawer } from 'expo-router/drawer';
import { router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import {
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
  type SectionListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BossCard } from '@/src/components/boss-card';
import { RegionProgressItem } from '@/src/components/region-progress-item';
import {
  bosses,
  combineBossesWithProgress,
  getBossesByContentPack,
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

interface BossSection {
  readonly contentPack: ContentPack;
  readonly title: string;
  readonly data: readonly LocalizedBoss[];
}

export default function CombinedAllBossesScreen() {
  const {
    bossProgress,
    defeatedBossIds,
    language,
    theme,
    translations,
  } = useApp();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<BossFilter>('all');
  const defeatedBossIdSet = useMemo(
    () => new Set(defeatedBossIds),
    [defeatedBossIds],
  );
  const regionById = useMemo(
    () => new Map(regions.map((region) => [region.id, region])),
    [],
  );

  const sections = useMemo<BossSection[]>(() => {
    const createSection = (
      contentPack: ContentPack,
      title: string,
    ): BossSection => {
      const contentBosses = getBossesByContentPack(
        bosses,
        regions,
        contentPack,
      );
      const data = searchAndFilterBossesByContentPack(
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
      return { contentPack, title, data };
    };

    return [
      createSection('base-game', translations.common.baseGame),
      createSection(
        'shadow-of-the-erdtree',
        translations.common.expansion,
      ),
    ].filter((section) => section.data.length > 0);
  }, [
    defeatedBossIdSet,
    filter,
    language,
    query,
    regionById,
    translations.common.baseGame,
    translations.common.expansion,
  ]);

  const visibleCount = useMemo(
    () => sections.reduce((total, section) => total + section.data.length, 0),
    [sections],
  );
  const filters: readonly { id: BossFilter; label: string }[] = [
    { id: 'all', label: translations.region.all },
    { id: 'defeated', label: translations.region.defeated },
    { id: 'not-defeated', label: translations.region.notDefeated },
  ];

  const renderBoss = useCallback<SectionListRenderItem<LocalizedBoss, BossSection>>(
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

  return (
    <>
      <Drawer.Screen options={{ title: translations.allBosses.combinedTitle }} />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
        <SectionList
          contentContainerStyle={[
            styles.listContent,
            {
              gap: theme.spacing.medium,
              padding: theme.spacing.large,
              paddingBottom: theme.spacing.extraLarge,
            },
          ]}
          keyboardShouldPersistTaps="handled"
          initialNumToRender={208}
          keyExtractor={(item) => item.id}
          renderItem={renderBoss}
          renderSectionHeader={({ section }) => (
            <Text
              accessibilityRole="header"
              style={[
                styles.sectionTitle,
                {
                  backgroundColor: theme.colors.background,
                  color: theme.colors.textPrimary,
                  paddingVertical: theme.spacing.small,
                },
              ]}
              testID={`boss-section-${section.contentPack}`}>
              {section.title}
            </Text>
          )}
          sections={sections}
          stickySectionHeadersEnabled={false}
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
              <Text
                accessibilityRole="header"
                style={[styles.title, { color: theme.colors.textPrimary }]}>
                {translations.allBosses.combinedTitle}
              </Text>
              <Text
                style={[
                  styles.progressTitle,
                  { color: theme.colors.textPrimary },
                ]}>
                {translations.allBosses.combinedProgress}
              </Text>
              <RegionProgressItem
                defeated={bossProgress.completed}
                percentage={bossProgress.percentage}
                total={bossProgress.total}
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
              <View
                accessibilityRole="radiogroup"
                style={[styles.filters, { gap: theme.spacing.small }]}>
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
                          borderColor: active
                            ? theme.colors.primary
                            : theme.colors.border,
                          borderRadius: theme.borderRadius.round,
                          opacity: pressed ? 0.7 : 1,
                          paddingHorizontal: theme.spacing.medium,
                          paddingVertical: theme.spacing.small,
                        },
                      ]}>
                      <Text
                        style={{
                          color: active
                            ? theme.colors.drawerActiveText
                            : theme.colors.textPrimary,
                          fontWeight: '700',
                        }}>
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
              <Text
                accessibilityLiveRegion="polite"
                style={{ color: theme.colors.textSecondary }}>
                {translations.region.resultCount(visibleCount)}
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
  listContent: { flexGrow: 1 },
  title: { fontSize: 30, fontWeight: '700' },
  progressTitle: { fontSize: 20, fontWeight: '700' },
  sectionTitle: { fontSize: 20, fontWeight: '700' },
  input: { borderWidth: 1, fontSize: 16, minHeight: 48 },
  filters: { flexDirection: 'row', flexWrap: 'wrap' },
  filter: { borderWidth: 1, justifyContent: 'center', minHeight: 44 },
  empty: { borderWidth: 1, fontSize: 16 },
});

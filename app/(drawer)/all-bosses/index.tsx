import { Drawer } from 'expo-router/drawer';
import { router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import {
  Pressable,
  SectionList,
  StyleSheet,
  View,
  type SectionListRenderItem,
} from 'react-native';
import { AppText as Text } from '@/src/components/app-text';
import { AppTextInput as TextInput } from '@/src/components/app-text-input';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BossCard } from '@/src/components/boss-card';
import { FilterButtonGroup } from '@/src/components/filter-button-group';
import {
  OriginFilterButtons,
  type OriginFilter,
} from '@/src/components/origin-filter-buttons';
import { RegionProgressItem } from '@/src/components/region-progress-item';
import {
  bosses,
  calculateBossCatalogProgressByContentPack,
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
  const [originFilter, setOriginFilter] = useState<OriginFilter>('all');
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
    ].filter(
      (section) =>
        (originFilter === 'all' || section.contentPack === originFilter) &&
        section.data.length > 0,
    );
  }, [
    defeatedBossIdSet,
    filter,
    language,
    originFilter,
    query,
    regionById,
    translations.common.baseGame,
    translations.common.expansion,
  ]);

  const visibleCount = useMemo(
    () => sections.reduce((total, section) => total + section.data.length, 0),
    [sections],
  );
  const progress = useMemo(
    () =>
      originFilter === 'all'
        ? bossProgress
        : calculateBossCatalogProgressByContentPack(
            defeatedBossIds,
            originFilter,
          ),
    [bossProgress, defeatedBossIds, originFilter],
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
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          initialNumToRender={208}
          keyExtractor={(item) => item.id}
          renderItem={renderBoss}
          renderSectionHeader={({ section }) => (
            <Text variant="display"
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
              <Text variant="display"
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
                defeated={progress.completed}
                percentage={progress.percentage}
                total={progress.total}
              />
              <TextInput
                accessibilityLabel={translations.region.search}
                autoCapitalize="none"
                autoCorrect={false}
                focusBorderColor={theme.colors.focusRing}
                onChangeText={setQuery}
                placeholder={translations.region.searchPlaceholder}
                placeholderTextColor={theme.colors.placeholder}
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.colors.inputBackground,
                    borderColor: theme.colors.inputBorder,
                    borderRadius: theme.borderRadius.medium,
                    color: theme.colors.textPrimary,
                    paddingHorizontal: theme.spacing.medium,
                  },
                ]}
                value={query}
              />
              <FilterButtonGroup testID="boss-filter-group">
                <OriginFilterButtons
                  activeOrigin={originFilter}
                  baseLabel={translations.common.baseFilter}
                  dlcLabel={translations.common.dlcFilter}
                  embedded
                  getAccessibilityLabel={translations.common.filterByOrigin}
                  onChange={setOriginFilter}
                />
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
                            ? theme.colors.selectedBackground
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
                            ? theme.colors.text
                            : theme.colors.textPrimary,
                          fontWeight: '700',
                        }}>
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </FilterButtonGroup>
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
  filter: {
    borderWidth: 1,
    flexShrink: 0,
    justifyContent: 'center',
    minHeight: 44,
  },
  empty: { borderWidth: 1, fontSize: 16 },
});

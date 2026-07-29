import { Drawer } from 'expo-router/drawer';
import { router } from 'expo-router';
import { useCallback, useMemo, useState, type ReactElement } from 'react';
import {
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
  type ListRenderItem,
  type SectionListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  calculateAshOfWarProgressByContentPack,
  getAshOfWarSearchableText,
  getSortedAshesOfWarByContentPack,
  resolveLocalizedValue,
  type AshOfWar,
  type AshOfWarContentPack,
  type CompletionProgress,
} from '../data';
import { useApp } from '../hooks/use-app';
import { AshOfWarCard } from './ash-of-war-card';
import {
  OriginFilterButtons,
  type OriginFilter,
} from './origin-filter-buttons';
import { RegionProgressItem } from './region-progress-item';

export type AshOfWarListMode =
  | 'all'
  | 'base-game'
  | 'shadow-of-the-erdtree';
type AshOfWarFilter = 'all' | 'collected' | 'not-collected';

interface AshOfWarListScreenProps {
  readonly mode: AshOfWarListMode;
}

interface ResolvedAshOfWar {
  readonly entry: AshOfWar;
  readonly id: string;
  readonly isCollected: boolean;
  readonly location: string;
  readonly name: string;
}

interface AshSection {
  readonly contentPack: AshOfWarContentPack;
  readonly title: string;
  readonly data: readonly ResolvedAshOfWar[];
}

export function AshOfWarListScreen({
  mode,
}: AshOfWarListScreenProps): ReactElement {
  const {
    ashOfWarProgress,
    collectedAshOfWarIds,
    language,
    theme,
    translations,
  } = useApp();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<AshOfWarFilter>('all');
  const [originFilter, setOriginFilter] = useState<OriginFilter>('all');
  const collectedIds = useMemo(
    () => new Set(collectedAshOfWarIds),
    [collectedAshOfWarIds],
  );
  const contentPack =
    mode === 'all' ? undefined : mode;
  const progressContentPack =
    contentPack ?? (originFilter === 'all' ? undefined : originFilter);
  const title =
    mode === 'all'
      ? translations.ashesOfWar.allTitle
      : mode === 'base-game'
        ? translations.ashesOfWar.baseGameTitle
        : translations.ashesOfWar.expansionTitle;
  const progress = useMemo<CompletionProgress>(
    () =>
      progressContentPack
        ? calculateAshOfWarProgressByContentPack(
            collectedAshOfWarIds,
            progressContentPack,
          )
        : ashOfWarProgress,
    [ashOfWarProgress, collectedAshOfWarIds, progressContentPack],
  );

  const resolveEntries = useCallback(
    (entries: readonly AshOfWar[]): ResolvedAshOfWar[] => {
      const normalizedQuery = query.trim().toLocaleLowerCase(language);
      return entries.flatMap((entry) => {
        const isCollected = collectedIds.has(entry.id);
        const matchesFilter =
          filter === 'all' ||
          (filter === 'collected' && isCollected) ||
          (filter === 'not-collected' && !isCollected);
        const matchesQuery =
          normalizedQuery.length === 0 ||
          getAshOfWarSearchableText(entry, language).some((value) =>
            value.toLocaleLowerCase(language).includes(normalizedQuery),
          );
        return matchesFilter && matchesQuery
          ? [{
              entry,
              id: entry.id,
              isCollected,
              location: resolveLocalizedValue(
                entry.primaryLocation,
                language,
              ).value,
              name: resolveLocalizedValue(entry.name, language).value,
            }]
          : [];
      });
    },
    [collectedIds, filter, language, query],
  );

  const sections = useMemo<AshSection[]>(() => {
    if (mode !== 'all') return [];
    return [
      {
        contentPack: 'base-game' as const,
        title: translations.common.baseGame,
        data: resolveEntries(
          getSortedAshesOfWarByContentPack('base-game', language),
        ),
      },
      {
        contentPack: 'shadow-of-the-erdtree' as const,
        title: translations.common.expansion,
        data: resolveEntries(
          getSortedAshesOfWarByContentPack(
            'shadow-of-the-erdtree',
            language,
          ),
        ),
      },
    ].filter(
      (section) =>
        (originFilter === 'all' || section.contentPack === originFilter) &&
        section.data.length > 0,
    );
  }, [
    language,
    mode,
    originFilter,
    resolveEntries,
    translations.common.baseGame,
    translations.common.expansion,
  ]);

  const entries = useMemo(
    () =>
      contentPack
        ? resolveEntries(
            getSortedAshesOfWarByContentPack(contentPack, language),
          )
        : [],
    [contentPack, language, resolveEntries],
  );
  const visibleCount =
    mode === 'all'
      ? sections.reduce((total, section) => total + section.data.length, 0)
      : entries.length;

  const renderAsh = useCallback<ListRenderItem<ResolvedAshOfWar>>(
    ({ item }) => (
      <AshOfWarCard
        id={item.id}
        isCollected={item.isCollected}
        location={item.location}
        name={item.name}
        onViewDetails={() =>
          router.push({
            pathname: '/ashes-of-war/[ashOfWarId]',
            params: { ashOfWarId: item.id },
          })
        }
      />
    ),
    [],
  );
  const renderSectionAsh = useCallback<
    SectionListRenderItem<ResolvedAshOfWar, AshSection>
  >((item) => renderAsh(item), [renderAsh]);

  const header = (
    <View style={{ gap: theme.spacing.large }}>
      <Text
        accessibilityRole="header"
        style={[styles.title, { color: theme.colors.textPrimary }]}>
        {title}
      </Text>
      <Text
        style={[styles.progressTitle, { color: theme.colors.textPrimary }]}>
        {translations.ashesOfWar.progress}
      </Text>
      <RegionProgressItem
        defeated={progress.completed}
        percentage={progress.percentage}
        total={progress.total}
      />
      <TextInput
        accessibilityLabel={translations.ashesOfWar.search}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setQuery}
        placeholder={translations.ashesOfWar.searchPlaceholder}
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
      {mode === 'all' ? (
        <OriginFilterButtons
          activeOrigin={originFilter}
          baseLabel={translations.common.baseFilter}
          dlcLabel={translations.common.dlcFilter}
          getAccessibilityLabel={translations.common.filterByOrigin}
          onChange={setOriginFilter}
        />
      ) : null}
      <View
        accessibilityRole="radiogroup"
        style={[styles.filters, { gap: theme.spacing.small }]}>
        {([
          ['all', translations.ashesOfWar.all],
          ['collected', translations.ashesOfWar.collected],
          ['not-collected', translations.ashesOfWar.notCollected],
        ] as const).map(([id, label]) => {
          const active = filter === id;
          return (
            <Pressable
              key={id}
              accessibilityRole="radio"
              accessibilityState={{ checked: active }}
              onPress={() => setFilter(id)}
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
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <Text
        accessibilityLiveRegion="polite"
        style={{ color: theme.colors.textSecondary }}>
        {translations.ashesOfWar.resultCount(visibleCount)}
      </Text>
    </View>
  );
  const empty = (
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
      {translations.ashesOfWar.noResults}
    </Text>
  );
  const contentContainerStyle = [
    styles.listContent,
    {
      gap: theme.spacing.medium,
      padding: theme.spacing.large,
      paddingBottom: theme.spacing.extraLarge,
    },
  ];

  return (
    <>
      <Drawer.Screen options={{ title }} />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
        {mode === 'all' ? (
          <SectionList
            contentContainerStyle={contentContainerStyle}
            initialNumToRender={40}
            keyboardShouldPersistTaps="handled"
            keyExtractor={(item) => item.id}
            ListEmptyComponent={empty}
            ListHeaderComponent={header}
            renderItem={renderSectionAsh}
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
                testID={`ash-section-${section.contentPack}`}>
                {section.title}
              </Text>
            )}
            sections={sections}
            stickySectionHeadersEnabled={false}
          />
        ) : (
          <FlatList
            contentContainerStyle={contentContainerStyle}
            data={entries}
            initialNumToRender={30}
            keyboardShouldPersistTaps="handled"
            keyExtractor={(item) => item.id}
            ListEmptyComponent={empty}
            ListHeaderComponent={header}
            renderItem={renderAsh}
          />
        )}
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

import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  View,
  type ListRenderItem,
  type SectionListRenderItem,
} from 'react-native';
import { AppText as Text } from '@/src/components/app-text';
import { AppTextInput as TextInput } from '@/src/components/app-text-input';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  calculateIncantationProgressByContentPack,
  calculateSorceryProgressByContentPack,
  getAllIncantations,
  getAllSorceries,
  matchesSpellFilters,
  queryMatchesOnlyProtectedContent,
  resolveSpellValue,
  searchAndSortSpells,
  type CompletionProgress,
  type Spell,
  type SpellCategory,
  type SpellContentPack,
  type SpellFilter,
} from '../data';
import { useApp } from '../hooks/use-app';
import { FilterButtonGroup } from './filter-button-group';
import {
  OriginFilterButtons,
  type OriginFilter,
} from './origin-filter-buttons';
import { RegionProgressItem } from './region-progress-item';
import { SpellCard } from './spell-card';

export type SpellListMode = 'all' | SpellContentPack;

interface Props {
  readonly category: SpellCategory;
  readonly mode: SpellListMode;
}

interface ResolvedSpell {
  readonly entry: Spell;
  readonly id: string;
  readonly isCollected: boolean;
  readonly location: string;
  readonly name: string;
  readonly spoilerMatch: boolean;
}

interface SpellSection {
  readonly contentPack: SpellContentPack;
  readonly title: string;
  readonly data: readonly ResolvedSpell[];
}

export function SpellListScreen({ category, mode }: Props) {
  const app = useApp();
  const { language, theme, translations } = app;
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<ReadonlySet<SpellFilter>>(new Set());
  const [originFilter, setOriginFilter] = useState<OriginFilter>('all');
  const source = category === 'sorcery' ? getAllSorceries() : getAllIncantations();
  const collected = category === 'sorcery'
    ? app.collectedSorceryIds
    : app.collectedIncantationIds;
  const categoryProgress = category === 'sorcery'
    ? app.sorceryProgress
    : app.incantationProgress;
  const collectedSet = useMemo(() => new Set(collected), [collected]);
  const title = category === 'sorcery'
    ? mode === 'all'
      ? translations.spells.allSorceries
      : mode === 'base-game'
        ? translations.spells.sorceryBaseGameTitle
        : translations.spells.sorceryExpansionTitle
    : mode === 'all'
      ? translations.spells.allIncantations
      : mode === 'base-game'
        ? translations.spells.incantationBaseGameTitle
        : translations.spells.incantationExpansionTitle;
  const progress = useMemo<CompletionProgress>(() => {
    if (mode === 'all') {
      if (originFilter === 'all') return categoryProgress;
      return category === 'sorcery'
        ? calculateSorceryProgressByContentPack(collected, originFilter)
        : calculateIncantationProgressByContentPack(collected, originFilter);
    }
    return category === 'sorcery'
      ? calculateSorceryProgressByContentPack(collected, mode)
      : calculateIncantationProgressByContentPack(collected, mode);
  }, [category, categoryProgress, collected, mode, originFilter]);

  const resolveEntries = useCallback((entries: readonly Spell[]) =>
    searchAndSortSpells(
      entries.filter((entry) => matchesSpellFilters(entry, filters)),
      query,
      language,
    ).map((entry) => ({
        entry,
        id: entry.id,
        isCollected: collectedSet.has(entry.id),
        location: resolveSpellValue(entry.primaryLocation, language).value
          ?? translations.spells.locationPending,
        name: resolveSpellValue(entry.name, language).value ?? entry.name.en,
        spoilerMatch: queryMatchesOnlyProtectedContent(entry, query),
      })), [collectedSet, filters, language, query, translations.spells.locationPending]);

  const sections = useMemo<SpellSection[]>(() => {
    if (mode !== 'all') return [];
    return ([
      ['base-game', translations.common.baseGame],
      ['shadow-of-the-erdtree', translations.common.expansion],
    ] as const).map(([contentPack, sectionTitle]) => ({
      contentPack,
      title: sectionTitle,
      data: resolveEntries(source.filter((entry) => entry.contentPack === contentPack)),
    })).filter(
      (section) =>
        (originFilter === 'all' || section.contentPack === originFilter) &&
        section.data.length,
    );
  }, [mode, originFilter, resolveEntries, source, translations.common.baseGame, translations.common.expansion]);
  const entries = useMemo(
    () => mode === 'all' ? [] : resolveEntries(source.filter((entry) => entry.contentPack === mode)),
    [mode, resolveEntries, source],
  );
  const visibleCount = mode === 'all'
    ? sections.reduce((sum, section) => sum + section.data.length, 0)
    : entries.length;

  const renderEntry = useCallback<ListRenderItem<ResolvedSpell>>(({ item }) => (
    <SpellCard
      category={category}
      id={item.id}
      isCollected={item.isCollected}
      location={item.location}
      name={item.name}
      spoilerMatch={item.spoilerMatch}
      onViewDetails={() => {
        if (category === 'sorcery') {
          router.push({
            pathname: '/sorceries/[sorceryId]',
            params: { sorceryId: item.id },
          });
          return;
        }
        router.push({
          pathname: '/incantations/[incantationId]',
          params: { incantationId: item.id },
        });
      }}
    />
  ), [category]);
  const renderSectionEntry = useCallback<
    SectionListRenderItem<ResolvedSpell, SpellSection>
  >((info) => renderEntry(info), [renderEntry]);
  const toggleFilter = (filter: SpellFilter) => setFilters((current) => {
    const next = new Set(current);
    if (next.has(filter)) next.delete(filter); else next.add(filter);
    return next;
  });
  const header = (
    <View style={{ gap: theme.spacing.large }}>
      <Text variant="display" accessibilityRole="header" style={[styles.title, { color: theme.colors.textPrimary }]}>
        {title}
      </Text>
      <Text style={[styles.progressTitle, { color: theme.colors.textPrimary }]}>
        {category === 'sorcery'
          ? translations.spells.sorceryProgress
          : translations.spells.incantationProgress}
      </Text>
      <RegionProgressItem
        defeated={progress.completed}
        percentage={progress.percentage}
        total={progress.total}
      />
      <TextInput
        accessibilityLabel={translations.spells.search}
        autoCapitalize="none"
        autoCorrect={false}
        focusBorderColor={theme.colors.focusRing}
        onChangeText={setQuery}
        placeholder={translations.spells.searchPlaceholder}
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
      <FilterButtonGroup testID={`${category}-filter-group`}>
        {mode === 'all' ? (
          <OriginFilterButtons
            activeOrigin={originFilter}
            baseLabel={translations.common.baseFilter}
            dlcLabel={translations.common.dlcFilter}
            embedded
            getAccessibilityLabel={translations.common.filterByOrigin}
            onChange={setOriginFilter}
          />
        ) : null}
        {([
          ['legendary', translations.spells.legendary],
          ['missable', translations.spells.missable],
        ] as const).map(([filter, label]) => {
          const active = filters.has(filter);
          return (
            <Pressable
              key={filter}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: active }}
              onPress={() => toggleFilter(filter)}
              style={[
                styles.filter,
                {
                  backgroundColor: active ? theme.colors.selectedBackground : theme.colors.surface,
                  borderColor: active ? theme.colors.primary : theme.colors.border,
                  borderRadius: theme.borderRadius.round,
                  paddingHorizontal: theme.spacing.medium,
                  paddingVertical: theme.spacing.small,
                },
              ]}>
              <Text style={{ color: active ? theme.colors.text : theme.colors.textPrimary, fontWeight: '700' }}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </FilterButtonGroup>
      <Text accessibilityLiveRegion="polite" style={{ color: theme.colors.textSecondary }}>
        {translations.spells.resultCount(visibleCount)}
      </Text>
    </View>
  );
  const empty = <Text style={[styles.empty, { color: theme.colors.textSecondary }]}>{translations.spells.noResults}</Text>;
  const contentStyle = [styles.content, { gap: theme.spacing.medium, padding: theme.spacing.large }];
  return (
    <>
      <Drawer.Screen options={{ title }} />
      <SafeAreaView style={[styles.screen, { backgroundColor: theme.colors.background }]}>
        {mode === 'all' ? (
          <SectionList
            contentContainerStyle={contentStyle}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            sections={sections}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={header}
            ListEmptyComponent={empty}
            renderItem={renderSectionEntry}
            renderSectionHeader={({ section }) => (
              <Text variant="display" accessibilityRole="header" style={[styles.section, { backgroundColor: theme.colors.background, color: theme.colors.textPrimary }]}>
                {section.title}
              </Text>
            )}
            stickySectionHeadersEnabled={false}
            testID="spell-list"
          />
        ) : (
          <FlatList
            contentContainerStyle={contentStyle}
            data={entries}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            keyExtractor={(item) => item.id}
            ListHeaderComponent={header}
            ListEmptyComponent={empty}
            renderItem={renderEntry}
            testID="spell-list"
          />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { flexGrow: 1, paddingBottom: 48 },
  title: { fontSize: 30, fontWeight: '700' },
  progressTitle: { fontSize: 20, fontWeight: '700' },
  section: { fontSize: 20, fontWeight: '700', paddingVertical: 8 },
  input: { borderWidth: 1, fontSize: 16, minHeight: 48 },
  filter: {
    borderWidth: 1,
    flexShrink: 0,
    justifyContent: 'center',
    minHeight: 44,
  },
  empty: { fontSize: 16, padding: 16 },
});

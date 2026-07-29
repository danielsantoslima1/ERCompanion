import { router } from 'expo-router';
import type { Href } from 'expo-router';
import { useState, type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  getIncantationById,
  getSorceryById,
  resolveSpellValue,
  spellUsesEnglishFallback,
  type SpellAvailabilityTag,
  type SpellCategory,
} from '../data';
import { useApp } from '../hooks/use-app';
import { SpellProgressButton } from './spell-progress-button';

function Section({ children, title }: { readonly children: ReactNode; readonly title: string }) {
  const { theme } = useApp();
  return (
    <View style={[styles.section, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.borderRadius.medium, gap: theme.spacing.small, padding: theme.spacing.medium }]}>
      <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>{title}</Text>
      {children}
    </View>
  );
}

export function SpellDetailScreen({ category, id }: { readonly category: SpellCategory; readonly id: string }) {
  const app = useApp();
  const { language, theme, translations } = app;
  const entry = category === 'sorcery' ? getSorceryById(id) : getIncantationById(id);
  const [expandedSpoilers, setExpandedSpoilers] = useState<ReadonlySet<number>>(new Set());
  if (!entry) {
    return (
      <SafeAreaView style={[styles.centered, { backgroundColor: theme.colors.background, padding: theme.spacing.large }]}>
        <Text variant="display" accessibilityRole="header" style={[styles.title, { color: theme.colors.textPrimary }]}>{translations.spells.notFoundTitle}</Text>
        <Text style={[styles.body, { color: theme.colors.textSecondary }]}>{translations.spells.notFoundMessage}</Text>
        <Pressable accessibilityRole="button" onPress={() => router.canGoBack() ? router.back() : router.replace((category === 'sorcery' ? '/sorceries' : '/incantations') as Href)}>
          <Text style={{ color: theme.colors.primary }}>{translations.spells.back}</Text>
        </Pressable>
      </SafeAreaView>
    );
  }
  const resolve = (value: { readonly en: string | null; readonly ptBR: string | null }) =>
    resolveSpellValue(value, language).value;
  const name = resolve(entry.name) ?? entry.name.en;
  const collectedIds = category === 'sorcery' ? app.collectedSorceryIds : app.collectedIncantationIds;
  const isCollected = collectedIds.includes(entry.id);
  const tagLabel = (tag: SpellAvailabilityTag) => ({
    permanent: translations.spells.permanent,
    'once-per-playthrough': translations.spells.oncePerPlaythrough,
    quest: translations.spells.quest,
    'exclusive-choice': translations.spells.exclusiveChoice,
    'new-game-plus': translations.spells.ngPlus,
  })[tag];
  const location = resolve(entry.primaryLocation) ?? translations.spells.locationPending;
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={[styles.content, { gap: theme.spacing.medium, padding: theme.spacing.large }]}>
        <Text variant="display" accessibilityRole="header" style={[styles.title, { color: theme.colors.textPrimary }]}>{name}</Text>
        {spellUsesEnglishFallback(entry, language) ? (
          <Text style={[styles.notice, {
            backgroundColor: theme.colors.warningBackground,
            color: theme.colors.warning,
            borderColor: theme.colors.warning,
            padding: theme.spacing.small,
          }]}>
            {translations.spells.fallbackNotice}
          </Text>
        ) : null}
        <Section title={translations.spells.origin}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
            {entry.contentPack === 'base-game' ? translations.common.baseGame : translations.common.expansion}
          </Text>
        </Section>
        <Section title={translations.spells.category}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
            {category === 'sorcery' ? translations.spells.sorceries : translations.spells.incantations}
          </Text>
        </Section>
        <Section title={translations.spells.primaryLocation}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>{location}</Text>
        </Section>
        {resolve(entry.containsQuestSpoilers ? entry.spoilerSafeCardText : entry.primarySource) ? (
          <Section title={translations.spells.primarySource}>
            <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
              {resolve(entry.containsQuestSpoilers ? entry.spoilerSafeCardText : entry.primarySource)}
            </Text>
          </Section>
        ) : null}
        {entry.legendary ? (
          <Section title={translations.spells.legendaryStatus}>
            <Text style={[styles.body, { color: theme.colors.textPrimary }]}>{translations.common.yes}</Text>
          </Section>
        ) : null}
        {entry.acquisitionMethods.some((method) => resolve(method.method) || resolve(method.source)) ? (
          <Section title={translations.spells.acquisitionMethods}>
            <View style={{ gap: theme.spacing.medium }}>
              {entry.acquisitionMethods.map((method, index) => {
                const expanded = expandedSpoilers.has(index);
                const content = (
                  <View style={{ gap: theme.spacing.extraSmall }}>
                    <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
                      {index + 1}. {resolve(method.location) ?? resolve(method.source) ?? resolve(method.method)}
                    </Text>
                    {resolve(method.method) && resolve(method.method) !== resolve(method.source) ? (
                      <Text style={[styles.body, { color: theme.colors.textSecondary }]}>{resolve(method.method)}</Text>
                    ) : null}
                    {method.availabilityTags.length ? (
                      <Text style={[styles.tags, { color: theme.colors.accent }]}>
                        {method.availabilityTags.map(tagLabel).join(' · ')}
                      </Text>
                    ) : null}
                  </View>
                );
                if (!method.containsQuestSpoilers) return <View key={`${entry.id}-${index}`}>{content}</View>;
                return (
                  <View key={`${entry.id}-${index}`} style={{ gap: theme.spacing.small }}>
                    <Text style={[styles.spoiler, { color: theme.colors.warning }]}>{translations.spells.containsQuestSpoilers}</Text>
                    <Pressable
                      accessibilityRole="button"
                      accessibilityState={{ expanded }}
                      onPress={() => setExpandedSpoilers((current) => {
                        const next = new Set(current);
                        if (next.has(index)) next.delete(index); else next.add(index);
                        return next;
                      })}>
                      <Text style={{ color: theme.colors.primary, fontWeight: '700' }}>
                        {expanded ? translations.spells.collapseSpoiler : translations.spells.expandSpoiler}
                      </Text>
                    </Pressable>
                    {expanded ? content : null}
                  </View>
                );
              })}
            </View>
          </Section>
        ) : null}
        <Section title={translations.spells.collectionStatus}>
          <Text style={[styles.body, { color: isCollected ? theme.colors.success : theme.colors.textSecondary }]}>
            {isCollected ? translations.spells.collected : translations.spells.notCollected}
          </Text>
          <SpellProgressButton category={category} id={entry.id} isCollected={isCollected} name={name} />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { paddingBottom: 48 },
  centered: { flex: 1, gap: 16, justifyContent: 'center' },
  title: { fontSize: 30, fontWeight: '800', lineHeight: 38 },
  section: { borderWidth: 1 },
  sectionTitle: { fontSize: 16, fontWeight: '800' },
  body: { fontSize: 16, lineHeight: 23 },
  notice: { borderWidth: 1, fontSize: 14 },
  tags: { fontSize: 13, fontWeight: '700' },
  spoiler: { fontSize: 14, fontWeight: '700' },
});

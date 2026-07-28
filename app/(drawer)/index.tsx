import { router } from 'expo-router';
import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProgressCircle } from '@/src/components/progress-circle';
import { RegionProgressItem } from '@/src/components/region-progress-item';
import {
  bosses,
  calculateContentPackProgress,
  calculateTotalProgress,
  regions,
  type ContentPack,
} from '@/src/data';
import { useApp } from '@/src/hooks/use-app';

const CONTENT_PACKS: readonly ContentPack[] = [
  'base-game',
  'shadow-of-the-erdtree',
];

export default function HomeScreen() {
  const { defeatedBossIds, theme, translations } = useApp();
  const defeatedBossIdSet = useMemo(
    () => new Set(defeatedBossIds),
    [defeatedBossIds],
  );
  const totalProgress = useMemo(
    () => calculateTotalProgress(bosses, defeatedBossIdSet),
    [defeatedBossIdSet],
  );
  const contentProgress = useMemo(
    () =>
      CONTENT_PACKS.map((contentPack) => ({
        contentPack,
        label:
          contentPack === 'base-game'
            ? translations.common.baseGame
            : translations.common.expansion,
        title:
          contentPack === 'base-game'
            ? translations.home.baseGameProgress
            : translations.home.expansionProgress,
        progress: calculateContentPackProgress(
          bosses,
          regions,
          contentPack,
          defeatedBossIdSet,
        ),
      })),
    [defeatedBossIdSet, translations],
  );

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { gap: theme.spacing.extraLarge, padding: theme.spacing.large },
        ]}
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ gap: theme.spacing.small }}>
          <Text
            accessibilityRole="header"
            style={[styles.title, { color: theme.colors.textPrimary }]}>
            {translations.home.title}
          </Text>
          <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
            {translations.home.description}
          </Text>
        </View>

        <View
          style={[
            styles.totalCard,
            {
              backgroundColor: theme.colors.surfaceElevated,
              borderColor: theme.colors.border,
              borderRadius: theme.borderRadius.large,
              gap: theme.spacing.medium,
              padding: theme.spacing.large,
            },
          ]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>
            {translations.home.totalProgress}
          </Text>
          <ProgressCircle
            accessibilityLabel={translations.home.totalProgressAccessibility(
              totalProgress.defeated,
              totalProgress.total,
              totalProgress.percentage,
            )}
            defeated={totalProgress.defeated}
            percentage={totalProgress.percentage}
            total={totalProgress.total}
          />
        </View>

        <View style={{ gap: theme.spacing.medium }}>
          {contentProgress.map(({ contentPack, label, progress, title }) => (
            <Pressable
              key={contentPack}
              accessibilityLabel={translations.home.openAllBosses(label)}
              accessibilityRole="button"
              onPress={() =>
                router.push({
                  pathname: '/all-bosses/[contentPack]',
                  params: { contentPack },
                })
              }
              style={({ pressed }) => [
                styles.contentCard,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                  borderRadius: theme.borderRadius.large,
                  gap: theme.spacing.medium,
                  opacity: pressed ? 0.7 : 1,
                  padding: theme.spacing.large,
                },
              ]}>
              <Text style={[styles.contentTitle, { color: theme.colors.textPrimary }]}>
                {label}
              </Text>
              <Text style={[styles.contentSubtitle, { color: theme.colors.accent }]}>
                {title}
              </Text>
              <RegionProgressItem
                defeated={progress.defeated}
                percentage={progress.percentage}
                total={progress.total}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { flexGrow: 1 },
  title: { fontSize: 32, fontWeight: '700' },
  description: { fontSize: 17, lineHeight: 25 },
  totalCard: { alignItems: 'center', borderWidth: 1 },
  sectionTitle: { fontSize: 21, fontWeight: '700' },
  contentCard: { borderWidth: 1 },
  contentTitle: { fontSize: 21, fontWeight: '700' },
  contentSubtitle: { fontSize: 15, fontWeight: '600' },
});

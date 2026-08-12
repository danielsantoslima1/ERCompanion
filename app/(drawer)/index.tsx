import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProgressCircle } from '@/src/components/progress-circle';
import { RegionProgressItem } from '@/src/components/region-progress-item';
import { useApp } from '@/src/hooks/use-app';

export default function HomeScreen() {
  const {
    ashOfWarProgress,
    bossProgress,
    combinedProgress,
    incantationProgress,
    sorceryProgress,
    spiritAshProgress,
    talismanProgress,
    theme,
    translations,
  } = useApp();
  const categories = [
    {
      id: 'bosses',
      label: translations.navigation.bosses,
      progress: bossProgress,
      route: '/all-bosses' as const,
    },
    {
      id: 'ashes-of-war',
      label: translations.ashesOfWar.title,
      progress: ashOfWarProgress,
      route: '/ashes-of-war' as const,
    },
    {
      id: 'sorceries',
      label: translations.spells.sorceries,
      progress: sorceryProgress,
      route: '/sorceries' as const,
    },
    {
      id: 'incantations',
      label: translations.spells.incantations,
      progress: incantationProgress,
      route: '/incantations' as const,
    },
    {
      id: 'spirit-ashes',
      label: 'Spirit Ashes',
      progress: spiritAshProgress,
      route: '/spirit-ashes' as const,
    },
    {
      id: 'talismans',
      label: 'Talismans',
      progress: talismanProgress ?? { completed: 0, total: 154, percentage: 0 },
      route: '/talismans' as const,
    },
  ] as const;

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
          <Text variant="display"
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
          <Text
            variant="display"
            style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>
            {translations.home.overallProgress}
          </Text>
          <ProgressCircle
            accessibilityLabel={translations.home.overallProgressAccessibility(
              combinedProgress.completed,
              combinedProgress.total,
              combinedProgress.percentage,
            )}
            defeated={combinedProgress.completed}
            percentage={combinedProgress.percentage}
            total={combinedProgress.total}
            variant="accent"
          />
        </View>

        <View style={{ gap: theme.spacing.medium }}>
          {categories.map(({ id, label, progress, route }) => (
            <Pressable
              key={id}
              accessibilityLabel={translations.home.categoryProgressAccessibility(
                label,
                progress.completed,
                progress.total,
                progress.percentage,
              )}
              accessibilityRole="button"
              onPress={() => router.push(route as Href)}
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
              <Text
                variant="display"
                style={[styles.contentTitle, { color: theme.colors.textPrimary }]}>
                {label}
              </Text>
              <RegionProgressItem
                defeated={progress.completed}
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
});

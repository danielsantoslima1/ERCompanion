import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProgressCircle } from '@/src/components/progress-circle';
import { RegionProgressItem } from '@/src/components/region-progress-item';
import {
  bosses,
  calculateRegionProgress,
  calculateTotalProgress,
  regions,
  sortRegions,
} from '@/src/data';
import { useApp } from '@/src/hooks/use-app';
import { getLocalizedText } from '@/src/i18n';

export default function HomeScreen() {
  const {
    defeatedBossIds,
    language,
    theme,
    translations,
  } = useApp();
  const defeatedBossIdSet = useMemo(
    () => new Set(defeatedBossIds),
    [defeatedBossIds],
  );
  const totalProgress = useMemo(
    () => calculateTotalProgress(bosses, defeatedBossIdSet),
    [defeatedBossIdSet],
  );
  const regionProgress = useMemo(
    () =>
      sortRegions(regions).map((region) => ({
        id: region.id,
        name: getLocalizedText(region.name, language),
        progress: calculateRegionProgress(
          bosses,
          region.id,
          defeatedBossIdSet,
        ),
      })),
    [defeatedBossIdSet, language],
  );
  const totalAccessibilityLabel =
    translations.home.totalProgressAccessibility(
      totalProgress.defeated,
      totalProgress.total,
      totalProgress.percentage,
    );

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[
        styles.safeArea,
        { backgroundColor: theme.colors.background },
      ]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            gap: theme.spacing.extraLarge,
            padding: theme.spacing.large,
          },
        ]}
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ gap: theme.spacing.small }}>
          <Text
            accessibilityRole="header"
            style={[styles.title, { color: theme.colors.textPrimary }]}>
            {translations.home.title}
          </Text>
          <Text
            style={[
              styles.description,
              { color: theme.colors.textSecondary },
            ]}>
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
            style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>
            {translations.home.totalProgress}
          </Text>
          <ProgressCircle
            accessibilityLabel={totalAccessibilityLabel}
            defeated={totalProgress.defeated}
            percentage={totalProgress.percentage}
            total={totalProgress.total}
          />
        </View>

        <View style={{ gap: theme.spacing.medium }}>
          <View style={{ gap: theme.spacing.extraSmall }}>
            <Text
              style={[
                styles.sectionTitle,
                { color: theme.colors.textPrimary },
              ]}>
              {translations.home.progressByRegion}
            </Text>
            <Text
              style={[
                styles.sectionDescription,
                { color: theme.colors.textSecondary },
              ]}>
              {translations.home.availableRegions}
            </Text>
          </View>

          {regionProgress.length === 0 ? (
            <Text
              style={[
                styles.emptyMessage,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                  borderRadius: theme.borderRadius.medium,
                  color: theme.colors.textSecondary,
                  padding: theme.spacing.medium,
                },
              ]}>
              {translations.home.noRegions}
            </Text>
          ) : (
            <View style={{ gap: theme.spacing.medium }}>
              {regionProgress.map((region) => (
                <RegionProgressItem
                  key={region.id}
                  defeated={region.progress.defeated}
                  percentage={region.progress.percentage}
                  regionName={region.name}
                  total={region.progress.total}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  description: {
    fontSize: 17,
    lineHeight: 25,
  },
  totalCard: {
    alignItems: 'center',
    borderWidth: 1,
  },
  sectionTitle: {
    alignSelf: 'stretch',
    fontSize: 21,
    fontWeight: '700',
  },
  sectionDescription: {
    fontSize: 15,
  },
  emptyMessage: {
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 23,
  },
});

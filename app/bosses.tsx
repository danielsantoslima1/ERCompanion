import { router } from 'expo-router';
import { useCallback, useMemo } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  bosses,
  calculateRegionProgress,
  regions,
  sortRegions,
} from '@/src/data';
import { useApp } from '@/src/hooks/use-app';
import { getLocalizedText } from '@/src/i18n';

export default function BossesScreen() {
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
  const regionItems = useMemo(
    () =>
      sortRegions(regions).map((region) => ({
        id: region.id,
        name: getLocalizedText(region.name, language),
        contentLabel:
          region.game === 'base-game'
            ? translations.common.baseGame
            : translations.common.expansion,
        progress: calculateRegionProgress(
          bosses,
          region.id,
          defeatedBossIdSet,
        ),
      })),
    [defeatedBossIdSet, language, translations],
  );
  const openRegion = useCallback((regionId: string) => {
    router.push({
      pathname: '/regions/[regionId]',
      params: { regionId },
    });
  }, []);

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
            gap: theme.spacing.large,
            padding: theme.spacing.large,
          },
        ]}
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ gap: theme.spacing.small }}>
          <Text
            accessibilityRole="header"
            style={[styles.title, { color: theme.colors.textPrimary }]}>
            {translations.bosses.title}
          </Text>
          <Text
            style={[
              styles.description,
              { color: theme.colors.textSecondary },
            ]}>
            {translations.bosses.description}
          </Text>
        </View>

        <View
          accessibilityLabel={translations.bosses.regionList}
          style={{ gap: theme.spacing.medium }}>
          {regionItems.length === 0 ? (
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
              {translations.bosses.noRegions}
            </Text>
          ) : (
            regionItems.map((region) => {
              const progressLabel = translations.bosses.regionProgress(
                region.progress.defeated,
                region.progress.total,
                region.progress.percentage,
              );

              return (
                <Pressable
                  key={region.id}
                  accessibilityHint={progressLabel}
                  accessibilityLabel={translations.bosses.openRegion(
                    region.name,
                  )}
                  accessibilityRole="button"
                  onPress={() => openRegion(region.id)}
                  style={({ pressed }) => [
                    styles.card,
                    {
                      backgroundColor: theme.colors.surface,
                      borderColor: theme.colors.border,
                      borderRadius: theme.borderRadius.medium,
                      gap: theme.spacing.small,
                      opacity: pressed ? 0.7 : 1,
                      padding: theme.spacing.medium,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.regionName,
                      { color: theme.colors.textPrimary },
                    ]}>
                    {region.name}
                  </Text>
                  <Text
                    style={[
                      styles.contentLabel,
                      { color: theme.colors.accent },
                    ]}>
                    {region.contentLabel}
                  </Text>
                  <View style={styles.progressRow}>
                    <Text
                      style={[
                        styles.progressText,
                        { color: theme.colors.textSecondary },
                      ]}>
                      {region.progress.defeated}/{region.progress.total}
                    </Text>
                    <Text
                      style={[
                        styles.percentage,
                        { color: theme.colors.primary },
                      ]}>
                      {region.progress.percentage}%
                    </Text>
                  </View>
                </Pressable>
              );
            })
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
  card: {
    borderWidth: 1,
    minHeight: 120,
  },
  regionName: {
    fontSize: 19,
    fontWeight: '700',
  },
  contentLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  progressRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 15,
  },
  percentage: {
    fontSize: 18,
    fontWeight: '700',
  },
  emptyMessage: {
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 23,
  },
});

import { StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

import { useApp } from '../hooks/use-app';

interface RegionProgressItemProps {
  regionName?: string;
  defeated: number;
  total: number;
  percentage: number;
}

function clampPercentage(percentage: number): number {
  if (!Number.isFinite(percentage)) {
    return 0;
  }

  return Math.min(100, Math.max(0, Math.round(percentage)));
}

export function RegionProgressItem({
  regionName,
  defeated,
  total,
  percentage,
}: RegionProgressItemProps) {
  const { theme, translations } = useApp();
  const visiblePercentage = clampPercentage(percentage);
  const progressWidth: `${number}%` = `${visiblePercentage}%`;
  const accessibilityLabel = regionName
    ? translations.home.regionProgressAccessibility(
        regionName,
        defeated,
        total,
        visiblePercentage,
      )
    : `${defeated}/${total}, ${visiblePercentage}%`;

  return (
    <View
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="text"
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: theme.borderRadius.medium,
          gap: theme.spacing.small,
          padding: theme.spacing.medium,
        },
      ]}>
      {regionName ? (
        <Text
          accessible={false}
          numberOfLines={2}
          style={[styles.name, { color: theme.colors.textPrimary }]}>
          {regionName}
        </Text>
      ) : null}
      <View testID="progress-values" style={styles.values}>
        <Text
          accessible={false}
          numberOfLines={1}
          style={[styles.count, { color: theme.colors.textSecondary }]}>
          {defeated}/{total}
        </Text>
        <Text
          accessible={false}
          numberOfLines={1}
          style={[styles.percentage, { color: theme.colors.accentStrong }]}>
          {visiblePercentage}%
        </Text>
      </View>
      <View
        testID="progress-track"
        style={[
          styles.track,
          {
            backgroundColor: theme.colors.progressTrack,
            borderRadius: theme.borderRadius.round,
          },
        ]}>
        <View
          style={[
            styles.progress,
            {
              backgroundColor: theme.colors.progressFill,
              borderRadius: theme.borderRadius.round,
              width: progressWidth,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
  },
  values: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  count: {
    flexShrink: 0,
    fontSize: 14,
  },
  percentage: {
    flexShrink: 0,
    fontSize: 16,
    fontWeight: '700',
  },
  track: {
    height: 10,
    overflow: 'hidden',
    width: '100%',
  },
  progress: {
    height: '100%',
  },
});

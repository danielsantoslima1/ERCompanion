import { StyleSheet, Text, View } from 'react-native';

import { useApp } from '../hooks/use-app';

interface RegionProgressItemProps {
  regionName: string;
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
  const accessibilityLabel =
    translations.home.regionProgressAccessibility(
      regionName,
      defeated,
      total,
      visiblePercentage,
    );

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
      <View style={styles.labels}>
        <Text
          accessible={false}
          numberOfLines={2}
          style={[styles.name, { color: theme.colors.textPrimary }]}>
          {regionName}
        </Text>
        <View style={styles.values}>
          <Text
            accessible={false}
            style={[styles.count, { color: theme.colors.textSecondary }]}>
            {defeated}/{total}
          </Text>
          <Text
            accessible={false}
            style={[styles.percentage, { color: theme.colors.primary }]}>
            {visiblePercentage}%
          </Text>
        </View>
      </View>
      <View
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
              backgroundColor: theme.colors.primary,
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
  labels: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    marginRight: 16,
  },
  values: {
    alignItems: 'flex-end',
  },
  count: {
    fontSize: 14,
  },
  percentage: {
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

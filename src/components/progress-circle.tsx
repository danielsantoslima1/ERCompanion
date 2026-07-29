import {
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import { AppText as Text } from '@/src/components/app-text';
import Svg, { Circle } from 'react-native-svg';

import { useApp } from '../hooks/use-app';

interface ProgressCircleProps {
  defeated: number;
  total: number;
  percentage: number;
  accessibilityLabel: string;
  variant?: 'green' | 'accent';
}

function clampPercentage(percentage: number): number {
  if (!Number.isFinite(percentage)) {
    return 0;
  }

  return Math.min(100, Math.max(0, Math.round(percentage)));
}

export function ProgressCircle({
  defeated,
  total,
  percentage,
  accessibilityLabel,
  variant = 'green',
}: ProgressCircleProps) {
  const { width } = useWindowDimensions();
  const { theme } = useApp();
  const trackColor =
    variant === 'accent'
      ? theme.colors.circularProgressAccentTrack
      : theme.colors.circularProgressTrack;
  const fillColor =
    variant === 'accent'
      ? theme.colors.circularProgressAccentFill
      : theme.colors.circularProgressFill;
  const size = Math.min(240, Math.max(180, width - 112));
  const strokeWidth = 14;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const visiblePercentage = clampPercentage(percentage);
  const strokeDashoffset =
    circumference * (1 - visiblePercentage / 100);

  return (
    <View
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="progressbar"
      accessibilityValue={{
        min: 0,
        max: 100,
        now: visiblePercentage,
      }}
      style={[styles.container, { height: size, width: size }]}>
      <Svg
        accessible={false}
        height={size}
        width={size}
        viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={center}
          cy={center}
          fill="none"
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          testID="progress-circle-track"
        />
        {visiblePercentage > 0 ? (
          <Circle
            cx={center}
            cy={center}
            fill="none"
            originX={center}
            originY={center}
            r={radius}
            rotation={-90}
            stroke={fillColor}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            testID="progress-circle-fill"
          />
        ) : null}
      </Svg>
      <View pointerEvents="none" style={styles.labelContainer}>
        <Text
          accessible={false}
          style={[styles.percentage, { color: theme.colors.textPrimary }]}>
          {visiblePercentage}%
        </Text>
        <Text
          accessible={false}
          style={[styles.count, { color: theme.colors.textSecondary }]}>
          {defeated}/{total}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  labelContainer: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  percentage: {
    fontSize: 38,
    fontWeight: '700',
  },
  count: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
  },
});

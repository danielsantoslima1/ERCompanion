import { Pressable, StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

import type { ContentPack } from '../data';
import { useApp } from '../hooks/use-app';

export type OriginFilter = 'all' | ContentPack;

interface OriginFilterButtonsProps {
  readonly activeOrigin: OriginFilter;
  readonly baseLabel: string;
  readonly dlcLabel: string;
  readonly getAccessibilityLabel: (label: string) => string;
  readonly onChange: (origin: OriginFilter) => void;
}

export function OriginFilterButtons({
  activeOrigin,
  baseLabel,
  dlcLabel,
  getAccessibilityLabel,
  onChange,
}: OriginFilterButtonsProps) {
  const { theme } = useApp();
  const options = [
    { label: baseLabel, origin: 'base-game' },
    { label: dlcLabel, origin: 'shadow-of-the-erdtree' },
  ] as const;

  return (
    <View
      accessibilityRole="radiogroup"
      style={[styles.container, { gap: theme.spacing.small }]}
      testID="origin-filter-buttons">
      {options.map(({ label, origin }) => {
        const selected = activeOrigin === origin;
        return (
          <Pressable
            key={origin}
            accessibilityLabel={getAccessibilityLabel(label)}
            accessibilityRole="button"
            accessibilityState={{ selected }}
            onPress={() => onChange(selected ? 'all' : origin)}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: selected
                  ? theme.colors.selectedBackground
                  : theme.colors.surface,
                borderColor: selected
                  ? theme.colors.selectedBorder
                  : theme.colors.border,
                borderRadius: theme.borderRadius.round,
                borderWidth: selected ? 2 : 1,
                opacity: pressed ? 0.7 : 1,
                paddingHorizontal: theme.spacing.medium,
                paddingVertical: theme.spacing.small,
              },
            ]}>
            <Text
              style={[
                styles.label,
                {
                  color: theme.colors.text,
                  textDecorationLine: selected ? 'underline' : 'none',
                },
              ]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    justifyContent: 'center',
    minHeight: 44,
    minWidth: 72,
  },
  label: {
    fontWeight: '700',
    textAlign: 'center',
  },
});

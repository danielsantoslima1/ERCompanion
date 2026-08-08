import { Fragment } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

import type { ContentPack } from '../data';
import { useApp } from '../hooks/use-app';
import { FilterButtonGroup } from './filter-button-group';

export type OriginFilter = 'all' | ContentPack;

interface OriginFilterButtonsProps {
  readonly activeOrigin: OriginFilter;
  readonly baseLabel: string;
  readonly dlcLabel: string;
  readonly getAccessibilityLabel: (label: string) => string;
  readonly embedded?: boolean;
  readonly onChange: (origin: OriginFilter) => void;
}

export function OriginFilterButtons({
  activeOrigin,
  baseLabel,
  dlcLabel,
  embedded = false,
  getAccessibilityLabel,
  onChange,
}: OriginFilterButtonsProps) {
  const { theme } = useApp();
  const options = [
    { label: baseLabel, origin: 'base-game' },
    { label: dlcLabel, origin: 'shadow-of-the-erdtree' },
  ] as const;

  const buttons = (
    <Fragment>
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
    </Fragment>
  );

  return embedded ? (
    buttons
  ) : (
    <FilterButtonGroup testID="origin-filter-buttons">
      {buttons}
    </FilterButtonGroup>
  );
}

const styles = StyleSheet.create({
  button: {
    flexShrink: 0,
    justifyContent: 'center',
    minHeight: 44,
    minWidth: 72,
  },
  label: {
    fontWeight: '700',
    textAlign: 'center',
  },
});

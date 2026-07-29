import { Pressable, StyleSheet, Text } from 'react-native';

import { useApp } from '../hooks/use-app';

interface DetailsButtonProps {
  readonly accessibilityLabel: string;
  readonly disabled?: boolean;
  readonly label: string;
  readonly onPress: () => void;
}

export function DetailsButton({
  accessibilityLabel,
  disabled = false,
  label,
  onPress,
}: DetailsButtonProps) {
  const { theme } = useApp();

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      testID="details-button"
      style={({ pressed }) => [
        styles.button,
        {
          borderColor: theme.colors.primary,
          borderRadius: theme.borderRadius.medium,
          opacity: disabled ? 0.5 : pressed ? 0.7 : 1,
          paddingHorizontal: theme.spacing.medium,
          paddingVertical: theme.spacing.small,
        },
      ]}>
      <Text style={[styles.label, { color: theme.colors.primary }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 48,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});

import { Pressable, StyleSheet } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

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
          backgroundColor: pressed
            ? theme.colors.primarySoft
            : theme.colors.surface,
          borderColor: theme.colors.primary,
          borderRadius: theme.borderRadius.medium,
          opacity: disabled ? 0.55 : 1,
          paddingHorizontal: theme.spacing.medium,
          paddingVertical: theme.spacing.small,
        },
      ]}>
      <Text
        style={[
          styles.label,
          {
            color: disabled
              ? theme.colors.disabledText
              : theme.mode === 'dark'
                ? theme.colors.primaryContrast
                : theme.colors.primary,
          },
        ]}>
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

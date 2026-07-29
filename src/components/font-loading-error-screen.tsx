import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useApp } from '../hooks/use-app';

interface FontLoadingErrorScreenProps {
  readonly onRetry: () => void;
}

export function FontLoadingErrorScreen({
  onRetry,
}: FontLoadingErrorScreenProps) {
  const { theme, translations } = useApp();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          padding: theme.spacing.large,
        },
      ]}>
      <Text
        accessibilityRole="header"
        style={[styles.title, { color: theme.colors.textPrimary }]}>
        {translations.common.error}
      </Text>
      <Text style={[styles.message, { color: theme.colors.textSecondary }]}>
        {translations.placeholders.initializationErrorMessage}
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={onRetry}
        style={[
          styles.button,
          {
            backgroundColor: theme.colors.primary,
            borderRadius: theme.borderRadius.medium,
            paddingHorizontal: theme.spacing.large,
            paddingVertical: theme.spacing.medium,
          },
        ]}>
        <Text
          style={[styles.buttonLabel, { color: theme.colors.primaryContrast }]}>
          {translations.common.tryAgain}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: { minHeight: 48, justifyContent: 'center' },
  buttonLabel: { fontSize: 16, fontWeight: '700', textAlign: 'center' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  message: { fontSize: 16, lineHeight: 24, maxWidth: 420, textAlign: 'center' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
});

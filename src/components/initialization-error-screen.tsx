import { useCallback, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

import { useApp } from '../hooks/use-app';

export function InitializationErrorScreen() {
  const { retryInitialization, theme, translations } = useApp();
  const [isRetrying, setIsRetrying] = useState(false);
  const isRetryingRef = useRef(false);

  const handleRetry = useCallback(async () => {
    if (isRetryingRef.current) {
      return;
    }

    isRetryingRef.current = true;
    setIsRetrying(true);
    try {
      await retryInitialization();
    } catch {
      // The public initialization state continues to represent the failure.
    } finally {
      isRetryingRef.current = false;
      setIsRetrying(false);
    }
  }, [retryInitialization]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          padding: theme.spacing.large,
        },
      ]}>
      <View
        style={[
          styles.content,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.danger,
            borderRadius: theme.borderRadius.large,
            gap: theme.spacing.medium,
            padding: theme.spacing.large,
          },
        ]}>
        <Text variant="display"
          accessibilityRole="header"
          style={[styles.title, { color: theme.colors.textPrimary }]}>
          {translations.common.error}
        </Text>
        <Text style={[styles.message, { color: theme.colors.textSecondary }]}>
          {translations.placeholders.initializationErrorMessage}
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled: isRetrying }}
          disabled={isRetrying}
          onPress={handleRetry}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isRetrying
                ? theme.colors.disabled
                : theme.colors.primary,
              borderRadius: theme.borderRadius.medium,
              opacity: pressed ? 0.85 : 1,
              paddingHorizontal: theme.spacing.large,
              paddingVertical: theme.spacing.medium,
            },
          ]}>
          <Text
            style={[
              styles.buttonText,
              { color: theme.colors.primaryContrast },
            ]}>
            {translations.common.tryAgain}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    borderWidth: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  message: {
    fontSize: 17,
    lineHeight: 25,
  },
  button: {
    alignItems: 'center',
    minHeight: 48,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

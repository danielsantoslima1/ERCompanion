import { StyleSheet, Text, View } from 'react-native';

import { useApp } from '../hooks/use-app';

interface PlaceholderScreenProps {
  title: string;
  message: string;
}

export function PlaceholderScreen({
  title,
  message,
}: PlaceholderScreenProps) {
  const { theme } = useApp();

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
            borderColor: theme.colors.border,
            borderRadius: theme.borderRadius.large,
            gap: theme.spacing.medium,
            padding: theme.spacing.large,
          },
        ]}>
        <Text
          accessibilityRole="header"
          style={[styles.title, { color: theme.colors.textPrimary }]}>
          {title}
        </Text>
        <Text style={[styles.message, { color: theme.colors.textSecondary }]}>
          {message}
        </Text>
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
    fontSize: 28,
    fontWeight: '700',
  },
  message: {
    fontSize: 17,
    lineHeight: 25,
  },
});

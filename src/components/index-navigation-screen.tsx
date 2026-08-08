import Ionicons from '@expo/vector-icons/Ionicons';
import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { IndexNavigationEntry } from '../index/index-sections';
import { useApp } from '../hooks/use-app';
import { AppText as Text } from './app-text';

interface IndexNavigationScreenProps {
  readonly entries: readonly IndexNavigationEntry[];
  readonly title: string;
}

export function IndexNavigationScreen({
  entries,
  title,
}: IndexNavigationScreenProps) {
  const { theme } = useApp();

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { gap: theme.spacing.large, padding: theme.spacing.large },
        ]}>
        <Text
          accessibilityRole="header"
          variant="display"
          style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>
        <View style={{ gap: theme.spacing.medium }}>
          {entries.map((entry) => (
            <Pressable
              key={entry.id}
              accessibilityHint={`Open ${entry.label}`}
              accessibilityLabel={entry.label}
              accessibilityRole="button"
              onPress={() => router.push(entry.route as Href)}
              style={({ pressed }) => [
                styles.option,
                {
                  backgroundColor: theme.colors.cardAccent,
                  borderColor: theme.colors.cardAccentBorder,
                  borderRadius: theme.borderRadius.medium,
                  gap: theme.spacing.medium,
                  opacity: pressed ? 0.72 : 1,
                  padding: theme.spacing.large,
                },
              ]}>
              <Text
                style={[styles.optionLabel, { color: theme.colors.cardAccentText }]}>
                {entry.label}
              </Text>
              <Ionicons
                accessibilityElementsHidden
                color={theme.colors.cardAccentIcon}
                importantForAccessibility="no-hide-descendants"
                name="chevron-forward"
                size={22}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { flexGrow: 1 },
  title: { fontSize: 32, fontWeight: '700' },
  option: {
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 64,
  },
  optionLabel: {
    flex: 1,
    flexShrink: 1,
    fontSize: 18,
    fontWeight: '600',
  },
});

import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { AppText as Text } from './app-text';
import { useApp } from '../hooks/use-app';

export function CategoryPageTitle({ children }: { readonly children: ReactNode }) {
  const { theme } = useApp();
  return <Text variant="display" accessibilityRole="header" style={[styles.title, { color: theme.colors.textPrimary }]}>{children}</Text>;
}

const styles = StyleSheet.create({ title: { fontSize: 32, fontWeight: '700' } });
export const categoryPageTitleStyle = styles.title;

import { router, type Href } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText as Text } from './app-text';
import { TalismanProgressButton } from './talisman-progress-button';
import { getTalismanById } from '../data';
import { useApp } from '../hooks/use-app';

export function TalismanDetailScreen({ id }: { readonly id: string }) {
  const app = useApp();
  const entry = getTalismanById(id);
  const isCollected = Boolean(entry && (app.collectedTalismanIds ?? []).includes(entry.id));
  if (!entry) return <SafeAreaView style={[styles.center, { backgroundColor: app.theme.colors.background }]}><Text variant="display" style={{ color: app.theme.colors.textPrimary }}>Talisman not found</Text><Pressable accessibilityRole="button" onPress={() => router.canGoBack() ? router.back() : router.replace('/talismans' as Href)}><Text style={{ color: app.theme.colors.primary }}>Back to Talismans</Text></Pressable></SafeAreaView>;
  const field = (title: string, value: string | null) => value ? <Section title={title}><Text style={{ color: app.theme.colors.textPrimary }}>{value}</Text></Section> : null;
  return <SafeAreaView style={[styles.screen, { backgroundColor: app.theme.colors.background }]}><ScrollView contentContainerStyle={{ gap: app.theme.spacing.medium, padding: app.theme.spacing.large, paddingBottom: 48 }}><Text variant="display" accessibilityRole="header" style={{ color: app.theme.colors.textPrimary }}>{entry.name}</Text>{field('Origin', entry.contentPack === 'base-game' ? 'Base game' : 'Shadow of the Erdtree')}{field('Location', entry.detailedLocation)}{field('Region', entry.region)}{field('Acquisition', entry.primaryAcquisition)}{field('Nearest Site of Grace', entry.nearestSiteOfGrace)}{field('Effect', entry.effect)}{field('Weight', entry.weight === null ? null : String(entry.weight))}{field('Description', entry.description)}{field('Legendary', entry.legendary ? 'Yes' : 'No')}{field('Missable', entry.missable ? 'Yes' : 'No')}<Section title="Collection status"><Text style={{ color: isCollected ? app.theme.colors.success : app.theme.colors.textSecondary }}>{isCollected ? 'Collected' : 'Not collected'}</Text><TalismanProgressButton id={entry.id} isCollected={isCollected} name={entry.name} /></Section></ScrollView></SafeAreaView>;
}

function Section({ title, children }: { readonly title: string; readonly children: ReactNode }) {
  const { theme } = useApp();
  return <View style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.borderRadius.medium, borderWidth: 1, gap: theme.spacing.small, padding: theme.spacing.medium }}><Text style={{ color: theme.colors.accent, fontWeight: '800' }}>{title}</Text>{children}</View>;
}
const styles = StyleSheet.create({ screen: { flex: 1 }, center: { alignItems: 'center', flex: 1, gap: 16, justifyContent: 'center' } });

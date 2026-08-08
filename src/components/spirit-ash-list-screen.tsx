import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText as Text } from './app-text';
import { AppTextInput as TextInput } from './app-text-input';
import { FilterButtonGroup } from './filter-button-group';
import { OriginFilterButtons, type OriginFilter } from './origin-filter-buttons';
import { RegionProgressItem } from './region-progress-item';
import { SpiritAshCard } from './spirit-ash-card';
import { calculateSpiritAshProgressByContentPack, getAllSpiritAshes, searchAndSortSpiritAshes, sortSpiritAshes, type SpiritAshContentPack } from '../data';
import { useApp } from '../hooks/use-app';

export function SpiritAshListScreen({ mode = 'all' }: { readonly mode?: 'all' | SpiritAshContentPack }) {
  const app = useApp();
  const [query, setQuery] = useState('');
  const [origin, setOrigin] = useState<OriginFilter>('all');
  const [status, setStatus] = useState<'all' | 'collected' | 'not-collected'>('all');
  const [legendary, setLegendary] = useState(false);
  const [missable, setMissable] = useState(false);
  const collected = useMemo(() => new Set(app.collectedSpiritAshIds), [app.collectedSpiritAshIds]);
  const source = getAllSpiritAshes().filter((entry) => (mode === 'all' || entry.contentPack === mode) && (mode !== 'all' || origin === 'all' || entry.contentPack === origin));
  const entries = useMemo(() => searchAndSortSpiritAshes(sortSpiritAshes(source).filter((entry) => status === 'all' || (status === 'collected' ? collected.has(entry.id) : !collected.has(entry.id))).filter((entry) => !legendary || entry.legendary).filter((entry) => !missable || entry.missable === true), query), [collected, legendary, missable, query, source, status]);
  const progress = mode === 'all' && origin === 'all' ? app.spiritAshProgress : mode === 'all' ? calculateSpiritAshProgressByContentPack(app.collectedSpiritAshIds, origin as SpiritAshContentPack) : calculateSpiritAshProgressByContentPack(app.collectedSpiritAshIds, mode);
  const title = mode === 'all' ? 'Spirit Ashes' : mode === 'base-game' ? 'Spirit Ashes — Base game' : 'Spirit Ashes — Shadow of the Erdtree';
  return <><Drawer.Screen options={{ title }} /><SafeAreaView style={[styles.screen, { backgroundColor: app.theme.colors.background }]}><FlatList data={entries} keyExtractor={(item) => item.id} keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled" contentContainerStyle={[styles.content, { gap: app.theme.spacing.medium, padding: app.theme.spacing.large }]} ListHeaderComponent={<View style={{ gap: app.theme.spacing.medium }}><Text variant="display" accessibilityRole="header" style={{ color: app.theme.colors.textPrimary }}>{title}</Text><RegionProgressItem defeated={progress.completed} percentage={progress.percentage} total={progress.total} /><TextInput accessibilityLabel="Search Spirit Ashes" autoCapitalize="none" autoCorrect={false} onChangeText={setQuery} placeholder="Search Spirit Ashes" placeholderTextColor={app.theme.colors.placeholder} style={[styles.input, { backgroundColor: app.theme.colors.inputBackground, borderColor: app.theme.colors.inputBorder, color: app.theme.colors.textPrimary, paddingHorizontal: app.theme.spacing.medium }]} value={query} /><FilterButtonGroup>{mode === 'all' ? <OriginFilterButtons activeOrigin={origin} baseLabel="Base" dlcLabel="DLC" embedded getAccessibilityLabel={(label) => `Filter Spirit Ashes by ${label}`} onChange={setOrigin} /> : null}{(['all', 'collected', 'not-collected'] as const).map((value) => <FilterButton key={value} active={status === value} label={value === 'not-collected' ? 'Not collected' : value[0].toUpperCase() + value.slice(1)} onPress={() => setStatus(value)} />)}<FilterButton active={legendary} label="Legendary" onPress={() => setLegendary((value) => !value)} /><FilterButton active={missable} label="Missable" onPress={() => setMissable((value) => !value)} /></FilterButtonGroup><Text style={{ color: app.theme.colors.textSecondary }}>{entries.length} results</Text></View>} ListEmptyComponent={<Text style={{ color: app.theme.colors.textSecondary, padding: 16 }}>No Spirit Ashes match this search.</Text>} renderItem={({ item }) => <SpiritAshCard id={item.id} isCollected={collected.has(item.id)} legendary={item.legendary} location={item.primaryLocation} name={item.name} onViewDetails={() => router.push({ pathname: '/spirit-ashes/[spiritAshId]', params: { spiritAshId: item.id } })} />} /></SafeAreaView></>;
}

function FilterButton({ active, label, onPress }: { readonly active: boolean; readonly label: string; readonly onPress: () => void }) { const { theme } = useApp(); return <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: active }} onPress={onPress} style={[styles.filter, { backgroundColor: active ? theme.colors.selectedBackground : theme.colors.surface, borderColor: active ? theme.colors.primary : theme.colors.border, borderRadius: theme.borderRadius.round }]}><Text style={{ color: theme.colors.textPrimary, fontWeight: '700' }}>{label}</Text></Pressable>; }
const styles = StyleSheet.create({ screen: { flex: 1 }, content: { flexGrow: 1, paddingBottom: 48 }, input: { borderWidth: 1, fontSize: 16, minHeight: 48 }, filter: { borderWidth: 1, justifyContent: 'center', minHeight: 44, paddingHorizontal: 12, paddingVertical: 8 } });

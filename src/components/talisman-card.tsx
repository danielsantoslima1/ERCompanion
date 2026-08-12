import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import { AppText as Text } from './app-text';
import { DetailsButton } from './details-button';
import { TalismanProgressButton } from './talisman-progress-button';
import { useApp } from '../hooks/use-app';

export function TalismanCard({ id, name, location, isCollected, legendary, missable, onViewDetails }: { readonly id: string; readonly name: string; readonly location: string; readonly isCollected: boolean; readonly legendary: boolean; readonly missable: boolean; readonly onViewDetails: () => void }) {
  const { theme } = useApp();
  return <View style={[styles.card, { backgroundColor: isCollected ? theme.colors.successBackground : theme.colors.cardAccent, borderColor: isCollected ? theme.colors.success : theme.colors.cardAccentBorder, borderRadius: theme.borderRadius.medium, gap: theme.spacing.medium, padding: theme.spacing.medium }]}><View accessible accessibilityLabel={`${name}, ${location}, ${isCollected ? 'Collected' : 'Not collected'}`}><View style={styles.heading}><Text style={[styles.name, { color: isCollected ? theme.colors.cardAccentText : theme.colors.accent }]}>{name}</Text><Ionicons accessibilityElementsHidden color={isCollected ? theme.colors.success : theme.colors.cardAccentIcon} name={isCollected ? 'checkmark-circle-outline' : 'ribbon-outline'} size={24} /></View><Text style={{ color: theme.colors.textSecondary }}>{location}</Text>{legendary ? <Text style={{ color: theme.colors.accent, fontWeight: '700' }}>Legendary</Text> : null}{missable ? <Text style={{ color: theme.colors.warning, fontWeight: '700' }}>Missable</Text> : null}</View><DetailsButton accessibilityLabel={`View details for ${name}`} label="View details" onPress={onViewDetails} /><TalismanProgressButton id={id} isCollected={isCollected} name={name} /></View>;
}
const styles = StyleSheet.create({ card: { borderWidth: 1 }, heading: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' }, name: { flex: 1, flexShrink: 1, fontSize: 18, fontWeight: '700' } });

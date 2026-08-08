import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import { AppText as Text } from './app-text';
import { DetailsButton } from './details-button';
import { SpiritAshProgressButton } from './spirit-ash-progress-button';
import { useApp } from '../hooks/use-app';

export function SpiritAshCard({ id, name, location, isCollected, legendary, onViewDetails }: { readonly id: string; readonly name: string; readonly location: string; readonly isCollected: boolean; readonly legendary: boolean; readonly onViewDetails: () => void }) {
  const { theme } = useApp();
  return <View style={[styles.card, { backgroundColor: isCollected ? theme.colors.successBackground : theme.colors.cardAccent, borderColor: isCollected ? theme.colors.success : theme.colors.cardAccentBorder, borderRadius: theme.borderRadius.medium, gap: theme.spacing.medium, padding: theme.spacing.medium }]}>
    <View accessibilityLabel={`${name}, ${location}, ${isCollected ? 'Collected' : 'Not collected'}`} accessible>
      <View style={styles.heading}><Text style={[styles.name, { color: theme.colors.cardAccentText }]}>{name}</Text><Ionicons accessibilityElementsHidden color={isCollected ? theme.colors.success : theme.colors.cardAccentIcon} name={isCollected ? 'checkmark-circle-outline' : 'sparkles-outline'} size={24} /></View>
      <Text style={[styles.location, { color: theme.colors.textSecondary }]}>{location}</Text>
      {legendary ? <Text style={{ color: theme.colors.accent, fontWeight: '700' }}>Legendary</Text> : null}
    </View>
    <DetailsButton accessibilityLabel={`View details for ${name}`} label="View details" onPress={onViewDetails} />
    <SpiritAshProgressButton id={id} isCollected={isCollected} name={name} />
  </View>;
}
const styles = StyleSheet.create({ card: { borderWidth: 1 }, heading: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' }, name: { flex: 1, flexShrink: 1, fontSize: 18, fontWeight: '700' }, location: { fontSize: 15, lineHeight: 21, marginTop: 4 } });

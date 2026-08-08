import { Pressable, StyleSheet } from 'react-native';
import { AppText as Text } from './app-text';
import { useApp } from '../hooks/use-app';

export function SpiritAshProgressButton({ id, isCollected, name }: { readonly id: string; readonly isCollected: boolean; readonly name: string }) {
  const { theme, toggleSpiritAshCollected } = useApp();
  return <Pressable accessibilityRole="checkbox" accessibilityLabel={`${isCollected ? 'Mark' : 'Collect'} ${name}`} accessibilityState={{ checked: isCollected }} onPress={() => { void toggleSpiritAshCollected(id); }} style={({ pressed }) => [styles.button, { backgroundColor: isCollected ? theme.colors.successActionBackground : theme.colors.primary, borderRadius: theme.borderRadius.medium, opacity: pressed ? 0.7 : 1 }]}>
  <Text style={{ color: isCollected ? theme.colors.successActionText : theme.colors.primaryContrast, fontWeight: '700' }}>{isCollected ? 'Collected' : 'Mark collected'}</Text>
  </Pressable>;
}
const styles = StyleSheet.create({ button: { alignItems: 'center', justifyContent: 'center', minHeight: 44, paddingHorizontal: 12 } });

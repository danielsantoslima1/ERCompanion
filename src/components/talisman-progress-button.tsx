import { Pressable, StyleSheet } from 'react-native';
import { AppText as Text } from './app-text';
import { useApp } from '../hooks/use-app';

export function TalismanProgressButton({ id, name, isCollected }: { readonly id: string; readonly name: string; readonly isCollected: boolean }) {
  const app = useApp();
  return <Pressable accessibilityRole="button" accessibilityLabel={`Mark ${name} as ${isCollected ? 'not collected' : 'collected'}`} onPress={() => app.toggleTalismanCollected?.(id)} style={[styles.button, { backgroundColor: isCollected ? app.theme.colors.successActionBackground : app.theme.colors.primary, borderColor: isCollected ? app.theme.colors.success : app.theme.colors.primary, borderRadius: app.theme.borderRadius.medium }]}><Text style={{ color: isCollected ? app.theme.colors.successActionText : app.theme.colors.primaryContrast, fontWeight: '700' }}>{isCollected ? 'Collected' : 'Mark collected'}</Text></Pressable>;
}
const styles = StyleSheet.create({ button: { alignItems: 'center', borderWidth: 1, minHeight: 48, justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 8 } });

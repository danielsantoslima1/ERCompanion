import { useCallback, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, View } from 'react-native';

import type { SpellCategory } from '../data';
import { useApp } from '../hooks/use-app';

interface SpellProgressButtonProps {
  readonly category: SpellCategory;
  readonly id: string;
  readonly isCollected: boolean;
  readonly name: string;
}

export function SpellProgressButton({
  category,
  id,
  isCollected,
  name,
}: SpellProgressButtonProps) {
  const {
    theme,
    toggleIncantationCollected,
    toggleSorceryCollected,
    translations,
  } = useApp();
  const [isSaving, setIsSaving] = useState(false);
  const savingRef = useRef(false);
  const action = isCollected
    ? translations.spells.markAsNotCollected
    : translations.spells.markAsCollected;
  const handlePress = useCallback(async () => {
    if (savingRef.current) return;
    savingRef.current = true;
    setIsSaving(true);
    try {
      await (category === 'sorcery'
        ? toggleSorceryCollected(id)
        : toggleIncantationCollected(id));
    } catch {
      Alert.alert(
        translations.spells.updateErrorTitle,
        translations.spells.updateErrorMessage,
      );
    } finally {
      savingRef.current = false;
      setIsSaving(false);
    }
  }, [
    category,
    id,
    toggleIncantationCollected,
    toggleSorceryCollected,
    translations,
  ]);
  const color = isCollected ? theme.colors.success : theme.colors.primaryContrast;
  return (
    <Pressable
      accessibilityLabel={translations.spells.collectAccessibility(action, name)}
      accessibilityRole="button"
      accessibilityState={{ busy: isSaving, checked: isCollected, disabled: isSaving }}
      disabled={isSaving}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isCollected ? theme.colors.surfaceElevated : theme.colors.primary,
          borderColor: isCollected ? theme.colors.success : theme.colors.primary,
          borderRadius: theme.borderRadius.medium,
          opacity: pressed || isSaving ? 0.7 : 1,
          padding: theme.spacing.small,
        },
      ]}>
      {isSaving ? (
        <View style={styles.row}>
          <ActivityIndicator color={color} size="small" />
          <Text style={[styles.text, { color }]}>{translations.spells.saving}</Text>
        </View>
      ) : (
        <Text style={[styles.text, { color }]}>{action}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { alignItems: 'center', borderWidth: 1, justifyContent: 'center', minHeight: 48 },
  row: { alignItems: 'center', flexDirection: 'row', gap: 8 },
  text: { fontSize: 15, fontWeight: '700', textAlign: 'center' },
});

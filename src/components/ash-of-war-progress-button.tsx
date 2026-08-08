import { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

import { useApp } from '../hooks/use-app';

interface AshOfWarProgressButtonProps {
  readonly id: string;
  readonly isCollected: boolean;
  readonly name: string;
}

export function AshOfWarProgressButton({
  id,
  isCollected,
  name,
}: AshOfWarProgressButtonProps) {
  const { theme, toggleAshOfWarCollected, translations } = useApp();
  const [isSaving, setIsSaving] = useState(false);
  const savingRef = useRef(false);
  const actionLabel = isCollected
    ? translations.ashesOfWar.markAsNotCollected
    : translations.ashesOfWar.markAsCollected;

  const handlePress = useCallback(async () => {
    if (savingRef.current) return;
    savingRef.current = true;
    setIsSaving(true);
    try {
      await toggleAshOfWarCollected(id);
    } catch {
      Alert.alert(
        translations.ashesOfWar.updateErrorTitle,
        translations.ashesOfWar.updateErrorMessage,
      );
    } finally {
      savingRef.current = false;
      setIsSaving(false);
    }
  }, [id, toggleAshOfWarCollected, translations]);

  return (
    <Pressable
      accessibilityLabel={translations.ashesOfWar.collectAccessibility(
        actionLabel,
        name,
      )}
      accessibilityRole="button"
      accessibilityState={{
        busy: isSaving,
        checked: isCollected,
        disabled: isSaving,
      }}
      disabled={isSaving}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isCollected
            ? theme.colors.surfaceElevated
            : theme.colors.primary,
          borderColor: isCollected
            ? theme.colors.success
            : theme.colors.primary,
          borderRadius: theme.borderRadius.medium,
          opacity: pressed || isSaving ? 0.7 : 1,
          paddingHorizontal: theme.spacing.medium,
          paddingVertical: theme.spacing.small,
        },
      ]}>
      {isSaving ? (
        <View style={styles.content}>
          <ActivityIndicator
            color={
              isCollected
                ? theme.colors.success
                : theme.colors.primaryContrast
            }
            size="small"
          />
          <Text
            style={[
              styles.text,
              {
                color: isCollected
                  ? theme.colors.success
                  : theme.colors.primaryContrast,
              },
            ]}>
            {translations.ashesOfWar.saving}
          </Text>
        </View>
      ) : (
        <Text
          style={[
            styles.text,
            {
              color: isCollected
                ? theme.colors.success
                : theme.colors.primaryContrast,
            },
          ]}>
          {actionLabel}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 48,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});

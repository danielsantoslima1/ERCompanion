import { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useApp } from '../hooks/use-app';

interface BossProgressButtonProps {
  readonly id: string;
  readonly isDefeated: boolean;
}

export function BossProgressButton({
  id,
  isDefeated,
}: BossProgressButtonProps) {
  const {
    markBossDefeated,
    markBossNotDefeated,
    theme,
    translations,
  } = useApp();
  const [isSaving, setIsSaving] = useState(false);
  const savingRef = useRef(false);
  const actionLabel = isDefeated
    ? translations.region.markAsNotDefeated
    : translations.region.markAsDefeated;

  const handlePress = useCallback(async () => {
    if (savingRef.current) return;

    savingRef.current = true;
    setIsSaving(true);
    try {
      if (isDefeated) {
        await markBossNotDefeated(id);
      } else {
        await markBossDefeated(id);
      }
    } catch {
      Alert.alert(
        translations.region.updateErrorTitle,
        translations.region.updateErrorMessage,
      );
    } finally {
      savingRef.current = false;
      setIsSaving(false);
    }
  }, [
    id,
    isDefeated,
    markBossDefeated,
    markBossNotDefeated,
    translations,
  ]);

  return (
    <Pressable
      accessibilityLabel={actionLabel}
      accessibilityRole="button"
      accessibilityState={{
        busy: isSaving,
        disabled: isSaving,
        checked: isDefeated,
      }}
      disabled={isSaving}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isDefeated
            ? theme.colors.surfaceElevated
            : theme.colors.primary,
          borderColor: isDefeated
            ? theme.colors.success
            : theme.colors.primary,
          borderRadius: theme.borderRadius.medium,
          opacity: pressed || isSaving ? 0.7 : 1,
          paddingHorizontal: theme.spacing.medium,
          paddingVertical: theme.spacing.small,
        },
      ]}>
      {isSaving ? (
        <View style={styles.buttonContent}>
          <ActivityIndicator
            color={
              isDefeated
                ? theme.colors.success
                : theme.colors.primaryContrast
            }
            size="small"
          />
          <Text
            style={[
              styles.buttonText,
              {
                color: isDefeated
                  ? theme.colors.success
                  : theme.colors.primaryContrast,
              },
            ]}>
            {translations.region.saving}
          </Text>
        </View>
      ) : (
        <Text
          style={[
            styles.buttonText,
            {
              color: isDefeated
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
  buttonContent: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});

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

interface BossCardProps {
  id: string;
  name: string;
  location: string;
  isDefeated: boolean;
}

export function BossCard({
  id,
  name,
  location,
  isDefeated,
}: BossCardProps) {
  const {
    markBossDefeated,
    markBossNotDefeated,
    theme,
    translations,
  } = useApp();
  const [isSaving, setIsSaving] = useState(false);
  const savingRef = useRef(false);
  const status = isDefeated
    ? translations.region.defeatedStatus
    : translations.region.notDefeatedStatus;
  const actionLabel = isDefeated
    ? translations.region.markAsNotDefeated
    : translations.region.markAsDefeated;

  const handlePress = useCallback(async () => {
    if (savingRef.current) {
      return;
    }

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
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderColor: isDefeated
            ? theme.colors.success
            : theme.colors.border,
          borderRadius: theme.borderRadius.medium,
          gap: theme.spacing.medium,
          padding: theme.spacing.medium,
        },
      ]}>
      <View
        accessibilityLabel={translations.region.bossCardAccessibility(
          name,
          location,
          status,
        )}
        accessible
        style={{ gap: theme.spacing.extraSmall }}>
        <Text style={[styles.name, { color: theme.colors.textPrimary }]}>
          {name}
        </Text>
        <Text style={[styles.location, { color: theme.colors.textSecondary }]}>
          {location}
        </Text>
        <Text
          style={[
            styles.status,
            {
              color: isDefeated
                ? theme.colors.success
                : theme.colors.textSecondary,
            },
          ]}>
          {status}
        </Text>
      </View>

      <Pressable
        accessibilityLabel={actionLabel}
        accessibilityRole="button"
        accessibilityState={{ busy: isSaving, disabled: isSaving }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  location: {
    fontSize: 15,
    lineHeight: 21,
  },
  status: {
    fontSize: 14,
    fontWeight: '700',
  },
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

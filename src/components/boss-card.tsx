import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useApp } from '../hooks/use-app';
import { BossProgressButton } from './boss-progress-button';

interface BossCardProps {
  id: string;
  name: string;
  location: string;
  availability?: string;
  isDefeated: boolean;
  onViewDetails?: () => void;
}

export function BossCard({
  id,
  name,
  location,
  availability,
  isDefeated,
  onViewDetails,
}: BossCardProps) {
  const { theme, translations } = useApp();
  const status = isDefeated
    ? translations.region.defeatedStatus
    : translations.region.notDefeatedStatus;

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
        {availability ? (
          <Text style={[styles.location, { color: theme.colors.textSecondary }]}>
            {availability}
          </Text>
        ) : null}
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

      <View style={{ gap: theme.spacing.small }}>
        {onViewDetails ? (
          <Pressable
            accessibilityLabel={translations.bossDetails.viewDetailsFor(name)}
            accessibilityRole="button"
            onPress={onViewDetails}
            style={({ pressed }) => [
              styles.detailsButton,
              {
                borderColor: theme.colors.primary,
                borderRadius: theme.borderRadius.medium,
                opacity: pressed ? 0.7 : 1,
                paddingHorizontal: theme.spacing.medium,
                paddingVertical: theme.spacing.small,
              },
            ]}>
          <Text
            style={[
                  styles.buttonText,
                  { color: theme.colors.primary },
            ]}>
                {translations.bossDetails.viewDetails}
          </Text>
          </Pressable>
        ) : null}
        <BossProgressButton id={id} isDefeated={isDefeated} />
      </View>
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
  detailsButton: {
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});

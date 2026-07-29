import { StyleSheet, Text, View } from 'react-native';

import { useApp } from '../hooks/use-app';
import { BossProgressButton } from './boss-progress-button';
import { DetailsButton } from './details-button';

interface BossCardProps {
  id: string;
  name: string;
  regionName?: string;
  location: string;
  isDefeated: boolean;
  onViewDetails?: () => void;
}

export function BossCard({
  id,
  name,
  regionName,
  location,
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
          regionName,
          location,
          status,
        )}
        accessible
        style={{ gap: theme.spacing.extraSmall }}>
        <View style={[styles.heading, { gap: theme.spacing.small }]}>
          <Text style={[styles.name, { color: theme.colors.textPrimary }]}>
            {name}
          </Text>
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            pointerEvents="none"
            style={[
              styles.statusIcon,
              {
                color: isDefeated
                  ? theme.colors.success
                  : theme.colors.textSecondary,
              },
            ]}
            testID={
              isDefeated
                ? 'boss-status-icon-defeated'
                : 'boss-status-icon-not-defeated'
            }>
            {isDefeated ? '✓' : '⚔'}
          </Text>
        </View>
        {regionName ? (
          <Text style={[styles.region, { color: theme.colors.accent }]}>
            {regionName}
          </Text>
        ) : null}
        <Text style={[styles.location, { color: theme.colors.textSecondary }]}>
          {location}
        </Text>
      </View>

      <View style={{ gap: theme.spacing.small }}>
        {onViewDetails ? (
          <DetailsButton
            accessibilityLabel={translations.bossDetails.viewDetailsFor(name)}
            label={translations.bossDetails.viewDetails}
            onPress={onViewDetails}
          />
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
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    flexShrink: 1,
  },
  heading: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusIcon: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26,
    textAlign: 'center',
    width: 28,
  },
  location: {
    fontSize: 15,
    lineHeight: 21,
  },
  region: {
    fontSize: 14,
    fontWeight: '600',
  },
});

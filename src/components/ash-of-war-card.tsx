import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

import { useApp } from '../hooks/use-app';
import { AshOfWarProgressButton } from './ash-of-war-progress-button';

interface AshOfWarCardProps {
  readonly id: string;
  readonly isCollected: boolean;
  readonly location: string;
  readonly name: string;
  readonly onViewDetails: () => void;
}

export function AshOfWarCard({
  id,
  isCollected,
  location,
  name,
  onViewDetails,
}: AshOfWarCardProps) {
  const { theme, translations } = useApp();
  const status = isCollected
    ? translations.ashesOfWar.collectedStatus
    : translations.ashesOfWar.notCollectedStatus;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderColor: isCollected
            ? theme.colors.success
            : theme.colors.border,
          borderRadius: theme.borderRadius.medium,
          gap: theme.spacing.medium,
          padding: theme.spacing.medium,
        },
      ]}>
      <View
        accessibilityLabel={translations.ashesOfWar.cardAccessibility(
          name,
          location,
          status,
        )}
        accessible
        style={{ gap: theme.spacing.extraSmall }}>
        <View style={[styles.heading, { gap: theme.spacing.small }]}>
          <Text style={[styles.name, { color: theme.colors.textPrimary }]}>
            {name}
          </Text>
          <View
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            pointerEvents="none"
            style={styles.statusIcon}
            testID={
              isCollected
                ? 'ash-status-icon-collected'
                : 'ash-status-icon-not-collected'
            }>
            {isCollected ? (
              <Text
                style={[
                  styles.check,
                  { color: theme.colors.success },
                ]}>
                ✓
              </Text>
            ) : (
              <MaterialCommunityIcons
                color={theme.colors.textSecondary}
                name="ghost-outline"
                size={24}
              />
            )}
          </View>
        </View>
        <Text style={[styles.location, { color: theme.colors.textSecondary }]}>
          {location}
        </Text>
      </View>

      <View style={{ gap: theme.spacing.small }}>
        <Pressable
          accessibilityLabel={translations.ashesOfWar.viewDetailsFor(name)}
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
          <Text style={[styles.buttonText, { color: theme.colors.primary }]}>
            {translations.ashesOfWar.viewDetails}
          </Text>
        </Pressable>
        <AshOfWarProgressButton
          id={id}
          isCollected={isCollected}
          name={name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderWidth: 1 },
  heading: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    flexShrink: 1,
    fontSize: 18,
    fontWeight: '700',
  },
  statusIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 28,
    width: 30,
  },
  check: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26,
  },
  location: {
    fontSize: 15,
    lineHeight: 21,
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

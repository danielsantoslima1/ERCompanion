import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';

import type { SpellCategory } from '../data';
import { useApp } from '../hooks/use-app';
import { DetailsButton } from './details-button';
import { SpellProgressButton } from './spell-progress-button';

interface SpellCardProps {
  readonly category: SpellCategory;
  readonly id: string;
  readonly isCollected: boolean;
  readonly location: string;
  readonly name: string;
  readonly spoilerMatch: boolean;
  readonly onViewDetails: () => void;
}

export function SpellCard(props: SpellCardProps) {
  const { theme, translations } = useApp();
  const status = props.isCollected
    ? translations.spells.collected
    : translations.spells.notCollected;
  return (
    <View style={[
      styles.card,
      {
        backgroundColor: props.isCollected
          ? theme.colors.successBackground
          : theme.colors.cardAccent,
        borderColor: props.isCollected
          ? theme.colors.success
          : theme.colors.cardAccentBorder,
        borderRadius: theme.borderRadius.medium,
        gap: theme.spacing.medium,
        padding: theme.spacing.medium,
      },
    ]}>
      <View
        accessibilityLabel={translations.spells.cardAccessibility(
          props.name,
          props.location,
          status,
        )}
        accessible>
        <View style={[styles.heading, { gap: theme.spacing.small }]}>
          <Text style={[styles.name, { color: theme.colors.cardAccentText }]}>
            {props.name}
          </Text>
          <View
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            pointerEvents="none"
            style={styles.icon}
            testID={`${props.category}-status-${props.isCollected ? 'collected' : 'not-collected'}`}>
            {props.isCollected ? (
              <Text style={[styles.check, { color: theme.colors.success }]}>✓</Text>
            ) : (
              <Ionicons
                color={theme.colors.cardAccentIcon}
                name={props.category === 'sorcery' ? 'sparkles-outline' : 'sunny-outline'}
                size={24}
              />
            )}
          </View>
        </View>
        <Text style={[styles.location, { color: theme.colors.textSecondary }]}>
          {props.location}
        </Text>
        {props.spoilerMatch ? (
          <Text style={[styles.spoilerMatch, { color: theme.colors.accent }]}>
            {translations.spells.spoilerMatch}
          </Text>
        ) : null}
      </View>
      <View style={{ gap: theme.spacing.small }}>
        <DetailsButton
          accessibilityLabel={translations.spells.viewDetailsFor(props.name)}
          label={translations.spells.viewDetails}
          onPress={props.onViewDetails}
        />
        <SpellProgressButton
          category={props.category}
          id={props.id}
          isCollected={props.isCollected}
          name={props.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1 },
  heading: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' },
  name: { flex: 1, flexShrink: 1, fontSize: 18, fontWeight: '700' },
  icon: { alignItems: 'center', justifyContent: 'center', minHeight: 28, width: 30 },
  check: { fontSize: 22, fontWeight: '700', lineHeight: 26 },
  location: { fontSize: 15, lineHeight: 21, marginTop: 4 },
  spoilerMatch: { fontSize: 13, fontWeight: '700', marginTop: 6 },
});

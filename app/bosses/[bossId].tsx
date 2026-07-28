import {
  router,
  useLocalSearchParams,
  useNavigation,
  useRootNavigationState,
} from 'expo-router';
import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BossProgressButton } from '@/src/components/boss-progress-button';
import {
  bosses,
  findBossWithRegion,
  regions,
  type ParticipantCountRange,
} from '@/src/data';
import { useApp } from '@/src/hooks/use-app';
import { getLocalizedText } from '@/src/i18n';

function getBossId(parameter: string | string[] | undefined): string {
  return Array.isArray(parameter) ? (parameter[0] ?? '') : (parameter ?? '');
}

function getNestedRegionId(route: unknown): string | undefined {
  if (typeof route !== 'object' || route === null) return undefined;
  if (
    'name' in route &&
    route.name === 'regions/[regionId]' &&
    'params' in route &&
    typeof route.params === 'object' &&
    route.params !== null &&
    'regionId' in route.params &&
    typeof route.params.regionId === 'string'
  ) {
    return route.params.regionId;
  }
  if (!('state' in route)) return undefined;
  const state = route.state;
  if (
    typeof state !== 'object' ||
    state === null ||
    !('routes' in state) ||
    !Array.isArray(state.routes) ||
    state.routes.length === 0
  ) {
    return undefined;
  }
  const index =
    'index' in state && typeof state.index === 'number'
      ? state.index
      : state.routes.length - 1;
  return getNestedRegionId(state.routes[index]);
}

export function getPreviousRegionId(state: unknown): string | undefined {
  if (
    typeof state !== 'object' ||
    state === null ||
    !('routes' in state) ||
    !Array.isArray(state.routes) ||
    !('index' in state) ||
    typeof state.index !== 'number' ||
    state.index < 1
  ) {
    return undefined;
  }
  return getNestedRegionId(state.routes[state.index - 1]);
}

function isParticipantRange(
  value: number | ParticipantCountRange | undefined,
): value is ParticipantCountRange {
  return typeof value === 'object' && value !== null;
}

interface DetailSectionProps {
  readonly children: ReactNode;
  readonly title: string;
}

function DetailSection({ children, title }: DetailSectionProps) {
  const { theme } = useApp();
  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: theme.borderRadius.medium,
          gap: theme.spacing.small,
          padding: theme.spacing.medium,
        },
      ]}>
      <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>
        {title}
      </Text>
      {children}
    </View>
  );
}

export default function BossDetailScreen() {
  const { bossId: bossIdParameter } = useLocalSearchParams<{
    bossId?: string | string[];
  }>();
  const { defeatedBossIds, language, theme, translations } = useApp();
  const navigation = useNavigation();
  const rootNavigationState = useRootNavigationState();
  const previousRegionId = getPreviousRegionId(rootNavigationState);
  const isRedirectingRef = useRef(false);
  const bossId = getBossId(bossIdParameter);
  const resolved = useMemo(
    () => findBossWithRegion(bosses, regions, bossId),
    [bossId],
  );

  useEffect(() => {
    if (
      !resolved ||
      previousRegionId === resolved.region.id
    ) {
      return;
    }

    return navigation.addListener('beforeRemove', (event) => {
      if (isRedirectingRef.current) return;
      event.preventDefault();
      isRedirectingRef.current = true;
      router.replace({
        pathname: '/regions/[regionId]',
        params: { regionId: resolved.region.id },
      });
    });
  }, [navigation, previousRegionId, resolved]);

  if (!resolved) {
    return (
      <>
        <SafeAreaView
          edges={['left', 'right', 'bottom']}
          style={[
            styles.centered,
            {
              backgroundColor: theme.colors.background,
              gap: theme.spacing.medium,
              padding: theme.spacing.large,
            },
          ]}>
          <Text
            accessibilityRole="header"
            style={[styles.title, { color: theme.colors.textPrimary }]}>
            {translations.bossDetails.encounterNotFound}
          </Text>
          <Text
            style={[styles.bodyText, { color: theme.colors.textSecondary }]}>
            {translations.bossDetails.encounterNotFoundMessage}
          </Text>
          <PrimaryButton
            label={translations.bossDetails.back}
            onPress={() =>
              router.canGoBack() ? router.back() : router.replace('/')
            }
          />
        </SafeAreaView>
      </>
    );
  }

  const { boss, region } = resolved;
  const name = getLocalizedText(boss.name, language);
  const regionName = getLocalizedText(region.name, language);
  const location = getLocalizedText(boss.location, language);
  const availability = boss.availability
    ? getLocalizedText(boss.availability, language)
    : undefined;
  const isDefeated = defeatedBossIds.includes(boss.id);
  const status = isDefeated
    ? translations.bossDetails.defeated
    : translations.bossDetails.notDefeated;
  const participants = (boss.mainParticipants ?? []).map((participant) =>
    getLocalizedText(participant, language),
  );
  const hasRelevantParticipants =
    participants.length > 0 &&
    (participants.length > 1 ||
      participants[0] !== name ||
      boss.variableMainParticipantCount !== undefined ||
      isParticipantRange(boss.mainParticipantCount));
  const phases = (boss.phases ?? []).map((phase) => ({
    name: getLocalizedText(phase.name, language),
    location: phase.location
      ? getLocalizedText(phase.location, language)
      : undefined,
  }));
  const phaseNames = new Set(phases.map((phase) => phase.name));
  const localizedBarNames = (boss.barNames ?? []).map((barName) =>
    getLocalizedText(barName, language),
  );
  const barsMatchParticipants =
    localizedBarNames.length === participants.length &&
    localizedBarNames.every(
      (barName, index) => barName === participants[index],
    );
  const barNames = barsMatchParticipants
    ? []
    : localizedBarNames.filter(
        (barName) => barName !== name && !phaseNames.has(barName),
      );
  const summons = (boss.summons ?? []).map((summon) =>
    getLocalizedText(summon, language),
  );
  const auxiliaryEnemies = (boss.auxiliaryEnemies ?? []).map((enemy) =>
    getLocalizedText(enemy, language),
  );
  const mainParticipantCount = boss.mainParticipantCount;
  const participantSummary = isParticipantRange(mainParticipantCount)
    ? translations.bossDetails.participantRange(
        mainParticipantCount.min,
        mainParticipantCount.max,
      )
    : mainParticipantCount !== undefined
      ? translations.bossDetails.participantCount(mainParticipantCount)
      : undefined;
  const hasVariableComposition =
    boss.variableMainParticipantCount !== undefined ||
    isParticipantRange(mainParticipantCount);

  return (
    <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={[
          styles.screen,
          { backgroundColor: theme.colors.background },
        ]}>
        <ScrollView
          contentContainerStyle={[
            styles.content,
            {
              gap: theme.spacing.medium,
              padding: theme.spacing.large,
            },
          ]}>
          <View style={{ gap: theme.spacing.small }}>
            <Text
              accessibilityRole="header"
              style={[styles.title, { color: theme.colors.textPrimary }]}>
              {name}
            </Text>
            <Text style={[styles.eyebrow, { color: theme.colors.accent }]}>
              {translations.bossDetails.singleEncounter}
            </Text>
          </View>

          <DetailSection title={translations.bossDetails.region}>
            <Text style={[styles.bodyText, { color: theme.colors.textPrimary }]}>
              {regionName}
            </Text>
          </DetailSection>

          <DetailSection title={translations.bossDetails.location}>
            <Text style={[styles.bodyText, { color: theme.colors.textPrimary }]}>
              {location}
            </Text>
          </DetailSection>

          {availability ? (
            <DetailSection title={translations.bossDetails.availability}>
              <Text
                style={[styles.bodyText, { color: theme.colors.textPrimary }]}>
                {availability}
              </Text>
            </DetailSection>
          ) : null}

          <DetailSection title={translations.bossDetails.status}>
            <Text
              accessibilityLiveRegion="polite"
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
            <BossProgressButton id={boss.id} isDefeated={isDefeated} />
          </DetailSection>

          {barNames.length > 0 ? (
            <DetailSection title={translations.bossDetails.bossBarNames}>
              <DetailList items={barNames} />
            </DetailSection>
          ) : null}

          {hasRelevantParticipants ? (
            <DetailSection title={translations.bossDetails.participants}>
              {participantSummary ? (
                <Text
                  style={[
                    styles.bodyText,
                    { color: theme.colors.textSecondary },
                  ]}>
                  {participantSummary}
                </Text>
              ) : null}
              {hasVariableComposition ? (
                <Text style={[styles.status, { color: theme.colors.accent }]}>
                  {translations.bossDetails.variableComposition}
                </Text>
              ) : null}
              {boss.variableMainParticipantCount !== undefined ? (
                <Text
                  style={[
                    styles.bodyText,
                    { color: theme.colors.textSecondary },
                  ]}>
                  {translations.bossDetails.variableParticipantCount(
                    boss.variableMainParticipantCount,
                  )}
                </Text>
              ) : null}
              <DetailList items={participants} />
            </DetailSection>
          ) : null}

          {phases.length > 0 ? (
            <DetailSection title={translations.bossDetails.phases}>
              <Text
                style={[
                  styles.bodyText,
                  { color: theme.colors.textSecondary },
                ]}>
                {translations.bossDetails.sameProgressUnit}
              </Text>
              <View style={{ gap: theme.spacing.small }}>
                {phases.map((phase, index) => (
                  <View key={`${phase.name}-${index}`}>
                    <Text
                      style={[
                        styles.bodyText,
                        { color: theme.colors.textPrimary },
                      ]}>
                      {index + 1}. {phase.name}
                    </Text>
                    {phase.location ? (
                      <Text
                        style={[
                          styles.secondaryText,
                          { color: theme.colors.textSecondary },
                        ]}>
                        {phase.location}
                      </Text>
                    ) : null}
                  </View>
                ))}
              </View>
            </DetailSection>
          ) : null}

          {summons.length > 0 ? (
            <DetailSection title={translations.bossDetails.summons}>
              <DetailList items={summons} />
            </DetailSection>
          ) : null}

          {auxiliaryEnemies.length > 0 ? (
            <DetailSection title={translations.bossDetails.supportingEnemies}>
              <DetailList items={auxiliaryEnemies} />
            </DetailSection>
          ) : null}
        </ScrollView>
    </SafeAreaView>
  );
}

function DetailList({ items }: { readonly items: readonly string[] }) {
  const { theme } = useApp();
  return (
    <View style={{ gap: theme.spacing.extraSmall }}>
      {items.map((item, index) => (
        <Text
          key={`${item}-${index}`}
          style={[styles.bodyText, { color: theme.colors.textPrimary }]}>
          • {item}
        </Text>
      ))}
    </View>
  );
}

function PrimaryButton({
  label,
  onPress,
}: {
  readonly label: string;
  readonly onPress: () => void;
}) {
  const { theme } = useApp();
  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.primaryButton,
        {
          backgroundColor: theme.colors.primary,
          borderRadius: theme.borderRadius.medium,
          opacity: pressed ? 0.7 : 1,
          padding: theme.spacing.medium,
        },
      ]}>
      <Text
        style={[
          styles.primaryButtonText,
          { color: theme.colors.primaryContrast },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingBottom: 48,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 38,
  },
  eyebrow: {
    fontSize: 14,
    fontWeight: '700',
  },
  section: {
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 23,
  },
  secondaryText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
  status: {
    fontSize: 16,
    fontWeight: '700',
  },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

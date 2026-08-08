import {
  router,
  useLocalSearchParams,
  useNavigation,
  useRootNavigationState,
} from 'expo-router';
import type { Href } from 'expo-router';
import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { AppText as Text } from '@/src/components/app-text';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AshOfWarProgressButton } from '@/src/components/ash-of-war-progress-button';
import {
  ashOfWarUsesEnglishFallback,
  getAshOfWarById,
  resolveLocalizedList,
  resolveLocalizedValue,
  type AshOfWarContentPack,
  type LocalizedOptionalValue,
} from '@/src/data';
import { useApp } from '@/src/hooks/use-app';

function getParameter(parameter: string | string[] | undefined): string {
  return Array.isArray(parameter) ? (parameter[0] ?? '') : (parameter ?? '');
}

function getNestedRouteName(route: unknown): string | undefined {
  if (typeof route !== 'object' || route === null) return undefined;
  if ('state' in route) {
    const state = route.state;
    if (
      typeof state === 'object' &&
      state !== null &&
      'routes' in state &&
      Array.isArray(state.routes) &&
      state.routes.length > 0
    ) {
      const index =
        'index' in state && typeof state.index === 'number'
          ? state.index
          : state.routes.length - 1;
      return getNestedRouteName(state.routes[index]);
    }
  }
  return 'name' in route && typeof route.name === 'string'
    ? route.name
    : undefined;
}

export function hasPreviousAshOfWarListRoute(state: unknown): boolean {
  if (
    typeof state !== 'object' ||
    state === null ||
    !('routes' in state) ||
    !Array.isArray(state.routes) ||
    !('index' in state) ||
    typeof state.index !== 'number' ||
    state.index < 1
  ) {
    return false;
  }
  const routeName = getNestedRouteName(state.routes[state.index - 1]);
  return (
    routeName === 'ashes-of-war/index' ||
    routeName === 'ashes-of-war/base-game' ||
    routeName === 'ashes-of-war/shadow-of-the-erdtree'
  );
}

function getFallbackRoute(contentPack: AshOfWarContentPack): Href {
  return contentPack === 'base-game'
    ? '/ashes-of-war/base-game'
    : '/ashes-of-war/shadow-of-the-erdtree';
}

function DetailSection({
  children,
  title,
}: {
  readonly children: ReactNode;
  readonly title: string;
}) {
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

export default function AshOfWarDetailScreen() {
  const { ashOfWarId: parameter } = useLocalSearchParams<{
    ashOfWarId?: string | string[];
  }>();
  const {
    collectedAshOfWarIds,
    language,
    theme,
    translations,
  } = useApp();
  const navigation = useNavigation();
  const rootNavigationState = useRootNavigationState();
  const hasPreviousList = hasPreviousAshOfWarListRoute(rootNavigationState);
  const isRedirectingRef = useRef(false);
  const id = getParameter(parameter);
  const entry = useMemo(() => getAshOfWarById(id), [id]);

  useEffect(() => {
    if (!entry || hasPreviousList) return;
    return navigation.addListener('beforeRemove', (event) => {
      if (isRedirectingRef.current) return;
      event.preventDefault();
      isRedirectingRef.current = true;
      router.replace(getFallbackRoute(entry.contentPack));
    });
  }, [entry, hasPreviousList, navigation]);

  if (!entry) {
    return (
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
        <Text variant="display"
          accessibilityRole="header"
          style={[styles.title, { color: theme.colors.textPrimary }]}>
          {translations.ashesOfWar.notFoundTitle}
        </Text>
        <Text style={[styles.body, { color: theme.colors.textSecondary }]}>
          {translations.ashesOfWar.notFoundMessage}
        </Text>
        <Pressable
          accessibilityLabel={translations.ashesOfWar.back}
          accessibilityRole="button"
          onPress={() =>
            router.canGoBack()
              ? router.back()
              : router.replace('/ashes-of-war' as Href)
          }
          style={({ pressed }) => [
            styles.primaryButton,
            {
              backgroundColor: theme.colors.primary,
              borderRadius: theme.borderRadius.medium,
              opacity: pressed ? 0.7 : 1,
              padding: theme.spacing.medium,
            },
          ]}>
          <Text style={{ color: theme.colors.primaryContrast, fontWeight: '700' }}>
            {translations.ashesOfWar.back}
          </Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const resolve = (value: { readonly ptBR: string | null; readonly en: string }) =>
    resolveLocalizedValue(value, language).value;
  const resolveOptional = (value: LocalizedOptionalValue): string | null =>
    value ? resolve(value) : null;
  const name = resolve(entry.name);
  const isCollected = collectedAshOfWarIds.includes(entry.id);
  const status = isCollected
    ? translations.ashesOfWar.collectedStatus
    : translations.ashesOfWar.notCollectedStatus;
  const equipment = resolveLocalizedList(
    entry.compatibleEquipment,
    language,
  ).value;
  const optionalSections = [
    [translations.ashesOfWar.skillType, resolveOptional(entry.skillType)],
    [
      translations.ashesOfWar.specialEffects,
      resolveOptional(entry.specialEffects),
    ],
    [translations.ashesOfWar.limitations, resolveOptional(entry.limitations)],
    [translations.ashesOfWar.notes, resolveOptional(entry.relevantNotes)],
  ] as const;

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[styles.screen, { backgroundColor: theme.colors.background }]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { gap: theme.spacing.medium, padding: theme.spacing.large },
        ]}>
        <Text variant="display"
          accessibilityRole="header"
          style={[styles.title, { color: theme.colors.textPrimary }]}>
          {name}
        </Text>
        {ashOfWarUsesEnglishFallback(entry, language) ? (
          <Text
            accessibilityLiveRegion="polite"
            style={[
              styles.notice,
              {
                backgroundColor: theme.colors.surfaceElevated,
                borderColor: theme.colors.border,
                color: theme.colors.textSecondary,
                padding: theme.spacing.small,
              },
            ]}>
            {translations.ashesOfWar.fallbackNotice}
          </Text>
        ) : null}

        <DetailSection title={translations.ashesOfWar.origin}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
            {entry.contentPack === 'base-game'
              ? translations.common.baseGame
              : translations.common.expansion}
          </Text>
        </DetailSection>
        <DetailSection title={translations.ashesOfWar.primaryLocation}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
            {resolve(entry.primaryLocation)}
          </Text>
        </DetailSection>
        <DetailSection title={translations.ashesOfWar.primaryAcquisition}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
            {resolve(entry.primaryAcquisition)}
          </Text>
        </DetailSection>
        <DetailSection title={translations.ashesOfWar.acquisitionMethods}>
          <View style={{ gap: theme.spacing.medium }}>
            {entry.acquisitionMethods.map((method, index) => (
              <View key={`${entry.id}-acquisition-${index}`}>
                <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
                  {index + 1}. {resolve(method.location)}
                </Text>
                <Text style={[styles.body, { color: theme.colors.textSecondary }]}>
                  {resolve(method.method)}
                </Text>
                {method.notes ? (
                  <Text style={[styles.secondary, { color: theme.colors.textSecondary }]}>
                    {resolve(method.notes)}
                  </Text>
                ) : null}
              </View>
            ))}
          </View>
        </DetailSection>
        <DetailSection title={translations.ashesOfWar.summary}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
            {resolve(entry.summary)}
          </Text>
        </DetailSection>
        <DetailSection title={translations.ashesOfWar.skill}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
            {resolve(entry.skillName)}
          </Text>
        </DetailSection>
        <DetailSection title={translations.ashesOfWar.affinity}>
          <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
            {resolve(entry.affinity)}
          </Text>
        </DetailSection>
        <DetailSection title={translations.ashesOfWar.compatibleEquipment}>
          <View style={{ gap: theme.spacing.extraSmall }}>
            {equipment.map((item) => (
              <Text
                key={item}
                style={[styles.body, { color: theme.colors.textPrimary }]}>
                • {item}
              </Text>
            ))}
          </View>
        </DetailSection>
        {entry.fpCost !== null ? (
          <DetailSection title={translations.ashesOfWar.fpCost}>
            <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
              {entry.fpCost}
            </Text>
          </DetailSection>
        ) : null}
        {optionalSections.map(([title, value]) =>
          value ? (
            <DetailSection key={title} title={title}>
              <Text style={[styles.body, { color: theme.colors.textPrimary }]}>
                {value}
              </Text>
            </DetailSection>
          ) : null,
        )}
        <DetailSection title={translations.ashesOfWar.collectionStatus}>
          <Text
            accessibilityLiveRegion="polite"
            style={[
              styles.status,
              {
                color: isCollected
                  ? theme.colors.success
                  : theme.colors.textSecondary,
              },
            ]}>
            {status}
          </Text>
          <AshOfWarProgressButton
            id={entry.id}
            isCollected={isCollected}
            name={name}
          />
        </DetailSection>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { paddingBottom: 48 },
  centered: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 30, fontWeight: '800', lineHeight: 38 },
  notice: { borderWidth: 1, fontSize: 14, lineHeight: 20 },
  section: { borderWidth: 1 },
  sectionTitle: { fontSize: 16, fontWeight: '800' },
  body: { fontSize: 16, lineHeight: 23 },
  secondary: { fontSize: 14, lineHeight: 20, marginTop: 2 },
  status: { fontSize: 16, fontWeight: '700' },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
});

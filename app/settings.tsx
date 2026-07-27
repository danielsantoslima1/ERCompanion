import { useCallback, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  SettingsOptionGroup,
  type SettingsOption,
} from '@/src/components/settings-option-group';
import { useApp } from '@/src/hooks/use-app';
import type { Language, ThemePreference } from '@/src/types';

export default function SettingsScreen() {
  const {
    defeatedBossCount,
    language,
    resetProgress,
    setLanguage,
    setThemePreference,
    theme,
    themePreference,
    translations,
  } = useApp();
  const [savingLanguage, setSavingLanguage] = useState<Language | null>(null);
  const [savingTheme, setSavingTheme] = useState<ThemePreference | null>(null);
  const [isResettingProgress, setIsResettingProgress] = useState(false);
  const isSavingLanguageRef = useRef(false);
  const isSavingThemeRef = useRef(false);
  const isResettingProgressRef = useRef(false);

  const languageOptions = useMemo<readonly SettingsOption<Language>[]>(
    () => [
      {
        value: 'pt-BR',
        label: translations.settings.portuguese,
        description: translations.settings.portugueseDescription,
      },
      {
        value: 'en',
        label: translations.settings.english,
        description: translations.settings.englishDescription,
      },
    ],
    [translations],
  );
  const themeOptions = useMemo<readonly SettingsOption<ThemePreference>[]>(
    () => [
      {
        value: 'system',
        label: translations.settings.system,
        description: translations.settings.systemDescription,
      },
      {
        value: 'light',
        label: translations.settings.light,
        description: translations.settings.lightDescription,
      },
      {
        value: 'dark',
        label: translations.settings.dark,
        description: translations.settings.darkDescription,
      },
    ],
    [translations],
  );

  const showSaveError = useCallback(() => {
    Alert.alert(
      translations.settings.saveErrorTitle,
      translations.settings.saveErrorMessage,
    );
  }, [translations]);

  const handleLanguageSelect = useCallback(
    async (nextLanguage: Language): Promise<void> => {
      if (isSavingLanguageRef.current || nextLanguage === language) {
        return;
      }

      isSavingLanguageRef.current = true;
      setSavingLanguage(nextLanguage);
      try {
        await setLanguage(nextLanguage);
      } catch {
        showSaveError();
      } finally {
        isSavingLanguageRef.current = false;
        setSavingLanguage(null);
      }
    },
    [language, setLanguage, showSaveError],
  );

  const handleThemeSelect = useCallback(
    async (nextTheme: ThemePreference): Promise<void> => {
      if (isSavingThemeRef.current || nextTheme === themePreference) {
        return;
      }

      isSavingThemeRef.current = true;
      setSavingTheme(nextTheme);
      try {
        await setThemePreference(nextTheme);
      } catch {
        showSaveError();
      } finally {
        isSavingThemeRef.current = false;
        setSavingTheme(null);
      }
    },
    [setThemePreference, showSaveError, themePreference],
  );

  const handleResetProgress = useCallback(async (): Promise<void> => {
    if (isResettingProgressRef.current) {
      return;
    }

    isResettingProgressRef.current = true;
    setIsResettingProgress(true);
    try {
      await resetProgress();
      Alert.alert(
        translations.settings.progressManagement,
        translations.resetConfirmation.success,
      );
    } catch {
      Alert.alert(
        translations.resetConfirmation.errorTitle,
        translations.resetConfirmation.errorMessage,
      );
    } finally {
      isResettingProgressRef.current = false;
      setIsResettingProgress(false);
    }
  }, [resetProgress, translations]);

  const confirmResetProgress = useCallback(() => {
    if (isResettingProgressRef.current) {
      return;
    }

    Alert.alert(
      translations.resetConfirmation.title,
      translations.resetConfirmation.message,
      [
        {
          text: translations.resetConfirmation.cancel,
          style: 'cancel',
        },
        {
          text: translations.resetConfirmation.confirm,
          style: 'destructive',
          onPress: () => {
            void handleResetProgress();
          },
        },
      ],
    );
  }, [handleResetProgress, translations]);

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[
        styles.safeArea,
        { backgroundColor: theme.colors.background },
      ]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            gap: theme.spacing.extraLarge,
            padding: theme.spacing.large,
            paddingBottom: theme.spacing.extraLarge,
          },
        ]}
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ gap: theme.spacing.small }}>
          <Text
            accessibilityRole="header"
            style={[styles.title, { color: theme.colors.textPrimary }]}>
            {translations.settings.title}
          </Text>
          <Text
            style={[
              styles.description,
              { color: theme.colors.textSecondary },
            ]}>
            {translations.settings.description}
          </Text>
        </View>

        <SettingsOptionGroup
          description={translations.settings.languageDescription}
          onSelect={(value) => {
            void handleLanguageSelect(value);
          }}
          options={languageOptions}
          savingValue={savingLanguage}
          selectedValue={language}
          title={translations.settings.language}
        />

        <SettingsOptionGroup
          description={translations.settings.themeDescription}
          onSelect={(value) => {
            void handleThemeSelect(value);
          }}
          options={themeOptions}
          savingValue={savingTheme}
          selectedValue={themePreference}
          title={translations.settings.theme}
        />

        <View style={{ gap: theme.spacing.medium }}>
          <View style={{ gap: theme.spacing.extraSmall }}>
            <Text
              accessibilityRole="header"
              style={[
                styles.sectionTitle,
                { color: theme.colors.textPrimary },
              ]}>
              {translations.settings.progressManagement}
            </Text>
            <Text
              style={[
                styles.sectionDescription,
                { color: theme.colors.textSecondary },
              ]}>
              {translations.settings.progressManagementDescription}
            </Text>
          </View>

          <View
            style={[
              styles.progressCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
                borderRadius: theme.borderRadius.medium,
                gap: theme.spacing.medium,
                padding: theme.spacing.medium,
              },
            ]}>
            <Text
              accessibilityLiveRegion="polite"
              style={[
                styles.progressCount,
                { color: theme.colors.textPrimary },
              ]}>
              {translations.settings.defeatedBossCount(defeatedBossCount)}
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityState={{ disabled: isResettingProgress }}
              disabled={isResettingProgress}
              onPress={confirmResetProgress}
              style={({ pressed }) => [
                styles.resetButton,
                {
                  backgroundColor: theme.colors.danger,
                  borderRadius: theme.borderRadius.medium,
                  opacity: pressed || isResettingProgress ? 0.7 : 1,
                  paddingHorizontal: theme.spacing.medium,
                  paddingVertical: theme.spacing.small,
                },
              ]}>
              {isResettingProgress ? (
                <View style={styles.resetButtonContent}>
                  <ActivityIndicator
                    color={theme.colors.primaryContrast}
                    size="small"
                  />
                  <Text
                    style={[
                      styles.resetButtonText,
                      { color: theme.colors.primaryContrast },
                    ]}>
                    {translations.settings.resettingProgress}
                  </Text>
                </View>
              ) : (
                <Text
                  style={[
                    styles.resetButtonText,
                    { color: theme.colors.primaryContrast },
                  ]}>
                  {translations.settings.resetProgress}
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  description: {
    fontSize: 17,
    lineHeight: 25,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
  },
  sectionDescription: {
    fontSize: 15,
    lineHeight: 21,
  },
  progressCard: {
    borderWidth: 1,
  },
  progressCount: {
    fontSize: 16,
    fontWeight: '600',
  },
  resetButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  resetButtonContent: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

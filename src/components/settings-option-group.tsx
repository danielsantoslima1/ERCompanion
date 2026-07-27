import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { useApp } from '../hooks/use-app';

export interface SettingsOption<T extends string> {
  value: T;
  label: string;
  description: string;
}

interface SettingsOptionGroupProps<T extends string> {
  title: string;
  description: string;
  options: readonly SettingsOption<T>[];
  selectedValue: T;
  savingValue: T | null;
  onSelect: (value: T) => void;
}

export function SettingsOptionGroup<T extends string>({
  title,
  description,
  options,
  selectedValue,
  savingValue,
  onSelect,
}: SettingsOptionGroupProps<T>) {
  const { theme, translations } = useApp();
  const isSaving = savingValue !== null;

  return (
    <View style={{ gap: theme.spacing.medium }}>
      <View style={{ gap: theme.spacing.extraSmall }}>
        <Text
          accessibilityRole="header"
          style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            { color: theme.colors.textSecondary },
          ]}>
          {description}
        </Text>
      </View>

      <View accessibilityRole="radiogroup" style={{ gap: theme.spacing.small }}>
        {options.map((option) => {
          const isSelected = option.value === selectedValue;
          const isOptionSaving = option.value === savingValue;

          return (
            <Pressable
              key={option.value}
              accessibilityRole="radio"
              accessibilityState={{
                disabled: isSaving,
                selected: isSelected,
              }}
              disabled={isSaving}
              onPress={() => onSelect(option.value)}
              style={({ pressed }) => [
                styles.option,
                {
                  backgroundColor: isSelected
                    ? theme.colors.drawerActiveBackground
                    : theme.colors.surface,
                  borderColor: isSelected
                    ? theme.colors.primary
                    : theme.colors.border,
                  borderRadius: theme.borderRadius.medium,
                  gap: theme.spacing.small,
                  opacity: pressed || (isSaving && !isOptionSaving) ? 0.65 : 1,
                  padding: theme.spacing.medium,
                },
              ]}>
              <View style={styles.optionHeader}>
                <Text
                  style={[
                    styles.optionLabel,
                    {
                      color: isSelected
                        ? theme.colors.drawerActiveText
                        : theme.colors.textPrimary,
                    },
                  ]}>
                  {option.label}
                </Text>
                {isOptionSaving ? (
                  <ActivityIndicator
                    color={theme.colors.primary}
                    size="small"
                  />
                ) : isSelected ? (
                  <Text
                    style={[
                      styles.selectedLabel,
                      { color: theme.colors.drawerActiveText },
                    ]}>
                    ✓ {translations.settings.selected}
                  </Text>
                ) : null}
              </View>
              <Text
                style={[
                  styles.optionDescription,
                  {
                    color: isSelected
                      ? theme.colors.drawerActiveText
                      : theme.colors.textSecondary,
                  },
                ]}>
                {isOptionSaving
                  ? translations.settings.saving
                  : option.description}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
  },
  sectionDescription: {
    fontSize: 15,
    lineHeight: 21,
  },
  option: {
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 88,
  },
  optionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  optionLabel: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
  },
  selectedLabel: {
    fontSize: 13,
    fontWeight: '700',
  },
  optionDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});

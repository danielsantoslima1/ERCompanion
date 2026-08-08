import Ionicons from '@expo/vector-icons/Ionicons';
import { router, type Href } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import { useApp } from '../hooks/use-app';

interface IndexHeaderBackButtonProps {
  readonly fallbackRoute: string;
}

export function IndexHeaderBackButton({
  fallbackRoute,
}: IndexHeaderBackButtonProps) {
  const { theme } = useApp();

  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.replace(fallbackRoute as Href);
  };

  return (
    <Pressable
      accessibilityHint="Return to the previous Index page"
      accessibilityLabel="Go back"
      accessibilityRole="button"
      onPress={goBack}
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.7 : 1,
          marginLeft: theme.spacing.small,
        },
      ]}>
      <Ionicons
        accessibilityElementsHidden
        color={theme.colors.navigationText}
        importantForAccessibility="no-hide-descendants"
        name="arrow-back"
        size={24}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    minWidth: 44,
  },
});

import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { useApp } from '../hooks/use-app';

interface FilterButtonGroupProps extends PropsWithChildren {
  readonly accessibilityLabel?: string;
  readonly testID?: string;
}

export function FilterButtonGroup({
  accessibilityLabel,
  children,
  testID = 'filter-button-group',
}: FilterButtonGroupProps) {
  const { theme } = useApp();

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      style={[
        styles.container,
        {
          columnGap: theme.spacing.small,
          paddingVertical: theme.spacing.extraSmall,
          rowGap: theme.spacing.small,
        },
      ]}
      testID={testID}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'visible',
    width: '100%',
  },
});

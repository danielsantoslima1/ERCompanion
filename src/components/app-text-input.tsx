import { forwardRef, type ElementRef } from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  type TextInputProps,
  type TextStyle,
} from 'react-native';

import { typography } from '../theme/typography';

export const AppTextInput = forwardRef<ElementRef<typeof NativeTextInput>, TextInputProps>(
  function AppTextInput({ style, ...props }, ref) {
    const {
      fontFamily: _fontFamily,
      fontStyle: _fontStyle,
      fontWeight: _fontWeight,
      ...resolvedStyle
    } = (StyleSheet.flatten(style) as TextStyle | undefined) ?? {};

    return (
      <NativeTextInput
        ref={ref}
        {...props}
        style={[resolvedStyle, { fontFamily: typography.body }]}
      />
    );
  },
);

import { forwardRef, useState, type ElementRef } from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  type TextInputProps,
  type TextStyle,
} from 'react-native';

import { typography } from '../theme/typography';

export interface AppTextInputProps extends TextInputProps {
  readonly focusBorderColor?: string;
}

export const AppTextInput = forwardRef<
  ElementRef<typeof NativeTextInput>,
  AppTextInputProps
>(
  function AppTextInput(
    { focusBorderColor, onBlur, onFocus, style, ...props },
    ref,
  ) {
    const [isFocused, setIsFocused] = useState(false);
    const {
      fontFamily: _fontFamily,
      fontStyle: _fontStyle,
      fontWeight: _fontWeight,
      ...resolvedStyle
    } = (StyleSheet.flatten(style) as TextStyle | undefined) ?? {};
    const handleFocus = (
      event: Parameters<NonNullable<TextInputProps['onFocus']>>[0],
    ) => {
      setIsFocused(true);
      onFocus?.(event);
    };
    const handleBlur = (
      event: Parameters<NonNullable<TextInputProps['onBlur']>>[0],
    ) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    return (
      <NativeTextInput
        ref={ref}
        {...props}
        onBlur={handleBlur}
        onFocus={handleFocus}
        style={[
          resolvedStyle,
          { fontFamily: typography.body },
          isFocused && focusBorderColor
            ? { borderColor: focusBorderColor }
            : undefined,
        ]}
      />
    );
  },
);

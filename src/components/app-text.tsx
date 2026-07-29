import { forwardRef, type ElementRef } from 'react';
import {
  StyleSheet,
  Text as NativeText,
  type TextProps,
  type TextStyle,
} from 'react-native';

import {
  typography,
  type TypographyVariant,
} from '../theme/typography';

export interface AppTextProps extends TextProps {
  readonly variant?: TypographyVariant;
}

function resolveBodyVariant(style: TextProps['style']): TypographyVariant {
  const flattenedStyle = StyleSheet.flatten(style) as TextStyle | undefined;

  if (flattenedStyle?.fontStyle === 'italic') return 'bodyItalic';

  const weight = Number(flattenedStyle?.fontWeight);
  if (weight >= 700 || flattenedStyle?.fontWeight === 'bold') return 'bodyBold';
  if (weight >= 600) return 'bodySemibold';
  if (weight >= 500) return 'bodyMedium';

  return 'body';
}

export const AppText = forwardRef<ElementRef<typeof NativeText>, AppTextProps>(function AppText(
  { style, variant, ...props },
  ref,
) {
  const resolvedVariant = variant ?? resolveBodyVariant(style);
  const {
    fontFamily: _fontFamily,
    fontStyle: _fontStyle,
    fontWeight: _fontWeight,
    ...resolvedStyle
  } = (StyleSheet.flatten(style) as TextStyle | undefined) ?? {};

  return (
    <NativeText
      ref={ref}
      {...props}
      style={[resolvedStyle, { fontFamily: typography[resolvedVariant] }]}
    />
  );
});

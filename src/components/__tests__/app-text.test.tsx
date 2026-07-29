import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { typography } from '../../theme/typography';
import { AppText } from '../app-text';
import { AppTextInput } from '../app-text-input';

describe('AppText typography', () => {
  it('uses Spectral by default and preserves text properties and combined styles', async () => {
    const { getByLabelText } = await render(
      <AppText
        accessibilityLabel="texto acessível"
        numberOfLines={2}
        selectable
        style={[{ color: '#fff' }, { fontSize: 17 }]}>
        Ação, bênção, coração e bênçãos
      </AppText>,
    );

    const text = getByLabelText('texto acessível');
    expect(text).toHaveStyle({
      color: '#fff',
      fontFamily: typography.body,
      fontSize: 17,
    });
    expect(text.props.numberOfLines).toBe(2);
    expect(text.props.selectable).toBe(true);
  });

  it('maps every requested weight and italic style to an explicit font file', async () => {
    const { getByText } = await render(
      <>
        <AppText style={{ fontWeight: '500' }}>Medium</AppText>
        <AppText style={{ fontWeight: '600' }}>Semibold</AppText>
        <AppText style={{ fontWeight: '700' }}>Bold</AppText>
        <AppText style={{ fontStyle: 'italic' }}>Italic</AppText>
      </>,
    );

    expect(getByText('Medium')).toHaveStyle({ fontFamily: typography.bodyMedium });
    expect(getByText('Semibold')).toHaveStyle({ fontFamily: typography.bodySemibold });
    expect(getByText('Bold')).toHaveStyle({ fontFamily: typography.bodyBold });
    expect(getByText('Italic')).toHaveStyle({ fontFamily: typography.bodyItalic });
  });

  it('uses Cinzel Decorative only through display variants', async () => {
    const { getByText } = await render(
      <>
        <AppText variant="display">Título</AppText>
        <AppText variant="displayBold">Elden Ring Companion</AppText>
      </>,
    );

    expect(getByText('Título')).toHaveStyle({ fontFamily: typography.display });
    expect(getByText('Elden Ring Companion')).toHaveStyle({
      fontFamily: typography.displayBold,
    });
  });

  it('forwards refs to the native Text element', async () => {
    const ref = { current: null as Text | null };
    await render(<AppText ref={ref}>Texto</AppText>);
    expect(ref.current).not.toBeNull();
  });
});

describe('AppTextInput typography', () => {
  it('uses Spectral while preserving placeholder and input properties', async () => {
    const { getByPlaceholderText } = await render(
      <AppTextInput
        accessibilityLabel="Busca"
        placeholder="Buscar ação"
        style={{ color: '#111', fontSize: 16 }}
      />,
    );

    const input = getByPlaceholderText('Buscar ação');
    expect(input).toHaveStyle({
      color: '#111',
      fontFamily: typography.body,
      fontSize: 16,
    });
    expect(input.props.accessibilityLabel).toBe('Busca');
  });
});

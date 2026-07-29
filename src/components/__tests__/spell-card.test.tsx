import { fireEvent, render, screen } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';

import type { AppContextValue } from '../../contexts/app-context';
import { getTranslationDictionary } from '../../i18n';
import { lightTheme } from '../../theme';
import { SpellCard } from '../spell-card';

jest.mock('@expo/vector-icons/Ionicons', () => {
  const { Text } = jest.requireActual('react-native');
  return function Icon({ name }: { name: string }) { return <Text>{name}</Text>; };
});

let mockApp: Pick<AppContextValue, 'theme' | 'toggleIncantationCollected' | 'toggleSorceryCollected' | 'translations'>;
jest.mock('../../hooks/use-app', () => ({ useApp: () => mockApp }));

beforeEach(() => {
  mockApp = {
    theme: lightTheme,
    toggleIncantationCollected: jest.fn().mockResolvedValue(undefined),
    toggleSorceryCollected: jest.fn().mockResolvedValue(undefined),
    translations: getTranslationDictionary('en'),
  };
});

describe('SpellCard', () => {
  it('shows only compact approved data and opens details', async () => {
    const onViewDetails = jest.fn();
    await render(<SpellCard category="sorcery" id="s" isCollected={false} location="Location pending" name="Spell" spoilerMatch={false} onViewDetails={onViewDetails} />);
    expect(screen.getByText('Spell')).toBeOnTheScreen();
    expect(screen.getByText('Location pending')).toBeOnTheScreen();
    expect(screen.queryByText(/FP/i)).toBeNull();
    await fireEvent.press(
      screen.getByRole('button', { name: 'View details for Spell' }),
    );
    expect(onViewDetails).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['sorcery', 'Sorcery'],
    ['incantation', 'Incantation'],
  ] as const)('uses the shared details button for %s cards', async (category, name) => {
    await render(
      <SpellCard
        category={category}
        id={category}
        isCollected={false}
        location="Location"
        name={name}
        onViewDetails={jest.fn()}
        spoilerMatch={false}
      />,
    );

    const button = screen.getByTestId('details-button');
    expect(button.props.accessibilityState).toEqual({ disabled: false });
    expect(StyleSheet.flatten(button.props.style)).toMatchObject({
      alignItems: 'center',
      borderColor: lightTheme.colors.primary,
      borderRadius: lightTheme.borderRadius.medium,
      borderWidth: 1,
      justifyContent: 'center',
      minHeight: 48,
      opacity: 1,
      paddingHorizontal: lightTheme.spacing.medium,
      paddingVertical: lightTheme.spacing.small,
    });
  });

  it('uses distinct decorative icons and a check when collected', async () => {
    const { rerender } = await render(<SpellCard category="sorcery" id="s" isCollected={false} location="L" name="S" spoilerMatch={false} onViewDetails={jest.fn()} />);
    expect(screen.getByText('sparkles-outline', { includeHiddenElements: true })).toBeOnTheScreen();
    await rerender(<SpellCard category="incantation" id="i" isCollected={false} location="L" name="I" spoilerMatch={false} onViewDetails={jest.fn()} />);
    expect(screen.getByText('sunny-outline', { includeHiddenElements: true })).toBeOnTheScreen();
    await rerender(<SpellCard category="incantation" id="i" isCollected location="L" name="I" spoilerMatch={false} onViewDetails={jest.fn()} />);
    expect(screen.getByText('✓', { includeHiddenElements: true })).toBeOnTheScreen();
  });

  it('keeps the icon non-interactive and hidden from accessibility', async () => {
    await render(<SpellCard category="sorcery" id="s" isCollected={false} location="L" name="S" spoilerMatch={false} onViewDetails={jest.fn()} />);
    const icon = screen.getByTestId('sorcery-status-not-collected', { includeHiddenElements: true });
    expect(icon.props.pointerEvents).toBe('none');
    expect(icon.props.importantForAccessibility).toBe('no-hide-descendants');
  });

  it('collects through the category action and shows a neutral spoiler match', async () => {
    await render(<SpellCard category="sorcery" id="s" isCollected={false} location="L" name="S" spoilerMatch onViewDetails={jest.fn()} />);
    expect(screen.getByText('Match in spoiler content')).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('button', { name: 'Mark as collected: S' }));
    expect(mockApp.toggleSorceryCollected).toHaveBeenCalledWith('s');
  });
});

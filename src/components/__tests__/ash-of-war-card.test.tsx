import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';

import { AshOfWarCard } from '../ash-of-war-card';
import type { AppContextValue } from '../../contexts/app-context';
import { getTranslationDictionary } from '../../i18n';
import { darkTheme, lightTheme } from '../../theme';

jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => {
  const { Text } = jest.requireActual('react-native');
  return function MockMaterialCommunityIcon(props: { name: string }) {
    return <Text>{props.name}</Text>;
  };
});

let mockAppState: Pick<
  AppContextValue,
  'theme' | 'toggleAshOfWarCollected' | 'translations'
>;

jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = {
    theme: lightTheme,
    toggleAshOfWarCollected: jest.fn().mockResolvedValue(undefined),
    translations: getTranslationDictionary('en'),
  };
});

describe('AshOfWarCard', () => {
  it('shows only compact name, location, details and collection controls', async () => {
    await render(
      <AshOfWarCard
        id="kick"
        isCollected={false}
        location="Stormveil Castle"
        name="Kick"
        onViewDetails={jest.fn()}
      />,
    );
    expect(screen.getByText('Kick')).toBeOnTheScreen();
    expect(screen.getByText('Stormveil Castle')).toBeOnTheScreen();
    expect(screen.getByText('View details')).toBeOnTheScreen();
    expect(screen.queryByText('FP cost')).toBeNull();
    expect(screen.queryByText('Affinity')).toBeNull();
  });

  it('uses the shared dark card accent tokens without replacing success', async () => {
    mockAppState = { ...mockAppState, theme: darkTheme };
    const view = await render(
      <AshOfWarCard
        id="kick"
        isCollected={false}
        location="Location"
        name="Kick"
        onViewDetails={jest.fn()}
      />,
    );
    expect(screen.getByText('Kick')).toHaveStyle({
      color: darkTheme.colors.cardAccentText,
    });
    await view.rerender(
      <AshOfWarCard
        id="kick"
        isCollected
        location="Location"
        name="Kick"
        onViewDetails={jest.fn()}
      />,
    );
    expect(screen.getByText('✓', { includeHiddenElements: true })).toHaveStyle({
      color: darkTheme.colors.success,
    });
  });

  it('uses a decorative ghost when not collected', async () => {
    await render(
      <AshOfWarCard
        id="kick"
        isCollected={false}
        location="Location"
        name="Kick"
        onViewDetails={jest.fn()}
      />,
    );
    const icon = screen.getByTestId('ash-status-icon-not-collected', {
      includeHiddenElements: true,
    });
    expect(icon.props.pointerEvents).toBe('none');
    expect(icon.props.importantForAccessibility).toBe('no-hide-descendants');
  });

  it('uses a decorative check when collected', async () => {
    await render(
      <AshOfWarCard
        id="kick"
        isCollected
        location="Location"
        name="Kick"
        onViewDetails={jest.fn()}
      />,
    );
    expect(
      screen.getByTestId('ash-status-icon-collected', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();
    expect(screen.getByText('✓', { includeHiddenElements: true })).toBeOnTheScreen();
  });

  it('opens details independently without collecting', async () => {
    const onViewDetails = jest.fn();
    await render(
      <AshOfWarCard
        id="kick"
        isCollected={false}
        location="Location"
        name="Kick"
        onViewDetails={onViewDetails}
      />,
    );
    await fireEvent.press(
      screen.getByRole('button', { name: 'View details for Kick' }),
    );
    expect(onViewDetails).toHaveBeenCalledTimes(1);
    expect(mockAppState.toggleAshOfWarCollected).not.toHaveBeenCalled();
  });

  it('collects through the only collection control', async () => {
    await render(
      <AshOfWarCard
        id="kick"
        isCollected={false}
        location="Location"
        name="Kick"
        onViewDetails={jest.fn()}
      />,
    );
    await fireEvent.press(
      screen.getByRole('button', { name: 'Mark as collected: Kick' }),
    );
    await waitFor(() =>
      expect(mockAppState.toggleAshOfWarCollected).toHaveBeenCalledWith('kick'),
    );
  });

  it('uses the not-collected action for a collected entry', async () => {
    await render(
      <AshOfWarCard
        id="kick"
        isCollected
        location="Location"
        name="Kick"
        onViewDetails={jest.fn()}
      />,
    );
    expect(
      screen.getByRole('button', { name: 'Mark as not collected: Kick' }),
    ).toBeOnTheScreen();
  });

  it('reports persistence failure and keeps the prop-driven state', async () => {
    jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    mockAppState.toggleAshOfWarCollected = jest
      .fn()
      .mockRejectedValue(new Error('write failed'));
    await render(
      <AshOfWarCard
        id="kick"
        isCollected={false}
        location="Location"
        name="Kick"
        onViewDetails={jest.fn()}
      />,
    );
    await fireEvent.press(
      screen.getByRole('button', { name: 'Mark as collected: Kick' }),
    );
    await waitFor(() =>
      expect(Alert.alert).toHaveBeenCalledWith(
        'Unable to update collection',
        'Please try again in a moment.',
      ),
    );
    expect(
      screen.getByTestId('ash-status-icon-not-collected', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();
  });

  it('keeps long names multiline with reserved icon space', async () => {
    const longName =
      'A deliberately very long Ash of War name that must remain readable';
    await render(
      <AshOfWarCard
        id="long"
        isCollected={false}
        location="Location"
        name={longName}
        onViewDetails={jest.fn()}
      />,
    );
    expect(screen.getByText(longName).props.numberOfLines).toBeUndefined();
    expect(
      screen.getByTestId('ash-status-icon-not-collected', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();
  });
});

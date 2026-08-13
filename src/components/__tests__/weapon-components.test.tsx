import { fireEvent, render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';

import { WeaponCard } from '../weapon-card';
import { WeaponTypeSelector } from '../weapon-type-selector';
import { darkTheme, lightTheme } from '../../theme';

const mockApp = { theme: lightTheme };
jest.mock('../../hooks/use-app', () => ({ useApp: () => mockApp }));

describe('Weapon shared components', () => {
  it.each([lightTheme, darkTheme])('keeps collected actions green with white text in $mode', async (theme) => {
    mockApp.theme = theme;
    const view = await render(<WeaponCard collected location="Stormveil Castle - Limgrave" name="Weapon" onDetails={jest.fn()} onToggle={jest.fn()} type="Greatswords" />);
    const action = view.getByRole('button', { name: 'Collected' });
    expect(StyleSheet.flatten(action.props.style)).toMatchObject({ backgroundColor: theme.colors.successActionBackground });
    expect(StyleSheet.flatten(view.getByText('Collected').props.style)).toMatchObject({ color: theme.colors.successActionText });
    expect(theme.colors.successActionBackground).not.toBe(theme.colors.successBackground);
  });

  it('searches types and returns All Types as a single selection', async () => {
    mockApp.theme = lightTheme;
    const onChange = jest.fn();
    const view = await render(<WeaponTypeSelector onChange={onChange} types={[{ id: 'daggers', name: 'Daggers', order: 0, base: 16, dlc: 2, total: 18 }, { id: 'greatswords', name: 'Greatswords', order: 1, base: 21, dlc: 3, total: 24 }]} value="daggers" />);
    await fireEvent.press(view.getByRole('button', { name: 'Weapon Type: Daggers' }));
    expect(view.getByText('All Types (42)')).toBeOnTheScreen();
    await fireEvent.changeText(view.getByLabelText('Search Weapon Types'), 'great');
    expect(view.getByText('Greatswords (24)')).toBeOnTheScreen();
    expect(view.queryByText('Daggers (18)')).toBeNull();
    await fireEvent.press(view.getByText('All Types (42)'));
    expect(onChange).toHaveBeenCalledWith(null);
  });
});

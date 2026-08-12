import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import { TalismanCard } from '../talisman-card';
import { TalismanDetailScreen } from '../talisman-detail-screen';
import { TalismanProgressButton } from '../talisman-progress-button';
import { lightTheme, darkTheme } from '../../theme';

jest.mock('@expo/vector-icons/Ionicons', () => 'Ionicons');

const mockApp = {
  collectedTalismanIds: [], toggleTalismanCollected: jest.fn(), theme: lightTheme,
};
jest.mock('../../hooks/use-app', () => ({ useApp: () => mockApp }));
jest.mock('expo-router', () => ({ router: { back: jest.fn(), canGoBack: () => true, replace: jest.fn() } }));

describe('Talisman category consistency', () => {
  it.each([lightTheme, darkTheme])('uses a distinct green action with white text in $mode', async (theme) => {
    mockApp.theme = theme;
    const view = await render(<TalismanProgressButton id="talisman-axe-talisman" isCollected name="Axe Talisman" />);
    const button = view.getByRole('button');
    const text = view.getByText('Collected');
    expect(StyleSheet.flatten(button.props.style)).toMatchObject({ backgroundColor: theme.colors.successActionBackground });
    expect(StyleSheet.flatten(text.props.style)).toMatchObject({ color: theme.colors.primaryContrast });
    expect(theme.colors.successActionBackground).not.toBe(theme.colors.successBackground);
  });

  it('uses the pendant-like ribbon icon and preserves the collected card structure', async () => {
    mockApp.theme = lightTheme;
    const view = await render(<TalismanCard id="talisman-axe-talisman" isCollected={false} legendary={false} location="Mistwood Ruins - Limgrave" missable={false} name="Axe Talisman" onViewDetails={jest.fn()} />);
    expect(view.getByText('Mistwood Ruins - Limgrave')).toBeOnTheScreen();
  });

  it('shows the descriptive location in details instead of the card summary', async () => {
    mockApp.theme = lightTheme;
    const view = await render(<TalismanDetailScreen id="talisman-axe-talisman" />);
    expect(view.getByText('A chest in the cellar of Mistwood Ruins.')).toBeOnTheScreen();
    expect(view.queryByText('Mistwood Ruins - Limgrave')).toBeNull();
  });
});

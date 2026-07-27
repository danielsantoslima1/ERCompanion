import { render, screen } from '@testing-library/react-native';

import type { AppContextValue } from '../../contexts/app-context';
import { darkTheme, lightTheme } from '../../theme';
import { PlaceholderScreen } from '../placeholder-screen';

let mockAppState: Pick<AppContextValue, 'theme'> = {
  theme: lightTheme,
};

jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = { theme: lightTheme };
});

describe('PlaceholderScreen', () => {
  it('shows its title and message with heading semantics', async () => {
    await render(
      <PlaceholderScreen
        message="Temporary screen message"
        title="Temporary screen"
      />,
    );

    expect(
      screen.getByRole('header', { name: 'Temporary screen' }),
    ).toBeOnTheScreen();
    expect(screen.getByText('Temporary screen message')).toBeOnTheScreen();
  });

  it.each([
    { mode: 'light', theme: lightTheme },
    { mode: 'dark', theme: darkTheme },
  ] as const)('renders correctly with the $mode theme', async ({ theme }) => {
    mockAppState = { theme };

    await render(
      <PlaceholderScreen message="Theme message" title="Theme title" />,
    );

    expect(screen.getByRole('header', { name: 'Theme title' })).toBeOnTheScreen();
    expect(screen.getByText('Theme message')).toBeOnTheScreen();
  });
});

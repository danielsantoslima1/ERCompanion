import { render, screen } from '@testing-library/react-native';

import type { AppContextValue } from '../../contexts/app-context';
import { lightTheme } from '../../theme';
import { ProgressCircle } from '../progress-circle';

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

describe('ProgressCircle', () => {
  it('shows the percentage and defeated-to-total ratio', async () => {
    await render(
      <ProgressCircle
        accessibilityLabel="Overall progress"
        defeated={3}
        percentage={30}
        total={10}
      />,
    );

    expect(screen.getByText('30%')).toBeOnTheScreen();
    expect(screen.getByText('3/10')).toBeOnTheScreen();
  });

  it.each([
    { percentage: 0, expected: '0%', now: 0 },
    { percentage: 100, expected: '100%', now: 100 },
    { percentage: -15, expected: '0%', now: 0 },
    { percentage: 135, expected: '100%', now: 100 },
  ])(
    'renders $percentage as bounded progress $expected',
    async ({ percentage, expected, now }) => {
      await render(
        <ProgressCircle
          accessibilityLabel="Bounded progress"
          defeated={0}
          percentage={percentage}
          total={10}
        />,
      );

      expect(screen.getByText(expected)).toBeOnTheScreen();
      expect(screen.getByRole('progressbar')).toHaveAccessibilityValue({
        min: 0,
        max: 100,
        now,
      });
    },
  );

  it('renders a zero total without invalid output', async () => {
    await render(
      <ProgressCircle
        accessibilityLabel="Empty progress"
        defeated={0}
        percentage={0}
        total={0}
      />,
    );

    expect(screen.getByText('0%')).toBeOnTheScreen();
    expect(screen.getByText('0/0')).toBeOnTheScreen();
  });

  it('exposes its received label and complete progress semantics', async () => {
    await render(
      <ProgressCircle
        accessibilityLabel="Custom accessible progress"
        defeated={2}
        percentage={40}
        total={5}
      />,
    );

    const progress = screen.getByRole('progressbar', {
      name: 'Custom accessible progress',
    });
    expect(progress).toHaveAccessibilityValue({
      min: 0,
      max: 100,
      now: 40,
    });
  });
});

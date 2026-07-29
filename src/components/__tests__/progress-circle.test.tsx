import { render, screen } from '@testing-library/react-native';
import { processColor } from 'react-native';

import type { AppContextValue } from '../../contexts/app-context';
import { darkTheme, lightTheme } from '../../theme';
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

  it('keeps the complete themed track visible with zero progress', async () => {
    await render(
      <ProgressCircle
        accessibilityLabel="No progress"
        defeated={0}
        percentage={0}
        total={10}
      />,
    );

    expect(screen.getByTestId('progress-circle-track').props.stroke)
      .toMatchObject({
        payload: processColor(lightTheme.colors.circularProgressTrack),
        type: 0,
      });
    expect(screen.queryByTestId('progress-circle-fill')).toBeNull();
  });

  it('draws a distinct partial arc above the complete track', async () => {
    await render(
      <ProgressCircle
        accessibilityLabel="Partial progress"
        defeated={4}
        percentage={40}
        total={10}
      />,
    );

    const track = screen.getByTestId('progress-circle-track');
    const fill = screen.getByTestId('progress-circle-fill');
    expect(track.props.stroke).toMatchObject({
      payload: processColor(lightTheme.colors.circularProgressTrack),
      type: 0,
    });
    expect(fill.props.stroke).toMatchObject({
      payload: processColor(lightTheme.colors.circularProgressFill),
      type: 0,
    });
    expect(fill.props.stroke.payload).not.toBe(track.props.stroke.payload);
    expect(fill.props.strokeDashoffset).toBeGreaterThan(0);
  });

  it('draws a complete arc with zero dash offset at 100%', async () => {
    await render(
      <ProgressCircle
        accessibilityLabel="Complete progress"
        defeated={10}
        percentage={100}
        total={10}
      />,
    );

    expect(screen.getByTestId('progress-circle-track')).toBeOnTheScreen();
    expect(screen.getByTestId('progress-circle-fill').props.strokeDashoffset)
      .toBeNull();
  });

  it('uses the dark theme circular tokens without hiding the track', async () => {
    mockAppState = { theme: darkTheme };
    await render(
      <ProgressCircle
        accessibilityLabel="Dark progress"
        defeated={2}
        percentage={20}
        total={10}
      />,
    );

    expect(screen.getByTestId('progress-circle-track').props.stroke)
      .toMatchObject({
        payload: processColor(darkTheme.colors.circularProgressTrack),
        type: 0,
      });
    expect(screen.getByTestId('progress-circle-fill').props.stroke)
      .toMatchObject({
        payload: processColor(darkTheme.colors.circularProgressFill),
        type: 0,
      });
  });

  it('keeps the dark accent track visible at zero progress', async () => {
    mockAppState = { theme: darkTheme };
    await render(
      <ProgressCircle
        accessibilityLabel="Dark accent with no progress"
        defeated={0}
        percentage={0}
        total={10}
        variant="accent"
      />,
    );

    expect(screen.getByTestId('progress-circle-track').props.stroke)
      .toMatchObject({
        payload: processColor(darkTheme.colors.circularProgressAccentTrack),
        type: 0,
      });
    expect(screen.queryByTestId('progress-circle-fill')).toBeNull();
  });

  it('uses distinct dark accent tokens for partial progress', async () => {
    mockAppState = { theme: darkTheme };
    await render(
      <ProgressCircle
        accessibilityLabel="Dark accent partial progress"
        defeated={5}
        percentage={50}
        total={10}
        variant="accent"
      />,
    );

    const track = screen.getByTestId('progress-circle-track');
    const fill = screen.getByTestId('progress-circle-fill');
    expect(track.props.stroke).toMatchObject({
      payload: processColor(darkTheme.colors.circularProgressAccentTrack),
      type: 0,
    });
    expect(fill.props.stroke).toMatchObject({
      payload: processColor(darkTheme.colors.circularProgressAccentFill),
      type: 0,
    });
    expect(fill.props.stroke).toMatchObject({
      payload: processColor(darkTheme.colors.circularProgressFill),
      type: 0,
    });
    expect(fill.props.stroke.payload).not.toBe(track.props.stroke.payload);
    expect(fill.props.strokeDashoffset).toBeGreaterThan(0);
  });

  it('draws the complete dark accent arc at 100%', async () => {
    mockAppState = { theme: darkTheme };
    await render(
      <ProgressCircle
        accessibilityLabel="Dark accent complete progress"
        defeated={10}
        percentage={100}
        total={10}
        variant="accent"
      />,
    );

    expect(screen.getByTestId('progress-circle-track')).toBeOnTheScreen();
    expect(screen.getByTestId('progress-circle-fill').props.strokeDashoffset)
      .toBeNull();
  });

  it('preserves the approved light colors for the accent assignment', async () => {
    await render(
      <ProgressCircle
        accessibilityLabel="Light accent progress"
        defeated={5}
        percentage={50}
        total={10}
        variant="accent"
      />,
    );

    expect(screen.getByTestId('progress-circle-track').props.stroke)
      .toMatchObject({
        payload: processColor(lightTheme.colors.circularProgressTrack),
        type: 0,
      });
    expect(screen.getByTestId('progress-circle-fill').props.stroke)
      .toMatchObject({
        payload: processColor(lightTheme.colors.circularProgressFill),
        type: 0,
      });
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

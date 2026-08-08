import { fireEvent, render, screen } from '@testing-library/react-native';
import { AccessibilityInfo, Animated } from 'react-native';

import { appBranding, brandingAssets, splashLayout } from '../../branding';
import {
  AnimatedAppSplash,
  createSplashExitAnimation,
} from '../animated-app-splash';

jest.mock('expo-status-bar', () => ({
  StatusBar: () => null,
}));

describe('AnimatedAppSplash', () => {
  function mockReducedMotion(value: boolean) {
    jest.spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
      .mockResolvedValue(value);
  }

  beforeEach(() => {
    mockReducedMotion(false);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  function mockAnimations() {
    const timing = jest.spyOn(Animated, 'timing').mockImplementation(
      () =>
        ({
          reset: jest.fn(),
          start: jest.fn(),
          stop: jest.fn(),
        }) as never,
    );
    jest.spyOn(Animated, 'parallel').mockImplementation(
      () =>
        ({
          reset: jest.fn(),
          start: jest.fn((callback) => callback?.({ finished: true })),
          stop: jest.fn(),
        }) as never,
    );
    return timing;
  }

  it('reports readiness only after layout and blocks interaction', async () => {
    const onReady = jest.fn();
    await render(
      <AnimatedAppSplash
        onComplete={jest.fn()}
        onReady={onReady}
        startExit={false}
      />,
    );

    const overlay = screen.getByTestId('animated-app-splash');
    expect(overlay.props.pointerEvents).toBe('auto');
    expect(overlay).toHaveStyle({
      backgroundColor: appBranding.splashBackground,
    });
    expect(overlay.props).toMatchObject({
      accessibilityLabel: appBranding.name,
      accessibilityRole: 'image',
    });
    const emblem = screen.getByTestId('animated-app-splash-emblem');
    const title = screen.getByTestId('animated-app-splash-title');
    expect(emblem.props.resizeMode)
      .toBe('contain');
    expect(emblem.props.source).toBe(brandingAssets.emblem);
    expect(emblem.props.source).not.toBe(brandingAssets.splash);
    expect(title.props).toMatchObject({
      adjustsFontSizeToFit: true,
      minimumFontScale: 0.72,
      numberOfLines: 1,
    });
    expect(title).toHaveTextContent(appBranding.name);
    expect(title).toHaveStyle({
      flexShrink: 1,
      textAlign: 'center',
      width: '100%',
    });
    expect(onReady).not.toHaveBeenCalled();

    await fireEvent(overlay, 'layout', { nativeEvent: { layout: {} } });
    await fireEvent(overlay, 'layout', { nativeEvent: { layout: {} } });
    expect(onReady).toHaveBeenCalledTimes(1);
  });

  it('animates opacity and subtle scale with the approved duration', () => {
    const timing = mockAnimations();
    createSplashExitAnimation(
      new Animated.Value(1),
      new Animated.Value(1),
      false,
    );
    expect(timing).toHaveBeenCalledTimes(2);
    expect(timing).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        duration: appBranding.splashExitDuration,
        toValue: 0,
        useNativeDriver: true,
      }),
    );
    expect(timing).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        duration: appBranding.splashExitDuration,
        toValue: splashLayout.maximumScale,
        useNativeDriver: true,
      }),
    );
  });

  it('removes scale and shortens opacity when reduced motion is enabled', () => {
    jest.restoreAllMocks();
    mockReducedMotion(true);
    const timing = mockAnimations();
    createSplashExitAnimation(
      new Animated.Value(1),
      new Animated.Value(1),
      true,
    );
    expect(timing).toHaveBeenCalledTimes(2);
    expect(timing).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        duration: appBranding.reducedMotionExitDuration,
        toValue: 1,
      }),
    );
  });
});

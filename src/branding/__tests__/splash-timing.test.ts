import { appBranding } from '../branding';
import {
  getRemainingSplashVisibleDuration,
  scheduleSplashExitAfterMinimum,
} from '../splash-timing';

describe('splash minimum visible duration', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('keeps the approved duration centralized at 3 seconds', () => {
    expect(appBranding.splashMinimumVisibleDuration).toBe(3000);
  });

  it('waits only for the remainder when the app is ready early', () => {
    const onElapsed = jest.fn();
    scheduleSplashExitAfterMinimum(1000, onElapsed, 1800);

    jest.advanceTimersByTime(2199);
    expect(onElapsed).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(onElapsed).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['exactly at the minimum', 4000],
    ['after the minimum', 5000],
  ])('exits immediately when ready %s', (_description, currentTime) => {
    const onElapsed = jest.fn();
    scheduleSplashExitAfterMinimum(1000, onElapsed, currentTime);

    expect(onElapsed).toHaveBeenCalledTimes(1);
    expect(jest.getTimerCount()).toBe(0);
  });

  it('cleans the pending timer and never calls after cleanup', () => {
    const onElapsed = jest.fn();
    const cleanup = scheduleSplashExitAfterMinimum(1000, onElapsed, 1500);

    expect(jest.getTimerCount()).toBe(1);
    cleanup();
    jest.runAllTimers();

    expect(jest.getTimerCount()).toBe(0);
    expect(onElapsed).not.toHaveBeenCalled();
  });

  it('never returns more than the minimum for a future start time', () => {
    expect(getRemainingSplashVisibleDuration(2000, 1000)).toBe(3000);
  });
});

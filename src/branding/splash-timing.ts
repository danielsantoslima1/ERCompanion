import { appBranding } from './branding';

export function getRemainingSplashVisibleDuration(
  startedAt: number,
  currentTime = Date.now(),
): number {
  const elapsed = Math.max(0, currentTime - startedAt);
  return Math.max(0, appBranding.splashMinimumVisibleDuration - elapsed);
}

export function scheduleSplashExitAfterMinimum(
  startedAt: number,
  onElapsed: () => void,
  currentTime = Date.now(),
): () => void {
  const remaining = getRemainingSplashVisibleDuration(startedAt, currentTime);

  if (remaining === 0) {
    onElapsed();
    return () => undefined;
  }

  const timer = setTimeout(onElapsed, remaining);
  return () => clearTimeout(timer);
}

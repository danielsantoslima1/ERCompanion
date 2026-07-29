export interface SplashLayoutMetrics {
  readonly emblemWidth: number;
  readonly opticalOffset: number;
  readonly spacing: number;
  readonly titleFontSize: number;
  readonly titleMaxWidth: number;
}

const HORIZONTAL_PADDING = 24;
const EMBLEM_ASPECT_RATIO = 512 / 640;
const MIN_EMBLEM_WIDTH = 176;
const MAX_EMBLEM_WIDTH = 220;
const MIN_TITLE_SIZE = 22;
const MAX_TITLE_SIZE = 28;
const MIN_SPACING = 20;
const MAX_SPACING = 28;

export const splashLayout = {
  horizontalPadding: HORIZONTAL_PADDING,
  maximumScale: 1.015,
  maximumEmblemWidth: MAX_EMBLEM_WIDTH,
  minimumEmblemWidth: MIN_EMBLEM_WIDTH,
  maximumTitleSize: MAX_TITLE_SIZE,
  minimumTitleSize: MIN_TITLE_SIZE,
} as const;

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

export function calculateSplashLayout(
  windowWidth: number,
  windowHeight: number,
): SplashLayoutMetrics {
  const width = Math.max(0, windowWidth);
  const height = Math.max(0, windowHeight);
  const availableWidth = Math.max(0, width - HORIZONTAL_PADDING * 2);
  const scaleSafeWidth = availableWidth / splashLayout.maximumScale;
  const widthLimit = width * 0.56 / splashLayout.maximumScale;
  const heightLimit =
    height * 0.38 * EMBLEM_ASPECT_RATIO / splashLayout.maximumScale;
  const constrainedEmblemWidth = Math.min(
    MAX_EMBLEM_WIDTH,
    scaleSafeWidth,
    widthLimit,
    heightLimit,
  );
  const emblemWidth = Math.max(0, constrainedEmblemWidth);
  const titleFontSize = clamp(
    MIN_TITLE_SIZE + (width - 320) * (6 / 92),
    MIN_TITLE_SIZE,
    MAX_TITLE_SIZE,
  );
  const spacing = clamp(
    MIN_SPACING + (height - 640) * (8 / 280),
    MIN_SPACING,
    MAX_SPACING,
  );

  return {
    emblemWidth,
    opticalOffset: 12,
    spacing,
    titleFontSize,
    titleMaxWidth: scaleSafeWidth,
  };
}

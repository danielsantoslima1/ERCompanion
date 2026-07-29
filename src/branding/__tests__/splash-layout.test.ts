import { calculateSplashLayout, splashLayout } from '../splash-layout';

describe('responsive splash layout', () => {
  it.each([
    [320, 640],
    [360, 780],
    [390, 844],
    [412, 915],
    [768, 1024],
  ])(
    'keeps branding inside safe bounds at %d x %d',
    (width, height) => {
      const metrics = calculateSplashLayout(width, height);
      const scaledEmblemWidth =
        metrics.emblemWidth * splashLayout.maximumScale;
      const scaledEmblemHeight =
        metrics.emblemWidth / (512 / 640) * splashLayout.maximumScale;

      expect(metrics.emblemWidth).toBeLessThanOrEqual(
        splashLayout.maximumEmblemWidth,
      );
      expect(scaledEmblemWidth).toBeLessThanOrEqual(width * 0.56);
      expect(scaledEmblemHeight).toBeLessThanOrEqual(height * 0.38);
      expect(metrics.titleMaxWidth * splashLayout.maximumScale)
        .toBeLessThanOrEqual(
          width - splashLayout.horizontalPadding * 2,
        );
      expect(metrics.titleFontSize).toBeGreaterThanOrEqual(
        splashLayout.minimumTitleSize,
      );
      expect(metrics.titleFontSize).toBeLessThanOrEqual(
        splashLayout.maximumTitleSize,
      );
      expect(metrics.spacing).toBeGreaterThanOrEqual(20);
      expect(metrics.spacing).toBeLessThanOrEqual(28);
      expect(metrics.opticalOffset).toBeGreaterThanOrEqual(8);
      expect(metrics.opticalOffset).toBeLessThanOrEqual(20);
    },
  );

  it('uses the compact end of the range on a 320 dp phone', () => {
    const metrics = calculateSplashLayout(320, 640);

    expect(metrics.emblemWidth).toBeGreaterThanOrEqual(176);
    expect(metrics.emblemWidth).toBeLessThan(180);
    expect(metrics.titleFontSize).toBe(22);
    expect(metrics.titleMaxWidth).toBeGreaterThan(260);
  });

  it('caps emblem and title growth on a tablet', () => {
    const metrics = calculateSplashLayout(768, 1024);

    expect(metrics.emblemWidth).toBe(220);
    expect(metrics.titleFontSize).toBe(28);
  });
});

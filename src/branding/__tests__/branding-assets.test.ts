import fs from 'node:fs';
import path from 'node:path';

import { appBranding } from '../branding';

const projectRoot = path.resolve(__dirname, '..', '..', '..');

function readPngHeader(relativePath: string) {
  const buffer = fs.readFileSync(path.join(projectRoot, relativePath));
  return {
    colorType: buffer[25],
    height: buffer.readUInt32BE(20),
    signature: buffer.subarray(0, 8).toString('hex'),
    width: buffer.readUInt32BE(16),
  };
}

describe('branding assets and native splash configuration', () => {
  it('keeps the editable original SVG and transparent PNG dimensions', () => {
    const svg = fs.readFileSync(
      path.join(
        projectRoot,
        'assets/branding/elden-ring-companion-emblem.svg',
      ),
      'utf8',
    );
    expect(svg).toContain('<svg');
    expect(svg).toContain('#E2B34A');
    expect(svg).not.toMatch(/fromsoftware|bandai namco|official symbol/i);

    expect(
      readPngHeader('assets/branding/elden-ring-companion-emblem.png'),
    ).toEqual({
      colorType: 6,
      height: 640,
      signature: '89504e470d0a1a0a',
      width: 512,
    });
    expect(
      readPngHeader('assets/branding/elden-ring-companion-splash.png'),
    ).toEqual({
      colorType: 6,
      height: 1200,
      signature: '89504e470d0a1a0a',
      width: 900,
    });
  });

  it('configures the official splash plugin without changing the app icon', () => {
    const appConfig = JSON.parse(
      fs.readFileSync(path.join(projectRoot, 'app.json'), 'utf8'),
    );
    const splashPlugin = appConfig.expo.plugins.find(
      (plugin: unknown) => Array.isArray(plugin) && plugin[0] === 'expo-splash-screen',
    );

    expect(appConfig.expo.icon).toBe('./assets/images/icon.png');
    expect(splashPlugin).toEqual([
      'expo-splash-screen',
      {
        image: './assets/branding/elden-ring-companion-splash.png',
        imageWidth: appBranding.nativeSplashImageWidth,
        resizeMode: 'contain',
        backgroundColor: appBranding.splashBackground,
        dark: {
          image: './assets/branding/elden-ring-companion-splash.png',
          backgroundColor: appBranding.splashBackground,
        },
      },
    ]);
  });

  it('keeps the exact approved application name centralized', () => {
    expect(appBranding.name).toBe('Elden Ring Companion');
  });
});

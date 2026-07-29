import { StatusBar } from 'expo-status-bar';
import {
  AccessibilityInfo,
  Animated,
  Easing,
  Image,
  StyleSheet,
  useWindowDimensions,
  type LayoutChangeEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback, useEffect, useRef } from 'react';

import {
  appBranding,
  brandingAssets,
  calculateSplashLayout,
  splashLayout,
} from '../branding';
import { AppText } from './app-text';

interface AnimatedAppSplashProps {
  readonly onComplete: () => void;
  readonly onReady: () => void;
  readonly startExit: boolean;
}

export function createSplashExitAnimation(
  opacity: Animated.Value,
  scale: Animated.Value,
  reduceMotion: boolean,
) {
  const duration = reduceMotion
    ? appBranding.reducedMotionExitDuration
    : appBranding.splashExitDuration;

  return Animated.parallel([
    Animated.timing(opacity, {
      duration,
      easing: Easing.out(Easing.cubic),
      toValue: 0,
      useNativeDriver: true,
    }),
    Animated.timing(scale, {
      duration,
      easing: Easing.out(Easing.cubic),
      toValue: reduceMotion ? 1 : splashLayout.maximumScale,
      useNativeDriver: true,
    }),
  ]);
}

export function AnimatedAppSplash({
  onComplete,
  onReady,
  startExit,
}: AnimatedAppSplashProps) {
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const hasReportedReady = useRef(false);
  const { height, width } = useWindowDimensions();
  const metrics = calculateSplashLayout(width, height);

  const handleLayout = useCallback(
    (_event: LayoutChangeEvent) => {
      if (hasReportedReady.current) return;
      hasReportedReady.current = true;
      onReady();
    },
    [onReady],
  );

  useEffect(() => {
    if (!startExit) return;
    let isActive = true;

    void AccessibilityInfo.isReduceMotionEnabled()
      .catch(() => false)
      .then((reduceMotion) => {
        if (!isActive) return;
        createSplashExitAnimation(opacity, scale, reduceMotion).start(
          ({ finished }) => {
            if (finished && isActive) onComplete();
          },
        );
      });

    return () => {
      isActive = false;
      opacity.stopAnimation();
      scale.stopAnimation();
    };
  }, [onComplete, opacity, scale, startExit]);

  return (
    <SafeAreaView
      accessibilityLabel={appBranding.name}
      accessibilityRole="image"
      onLayout={handleLayout}
      pointerEvents="auto"
      style={styles.overlay}
      testID="animated-app-splash">
      <StatusBar
        backgroundColor={appBranding.splashBackground}
        style="light"
      />
      <Animated.View
        style={[
          styles.brandGroup,
          {
            opacity,
            gap: metrics.spacing,
            transform: [
              { translateY: metrics.opticalOffset },
              { scale },
            ],
          },
        ]}
        testID="animated-app-splash-group">
        <Image
          accessible={false}
          resizeMode="contain"
          source={brandingAssets.emblem}
          style={[
            styles.emblem,
            {
              width: metrics.emblemWidth,
            },
          ]}
          testID="animated-app-splash-emblem"
        />
        <AppText
          adjustsFontSizeToFit
          minimumFontScale={0.72}
          numberOfLines={1}
          style={[
            styles.title,
            {
              fontSize: metrics.titleFontSize,
              maxWidth: metrics.titleMaxWidth,
            },
          ]}
          testID="animated-app-splash-title"
          variant="display">
          {appBranding.name}
        </AppText>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  brandGroup: {
    alignItems: 'center',
    flexShrink: 1,
    justifyContent: 'center',
    width: '100%',
  },
  emblem: {
    aspectRatio: 512 / 640,
    maxWidth: splashLayout.maximumEmblemWidth,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: appBranding.splashBackground,
    justifyContent: 'center',
    paddingHorizontal: splashLayout.horizontalPadding,
    zIndex: 1000,
  },
  title: {
    color: appBranding.gold,
    flexShrink: 1,
    textAlign: 'center',
    width: '100%',
  },
});

import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';

import { appFontAssets } from '../theme/typography';

interface AppFontsState {
  readonly error: Error | null;
  readonly isLoaded: boolean;
  readonly retry: () => void;
}

export function useAppFonts(): AppFontsState {
  const [attempt, setAttempt] = useState(0);
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setError(null);
    setIsLoaded(false);

    void Font.loadAsync(appFontAssets)
      .then(() => {
        if (isMounted) setIsLoaded(true);
      })
      .catch((loadError: unknown) => {
        if (!isMounted) return;
        setError(
          loadError instanceof Error
            ? loadError
            : new Error('Unable to load application fonts.'),
        );
      });

    return () => {
      isMounted = false;
    };
  }, [attempt]);

  const retry = useCallback(() => {
    setAttempt((currentAttempt) => currentAttempt + 1);
  }, []);

  return { error, isLoaded, retry };
}

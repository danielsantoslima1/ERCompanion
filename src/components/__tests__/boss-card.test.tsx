import {
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import { Alert, StyleSheet } from 'react-native';
import type { TestInstance } from 'test-renderer';

import type { AppContextValue } from '../../contexts/app-context';
import { getTranslationDictionary } from '../../i18n';
import { darkTheme, lightTheme, typography } from '../../theme';
import { BossCard } from '../boss-card';

interface ControlledVoidPromise {
  promise: Promise<void>;
  reject: (reason?: unknown) => void;
  resolve: () => void;
}

const translations = getTranslationDictionary('en');
const markBossDefeated = jest.fn<
  ReturnType<AppContextValue['markBossDefeated']>,
  Parameters<AppContextValue['markBossDefeated']>
>();
const markBossNotDefeated = jest.fn<
  ReturnType<AppContextValue['markBossNotDefeated']>,
  Parameters<AppContextValue['markBossNotDefeated']>
>();
let mockAppState: Pick<
  AppContextValue,
  'markBossDefeated' | 'markBossNotDefeated' | 'theme' | 'translations'
> = {
  markBossDefeated,
  markBossNotDefeated,
  theme: lightTheme,
  translations,
};

jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

function createControlledVoidPromise(): ControlledVoidPromise {
  let rejectPromise: (reason?: unknown) => void = () => undefined;
  let resolvePromise: () => void = () => undefined;
  const promise = new Promise<void>((resolve, reject) => {
    rejectPromise = reject;
    resolvePromise = () => resolve();
  });

  return {
    promise,
    reject: rejectPromise,
    resolve: resolvePromise,
  };
}

function getPressHandler(instance: TestInstance): () => Promise<void> {
  let fiber = instance.unstable_fiber;

  while (fiber !== null) {
    const props: unknown = fiber.memoizedProps;

    if (typeof props === 'object' && props !== null && 'onPress' in props) {
      const onPress = props.onPress;

      if (typeof onPress === 'function') {
        return async (): Promise<void> => {
          await onPress();
        };
      }
    }

    fiber = fiber.return;
  }

  throw new Error('Press handler not found.');
}

beforeEach(() => {
  jest.clearAllMocks();
  markBossDefeated.mockResolvedValue();
  markBossNotDefeated.mockResolvedValue();
  mockAppState = {
    markBossDefeated,
    markBossNotDefeated,
    theme: lightTheme,
    translations,
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('BossCard', () => {
  it('opens details without changing progress', async () => {
    const onViewDetails = jest.fn();
    await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
        onViewDetails={onViewDetails}
      />,
    );

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.bossDetails.viewDetailsFor('Test Boss'),
      }),
    );

    expect(onViewDetails).toHaveBeenCalledTimes(1);
    expect(markBossDefeated).not.toHaveBeenCalled();
    expect(markBossNotDefeated).not.toHaveBeenCalled();
  });

  it('uses the shared details button visual contract', async () => {
    await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
        onViewDetails={jest.fn()}
      />,
    );

    expect(StyleSheet.flatten(screen.getByTestId('details-button').props.style))
      .toMatchObject({
        alignItems: 'center',
        borderColor: lightTheme.colors.primary,
        borderRadius: lightTheme.borderRadius.medium,
        borderWidth: 1,
        justifyContent: 'center',
        minHeight: 48,
        opacity: 1,
        paddingHorizontal: lightTheme.spacing.medium,
        paddingVertical: lightTheme.spacing.small,
      });
    expect(screen.getByText('View details')).toHaveStyle({
      fontFamily: typography.bodyBold,
    });
  });

  it('uses semantic gold details over structural green in the dark theme', async () => {
    mockAppState = { ...mockAppState, theme: darkTheme };
    await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
      />,
    );

    expect(screen.getByText('Test Boss')).toHaveStyle({
      color: darkTheme.colors.cardAccentText,
    });
    expect(
      screen.getByTestId('boss-status-icon-not-defeated', {
        includeHiddenElements: true,
      }),
    ).toHaveStyle({ color: darkTheme.colors.cardAccentIcon });
  });

  it('preserves green success semantics on a defeated dark-theme card', async () => {
    mockAppState = { ...mockAppState, theme: darkTheme };
    await render(
      <BossCard
        id="test-boss"
        isDefeated
        location="Test Location"
        name="Test Boss"
      />,
    );

    expect(
      screen.getByTestId('boss-status-icon-defeated', {
        includeHiddenElements: true,
      }),
    ).toHaveStyle({ color: darkTheme.colors.success });
  });

  it('changes progress without opening details', async () => {
    const onViewDetails = jest.fn();
    await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
        onViewDetails={onViewDetails}
      />,
    );

    await fireEvent.press(
      screen.getByRole('button', {
        name: translations.region.markAsDefeated,
      }),
    );

    expect(markBossDefeated).toHaveBeenCalledWith('test-boss');
    expect(onViewDetails).not.toHaveBeenCalled();
  });

  it('shows the non-defeated state and action text accessibly', async () => {
    await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
      />,
    );

    expect(screen.getByText('Test Boss')).toBeOnTheScreen();
    expect(screen.getByText('Test Location')).toBeOnTheScreen();
    expect(screen.queryByText(translations.region.notDefeatedStatus)).toBeNull();
    expect(
      screen.getByTestId('boss-status-icon-not-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();
    expect(
      screen.getByTestId('boss-status-icon-not-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();
    expect(
      screen.queryByTestId('boss-status-icon-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeNull();
    expect(
      screen.getByRole('button', {
        name: translations.region.markAsDefeated,
      }),
    ).toBeEnabled();
    expect(
      screen.getByLabelText(
        translations.region.bossCardAccessibility(
          'Test Boss',
          undefined,
          'Test Location',
          translations.region.notDefeatedStatus,
        ),
      ),
    ).toBeOnTheScreen();
  });

  it('shows the defeated state and undo action text', async () => {
    await render(
      <BossCard
        id="test-boss"
        isDefeated
        location="Test Location"
        name="Test Boss"
      />,
    );

    expect(screen.queryByText(translations.region.defeatedStatus)).toBeNull();
    expect(
      screen.getByTestId('boss-status-icon-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();
    expect(
      screen.queryByTestId('boss-status-icon-not-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeNull();
    expect(
      screen.getByRole('button', {
        name: translations.region.markAsNotDefeated,
      }),
    ).toBeEnabled();
  });

  it('updates and restores the decorative icon from the progress prop', async () => {
    const view = await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
      />,
    );
    expect(
      screen.getByTestId('boss-status-icon-not-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();

    await view.rerender(
      <BossCard
        id="test-boss"
        isDefeated
        location="Test Location"
        name="Test Boss"
      />,
    );
    expect(
      screen.getByTestId('boss-status-icon-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();

    await view.rerender(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
      />,
    );
    expect(
      screen.getByTestId('boss-status-icon-not-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();
  });

  it('keeps the icon decorative and long names untruncated', async () => {
    const longName =
      'A very long encounter name that must wrap without destructive truncation';
    await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name={longName}
      />,
    );
    const icon = screen.getByTestId('boss-status-icon-not-defeated', {
      includeHiddenElements: true,
    });
    expect(icon.props.accessibilityElementsHidden).toBe(true);
    expect(icon.props.pointerEvents).toBe('none');
    expect(screen.getByText(longName).props.numberOfLines).toBeUndefined();
  });

  it.each([
    {
      isDefeated: false,
      actionLabel: translations.region.markAsDefeated,
      expectedAction: markBossDefeated,
      otherAction: markBossNotDefeated,
    },
    {
      isDefeated: true,
      actionLabel: translations.region.markAsNotDefeated,
      expectedAction: markBossNotDefeated,
      otherAction: markBossDefeated,
    },
  ])(
    'calls the correct progress action when isDefeated is $isDefeated',
    async ({ actionLabel, expectedAction, isDefeated, otherAction }) => {
      await render(
        <BossCard
          id="test-boss"
          isDefeated={isDefeated}
          location="Test Location"
          name="Test Boss"
        />,
      );

      await fireEvent.press(screen.getByRole('button', { name: actionLabel }));

      expect(expectedAction).toHaveBeenCalledWith('test-boss');
      expect(otherAction).not.toHaveBeenCalled();
    },
  );

  it('shows processing state and blocks repeated presses while pending', async () => {
    const controlledAction = createControlledVoidPromise();
    markBossDefeated.mockImplementation(() => controlledAction.promise);

    await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
      />,
    );
    const button = screen.getByRole('button', {
      name: translations.region.markAsDefeated,
    });
    const onPress = getPressHandler(button);

    await act(() => {
      void onPress();
      void onPress();
    });

    expect(markBossDefeated).toHaveBeenCalledTimes(1);
    expect(button).toBeDisabled();
    expect(button.props.accessibilityState).toMatchObject({
      busy: true,
      disabled: true,
    });
    expect(screen.getByText(translations.region.saving)).toBeOnTheScreen();

    await act(async () => {
      controlledAction.resolve();
      await controlledAction.promise;
    });

    expect(button).toBeEnabled();
    expect(button.props.accessibilityState).toMatchObject({
      busy: false,
      disabled: false,
    });
  });

  it('reports a rejected action and preserves the previous visual state', async () => {
    const controlledAction = createControlledVoidPromise();
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    markBossDefeated.mockImplementation(() => controlledAction.promise);

    await render(
      <BossCard
        id="test-boss"
        isDefeated={false}
        location="Test Location"
        name="Test Boss"
      />,
    );
    const button = screen.getByRole('button', {
      name: translations.region.markAsDefeated,
    });
    const onPress = getPressHandler(button);

    await act(() => {
      void onPress();
    });
    await act(async () => {
      controlledAction.reject(new Error('technical failure details'));
      await controlledAction.promise.catch(() => undefined);
    });

    expect(alertSpy).toHaveBeenCalledWith(
      translations.region.updateErrorTitle,
      translations.region.updateErrorMessage,
    );
    expect(screen.queryByText(translations.region.notDefeatedStatus)).toBeNull();
    expect(
      screen.getByTestId('boss-status-icon-not-defeated', {
        includeHiddenElements: true,
      }),
    ).toBeOnTheScreen();
    expect(
      screen.getByRole('button', {
        name: translations.region.markAsDefeated,
      }),
    ).toBeEnabled();
    expect(screen.queryByText('technical failure details')).toBeNull();
  });
});

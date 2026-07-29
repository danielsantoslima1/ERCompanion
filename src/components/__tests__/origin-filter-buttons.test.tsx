import { fireEvent, render, screen } from '@testing-library/react-native';

import type { AppContextValue } from '../../contexts/app-context';
import { getTranslationDictionary } from '../../i18n';
import { lightTheme, typography } from '../../theme';
import {
  OriginFilterButtons,
  type OriginFilter,
} from '../origin-filter-buttons';

let activeOrigin: OriginFilter = 'all';
const onChange = jest.fn((origin: OriginFilter) => {
  activeOrigin = origin;
});
const mockApp: Pick<AppContextValue, 'theme' | 'translations'> = {
  theme: lightTheme,
  translations: getTranslationDictionary('pt-BR'),
};

jest.mock('../../hooks/use-app', () => ({ useApp: () => mockApp }));

function FilterHarness() {
  const translations = mockApp.translations;
  return (
    <OriginFilterButtons
      activeOrigin={activeOrigin}
      baseLabel={translations.common.baseFilter}
      dlcLabel={translations.common.dlcFilter}
      getAccessibilityLabel={translations.common.filterByOrigin}
      onChange={onChange}
    />
  );
}

beforeEach(() => {
  activeOrigin = 'all';
  onChange.mockClear();
});

describe('OriginFilterButtons', () => {
  it('starts unselected and exposes localized accessible button state', async () => {
    await render(<FilterHarness />);
    expect(
      screen.getByRole('button', { name: 'Filtrar por origem: Base' }).props
        .accessibilityState,
    ).toEqual({ selected: false });
    expect(
      screen.getByRole('button', { name: 'Filtrar por origem: DLC' }).props
        .accessibilityState,
    ).toEqual({ selected: false });
    expect(screen.getByText('Base')).toHaveStyle({
      fontFamily: typography.bodyBold,
    });
  });

  it('supports the English labels and accessible actions', async () => {
    const translations = getTranslationDictionary('en');
    await render(
      <OriginFilterButtons
        activeOrigin="all"
        baseLabel={translations.common.baseFilter}
        dlcLabel={translations.common.dlcFilter}
        getAccessibilityLabel={translations.common.filterByOrigin}
        onChange={jest.fn()}
      />,
    );
    expect(
      screen.getByRole('button', { name: 'Filter by origin: Base' }),
    ).toBeOnTheScreen();
    expect(
      screen.getByRole('button', { name: 'Filter by origin: DLC' }),
    ).toBeOnTheScreen();
  });

  it('selects one origin, switches exclusively, and clears the active origin', async () => {
    const view = await render(<FilterHarness />);
    await fireEvent.press(
      screen.getByRole('button', { name: 'Filtrar por origem: Base' }),
    );
    expect(onChange).toHaveBeenLastCalledWith('base-game');
    await view.rerender(<FilterHarness />);
    expect(
      screen.getByRole('button', { name: 'Filtrar por origem: Base' }).props
        .accessibilityState,
    ).toEqual({ selected: true });

    await fireEvent.press(
      screen.getByRole('button', { name: 'Filtrar por origem: DLC' }),
    );
    expect(onChange).toHaveBeenLastCalledWith('shadow-of-the-erdtree');
    await view.rerender(<FilterHarness />);
    expect(
      screen.getByRole('button', { name: 'Filtrar por origem: Base' }).props
        .accessibilityState,
    ).toEqual({ selected: false });
    expect(
      screen.getByRole('button', { name: 'Filtrar por origem: DLC' }).props
        .accessibilityState,
    ).toEqual({ selected: true });

    await fireEvent.press(
      screen.getByRole('button', { name: 'Filtrar por origem: DLC' }),
    );
    expect(onChange).toHaveBeenLastCalledWith('all');
  });
});

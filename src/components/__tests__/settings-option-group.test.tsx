import { fireEvent, render, screen } from '@testing-library/react-native';

import type { AppContextValue } from '../../contexts/app-context';
import { getTranslationDictionary } from '../../i18n';
import { lightTheme } from '../../theme';
import {
  SettingsOptionGroup,
  type SettingsOption,
} from '../settings-option-group';

type TestOption = 'first' | 'second' | 'third';

const translations = getTranslationDictionary('en');
const options: readonly SettingsOption<TestOption>[] = [
  {
    value: 'first',
    label: 'First option',
    description: 'First description',
  },
  {
    value: 'second',
    label: 'Second option',
    description: 'Second description',
  },
  {
    value: 'third',
    label: 'Third option',
    description: 'Third description',
  },
];
let mockAppState: Pick<AppContextValue, 'theme' | 'translations'> = {
  theme: lightTheme,
  translations,
};

jest.mock('../../hooks/use-app', () => ({
  useApp: jest.fn(() => mockAppState),
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockAppState = { theme: lightTheme, translations };
});

describe('SettingsOptionGroup', () => {
  it('shows the section title, description, and every option', async () => {
    await render(
      <SettingsOptionGroup
        description="Section description"
        onSelect={jest.fn<void, [TestOption]>()}
        options={options}
        savingValue={null}
        selectedValue="first"
        title="Section title"
      />,
    );

    expect(
      screen.getByRole('header', { name: 'Section title' }),
    ).toBeOnTheScreen();
    expect(screen.getByText('Section description')).toBeOnTheScreen();
    for (const option of options) {
      expect(screen.getByText(option.label)).toBeOnTheScreen();
      expect(screen.getByText(option.description)).toBeOnTheScreen();
    }
  });

  it('exposes radio semantics and a textual selected indication', async () => {
    await render(
      <SettingsOptionGroup
        description="Section description"
        onSelect={jest.fn<void, [TestOption]>()}
        options={options}
        savingValue={null}
        selectedValue="second"
        title="Section title"
      />,
    );

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(3);
    expect(radios[0].props.accessibilityState).toMatchObject({
      selected: false,
    });
    expect(radios[1].props.accessibilityState).toMatchObject({
      selected: true,
    });
    expect(radios[2].props.accessibilityState).toMatchObject({
      selected: false,
    });
    expect(
      screen.getByText(`✓ ${translations.settings.selected}`),
    ).toBeOnTheScreen();
  });

  it('calls onSelect with another option value', async () => {
    const onSelect = jest.fn<void, [TestOption]>();
    await render(
      <SettingsOptionGroup
        description="Section description"
        onSelect={onSelect}
        options={options}
        savingValue={null}
        selectedValue="first"
        title="Section title"
      />,
    );

    await fireEvent.press(screen.getAllByRole('radio')[1]);

    expect(onSelect).toHaveBeenCalledWith('second');
  });

  it('keeps the current behavior of calling onSelect for the selected option', async () => {
    const onSelect = jest.fn<void, [TestOption]>();
    await render(
      <SettingsOptionGroup
        description="Section description"
        onSelect={onSelect}
        options={options}
        savingValue={null}
        selectedValue="first"
        title="Section title"
      />,
    );

    await fireEvent.press(screen.getAllByRole('radio')[0]);

    expect(onSelect).toHaveBeenCalledWith('first');
  });

  it('disables the section and indicates which option is being saved', async () => {
    const onSelect = jest.fn<void, [TestOption]>();
    await render(
      <SettingsOptionGroup
        description="Section description"
        onSelect={onSelect}
        options={options}
        savingValue="second"
        selectedValue="first"
        title="Section title"
      />,
    );

    const radios = screen.getAllByRole('radio');
    for (const radio of radios) {
      expect(radio).toBeDisabled();
      expect(radio.props.accessibilityState).toMatchObject({
        disabled: true,
      });
    }
    expect(screen.getByText(translations.settings.saving)).toBeOnTheScreen();

    await fireEvent.press(radios[2]);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('enables all options again after saving ends', async () => {
    const onSelect = jest.fn<void, [TestOption]>();
    const renderResult = await render(
      <SettingsOptionGroup
        description="Section description"
        onSelect={onSelect}
        options={options}
        savingValue="second"
        selectedValue="first"
        title="Section title"
      />,
    );

    await renderResult.rerender(
      <SettingsOptionGroup
        description="Section description"
        onSelect={onSelect}
        options={options}
        savingValue={null}
        selectedValue="second"
        title="Section title"
      />,
    );

    for (const radio of screen.getAllByRole('radio')) {
      expect(radio).toBeEnabled();
      expect(radio.props.accessibilityState).toMatchObject({
        disabled: false,
      });
    }
    expect(screen.queryByText(translations.settings.saving)).toBeNull();
    expect(
      screen.getByText(`✓ ${translations.settings.selected}`),
    ).toBeOnTheScreen();
  });
});

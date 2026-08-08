import { render, screen } from '@testing-library/react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { FilterButtonGroup } from '../filter-button-group';

jest.mock('../../hooks/use-app', () => ({
  useApp: () => ({
    theme: jest.requireActual('../../theme').lightTheme,
  }),
}));

function FilterGroupFixture({
  labels = ['Base', 'DLC', 'Legendary', 'Missable'],
  width,
}: {
  readonly labels?: readonly string[];
  readonly width: number;
}) {
  return (
    <View style={{ width }}>
      <FilterButtonGroup accessibilityLabel="List filters">
        {labels.map((label) => (
          <Pressable
            key={label}
            accessibilityRole="button"
            style={{ flexShrink: 0, minHeight: 44 }}>
            <Text>{label}</Text>
          </Pressable>
        ))}
      </FilterButtonGroup>
    </View>
  );
}

describe('FilterButtonGroup', () => {
  it.each([320, 360, 390, 412, 768])(
    'allows automatic wrapping without hiding filters at %d dp',
    async (width) => {
      await render(<FilterGroupFixture width={width} />);
      const group = screen.getByTestId('filter-button-group');
      const groupStyle = StyleSheet.flatten(group.props.style);

      expect(group.type).toBe('View');
      expect(group.props.horizontal).toBeUndefined();
      expect(groupStyle).toMatchObject({
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'visible',
        width: '100%',
      });
      expect(screen.getByRole('button', { name: 'Base' })).toBeOnTheScreen();
      expect(
        screen.getByRole('button', { name: 'Missable' }),
      ).toBeOnTheScreen();
    },
  );

  it.each([
    ['one line', ['Base', 'DLC']],
    ['two lines when needed', ['Base', 'DLC', 'All', 'Defeated', 'Not Defeated']],
    [
      'three or more lines when needed',
      [
        'Base',
        'DLC',
        'All',
        'Defeated',
        'Not Defeated',
        'Legendary',
        'Missable',
        'Collected',
        'Not Collected',
      ],
    ],
  ] as const)('supports %s with content-sized controls', async (_, labels) => {
    await render(<FilterGroupFixture labels={labels} width={320} />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(labels.length);
    for (const label of labels) {
      expect(screen.getByText(label)).toBeOnTheScreen();
    }
    for (const button of buttons) {
      expect(StyleSheet.flatten(button.props.style)).toMatchObject({
        flexShrink: 0,
        minHeight: 44,
      });
    }
  });
});

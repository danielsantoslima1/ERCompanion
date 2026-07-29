import { render, screen } from '@testing-library/react-native';
import AllAshesOfWarRoute from '../(drawer)/ashes-of-war';
import BaseGameAshesOfWarRoute from '../(drawer)/ashes-of-war/base-game';
import ExpansionAshesOfWarRoute from '../(drawer)/ashes-of-war/shadow-of-the-erdtree';
import AshOfWarDetailRoute from '../ashes-of-war/[ashOfWarId]';

jest.mock('@/src/components/ash-of-war-list-screen', () => ({
  AshOfWarListScreen: ({ mode }: { mode: string }) => {
    const { Text } = jest.requireActual('react-native');
    return <Text>{mode}</Text>;
  },
}));
jest.mock('../ashes-of-war/[ashOfWarId]', () => ({
  __esModule: true,
  default: () => {
    const { Text } = jest.requireActual('react-native');
    return <Text>detail-route</Text>;
  },
}));

describe('Ashes of War public routes', () => {
  it('registers /ashes-of-war as the combined list', async () => {
    await render(<AllAshesOfWarRoute />);
    expect(screen.getByText('all')).toBeOnTheScreen();
    expect(screen.queryByText(/Unmatched Route/i)).toBeNull();
  });

  it('keeps base-game as a static list segment', async () => {
    await render(<BaseGameAshesOfWarRoute />);
    expect(screen.getByText('base-game')).toBeOnTheScreen();
  });

  it('keeps shadow-of-the-erdtree as a static list segment', async () => {
    await render(<ExpansionAshesOfWarRoute />);
    expect(screen.getByText('shadow-of-the-erdtree')).toBeOnTheScreen();
  });

  it('registers the dynamic detail route separately', async () => {
    await render(<AshOfWarDetailRoute />);
    expect(screen.getByText('detail-route')).toBeOnTheScreen();
  });
});

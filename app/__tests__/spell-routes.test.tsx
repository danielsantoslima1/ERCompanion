import { render, screen } from '@testing-library/react-native';
import Sorceries from '../(drawer)/sorceries';
import SorceriesBase from '../(drawer)/sorceries/base-game';
import SorceriesDlc from '../(drawer)/sorceries/shadow-of-the-erdtree';
import Incantations from '../(drawer)/incantations';
import IncantationsBase from '../(drawer)/incantations/base-game';
import IncantationsDlc from '../(drawer)/incantations/shadow-of-the-erdtree';
import IncantationDetail from '../incantations/[incantationId]';
import SorceryDetail from '../sorceries/[sorceryId]';

jest.mock('@/src/components/spell-list-screen', () => ({
  SpellListScreen: ({ category, mode }: { category: string; mode: string }) => {
    const { Text } = jest.requireActual('react-native');
    return <Text>{category}:{mode}</Text>;
  },
}));
jest.mock('@/src/components/spell-detail-screen', () => ({
  SpellDetailScreen: ({ category, id }: { category: string; id: string }) => {
    const { Text } = jest.requireActual('react-native');
    return <Text>{category}:{id}</Text>;
  },
}));
jest.mock('expo-router', () => ({
  useLocalSearchParams: () => ({
    incantationId: 'incantation-agheels-flame',
    sorceryId: 'sorcery-adulas-moonblade',
  }),
}));

describe('Sorcery and Incantation public list routes', () => {
  it.each([
    [<Sorceries key="s" />, 'sorcery:all'],
    [<SorceriesBase key="sb" />, 'sorcery:base-game'],
    [<SorceriesDlc key="sd" />, 'sorcery:shadow-of-the-erdtree'],
    [<Incantations key="i" />, 'incantation:all'],
    [<IncantationsBase key="ib" />, 'incantation:base-game'],
    [<IncantationsDlc key="id" />, 'incantation:shadow-of-the-erdtree'],
  ])('registers a static list route', async (component, text) => {
    await render(component);
    expect(screen.getByText(text)).toBeOnTheScreen();
    expect(screen.queryByText(/Unmatched Route/i)).toBeNull();
  });

  it('registers both dynamic detail routes with category-specific IDs', async () => {
    const sorcery = await render(<SorceryDetail />);
    expect(
      screen.getByText('sorcery:sorcery-adulas-moonblade'),
    ).toBeOnTheScreen();
    await sorcery.unmount();
    await render(<IncantationDetail />);
    expect(
      screen.getByText('incantation:incantation-agheels-flame'),
    ).toBeOnTheScreen();
  });
});

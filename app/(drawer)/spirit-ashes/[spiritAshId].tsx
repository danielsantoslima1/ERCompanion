import { useLocalSearchParams } from 'expo-router';
import { SpiritAshDetailScreen } from '@/src/components/spirit-ash-detail-screen';

export default function DrawerSpiritAshDetailRoute() {
  const { spiritAshId } = useLocalSearchParams<{ spiritAshId?: string | string[] }>();
  return <SpiritAshDetailScreen id={Array.isArray(spiritAshId) ? spiritAshId[0] ?? '' : spiritAshId ?? ''} />;
}

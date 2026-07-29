import { useLocalSearchParams } from 'expo-router';
import { SpellDetailScreen } from '@/src/components/spell-detail-screen';
export default function Screen() {
  const { incantationId } = useLocalSearchParams<{ incantationId?: string | string[] }>();
  const id = Array.isArray(incantationId) ? incantationId[0] ?? '' : incantationId ?? '';
  return <SpellDetailScreen category="incantation" id={id} />;
}

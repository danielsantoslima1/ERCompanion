import { useLocalSearchParams } from 'expo-router';
import { SpellDetailScreen } from '@/src/components/spell-detail-screen';
export default function Screen() {
  const { sorceryId } = useLocalSearchParams<{ sorceryId?: string | string[] }>();
  const id = Array.isArray(sorceryId) ? sorceryId[0] ?? '' : sorceryId ?? '';
  return <SpellDetailScreen category="sorcery" id={id} />;
}

import { useLocalSearchParams } from 'expo-router';
import { TalismanDetailScreen } from '@/src/components/talisman-detail-screen';
export default function TalismanDetailRoute() { const { talismanId } = useLocalSearchParams<{ talismanId?: string | string[] }>(); return <TalismanDetailScreen id={Array.isArray(talismanId) ? talismanId[0] ?? '' : talismanId ?? ''} />; }

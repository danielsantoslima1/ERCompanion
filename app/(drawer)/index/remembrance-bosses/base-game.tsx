import { Drawer } from 'expo-router/drawer';

import { PlaceholderScreen } from '@/src/components/placeholder-screen';
import { INDEX_LABELS } from '@/src/index/index-sections';

export default function RemembranceBossesBaseGameScreen() {
  const title = `${INDEX_LABELS.remembranceBosses} — ${INDEX_LABELS.baseGame}`;

  return (
    <>
      <Drawer.Screen options={{ title }} />
      <PlaceholderScreen
        message={INDEX_LABELS.emptyDescription}
        title={INDEX_LABELS.emptyTitle}
      />
    </>
  );
}

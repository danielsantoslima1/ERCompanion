import { Drawer } from 'expo-router/drawer';

import { IndexNavigationScreen } from '@/src/components/index-navigation-screen';
import {
  INDEX_LABELS,
  REMEMBRANCE_BOSSES_ENTRIES,
} from '@/src/index/index-sections';

export default function RemembranceBossesScreen() {
  return (
    <>
      <Drawer.Screen options={{ title: INDEX_LABELS.remembranceBosses }} />
      <IndexNavigationScreen
        entries={REMEMBRANCE_BOSSES_ENTRIES}
        title={INDEX_LABELS.remembranceBosses}
      />
    </>
  );
}

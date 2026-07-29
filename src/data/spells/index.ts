import { incantations } from './incantations';
import { sorceries } from './sorceries';
import { assertValidSpellCatalog } from './validators';

if (__DEV__) {
  assertValidSpellCatalog(sorceries, 'sorcery');
  assertValidSpellCatalog(incantations, 'incantation');
}

export { incantations } from './incantations';
export { sorceries } from './sorceries';
export * from './selectors';
export * from './types';
export * from './validators';

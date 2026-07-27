import type { Region } from '../types';

// Temporary sample data used to validate the architecture.
// Replace every entry with reviewed project data before publication.
export const regions: readonly Region[] = Object.freeze([
  {
    id: 'sample-base-region',
    name: {
      'pt-BR': 'Região de Exemplo',
      en: 'Sample Region',
    },
    game: 'base-game',
    displayOrder: 1,
  },
  {
    id: 'sample-expansion-region',
    name: {
      'pt-BR': 'Região de Exemplo da Expansão',
      en: 'Sample Expansion Region',
    },
    game: 'shadow-of-the-erdtree',
    displayOrder: 2,
  },
]);

import type { BossEncounter } from '../types';

// Temporary sample data used to validate the architecture.
// Replace every entry with reviewed project data before publication.
export const bosses: readonly BossEncounter[] = Object.freeze([
  {
    id: 'sample-base-training-guardian',
    name: {
      'pt-BR': 'Guardião de Treino',
      en: 'Training Guardian',
    },
    location: {
      'pt-BR': 'Pátio de Exemplo',
      en: 'Sample Courtyard',
    },
    regionId: 'sample-base-region',
    game: 'base-game',
  },
  {
    id: 'sample-base-test-wanderer',
    name: {
      'pt-BR': 'Andarilho de Teste',
      en: 'Test Wanderer',
    },
    location: {
      'pt-BR': 'Caminho Temporário',
      en: 'Temporary Path',
    },
    regionId: 'sample-base-region',
    game: 'base-game',
  },
  {
    id: 'sample-expansion-demo-sentinel',
    name: {
      'pt-BR': 'Sentinela de Demonstração',
      en: 'Demo Sentinel',
    },
    location: {
      'pt-BR': 'Vale Temporário',
      en: 'Temporary Valley',
    },
    regionId: 'sample-expansion-region',
    game: 'shadow-of-the-erdtree',
  },
  {
    id: 'sample-expansion-prototype-watcher',
    name: {
      'pt-BR': 'Vigia de Protótipo',
      en: 'Prototype Watcher',
    },
    location: {
      'pt-BR': 'Ruínas Fictícias',
      en: 'Fictional Ruins',
    },
    regionId: 'sample-expansion-region',
    game: 'shadow-of-the-erdtree',
  },
]);

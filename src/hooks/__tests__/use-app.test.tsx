import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { useApp } from '../use-app';

jest.mock('../../storage', () => ({
  defaultSettings: {
    language: 'pt-BR',
    theme: 'system',
  },
  loadSettings: jest.fn(),
  saveSettings: jest.fn(),
  restoreDefaultSettings: jest.fn(),
  loadDefeatedBossIds: jest.fn(),
  addDefeatedBossId: jest.fn(),
  removeDefeatedBossId: jest.fn(),
  clearProgress: jest.fn(),
}));

function ConsumerOutsideProvider() {
  useApp();
  return <Text>unreachable</Text>;
}

describe('useApp', () => {
  it('throws a clear error when used outside AppProvider', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);

    try {
      await expect(render(<ConsumerOutsideProvider />)).rejects.toThrow(
        'useApp must be used within an AppProvider.',
      );
    } finally {
      consoleError.mockRestore();
    }
  });
});

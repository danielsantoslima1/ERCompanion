import * as Font from 'expo-font';
import { act, renderHook, waitFor } from '@testing-library/react-native';

import { appFontAssets } from '../../theme/typography';
import { useAppFonts } from '../use-app-fonts';

jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
}));

const mockedLoadAsync = jest.mocked(Font.loadAsync);

describe('useAppFonts', () => {
  beforeEach(() => {
    mockedLoadAsync.mockReset();
  });

  it('loads the centralized local assets before reporting readiness', async () => {
    let resolveLoad: () => void = () => undefined;
    mockedLoadAsync.mockImplementation(
      () =>
        new Promise<void>((resolve) => {
          resolveLoad = resolve;
        }),
    );
    const { result } = await renderHook(() => useAppFonts());

    expect(result.current.isLoaded).toBe(false);
    await act(async () => resolveLoad());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));
    expect(mockedLoadAsync).toHaveBeenCalledWith(appFontAssets);
    expect(result.current.error).toBeNull();
  });

  it('reports a loading error and retries without getting stuck', async () => {
    mockedLoadAsync
      .mockRejectedValueOnce(new Error('font failure'))
      .mockResolvedValueOnce(undefined);
    const { result } = await renderHook(() => useAppFonts());

    await waitFor(() => expect(result.current.error?.message).toBe('font failure'));
    await act(async () => result.current.retry());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));
    expect(mockedLoadAsync).toHaveBeenCalledTimes(2);
  });
});

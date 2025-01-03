import { useTemplateApiQuery } from './useTemplateApiQuery';
import { axiosGet } from '../axiosGet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';


jest.mock('../axiosGet', () => ({
  axiosGet: jest.fn(),
}));

const wrapper = ({ children }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('useTemplateApiQuery', () => {
  it('should fetch data successfully', async () => {
    const mockData = { key: 'value' };

    (axiosGet as jest.Mock).mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useTemplateApiQuery(), { wrapper });

    await waitFor(() =>  expect(result.current.data).toEqual(mockData)); 

  });

})

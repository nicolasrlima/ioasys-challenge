import useSWR from 'swr';
import { KeyedMutator } from 'swr/dist/types';

import api from 'services/api';
import { parametersObjectToString } from 'utils/StringUtils';

interface useGetReturn<T> {
  data: T | undefined;
  error: Error | undefined;
  mutate: KeyedMutator<T>;
}

const useGet = <Data>(
  url: string,
  params?: Record<string, string>
): useGetReturn<Data> => {
  const paramString = params ? `${parametersObjectToString(params)}` : '';
  const urlWithParams = params ? `${url}?${paramString}` : url;

  const { data, error, mutate } = useSWR<Data, Error>(
    urlWithParams,
    async (urlToGet) => {
      const response = await api.get(urlToGet);
      return response.data;
    }
  );
  return { data, error, mutate };
};

export default useGet;

import {createApi} from '@reduxjs/toolkit/query/react';
import {makeReducerPath} from 'src/utilities/helpers';
import {axiosBaseQuery} from 'src/utilities/axios';
import {
  IApiResonse,
  IPlaceQuery,
  IProduct,
  ICategory,
} from 'src/general-typings';

interface IResponse extends IApiResonse<ICategory[]> {}
interface IplaceResponse extends IApiResonse<IProduct[]> {}

export const productApi = createApi({
  reducerPath: makeReducerPath('categories'),
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
    getCategories: build.query<ICategory[], void>({
      query: () => ({
        url: '/categories',
        method: 'GET',
      }),
      transformResponse: (response: IResponse): ICategory[] => {
        return response.data.result;
      },
    }),
    getPlaces: build.query<IProduct[], IPlaceQuery>({
      query: params => ({
        url: '/places',
        method: 'GET',
        params,
      }),
      transformResponse: (response: IplaceResponse): IProduct[] => {
        return response.data.result;
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useGetPlacesQuery,
  useLazyGetPlacesQuery,
} = productApi;

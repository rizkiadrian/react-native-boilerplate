import {createApi} from '@reduxjs/toolkit/query/react';
import {makeReducerPath} from 'src/utilities/helpers';
import {axiosBaseQuery} from 'src/utilities/axios';
import {IApiResonse} from 'src/general-typings';
import {ICategory} from 'src/general-typings';

interface IResponse extends IApiResonse<ICategory[]> {}

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
  }),
});

export const {useGetCategoriesQuery, useLazyGetCategoriesQuery} = productApi;

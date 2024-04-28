import {createApi} from '@reduxjs/toolkit/query/react';
import {makeReducerPath} from 'src/utilities/helpers';
import {axiosBaseQuery} from 'src/utilities/axios';
import {IApiResonse} from 'src/general-typings';
import {IHeartBeat} from './types';

interface IResponse extends IApiResonse<IHeartBeat> {}
interface ITransformedResponse {
  status: string;
  heartbeat: number;
  session: string;
}

export const heartbeatApi = createApi({
  reducerPath: makeReducerPath('heartbeat'),
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
    getHeartbeat: build.query<ITransformedResponse, void>({
      query: () => ({
        url: '/heartbeat',
        method: 'GET',
      }),
      transformResponse: (response: IResponse): ITransformedResponse => {
        return {
          status: response.data.result.status,
          heartbeat: response.data.result.heartbeat,
          session: response.data.result.session,
        };
      },
    }),
  }),
});

export const {useGetHeartbeatQuery, useLazyGetHeartbeatQuery} = heartbeatApi;

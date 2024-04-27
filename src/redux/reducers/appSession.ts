import {createSlice} from '@reduxjs/toolkit';
import {REDUX_KEY} from 'src/configs/key-configs';
import {makeid} from 'src/utilities/helpers';

interface IAppSessionReducer {
  appSession: string;
  cacheId: string;
}

const initialState: IAppSessionReducer = {
  appSession: '',
  cacheId: '',
};

const appSessionSlice = createSlice({
  name: REDUX_KEY.AppSession,
  initialState,
  reducers: {
    setAppSession: state => {
      return {...state, appSession: makeid(12)};
    },
    setCacheId: state => {
      return {...state, cacheId: makeid(12)};
    },
  },
});

export const {setAppSession, setCacheId} = appSessionSlice.actions;
export const reducer = appSessionSlice.reducer;

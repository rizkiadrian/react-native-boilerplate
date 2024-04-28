/**
 * React native Async storage module to set storage as redux persist value
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {heartbeatApi} from 'src/apis/heartbeat';
import {REDUX_KEY} from 'src/configs/key-configs';

/**
 * Import all reducer as slice here
 */
import {reducer as AppSessionReducer} from 'src/redux/reducers/appSession';

/**
 * Default config as root key in storage
 */
const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
  whitelist: [],
};

/**
 * Define each specific redux config
 */
const appSessionPersistConfig = {
  key: REDUX_KEY.AppSession,
  version: 1,
  storage: AsyncStorage, // should use encrypted storage for sensitive info
  blacklist: ['appSession'], // put blacklist state here,
};

/**
 * Combine it on single reducer instance
 */
const rootReducer = combineReducers({
  appSession: persistReducer(appSessionPersistConfig, AppSessionReducer),
  [heartbeatApi.reducerPath]: heartbeatApi.reducer,
});

/**
 * Export type of root reducer
 */
export type IRootState = ReturnType<typeof rootReducer>;

/**
 * Export main persist reducer from root config and combined reducer
 */
export default persistReducer(rootPersistConfig, rootReducer);

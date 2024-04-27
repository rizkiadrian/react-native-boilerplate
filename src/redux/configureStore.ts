/**
 * Configure tools for combine our reducers
 */
import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

/**
 * Import root reducer from configureReducer file
 */
import rootReducer from 'src/redux/configureReducer';

/**
 * Initialize store object from root reducer
 */
export const store = configureStore({
  reducer: rootReducer,
  // react devtools config
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

/**
 * Create persist store from initialized store
 */
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/**
 * IMPORTANT FOR DEBUG - REACTOTRON CONFIG
 */
if (__DEV__) {
  require('./reactotron');
}

import React from 'react';
import Routes from 'src/Routes';

/**
 * Redux modules
 */
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'src/redux/configureStore';
import Initial from 'src/components/molecules/Initial';

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
        <Initial />
      </Provider>
    </>
  );
}

export default App;

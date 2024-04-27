import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

/**
 * Navigation ref variable will be passed as helper function on whole function in this app
 */
import {navigationRef} from 'src/utilities/navRef';

import {appScreens, Stack} from 'src/configs/screen-configs';

function Routes(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Prelogin">
        {appScreens.map((screen, index) => (
          <Stack.Screen {...screen} key={index.toString()} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

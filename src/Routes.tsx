import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/**
 * Screen that will be imported on app
 */
import HomeScreen from 'src/screens/Home';
import PreloginScreen from 'src/screens/Prelogin';

/**
 * Navigation ref variable will be passed as helper function on whole function in this app
 */
import {navigationRef} from 'src/utilities/navigation';

import screens from 'src/configs/screen-configs';

function Routes(): JSX.Element {
  /**
   * Initialize Stack from native stack lib
   */
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={screens.prelogin.key}>
        <Stack.Screen
          name={screens.prelogin.key}
          options={screens.prelogin.options}
          component={PreloginScreen}
        />
        <Stack.Screen
          name={screens.homepage.key}
          options={screens.homepage.options}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

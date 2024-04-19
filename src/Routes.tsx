import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/**
 * Screen that will be imported on app
 */
import HomeScreen from 'src/screens/Home';

import screens from 'src/configs/screen-configs';

function Routes(): JSX.Element {
  /**
   * Initialize Stack from native stack lib
   */
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.homepage.key}>
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

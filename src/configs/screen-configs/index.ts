import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackScreens, ScreenParamsList} from 'src/configs/screen-configs/types';

/**
 * Create interface to be passed to Routes file as Config
 */
interface Screen {
  name: string;
  key: StackScreens;
  options:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ScreenParamsList>;
        navigation: NavigationProp<ScreenParamsList>;
      }) => NativeStackNavigationOptions);
}

/**
 * Create function that hold collection of object that will be displayed as suggestion
 */

function asRecord<T extends Record<string, Screen>>(
  arg: T,
): T & Record<string, Screen> {
  return arg;
}

const screens = asRecord({
  homepage: {
    name: 'Homepage',
    key: StackScreens.Homepage,
    options: {
      title: 'Homepage',
    },
  },
  prelogin: {
    name: 'Prelogin',
    key: StackScreens.Prelogin,
    options: {
      title: 'Prelogin',
      headerShown: false,
    },
  },
});

export default screens;

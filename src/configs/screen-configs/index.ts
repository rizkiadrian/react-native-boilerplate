import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {
  StackScreens,
  ScreenParamsList,
  Tabscreens,
} from 'src/configs/screen-configs/types';

/**
 * Create interface to be passed to Routes file as Config
 */
interface Screen {
  name: string;
  key: StackScreens | Tabscreens;
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

/**
 * Screen list collection that will be renderen on apps
 */
const screens = asRecord({
  homepage: {
    name: 'Homepage',
    key: StackScreens.Homepage,
    options: {
      title: 'Homepage',
      headerShown: false,
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

/**
 * Tab list collection that will be displayed on main navigation tabs (Homepage)
 */
export const tabScreens = asRecord({
  dashboard: {
    name: 'Dashboard',
    key: Tabscreens.Dashboard,
    options: {
      headerShown: false,
    },
  },
  promo: {
    name: 'Promo',
    key: Tabscreens.Promo,
    options: {
      headerShown: false,
    },
  },
  favorites: {
    name: 'Favorites',
    key: Tabscreens.Favorites,
    options: {
      headerShown: false,
    },
  },
  account: {
    name: 'Account',
    key: Tabscreens.Account,
    options: {
      headerShown: false,
    },
  },
});

export default screens;

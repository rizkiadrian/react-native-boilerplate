import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  RootStackParamList,
  TabParamsList,
} from 'src/configs/screen-configs/types.d';
import {ComponentProps, ComponentType} from 'react';

/**
 * Screen that will be imported on app
 */
import HomeScreen from 'src/screens/Home';
import PreloginScreen from 'src/screens/Prelogin';

/**
 * Tab that will be imported into specific Tab view
 */
import Dashboard from 'src/screens/Dashboard';
import Promo from 'src/screens/Promo';
import Favorites from 'src/screens/Favorites';
import Account from 'src/screens/Account';
/**
 * Initialize Stack instance with list on in app screens
 */
export const Stack = createNativeStackNavigator<RootStackParamList>();

export const Tab = createBottomTabNavigator<TabParamsList>();

/**
 * Map all available screen that will be passed on route creator in Route.tsx
 */
export const appScreens: ComponentProps<(typeof Stack)['Screen']>[] = [
  {
    name: 'Homepage',
    component: HomeScreen as ComponentType,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Prelogin',
    component: PreloginScreen as ComponentType,
    options: {
      headerShown: false,
    },
  },
];

export const tabs: ComponentProps<(typeof Tab)['Screen']>[] = [
  {
    name: 'Dashboard',
    component: Dashboard,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Promo',
    component: Promo,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Favorites',
    component: Favorites,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Account',
    component: Account,
    options: {
      headerShown: false,
    },
  },
];

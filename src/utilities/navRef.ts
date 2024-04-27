import {NavigationManager, TabManager} from 'src/utilities/navigation';
import {createNavigationContainerRef} from '@react-navigation/native';
import {
  RootStackParamList,
  TabParamsList,
} from 'src/configs/screen-configs/types.d';

export const navigationRef = createNavigationContainerRef<
  RootStackParamList & TabParamsList
>();

export const {navigate, pop, push, replace, popToTop, reset} =
  NavigationManager<RootStackParamList>(navigationRef);

export const innerJump = TabManager<TabParamsList>(navigationRef);

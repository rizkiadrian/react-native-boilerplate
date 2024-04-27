import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

/**
 * Option setting correspond to Stackscreen (screen params)
 */
export type RootStackParamList = {
  Homepage: undefined;
  Prelogin: undefined;
};

/**
 * Option setting correspond to TabScreen (screen params)
 */
export type TabParamsList = {
  Dashboard: undefined;
  Promo: undefined;
  Favorites: undefined;
  Account: undefined;
};

/**
 * Initialize native stack props
 */
export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

/**
 * Type used for pass all available props in specific screens
 */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

/**
 * Type used for pass all available props for specific Tab page
 */
export type HomepageScreenNavigationProp<T extends keyof TabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabParamsList, RootStackParamList {}
  }
}

/**
 * Available Stackscreen key
 */
export enum StackScreens {
  Homepage = 'Homepage',
  Prelogin = 'Prelogin',
}

/**
 * Available Tabscreen key
 */
export enum Tabscreens {
  Dashboard = 'Dashboard',
  Promo = 'Promo',
  Favorites = 'Favorites',
  Account = 'Account',
}

/**
 * Option setting correspond to Stackscreen (screen params)
 */
export type ScreenParamsList = {
  [StackScreens.Homepage]: undefined;
  [StackScreens.Prelogin]: undefined;
};

/**
 * Option setting correspond to TabScreen (screen params)
 */
export type TabParamsList = {
  [Tabscreens.Dashboard]: undefined;
  [Tabscreens.Promo]: undefined;
  [Tabscreens.Favorites]: undefined;
  [Tabscreens.Promo]: undefined;
};

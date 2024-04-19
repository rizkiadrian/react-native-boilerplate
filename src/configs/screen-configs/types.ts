/**
 * Available Stackscreen key
 */
export enum StackScreens {
  Homepage = 'Homepage',
  Prelogin = 'Prelogin',
}

/**
 * Option setting correspond to Stackscreen (screen params)
 */
export type ScreenParamsList = {
  [StackScreens.Homepage]: undefined;
  [StackScreens.Prelogin]: undefined;
};

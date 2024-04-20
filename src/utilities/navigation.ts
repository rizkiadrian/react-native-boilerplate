import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {ScreenParamsList, StackScreens} from 'src/configs/screen-configs/types';

/**
 * Export ref that will be used as instance of React navigation
 */
export const navigationRef =
  React.createRef<NavigationContainerRef<ScreenParamsList>>();

export const navigate = (name: StackScreens, params?: undefined) => {
  navigationRef.current?.navigate(name, params);
};

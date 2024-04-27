import {
  CommonActions,
  NavigationContainerRefWithCurrent,
  StackActions,
  TabActions,
} from '@react-navigation/native';

export const NavigationManager = <T extends {}>(
  navigationRef: NavigationContainerRefWithCurrent<T>,
) => {
  type Args<RouteName extends keyof T> = RouteName extends unknown
    ? undefined extends T[RouteName]
      ? [screen: RouteName] | [name: RouteName, params?: T[RouteName]]
      : [name: RouteName, params: T[RouteName]]
    : never;

  const navigate = <RouteName extends keyof T>(
    ...args: Args<RouteName>
  ): void => {
    if (navigationRef.isReady()) {
      const [name, params] = args;
      const nameAsString = name.toString();
      navigationRef.dispatch(CommonActions.navigate(nameAsString, params!));
    }
  };

  const push = <RouteName extends keyof T>(...args: Args<RouteName>): void => {
    if (navigationRef.isReady()) {
      const [name, params] = args;
      const nameAsString = name.toString();
      navigationRef.dispatch(StackActions.push(nameAsString, params!));
    }
  };

  const replace = <RouteName extends keyof T>(
    ...args: Args<RouteName>
  ): void => {
    if (navigationRef.isReady()) {
      const [name, params] = args;
      const nameAsString = name.toString();
      navigationRef.dispatch(StackActions.replace(nameAsString, params!));
    }
  };

  const reset = <RouteName extends keyof T>(...args: Args<RouteName>): void => {
    if (navigationRef.isReady()) {
      const [name, params] = args;
      const nameAsString = name.toString();
      const _params = params!;
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: nameAsString, params: _params}],
      });
      navigationRef.dispatch(resetAction);
    }
  };

  const popToTop = () => {
    if (navigationRef.isReady()) {
      navigationRef.current?.dispatch(StackActions.popToTop());
    }
  };

  const pop = (count?: number | undefined) => {
    if (navigationRef.isReady()) {
      navigationRef.current?.dispatch(StackActions.pop(count));
    }
  };

  const getCurrentRoute = () => {
    if (navigationRef.isReady()) {
      return navigationRef.current?.getCurrentRoute();
    }
  };
  return {navigate, push, replace, reset, popToTop, pop, getCurrentRoute};
};

export const TabManager = <T extends {}>(
  navigationRef: NavigationContainerRefWithCurrent<T>,
) => {
  type Args<RouteName extends keyof T> = RouteName extends unknown
    ? undefined extends T[RouteName]
      ? [screen: RouteName] | [name: RouteName, params?: T[RouteName]]
      : [name: RouteName, params: T[RouteName]]
    : never;

  const innerJump = <RouteName extends keyof T>(
    ...args: Args<RouteName>
  ): void => {
    if (navigationRef.isReady()) {
      const [name, params] = args;
      const nameAsString = name.toString();
      navigationRef.current?.dispatch(TabActions.jumpTo(nameAsString, params!));
    }
  };

  return innerJump;
};

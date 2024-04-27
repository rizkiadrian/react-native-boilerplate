import React, {useEffect} from 'react';

/**
 * Tab libraries from react navigation
 */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {tabs, Tab} from 'src/configs/screen-configs';

/**
 * Custom tab bar component that will be passed on tab bar navigation instance
 */
import TabBar from 'src/components/molecules/tab-bar';
import {useDispatch, useSelector} from 'react-redux';
import {setAppSession, setCacheId} from 'src/redux/reducers/appSession';

/**
 * Root state interface
 */
import {IRootState} from 'src/redux/configureReducer';
import {View} from 'react-native';

function HomeScreen(): JSX.Element {
  /**
   * Redux usage example set non persist session id
   */
  const dispatch = useDispatch();

  /**
   * Example of non persist value
   */
  const appSession = useSelector(
    (state: IRootState) => state.appSession.appSession,
  );
  /**
   * Example of perist value
   */
  const appCache = useSelector((state: IRootState) => state.appSession.cacheId);

  // check value of appsession first and app cache first
  useEffect(() => {
    dispatch(setAppSession());
    if (!appCache) {
      dispatch(setCacheId());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- expected we want using this function as did mount only function
  }, []);

  const renderTabBar = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };

  return (
    <>
      <Tab.Navigator tabBar={renderTabBar}>
        {tabs.map((tab, index) => (
          <Tab.Screen {...tab} key={index.toString()} />
        ))}
      </Tab.Navigator>
      {/* App signature */}
      <View testID={`App session: ${appSession}; App Cache ID: ${appCache}`} />
    </>
  );
}

export default HomeScreen;

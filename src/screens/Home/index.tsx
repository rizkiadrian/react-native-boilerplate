import React from 'react';

/**
 * Tab libraries from react navigation
 */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {tabs, Tab} from 'src/configs/screen-configs';

/**
 * Custom tab bar component that will be passed on tab bar navigation instance
 */
import TabBar from 'src/components/molecules/tab-bar';

function HomeScreen(): JSX.Element {
  const renderTabBar = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };

  return (
    <Tab.Navigator tabBar={renderTabBar}>
      {tabs.map((tab, index) => (
        <Tab.Screen {...tab} key={index.toString()} />
      ))}
    </Tab.Navigator>
  );
}

export default HomeScreen;

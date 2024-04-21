import React from 'react';

/**
 * Tab libraries from react navigation
 */
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

/**
 * Available screen that will be rendered as Tabs
 */
import Dashboard from 'src/screens/Dashboard';
import Promo from 'src/screens/Promo';
import Favorites from 'src/screens/Favorites';
import Account from 'src/screens/Account';
import {tabScreens} from 'src/configs/screen-configs';

/**
 * Custom tab bar component that will be passed on tab bar navigation instance
 */
import TabBar from 'src/components/molecules/tab-bar';

/**
 * Initialize Bottom Tab instance variable
 */
const Tab = createBottomTabNavigator();

function HomeScreen(): JSX.Element {
  const renderTabBar = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };

  return (
    <Tab.Navigator tabBar={renderTabBar}>
      <Tab.Screen
        name={tabScreens.dashboard.key}
        component={Dashboard}
        options={tabScreens.dashboard.options}
      />
      <Tab.Screen
        name={tabScreens.promo.key}
        component={Promo}
        options={tabScreens.promo.options}
      />
      <Tab.Screen
        name={tabScreens.favorites.key}
        component={Favorites}
        options={tabScreens.favorites.options}
      />
      <Tab.Screen
        name={tabScreens.account.key}
        component={Account}
        options={tabScreens.account.options}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;

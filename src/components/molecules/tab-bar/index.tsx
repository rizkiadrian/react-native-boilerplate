import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TabActions} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from 'src/components/molecules/tab-bar/styles';
import {Tabscreens} from 'src/configs/screen-configs/types';
import stylesVar from 'src/global-styles/stylesVar';
import {navDispatch} from 'src/utilities/navigation';

function TabBar(props: BottomTabBarProps): JSX.Element {
  const {state} = props;

  /**
   * Icon active state adjusting color of icons
   */
  const renderIconActive = (active: boolean) => {
    if (active) {
      return stylesVar.colorVariable.blue;
    }
    return stylesVar.colorVariable.icon;
  };

  /**
   * Icon render based on route name params
   */
  const renderIcon = useCallback(
    (route: Tabscreens, iconIndex: number) => {
      switch (route) {
        case 'Dashboard':
          return (
            <Icon
              name="home"
              size={24}
              color={renderIconActive(state.index === iconIndex)}
            />
          );
        case 'Promo':
          return (
            <Icon
              name="ticket"
              size={24}
              color={renderIconActive(state.index === iconIndex)}
            />
          );
        case 'Favorites':
          return (
            <Icon
              name="heart"
              size={24}
              color={renderIconActive(state.index === iconIndex)}
            />
          );
        case 'Account':
          return (
            <Icon
              name="person"
              size={24}
              color={renderIconActive(state.index === iconIndex)}
            />
          );
        default:
          return null;
      }
    },
    [state.index],
  );

  /**
   * Handle icon press route defined as "any" due to no exported Route type from react nativation
   */
  const handleTabPress = (route: any) => {
    const jumptoAction = TabActions.jumpTo(route.name);
    navDispatch(jumptoAction);
  };

  return (
    <View style={styles.root}>
      {state.routes.map((route, index) => {
        return (
          <TouchableOpacity
            style={styles.icon}
            key={index.toString()}
            onPress={() => {
              handleTabPress(route);
            }}>
            {renderIcon(route.name as Tabscreens, index)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;

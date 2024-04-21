import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from 'src/components/molecules/tab-bar/styles';

function TabBar(props: BottomTabBarProps): JSX.Element {
  const {state} = props;
  return (
    <View style={styles.root}>
      {state.routes.map((route, index) => {
        return (
          <View key={index.toString()}>
            <Icon name="home" size={30} color="#000" />
          </View>
        );
      })}
    </View>
  );
}

export default TabBar;

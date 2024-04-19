import React from 'react';
import {View, Text} from 'react-native';
import styles from 'src/screens/Home/styles';

function HomeScreen(): JSX.Element {
  return (
    <View style={styles.root}>
      <Text>This is homepage</Text>
    </View>
  );
}

export default HomeScreen;

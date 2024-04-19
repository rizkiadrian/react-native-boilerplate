import React from 'react';
import {View} from 'react-native';
import Text from 'src/components/atoms/Text';
import styles from 'src/screens/Home/styles';

function HomeScreen(): JSX.Element {
  return (
    <View style={styles.root}>
      <Text>This is homepage</Text>
    </View>
  );
}

export default HomeScreen;

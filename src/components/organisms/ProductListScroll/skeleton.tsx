import React from 'react';
import {StyleSheet, View} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';

function PLSSkeleton() {
  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: 20,
    },
    item: {
      height: 240,
      width: 188,
      borderRadius: 22,
      marginRight: 12,
    },
  });

  return (
    <Skeleton containerStyle={styles.root} isLoading={true}>
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
    </Skeleton>
  );
}

export default PLSSkeleton;

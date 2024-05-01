import React from 'react';
import {StyleSheet, View} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';

function CTSSkeleton() {
  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
    },
    item: {
      height: 36,
      flex: 1,
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

export default CTSSkeleton;

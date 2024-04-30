import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Text from 'src/components/atoms/Text';
import SearchInput from 'src/components/molecules/SearchInput';
import LocationButton from 'src/components/molecules/location-button';
import CategoryTagScroll from 'src/components/organisms/CategoryTagScroll';
import styles from 'src/screens/Dashboard/styles';

function Dashboard(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeRoot}>
      <View style={styles.root}>
        <View style={styles.navTop}>
          <View style={styles.locationRow}>
            <View>
              <Text style={styles.explore}>Explore</Text>
              <Text style={styles.aspen}>Aspen</Text>
            </View>
            <LocationButton />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <SearchInput />
        </View>
        <View style={styles.tagList}>
          <CategoryTagScroll />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;

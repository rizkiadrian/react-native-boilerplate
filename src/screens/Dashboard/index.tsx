import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Text from 'src/components/atoms/Text';
import SearchInput from 'src/components/molecules/SearchInput';
import LocationButton from 'src/components/molecules/location-button';
import CategoryTagScroll from 'src/components/organisms/CategoryTagScroll';
import ProductListScroll from 'src/components/organisms/ProductListScroll';
import styles from 'src/screens/Dashboard/styles';

function Dashboard(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeRoot}>
      <ScrollView contentContainerStyle={styles.root}>
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
        <View style={styles.productResultList}>
          <ProductListScroll
            title="Result"
            titleContainerStyle={styles.productResultContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Dashboard;

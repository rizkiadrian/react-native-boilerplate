import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from 'src/components/molecules/location-button/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import stylesVar from 'src/global-styles/stylesVar';
import Text from 'src/components/atoms/Text';

function LocationButton(): JSX.Element {
  return (
    <View style={styles.root}>
      <Icon name="location" size={16} color={stylesVar.colorVariable.blue} />
      <TouchableOpacity style={styles.loc}>
        <Text style={styles.locText}>Aspen, USA</Text>
        <Icon
          name="chevron-down-outline"
          size={16}
          color={stylesVar.colorVariable.blue}
        />
      </TouchableOpacity>
    </View>
  );
}

export default LocationButton;

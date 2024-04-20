import React from 'react';
import {Image, View} from 'react-native';
import Text from 'src/components/atoms/Text';
import Button from 'src/components/molecules/Button';
import {StackScreens} from 'src/configs/screen-configs/types';
import styles from 'src/screens/Prelogin/styles';
import {navigate} from 'src/utilities/navigation';

const preloginImg = require('src/assets/png/bg-aspen.png');
const aspenLogo = require('src/assets/png/aspen.png');

function PreloginScreen(): JSX.Element {
  return (
    <View style={styles.root}>
      <Image source={preloginImg} style={styles.imageBackground} />
      <Image source={aspenLogo} style={styles.imageLogo} />
      <View style={styles.bottomSet}>
        <Text style={styles.topText}>Plan your</Text>
        <Text style={styles.bottomText}>Luxurious{'\n'}Vacation</Text>
        <Button
          label="Explore"
          rootStyle={styles.btnStyle}
          onPress={() => {
            navigate(StackScreens.Homepage);
          }}
        />
      </View>
    </View>
  );
}

export default PreloginScreen;

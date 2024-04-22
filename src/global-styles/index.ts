import {StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export const typographySheet = StyleSheet.create({
  text: {
    fontFamily: stylesVar.fontFamily('normal'),
    color: stylesVar.colorVariable.text1,
    fontSize: 14,
    lineHeight: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

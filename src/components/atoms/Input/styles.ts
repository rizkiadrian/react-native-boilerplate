import {StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export default StyleSheet.create({
  root: {
    fontFamily: stylesVar.fontFamily(500),
    fontSize: 13,
    lineHeight: 16,
    color: stylesVar.colorVariable.text1,
  },
});

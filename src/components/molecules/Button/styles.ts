import {StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export default StyleSheet.create({
  root: {
    width: 155,
    height: 25,
    borderRadius: 16,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: stylesVar.fontFamily(600),
    color: stylesVar.colorVariable.white,
    fontSize: 16,
    lineHeight: 24,
  },
});

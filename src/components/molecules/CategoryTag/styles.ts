import {StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export default StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 33,
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    color: stylesVar.colorVariable.icon,
    fontFamily: stylesVar.fontFamily(500),
  },
  rootActive: {
    backgroundColor: stylesVar.colorVariable.blueLow,
  },
  activeText: {
    fontFamily: stylesVar.fontFamily(600),
    color: stylesVar.colorVariable.blue,
  },
});

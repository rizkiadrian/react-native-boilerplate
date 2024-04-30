import {StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export default StyleSheet.create({
  safeRoot: {
    backgroundColor: stylesVar.colorVariable.white,
    flex: 1,
  },
  root: {
    flex: 1,
    backgroundColor: stylesVar.colorVariable.white,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  explore: {
    color: stylesVar.colorVariable.black,
  },
  aspen: {
    fontSize: 32,
    color: stylesVar.colorVariable.black,
    fontFamily: stylesVar.fontFamily(500),
    lineHeight: 40,
  },
  navTop: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  tagList: {
    marginTop: 32,
  },
});

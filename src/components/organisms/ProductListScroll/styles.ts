import {StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export default StyleSheet.create({
  root: {},
  titleText: {
    fontFamily: stylesVar.fontFamily(600),
    fontSize: 18,
    lineHeight: 24,
    color: '#232323',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAllStyle: {
    fontSize: 12,
    fontFamily: stylesVar.fontFamily(500),
    lineHeight: 16,
    color: stylesVar.colorVariable.blue,
  },
  productContainer: {
    marginTop: 12,
  },
  scrollContent: {
    paddingLeft: 12,
    paddingBottom: 12,
  },
  itemPager: {
    marginLeft: 12,
  },
});

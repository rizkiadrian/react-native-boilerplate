import {Dimensions, StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingBottom: 48,
  },
  imageBackground: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    objectFit: 'cover',
  },
  imageLogo: {
    width: 263,
    height: 126,
    objectFit: 'contain',
    marginTop: 93,
  },
  bottomSet: {
    width: '100%',
    marginTop: 'auto',
  },
  topText: {
    color: stylesVar.colorVariable.white,
    fontSize: 24,
    lineHeight: 27,
  },
  bottomText: {
    color: stylesVar.colorVariable.white,
    fontFamily: stylesVar.fontFamily(500),
    fontSize: 40,
    lineHeight: 56,
  },
  btnStyle: {
    width: 311,
    height: 52,
    marginTop: 24,
    alignSelf: 'center',
  },
});

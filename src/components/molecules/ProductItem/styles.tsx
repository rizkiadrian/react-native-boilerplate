import {StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export default StyleSheet.create({
  root: {
    width: 188,
    height: 240,
    borderRadius: 24,
    backgroundColor: 'white',
  },
  imgStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  bottomContent: {
    marginTop: 'auto',
    paddingBottom: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  dimBox: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#4D5652',
    borderRadius: 59,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: stylesVar.fontFamily(500),
    color: stylesVar.colorVariable.white,
    maxWidth: 66,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    width: '100%',
  },
  starDim: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  ratingText: {
    fontSize: 10,
    lineHeight: 16,
    fontFamily: stylesVar.fontFamily(500),
    color: stylesVar.colorVariable.white,
    marginLeft: 4,
  },
  favCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icnStyle: {
    top: 1,
    left: 0.5,
  },
});

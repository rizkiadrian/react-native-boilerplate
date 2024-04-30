import {StyleSheet} from 'react-native';
import stylesVar from 'src/global-styles/stylesVar';

export default StyleSheet.create({
  root: {
    width: '100%',
    padding: 16,
    borderRadius: 24,
    backgroundColor: stylesVar.colorVariable.searchInput,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    marginLeft: 8,
  },
});

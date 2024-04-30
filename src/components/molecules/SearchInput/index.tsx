import React from 'react';
import {StyleProp, TextInputProps, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from 'src/components/atoms/Input';
import styles from 'src/components/molecules/SearchInput/styles';
import stylesVar from 'src/global-styles/stylesVar';

interface InputProps extends TextInputProps {
  rootStyle?: StyleProp<ViewStyle> | undefined;
}

function SearchInput(props: InputProps) {
  const {rootStyle} = props;
  return (
    <View style={[styles.root, rootStyle]}>
      <Icon name="search" size={20} color={stylesVar.colorVariable.icon} />
      <Input placeholder="Find things to do" textStyle={styles.inputStyle} />
    </View>
  );
}

export default SearchInput;

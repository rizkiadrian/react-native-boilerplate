import React from 'react';
import {StyleProp, TextInput, TextInputProps, ViewStyle} from 'react-native';
import styles from 'src/components/atoms/Input/styles';

interface Props extends TextInputProps {
  textStyle?: StyleProp<ViewStyle> | undefined;
}

function Input(props: Props) {
  return <TextInput style={[styles.root, props.textStyle]} {...props} />;
}

export default Input;

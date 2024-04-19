import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import stylesVar from 'src/global-styles/stylesVar';
import styles from 'src/components/molecules/Button/styles';
import Text from 'src/components/atoms/Text';

interface IButton {
  label?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  rootStyle?: StyleProp<ViewStyle> | undefined;
}

function Button(props: IButton): JSX.Element {
  return (
    <LinearGradient
      colors={stylesVar.gradient.blue.colors}
      useAngle
      angle={stylesVar.gradient.blue.degree}
      angleCenter={{x: 0.5, y: 0.5}}
      style={[styles.root, props.rootStyle]}>
      <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
        <Text style={styles.text}>{props.label}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default Button;

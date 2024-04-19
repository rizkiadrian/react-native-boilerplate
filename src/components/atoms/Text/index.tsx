import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {TChilden} from 'src/general-typings';
import {typographySheet} from 'src/global-styles';

/**
 * Define RN Text component default props
 */
interface Props extends TextProps {
  children?: TChilden;
}

function Text(props: Props): JSX.Element {
  return <RNText style={[typographySheet.text, props.style]} {...props} />;
}

export default Text;

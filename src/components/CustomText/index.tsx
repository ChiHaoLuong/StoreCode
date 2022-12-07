import {View, StyleProp, TextStyle} from 'react-native';
import styles from './styles';
import {Text, ViewStyle} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  containerStyle?: StyleProp<ViewStyle>;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

const CustomText = (props: Props) => {
  const {
    text,
    style,
    numberOfLines = 0,
    ellipsizeMode,
    containerStyle = {},
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        style={[styles.title, style]}
        ellipsizeMode={ellipsizeMode}
        allowFontScaling={false}
        numberOfLines={numberOfLines}>
        {text}
      </Text>
    </View>
  );
};
CustomText.defaultProps = {
  textBreakStrategy: 'simple',
  maxFontSizeMultiplier: 1.4,
  suppressHighlighting: true,
};
export {CustomText};

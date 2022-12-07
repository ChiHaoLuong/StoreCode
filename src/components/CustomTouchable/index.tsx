import React from 'react';
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styles from './styles';
interface Props extends TouchableOpacityProps {
  onPress?: () => void;
  children?: any;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  image?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
}

const CustomTouchable = (props: Props) => {
  const {
    title = undefined,
    titleStyle,
    image,
    imageStyle,
    resizeMode,
    children,
    onPress,
    activeOpacity = 0.85,
    ...rest
  } = props;

  const _renderChildren = () => {
    if (title) {
      return <Text style={[styles.title, titleStyle]}>{title}</Text>;
    }
    if (image) {
      return (
        <Image source={image} style={imageStyle} resizeMode={resizeMode} />
      );
    }
    return children;
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity} {...rest}>
      {_renderChildren()}
    </TouchableOpacity>
  );
};

export {CustomTouchable};

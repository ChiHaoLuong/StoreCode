import React, {useState} from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Image,
  Text,
  LayoutChangeEvent,
  Platform,
} from 'react-native';
import styles from './styles';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomTouchable, OptionalModal} from '../';
import img from '../../assets/img';

enum TypeCoin {
  MATIC,
  APES,
}

export interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  shadow?: any;
  leftBack?: boolean;
  isProfile?: boolean;
  isNotify?: boolean;
  isMessage?: boolean;
  onNotifyPress?: () => void;
  onPressMessage?: () => void;
  onPressSignIn?: () => void;
  avatar?: string;
  isApes?: boolean;
  isMatic?: boolean;
  apes?: number;
  matic?: number;
}

const CustomHeader = (props: Props) => {
  const {containerStyle, shadow} = props;
  const insets = useSafeAreaInsets();
  const insetTop = Platform.OS === 'ios' ? insets.top : 0;

  const [showOption, setShowOption] = useState<boolean>(false);
  const [optionLayoutOffsetY, setOptionLayoutOffsetY] = useState<number>(0);

  const onProfilePress = () => setShowOption(true);

  const onCloseModal = () => setShowOption(false);

  const profileLayout = (event: LayoutChangeEvent) => {
    const layout = event.nativeEvent.layout;
    const top = layout.y + layout.height;
    setOptionLayoutOffsetY(top);
  };

  const renderCoin = (type: TypeCoin) => {
    const icon = type === TypeCoin.APES ? img.iconApes2 : img.iconMatic;
    const point = type === TypeCoin.APES ? 2000 : 2000;
    return (
      <CustomTouchable style={styles.btnCoin}>
        <Image source={icon} />
        <Text style={styles.txtCoin}>{point}</Text>
      </CustomTouchable>
    );
  };

  const renderMainView = () => {
    return (
      <SafeAreaView
        edges={['right', 'left', 'top']}
        style={[styles.container, shadow && styles.shadow, containerStyle]}>
        <View style={styles.vContainer}>
          <CustomTouchable
            imageStyle={[
              styles.icon,
              {
                marginRight: 16,
              },
            ]}
            image={img.iconArrowLeft}
            resizeMode="center"
          />
          {renderCoin(TypeCoin.APES)}
          {renderCoin(TypeCoin.MATIC)}
          <View style={styles.space} />
          <CustomTouchable
            imageStyle={styles.icon}
            style={styles.btnIcon}
            image={img.iconNotify}
          />
          <CustomTouchable
            imageStyle={styles.icon}
            style={styles.btnIcon}
            image={img.iconChat}
          />
          <CustomTouchable
            onLayout={profileLayout}
            imageStyle={styles.icon}
            style={styles.btnIcon}
            image={img.defaultUser}
            onPress={onProfilePress}
          />
          <OptionalModal
            containerStyle={[
              styles.optionContainer,
              {
                top: optionLayoutOffsetY + insetTop,
              },
            ]}
            isVisible={showOption}
            onCloseModal={onCloseModal}
          />
        </View>
      </SafeAreaView>
    );
  };
  return renderMainView();
};

export {CustomHeader};

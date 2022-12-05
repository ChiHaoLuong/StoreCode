import {
  Button,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {styles} from './styles';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../constants';

interface CustomOptionAlertProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  isVisible: boolean;
  onClose: () => void;
  subTitle?: string;
  subTitleStyle?: StyleProp<TextStyle>;
  /* if have button title the button is shown */
  positiveBtnTitle?: string;
  positiveBtnContainerStyle?: StyleProp<ViewStyle>;
  positiveBtnPress?: () => void;
  positiveBtnTitleStyle?: StyleProp<TextStyle>;
  /* if have button title the button is shown */
  negativeBtnTitle?: string;
  negativeBtnContainerStyle?: StyleProp<ViewStyle>;
  negativeBtnPress?: () => void;
  negativeBtnTitleStyle?: StyleProp<TextStyle>;
}

const CustomOptionAlert = (props: CustomOptionAlertProps) => {
  const {
    isVisible,
    onClose,
    title,
    titleStyle,
    subTitle,
    subTitleStyle,
    positiveBtnPress,
    positiveBtnContainerStyle,
    positiveBtnTitle,
    positiveBtnTitleStyle,
    negativeBtnPress,
    negativeBtnContainerStyle,
    negativeBtnTitle,
    negativeBtnTitleStyle,
  } = props;

  const _renderBtnsContainer = () => (
    <View style={styles.btnsContainer}>
      {negativeBtnTitle && (
        <TouchableOpacity
          style={[styles.btnWrap, negativeBtnContainerStyle]}
          onPress={negativeBtnPress}>
          <Text
            style={[
              styles.btnTitle,
              styles.btnNegativeTitle,
              negativeBtnTitleStyle,
            ]}>
            {negativeBtnTitle}
          </Text>
        </TouchableOpacity>
      )}
      {positiveBtnTitle && (
        <TouchableOpacity
          style={[styles.btnWrap, positiveBtnContainerStyle]}
          onPress={positiveBtnPress}>
          <Text
            style={[
              styles.btnTitle,
              styles.btnPositiveTitle,
              positiveBtnTitleStyle,
            ]}>
            {positiveBtnTitle}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <Modal
      style={styles.modal}
      coverScreen
      deviceHeight={HEIGHT_SCREEN}
      deviceWidth={WIDTH_SCREEN}
      statusBarTranslucent
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        {subTitle && (
          <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>
        )}
        {_renderBtnsContainer()}
        <Button title="saveImage" />
      </View>
    </Modal>
  );
};

export default CustomOptionAlert;

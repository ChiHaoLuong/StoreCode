import {View, Image, StyleProp, ViewStyle, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CustomTouchable} from '../';
import {CustomText} from '../CustomText';
import Modal from 'react-native-modal';
import img from '../../assets/img';

const {height, width} = Dimensions.get('screen');

interface OptionalModalProps {
  containerStyle: StyleProp<ViewStyle>;
  onCloseModal: () => void;
  isVisible: boolean;
}

const OptionalModal = (props: OptionalModalProps) => {
  const {containerStyle, onCloseModal, isVisible} = props;

  const accountSettingHandle = () => {
    onCloseModal();
  };

  return (
    <Modal
      coverScreen
      deviceHeight={height}
      deviceWidth={width}
      isVisible={isVisible}
      onBackButtonPress={onCloseModal}
      style={styles.modal}
      onBackdropPress={onCloseModal}
      backdropOpacity={0}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={[styles.container, containerStyle]}>
        <CustomTouchable
          onPress={accountSettingHandle}
          style={[styles.btnContainer, styles.borderBottomLine]}>
          <Image source={img.iconProfile} style={styles.btnUserIcon} />
          <CustomText text="Account Setting" style={styles.btnTitle} />
        </CustomTouchable>
        <CustomTouchable style={styles.btnContainer}>
          <Image source={img.iconLogout} style={styles.btnUserIcon} />
          <CustomText text="Logout" style={styles.btnTitle} />
        </CustomTouchable>
      </View>
    </Modal>
  );
};

export default OptionalModal;

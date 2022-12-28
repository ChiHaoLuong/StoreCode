/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {ItemInterface} from '../TimePicker/data';
import img from '../../assets/img';
import Modal from 'react-native-modal';

interface CustomPickerProps {
  listItem: ItemInterface[];
  selectedItem: ItemInterface;
  setItemSelected: (val: ItemInterface) => void;
  containerStyle?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
}

const CustomPicker = (props: CustomPickerProps) => {
  const {
    listItem,
    selectedItem,
    setItemSelected,
    containerStyle,
    modalContainerStyle,
  } = props;
  const label = selectedItem.label;

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const _renderModalSelector = (): JSX.Element => {
    const _renderItem = ({item}: {item: ItemInterface}) => {
      const isSelected = item === selectedItem;

      const onPressItem = () => {
        setItemSelected(item);
        onCloseModal();
      };

      return (
        <TouchableOpacity
          onPress={onPressItem}
          style={[
            styles.itemContainer,
            isSelected && {
              backgroundColor: 'grey',
            },
          ]}>
          <Text style={styles.modalLabel}>{item.label}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal
        style={[styles.modalContainer, modalContainerStyle]}
        onBackButtonPress={onCloseModal}
        isVisible={modalVisible}
        onBackdropPress={onCloseModal}
        coverScreen>
        <View style={styles.modalInnerContainer}>
          <FlatList
            data={listItem}
            showsVerticalScrollIndicator={false}
            renderItem={_renderItem}
          />
        </View>
      </Modal>
    );
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setModalVisible(true)}
        style={[styles.container, containerStyle]}>
        <Text style={styles.label}>{label}</Text>
        <Image style={styles.dropdown} source={img.iconDropDown} />
      </TouchableOpacity>
      {_renderModalSelector()}
    </>
  );
};

export default CustomPicker;

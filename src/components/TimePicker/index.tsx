import {View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {CustomTouchable} from '../CustomTouchable';
import {styles} from './styles';
import {APMeridiem, ItemInterface, Time} from './data';
import CustomPicker from '../CustomPicker';

interface TimePickerInterface {
  isVisible: boolean;
  setIsVisible: any;
}

const TimePicker = ({isVisible, setIsVisible}: TimePickerInterface) => {
  const [selectedValueOfColumnOne, setSelectedValueOfColumnOne] =
    useState<ItemInterface>(Time[0]);
  const [selectedValueOfColumnTwo, setSelectedValueOfColumnTwo] =
    useState<ItemInterface>(APMeridiem[0]);

  const onCancel = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.overlay}
      onBackdropPress={onCancel}>
      <View style={[styles.header, styles.justifyContent]}>
        <CustomTouchable
          onPress={onCancel}
          title="Close"
          titleStyle={styles.button}
        />
        <CustomTouchable
          onPress={onCancel}
          title="Confirm"
          titleStyle={[styles.button, styles.btnColor]}
        />
      </View>
      <View style={styles.vBorderLine} />
      <View style={styles.vPicker}>
        <View style={styles.vColumn}>
          <CustomPicker
            listItem={Time}
            selectedItem={selectedValueOfColumnOne}
            setItemSelected={setSelectedValueOfColumnOne}
            containerStyle={styles.pickerContainer}
          />
        </View>
        <View style={styles.vColumn}>
          <CustomPicker
            listItem={APMeridiem}
            selectedItem={selectedValueOfColumnTwo}
            setItemSelected={setSelectedValueOfColumnTwo}
            containerStyle={styles.pickerContainer}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TimePicker;

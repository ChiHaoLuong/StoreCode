import {Button, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  CustomHeader,
  CustomOptionAlert,
  TimePicker,
  SaveComponentImage,
} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ComponentsScreen = () => {
  const [optionAlertState, setOptionAlertState] = useState<{
    title: string;
    isVisible: boolean;
    positiveTitle?: string;
    positivePress?: () => void;
    negativeTitle?: string;
  }>({
    title: '',
    isVisible: false,
  });
  const [pickerVisible, setPickerVisible] = useState<boolean>(true);

  const onCloseModal = () => {
    setOptionAlertState({
      title: '',
      isVisible: false,
    });
  };

  const onMintPettoOpenModal = () => {
    setOptionAlertState({
      title: 'Do you want to mint new petto',
      isVisible: true,
      negativeTitle: 'No',
      positiveTitle: 'Yes',
      positivePress: () => console.log('mint Success'),
    });
  };

  const onTransformOpenModal = () => {
    setOptionAlertState({
      title: 'Do you want to transform petto',
      isVisible: true,
      negativeTitle: 'Cancel',
      positiveTitle: 'Transform',
      positivePress: () => console.log('transform Success'),
    });
  };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.root}>
        <CustomHeader />
        <View style={{height: useSafeAreaInsets().top + 64}} />
        <Button title="Mint petto" onPress={onMintPettoOpenModal} />
        <Button title="Transform petto" onPress={onTransformOpenModal} />
        <CustomOptionAlert
          onClose={onCloseModal}
          title={optionAlertState.title}
          isVisible={optionAlertState.isVisible}
          positiveBtnTitle={optionAlertState.positiveTitle}
          positiveBtnPress={optionAlertState.positivePress}
          negativeBtnPress={onCloseModal}
          negativeBtnTitle={optionAlertState.negativeTitle}
        />
        <SaveComponentImage />
        <TimePicker isVisible={pickerVisible} setIsVisible={setPickerVisible} />
      </ScrollView>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

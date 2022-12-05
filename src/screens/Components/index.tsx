import {Button, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomOptionAlert, SaveComponentImage} from '../../components';

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
    <ScrollView contentContainerStyle={styles.root}>
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
    </ScrollView>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

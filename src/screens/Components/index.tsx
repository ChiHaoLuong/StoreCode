import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomOptionAlert} from '../../components';

const ComponentsScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <CustomOptionAlert />
    </SafeAreaView>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

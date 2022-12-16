import {Alert, Button, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './styles';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {captureRef} from 'react-native-view-shot';

const SaveComponentImage = () => {
  const viewRef = useRef(null);

  const onPressSave = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });
      // cameraroll saves image
      await CameraRoll.save(uri, {
        type: 'photo',
      });
      Alert.alert(
        '',
        'Image saved successfully.',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (e) {}
  };

  return (
    <View collapsable={false} ref={viewRef} style={styles.container}>
      <Text>SaveComponentImage</Text>
      <Button title="save image" onPress={onPressSave} />
    </View>
  );
};

export default SaveComponentImage;

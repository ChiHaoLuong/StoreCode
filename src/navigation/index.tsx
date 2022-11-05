import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './typeScreen';
import {SplashScreen} from '../screens';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const {Navigator, Screen} = RootStack;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Splash" component={SplashScreen} />
    </Navigator>
  );
};

export default RootNavigator;

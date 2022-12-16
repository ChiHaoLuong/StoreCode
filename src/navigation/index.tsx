import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './typeScreen';
import {ComponentsScreen, SplashScreen, ShareExample} from '../screens';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const {Navigator, Screen} = RootStack;

  return (
    <Navigator
      initialRouteName="ShareExample"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="ShareExample" component={ShareExample} />
      <Screen name="Splash" component={SplashScreen} />
      <Screen name="Components" component={ComponentsScreen} />
    </Navigator>
  );
};

export default RootNavigator;

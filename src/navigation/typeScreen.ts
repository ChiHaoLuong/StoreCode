import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Splash: undefined;
  Components: undefined;
};

export type SplashProps = NativeStackScreenProps<RootStackParamsList, 'Splash'>;
export type ComponentsProps = NativeStackScreenProps<
  RootStackParamsList,
  'Components'
>;

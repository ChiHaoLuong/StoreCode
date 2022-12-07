import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Splash: undefined;
  Components: undefined;
  ShareExample: undefined;
};

export type SplashProps = NativeStackScreenProps<RootStackParamsList, 'Splash'>;
export type ComponentsProps = NativeStackScreenProps<
  RootStackParamsList,
  'Components'
>;
export type ShareExample = NativeStackScreenProps<
  RootStackParamsList,
  'ShareExample'
>;

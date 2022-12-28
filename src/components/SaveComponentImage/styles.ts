import {StyleSheet} from 'react-native';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 50,
    borderWidth: 1,
    height: HEIGHT_SCREEN - 100,
    width: WIDTH_SCREEN - 100,
  },
});

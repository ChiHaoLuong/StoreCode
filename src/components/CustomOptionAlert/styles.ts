import {StyleSheet} from 'react-native';
import {WIDTH_WINDOW} from '../../constants';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    width: WIDTH_WINDOW / 1.2,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'black',
    fontSize: 14,
    marginTop: 12,
  },
  btnWrap: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 16,
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnPositiveTitle: {
    color: 'green',
  },
  btnNegativeTitle: {
    color: 'black',
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

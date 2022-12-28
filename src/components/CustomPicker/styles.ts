import {StyleSheet} from 'react-native';
import {HEIGHT_WINDOW} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    width: '100%',
  },
  label: {
    color: 'black',
    fontSize: 12,
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  dropdown: {
    width: 12,
    height: 12,
    tintColor: 'black',
    marginHorizontal: 8,
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInnerContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    width: '90%',
    maxHeight: HEIGHT_WINDOW / 2,
  },
  itemContainer: {
    width: '100%',
    justifyContent: 'center',
    padding: 12,
  },
  modalLabel: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 0,
  },
  header: {
    backgroundColor: 'white',
    height: 50,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomColor: 'gray',
    justifyContent: 'flex-end',
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
  button: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnColor: {
    color: 'blue',
  },
  vBorderLine: {
    backgroundColor: 'white',
    width: '100%',
    height: StyleSheet.hairlineWidth,
  },
  vPicker: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  vColumn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
    marginVertical: 4,
  },
});

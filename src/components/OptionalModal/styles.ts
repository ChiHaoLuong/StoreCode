import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  container: {
    backgroundColor: 'black',
    borderRadius: 8,
  },
  btnTitle: {
    color: 'white',
  },
  btnUserIcon: {
    marginRight: 12,
  },
  borderBottomLine: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
  modal: {
    flex: 1,
    zIndex: 100,
    marginTop: 0,
    marginHorizontal: 12,
  },
});

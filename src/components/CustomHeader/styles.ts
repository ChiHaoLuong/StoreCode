import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#272727',
    position: 'absolute',
    zIndex: 10000,
  },
  vContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  space: {
    flex: 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
  btnIcon: {
    marginLeft: 16,
  },
  vSignIn: {
    flexDirection: 'row',
    marginRight: 16,
  },
  txtSignIn: {
    fontSize: 14,
    color: 'white',
    marginLeft: 7,
  },
  btnCoin: {
    flexDirection: 'row',
    marginRight: 16,
    alignItems: 'center',
  },
  txtCoin: {
    color: 'white',
    fontSize: 14,
    marginLeft: 4,
  },
  optionContainer: {
    position: 'absolute',
    right: 0,
    marginVertical: 4,
  },
});

export default styles;

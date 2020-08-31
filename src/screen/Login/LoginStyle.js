import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#0065ff',
    alignItems: 'center',
    padding: 32,
  },
  paddingView: {height: '30%'},
  loginTextInput: {
    height: 50,
    width: '100%',
    backgroundColor: '#0065ff',
    fontSize: 18,
    borderRadius: 4,
    paddingLeft: 10,
    borderColor: '#fff',
    borderWidth: 1.2,
    color: '#fff',
  },
  loginButton: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {color: '#fff', fontSize: 18},
  loaderView: {
    height: 200,
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {marginTop: 8},
  loaderInnerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

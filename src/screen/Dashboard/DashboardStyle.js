import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0065ff',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  card: {marginTop: 32, paddingHorizontal: 6, paddingVertical: 24},
  renderView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: 80,
    alignItems: 'center',
    borderTopColor: '#000',
  },
  renderBorderStyle: {
    borderTopWidth: 1,
  },
  renderTitleText: {width: '60%', fontSize: 17, fontWeight: 'bold'},
  renderValueText: {width: '40%', fontSize: 14, color: '#404040'},
});

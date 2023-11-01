import {StyleSheet} from 'react-native';
import {colors} from '../../ui/colors';

export const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderColor: colors.majorelle,
    borderWidth: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  container: {
    paddingVertical: 5,
  },
  showButton: {width: '20%'},
  secureInput: {width: '75%'},
  secureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useHome = () => {
  const navigation = useNavigation<NavigationProp<'Home'>>();

  const onStartAgain = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });
  };

  return {
    onStartAgain,
  };
};

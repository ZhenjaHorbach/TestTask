import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useClearUser, useUserStore} from '../../store/user/hooks';

export const useHome = () => {
  const navigation = useNavigation<NavigationProp<'Home'>>();

  const user = useUserStore();
  const clearUser = useClearUser();

  const onStartAgain = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });

    clearUser();
  };

  return {
    user,
    onStartAgain,
  };
};

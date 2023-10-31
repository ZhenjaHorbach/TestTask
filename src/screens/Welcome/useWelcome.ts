import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';

export const useWelcome = () => {
  const navigation = useNavigation<NavigationProp<'Welcome'>>();

  const onLoginPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    navigation.navigate('Register');
  };

  return {
    onLoginPress,
    onRegisterPress,
  };
};

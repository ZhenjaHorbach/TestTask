import {useState} from 'react';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';

interface Credentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigation = useNavigation<NavigationProp<'Login'>>();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });

  const onSubmit = (values: {email: string; password: string}) => {
    setCredentials(values);
    navigation.navigate('Home');
  };

  const onShowPassword = (state: boolean) => {
    setShowPassword(state);
  };

  const onChangeCredentials = (key: 'email' | 'password', value: string) => {
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  return {
    onSubmit,
    onShowPassword,
    onChangeCredentials,
    showPassword,
    credentials,
  };
};

import {useState} from 'react';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';

interface Credentials {
  email: string;
  password: string;
}

const defaultValueForm = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const useLogin = () => {
  const navigation = useNavigation<NavigationProp<'Login'>>();
  const [credentials, setCredentials] = useState(defaultValueForm);

  const onSubmit = (values: Credentials) => {
    setCredentials(values);

    navigation.navigate('Home');
  };

  const onChangeCredentials = (key: keyof Credentials, value: string) => {
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  return {
    onSubmit,
    onChangeCredentials,
    defaultValueForm,
    schema,
  };
};

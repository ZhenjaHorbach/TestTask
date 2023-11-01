import {useState} from 'react';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {MAX_AGE, MIN_AGE, DEFAULT_AGE} from './constants';
import {useUpdateUser} from '../../store/user/hooks';
import {useAddUser} from '../../store/users/hooks';

interface UserInfo {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
  dateOfBirth: string;
  agreeTerms: string;
  agreePromo: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
  dateOfBirth: yup
    .date()
    .required('Date of Birth is required')
    .max(
      new Date(
        new Date().getFullYear() - MIN_AGE,
        new Date().getMonth(),
        new Date().getDate(),
      ),
      `You can not be younger than ${MIN_AGE} years`,
    )
    .min(
      new Date(
        new Date().getFullYear() - MAX_AGE,
        new Date().getMonth(),
        new Date().getDate(),
      ),
      `You can not be older than ${MAX_AGE} years`,
    ),
  agreeTerms: yup
    .string()
    .oneOf(['true'], 'You must agree to the Terms and Conditions'),
});

const defaultValueForm = {
  fullName: '',
  email: '',
  password: '',
  repeatPassword: '',
  dateOfBirth: new Date(
    new Date().getFullYear() - DEFAULT_AGE,
    new Date().getMonth(),
    new Date().getDate(),
  ).toDateString(),
  agreeTerms: 'false',
  agreePromo: 'false',
};

export const useRegister = () => {
  const navigation = useNavigation<NavigationProp<'Register'>>();
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [userInfo, setUserInfo] = useState(defaultValueForm);

  const updateUser = useUpdateUser();
  const addUser = useAddUser();

  const onSubmit = (values: UserInfo) => {
    updateUser(values);
    addUser({
      email: values.email,
      password: values.password,
    });

    navigation.reset({
      index: 1,
      routes: [{name: 'Welcome'}, {name: 'Home'}],
    });
  };

  const onShowDatePicker = (state: boolean) => {
    setDatePickerVisible(state);
  };

  const onChangeUserInfo = (key: keyof UserInfo, value: string) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  return {
    onSubmit,
    onShowDatePicker,
    isDatePickerVisible,
    schema,
    defaultValueForm,
    onChangeUserInfo,
    userInfo,
  };
};

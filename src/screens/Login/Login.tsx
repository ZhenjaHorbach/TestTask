import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {useLogin} from './useLogin';

export const Login = () => {
  const {onSubmit, onChangeCredentials, defaultValueForm, schema} = useLogin();

  return (
    <ScreenWrapper>
      <Formik
        initialValues={defaultValueForm}
        onSubmit={onSubmit}
        validationSchema={schema}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View>
            <TextInput
              label="Email"
              value={values.email}
              onChangeText={value => {
                onChangeCredentials('email', value);
                handleChange('email')(value);
              }}
              errorMessage={errors.email}
            />
            <TextInput
              label="Password"
              value={values.password}
              errorMessage={errors.password}
              onChangeText={value => {
                onChangeCredentials('password', value);
                handleChange('password')(value);
              }}
              isSecureInput
            />
            <Button title="Submit" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

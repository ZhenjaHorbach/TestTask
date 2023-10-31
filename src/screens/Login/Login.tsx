import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {useLogin} from './useLogin';
import {styles} from './styles';

export const Login = () => {
  const {
    showPassword,
    onShowPassword,
    onSubmit,
    credentials,
    onChangeCredentials,
  } = useLogin();

  return (
    <ScreenWrapper style={styles.wrapper}>
      <Formik initialValues={{email: '', password: ''}} onSubmit={onSubmit}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <TextInput
              label="Email"
              value={values.email}
              onChangeText={value => {
                onChangeCredentials('email', value);
                handleChange('email')(value);
              }}
            />
            <View style={styles.passwordContainer}>
              <View style={styles.passwordInput}>
                <TextInput
                  label="Password"
                  value={values.password}
                  onChangeText={value => {
                    onChangeCredentials('password', value);
                    handleChange('password')(value);
                  }}
                  secureTextEntry={!showPassword}
                />
              </View>
              <Button
                title={showPassword ? 'Hide' : 'Show'}
                onPress={() => onShowPassword(!showPassword)}
                style={styles.passwordButton}
              />
            </View>
            <Button
              title="Submit"
              disabled={!(credentials.email && credentials.password)}
              onPress={() => handleSubmit()}
              style={styles.button}
            />
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

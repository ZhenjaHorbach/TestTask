import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {ErrorMessage} from '../../components/ErrorMessage';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Formik} from 'formik';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {useRegister} from './useRegister';

import {styles} from './styles';

export const Register = () => {
  const {
    schema,
    onSubmit,
    isDatePickerVisible,
    onShowDatePicker,
    defaultValueForm,
    userInfo,
    onChangeUserInfo,
  } = useRegister();

  return (
    <ScreenWrapper>
      <Formik
        initialValues={defaultValueForm}
        validationSchema={schema}
        onSubmit={onSubmit}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View>
            <TextInput
              label="Full Name"
              onChangeText={value => {
                onChangeUserInfo('fullName', value);
                handleChange('fullName')(value);
              }}
              value={values.fullName}
              errorMessage={errors.fullName}
            />
            <TextInput
              label="Email"
              onChangeText={value => {
                onChangeUserInfo('email', value);
                handleChange('email')(value);
              }}
              value={values.email}
              errorMessage={errors.email}
            />
            <TextInput
              label="Password"
              onChangeText={value => {
                onChangeUserInfo('password', value);
                handleChange('password')(value);
              }}
              value={values.password}
              isSecureInput
              errorMessage={errors.password}
            />
            <TextInput
              label="Repeat Password"
              onChangeText={value => {
                onChangeUserInfo('repeatPassword', value);
                handleChange('repeatPassword')(value);
              }}
              value={values.repeatPassword}
              isSecureInput
              errorMessage={errors.repeatPassword}
            />
            <View style={styles.pickerContainer}>
              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                maximumDate={new Date()}
                onConfirm={date => {
                  onShowDatePicker(false);
                  onChangeUserInfo('dateOfBirth', date.toDateString());
                  handleChange('dateOfBirth')(date.toDateString());
                }}
                date={new Date(userInfo.dateOfBirth)}
                onCancel={() => onShowDatePicker(false)}
              />
              <Text>Date of Birth: {values.dateOfBirth}</Text>
              <ErrorMessage errorMessage={errors.dateOfBirth} />
              <Button
                title="Pick a Date"
                onPress={() => onShowDatePicker(true)}
              />
            </View>
            <View style={styles.pickerContainer}>
              <BouncyCheckbox
                size={25}
                textComponent={
                  <Text style={styles.bouncyCheckboxText}>
                    I agree to Terms and Conditions
                  </Text>
                }
                fillColor="green"
                onPress={checked => {
                  onChangeUserInfo('agreeTerms', checked.toString());
                  handleChange('agreeTerms')(checked.toString());
                }}
              />
              <ErrorMessage errorMessage={errors.agreeTerms} />
            </View>
            <Button title="Register" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

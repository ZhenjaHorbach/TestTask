import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {ErrorMessage} from '../../components/ErrorMessage';
import {Checkbox} from '../../components/Checkbox';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Formik} from 'formik';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {useRegister} from './useRegister';

import {styles} from './styles';
import {colors} from '../../ui';

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
          <ScrollView>
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
                style={{backgroundColor: colors.mauve}}
                onPress={() => onShowDatePicker(true)}
              />
            </View>
            <View style={styles.pickerContainer}>
              <Checkbox
                checkboxText="I agree to Terms and Conditions"
                onPress={checked => {
                  onChangeUserInfo('agreeTerms', checked.toString());
                  handleChange('agreeTerms')(checked.toString());
                }}
                errorMessage={errors.agreeTerms}
              />
            </View>
            <View style={styles.pickerContainer}>
              <Checkbox
                checkboxText="I agree to receive ads and promotional material on the given
																email address"
                onPress={checked => {
                  onChangeUserInfo('agreePromo', checked.toString());
                  handleChange('agreePromo')(checked.toString());
                }}
                disableErrorMessage
              />
            </View>
            <Button title="Register" onPress={() => handleSubmit()} />
          </ScrollView>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

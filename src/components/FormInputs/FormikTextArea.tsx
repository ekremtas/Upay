import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {screenWidth} from '../../helpers/globalSizes';

interface FormikTextAreaProps {
  handleChange: any;
  handleBlur: any;
  value: any;
  placeholder: any;
  touched: any;
  error: any;
}

const FormikTextArea = ({
  handleChange,
  handleBlur,
  value,
  placeholder,
  touched,
  error,
}: FormikTextAreaProps) => {
  let borderColor = error && touched ? 'red' : '#000';
  let marginTop = value !== '' ? 0 : 17;

  return (
    <View style={styles.textInputcontainer}>
      {value !== '' && (
        <Text style={styles.text} numberOfLines={1}>
          {placeholder}
        </Text>
      )}

      <TextInput
        multiline
        style={[styles.textInput, {borderColor, marginTop}]}
        placeholder={placeholder}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {error && touched && (
        <Text style={styles.errorText} numberOfLines={1}>
          {placeholder}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputcontainer: {
    width: screenWidth - 32,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  textInput: {
    height: 80,
    borderColor: 'gray',
    alignSelf: 'stretch',
    width: screenWidth - 32,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },
  errorText: {
    color: 'red',
    padding: 4,
    fontSize: 14,
  },
});

export default FormikTextArea;

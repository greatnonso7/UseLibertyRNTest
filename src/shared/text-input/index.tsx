/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef } from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Fonts } from '../../assets/fonts';
import colors from '../../styles/color';
import { hp, wp } from '../responsive-dimension';

interface FormTextInputProps extends RNTextInputProps {
  label: string;
  value: string;
  containerStyle: ViewStyle;
}

const FormTextInput = forwardRef<RNTextInput, FormTextInputProps>(
  ({ label, value, containerStyle, ...props }, ref) => {
    return (
      <View>
        <RNTextInput
          style={[styles.textInput, containerStyle]}
          placeholder={label}
          focusable={true}
          value={value}
          // onFocus={onFocus}
          // secureTextEntry={show}
          placeholderTextColor={colors.placeholderText}
          {...{ ref }}
          {...props}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  textInput: {
    height: hp(60),
    width: wp(323),
    borderWidth: 2,
    borderRadius: hp(5),
    borderColor: colors.primary,
    paddingLeft: hp(18),
    fontFamily: Fonts.circularStdBook,
    color: colors.textColor,
    fontSize: hp(16),
    backgroundColor: '#E6F5F6',
    marginBottom: hp(20),
  },
});

export default FormTextInput;

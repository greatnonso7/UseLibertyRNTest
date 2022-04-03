/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef } from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Fonts } from '../../assets/fonts';
import { Eye } from '../../assets/svgs';
import colors from '../../styles/color';
import { hp, wp } from '../responsive-dimension';

interface FormTextInputProps extends RNTextInputProps {
  label?: string;
  value?: string;
  containerStyle?: ViewStyle;
  placeholder?: string;
  isPassword?: boolean;
}

const FormTextInput = forwardRef<RNTextInput, FormTextInputProps>(
  (
    { label, value, placeholder, isPassword, containerStyle, ...props },
    ref,
  ) => {
    return (
      <View style={[styles.formContainer, containerStyle]}>
        <Text style={styles.label}>{label}</Text>
        <RNTextInput
          focusable={true}
          style={styles.formInput}
          value={value}
          placeholder={placeholder}
          // onFocus={onFocus}
          // secureTextEntry={show}
          placeholderTextColor={colors.placeholderText}
          {...{ ref }}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity style={styles.passwordContainer}>
            <Eye />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  formContainer: {
    height: hp(60),
    width: wp(333),
    borderWidth: 1,
    borderRadius: hp(10),
    borderColor: '#F2F5F8AB',
    paddingLeft: hp(15),
    fontFamily: Fonts.circularStdBook,
    color: colors.textColor,
    // fontSize: hp(16),
    backgroundColor: '#F2F5F8AB',
    marginBottom: hp(30),
  },
  formInput: {
    marginTop: Platform.OS === 'ios' ? hp(5) : -10,
    fontSize: hp(16),
  },
  label: {
    paddingTop: hp(10),
    color: colors.textColor,
    fontFamily: Fonts.circularStdBook,
  },
  passwordContainer: {
    position: 'absolute',
    right: hp(15),
    top: hp(20),
  },
});

export default FormTextInput;

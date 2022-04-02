import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Container from '../../shared/container';
import HeaderBar from '../../shared/header-bar';
import LongButton from '../../shared/long-button';
import FormTextInput from '../../shared/text-input';
import { styles } from './style';

const Register = ({ navigation }: any) => {
  return (
    <Container>
      <HeaderBar headerTitle="Register" />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Complete the registration process to get started
        </Text>
      </View>

      <View style={styles.formContainer}>
        <FormTextInput />
        <FormTextInput />
        <FormTextInput />
      </View>

      <LongButton buttonStyle={styles.buttonStyle} title="Register" />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Don't have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButton}> Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Register;

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../../shared/container';
import HeaderBar from '../../shared/header-bar';
import LongButton from '../../shared/long-button';
import FormTextInput from '../../shared/text-input';
import { styles } from './style';

const Login = ({ navigation }: any) => {
  return (
    <Container>
      <HeaderBar headerTitle="Login" />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Welcome back! fill in your{'\n'} details to get back in
        </Text>
      </View>

      <View style={styles.formContainer}>
        <FormTextInput />
        <FormTextInput />
      </View>

      <LongButton buttonStyle={styles.buttonStyle} title="Login" />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.loginButton}> Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Login;

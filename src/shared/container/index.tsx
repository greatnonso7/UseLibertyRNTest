import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../styles/color';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Container;

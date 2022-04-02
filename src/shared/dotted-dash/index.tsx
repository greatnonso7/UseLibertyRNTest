import React from 'react';
import { View, StyleSheet } from 'react-native';

const DottedDash = () => {
  return <View style={styles.itemDash} />;
};

const styles = StyleSheet.create({
  itemDash: {
    height: 0,
    borderRadius: 1,
    width: '100%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'rgba(161,155,183,1)',
  },
  itemDash2: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    zIndex: 1,
  },
});

export default DottedDash;

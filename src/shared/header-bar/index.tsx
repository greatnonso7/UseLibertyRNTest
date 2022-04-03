import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../assets/fonts';
import colors from '../../styles/color';
import { deviceWidth, hp } from '../responsive-dimension';

interface HeaderBarProps {
  headerTitle: string;
  tintColor?: string;
}

const HeaderBar = ({ headerTitle, tintColor }: HeaderBarProps) => {
  const renderHeaderTitle = () => {
    if (headerTitle) {
      return (
        <Text style={[styles.headerTitle, { color: tintColor }]}>
          {headerTitle}
        </Text>
      );
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.navBar}>{renderHeaderTitle()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white,
    width: deviceWidth,
  },
  navBar: {
    width: deviceWidth,
    backgroundColor: colors.white,
    height: hp(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: hp(20),
    marginTop: hp(15),
  },
  headerTitle: {
    fontSize: hp(23),
    fontFamily: Fonts.circularStdBold,
    color: '#000',
  },
});

export default HeaderBar;

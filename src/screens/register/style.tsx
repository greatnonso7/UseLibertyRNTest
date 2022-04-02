import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets/fonts';
import { hp, wp } from '../../shared/responsive-dimension';
import colors from '../../styles/color';

export const styles = StyleSheet.create({
  headerTextContainer: {
    width: wp(205),
    alignSelf: 'center',
    marginTop: hp(20),
  },
  headerText: {
    textAlign: 'center',
    fontFamily: Fonts.circularStdMedium,
    color: colors.textColor,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(66),
  },
  buttonStyle: {
    bottom: hp(30),
  },
  loginContainer: {
    position: 'absolute',
    bottom: hp(40),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  loginText: {
    fontFamily: Fonts.circularStdBook,
    color: colors.appBlack,
  },
  loginButton: {
    color: colors.buttonColor,
    fontFamily: Fonts.circularStdBook,
  },
});

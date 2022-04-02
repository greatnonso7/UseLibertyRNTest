import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets/fonts';
import { hp, wp } from '../../shared/responsive-dimension';
import colors from '../../styles/color';

export const styles = StyleSheet.create({
  bodyContainer: {
    marginHorizontal: wp(24),
    marginTop: hp(12),
  },
  profileContainer: {
    width: wp(45),
    height: hp(45),
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(100),
  },
  profile: {
    width: wp(25),
    height: hp(30),
  },
  userProfileContainer: {
    marginLeft: wp(20),
  },
  welcomeText: {
    fontSize: hp(12),
    fontFamily: Fonts.circularStdBook,
    color: colors.textColor,
  },
  profileName: {
    fontFamily: Fonts.circularStdBold,
    fontSize: hp(17),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    width: wp(40),
    height: hp(40),
    backgroundColor: 'background: rgba(242, 245, 248, 0.67)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(8),
  },
});

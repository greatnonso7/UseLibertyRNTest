import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets/fonts';
import { hp, wp } from '../../shared/responsive-dimension';
import colors from '../../styles/color';

export const styles = StyleSheet.create({
  bodyContainer: {
    marginHorizontal: wp(22),
    marginTop: hp(12),
  },
  profileContainer: {
    width: 45,
    height: 45,
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
  cardContainer: {
    width: wp(336),
    height: hp(195),
    backgroundColor: colors.primary,
    marginTop: hp(29),
    borderRadius: hp(24),
    paddingHorizontal: wp(20),
    paddingVertical: hp(22),
  },
  balanceText: {
    fontSize: hp(12),
    color: colors.white,
    fontFamily: Fonts.circularStdMedium,
  },
  amountText: {
    fontSize: hp(45),
    color: colors.white,
    fontFamily: Fonts.circularStdMedium,
  },
  bottomCardContainer: {
    marginTop: hp(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthlyProfitContainer: {
    marginTop: hp(0),
  },
  monthlyHeaderText: {
    fontSize: hp(15),
    fontFamily: Fonts.circularStdMedium,
    color: colors.white,
  },
  monthlyAmountProfit: {
    fontSize: hp(22),
    color: colors.white,
    fontFamily: Fonts.circularStdMedium,
  },
  featureContainer: {
    marginTop: hp(44),
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemFeatureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    width: 66,
    height: 66,
    borderWidth: hp(1),
    justifyContent: 'center',
    borderRadius: hp(100),
    backgroundColor: 'rgba(70, 143, 254, 0.05)',
    borderColor: 'rgba(162, 162, 162, 0.34)',
  },
  itemText: {
    textAlign: 'center',
    paddingTop: hp(10),
    fontFamily: Fonts.circularStdMedium,
    color: colors.appBlack,
  },
  transactionsContainer: {
    marginTop: hp(55),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionHeaderText: {
    fontFamily: Fonts.circularStdMedium,
    fontSize: hp(18),
    color: '#2E2E2E',
  },
  transactionHeaderButtonText: {
    color: colors.primary,
    fontFamily: Fonts.circularStdMedium,
    fontSize: hp(18),
  },
  transactionItem: {
    flexDirection: 'row',
    marginTop: hp(20),
    justifyContent: 'space-between',
    marginBottom: hp(30),
  },
  bitcoinText: {
    fontFamily: Fonts.circularStdMedium,
    color: '#2E2E2E',
  },
  sentText: {
    fontFamily: Fonts.circularStdBook,
    color: '#959595',
    fontSize: hp(12),
  },
  amountSent: {
    color: 'red',
    fontFamily: Fonts.circularStdBook,
    fontSize: hp(14),
  },
  profitChartContainer: {
    width: wp(66),
    height: hp(30),
    flexDirection: 'row',
    borderRadius: hp(10),
    backgroundColor: '#448EFE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 20,
  },
  profitChartText: {
    fontSize: hp(12),
    fontFamily: Fonts.circularStdMedium,
    color: colors.white,
  },
});

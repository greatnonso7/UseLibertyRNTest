import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Notification, Wallet, Buy, Coin, Polygon } from '../../assets/svgs';
import { sharedImages } from '../../images';
import Container from '../../shared/container';
import { styles } from './style';
import DottedDash from '../../shared/dotted-dash';

const Dashboard = () => {
  return (
    <Container>
      <View style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerProfileContainer}>
            <View style={styles.profileContainer}>
              <Image
                source={sharedImages.profile}
                resizeMode="contain"
                style={styles.profile}
              />
            </View>
            <View style={styles.userProfileContainer}>
              <Text style={styles.welcomeText}>Welcome Back!</Text>
              <Text style={styles.profileName}>Ahmed Fawell</Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.notificationContainer}>
            <Notification />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.balanceText}>Balance</Text>
            <Text style={styles.amountText}>$250,000</Text>
          </View>

          <View style={styles.bottomCardContainer}>
            <View style={styles.monthlyProfitContainer}>
              <Text style={styles.monthlyHeaderText}>Monthly Profit</Text>
              <Text style={styles.monthlyAmountProfit}>$3,000</Text>
            </View>

            <View style={styles.profitChartContainer}>
              <Polygon />
              <Text style={styles.profitChartText}> +10%</Text>
            </View>
          </View>
        </View>

        <View style={styles.featureContainer}>
          {data?.map(item => {
            return (
              <View key={item.id} style={styles.itemFeatureContainer}>
                <View style={[styles.itemContainer]}>
                  <item.Icon />
                </View>
                <Text style={[styles.itemText]}>{item.title}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionHeaderText}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.transactionHeaderButtonText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionItem}>
          <View>
            <Text style={styles.bitcoinText}>Bitcoin</Text>
            <Text style={styles.sentText}>Sent</Text>
          </View>

          <View>
            <Text style={styles.amountSent}>-0.66775 BTC</Text>
            <Text style={styles.sentText}>Today 12:03AM</Text>
          </View>
        </View>

        <DottedDash />
      </View>
    </Container>
  );
};

const data = [
  {
    id: 1,
    title: 'Send',
    Icon: Coin,
  },
  {
    id: 2,
    title: 'Fund Wallet',
    Icon: Wallet,
  },
  {
    id: 3,
    title: 'Buy',
    Icon: Buy,
  },
];

export default Dashboard;

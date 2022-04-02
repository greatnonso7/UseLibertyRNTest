import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Notification } from '../../assets/svgs';
import { sharedImages } from '../../images';
import Container from '../../shared/container';
import { styles } from './style';

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
      </View>
    </Container>
  );
};

export default Dashboard;

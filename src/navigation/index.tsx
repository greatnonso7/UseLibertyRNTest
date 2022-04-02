import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { RootStackParamList } from './types';

import Login from '../screens/login';
import Register from '../screens/register';
import Dashboard from '../screens/dashboard';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

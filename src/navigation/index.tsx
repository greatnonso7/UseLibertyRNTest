import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { RootStackParamList } from './types';

import Login from '../screens/login';
import Register from '../screens/register';

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
    </Stack.Navigator>
  );
}

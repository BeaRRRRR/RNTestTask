import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from 'modules/Auth/screens/SignUp';
import LoginScreen from 'modules/Auth/screens/Login';
import { screenNames } from 'navigation';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={screenNames.Login}>
      <Stack.Screen
        name={screenNames.Login}
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen name={screenNames.SignUp} component={SignupScreen} />
    </Stack.Navigator>
  );
}

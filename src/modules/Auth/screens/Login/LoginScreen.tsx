import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { FormButton, FormInput } from 'components/Form';
import { screenNames } from 'navigation';
import { useDispatch, useSelector } from 'utils/hooks';
import { authEmailLoginAsync } from 'store/actions/auth';
import { getAuthError } from 'store/selectors/auth';

import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

  useEffect(() => {
    /* I a real app, I would create a dictionary with user-friendly errors,
       instead of just showing the error as it is
    */
    if (error) Alert.alert('Error', error.message);
  }, [error]);

  // Should avoid using arrow functions in props for performance benefits
  function emailOnChange(newEmail: string) {
    setEmail(newEmail);
  }

  function passwordOnChange(newPassword: string) {
    setPassword(newPassword);
  }

  function login() {
    dispatch(authEmailLoginAsync.request({ email, password }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my app</Text>
      <FormInput
        value={email}
        placeholder="Email"
        onChangeText={emailOnChange}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholder="Password"
        onChangeText={passwordOnChange}
        secureTextEntry
      />
      <FormButton buttonTitle="Login" onPress={login} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate(screenNames.SignUp)}
      >
        <Text style={styles.navButtonText}>New user? Join here</Text>
      </TouchableOpacity>
    </View>
  );
}

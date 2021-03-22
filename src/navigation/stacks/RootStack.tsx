import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Loading from 'components/Loading';
import HomeStack from 'navigation/stacks/HomeStack';
import AuthStack from 'navigation/stacks/AuthStack';

import { getUser, getLoading } from 'store/selectors/auth';
import { useSelector } from 'utils/hooks';

export default function Router() {
  const user = useSelector(getUser);
  const loading = useSelector(getLoading);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Router from 'navigation/stacks/RootStack';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

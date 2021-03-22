import React from 'react';
import { View } from 'react-native';
import CardSwiper from 'modules/Home/components/CardSwiper';

import styles from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <CardSwiper />
    </View>
  );
}

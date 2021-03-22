import React from 'react';
import Swiper from 'react-native-deck-swiper';
import { View, Text } from 'react-native';

import styles from './styles';

export default function CardSwiper() {
  return (
    <View style={styles.container}>
      <Swiper
        cards={[
          'Card 1',
          'Card 2',
          'Card 3',
          'Card 4',
          'Card 5',
          'Card 6',
          'Card 7',
          'Card 8',
          'Card 9',
          'Card 10',
          'Card 11',
          'Card 12',
          'Card 13',
          'Card 14',
          'Card 15',
          'Card 16',
          'Card 17',
          'Card 18',
          'Card 19',
          'Card 20',
        ]}
        renderCard={(card) => (
          <View style={styles.card}>
            <Text style={styles.text}>{card}</Text>
          </View>
        )}
        cardIndex={0}
        backgroundColor="#4FD0E9"
        stackSize={20}
        overlayLabels={{
          bottom: {
            title: 'NO',
            style: {
              label: styles.bottomLabel,
              wrapper: styles.bottomWrapper,
            },
          },
          left: {
            title: ':(',
            style: {
              label: styles.leftLabel,
              wrapper: styles.leftWrapper,
            },
          },
          right: {
            title: '<3',
            style: {
              label: styles.rightLabel,
              wrapper: styles.rightWrapper,
            },
          },
          top: {
            title: 'YES',
            style: {
              label: styles.topLabel,
              wrapper: styles.topWrapper,
            },
          },
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
        swipeBackCard
      />
    </View>
  );
}

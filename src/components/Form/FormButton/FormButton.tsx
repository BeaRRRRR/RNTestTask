import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

type Props = {
  buttonTitle: string;
  [name: string]: any;
};

export default function FormButton({ buttonTitle, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

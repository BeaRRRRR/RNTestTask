import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

type Props = {
  value: string;
  placeholder: string;
  [name: string]: any;
};

export default function FormInput({ value, placeholder, ...rest }: Props) {
  return (
    <TextInput
      value={value}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholder}
      placeholderTextColor="#666"
      {...rest}
    />
  );
}

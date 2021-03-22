import { StyleSheet } from 'react-native';
import { rem, vrem } from 'styles/dimensions';

const styles = StyleSheet.create({
  input: {
    paddingTop: vrem(10),
    marginTop: vrem(5),
    marginBottom: vrem(10),
    width: rem(200),
    height: vrem(40),
    fontSize: rem(16),
    borderRadius: rem(8),
    borderWidth: rem(1),
  },
});

export default styles;

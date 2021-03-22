import { StyleSheet } from 'react-native';
import { rem, vrem } from 'styles/dimensions';
import colors from 'styles/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: rem(100),
    height: vrem(50),
    backgroundColor: colors.purple,
    padding: rem(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rem(8),
  },
  buttonText: {
    fontSize: rem(15),
    color: colors.white,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { rem, vrem } from 'styles/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: rem(24),
    marginBottom: vrem(10),
  },
  navButton: {
    marginTop: vrem(10),
  },
  navButtonText: {
    fontSize: rem(20),
    color: colors.purple,
  },
});

export default styles;

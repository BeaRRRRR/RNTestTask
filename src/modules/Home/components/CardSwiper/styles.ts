import { StyleSheet } from 'react-native';
import { rem, vrem } from 'styles/dimensions';
import colors from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: rem(4),
    borderWidth: rem(2),
    borderColor: colors.lightGray,
    backgroundColor: 'white',
    marginBottom: vrem(100),
  },
  text: {
    textAlign: 'center',
    fontSize: rem(50),
    backgroundColor: 'transparent',
  },
  bottomLabel: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    color: colors.black,
    borderWidth: 1,
  },
  bottomWrapper: {
    backgroundColor: colors.black,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftLabel: {
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    marginRight: rem(30),
    marginTop: vrem(30),
  },
  leftWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
  rightLabel: {
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    marginTop: rem(30),
    marginLeft: vrem(30),
  },
  rightWrapper: {
    backgroundColor: 'green',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  topLabel: {
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
  },
  topWrapper: {
    backgroundColor: 'purple',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

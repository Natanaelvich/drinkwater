import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  ml: {
    color: theme.colors.blue90,
    fontSize: 48,
    fontFamily: theme.fonts.extraBold,
    textAlign: 'center'
  },
  label: {
    color: theme.colors.blue90,
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    textAlign: 'center'
  },
  percentage: {
    fontSize: 112,
    color: theme.colors.blue100,
    marginTop: 50,
    fontFamily: theme.fonts.extraBold
  },
  cups: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
});
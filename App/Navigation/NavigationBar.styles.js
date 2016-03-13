import {
  StyleSheet,
  Platform,
} from 'react-native';

const isAndroid = Platform.OS === 'android';
import colors from '../assets/styles/colors';

module.exports = StyleSheet.create({
  navBarContainer: {
    backgroundColor: colors.logo.grey,
    borderBottomColor: colors.website.grey,
  },

  navBarButton: {
    margin: isAndroid ? 15 : 10,
    color: colors.logo.white,
  },

  navBarTitle: {
    color: colors.logo.white,
    marginTop: isAndroid ? 15 : 10,
  },

  navBarLogo: {
    marginTop: isAndroid ? 10 : 5,
    width: 216,
    height: 38,
  },

});

import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

import colors from '../assets/styles/colors';
const isAndroid = Platform.OS === 'android';

module.exports = StyleSheet.create({
  /* Container */
  loaderContainer: {
    paddingTop: isAndroid ? 56 : 64,
    backgroundColor: colors.logo.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loaderSpinner: {
    flex: 1,
    top: isAndroid ? (Dimensions.get('window').height / 3) : 0,
  },

});

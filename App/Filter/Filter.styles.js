import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

import colors from '../assets/styles/colors';
const isAndroid = Platform.OS === 'android';

module.exports = StyleSheet.create({
  /* Container */
  filterContainer: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    backgroundColor: colors.logo.white,
  },

  filterItem: {
    flex: 1,
    color: '#000',
  },

});

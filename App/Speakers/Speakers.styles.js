import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

import colors from '../assets/styles/colors';
const isAndroid = Platform.OS === 'android';
const sizeRatio = (Dimensions.get('window').width) * 3 / 5;

module.exports = StyleSheet.create({
  /* Container */
  speakerContainer: {
    backgroundColor: colors.logo.white,
    paddingTop: isAndroid ? 56 : 64,
    flex: 1,
  },

  /* Row */
  speakerRowContainer: {
    flex: 1,
  },

  speakerRowTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  speakerRowImage: {
    width: sizeRatio,
    height: sizeRatio,
  },

  speakerRowBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.newsletter.green,
  },
  speakerRowName: {
    color: colors.logo.white,
    fontWeight: '600',
  },

});

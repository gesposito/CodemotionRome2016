import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

const isAndroid = Platform.OS === 'android';

module.exports = StyleSheet.create({
  /* Container */
  talkContainer: {
    paddingTop: isAndroid ? 56 : 64,
    flex: 1,
  },

  webView: {
    flex: 1,
    // backgroundColor: colors.logo.grey,
    height: Dimensions.get('window').height - (isAndroid ? 112 : 110),
  },

});

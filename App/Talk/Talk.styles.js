var React = require('react-native');
var {
  StyleSheet,
  Platform,
  Dimensions
} = React;

var colors = require('../assets/styles/colors');
var isAndroid = Platform.OS === 'android';

module.exports = StyleSheet.create({
  /* Container */
  talkContainer: {
    paddingTop: isAndroid ? 56 : 64,
    flex: 1,
  },

  webView: {
    flex: 1,
    //backgroundColor: colors.logo.grey,
    height: Dimensions.get('window').height - (isAndroid ? 112 : 110),
  }


});

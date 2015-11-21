var React = require('react-native');
var {
  StyleSheet,
  Platform
} = React;

var isAndroid = Platform.OS === 'android';
var colors = require('../assets/styles/colors');

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
      height: 38
    },

});

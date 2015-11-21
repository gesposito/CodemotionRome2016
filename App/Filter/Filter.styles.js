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
  filterContainer: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    backgroundColor: colors.logo.white
  },

  filterItem: {
    flex: 1,
    color: '#000'
  },

});

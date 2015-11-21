'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Platform,
  StatusBarIOS
} = React;

var App = require('./App/App')

Platform.OS === 'ios' ? StatusBarIOS.setStyle('light-content', false): null;

AppRegistry.registerComponent('CodemotionMilan2015', () => App);

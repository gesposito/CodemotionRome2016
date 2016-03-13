'use strict';

import {
  AppRegistry,
  Platform,
  StatusBarIOS,
} from 'react-native';

const App = require('./App/App');

Platform.OS === 'ios' ? StatusBarIOS.setStyle('light-content', false) : null;

AppRegistry.registerComponent('CodemotionMilan2015', () => App);

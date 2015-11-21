var React = require('react-native');
var {
  Navigator
} = React;

var Schedule = require('../Schedule/Schedule');
var Speakers = require('../Speakers/Speakers');
var Filter = require('../Filter/Filter');
var Talk = require('../Talk/Talk');

module.exports = {
  'main': {
    'schedule': {
      'id': 'Schedule',
      'title': 'Schedule',
      'index': 0,
      'component': Schedule,
    },
    'speakers': {
      'id': 'Speakers',
      'title': 'Speakers',
      'index': 1,
      'component': Speakers,
    }
  },
  
  'side': {
    'filter': {
      'id': 'Filter',
      'title': 'Filter',
      'index': 2,
      'component': Filter
    },
    'talk': {
      'id': 'Talk',
      'title': 'Talk',
      'index': 3,
      'component': Talk
    }
  }
};

'use strict';

var React = require('react-native');

var {
  View,
  Text
} = React;

var Routes = require('./Routes');
var Schedule = require('../Schedule/Schedule');
var Speakers = require('../Speakers/Speakers');

var RouteMapper = React.createClass({
  render: function() {
    return (
      <Main {...this.props} />

    );
  }


});

var Main = React.createClass({
  render: function() {
    switch (this.props.route.id) {
      case Routes.main.speakers.id:
        return <Speakers {...this.props} />
      default:
        return <Schedule {...this.props} />
    }

  }
});

module.exports = RouteMapper;

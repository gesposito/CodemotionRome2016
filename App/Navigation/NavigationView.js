'use strict';

var React = require('react-native');

var {
  View,
  Text,
  TouchableOpacity
} = React;

var Routes = require('./Routes');

var Icon = require('react-native-vector-icons/Ionicons');

var styles = require('./NavigationView.styles');
var colors = require('../assets/styles/colors');

var NavigationView = React.createClass({
  getInitialState: function() {
    return {
      tabIndex: 0
    }
  },

  onDrawerStateChanged: function() {
    var navigator = this.props.getNavigator();
    var stack = navigator.state.routeStack;
    var presented = navigator.state.presentedIndex;
    this.setState({
      tabIndex: stack[presented].index
    })
  },

  render: function() {
    var navigator = this.props.getNavigator();
    return (
      <View style={styles.navViewContainer}>
        <TouchableOpacity onPress={() => {
            navigator.jumpTo(Routes.main.schedule);
            navigator.props.getDrawer().closeDrawer();
          }}>
          <View style={[ styles.navViewItemContainer ]}>
            <Icon
              name="calendar"
              size={20}
              style={[ styles.navViewIcon, this.state.tabIndex === 0 && styles.navViewItemActive ]}
              />
            <Text style={[ styles.navViewItem, this.state.tabIndex === 0 && styles.navViewItemActive ]}>Schedule</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            navigator.push(Routes.main.speakers);
            navigator.props.getDrawer().closeDrawer();
          }}>
          <View style={[ styles.navViewItemContainer ]}>
            <Icon
              name="mic-c"
              size={20}
               style={[ styles.navViewIcon, styles.navViewIconMic, this.state.tabIndex === 1 && styles.navViewItemActive ]}
              />
            <Text style={[ styles.navViewItem, this.state.tabIndex === 1 && styles.navViewItemActive ]}>Speakers</Text>

          </View>
        </TouchableOpacity>
      </View>

    );

  }

});

module.exports = NavigationView;

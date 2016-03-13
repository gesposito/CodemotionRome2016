'use strict';

import React, {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Routes from './Routes';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './NavigationView.styles';

const NavigationView = React.createClass({
  getInitialState() {
    return {
      tabIndex: 0,
    };
  },

  onDrawerStateChanged() {
    const navigator = this.props.getNavigator();
    const stack = navigator.state.routeStack;
    const presented = navigator.state.presentedIndex;
    this.setState({
      tabIndex: stack[presented].index,
    });
  },

  render() {
    const navigator = this.props.getNavigator();
    return (
      <View style={styles.navViewContainer}>
        <TouchableOpacity
          onPress={() => {
            navigator.jumpTo(Routes.main.schedule);
            navigator.props.getDrawer().closeDrawer();
          }}
        >
          <View style={[styles.navViewItemContainer]}>
            <Icon
              name="calendar"
              size={20}
              style={[styles.navViewIcon, this.state.tabIndex === 0 && styles.navViewItemActive]}
            />
            <Text style={[styles.navViewItem, this.state.tabIndex === 0 && styles.navViewItemActive]}>
              Schedule
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigator.push(Routes.main.speakers);
            navigator.props.getDrawer().closeDrawer();
          }}
        >
          <View style={[styles.navViewItemContainer]}>
            <Icon
              name="mic-c"
              size={20}
               style={[styles.navViewIcon, styles.navViewIconMic, this.state.tabIndex === 1 && styles.navViewItemActive]}
              />
            <Text style={[styles.navViewItem, this.state.tabIndex === 1 && styles.navViewItemActive]}>
              Speakers
            </Text>

          </View>
        </TouchableOpacity>
      </View>

    );
  },

});

module.exports = NavigationView;

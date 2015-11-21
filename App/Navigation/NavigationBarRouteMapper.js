/*
  See https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/Navigator/NavigationBarSample.js
*/

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  NavButton,
  Platform,
  Navigator
} = React;

var Routes = require('./Routes');
var styles = require('./NavigationBar.styles');

var Icon = require('react-native-vector-icons/Ionicons');

var isAndroid = Platform.OS === 'android';

module.exports = {
  LeftButton: function(route, navigator, index, navState) {
    if (navigator.getCurrentRoutes().length > 1) {
      return (
        <TouchableOpacity onPress={() => {
            navigator.pop();
          }}>
          <Icon name="ios-arrow-back" size={30} style={styles.navBarButton} />
        </TouchableOpacity>
      );
    }

    if (!isAndroid) {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => {
          navigator.props.getDrawer().openDrawer();
        }}>
        <Icon name="navicon" size={30} style={styles.navBarButton} />
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Image
        source={{uri: 'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/img/CDM_2013_logo_extended_web_grey_400.png'}}
        style={styles.navBarLogo}
      />
    );
    /*
    source={require('../assets/img/CDM_2013_logo_extended_web_grey_400.png')}
    
    return (
      <Text style={[styles.navBarTitle, styles.navBarText]}>
        {route.title}
      </Text>
    );
    */
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
    /*
      TODO Filters
    */
    if (route.id !== Routes.main.schedule.id) {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => {
          navigator.push(Routes.side.filter);
        }}>
        <Text style={styles.navBarButton}>
          Filter
        </Text>
      </TouchableOpacity>
    );
  },


};

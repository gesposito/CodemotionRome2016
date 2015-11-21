/*
  See https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/Navigator/NavigationBarSample.js
*/

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  NavButton
} = React;

var Routes = require('./Routes');
var styles = require('./NavigationBar.styles');

module.exports = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity>
        <Text style={styles.navBarButton}>
          &lt;  {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity>
        <Text style={styles.navBarButton}>
          Filter
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Image
        style={styles.navBarLogo} 
        source={require('../../assets/img/CDM_2013_logo_extended_web_grey_400.png')}
      />
    );
    /*
    return (
      <Text style={[styles.navBarTitle, styles.navBarText]}>
        {route.title}
      </Text>
    );
    */
  },

};

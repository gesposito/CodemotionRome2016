var React = require('react-native');
var {
  Navigator,
  Text,
  View,
  DrawerLayoutAndroid,
  BackAndroid
} = React;

var Routes = require('./Navigation/Routes');
var NavigationBarRouteMapper = require('./Navigation/NavigationBarRouteMapper');
var NavigationView = require('./Navigation/NavigationView');

var colors = require('./assets/styles/colors');
var styles = require('./Navigation/NavigationBar.styles');

var _navigator;

var App = React.createClass({
  render: function() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() =>
          <NavigationView
            ref={(navView) => {
              this._navView = navView;
            }}
            getNavigator={this.getNavigator}
            getDrawer={this.getDrawer} />
        }
        ref={(drawer) => {
          this._drawer = drawer;
        }}
        onDrawerStateChanged={this.onDrawerStateChanged}>
        {this.renderNavigation( Routes.main.home )}
      </DrawerLayoutAndroid>
    );
  },

  renderNavigation: function() {
    return (
      <Navigator
        initialRoute={Routes.main.schedule}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBarContainer}
          />
        }
        configureScene={(route) => {
          switch (route.id) {
            case Routes.side.filter.id:
              return Navigator.SceneConfigs.FloatFromBottomAndroid;
            default:
              return Navigator.SceneConfigs.FadeAndroid;
          }
        }}
        ref={(navigator) => {
          _navigator = navigator;
          this._navigator = navigator;
        }}
        getDrawer={this.getDrawer}
      />
    );
  },

  renderScene: function(route, navigator) {
    return (
      <route.component route={route} navigator={navigator} />
    );
  },

  getNavigator: function() {
    return this._navigator;
  },

  getDrawer: function() {
    return this._drawer;
  },

  getNavView: function() {
    return this._navView;
  },

  onDrawerStateChanged: function() {
    this.getNavView().onDrawerStateChanged();
  }

});

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

module.exports = App;

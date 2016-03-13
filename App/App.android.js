import React, {
  Navigator,
  DrawerLayoutAndroid,
  BackAndroid,
} from 'react-native';

import Routes from './Navigation/Routes';
import NavigationBarRouteMapper from './Navigation/NavigationBarRouteMapper';
import NavigationView from './Navigation/NavigationView';

import styles from './Navigation/NavigationBar.styles';

let _navigator;

const App = React.createClass({
  renderNavigation() {
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

  render() {
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
            getDrawer={this.getDrawer}
          />
        }
        ref={(drawer) => {
          this._drawer = drawer;
        }}
        onDrawerStateChanged={this.onDrawerStateChanged}
      >
        {this.renderNavigation(Routes.main.home)}
      </DrawerLayoutAndroid>
    );
  },

  renderScene(route, navigator) {
    return (
      <route.component route={route} navigator={navigator} />
    );
  },

  onDrawerStateChanged() {
    this.getNavView().onDrawerStateChanged();
  },

  getNavigator() {
    return this._navigator;
  },

  getDrawer() {
    return this._drawer;
  },

  getNavView() {
    return this._navView;
  },

});

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1) {
    return false;
  }
  _navigator.pop();
  return true;
});

module.exports = App;

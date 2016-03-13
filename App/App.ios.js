import React, {
  Navigator,
  TabBarIOS,
} from 'react-native';

import Routes from './Navigation/Routes';
import NavigationBarRouteMapper from './Navigation/NavigationBarRouteMapper';

import Icon from 'react-native-vector-icons/Ionicons';

import colors from './assets/styles/colors';
import styles from './Navigation/NavigationBar.styles';

const App = React.createClass({
  getInitialState() {
    return {
      tabIndex: 0,
    };
  },

  render() {
    return (
      <TabBarIOS
        barTintColor={colors.logo.grey}
        tintColor={colors.logo.white}
        translucent={false}
      >
        <Icon.TabBarItem
          iconName="calendar"
          title="Schedule"
          selected={this.state.tabIndex === 0}
          onPress={() => {
            this.setState({ tabIndex: 0 });
          }}
        >
          <Scene scene={Routes.main.schedule} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName="mic-c"
          title="Speakers"
          selected={this.state.tabIndex === 1}
          onPress={() => {
            this.setState({ tabIndex: 1 });
          }}
        >
          <Scene scene={Routes.main.speakers} />
        </Icon.TabBarItem>
      </TabBarIOS>

    );
  },

});

const Scene = React.createClass({
  renderScene(route, navigator) {
    return (
      <route.component route={route} navigator={navigator} />
    );
  },

  render() {
    return (
      <Navigator
        initialRoute={this.props.scene}
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
              return Navigator.SceneConfigs.FloatFromBottom;
            default:
              return Navigator.SceneConfigs.HorizontalSwipeJump;
          }
        }}
      />
    );
  },

});

module.exports = App;

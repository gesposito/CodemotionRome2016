var React = require('react-native');
var {
  Navigator,
  Text,
  View,
  TabBarIOS
} = React;

var Routes = require('./Navigation/Routes');
var NavigationBarRouteMapper = require('./Navigation/NavigationBarRouteMapper');
var NavigationView = require('./Navigation/NavigationView');

var Icon = require('react-native-vector-icons/Ionicons');

var colors = require('./assets/styles/colors');
var styles = require('./Navigation/NavigationBar.styles');

var App = React.createClass({
  getInitialState: function() {
    return {
      tabIndex: 0,
    };
  },

  render: function() {
    return (
      <TabBarIOS
        barTintColor={colors.logo.grey}
        tintColor={colors.logo.white}
        translucent={false}>
        <Icon.TabBarItem
          iconName="calendar"
          title="Schedule"
          selected={this.state.tabIndex === 0}
          onPress={() => {
            this.setState({ tabIndex: 0 });
          }}>
          <Scene scene={Routes.main.schedule} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName="mic-c"
          title="Speakers"
          selected={this.state.tabIndex === 1}
          onPress={() => {
            this.setState({ tabIndex: 1 });
          }}>
          <Scene scene={Routes.main.speakers} />
        </Icon.TabBarItem>
      </TabBarIOS>

    );
  },

});

var Scene = React.createClass({
  renderScene: function(route, navigator) {
    return (
      <route.component route={route} navigator={navigator} />
    );
  },

  render: function() {
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
  }

});

module.exports = App;

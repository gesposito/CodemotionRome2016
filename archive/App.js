var React = require('react-native');
var {
  Platform,
  Navigator,
  Text,
  View,
  TabBarIOS,
  DrawerLayoutAndroid,
  StyleSheet,
  TouchableHighlight
} = React;

var Routes = require('./Navigation/Routes');
var RouteMapper = require('./Navigation/RouteMapper');
var NavigationBarRouteMapper = require('./Navigation/NavigationBarRouteMapper');
var NavigationView = require('./Navigation/NavigationView');
var styles = require('./Navigation/NavigationBar.styles');

var isIOS = Platform.OS === 'ios';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

var App = React.createClass({
  getInitialState: function() {
    return {
      tabIndex: 0,
    };
  },

  renderScene: function(route, navigator) {
    return (
      <JumpingNavSample route={route} navigator={navigator}/>
    );
  },

  renderNavigation: function(initialRoute) {
    return (
      <Navigator
        initialRoute={initialRoute || Routes.home}
        initialRouteStack={[
          Routes.home,
          Routes.next
        ]}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBarContainer}
          />
        }
        configureScene={() => ({
            ...Navigator.SceneConfigs.HorizontalSwipeJump
          })
        }
        ref={(navigator) => {
          this._navigator = navigator;
        }}
        barTintColor="#424244"
      />
    );
  },

/*
  componentDidMount: function() {
    var navigator = this._navigator;

    var callback = (event) => {
      console.log(
        `NavigationBarSample : event ${event.type}`,
        {
          index: event.data.route.index,
          route: JSON.stringify(event.data.route),
          target: event.target,
          type: event.type,

        }
      );
      console.log(this._listeners)
      //this.setState({ tabIndex: event.data.route.index });
      //this._navigator.jumpTo( event.data.route );

    };

    // Observe focus change events from this component.
    this._listeners = [
      //navigator.navigationContext.addListener('willfocus', callback),
      navigator.navigationContext.addListener('didfocus', callback),
    ];
  },

  componentWillUnmount: function() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  },
*/

  render: function() {
    if (isIOS) {
      return this.renderIOS();
    }
    return this.renderAndroid();

  },

  renderIOS: function() {
    return this.renderNavigation()
  },

  renderAndroid: function() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() =>
          <NavigationView />
        }
        ref={(drawer) => {
          this.drawer = drawer;
        }}>
        {this.renderNavigation( Routes.home )}
      </DrawerLayoutAndroid>
    );
  },

});

module.exports = App;

var NavButton =  React.createClass( {
  render: function () {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}>
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
});

var ROUTE_STACK = [
  Routes.home,
  Routes.next,
];
var INIT_ROUTE_INDEX = 0;

var JumpingNavBar = React.createClass({
  getInitialState: function() {
    return {
      tabIndex: this.props.initTabIndex,
    }
  },
  handleWillFocus: function(route) {
    var tabIndex = ROUTE_STACK.indexOf(route);
    this.setState({ tabIndex });
  },
  render: function() {
    return (
      <View>
        <TabBarIOS>
          <TabBarIOS.Item
            icon={{uri: base64Icon, scale: 3}}
            selected={this.state.tabIndex === 0}
            onPress={() => {
              this.props.onTabIndex(0);
              this.setState({ tabIndex: 0, });
            }}>
            <View />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{uri: base64Icon, scale: 3}}
            selected={this.state.tabIndex === 1}
            onPress={() => {
              this.props.onTabIndex(1);
              this.setState({ tabIndex: 1, });
            }}>
            <View />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{uri: base64Icon, scale: 3}}
            selected={this.state.tabIndex === 2}
            onPress={() => {
              this.props.onTabIndex(2);
              this.setState({ tabIndex: 2, });
            }}>
            <View />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
})

var JumpingNavSample = React.createClass({
  render: function() {
    return (
      <Navigator
        ref={(navigator) => {
          this._navigator = navigator;
        }}
        initialRoute={ROUTE_STACK[INIT_ROUTE_INDEX]}
        initialRouteStack={ROUTE_STACK}
        renderScene={this.renderScene}
        configureScene={() => ({
          ...Navigator.SceneConfigs.HorizontalSwipeJump,
        })}
        navigationBar={
          <JumpingNavBar
            ref={(navBar) => { this.navBar = navBar; }}
            initTabIndex={INIT_ROUTE_INDEX}
            routeStack={ROUTE_STACK}
            onTabIndex={(index) => {
              this._navigator.jumpTo(ROUTE_STACK[index]);
            }}
          />
        }
      />
    );
  },

  renderScene: function(route, navigator) {
    return (
      <View>
        <Text style={styles.messageText}></Text>
          <NavButton
            onPress={() => {
              navigator.jumpBack();
            }}
            text="jumpBack"
          />
          <NavButton
            onPress={() => {
              navigator.jumpForward();
            }}
            text="jumpForward"
          />

      </View>
    );
  },
});

var styles = StyleSheet.create({
  messageText: {
    padding: 15,
    marginTop: 50,
  },

});

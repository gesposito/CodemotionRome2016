var React = require('react-native');
var {
  Navigator,
  Text,
  View,
  TabBarIOS,
  StyleSheet,
  PixelRatio
} = React;

var Routes = require('./Navigation/Routes');
var RouteMapper = require('./Navigation/RouteMapper');
var NavigationBarRouteMapper = require('./Navigation/NavigationBarRouteMapper');
var NavigationView = require('./Navigation/NavigationView');
var styles = require('./Navigation/NavigationBar.styles');

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

var ROUTE_STACK = [
  Routes.home,
  Routes.next
];
var INITIAL_ROUTE_INDEX = 0;

var App = React.createClass({
  renderScene: function(route, navigator) {
    return (
      <RouteMapper route={route} navigator={navigator}/>
    );
  },

  render: function() {
    return this.renderMainNavigator();
  },

  renderMainNavigator: function() {
    return (
      <Navigator
        style={styles.appContainer}
        ref={(navigator) => {
          this._navigator = navigator;
        }}
        initialRoute={ROUTE_STACK[INITIAL_ROUTE_INDEX]}
        initialRouteStack={ROUTE_STACK}
        renderScene={this.renderScene}
        configureScene={() => ({
            ...Navigator.SceneConfigs.HorizontalSwipeJump
          })
        }
        barTintColor="#424244"
        navigationBar={
          <TabNavigationBar
            onTabIndex={(index) => {
              this._navigator.jumpTo(ROUTE_STACK[index]);
            }}
            style={styles.navBarContainer}
          />
        }
      />
    );
  },

});

var TabNavigationBar = React.createClass({
  getInitialState: function() {
      return {
        tabIndex: 0
      }
  },

  handleWillFocus(route) {
    var tabIndex = ROUTE_STACK.indexOf(route);
    this.setState({ tabIndex, });
  },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          icon={{uri: base64Icon, scale: 3}}
          title="Home"
          selected={this.state.tabIndex === 0}
          onPress={() => {
            this.props.onTabIndex(0);
            //this.setState({ tabIndex: 0, });
          }}>
          <View />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: base64Icon, scale: 3}}
          title="NExt"
          selected={this.state.tabIndex === 1}
          onPress={() => {
            this.props.onTabIndex(1);
            //this.setState({ tabIndex: 1, });
          }}>
          <View />
        </TabBarIOS.Item>
      </TabBarIOS>

    );
  }

});

var styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  appContainer: {
    overflow: 'hidden',
    backgroundColor: '#dddddd',
    flex: 1,
  },
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
  tabs: {
    height: 50,
  }
});

module.exports = App;

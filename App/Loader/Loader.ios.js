var React = require('react-native');
var {
  View,
  Text,
  ActivityIndicatorIOS
} = React;

var styles = require('./Loader.styles');

var Loader = React.createClass({
  render: function() {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicatorIOS
          animating={true}
          size="large"
          style={styles.loaderSpinner}
        />
      </View>
    );
  }

});

module.exports = Loader;

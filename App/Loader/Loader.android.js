var React = require('react-native');
var {
  View,
  Text
} = React;

var ProgressBar = require('ProgressBarAndroid');

var styles = require('./Loader.styles');

var Loader = React.createClass({
  render: function() {
    return (
      <View style={styles.loaderContainer}>
        <ProgressBar
          style={styles.loaderSpinner}
          styleAttr="Large"
        />
      </View>
    );
  }

});

module.exports = Loader;

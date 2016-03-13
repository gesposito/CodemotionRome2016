import React, {
  View,
} from 'react-native';

const ProgressBar = require('ProgressBarAndroid');

const styles = require('./Loader.styles');

const Loader = React.createClass({
  render() {
    return (
      <View style={styles.loaderContainer}>
        <ProgressBar
          style={styles.loaderSpinner}
          styleAttr="Large"
        />
      </View>
    );
  },

});

module.exports = Loader;

import React, {
  View,
  ActivityIndicatorIOS,
} from 'react-native';

import styles from './Loader.styles';

const Loader = React.createClass({
  render() {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicatorIOS
          animating
          size="large"
          style={styles.loaderSpinner}
        />
      </View>
    );
  },

});

module.exports = Loader;

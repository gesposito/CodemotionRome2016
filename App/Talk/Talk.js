import React, {
  View,
  Text,
  TouchableHighlight,
  Platform,
  WebView
} from 'react-native';

import styles from './Talk.styles';
const isAndroid = Platform.OS === 'android';

const Talk = React.createClass({
  render() {
    return (
      <View style={styles.talkContainer}>
        <WebView
          style={styles.webView}
          injectedJavaScript={injectedJavaScript}
          automaticallyAdjustContentInsets={false}
          source={{ uri: this.props.navigator.state.link }}
          startInLoadingState
        />
      </View>
    );
  },

});

const injectedJavaScript = `
  document.getElementsByClassName("detail-talk")[0].style.maxWidth = "none";
  var link = document.createElement( "link" );
  link.href = "http://rome2016.codemotionworld.com/wp-content/themes/event/css/main.php";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";
  document.getElementsByTagName( "head" )[0].appendChild( link );
`;

module.exports = Talk;

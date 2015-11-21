var React = require('react-native');
var {
  View,
  Text,
  TouchableHighlight,
  Platform,
  WebView
} = React;

var styles = require('./Talk.styles');
var isAndroid = Platform.OS === 'android';

var Talk = React.createClass({
  render: function() {
    if (!isAndroid) {
      return (
        <View style={styles.talkContainer}>
          <WebView
            style={styles.webView}
            injectedJavaScript={injectedJavaScript}
            automaticallyAdjustContentInsets={false}
            url={this.props.navigator.state.link}
            startInLoadingState={true}
          />
        </View>
      );
    }

    var WebViewAndroid = require('react-native-webview-android');
    return (
      <View style={styles.talkContainer}>
        <WebViewAndroid
          style={styles.webView}
          injectedJavaScript={injectedJavaScript}
          url={this.props.navigator.state.link}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </View>
    );

  }

});

var injectedJavaScript = `
document.getElementsByClassName("detail-talk")[0].style.maxWidth = "none";
var link = document.createElement( "link" );
link.href = "http://milan2015.codemotionworld.com/wp-content/themes/event/css/main.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName( "head" )[0].appendChild( link );
`;

module.exports = Talk;

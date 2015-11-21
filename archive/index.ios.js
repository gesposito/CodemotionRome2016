'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet
} = React;

var CodemotionMilan2015 = React.createClass({
  render: function() {
    console.log("start")
    return (
      <View style={styles.container}>
        <Text style={styles.text}>text1</Text>
        <Text style={styles.text}>text2</Text>
        <Text style={styles.text}>text3</Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('CodemotionMilan2015', () => CodemotionMilan2015);

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#DDD',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    margin: 10,
    width: 130,
    textAlign: 'center'
  },
  last: {

  },
});

/*
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/

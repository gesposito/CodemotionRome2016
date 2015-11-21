var React = require('react-native');
var {
  View,
  Text,
  TouchableHighlight
} = React;

var styles = require('./Filter.styles');

var Filter = React.createClass({
  render: function() {
    var filters = FILTERS;
    /*
      TODO Filters
    */
    return (
      <View style={styles.filterContainer}>
        <View>
            {(filters).map((value, index) => {
              return (
                <View key={index}>
                  <Text style={styles.filterItem}>
                    {value}
                  </Text>
                </View>
              );
            })}
            <TouchableHighlight
              onPress={this.props.onSave}
              underlayColor="#a9d9d4">
                <Text >Close</Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  },

});

var FILTERS = [
  'Languages',
  'Mobile',
  'Game Dev',
  'Cloud',
  'Security',
  'Methods',
  'Big Data',
  'User Experience',
  'Motivational',
  'Innovation',
  'Devops',
  'Makers / IoT',
  'Functional Programming',
  'Reactive Programming',
  'Architecture',
  'Server-side',
  'Front-end',
  'Startup',
]

module.exports = Filter;

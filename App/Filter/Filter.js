import React, {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import styles from './Filter.styles';

const Filter = React.createClass({
  render() {
    /*
      TODO Filters
    */
    return (
      <View style={styles.filterContainer}>
        <View>
          {(FILTERS).map((value, index) => {
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
            underlayColor="#a9d9d4"
          >
            <Text >Close</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },

});

const FILTERS = [
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
];

module.exports = Filter;

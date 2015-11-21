var React = require('react-native');
var {
  ScrollView,
  ListView,
  View,
  Text
} = React;

var SpeakerRow = require('./SpeakerRow');
var Loader = require('../Loader/Loader');

var styles = require('./Speakers.styles');

var Speakers = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      speakers: []
    }
  },

  componentDidMount: function() {
      this.fetchData();
  },

  render: function() {
    if (this.state.loading) {
      return (
        <Loader />
      );
    }

    return (
      <View style={styles.speakerContainer}>
        <ScrollView>
          {(this.state.speakers).map((speaker, index) => {
            return <SpeakerRow key={index} {...speaker} />
          })}
        </ScrollView>
      </View>
    );
  },

  fetchData: function () {
    var API_URL = 'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/speakers.json';
    fetch(API_URL).then(
      (response) => response.json()
    ).then(
      (responseData) => {
        this.setState({
          speakers : responseData
        });
        this.setState({ loading: false });
      }
    );

  },
});

module.exports = Speakers;

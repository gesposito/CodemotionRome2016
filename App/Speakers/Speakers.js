import React, {
  ScrollView,
  View,
} from 'react-native';

import SpeakerRow from './SpeakerRow';
import Loader from '../Loader/Loader';

import styles from './Speakers.styles';

const Speakers = React.createClass({
  getInitialState() {
    return {
      loading: true,
      speakers: [],
    };
  },

  componentDidMount() {
    this.fetchData();
  },

  fetchData() {
    const API_URL = 'https://raw.githubusercontent.com/gesposito/codemotion_rome_2016_data/master/speakers.json';
    fetch(API_URL).then(
      (response) => response.json()
    ).then(
      (responseData) => {
        this.setState({
          speakers: responseData,
        });
        this.setState({ loading: false });
      }
    );
  },

  render() {
    if (this.state.loading) {
      return (
        <Loader />
      );
    }

    return (
      <View style={styles.speakerContainer}>
        <ScrollView>
          {(this.state.speakers).map((speaker, index) => <SpeakerRow key={index} {...speaker} />)}
        </ScrollView>
      </View>
    );
  },
});

module.exports = Speakers;

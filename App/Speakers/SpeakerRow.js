import React, {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './Speakers.styles';

const SpeakerRow = React.createClass({
  render() {
    return (
      <View style={styles.speakerRowContainer}>
        <View style={styles.speakerRowTop}>
          <Image
            source={{ uri: this.props.liquid_image }}
            style={styles.speakerRowImage}
          />
        </View>
        <View style={styles.speakerRowBottom}>
          <Text style={styles.speakerRowName}>
            {this.props.titlepost_value}
          </Text>
        </View>

      </View>
    );
  },
});

module.exports = SpeakerRow;

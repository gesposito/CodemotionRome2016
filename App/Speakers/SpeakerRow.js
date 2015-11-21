var React = require('react-native');
var {
  View,
  Text,
  Image
} = React;

var styles = require('./Speakers.styles');

var SpeakerRow = React.createClass({
  render: function() {
    return (
      <View style={styles.speakerRowContainer}>
        <View style={styles.speakerRowTop}>
          <Image
            source={{uri: this.props.liquid_image}}
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
  }
});

module.exports = SpeakerRow;

import React, {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import styles from './Schedule.styles';
import colors from '../assets/styles/colors';

import Icon from 'react-native-vector-icons/Ionicons';

const ScheduleRow = React.createClass({
  renderTalk() {
    return (
      <TouchableOpacity
        onPress={() => {
          const Routes = require('../Navigation/Routes');
          this.props.navigator.setState({link: this.props.rowData.link[0]});
          this.props.navigator.push(Routes.side.talk);
        }}
      >
        <View style={styles.scheduleRowContent}>
          <View style={styles.scheduleRowLeft}>
            <Image
              source={require('../assets/img/CDM_2013_logo_mini_web.png')}
              style={styles.scheduleRowImage}
            />
          </View>
          <View style={styles.scheduleRowCenter}>
            <Text style={{ color: colors.newsletter.green }}>
              {this.props.rowData.title}
            </Text>
            <Text style={{ color: colors.website.orange }}>
              {this.props.rowData.category}
            </Text>
            <Text style={{ color: colors.website.blue }}>
              {this.props.rowData.speaker}
            </Text>

          </View>
          <View style={styles.scheduleRowRight}>
            <Icon name="ios-arrow-forward" size={30} />
          </View>
        </View>
      </TouchableOpacity>
    );
  },

  renderInfo() {
    return (
      <View style={styles.scheduleRowContent}>
        <View style={styles.scheduleRowInfo}>
          <Text style={{ color: colors.newsletter.blue }}>
            {this.props.rowData.data}
          </Text>

        </View>
      </View>
    );
  },

  render() {
    return (
      <View style={styles.scheduleRowContainer}>
        {this.props.rowData.title ? this.renderTalk() : this.renderInfo()}
      </View>
    );
  },

});

module.exports = ScheduleRow;

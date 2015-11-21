var React = require('react-native');
var {
  View,
  TouchableOpacity,
  Image,
  Text
} = React;

var styles = require('./Schedule.styles');
var colors = require('../assets/styles/colors');

var Icon = require('react-native-vector-icons/Ionicons');

var ScheduleRow = React.createClass({
  render: function() {
    return (
      <View style={styles.scheduleRowContainer}>
        {this.props.rowData.title ? this.renderTalk() : this.renderInfo()}
      </View>
    );
  },

  renderTalk: function() {
    return (
      <TouchableOpacity onPress={
          () => {
            var Routes = require('../Navigation/Routes');
            this.props.navigator.setState({link: this.props.rowData.link[0]});
            this.props.navigator.push(Routes.side.talk);
          }
        }>
        <View style={styles.scheduleRowContent}>
          <View style={styles.scheduleRowLeft}>
            <Image
              source={{uri: 'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/img/CDM_2013_logo_mini_web_80.png'}}
              style={styles.scheduleRowImage}
            />
          </View>
          <View style={styles.scheduleRowCenter}>
            <Text style={{color: colors.newsletter.green}}>
              {this.props.rowData.title}
            </Text>
            <Text style={{color: colors.website.orange}}>
              {this.props.rowData.category}
            </Text>
            <Text style={{color: colors.website.blue}}>
              {this.props.rowData.speaker}
            </Text>

          </View>
          <View style={styles.scheduleRowRight}>
            <Icon name="ios-arrow-forward" size={30} />
          </View>
        </View>
      </TouchableOpacity>
    );
    /*
    source={require('../assets/img/CDM_2013_logo_mini_web.png')}
    */
  },

  renderInfo: function() {
    return (
      <View style={styles.scheduleRowContent}>
        <View style={styles.scheduleRowInfo}>
          <Text style={{color: colors.newsletter.blue}}>
            {this.props.rowData.data}
          </Text>

        </View>
      </View>
    );
  }

});

module.exports = ScheduleRow;

var React = require('react-native');
var {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ListView,
  Platform
} = React;

var Routes = require('../Navigation/Routes');
var Filter = require('../Filter/Filter');
var ScheduleRow = require('./ScheduleRow');
var Loader = require('../Loader/Loader');

var styles = require('./Schedule.styles');

var API_URL = [
  'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/conference_day_1.json',
  'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/conference_day_2.json'
];

var Schedule = React.createClass({
  getInitialState: function() {
    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    }

    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID];
    }

    return {
      loading: true,
      activeIndex: 0,
      dataSource : new ListView.DataSource({
        getSectionData          : getSectionData,
        getRowData              : getRowData,
        rowHasChanged           : (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged : (s1, s2) => s1 !== s2
      })
    }
  },

  componentDidMount: function() {
      this.fetchData();
  },

  render: function() {
    var navigator = this.props.navigator;

    if (this.state.loading) {
      return (
        <Loader />
      );
    }

    return (
      <ScrollView style={styles.scheduleContainer}>
        <View style={styles.scheduleControls}>
          <TouchableOpacity
            style={[styles.scheduleControl]}
            onPress={() => {
              this.setState({activeIndex: 0});
              this.fetchData();
            }}>
            <Text style={[styles.scheduleControlText, this.state.activeIndex === 0 && styles.scheduleControlTextActive]}>
              November 20
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.scheduleControl]}
            onPress={() => {
              this.setState({activeIndex: 1});
              this.fetchData();
            }}>
            <Text style={[styles.scheduleControlText, this.state.activeIndex === 1 && styles.scheduleControlTextActive]}>
              November 21
            </Text>
          </TouchableOpacity>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderSectionHeader={this.renderSectionHeader}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
        />
      </ScrollView>

    );

  },

  renderRow: function(rowData, sectionID, rowID, highlightRow) {
    return (
      <ScheduleRow
        rowData={rowData}
        route={this.props.route}
        navigator={this.props.navigator}
      />
    );
  },

  renderSectionHeader: function(sectionData, sectionID) {
    return (
      <View style={styles.scheduleListHeader}>
          <Text style={styles.scheduleListHeaderText}>{sectionData}</Text>
      </View>
    );
  },

  renderFooter: function() {
    // Mostly a workaround
    return (
      <View style={styles.scheduleListFooter}>
      </View>
    );
  },

  fetchData: function () {
    this.setState({ loading: true });

    fetch(API_URL[this.state.activeIndex]).then(
      (response) => response.json()
    ).then(
      (responseData) => {
        var {
          dataBlob,
          sectionIDs,
          rowIDs
        } = this.getDataBlob(responseData);

        this.setState({
          dataSource : this.state.dataSource.cloneWithRowsAndSections(
            dataBlob,
            sectionIDs,
            rowIDs
          )
        });
        this.setState({ loading: false });
      }
    );

  },

  getDataBlob: function(responseData) {
    var sectionIDs = [];
    var rowIDs = [];
    var dataBlob = {};

    for (var i in responseData) {
      var row = responseData[i];
      sectionIDs.push(i);
      dataBlob[i] = row.time;

      rowIDs[i] = [];
      for (var j = 0; j < 10; j++) {
        var col = row[`room_${j}`];
        var prevCol = row[`room_${j-1}`];
        if (col && (col !== prevCol)) {
          // Checks if it's duplicated
            var row_id = i + '_' + j;
            rowIDs[i].push(row_id);

            var link_text = row[`room_${j}_link/_text`];
            if (!(link_text instanceof Array)) {
              link_text = [null, null]
            }

            dataBlob[row_id] = {
              key: row_id,
              data: row[`room_${j}`],
              link: row[`room_${j}_link`],
              title: link_text[0],
              category: link_text[1],
              speaker: row[`room_${j}`].split(`${link_text[0]} ${link_text[1]} `)
            }
        }

      }
    }

    return {
      dataBlob: dataBlob,
      sectionIDs: sectionIDs,
      rowIDs: rowIDs
    }
  },

});

module.exports = Schedule;

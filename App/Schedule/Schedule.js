import React, {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ListView,
} from 'react-native';

import ScheduleRow from './ScheduleRow';
import Loader from '../Loader/Loader';

import styles from './Schedule.styles';

const API_URL = [
  'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/conference_day_1.json',
  'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/conference_day_2.json',
];

const Schedule = React.createClass({
  getInitialState() {
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];

    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    return {
      loading: true,
      activeIndex: 0,
      dataSource: new ListView.DataSource({
        getSectionData,
        getRowData,
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      }),
    };
  },

  componentDidMount() {
    this.fetchData();
  },

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.scheduleListHeader}>
          <Text style={styles.scheduleListHeaderText}>{sectionData}</Text>
      </View>
    );
  },

  renderFooter() {
    // Mostly a workaround
    return (
      <View style={styles.scheduleListFooter} />
    );
  },

  render() {
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
            }}
          >
            <Text style={[styles.scheduleControlText, this.state.activeIndex === 0 && styles.scheduleControlTextActive]}>
              November 20
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.scheduleControl]}
            onPress={() => {
              this.setState({activeIndex: 1});
              this.fetchData();
            }}
          >
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

  getDataBlob(responseData) {
    const sectionIDs = [];
    const rowIDs = [];
    const dataBlob = {};

    for (let i in responseData) {
      const row = responseData[i];
      sectionIDs.push(i);
      dataBlob[i] = row.time;

      rowIDs[i] = [];
      for (let j = 0; j < 10; j++) {
        const col = row[`room_${j}`];
        const prevCol = row[`room_${j - 1}`];
        if (col && (col !== prevCol)) {
          // Checks if it's duplicated
          const rowId = `${i}_${j}`;
          rowIDs[i].push(rowId);

          let linkText = row[`room_${j}_link/_text`];
          if (!(linkText instanceof Array)) {
            linkText = [null, null];
          }

          dataBlob[rowId] = {
            key: rowId,
            data: row[`room_${j}`],
            link: row[`room_${j}_link`],
            title: linkText[0],
            category: linkText[1],
            speaker: row[`room_${j}`].split(`${linkText[0]} ${linkText[1]} `),
          };
        }
      }
    }

    return {
      dataBlob,
      sectionIDs,
      rowIDs,
    };
  },

  fetchData() {
    this.setState({ loading: true });

    fetch(API_URL[this.state.activeIndex]).then(
      (response) => response.json()
    ).then(
      (responseData) => {
        const {
          dataBlob,
          sectionIDs,
          rowIDs,
        } = this.getDataBlob(responseData);

        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(
            dataBlob,
            sectionIDs,
            rowIDs
          ),
        });
        this.setState({ loading: false });
      }
    );
  },

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <ScheduleRow
        rowData={rowData}
        route={this.props.route}
        navigator={this.props.navigator}
      />
    );
  },

});

module.exports = Schedule;

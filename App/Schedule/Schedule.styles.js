var React = require('react-native');
var {
  StyleSheet,
  Platform
} = React;

var colors = require('../assets/styles/colors');
var isAndroid = Platform.OS === 'android';

module.exports = StyleSheet.create({
  /* Container */
  scheduleContainer: {
    paddingTop: isAndroid ? 56 : 64,
    backgroundColor: colors.logo.white
  },

  /* Controls */
  scheduleControls: {
    flexDirection: 'row',
    backgroundColor: colors.logo.grey
  },

  scheduleControl: {
    flex: 1,
    alignItems: 'center',
    padding: 15
  },

  scheduleControlText: {
    color: colors.logo.white,
    fontWeight: '400',
  },
  scheduleControlTextActive: {
    color: colors.newsletter.green,
    fontWeight: '600',
  },

  /* List */
  scheduleListHeader: {
    backgroundColor: colors.newsletter.green,
    padding: 5,
  },
  scheduleListHeaderText: {
    color: colors.logo.white,
    fontWeight: '600'
  },

  /* Row */
  scheduleRowContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.website.grey,
  },
  scheduleRowContent: {
    padding: 20,
    flexDirection: 'row',

  },

  scheduleRowLeft: {
    flex: 1,
    alignItems: 'center',
  },
  scheduleRowImage: {
    borderRadius: 30,
    borderColor: colors.website.orange,
    borderWidth: 2,
    width: 60,
    height: 60
  },

  scheduleRowCenter: {
    flex: 3,
    paddingLeft: 15
  },
  scheduleRowInfo: {
    flex: 3,
  },

  scheduleRowRight: {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  /* Footer */
  scheduleListFooter: {
    height: 48

  },

});

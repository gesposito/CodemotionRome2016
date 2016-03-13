import {
  StyleSheet,
} from 'react-native';

import colors from '../assets/styles/colors';

module.exports = StyleSheet.create({
  navViewContainer: {
    backgroundColor: colors.logo.grey,
    flex: 1,
  },
  navViewItemContainer: {
    borderBottomColor: colors.logo.grey,
    padding: 15,
    flexDirection: 'row',
  },

  navViewIcon: {
    color: colors.website.grey,
    backgroundColor: colors.logo.grey,
    flex: 1,
  },
  navViewIconMic: {
    marginLeft: 5,
  },
  navViewItem: {
    color: colors.website.grey,
    backgroundColor: colors.logo.grey,
    flex: 8,
  },

  navViewItemActive: {
    fontWeight: '600',
    color: colors.logo.white,
  },

});

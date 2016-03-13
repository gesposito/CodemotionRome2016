import Schedule from '../Schedule/Schedule';
import Speakers from '../Speakers/Speakers';
import Filter from '../Filter/Filter';
import Talk from '../Talk/Talk';

module.exports = {
  main: {
    schedule: {
      id: 'Schedule',
      title: 'Schedule',
      index: 0,
      component: Schedule,
    },
    speakers: {
      id: 'Speakers',
      title: 'Speakers',
      index: 1,
      component: Speakers,
    },
  },

  side: {
    filter: {
      id: 'Filter',
      title: 'Filter',
      index: 2,
      component: Filter,
    },
    talk: {
      id: 'Talk',
      title: 'Talk',
      index: 3,
      component: Talk,
    },
  },
};

import Constants  from '../constant';
import request from 'superagent';
import { browserHistory } from 'react-router';

const Actions = {
  fetchEntries: () => {
    return dispatch => {
      request.get('/api/entries')
        .end((err, res) => {
          dispatch({
            type: Constants.ENTRIES_FETCHED,
            payload: res.body.entries,
          })
        }
      );
    };
  },

  createEntry: (data) => {
    return dispatch => {
      request.post('/api/entries')
             .set('Accept', 'application/json')
             .send({entry: data})
             .end((err, res) => {
               browserHistory.push('/notes');
             });
    };
  },
};

export default Actions;

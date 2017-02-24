import Constants  from '../constant';
import request from 'superagent';

const Actions = {
  fetchEntries: () => {
    return dispatch => {
      request.get('api/entries')
        .end((err, res) => {
          dispatch({
            type: Constants.ENTRIES_FETCHED,
            payload: res.body.entries,
          })
        }
      );
    };
  },
};

export default Actions;

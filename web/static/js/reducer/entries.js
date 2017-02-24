import Constants from '../constant';

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.ENTRIES_FETCHING:
      return { ...state, entries: action.payload };

    default:
      return state;
  }
}

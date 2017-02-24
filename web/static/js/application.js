import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';

import App from './container/app';
import Home from './container/home';
import NoteForm from './container/note/form';
import NoteIndex from './container/note/index';

const store = configureStore(browserHistory);
window.ReduxStore = store;
const history = syncHistoryWithStore(browserHistory, store);


const target = document.getElementById('main-container');
const node =
<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="notes">
        <IndexRoute component={NoteIndex}/>
        <Route path="new" component={NoteForm}/>
      </Route>
    </Route>
  </Router>
</Provider>;

ReactDOM.render(node, target);

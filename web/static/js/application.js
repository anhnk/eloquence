import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import Root from './container/root';

const store = configureStore(browserHistory);
window.ReduxStore = store;
const history = syncHistoryWithStore(browserHistory, store);


const target = document.getElementById('main-container');
const node = <Root routerHistory={history} store={store} />;

ReactDOM.render(node, target);

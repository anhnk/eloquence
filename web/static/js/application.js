import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/app';
import Home from './container/home';
import NoteForm from './container/note/form';
import NoteIndex from './container/note/index';

const target = document.getElementById('main-container');
const node =
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="notes">
      <IndexRoute component={NoteIndex}/>
      <Route path="new" component={NoteForm}/>
    </Route>
  </Route>
</Router>;

ReactDOM.render(node, target);

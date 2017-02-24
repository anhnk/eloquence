import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/app';
import Home from '../container/home';
import NoteForm from '../container/note/form';
import NoteIndex from '../container/note/index';

export default function configRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="notes">
        <IndexRoute component={NoteIndex}/>
        <Route path="new" component={NoteForm}/>
      </Route>
    </Route>
  );
}

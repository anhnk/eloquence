import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory } from 'react-router';
import NoteForm from './container/note/form';

let App = React.createClass({
  render: function() {
    return (
      <div>
        <h1><IndexLink to="/">Home</IndexLink></h1>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});

var Home = React.createClass({
  render: function() {
      return (
        <div className="ui grid container">
          <div className="sixteen wide column"><button className="ui fluid button">Add a word</button></div>
          <div className="sixteen wide column"><button className="ui fluid button">Review vocabulary</button></div>

          <div className="sixteen wide column"><Link to="/notes/new"><button className="ui fluid button">Add a note</button></Link></div>
          <div className="sixteen wide column"><a href="/entries"><button className="ui fluid button">Review notes</button></a></div>
        </div>
      );
    }
});

const target = document.getElementById('main-container');
const node =
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="notes">
      <Route path="new" component={NoteForm}/>
    </Route>
  </Route>
</Router>;

ReactDOM.render(node, target);

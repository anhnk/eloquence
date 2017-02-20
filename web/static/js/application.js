import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory } from 'react-router';

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

          <div className="sixteen wide column"><Link to="/stuff"><button className="ui fluid button">Add a note</button></Link></div>
          <div className="sixteen wide column"><a href="/entries"><button className="ui fluid button">Review notes</button></a></div>
        </div>
      );
    }
});

var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <h2>STUFF</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});


const target = document.getElementById('main-container');
const node =
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="stuff" component={Stuff}/>
  </Route>
</Router>;

ReactDOM.render(node, target);

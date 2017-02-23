import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column"><button className="ui fluid button">Add a word</button></div>
        <div className="sixteen wide column"><button className="ui fluid button">Review vocabulary</button></div>

        <div className="sixteen wide column"><Link to="/notes/new"><button className="ui fluid button">Add a note</button></Link></div>
        <div className="sixteen wide column"><Link to="/notes"><button className="ui fluid button">Review notes</button></Link></div>
      </div>
    );
  }
});

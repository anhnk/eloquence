import React from 'react';
import { IndexLink } from 'react-router';

export default React.createClass({
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

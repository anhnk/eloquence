import React from 'react';

export default React.createClass({
  render: function() {
      return (
        <div className="ui grid container">
          <div className="sixteen wide column">
            <h2>New entry</h2>
            <form className='ui form'>
              <div className='field'>
                <label>Body</label>
                <textarea name='body' placeholder='Body'></textarea>
              </div>
              <div className='field'>
                <label>Source</label>
                <input type='text' name='source' placeholder='Source'/>
              </div>
              <button className='ui button' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      );
    }
});

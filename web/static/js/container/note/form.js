import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class NoteForm extends Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <h2>New entry</h2>
          <form className='ui form' onSubmit={::this._handleSubmit}>
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

  _handleSubmit(e) {
    e.preventDefault();
    browserHistory.push('/');
  }
}

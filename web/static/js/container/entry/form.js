import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../action/entry';

class NoteForm extends Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <h2>New entry</h2>
          <form className='ui form' onSubmit={::this._handleSubmit}>
            <div className='field'>
              <label>Body</label>
              <textarea ref='body' placeholder='Body'></textarea>
            </div>
            <div className='field'>
              <label>Source</label>
              <input type='text' ref='source' placeholder='Source'/>
            </div>
            <button className='ui button' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { body, source } = this.refs;
    const data = { body: body.value, source: source.value };
    this.props.dispatch(Actions.createEntry(data));
  }
}

const mapStateToProps = (state) => {
  return {};
}

const ConnectedNoteForm = connect(mapStateToProps)(NoteForm);

export default ConnectedNoteForm;

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import request from 'superagent';

export default class NoteIndex extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { entries: [] };
  }

  componentDidMount() {
    request.get('api/entries').end((err, res) => this.setState({ entries: res.body.entries }));
  }

  render() {
    return (
      <div className='ui grid container'>
        <h2 className='sixteen wide column'>Entries</h2>
        {this._renderEntries()}
      </div>
    );
  }

  _renderEntries() {
    const entries = this.state.entries;
    if (entries.length === 0) {
      return (<div className='ui active centered inline loader'></div>);
    } else {
      return entries.map(entry => this._renderEntry(entry));
    }
  }

  _renderEntry(entry) {
    return (
      <p key={entry.id} className='sixteen wide column'>
        <b>{entry.body}</b> - <i>{entry.source}</i>
      </p>
    );
  }
}

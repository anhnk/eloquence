import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../action/entry';

class NoteIndex extends Component {
  componentDidMount() {
    this.props.dispatch(Actions.fetchEntries());
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
    const { entries } = this.props;

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

const mapStateToProps = (state) => {
  return {
    entries: state.entries.items,
  };
}

const ConnectedNoteIndex = connect(mapStateToProps)(NoteIndex);

export default ConnectedNoteIndex;

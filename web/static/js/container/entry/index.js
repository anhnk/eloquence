import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Actions from '../../action/entry';
import styles from './index.scss';

class NoteIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 0,
    }
  }

  componentDidMount() {
    this.props.dispatch(Actions.fetchEntries());
  }

  render() {
    const { entries } = this.props;

    return (
      <div className='ui grid container'>
        <h2 className='sixteen wide column'>Entries</h2>
        <ReactPaginate pageCount={Math.ceil(entries.length / 5)}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={2}
                       previousLabel='<'
                       nextLabel='>'
                       containerClassName={styles.paginator}
                       activeClassName={styles.active}
                       disabledClassName={styles.disabled}
                       onPageChange={::this._handlePageClick} />
        {this._renderEntries()}
      </div>
    );
  }

  _handlePageClick(data) {
    this.setState({pageNumber: data.selected});
  }

  _renderEntries() {
    const { entries } = this.props;

    if (entries.length === 0) {
      return (<div className='ui active centered inline loader'></div>);
    } else {
      const displayedEntries = entries.slice(this.state.pageNumber * 5,(this.state.pageNumber + 1) * 5);
      return displayedEntries.map(entry => this._renderEntry(entry));
    }
  }

  _renderEntry(entry) {
    return (
      <div key={entry.id} className='sixteen wide column'>
        {entry.body} - <i>{entry.source}</i>
      </div>
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

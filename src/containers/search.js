import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getImageNameByCode} from '../actions';

class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
        searchTerm: ''
      };
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input
          autoFocus
          value={this.state.searchTerm}
          onChange={this.onInputChange.bind(this)}/>
      </form>
    )
  }

  onInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getImageNameByCode(this.state.searchTerm)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getImageNameByCode
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);

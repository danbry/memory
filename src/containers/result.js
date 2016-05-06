import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getImageNameByCode} from '../actions';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.images.image}</div>
    )
  }

}

function mapStateToProps({ images }) {
  return { images }
}

export default connect(mapStateToProps)(Result);

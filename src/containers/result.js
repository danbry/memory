import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImage } from '../actions';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps.images.item.image);
    if (nextProps.images.item.code !== this.props.images.item.code) {
      this.props.fetchImage(nextProps.images.item.image);
      return true;
    } else {
      console.log("equal");
      return false;
    }
  }

  renderImage() {
    if (this.props.images.imageUrl) {
      return (
        <div><img src={this.props.images.imageUrl} height={100}/></div>
      );
    } else {
      return (<div>no image</div>)
    }
  }

  render() {
    return (
      <div>
        <h5>{this.props.images.item.image}</h5>
        {this.renderImage()}
      </div>
    )
  }

}

function mapStateToProps({ images }) {
  return { images }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchImage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);

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
      return false;
    }
  }

  renderImage() {
    if (this.props.images.imageUrl) {
      return (
        <div><img src={this.props.images.imageUrl} height={200}/></div>
      );
    } else {
      return (<div>no image</div>)
    }
  }

  render() {
    return (
        <div className="panel panel-success">
            <div className="panel-heading">Result</div>
            <div className="panel-body">
                 <div className="row">
                    <div className="col-md-2 col-xs-4"><h4>Image name</h4></div>
                    <div className="col-md-10 col-xs-8"><h4>{this.props.images.item.image}</h4></div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-xs-4"><h4>Image</h4></div>
                    <div className="col-md-10 col-xs-8">{this.renderImage()}</div>
                </div>
            </div>
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

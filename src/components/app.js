import React, { Component } from 'react';
import Search from '../containers/search';
import Result from '../containers/result';

class App extends Component {
  render() {
    return (
        <div className="container">
            <p/>
            <div className="panel panel-primary">
                <div className="panel-heading">Input</div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-2 col-xs-4"><h4>Number</h4></div>
                        <div className="col-md-10 col-xs-8"><h4><Search /></h4></div>
                    </div>
                </div>
            </div>
            <Result />
        </div>
    );
  }
}

export default App;

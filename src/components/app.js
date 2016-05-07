import React, { Component } from 'react';
import Search from '../containers/search';
import Result from '../containers/result';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Search />
        </div>
        <div>
          <Result />
        </div>
      </div>
    );
  }
}

export default App;

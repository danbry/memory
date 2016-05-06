import React, { Component } from 'react';
import Search from './search';
import Result from './result';

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

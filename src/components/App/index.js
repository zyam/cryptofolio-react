// es-lint-disable
import React, { Component } from 'react';
// import ExchangesList from '../ExchangesList';
// import ExchangesAccount from '../ExchangesAccount';
import Tabs from '../Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>CryptoFolio</h3>
        </div>
        <div className="row">
          <Tabs/>
          {/* <ExchangesList /> */}
        </div>
        <div className="container" >
          <div className="row">
            <br/>
            <br/>
            <br/>
          </div>
          {/* <ExchangesAccount /> */}
        </div>
      </div>
    );
  }
}

export default App;
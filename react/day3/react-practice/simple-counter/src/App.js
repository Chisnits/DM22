import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      chores: ["laundry", "sweeping", "washing", "learn Redux"]
    }


  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <list title="Chores" items={this.state.chores} />

      {/*<AddToList />*/}

      </div>
    );
  }
}

export default App;

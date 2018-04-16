import 'bulma/css/bulma.css'

import React, { Component } from 'react';
import './App.css';

import ActivityEntries from './components/ActivityEntries'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>PA, the Physical Activity Tracker</h1>
        </div>
        <ActivityEntries />
      </div>
    );
  }
}

export default App;

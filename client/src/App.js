import 'bulma/css/bulma.css'

import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

import ActivityEntries from './components/activities'
import Dashboard from './components/dashboard'
import Header from './components/layout/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <section class="section">
            <div className="container is-mobile">
              <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/history' component={ActivityEntries}/>
              </Switch>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

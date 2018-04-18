import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  withRouter
} from 'react-router-dom'

import 'bulma/css/bulma.css'

import './App.css';

import ActivityEntries from './components/activities'
import Dashboard from './components/dashboard'
import Header from './components/layout/Header'

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <main>
            <section className="section">
              <div className="container is-mobile">
                <Switch>
                  <Route exact path='/' component={Dashboard}/>
                  <Route path='/history' component={ActivityEntries}/>
                </Switch>
              </div>
            </section>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

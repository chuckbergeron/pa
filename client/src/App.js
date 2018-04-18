import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

// 3rd Party CSS
import 'bulma/css/bulma.css';
import 'izitoast/dist/css/iziToast.css'


import './App.css';

import ActivityEntries from '@/javascripts/components/activities';
import Dashboard from '@/javascripts/components/dashboard';
import Header from '@/javascripts/components/layout/Header';

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

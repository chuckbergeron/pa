import React, { Component } from 'react'
import { Link } from 'react-router-dom'

require('../../stylesheets/Header.css')

export default class extends Component {
  render () {
    return (
      <nav id="navbar" className="navbar is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h1>PA, the Physical Activity Tracker</h1>
            </a>

            <div id="navMenuDocumentation" className="navbar-menu">
              <div className="navbar-start">
                <Link to='/' className="navbar-item bd-navbar-item-documentation">
                  <span>Dashboard</span>
                </Link>

                <Link to='/history' className="navbar-item bd-navbar-item-documentation">
                  <span>History</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

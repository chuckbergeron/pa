import React, { Component } from 'react'
import { Link } from 'react-router-dom'

require('@/stylesheets/Header.css')

export default class extends Component {
  render () {
    return (
      <nav id="navbar" className="navbar is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              PA, the Physical Activity Tracker
            </a>

            <div className="navbar-menu">
              <div className="navbar-start">
                <Link to='/' id="navbar-link__dashboard" className="navbar-item bd-navbar-item-documentation">
                  <span>Dashboard</span>
                </Link>

                <Link to='/history' id="navbar-link__history" className="navbar-item bd-navbar-item-documentation">
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

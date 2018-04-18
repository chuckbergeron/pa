import React, { Component } from 'react'

import {
  withRouter
} from 'react-router-dom'

export default class extends Component {

  render() {
    return (
      <div>
        <h1 className="title">
          Dashboard
        </h1>
        <h2 className="subtitle">
          Add activities you've completed here:
        </h2>
      </div>
    )
  }

}


// export default withRouter(Dashboard);

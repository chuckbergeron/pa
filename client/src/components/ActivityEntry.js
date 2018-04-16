import React, { Component } from 'react'
import dateFormat from 'dateformat';

class ActivityEntry extends Component {

  handleClick = () => {
    this.props.onClick(this.props.activityEntry.id)
  }

  handleDelete = () => {
    console.log('here')
    this.props.onDelete(this.props.activityEntry.id)
  }

  render () {
    return (
      <div className="tile" key={this.props.activityEntry.id}>
        <span className="delete-icon" onClick={this.handleDelete}>
          x
        </span>
        <h4 onClick={this.handleClick}>
          {dateFormat(this.props.activityEntry.created_at, "dddd, mmmm dS, yyyy")}
        </h4>
        <h4 onClick={this.handleClick}>
           @ {dateFormat(this.props.activityEntry.created_at, "h:MM:ss TT")}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.activityEntry.body}
        </p>
      </div>
    )
  }

}

export default ActivityEntry


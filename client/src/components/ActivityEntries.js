import axios from 'axios'
import React, { Component } from 'react'
import ImmutableUpdate from 'immutability-helper'

import ActivityEntryForm from './ActivityEntryForm'
import ActivityEntry from './ActivityEntry'

class ActivityEntries extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activityEntries: [],
      editingActivityEntryId: null,
      notification: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/activity_entries.json')
      .then(response => {
        console.log(response)
        this.setState({ activityEntries: response.data })
      })
      .catch(error => console.log(error))
  }

  addNewActivityEntry = () => {
    axios.post(
      'http://localhost:3001/api/v1/activity_entries',
      {
        activity_entry: {
          activity_type_id: 4
        }
      }
    )
      .then(response => {
        console.log(response)
        const activityEntries = ImmutableUpdate(this.state.activityEntries, {
          $splice: [[0, 0, response.data]]
        })

        this.setState({
          activityEntries: activityEntries,
          editingActivityEntryId: response.data.id
        })
      })
      .catch(error => console.log(error))
  }

  updateActivityEntry = (activityEntry) => {
    const activityEntryIndex = this.state.activityEntries.findIndex(x => x.id === activityEntry.id)
    const activityEntries = ImmutableUpdate(this.state.activityEntries, {
      [activityEntryIndex]: { $set: activityEntry }
    })
    this.setState({
      activityEntries: activityEntries,
      notification: 'All changes saved'
    })
  }

  resetNotification = () => {
    this.setState({ notification: '' })
  }

  enableEditing = (id) => {
    this.setState({
      editingActivityEntryId: id
    }, () => {
      this.activity_type_id.focus()
    })
  }

  deleteActivityEntry = (id) => {
    axios.delete(`http://localhost:3001/api/v1/activity_entries/${id}`)
      .then(response => {
        const activityEntryIndex = this.state.activityEntries.findIndex(x => x.id === id)
        const activityEntries = ImmutableUpdate(this.state.activityEntries, { $splice: [[activityEntryIndex, 1]]})

        this.setState({ activityEntries: activityEntries })
        console.log("deleted!")

      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.addNewActivityEntry}>
          New Activity
        </button>

        <span className="notification">
          {this.state.notification}
        </span>

        {this.state.activityEntries.map((activityEntry) => {

          if(this.state.editingActivityEntryId === activityEntry.id) {
            return(<ActivityEntryForm activityEntry={activityEntry}
              key={activityEntry.id} updateActivityEntry={this.updateActivityEntry}
              resetNotification={this.resetNotification}
              activityTypeIdRef={input => this.activity_type_id = input} />)
          } else {
            return (<ActivityEntry activityEntry={activityEntry} key={activityEntry.id}
              onClick={this.enableEditing} onDelete={this.deleteActivityEntry} />)
          }

        })}
      </div>
    )
  }

}

export default ActivityEntries

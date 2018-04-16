import axios from 'axios'
import React, { Component } from 'react'
import ImmutableUpdate from 'immutability-helper'

import ActivityEntry from './ActivityEntry'

class ActivityEntries extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activityEntries: [],
      editingActivityEntryId: null
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
          editingIdeaId: response.data.id
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.addNewActivityEntry}>
          New Activity
        </button>

        {this.state.activityEntries.map((activity_entry) => {
          return (<ActivityEntry activity_entry={activity_entry} key={activity_entry.id} />)
        })}
      </div>
    )
  }

}

export default ActivityEntries

import React, { Component } from 'react'

import axios from 'axios'

import ActivityEntry from './ActivityEntry'

class ActivityEntries extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activity_entries: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/activity_entries.json')
      .then(response => {
        console.log(response)
        this.setState({ activity_entries: response.data })
      })
      .catch(error => console.log(error))
  }

  addNewIdea = () => {
    axios.post(
      'http://localhost:3001/api/v1/activity_entries',
      {
        activity_entry: {
          title: '',
          body: ''
        }
      }
    )
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.addNewActivityEntry}>
          New Activity
        </button>

        {this.state.activity_entries.map((activity_entry) => {
          return (<ActivityEntry activity_entry={activity_entry} key={activity_entry.id} />)
        })}
      </div>
    )
  }

}

export default ActivityEntries

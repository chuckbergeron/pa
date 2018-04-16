import axios from 'axios'
import React, { Component } from 'react'

class ActivityEntryForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activity_type_id: this.props.activityEntry.activity_type_id
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()

    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const activityEntry = {
      activity_type_id: this.state.activity_type_id
    }

    axios.put(
      `http://localhost:3001/api/v1/activity_entries/${this.props.activityEntry.id}`,
      {
        activity_entry: activityEntry
      })
      .then(response => {
        console.log(response)
        this.props.updateActivityEntry(response.data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur}>
          <input className='input' type="text" name="activity_type_id"
            placeholder='Type ID' value={this.state.activity_type_id}
            onChange={this.handleInput} ref={this.props.activityTypeIdRef} />
        </form>
      </div>
    );
  }

}

export default ActivityEntryForm

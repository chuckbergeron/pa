import React from 'react'
import dateFormat from 'dateformat';

const ActivityEntry = ({activity_entry}) =>
  <div className="tile" key={activity_entry.id}>
    <h4>
      {dateFormat(activity_entry.created_at, "dddd, mmmm dS, yyyy")}
    </h4>
    <h4>
      {dateFormat(activity_entry.created_at, "h:MM:ss TT")}
    </h4>
    <p>
      {activity_entry.body}
    </p>
  </div>

export default ActivityEntry

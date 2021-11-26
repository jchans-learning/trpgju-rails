import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Calendar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
        test
      </React.Fragment>
    );
  }
}

export default Calendar

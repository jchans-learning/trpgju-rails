import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: "dayGridMonth",
    }

    this.handleDateClick = this.handleDateClick.bind(this)
    this.switchView = this.switchView.bind(this)
    this.handleToMonth = this.handleToMonth.bind(this)
    this.handleTimeClick = this.handleTimeClick.bind(this)
  }

  calendarRef = React.createRef()

  switchView = (view, info) => {
    this.calendarRef.current
      .getApi()
      .changeView(view, info.date)

    this.setState(state => ({
      ...state,
      view: view,
    }))
  }

  handleDateClick = (info) => {
    switch (this.state.view) {
      case "dayGridMonth":
        this.switchView('timeGridDay', info)
        break

      case "timeGridDay":
        break

      default:
        return
    }
  }

  handleTimeClick = () => {

  }

  handleToMonth = () => {
    this.calendarRef.current
      .getApi()
      .changeView('dayGridMonth')

    this.setState(state => ({
      ...state,
      view: 'dayGridMonth',
    }))
  }

  render() {
    const { view } = this.state

    return (
      <React.Fragment>
        <FullCalendar
          headerToolbar={{
            start: 'title',
            center: 'monthButton',
            end: 'prev,next today',
          }}
          customButtons={{
            monthButton: {
              text: 'Month',
              click: this.handleToMonth,
            }
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={this.handleDateClick}
          ref={this.calendarRef}
          allDaySlot={false}
        />
      </React.Fragment>
    );
  }
}

export default Calendar

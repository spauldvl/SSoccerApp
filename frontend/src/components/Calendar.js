// components/Calendar.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import NewPractice from "./NewPractice";

export default class Calendar extends React.Component {
  state = { events: null };

  componentDidMount = async () => {
    this.handleGetData()
  };

  renderEventContent = (eventInfo) => {
    // Custom rendering of practice data
    return (
      <div>
        <div>{eventInfo.event.title}</div>
        <div>{eventInfo.event.extendedProps.trainingtype}</div>
        <div>{eventInfo.event.extendedProps.trainingobjective}</div>
        <div>{eventInfo.event.extendedProps.trainingduration}</div>
        <div>{eventInfo.event.extendedProps.trainingdate}</div>
        <div>{eventInfo.event.extendedProps.trainingtime}</div>
        <div>{eventInfo.event.extendedProps.shots}</div>
        <div>{eventInfo.event.extendedProps.crosses}</div>
        <div>{eventInfo.event.extendedProps.goals}</div>
        <div>{eventInfo.event.extendedProps.assists}</div>
        

      </div>
    );
  };

  handleGetData = async() => {
    axios
      .get("/practicedata")
      .then((response) => {
        // Map the data to include the title and start which are required for the Full Calender event prop
        const data = response.data.map((value) => {
          return {
            title: `Practice ${value.practiceid}`,
            start: value.trainingdate,
            ...value,
          };
        });

        // Update the state event property with the mapped data
        this.setState({ events: data });
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  }

  render = () => {
    const { events } = this.state;

    return (
     <>
      <NewPractice fetchData={this.handleGetData}/>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          events={events}
          eventContent={this.renderEventContent}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,dayGridWeek,timeGridDay",
          }}
          height={"90vh"}
        />
      </div>
      </> 
    );
  };
}

//export default Calendar;

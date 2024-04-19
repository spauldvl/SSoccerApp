// components/Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';



export default class Calendar extends React.Component {
  componentDidMount = async () => {
    axios.get('/practicedata')
  .then(response => {
    // Handle the response
    
  })
  .catch(error => {
    // Handle errors
    console.log(error)
  });
  }


    render = () => {
      return (

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={'dayGridMonth'}
            headerToolbar= {{
                start: "today prev,next",
                center: "title",
                end: "dayGridMonth,dayGridWeek,timeGridDay",
            }}
            height={"90vh"}
    
          />
        </div>
      );
    }
  }



//export default Calendar;
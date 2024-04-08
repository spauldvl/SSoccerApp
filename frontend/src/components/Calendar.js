import React from 'react';
import { Calendar } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function MyCalendar() {
  return (
    <Calendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2024-04-05' },
        { title: 'Event 2', date: '2024-04-07' }
      ]}
    />
  );
}

export default MyCalendar;

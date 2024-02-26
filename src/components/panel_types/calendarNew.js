import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//import 'moment/locale/ru';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from '../helpers/calendar_functions'; 

//const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents((events) => {
      setEvents(events);
    });
  }, []); // Вызываем getEvents один раз после монтирования компонента

  return (
    <div style={{ height: 500 }}>
      <Calendar
        //localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        style={{ margin: '50px' }}
      />
    </div>
  );
};

export default MyCalendar;
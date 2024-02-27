// import React, { useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// //import 'moment/locale/ru';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { getEvents } from '../helpers/calendar_functions'; 

// //const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     getEvents((events) => {
//       setEvents(events);
//     });
//   }, []); // Вызываем getEvents один раз после монтирования компонента

//   return (
//     <div style={{ height: 500 }}>
//       <Calendar
//         //localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         titleAccessor="title"
//         style={{ margin: '50px' }}
//       />
//     </div>
//   );
// };

// export default MyCalendar;
import React from "react";

export default function MyCalendar() {
  return (
      <iframe
        src="https://calendar.google.com/calendar/embed?src=pyxweare%40gmail.com&ctz=Asia%2FVladivostok"
        style={{ border: "0" }}
        width="1000"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
  );
}
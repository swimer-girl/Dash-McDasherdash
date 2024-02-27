// import axios from 'axios';

// const CALENDAR_ID = ';
// const API_KEY = '';
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`


// export function getEvents(callback) {
//   axios.get(url)
//     .then((response) => {
//       console.log("response", response);
//       const events = [];
//       response.data.items.map((event) => {
//         events.push({
//           start: event.start.date || event.start.dateTime,
//           end: event.end.date || event.end.dateTime,
//           title: event.summary,
//         })
//       })
//       callback(events)
//     });
// }
import axios from 'axios';

const CALENDAR_ID = '';
const API_KEY = '';
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  axios.get(url)
    .then((response) => {
      console.log("response", response);
      if (response.data && response.data.items && Array.isArray(response.data.items)) {
        const events = response.data.items.map((event) => ({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        }));
        callback(events);
      } else {
        console.error('Invalid response data format');
      }
    })
    .catch((error) => {
      console.error('Error fetching events:', error);
    });
}

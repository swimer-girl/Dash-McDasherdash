// import React, { Component } from 'react';

// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'

// import { getEvents } from '../helpers/calendar_functions';

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// require('react-big-calendar/lib/css/react-big-calendar.css');

// class Calendar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cal: ''
//     };

//   }

//   componentWillMount() {
//     getEvents();
//   }

//   render() {
//     return (
//       <div>
//         hi {this.state.cal}
//         <BigCalendar
//           events={[]}
//           startAccessor='startDate'
//           endAccessor='endDate'
//         />
//       </div>
//     );
//   }
// }

// export default Calendar;

import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { getEvents } from '../helpers/calendar_functions';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
require('react-big-calendar/lib/css/react-big-calendar.css');

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [] // Состояние для хранения событий
    };
  }

  componentDidMount() {
    getEvents(this.handleEvents); // Вызываем getEvents и передаем ему функцию handleEvents
  }

  // Функция обратного вызова, которая будет обновлять состояние событий
  handleEvents = (events) => {
    this.setState({ events });
  }

  render() {
    return (
      <div>
        <BigCalendar
          events={this.state.events} // Передаем события в календарь
          startAccessor='start'
          endAccessor='end'
          style={{ height: '500px' }} // Пример стилизации, можно изменить или удалить
        />
      </div>
    );
  }
}

export default Calendar;

import axios from 'axios';
//import _ from 'lodash';

export const GET_WEATHER = 'GET_WEATHER';
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const GET_UPSTAIRS_THERMOSTAT = 'GET_UPSTAIRS_THERMOSTAT';
export const GET_DOWNSTAIRS_THERMOSTAT = 'GET_DOWNSTAIRS_THERMOSTAT';
export const GET_LOCKS = 'GET_LOCKS';
export const GET_MESSAGE = 'GET_MESSAGE';
export const GET_LIGHTS = 'GET_LIGHTS';
export const GET_SCORES = 'GET_SCORES';
export const GET_SCHEDULE = 'GET_SCHEDULE';

export const getWeather = (c, o) => {
  return (dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${c}&lang=ru&APPID=${o}`)
    .then((response) => {
      dispatch({
        type: GET_CURRENT_WEATHER,
        payload: response.data
      });
    });
  });
};


export const getCurrentWeather = (c, o) => {
  return (dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${c}&lang=ru&APPID=${o}`)
    .then((response) => {
      dispatch({
        type: GET_WEATHER,
        payload: response.data
      });
    });
  });
};


export const getDownstairsThermostat = (h, p, c) => {
  return (dispatch => {
    axios.get(`${h}/api/states/climate.${c}`, {
      headers: {
        'x-ha-access': p
      }
    }).then((response) => {
      dispatch({
        type: GET_DOWNSTAIRS_THERMOSTAT,
        payload: response.data
      });
    });
  });
};


export const getUpstairsThermostat = (h, p, c) => {
  return (dispatch => {
    axios.get(`${h}/api/states/climate.${c}`, {
      headers: {
        'x-ha-access': p
      }
    })
    .then((response) => {
      dispatch({
        type: GET_UPSTAIRS_THERMOSTAT,
        payload: response.data
      });
    });
  });
};


export const getLocks = (h, p, c) => {
  return (dispatch => {
    axios.get(`${h}/api/states/lock.${c}`, {
      headers: {
        'x-ha-access': p
      }
    }).then((response) => {
      dispatch({
        type: GET_LOCKS,
        payload: response.data
      });
    });
  });
};

export const getMessage = (token, projectId) => {
  return (dispatch => {
    axios.get(`https://api.todoist.com/rest/v2/tasks?project_id=${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      // Обработка данных из ответа
      const messages = response.data;

      dispatch({
        type: GET_MESSAGE,
        payload: messages
      });
    }).catch(error => {
      // Обработка ошибок
      console.error('Error fetching tasks:', error);
    });
  });
};
// export const getMessage = (t, p) => {
//   return (dispatch => {
//     axios.get(`https://beta.todoist.com/API/v8/tasks?token=${t}`).then((response) => {
//       const messages = _.filter(response.data, {project_id: p});

//       dispatch({
//         type: GET_MESSAGE,
//         payload: messages
//       });
//     });
//   });
// };


export const getLights = (a) => {
  return {
    type: GET_LIGHTS,
    payload: a
  }
};


export const getScores = (y) => {
  return (dispatch => {
    axios.request(`https://cors-anywhere.herokuapp.com/data.nba.net/prod/v1/${y}/scoreboard.json`, {
      headers: {
        'Cache-Control' : 'no-cache'
      }
    }).then((response) => {
      dispatch({
        type: GET_SCORES,
        payload: response
      })
    })
  })
}

export const getSchedule = (t) => {
  return (dispatch => {
    axios.request(`https://cors-anywhere.herokuapp.com/data.nba.net/prod/v1/${t}/scoreboard.json`, {
      headers: {
        'Cache-Control' : 'no-cache'
      }
    }).then((response) => {
      dispatch({
        type: GET_SCHEDULE,
        payload: response
      })
    })
  })
}

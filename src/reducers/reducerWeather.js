import { GET_WEATHER } from '../actions/index';

const INITIAL_STATE = { weather: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_WEATHER:
      return { ...state, weather: action.payload}
    default:
      return state;
  }
};

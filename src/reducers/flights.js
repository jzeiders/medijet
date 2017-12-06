import { SET_FLIGHTS_DATA } from "../constants";

const initialState = {
  data: []
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default flightReducer;

import { SET_PROCEDURE, SET_FLIGHTS_DATA } from "../constants";
const initialState = {
  name: ""
};

const procedureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROCEDURE:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

export default procedureReducer;

import { SET_SELECTED_COUNTRY, SET_DATA_COUNTRIES } from "../constants";

const initialState = {
  selected: {
    name: ""
  },
  data: []
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_COUNTRY:
      return {
        ...state,
        selected: {
          name: action.name
        }
      };
    case SET_DATA_COUNTRIES:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default countryReducer;

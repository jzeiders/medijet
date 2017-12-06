import { SET_SELECTED_REGION, SET_REGION_PRICING } from "../constants";
const initialState = {
  selected: {
    name: "",
    id: ""
  },
  CA: {},
  CB: {},
  SA: {}
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_REGION:
      return {
        ...state,
        selected: { name: action.name, id: action.id }
      };
    case SET_REGION_PRICING:
      return {
        ...state,
        [action.region]: {
          ...action.prices
        }
      };
    default:
      return state;
  }
};

export default regionReducer;

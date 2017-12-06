import { SET_PROCEDURE } from "../constants";
import { recommendAPI } from "../api/recommend";
import { setSelectedCountry } from "./countries";
import { setSelectedRegion } from "./region";
import { setFlightsData } from "./flights";
export function setProcedure(name) {
  return {
    type: SET_PROCEDURE,
    name
  };
}
export function recommend(procedure) {
  return dispatch => {
    return recommendAPI(procedure).then(data => {
      dispatch(setSelectedRegion(data.region));
      dispatch(setSelectedCountry(data.country));
      dispatch(setFlightsData(data.flights));
    });
  };
}

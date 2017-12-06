import { SET_FLIGHTS_DATA } from "../constants";
import { getFlightsForCountry } from "../api/recommend";

export function setFlightsData(data) {
  return {
    type: SET_FLIGHTS_DATA,
    data
  };
}

export function getFlights(procedure, region, country) {
  return dispatch => {
    getFlightsForCountry(procedure, region, country).then(flights => {
      dispatch(setFlightsData(flights));
    });
  };
}

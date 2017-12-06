import { SET_SELECTED_COUNTRY, SET_DATA_COUNTRIES } from "../constants";
import { getCountriesForRegion } from "../api/recommend";
export function setSelectedCountry(name) {
  return {
    type: SET_SELECTED_COUNTRY,
    name
  };
}
export function getRegionsCountries(region) {
  return dispatch => {
    return getCountriesForRegion(region).then(countries => {
      dispatch(setCountries(countries));
    });
  };
}
export function setCountries(countries) {
  return {
    type: SET_DATA_COUNTRIES,
    data: countries
  };
}

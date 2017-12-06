import { SET_SELECTED_REGION, SET_REGION_PRICING } from "../constants";
import { getRegionPriceRanges } from "../api/recommend";
export function setSelectedRegion(name, id) {
  return {
    type: SET_SELECTED_REGION,
    name,
    id
  };
}
export function getRegionPricing(procedure) {
  return dispatch => {
    return getRegionPriceRanges(procedure).then(data => {
      dispatch(setRegionPrices("CA", data[0]));
      dispatch(setRegionPrices("SA", data[1]));
      dispatch(setRegionPrices("CB", data[2]));
    });
  };
}
export function setRegionPrices(region, prices) {
  return {
    type: SET_REGION_PRICING,
    region,
    prices
  };
}

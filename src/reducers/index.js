import country from "./country";
import procedure from "./procedure";
import flights from "./flights";
import region from "./region";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ country, procedure, flights, region });

export default rootReducer;

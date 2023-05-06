import { combineReducers } from "redux";
import dataOfMovies from "./reducer";
import activitiesOfMovies from "./reducer1";


export const rootReducer = combineReducers({
  dataOfMovies,
  activitiesOfMovies,
})
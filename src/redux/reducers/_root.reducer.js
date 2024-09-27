import { combineReducers } from "redux";
import beets from "./beet.reducer.js";

const rootReducer = combineReducers({
   beets,
  });
  
  export default rootReducer;
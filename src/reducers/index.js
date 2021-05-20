import { combineReducers } from "redux";
import departmentTypeReducer from "./departmentTypeReducer";
import workingHourReducer from "./workingHourReducer";
import authReducer from "./authReducer";

export default combineReducers({
  departmentTypeReducer,
  workingHourReducer,
  authReducer
});
//////////////////WORKING HOUR ACTION TYPES/////////////////////////
import {
  CREATE_WORKING_HOUR,
  GET_WORKING_HOUR,
  UPDATE_WORKING_HOUR,
  DELETE_WORKING_HOUR,
} from "../actions/types";
//////////////////END OF WORKING HOUR ACTION TYPES/////////////////////////

const initialState = [];


function workingHourReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {


    case CREATE_WORKING_HOUR:
      return [...state, payload];


    case GET_WORKING_HOUR:
      debugger;
      console.log("Reducer", payload)
      return payload;


    case UPDATE_WORKING_HOUR:
      debugger;
      return state.map((departmentType) => {
        if (departmentType.id === payload.id) {
          return {
            ...state,
            ...payload,
          };
        } else {
          return departmentType;
        }
      });

    case DELETE_WORKING_HOUR:
      return state.filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
};






export default workingHourReducer;
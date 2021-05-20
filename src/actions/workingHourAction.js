import {
    CREATE_WORKING_HOUR,
    GET_WORKING_HOUR,
    UPDATE_WORKING_HOUR,
    DELETE_WORKING_HOUR,
  } from "./types";
  
  import WorkingHourService from "../services/WorkingHourService";
  
  export const createWorkingHour = (workingHourDuration) => async (dispatch) => {
    try {
      const res = await WorkingHourService.create({ workingHourDuration });
  
      dispatch({
        type: CREATE_WORKING_HOUR,
        payload: res.data.data,
      });
  
      return Promise.resolve(res.data.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const getWorkingHours = () => async (dispatch) => {
    try {
      debugger;
  
      const res = await WorkingHourService.getAll();
      console.log("action", res)
      dispatch({
        type: GET_WORKING_HOUR,
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  debugger;
  export const updateWorkingHour = (id, data) => async (dispatch) => {
    try {
      //const res = await DepartmentTypeService.update(id, data);
  
      await WorkingHourService.update(id, data);
  
      dispatch({
        type: UPDATE_WORKING_HOUR,
        payload: data.data,
      });
  
      return Promise.resolve(data.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  
  export const deleteWorkingHour = (id) => async (dispatch) => {
    try {
      await WorkingHourService.remove(id);
  
      dispatch({
        type: DELETE_WORKING_HOUR,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
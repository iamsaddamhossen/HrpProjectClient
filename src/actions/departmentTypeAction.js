import {
  CREATE_DEPARTMENT_TYPE,
  GET_DEPARTMENT_TYPE,
  UPDATE_DEPARTMENT_TYPE,
  DELETE_DEPARTMENT_TYPE,
} from "./types";

import DepartmentTypeService from "../services/DepartmentTypeService";

export const createDepartmentType = (departmentTypeName) => async (dispatch) => {
  try {
    const res = await DepartmentTypeService.create({ departmentTypeName });

    dispatch({
      type: CREATE_DEPARTMENT_TYPE,
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getDepartmentTypes = () => async (dispatch) => {
  try {
    debugger;

    const res = await DepartmentTypeService.getAll();
    console.log("action", res)
    dispatch({
      type: GET_DEPARTMENT_TYPE,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

debugger;
export const updateDepartmentType = (id, data) => async (dispatch) => {
  try {
    //const res = await DepartmentTypeService.update(id, data);

    await DepartmentTypeService.update(id, data);

    dispatch({
      type: UPDATE_DEPARTMENT_TYPE,
      payload: data.data,
    });

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const deleteDepartmentType = (id) => async (dispatch) => {
  try {
    await DepartmentTypeService.remove(id);

    dispatch({
      type: DELETE_DEPARTMENT_TYPE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
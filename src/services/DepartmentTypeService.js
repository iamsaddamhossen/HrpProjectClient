import http from "../../src/utilities/http-common";

const getAll = async () => {
  debugger;
  return await http.get("/api/DepartmentType");
};

const get = async (id) => {
  return await http.get(`/DepartmentType/${id}`);
};

const create = async (data) => {
  return await http.post("/api/DepartmentType", data);
};

const update = async (id, data) => {
  return await http.put("/api/DepartmentType/" + id, data);
};


const remove = async (id) => {
  return await http.delete("/api/DepartmentType/" + id);
};

const removeAll = async () => {
  return await http.delete(`/DepartmentType`);
};

const DepartmentTypeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default DepartmentTypeService;
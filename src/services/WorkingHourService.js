import http from "../../src/utilities/http-common";

const getAll = async () => {
  debugger;
  return await http.get("/api/WorkingHour");
};

const get = async (id) => {
  return await http.get(`/api/WorkingHour/${id}`);
};

const create = async (data) => {
  return await http.post("/api/WorkingHour", data);
};

const update = async (id, data) => {
  return await http.put("/api/WorkingHour/" + id, data);
};


const remove = async (id) => {
  return await http.delete("/api/WorkingHour/" + id);
};

const removeAll = async () => {
  return await http.delete(`/WorkingHour`);
};

const WorkingHourService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default WorkingHourService;
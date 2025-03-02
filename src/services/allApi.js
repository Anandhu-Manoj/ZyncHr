import commonApi from "./commonApi";

export const addEmploye = async (data) => {
  return await commonApi("POST", "/employee", data);
};

export const getEmployee = async () => {
  return await commonApi("GET", "/employee", "");
};

export const getAdmin = async () => {
  return await commonApi("GET", "/Admin", "");
};

export const onDeleteData = async (id) => {
  return await commonApi("DELETE", `/employee/${id}`);
};

export const getEmployeeById = async (id) => {
  return await commonApi("GET", `/employee/${id}`, "");
};

export const updateEmployee = async (id, data) => {
  return await commonApi("PUT", `/employee/${id}`, data);
};

export const applyLeave = async (details) => {
  return await commonApi("POST", "/Leaves", details);
};

export const getLeave = async () => {
  return await commonApi("GET", "/Leaves", "");
};


export const getLeaveRequests = async () => {
  return await commonApi("GET", "/Leaves", "");
};

export const updateLeaveStatus = async (id, status) => {
  return await commonApi("PATCH", `/Leaves/${id}`, {status});
};
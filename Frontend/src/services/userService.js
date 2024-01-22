import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserServicer = (data) => {
  console.log("check data from service", data);
  return axios.post(`/api/creat-new-user`, data);
};

const deleteUserService = (userId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};

const forgotUserPassword = (userEmail) => {
  return axios.post("/api/passwordforgot", { email: userEmail });
};

const apiResetPassword = (data) => {
  return axios.put("/api/resetpassword", data);
};

const registerNewUser = (data) => {
  return axios.post("/api/signin", data);
};

const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};

export {
  handleLoginApi,
  getAllUsers,
  createNewUserServicer,
  deleteUserService,
  editUserService,
  forgotUserPassword,
  apiResetPassword,
  registerNewUser,
  getAllCodeService,
};

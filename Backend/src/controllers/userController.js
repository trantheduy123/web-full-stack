import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password)
    return res.status(500).json({
      errCode: 1,
      message: "missing inputs parameter!",
    });

  let userData = await userService.handleUserLogin(email, password);

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData ? userData.user : {},
  });
};

let handleGetAllUsers = async (req, res) => {
  let id = req.query.id; //All, id
  if (!id) {
    return res.status(200).json({
      users: [],
    });
  }
  let users = await userService.getAllUsers(id);

  return res.status(200).json({
    errCode: 0,
    message: "ok",
    users,
  });
};

let handeleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  return res.status(200).json(message);
};

let handeleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userService.updateUserData(data);
  return res.status(200).json(message);
};

let handeleDeleteUser = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        errCode: 1,
        message: "Missing required parameter: id",
      });
    }

    const message = await userService.deleteUser(id);

    return res.status(200).json({
      success: true,
      message: message || "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({
      errCode: 500,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handeleCreateNewUser: handeleCreateNewUser,
  handeleEditUser: handeleEditUser,
  handeleDeleteUser: handeleDeleteUser,
};

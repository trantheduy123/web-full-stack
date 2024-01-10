import db from "../models/index";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { Op } from "sequelize";

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password"],
          where: { email: email },
          raw: true,
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password); // false
          if (check) {
            userData.errCode = 0;
            (userData.errMessage = `OK`),
              delete user.password,
              (userData.user = user);
          } else {
            userData.errCode = 3;
            userData.errMessage = `Wrong password`;
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in your system. Please try other email`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "All") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (userId && userId !== "All") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email exist
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage:
            "your email is already in used, please try another email !",
        });
      } else {
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phonenumber: data.phonenumber,
          gender: data.gender === "1" ? true : false,
          roleId: data.roleId,
        });
      }

      resolve({
        errCode: 0,
        errMessage: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let deleteUser = async (userId) => {
  try {
    let foundUser = await db.User.findOne({
      where: { id: userId },
    });

    if (!foundUser) {
      return {
        errCode: 2,
        errMessage: "The user doesn't exist",
      };
    }

    await db.User.destroy({
      where: { id: userId },
    });

    return {
      errCode: 0,
      errMessage: "The user is deleted",
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    throw {
      errCode: 500,
      errMessage: "Internal Server Error",
    };
  }
};

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check if 'id' is missing in the data
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Missing required parameter: id",
        });
        return; // Return to avoid proceeding further
      }

      // Find the user by 'id'
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });

      // Check if the user is found
      if (user) {
        // Update user data
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phonenumber = data.phonenumber;
        user.roleId = data.roleId;
        user.gender = data.gender;

        // Save the updated user
        await user.save();

        resolve({
          errCode: 0,
          errMessage: "Update the user succeeds!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "User not found",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const forgotPasswordService = (email) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { email }, // Using the 'email' parameter directly
        raw: false,
      });

      if (!response) {
        resolve({
          err: 1,
          msg: "Email này chưa được đăng ký",
        });
      } else {
        if (response instanceof db.User) {
          const resetToken = crypto.randomBytes(32).toString("hex");
          response.passwordToken = resetToken;
          response.passwordTokenDate = Date.now() + 5 * 60 * 1000; // Thời gian token: 5p

          // Saving the changes to the database
          const savedResponse = await response.save();
          console.log(savedResponse); // Log the saved response

          resolve({
            err: 0,
            passwordTokenDate: resetToken,
            msg: "Tin nhắn đã được gửi đến email của bạn",
          });
        } else {
          resolve({
            err: 1,
            msg: "Lỗi trong quá trình đặt lại mật khẩu",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });

const resetPasswordService = async (password, token) => {
  try {
    // Check if 'token' is missing in the data
    if (!token) {
      return {
        err: 1,
        msg: "Missing required parameter: token",
      };
    }
    let user = await db.User.findOne({
      where: { passwordToken: token },
      passwordTokenDate: { [Op.gt]: Date.now() },
      raw: false,
    });

    if (!user) {
      return {
        err: 1,
        msg: "Bạn đã hết thời hạn thay đổi mật khẩu, vui lòng thử lại!",
      };
    }

    if (user) {
      user.password = hashPassword(password);
      user.passwordToken = null;
      user.passwordTokenDate = null;

      console.log(user);

      // Save the updated user
      await user.save();

      return {
        err: 0,
        msg: "Đổi mật khẩu thành công",
      };
    }
  } catch (error) {
    return {
      err: -1,
      msg: "An unexpected error occurred during password reset.",
      error: error.message || "Unknown error",
    };
  }
};

module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
  forgotPasswordService: forgotPasswordService,
  resetPasswordService: resetPasswordService,
};

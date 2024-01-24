import { toast } from "react-toastify";
import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserServicer,
  getAllUsers,
  deleteUserService,
  editUserService,
} from "../../services/userService";

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailded());
      }
    } catch (e) {
      dispatch(fetchGenderFailded());
      console.log("fetchGenderStart error", e);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailded = () => ({
  type: actionTypes.FETCH_GENDER_FAILDED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailded());
      }
    } catch (e) {
      dispatch(fetchPositionFailded());
      console.log("fetchPositionStart error", e);
    }
  };
};

export const fetchPositionSuccess = (PositonData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: PositonData,
});

export const fetchPositionFailded = () => ({
  type: actionTypes.FETCH_POSITION_FAILDE,
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFailded = () => ({
  type: actionTypes.FETCH_ROLE_FAILDE,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailded());
        toast.error("Failed to fetch roles");
      }
    } catch (e) {
      dispatch(fetchRoleFailded());
      console.log("fetchRoleStart error", e);
      toast.error("An error occurred while fetching roles");
    }
  };
};

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserServicer(data);

      if (res && res.errCode === 0) {
        toast.success("Create a new User succeed");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart());
        console.log(res);
      } else {
        dispatch(saveUserFailed());
        toast.error("Failed to create a new User");
      }
    } catch (e) {
      dispatch(saveUserFailed());
      console.log("saveUserFailed", e);
      toast.error("An error occurred while creating a new User");
    }
  };
};

export const deleteAllUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      console.log(res);

      if (res && res.success === true) {
        toast.success("User deleted successfully");
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(deleteUsersFailed());
        toast.error("Failed to delete the user");
        console.log(res.errMessage); // Log the error message if available
      }
    } catch (e) {
      dispatch(deleteUsersFailed());
      toast.error("An error occurred while deleting the user");
      console.error(e); // Log the error object for debugging
    }
  };
};

export const deleteUsersSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUsersFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED,
});

export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("All");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        dispatch(fetchAllUsersFailded());
      }
    } catch (e) {
      dispatch(fetchAllUsersFailded());
      console.log("fetchRoleStart error", e);
    }
  };
};

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});

export const fetchAllUsersFailded = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILDE,
});

export const editAllUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      console.log(res);

      if (res && res.errCode === 0) {
        toast.success("Update the user successfully");
        dispatch(editUsersSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(editUsersFailed());
        toast.error("Failed to update the user");
      }
    } catch (e) {
      dispatch(editUsersFailed());
      toast.error("An error occurred while updating the user");
      console.error(e); // Log the error object for debugging
    }
  };
};

export const editUsersSuccess = (data) => ({
  type: actionTypes.EDIT_USER_SUCCESS,
  users: data,
});

export const editUsersFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});

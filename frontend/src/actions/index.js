import axios from "axios"; 
import { config } from "../config";

export const getUsersAction = (state) => {
  return {
    type: "GET_USERS",
    payload: state
  }
}

export const getUsers = () => (dispatch) => {
  axios.get(`${config.host}/getUsers`)
    .then(res => {
      dispatch(getUsersAction(res.data));
    });
}

export const editUserAction = (state) => {
  return {
    type: "EDIT_USER",
    payload: state
  }
}

export const editUser = (state) => (dispatch) => {
  axios.get(`${config.host}/getUser/${state}`)
    .then(res => {
      dispatch(editUserAction(res.data));
    });
}
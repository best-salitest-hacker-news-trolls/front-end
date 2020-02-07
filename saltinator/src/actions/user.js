import { axiosWithAuth } from "../utils/axiosWithAuth";
import { USER_LOADING, USER_SUCCESS, USER_FAILURE } from "./types";

export const fetchUser = username => async dispatch => {
  dispatch({ type: USER_LOADING });
  try {
    const res = await axiosWithAuth().get(`users/${username}/comments`);
    dispatch({ type: USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_FAILURE, payload: err });
  }
};

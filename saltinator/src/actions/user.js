import axios from "axios";
import { USER_LOADING, USER_SUCCESS, USER_FAILURE } from "./types";

export const fetchUser = username => async dispatch => {
  dispatch({ type: USER_LOADING });
  try {
    const res = await axios.get(`PRODUCTION_URL_HERE/${username}`);
    dispatch({ type: USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_FAILURE, payload: err });
  }
};

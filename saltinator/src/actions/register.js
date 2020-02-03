import axios from "axios";
import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILURE } from "./types";

export const register = () => async dispatch => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const res = await axios.post(
      "https://saltiest-hacker-news-troll-dev.herokuapp.com/api/register"
    );
    console.log(res);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err });
  }
};

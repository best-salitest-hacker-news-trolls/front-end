import axios from "axios";
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

export const login = (creds, history) => async dispatch => {
  dispatch({ type: LOGIN_LOADING });
  try {
    const res = await axios.post(
      "https://saltiest-hacker-news-troll-dev.herokuapp.com/api/login",
      creds
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: res.data.token, userID: res.data.id }
    });
    localStorage.setItem("salty_token", res.data.token);
    localStorage.setItem("salty_id", res.data.id);
    history.push("/leaderboard");
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err });
  }
};

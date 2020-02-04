import axios from "axios";
import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAILURE } from "./types";

export const register = (creds, history) => async dispatch => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const res = await axios.post(
      "https://saltiest-hacker-news-troll-dev.herokuapp.com/api/register",
      creds
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { token: res.data.token, userID: res.data.id }
    });
    localStorage.setItem("salty_token", res.data.token);
    history.push("/leaderboard");
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err });
  }
};

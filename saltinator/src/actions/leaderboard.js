import { axiosWithAuth } from "../utils/axiosWithAuth";
import {
  LEADERBOARD_LOADING,
  LEADERBOARD_SUCCESS,
  LEADERBOARD_FAILURE
} from "./types";

export const fetchLeaderboard = () => async dispatch => {
  dispatch({ type: LEADERBOARD_LOADING });
  try {
    const res = await axiosWithAuth().get("users/comments");
    dispatch({ type: LEADERBOARD_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LEADERBOARD_FAILURE, payload: err });
  }
};

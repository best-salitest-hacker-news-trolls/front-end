import {
  LEADERBOARD_LOADING,
  LEADERBOARD_SUCCESS,
  LEADERBOARD_FAILURE
} from "./types";

export const fetchLeaderboard = () => async dispatch => {
  dispatch({ type: LEADERBOARD_LOADING });
  try {
    const res = await axios.get("PRODUCTION_URL_HERE");
    dispatch({ type: LEADERBOARD_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LEADERBOARD_FAILURE, payload: err });
  }
};

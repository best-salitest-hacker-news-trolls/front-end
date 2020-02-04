import { SAVING_LOADING, SAVING_SUCCESS, SAVING_FAILURE } from "./types";
import axiosWithAuth from "../utils/axiosWithAuth";

export const saveComment = (userID, comment) => async dispatch => {
  dispatch({ type: SAVING_LOADING });
  try {
    const payload = {
      user_id: userID,
      favorite_comments: comment.comment,
      fav_salty_score: comment.salt_score
    };
    const res = await axiosWithAuth().post(
      `users/${userID}/favorites`,
      payload
    );
    dispatch({ type: SAVING_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: SAVING_FAILURE, payload: err });
  }
};

import { SAVING_LOADING, SAVING_SUCCESS, SAVING_FAILURE } from "./types";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const saveComment = (userID, data) => async dispatch => {
  dispatch({ type: SAVING_LOADING });
  try {
    const payload = {
      user_id: data.userID,
      favorite_comments: data.comment,
      fav_salty_score: data.salt_score
    };

    const res = await axiosWithAuth().post(
      `users/${userID}/favorites`,
      payload
    );

    dispatch({ type: SAVING_SUCCESS, payload: res.data[0] });
  } catch (err) {
    dispatch({ type: SAVING_FAILURE, payload: err });
  }
};

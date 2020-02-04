import { axiosWithAuth } from "../utils/axiosWithAuth";

import { DELETE_LOADING, DELETE_SUCCESS, DELETE_FAILURE } from "./types";

export const deleteComment = (id, comment_id) => dispatch => {
  dispatch({ type: DELETE_LOADING });
  return axiosWithAuth()
    .delete(`users/${id}/favorites/${comment_id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS }).catch(err =>
        dispatch({ type: DELETE_FAILURE, payload: err })
      );
    });
};

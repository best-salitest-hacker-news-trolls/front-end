import { axiosWithAuth } from "../utils/axiosWithAuth";

import { DELETE_LOADING, DELETE_SUCCESS, DELETE_FAILURE } from "./types";

export const deleteComment = (id, comment_id) => dispatch => {
  console.log("firing!!!");
  dispatch({ type: DELETE_LOADING });
  return axiosWithAuth()
    .delete(`users/${id}/favorites/${comment_id}`)
    .then(res => {
      const lastSlash = res.config.url.lastIndexOf("/") + 1;
      dispatch({
        type: DELETE_SUCCESS,
        payload: res.config.url.substring(lastSlash)
      });
    })
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }));
};

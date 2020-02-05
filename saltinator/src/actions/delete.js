import { axiosWithAuth } from "../utils/axiosWithAuth";

import { DELETE_LOADING, DELETE_SUCCESS, DELETE_FAILURE } from "./types";

export const deleteComment = (id, comment_id) => dispatch => {
  dispatch({ type: DELETE_LOADING });
  return axiosWithAuth()
    .delete(`users/${id}/favorites/${comment_id}`)
    .then(res => {
      // this grabs the index after the last slash in the request url (the one we just sent)
      const lastSlash = res.config.url.lastIndexOf("/") + 1;
      dispatch({
        type: DELETE_SUCCESS,
        // below we're passing everything after the last slash - which is the ID of the comment we just deleted
        // why? so we can filter out the deleted comment in the reducer
        // this way we don't need to make an additional GET request to see our deletion reflected in the UI
        payload: res.config.url.substring(lastSlash)
      });
    })
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }));
};

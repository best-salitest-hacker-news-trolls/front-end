import { axiosWithAuth } from "../utils/axiosWithAuth";

import { SAVED_LOADING, SAVED_SUCCESS, SAVED_FAILURE } from "./types";

export const fetchComment = id => dispatch => {
  dispatch({ type: SAVED_LOADING });
  return axiosWithAuth()
    .get(`users/${id}/favorites`)
    .then(res => {
      dispatch({ type: SAVED_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SAVED_FAILURE, payload: err.data }));
};

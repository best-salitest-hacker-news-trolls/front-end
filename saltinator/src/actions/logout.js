import { LOGOUT } from "./types";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("salty_token");
  localStorage.removeItem("salty_id");
};

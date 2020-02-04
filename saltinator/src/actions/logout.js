import { LOGOUT } from "./types";

export const logout = history => dispatch => {
  dispatch({ type: LOGOUT });
  history.push("/login");
};

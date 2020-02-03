// ALL ACTIONS
import * as types from "../actions/types";

//INITIAL STATE
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: null,
  leaderboard: [],
  comments: [],
  savedComments: []
};

//REDUCER
export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_LOADING:
    case types.LOGIN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        errors: null
      };
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errors: payload
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
};

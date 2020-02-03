import * as types from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: null,
  leaderboard: [],
  comments: [],
  savedComments: []
};

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: payload
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

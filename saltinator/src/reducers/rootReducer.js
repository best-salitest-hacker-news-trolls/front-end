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
    case types.REGISTER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        errors: null
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errors: payload
      };
    default:
      return {
        ...state
      };
  }
};

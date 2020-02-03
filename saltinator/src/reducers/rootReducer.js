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
    // case types.REGISTER_ST
    default:
      return {
        ...state
      };
  }
};

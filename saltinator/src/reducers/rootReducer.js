const initialState = {
  isAuthenticated: false,
  errors: null,
  leaderboard: [],
  comments: [],
  saved: []
};

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return {
        ...state
      };
  }
};

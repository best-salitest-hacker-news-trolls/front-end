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
    default:
      return {
        ...state
      };
  }
};

import * as types from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: null,
  leaderboard: [],
  comments: [],
  savedComments: [],
  userID: localStorage.getItem("salty_id") || null
};

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_LOADING:
    case types.LOGIN_LOADING:
    case types.SAVING_LOADING:
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
        errors: null,
        userID: payload.userID
      };
    case types.SAVING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        savedComments: [...state.savedComments, payload]
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
        isLoading: false,
        userID: null
      };
    default:
      return state;
  }
};

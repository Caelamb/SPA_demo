import { GET_BY_NAME, GET_USERS } from "../actions";

let initialState = {
  allUsers: [],
  usersCopy: [],
  posts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
        usersCopy: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

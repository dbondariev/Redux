import { GO_PREV, GO_NEXT } from "./user.actions";
import { users } from "../users.js";

const initialState = {
  users: {
    usersList: [...users],
    currentPage: 1,
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_PREV:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage - 1,
        },
      };
    case GO_NEXT:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage + 1,
        },
      };
    default:
      return state;
  }
};

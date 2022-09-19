import { ADDUSER, DELETEUSER } from "./users.actions.js";

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: [...state.usersList, action.userData],
      };
    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.id),
      };
    default:
      return state;
  }
};

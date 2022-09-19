import { SHOW_SPINNER, USER_DATA_RECEIVED } from "./users.actions";

const initialData = {
  isFetching: false,
  userData: null,
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_DATA_RECEIVED:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default userReducer;

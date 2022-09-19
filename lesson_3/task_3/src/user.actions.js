export const SET_USER = "USERS/SET_USER";
export const REMOVE_USER = "USERS/REMOVE_USER";

export const setUser = userData => ({
  type: SET_USER,
  payload: {
    userData,
  },
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  payload: {
    userId,
  },
});


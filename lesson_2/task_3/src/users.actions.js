export const ADDUSER = "USER/ADD";
export const DELETEUSER = "USER/DELETE";

export const addUser = userData => ({
  type: ADDUSER,
  userData,
});

export const deleteUser = id => ({
  type: DELETEUSER,
  id,
});

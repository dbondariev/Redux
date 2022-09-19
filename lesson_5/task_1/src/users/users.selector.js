export const usersListSelector = state => {
  return state.users.usersList;
}

export const currentPageSelector = state => {
  return state.users.currentPage;
};
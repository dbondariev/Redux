import React from "react";
import { connect } from "react-redux";
import Pagination from "../users/Pagination";
import User from "./User";
import { goNext, goPrev } from "../user.actions";

const UsersList = ({ users, currentPage, toggleNextPage, togglePrevPage }) => {
  const usersPerPage = 3;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const userToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        itemsPerPage={usersPerPage}
        goPrev={togglePrevPage}
        goNext={toggleNextPage}
        currentPage={currentPage}
        totalItems={users.length}
      />

      <ul className="users">
        {userToRender.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  toggleNextPage: goNext,
  togglePrevPage: goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;



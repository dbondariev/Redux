import React from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Pagination from "../users/Pagination";
import User from "../users/User";
import { goNextPage, goPrevPage } from "../users/user.actions";
import {
  usersListSelector,
  currentPageSelector,
} from "../users/users.selector";

const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goNext, goPrev }) => {

  const start = (currentPage - 1) * itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />

      <ul className="users">
        {usersToDisplay.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

UsersList.PropTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.string.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired
}

const mapState = state => ({
  users: usersListSelector(state),
  currentPage: currentPageSelector(state),
});

const mapDispatch = {
  goNext: goNextPage,
  goPrev: goPrevPage,
};

// const connector = connect(mapState, mapDispatch);

// const ConnectedUsersList = connector(UsersList);

// export default ConnectedUsersList;

export default connect(mapState, mapDispatch)(UsersList);

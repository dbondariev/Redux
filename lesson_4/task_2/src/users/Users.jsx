import React from "react";
import { connect } from "react-redux";
import * as userActions from "./users.actions";

class Users extends React.Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User #${id}`,
    };
    this.props.createUser(newUser);
  };

  render() {
    const { users, deleteUser } = this.props;

    return (
      <div className="users">
        <button onClick={this.onUserCreate} className="users__create-btn">
          Create user
        </button>
        <ul className="users__list">
          {users.map(user => (
            <li key={user.id} className="users__list-item">
              <span>{user.name}</span>
              <button
                className="users__delete-btn"
                onClick={() => deleteUser(user.id)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.usersList,
  };
};

// add action
const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

// подкл store and actions
const ConnectedUsers = connector(Users);

export default ConnectedUsers;


import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

class SearchField extends React.Component {
  state = { userName: "" };

  onChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

SearchField.propTypes = {
  userDataReceived: PropTypes.func.isRequired,
};

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
  userDataReceived: usersActions.userDataReceived,
};

export default connect(null, mapDispatch)(SearchField);

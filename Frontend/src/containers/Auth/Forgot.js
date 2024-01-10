/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Forgot.scss";
import { handleLoginApi, forgotUserPassword } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isShowPassword: false,
      errMessage: "",
      successMessage: "", // New state for success message
    };
  }

  handleOnChangeUserEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleLogin = async () => {
    const { email } = this.state;
    const response = await forgotUserPassword(email);

    if (response && response.err === 0) {
      this.setState({ successMessage: response.msg }); // Set success message in state
    } else {
      // Handle other responses/errors as needed
    }
  };

  render() {
    const { successMessage } = this.state;

    return (
      <div className="login-blackground">
        <div className="login-container">
          {successMessage && (
            <div className="success-notification">{successMessage}</div>
          )}
          <input
            className="form-control"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={(event) => this.handleOnChangeUserEmail(event)}
          />
          <button
            className="btn-login"
            onClick={() => {
              this.handleLogin();
            }}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfor) =>
      dispatch(actions.userLoginSuccess(userInfor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

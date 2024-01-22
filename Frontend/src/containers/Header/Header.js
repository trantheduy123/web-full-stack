import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { LANGUAGES } from "../../utils";
import { FormattedMessage } from "react-intl";
class Header extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguegeAppRedux(language);
  };
  render() {
    const { processLogout, language, userInfo } = this.props;
    console.log("check userinfo", userInfo);

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <h6 className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </h6>
        <div className="languages">
          <h4 className="welcome">
            {" "}
            <FormattedMessage id="homeheader.welcome" />{" "}
            {userInfo && userInfo.firstName ? userInfo.firstName : ""} !{" "}
          </h4>
          <h5
            className={
              language === LANGUAGES.VI ? "languages-vi active" : "languages-vi"
            }
            onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
          >
            VN
          </h5>
          <h5
            className={
              language === LANGUAGES.EN ? "languages-en active" : "languages-en"
            }
            onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
          >
            EN
          </h5>
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Log out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>

        {/* nút logout */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguegeAppRedux: (language) =>
      dispatch(actions.changeLanguegeApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import "./HomeHeader.scss";
import { LANGUAGES } from "../../utils";
import { changeLanguegeApp } from "../../store/actions";

class HomeHeader extends Component {
  changeLanguage = (languge) => {
    this.props.changeLanguegeAppRedux(languge);
  };

  render() {
    let language = this.props.language;

    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.DentalSpecialist" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.SearchDoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.health-facility" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.select-room" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.doctor" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.fee" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.check-health" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <FormattedMessage id="homeheader.support" />
                <i className="fas fa-question-circle"></i>
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              {" "}
              <FormattedMessage id="banner.title1" />
            </div>
            <div className="title2">
              {" "}
              <FormattedMessage id="banner.title2" />
            </div>
            <div className="parent-container">
              <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Tìm bác sĩ theo chuyên khoa" />
              </div>
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <FormattedMessage id="banner.child1" />
                </div>
              </div>
            </div>
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <FormattedMessage id="banner.child2" />
                </div>
              </div>
            </div>
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-stethoscope"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <FormattedMessage id="banner.child3" />
                </div>
              </div>
            </div>
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-notes-medical"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child4" />
                </div>
              </div>
            </div>
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="text-child">
                  {" "}
                  <FormattedMessage id="banner.child5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguegeAppRedux: (language) => dispatch(changeLanguegeApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

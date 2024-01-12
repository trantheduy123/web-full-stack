import React, { Component } from "react";

import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
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
                  <b>Chuyên Khoa Răng</b>
                </div>
                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="subs-title">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="subs-title">Chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="subs-title">Khám răng tổng quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                Hỗ trợ <i className="fas fa-question-circle"></i>
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">BOOKING DENTAL CLINIC</div>
            <div className="title2">CHĂM SÓC SỨC KHỎE RĂNG MIỆNG TOÀN DIỆN</div>
            <div className="parent-container">
              <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Tìm bác sĩ khám bệnh" />
              </div>
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">Khám chuyên khoa</div>
              </div>
            </div>
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="text-child">Khám từ xa</div>
              </div>
            </div>
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-stethoscope"></i>
                </div>
                <div className="text-child">Bác sĩ đồng hành</div>
              </div>
            </div>
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-notes-medical"></i>
                </div>
                <div className="text-child">Bài test sức khỏe răng miệng</div>
              </div>
            </div>
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="text-child">Bảng giá dịch vụ</div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

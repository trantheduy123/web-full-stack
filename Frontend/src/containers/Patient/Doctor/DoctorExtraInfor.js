import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";

import { LANGUAGES } from "../../../utils";
import { getScheduleDoctorByDate } from "../../../services/userService";
import { FormattedMessage } from "react-intl";

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: true,
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {}

  showHideDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status,
    });
  };

  render() {
    let { isShowDetailInfor } = this.state;
    return (
      <div className="doctor-extra-infor-container">
        <div className="content-up">
          <div className="text-address">DIA CHI KHAM</div>
          <div className="name-clinic">Phong Kham Chuyen Khoa Rang</div>
          <div className="detail-address">
            {" "}
            207 Go Dau - Hai Ba Trung - Ha Noi{" "}
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfor === false && (
            <div className="short-infor">
              {" "}
              Gia Kham 2005500.{" "}
              <span onClick={() => this.showHideDetailInfor(true)}>
                Xem chi tiet
              </span>{" "}
            </div>
          )}

          {isShowDetailInfor === true && (
            <>
              <div className="title-price">Gia Kham</div>
              <div className="title-detail">
                <div className="price">
                  <span className="left">Gia Kham</span>
                  <span className="right">250000</span>
                </div>

                <div className="note">
                  asdfgashfdkj
                  ashdfkjasdfkjbasdfkbasdfbasfbaskdfbaskfskfbasdkfbkasfbsf
                </div>
              </div>
              <div className="payment">
                asdfsdfsdfskjfbbfkbfkbkbfkbdkfbkj{" "}
                <span
                  className="hide-price"
                  onClick={() => this.showHideDetailInfor(false)}
                >
                  An bang gia
                </span>{" "}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.app.language };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);

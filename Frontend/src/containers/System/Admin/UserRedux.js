import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserRedux.scss";
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
      previewImgURL: "",
      isOpen: false,
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
    /* try {
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0)
        this.setState({
          genderArr: res.data,
        });
      console.log(res);
    } catch (e) {
      console.log(e);
    } */
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      this.setState({
        roleArr: this.props.roleRedux,
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        positionArr: this.props.positionRedux,
      });
    }
  }

  handleOnchangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImgURL: objectUrl,
      });
    }
  };

  openPrevviewImage = () => {
    if (!this.state.previewImgURL) return;
    this.setState({
      isOpen: true,
    });
  };

  render() {
    console.log("check state:", this.state);
    let genders = this.state.genderArr;
    let roles = this.state.roleArr;
    let posotions = this.state.positionArr;
    let language = this.props.language;
    let isGetGenders = this.props.isLoadingGender;
    console.log("check genderRedux", this.state);
    return (
      <div className="user-redux-container">
        <div className="title">User Redux</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {" "}
                <FormattedMessage id="manage-user.add" />
              </div>
              <div className="col-12">
                {isGetGenders === true ? "Loadingender" : " "}{" "}
              </div>
              <div className="col-3">
                <label className="col-sm-2 col-form-label">
                  <FormattedMessage id="manage-user.email" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <label className=" col-form-label">
                  <FormattedMessage id="manage-user.password" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <label className="col-form-label">
                  <FormattedMessage id="manage-user.first-name" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <label className="col-form-label">
                  <FormattedMessage id="manage-user.last-name" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <label className="col-form-label">
                  <FormattedMessage id="manage-user.phone-number" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-9">
                <label className="col-form-label">
                  <FormattedMessage id="manage-user.address" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <label className="col-form-label">
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      {genders &&
                        genders.length > 0 &&
                        genders.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <label className="col-form-label">
                  <FormattedMessage id="manage-user.position" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      {posotions &&
                        posotions.length > 0 &&
                        posotions.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <label className="col-form-label">
                  <FormattedMessage id="manage-user.role" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      {roles &&
                        roles.length > 0 &&
                        roles.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <label className="col-form-label">
                  <FormattedMessage id="manage-user.image" />
                </label>
                <div className="form-group ">
                  <div className="col-sm-12">
                    <input
                      id="previewImg"
                      onChange={(event) => this.handleOnchangeImage(event)}
                      type="file"
                      hidden
                    />
                    <label className="label-upload" htmlFor="previewImg">
                      Tải ảnh <i className="fas fa-upload"></i>
                    </label>
                    <div
                      style={{
                        backgroundImage: `url(${this.state.previewImgURL})`,
                      }}
                      onClick={() => this.openPrevviewImage()}
                      className="preview-image"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <button type="button" className="btn btn-success">
                  <FormattedMessage id="manage-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImgURL}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    roleRedux: state.admin.roles,
    positionRedux: state.admin.positions,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
    /*  processLogout: () => dispatch(actions.processLogout()),
    changeLanguegeAppRedux: (language) =>
      dispatch(actions.changeLanguegeApp(language)), */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

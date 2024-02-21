import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageDoctor.scss";
import * as actions from "../../../store/actions";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import { CRUD_ACTION, LANGUAGES } from "../../../utils";
import { getDetailInforDoctor } from "../../../services/userService";

const mdParser = new MarkdownIt(/* Markdown-it options */);
class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contenMarkdown: "",
      contentHTML: "",
      selectedOptions: "",
      description: "",
      listDoctors: [],
      hasOldData: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctor();
  }
  buildDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;

        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.language !== this.props.language) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
  }

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: html,
      contentHTML: text,
    });
  };
  handleSaveContentMarkdown = () => {
    let { hasOldData } = this.state;
    this.props.saveDetailDoctorAct({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedOptions.value,
      action: hasOldData === true ? CRUD_ACTION.EDIT : CRUD_ACTION.CREATE,
    });
    console.log("tranthe duy", this.state);
  };

  handleChangeSelect = async (selectedOptions) => {
    this.setState({ selectedOptions });
    let res = await getDetailInforDoctor(selectedOptions.value);
    if (res && res.errCode === 0 && res.data && res.data.Markdown) {
      let markdown = res.data.Markdown;
      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown.description,
        hasOldData: true,
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
        hasOldData: false,
      });
    }
    console.log(`tran the duy:`, res);
  };
  handleOnChangeDesc = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions }, () =>
      console.log(`Option selected:`, this.state.selectedOptions)
    );
  };

  render() {
    let { hasOldData } = this.state;

    return (
      <div className="manage-doctor-container">
        <div className="manage-doctor-title"> Tạo thêm thông tin Bác Sĩ </div>
        <div className="more-info">
          <div className="content-left">
            <label>chọn bác sĩ</label>
            <Select
              value={this.state.selectedOptions}
              onChange={this.handleChangeSelect}
              options={this.state.listDoctors}
            />
          </div>

          <div className="content-right">
            <label> Thông tin giới thiệu </label>
            <textarea
              onChange={(event) => this.handleOnChangeDesc(event)}
              className="form-control"
              rows="4"
              value={this.state.description}
            >
              asdfasdf
            </textarea>
          </div>
        </div>
        <div className="manage-doctor-editor">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
        <button
          onClick={() => this.handleSaveContentMarkdown()}
          className={
            hasOldData === true
              ? "save-content-doctor"
              : "create-content-doctor"
          }
        >
          {hasOldData === true ? (
            <span> Lưu thông tin</span>
          ) : (
            <span> Tạo thông tin</span>
          )}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    saveDetailDoctorAct: (data) => dispatch(actions.saveDetailDoctorAct(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);

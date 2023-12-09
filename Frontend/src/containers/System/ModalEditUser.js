import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import "./ModalUser.scss";
import _ from "lodash";
class ModalUser extends Component {
  componentDidMount() {
    let user = this.props.item;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "hashcode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phonenumber: user.phonenumber,
        gender: user.gender,
        roleId: user.roleId,
      });
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      modal: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phonenumber: "",
      gender: "",
      roleId: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };
  handleOnChangeInput = (e, id) => {
    let copyState = { ...this.state };
    copyState[id] = e.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phonenumber",
    ];

    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }

    return isValid;
  };

  isValidEmail = (email) => {
    // Simple email validation, you may want to use a more robust validation library
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  handleAddNewUser = () => {
    let isValid = this.checkValidInput();

    if (isValid) {
      if (!this.isValidEmail(this.state.email)) {
        alert("Invalid email format");
      } else {
        // Call API to create new user
        this.props.createNewuser(this.state);
        this.setState({ modal: false });
      }
    }
  };
  handleEditUser = () => {
    const { item } = this.props;

    console.log("Edit user:", item);
    let isValid = this.checkValidInput();
    if (isValid === true) {
      this.props.editUser(this.state);
    }
    this.toggle();
  };

  render() {
    return (
      <div>
        <button className="btn-edit" color="primary" onClick={this.toggle}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          external={this.externalCloseBtn}
          centered
          size="lg"
          className="modal-user-container"
        >
          <ModalHeader
            style={{
              alignItems: "center",
            }}
            width="100%"
          >
            Edit New User
          </ModalHeader>
          <ModalBody>
            <Form className="From">
              <Row>
                <Col md={6}>
                  <FormGroup className="FromGroup">
                    <Label className="Label" for="exampleEmail">
                      Email
                    </Label>
                    <Input
                      className="Input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={(e) => {
                        this.handleOnChangeInput(e, "email");
                      }}
                      value={this.state.email}
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="FromGroup">
                    <Label className="Label" for="inputPassword">
                      Password
                    </Label>
                    <Input
                      className="Input"
                      name="password"
                      placeholder="password"
                      type="password"
                      onChange={(e) => {
                        this.handleOnChangeInput(e, "password");
                      }}
                      disabled
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup className="FromGroup">
                    <Label className="Label">First name</Label>
                    <Input
                      className="Input"
                      name="firstName"
                      placeholder="First name"
                      type="text"
                      onChange={(e) => {
                        this.handleOnChangeInput(e, "firstName");
                      }}
                      value={this.state.firstName}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="FromGroup">
                    <Label className="Label">Last name</Label>
                    <Input
                      className="Input"
                      name="lastName"
                      placeholder="Last name"
                      type="text"
                      onChange={(e) => {
                        this.handleOnChangeInput(e, "lastName");
                      }}
                      value={this.state.lastName}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <FormGroup className="FromGroup">
                    <Label className="Label" for="inputAddress">
                      Address
                    </Label>
                    <Input
                      className="Input"
                      name="address"
                      placeholder="Address"
                      type="text"
                      onChange={(e) => {
                        this.handleOnChangeInput(e, "address");
                      }}
                      value={this.state.address}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="FromGroup">
                    <Label className="Label" for="inputCity">
                      Phone number
                    </Label>
                    <Input
                      className="Input"
                      name="phonenumber"
                      placeholder="Phone number"
                      type="text"
                      onChange={(e) => {
                        this.handleOnChangeInput(e, "phonenumber");
                      }}
                      value={this.state.phonenumber}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup className="FromGroup">
                <Label className="Label" for="inputState">
                  Sex
                </Label>
                <Input
                  className="Input"
                  id="exampleSelect"
                  name="gender"
                  type="select"
                  onChange={(e) => {
                    this.handleOnChangeInput(e, "gender");
                  }}
                  value={this.state.gender}
                >
                  <option className="seclect" value="1">
                    Male
                  </option>
                  <option className="seclect" value="0">
                    Female
                  </option>
                </Input>
              </FormGroup>
              <FormGroup className="FromGroup">
                <Label className="Label" for="inputZip">
                  Role
                </Label>
                <Input
                  className="Input"
                  name="roleId"
                  type="select"
                  onChange={(e) => {
                    this.handleOnChangeInput(e, "roleId");
                  }}
                  value={this.state.roleId}
                >
                  <option className="seclect" value="1">
                    Admin
                  </option>
                  <option className="seclect" value="2">
                    Doctor
                  </option>
                  <option className="seclect" value="3">
                    Patient
                  </option>
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.handleEditUser}
              className="Button"
            >
              Save as
            </Button>
            <Button color="primary" onClick={this.toggle} className="Button">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

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
class ModalUser extends Component {
  componentDidMount() {}
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  render() {
    return (
      <div>
        <Button
          color="primary"
          className="btn btn-primary px-2"
          onClick={this.toggle}
        >
          <i class="fas fa-plus"></i> Add new user
        </Button>
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
            Create New User
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
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup className="FromGroup">
                    <Label className="Label">First Name</Label>
                    <Input
                      className="Input"
                      name="firstName"
                      placeholder="First name"
                      type="text"
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
                <Input className="Input" name="roleId" type="select">
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
            <Button color="primary" onClick={this.toggle} className="Button">
              Submit
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

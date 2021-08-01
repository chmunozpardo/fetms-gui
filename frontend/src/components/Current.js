import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import * as loginReducer from "../reducers/login";
import { connect } from "react-redux";

function Current(props) {
  return (
    <Container fluid className="w-100">
      <Row className="w-100">
        <Col className="border-box p-0 w-100" xs={{ span: 4, offset: 4 }}>
          {props.currentUser}
        </Col>
      </Row>
      <Row className="w-100">
        <Col className="border-box p-0 w-100" xs={{ span: 4, offset: 4 }}>
          {props.currentEmail}
        </Col>
      </Row>
      <Row className="w-100">
        <Col className="border-box p-0 w-100" xs={{ span: 4, offset: 4 }}>
          <Button onClick={props.logout}>Logout</Button>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.username,
    currentEmail: state.email,
    authorized: state.authorization,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(loginReducer.logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Current);

import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import * as loginReducer from "../reducers/login";
import { connect } from "react-redux";
import axios from "axios";

function LoginForm(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [logged, setLogged] = useState(false);
  let [loaded, setLoaded] = useState(false);
  let mainComponent = useRef(null);

  const fetchData = async () => {
    let axiosConfig = {
      withCredentials: true,
      headers: {
        crossDomain: true,
        "Content-Type": "application/json",
      },
    };
    if (props.authorized) {
      axiosConfig.headers.Authorization = "Bearer " + props.currentToken;
    }
    await axios
      .get(
        process.env.REACT_APP_DB_HOSTNAME + "/authentication/me",
        axiosConfig
      )
      .then((result) => {
        setLoaded(true);
        props.login({
          username: result.data.Name,
          email: result.data.Email,
        });
        if (result.status === 200) setLogged(true);
      })
      .catch((error) => {
        setLoaded(true);
        console.log("Error: ", error);
        if (error.status === 401) setLogged(false);
      });
  };

  const submitLogout = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("username", email);
    form.append("password", password);
    const axiosConfig = {
      withCredentials: true,
      headers: { crossDomain: true, "Content-Type": "application/json" },
    };
    await axios
      .get(
        process.env.REACT_APP_DB_HOSTNAME + "/authentication/logout",
        axiosConfig
      )
      .then((response) => {
        setLogged(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitLogin = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("username", email);
    form.append("password", password);
    const axiosConfig = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    await axios
      .post(
        process.env.REACT_APP_DB_HOSTNAME + "/authentication/token",
        form,
        axiosConfig
      )
      .then((response) => {
        props.setToken(response.data.access_token);
        setLogged(true);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  if (loaded) {
    if (logged === false) {
      mainComponent.current = (
        <Form onSubmit={submitLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
    } else {
      if (props.currentUser === "") {
        fetchData();
      } else {
        mainComponent.current = (
          <Form onSubmit={submitLogout}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Text className="text-muted">{props.currentUser}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Text className="text-muted">{props.currentEmail}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Logout
            </Button>
          </Form>
        );
      }
    }
  }

  return (
    <Container fluid className="mw-100 h-100">
      <Row className="h-100">
        <Col className="border-box p-0 h-100" xs={{ span: 4, offset: 4 }}>
          {mainComponent.current}
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    currentToken: state.token,
    currentUser: state.username,
    currentEmail: state.email,
    authorized: state.authorization,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(loginReducer.setToken(token)),
    login: (credentials) => dispatch(loginReducer.loginUser(credentials)),
    logout: () => dispatch(loginReducer.logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

import React, { useRef, useEffect, useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function LoginForm() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [data, setData] = useState(null);
  let [logged, setLogged] = useState(false);
  let [loaded, setLoaded] = useState(false);
  let mainComponent = useRef(null);

  const fetchData = async () => {
    await axios.get("http://localhost:8000/authentication/users/me",
      {
        withCredentials: true,
        headers: { crossDomain: true, 'Content-Type': 'application/json' }
      })
      .then(
        (result) => {
          setLoaded(true);
          setData(result.data);
          if (result.status === 200) setLogged(true);
        }
      ).catch(error => {
        setLoaded(true);
        console.log("Error: ", error);
        if (error.response.status === 401) setLogged(false);
      });
  };

  useEffect(
    () => {
      fetchData();
    }, []);

  const submitLogin = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("username", email);
    form.append("password", password);
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    await axios.post(process.env.REACT_APP_DB_HOSTNAME + "/authentication/token", form, axiosConfig)
      .then(
        response => {
          setLogged(true);
        }
      ).catch(error => {
        console.log("Error: ", error);
      });
  };


  if (loaded) {
    if (logged === false) {
      mainComponent.current = <Form onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    } else {
      if (data === null) {
        fetchData();
      } else {
        mainComponent.current = JSON.stringify(data)
      }
    }
  }

  return (
    <Container fluid className='mw-100 h-100'>
      <Row className='h-100'>
        <Col className='border-box p-0 h-100' xs={{ span: 4, offset: 4 }}>
          {mainComponent.current}
        </Col>
      </Row>
    </Container>
  )
}

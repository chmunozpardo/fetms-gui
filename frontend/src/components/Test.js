import React, { useRef, useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import axios from 'axios';

export default function Test() {
  let [data, setData] = useState('');
  let token = useRef(null);

  const fetchData = async () => {
    await axios.get(process.env.REACT_APP_DB_HOSTNAME + "/authentication/users/me", {
      withCredentials: true,
      headers: { crossDomain: true, 'Content-Type': 'application/json' }
    })
      .then(
        (result) => {
          setData(result.data);
        }
      ).catch(error => {
        console.log("Error: ", error.response.data);
      });
  };

  useEffect(
    () => {
      token.current = localStorage.getItem('token');
      console.log(token.current)
      fetchData();
    }
    , [])

  return (
    <Container fluid className='mw-100 h-100'>
      <Row className='h-100'>
        {JSON.stringify(data)}
      </Row>
    </Container>
  )
}

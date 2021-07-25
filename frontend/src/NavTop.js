import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mainLogo from './img/nrao_logo.png';
import './navtop.css'

export class NavTop extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand className="big">
            <img src={mainLogo}
              height="50px"
              alt="NRAO Logo"
              style={{ marginRight: "1rem" }}>
            </img>
            <span>Front End Test & Measurement System</span></Navbar.Brand>
          <Nav className="w-100" fill justify>
            <Nav.Item>
              <Nav.Link as={Link} to="/front_ends">Front End List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/current">Current</Nav.Link>
            </Nav.Item>
          </Nav>

        </Navbar>
      </div >
    )
  }
}

export default NavTop

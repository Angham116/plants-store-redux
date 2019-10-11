import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import {
  homeUrl,
  cartUrl
} from '../../urls';

import './style.css';

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link to={homeUrl}>Home</Link>
          </Nav>
          <Nav className="mr-auto">
            <Link to={cartUrl}>Shopping cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import {
  homeUrl,
  cartUrl
} from '../../urls';

import {
  CartIcon
} from '../index';

import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href={homeUrl} className="logo">Greener</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-toggle">
          <Nav className="mr-auto">
              <Link to={homeUrl}>Home</Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to={cartUrl}><CartIcon /></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

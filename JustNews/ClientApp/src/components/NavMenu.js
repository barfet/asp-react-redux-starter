import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>JustNews</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact >
          <NavItem>
            <Glyphicon glyph='home' /> All
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/general'} exact >
          <NavItem>
            <Glyphicon glyph='globe' /> General
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/health'} exact>
          <NavItem>
            <Glyphicon glyph='heart' /> Health
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/science'} exact>
          <NavItem>
            <Glyphicon glyph='education' /> Science
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/sports'} exact>
          <NavItem>
            <Glyphicon glyph='king' /> Sports
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/technology'} exact>
          <NavItem>
            <Glyphicon glyph='qrcode' /> Technology
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/business'} exact>
          <NavItem>
            <Glyphicon glyph='briefcase' /> Business
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/entertainment'} exact>
          <NavItem>
            <Glyphicon glyph='film' /> Entertainment
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

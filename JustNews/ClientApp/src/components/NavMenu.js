import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

const NavMenu = (props) => (
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
            <Glyphicon glyph='home' /> ALL
          </NavItem>
        </LinkContainer>
        {
          props.items.map(item =>
            item.selected &&
            <LinkContainer to={`/${item.name}`} exact >
              <NavItem>
                <Glyphicon glyph={item.glyph} /> {item.name.toUpperCase()}
              </NavItem>
            </LinkContainer>
          )
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default connect(
  state => state.feeds,
  null
)(NavMenu);

import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

const feeds = [
  {
    name: "general",
    glyph: "globe"
  },
  {
    name: "health",
    glyph: "heart"
  },
  {
    name: "science",
    glyph: "education"
  },
  {
    name: "sports",
    glyph: "king"
  },
  {
    name: "technology",
    glyph: "qrcode"
  },
  {
    name: "business",
    glyph: "briefcase"
  },
  {
    name: "entertainment",
    glyph: "film"
  }
]

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
            <Glyphicon glyph='home' /> ALL
          </NavItem>
        </LinkContainer>
        {
          feeds.map(feed =>
            <LinkContainer to={`/${feed.name}`} exact >
              <NavItem>
                <Glyphicon glyph={feed.glyph} /> {feed.name.toUpperCase()}
              </NavItem>
            </LinkContainer>
          )
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

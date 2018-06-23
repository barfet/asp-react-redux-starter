import React from 'react';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';

const Layout = props => (
  <Grid fluid>
    <Row>
      <Col sm={2}>
        <NavMenu items={props.items} />
      </Col>
      <Col sm={10}>
        {props.children}
      </Col>
    </Row>
  </Grid>
);

export default connect(
  state => state.feeds,
  null
)(Layout);

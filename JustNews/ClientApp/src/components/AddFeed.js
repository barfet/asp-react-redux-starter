import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/TopHeadlines';
import Wrapper from './Wrapper';

const feeds = [
    {
      name: "general",
      glyph: "globe",
      selected: false
    },
    {
      name: "health",
      glyph: "heart",
      selected: false
    },
    {
      name: "science",
      glyph: "education",
      selected: false
    },
    {
      name: "sports",
      glyph: "king",
      selected: false
    },
    {
      name: "technology",
      glyph: "qrcode",
      selected: false
    },
    {
      name: "business",
      glyph: "briefcase",
      selected: false
    },
    {
      name: "entertainment",
      glyph: "film",
      selected: false
    }
  ]

class AddFeed extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
    
        this.state = {
            show: false
        };
    }
  
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClick(e) {
        e.preventDefault();
        const name = e.target.name;

        feeds.forEach((feed, index) => {
            if(feed.name === name) {
                feed.selected = !feed.selected
            }
        });
    }
  
    render() {
        return (
            <Wrapper>
                <Col md={6} mdPush={5}>
                    <Button 
                        onClick={this.handleShow}> Subscribe
                    </Button>
                </Col>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Subscribe to new Feed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ListGroup>
                            {
                                feeds.map(feed =>
                                    <ListGroupItem 
                                        onClick={this.handleClick}
                                        name={feed.name}
                                        active={feed.selected}
                                    >{feed.name.toUpperCase()}</ListGroupItem>
                                )
                            }
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Wrapper>
      );
    }
  }
  
export default connect(
    state => state.topHeadlines,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(AddFeed);
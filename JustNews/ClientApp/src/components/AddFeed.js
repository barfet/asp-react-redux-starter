import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/Feeds';
import Wrapper from './Wrapper';

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
        const name = e.target.name;
        this.props.addNewFeed(name);
    }
  
    render() {
        const { items } = this.props;
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
                                items.map(item =>
                                    <ListGroupItem 
                                        onClick={this.handleClick}
                                        name={item.name}
                                        active={item.selected}
                                        key={item.name}
                                    >{item.name.toUpperCase()}</ListGroupItem>
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
    state => state.feeds,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(AddFeed);
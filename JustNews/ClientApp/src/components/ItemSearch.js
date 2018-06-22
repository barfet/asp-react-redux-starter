import * as React from 'react';
import { connect } from 'react-redux';
import { Col, ControlLabel, FormControl, Button, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/TopHeadlines';
import Wrapper from './Wrapper';

class ItemSearch extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
  
      this.state = {
        searchText: ''
      };
    }
  
    handleChange(e) {
      this.setState({ searchText: e.target.value });
    }

    handleClick(e) {
        const { requestTopHeadlines, newsCategory } = this.props;
        requestTopHeadlines(newsCategory, this.state.searchText);
    }

    handleKeyPress(target) {
        if(target.charCode == 13) {
            const { requestTopHeadlines, newsCategory } = this.props;
            requestTopHeadlines(newsCategory, this.state.searchText);
        }
    }
  
    render() {
        return (
            <Wrapper>
                <Col md={6}>
                    <ControlLabel>News Search</ControlLabel>
                    <Row>
                        <Col md={10}>
                            <FormControl
                                    type="text"
                                    value={this.state.searchText}
                                    placeholder="Text to search"
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPress}
                                />
                        </Col>
                        <Col md={2}>
                            <Button 
                                bsStyle="primary"
                                onClick={this.handleClick}> Search
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Wrapper>
      );
    }
  }
  
export default connect(
    state => state.topHeadlines,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ItemSearch);
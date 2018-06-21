import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Grid, Row } from 'react-bootstrap';
import BlockWrapper from './BlockWrapper';
import NewsItem from './NewsItem';
import { actionCreators } from '../store/TopHeadlines';

import './Home.css';

class Home extends Component {
    componentWillMount() {
        const newsCategory = this.props.match.url.split('/')[1]
        this.props.requestTopHeadlines(newsCategory ? newsCategory : 'general');
    }
    
    //componentWillReceiveProps(nextProps) {
    //    const newsCategory = nextProps.match.url.split('/')[1]
    //    this.props.requestTopHeadlines(newsCategory ? newsCategory : 'general');
    //}

    render() {
        return (
            <Grid className="mainbar fluid">
                <Row className="profile-wrap">
                    {
                        this.props.articles.map(topHeadline =>
                            <Col md={6}>
                                <BlockWrapper title={topHeadline.title}>
                                    <NewsItem {...topHeadline} />
                                </BlockWrapper>
                            </Col>
                        )
                    }
                </Row>
            </Grid>
        );
    }
};

export default connect(
    state => state.topHeadlines,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);

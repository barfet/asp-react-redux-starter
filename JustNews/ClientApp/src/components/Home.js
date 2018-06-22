import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Grid, Row } from 'react-bootstrap';
import BlockWrapper from './BlockWrapper';
import NewsItem from './NewsItem';
import { actionCreators } from '../store/TopHeadlines';
import ItemSearch from './ItemSearch';

import './Home.css';

class Home extends Component {
    
    componentWillMount() {
        const newsCategory = this.props.match.url.split('/')[1]
        this.props.requestTopHeadlines(newsCategory);
    }
    
    render() {
        return (
            <Grid className="mainbar fluid">
                <Row className="item-wrap">
                    <ItemSearch />
                </Row>
                <Row className="item-wrap">
                    {
                        this.props.articles.map(article =>
                            <Col md={6} key={article.url}>
                                <BlockWrapper title={article.title}>
                                    <NewsItem {...article} />
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

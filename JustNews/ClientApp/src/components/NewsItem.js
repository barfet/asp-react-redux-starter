import * as React from 'react';
import ItemImage from './ItemImage';
import Wrapper from './Wrapper';

const NewsItem = (props) => (
    <Wrapper>
        <Wrapper>
            <ItemImage srcImg={props.urlToImage} />
        </Wrapper>
        <Wrapper className="">
            <p>{props.description}</p>
        </Wrapper>
    </Wrapper>
);

export default NewsItem;

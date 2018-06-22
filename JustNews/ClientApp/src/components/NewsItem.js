import * as React from 'react';
import ItemImage from './ItemImage';
import Wrapper from './Wrapper';

const NewsItem = (props) => (
    <Wrapper>
        <Wrapper>
            <ItemImage srcImg={props.urlToImage} />
        </Wrapper>
        <div className="item-description">
            {props.description}
        </div>
    </Wrapper>
);

export default NewsItem;

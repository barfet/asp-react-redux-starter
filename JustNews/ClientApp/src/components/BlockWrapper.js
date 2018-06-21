import * as React from 'react';
import './BlockWrapper.css';

const BlockWrapper = (props) => (
    <div className="block-wrap">
        <header className="news-title">
            <h3>
                {props.title}
            </h3>
        </header>
        <main>
            {props.children}
        </main>
    </div>
);

export default BlockWrapper;

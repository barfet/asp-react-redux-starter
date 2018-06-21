import * as React from 'react';
import * as companyLogo from './company-logo.png';

const ItemImage = (props) => {
    const styles = {
        img: {
            maxWidth: '100%',
            display: 'block'
    },
        block: {
            maxWidth: '600px'
        }
    };
    return (
        <div style={styles.block} className={props.itemClass}>
            <img style={styles.img} src={props.srcImg || companyLogo} alt="Logo" />
        </div>
    );
};

export default ItemImage;
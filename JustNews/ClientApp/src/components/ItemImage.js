import * as React from 'react';

const ItemImage = (props) => {
    const styles = {
        img: {
            maxWidth: '100%',
            display: 'block'
    },
        block: {
            maxWidth: '100%'
        }
    };
    return (
        <div style={styles.block} className={props.itemClass}>
            <img style={styles.img} src={props.srcImg} alt="Logo" />
        </div>
    );
};

export default ItemImage;
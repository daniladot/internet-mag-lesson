import React from 'react';
import styles from './MenuItem.module.scss'

function MenuItem(props) {
    return (
        <div className={styles.menuItem}>
            <img src={props.url} alt={props.itemName} />
            <p>{props.itemName}</p>
        </div>
    );
}

export default MenuItem;

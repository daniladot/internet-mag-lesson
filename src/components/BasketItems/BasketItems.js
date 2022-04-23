import React from "react";
import styles from './BasketItems.module.scss'

function BasketItems(props) {
    return (
        <div className={styles.BasketItems}>
            <p>{props.name}</p>
            <p>{props.count}</p>
            <p>{props.price * props.count}</p>
        </div>
    );
}

export default BasketItems;

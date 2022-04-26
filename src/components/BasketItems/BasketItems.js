import React from "react";
import styles from './BasketItems.module.scss'

function BasketItems(props) {
    return (
        <div className={styles.BasketItems}>
            <p className={styles.start}>{props.name}</p>
            <p>{props.count}</p>
            <p className={styles.end}>{props.price * props.count}<span className={styles.Rub}>&#8381;</span></p>
        </div>
    );
}

export default BasketItems;

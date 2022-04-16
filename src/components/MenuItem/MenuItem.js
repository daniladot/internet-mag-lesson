import React from "react";
import styles from "./MenuItem.module.scss"
import {Link} from "react-router-dom";

function MenuItem(props) {
    return (
        <Link to={`/${props.categoryName}`}>
            <div className={styles.menuItem}>
                <img src={props.url} alt={props.itemName}/>
                <p>{props.itemName}</p>
            </div>
        </Link>
    );
}

export default MenuItem;
